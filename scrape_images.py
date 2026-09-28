import requests, re, os, json

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
BASE_DIR = r"C:\Users\RioPC\AppData\Local\FunFly\Last War-Survival Game\lastwarzone\public\images"

# Step 1: Find real image URLs from multiple sources
image_sources = []

# Try LastWarVault
print("=== LastWarVault ===")
try:
    r = requests.get("https://lastwarvault.com/", headers=HEADERS, timeout=15)
    print(f"  Homepage: {r.status_code} ({len(r.text)} bytes)")
    
    # Find all image URLs
    imgs = re.findall(r'src="([^"]+\.(?:png|jpg|jpeg|webp|avif))"', r.text, re.IGNORECASE)
    print(f"  Images found: {len(imgs)}")
    for img in imgs[:10]:
        print(f"    {img}")
        image_sources.append(("heroes", img, "lastwarvault.com"))
except Exception as e:
    print(f"  Error: {e}")

# Try HeavenGuardian  
print("\n=== Heaven-Guardian ===")
try:
    r = requests.get("https://heaven-guardian.com/last-war-survival-hero-tier-list/", headers=HEADERS, timeout=15)
    print(f"  Tier List page: {r.status_code} ({len(r.text)} bytes)")
    
    imgs = re.findall(r'src="([^"]+\.(?:png|jpg|jpeg|webp|avif))"', r.text, re.IGNORECASE)
    print(f"  Images found: {len(imgs)}")
    for img in imgs[:10]:
        print(f"    {img}")
        image_sources.append(("heroes", img, "heaven-guardian.com"))
except Exception as e:
    print(f"  Error: {e}")

# Try AllClash
print("\n=== AllClash ===")
try:
    r = requests.get("https://allclash.com/last-war-survival-best-heroes-tier-list/", headers=HEADERS, timeout=15)
    print(f"  Page: {r.status_code} ({len(r.text)} bytes)")
    
    imgs = re.findall(r'src="([^"]+\.(?:png|jpg|jpeg|webp|avif))"', r.text, re.IGNORECASE)
    print(f"  Images found: {len(imgs)}")
    for img in imgs[:10]:
        print(f"    {img}")
        image_sources.append(("heroes", img, "allclash.com"))
except Exception as e:
    print(f"  Error: {e}")

# Download images
print("\n=== Downloading Images ===")
downloaded = []
seen = set()

for category, url, source in image_sources:
    if url in seen:
        continue
    seen.add(url)
    
    # Make absolute
    if url.startswith("//"):
        url = "https:" + url
    elif url.startswith("/"):
        if "lastwarvault" in source:
            url = "https://lastwarvault.com" + url
        elif "heaven" in source:
            url = "https://heaven-guardian.com" + url
        elif "allclash" in source:
            url = "https://allclash.com" + url
    
    # Skip junk
    skip = ["favicon", "logo", "1x1", "blank", "data:", "svg", "tracking", "ad-", 
            "pixel", "gravatar", "wp-emoji", "spinner", "loading", "s.w.org"]
    if any(s in url.lower() for s in skip):
        continue
    
    # Get filename
    fname = os.path.basename(url.split("?")[0])
    if len(fname) < 3:
        continue
    
    dest_dir = os.path.join(BASE_DIR, category)
    os.makedirs(dest_dir, exist_ok=True)
    dest = os.path.join(dest_dir, fname)
    
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        if r.status_code == 200 and len(r.content) > 2000:
            with open(dest, "wb") as f:
                f.write(r.content)
            size_kb = len(r.content) / 1024
            print(f"  OK [{size_kb:.0f}KB] {category}/{fname}")
            downloaded.append({"url": url, "category": category, "filename": fname, "size_kb": size_kb, "source": source})
        else:
            print(f"  SKIP [{r.status_code}|{len(r.content)}b] {fname}")
    except Exception as e:
        print(f"  ERR {fname}: {e}")
    
    if len(downloaded) >= 30:
        break

print(f"\n=== TOTAL: {len(downloaded)} images downloaded ===")

# Save manifest
manifest = r"C:\Users\RioPC\AppData\Local\FunFly\Last War-Survival Game\AI_Strategy_Project\GameDB\_research\image_manifest.md"
with open(manifest, "w", encoding="utf-8") as f:
    f.write(f"# Image Manifest\nTotal: {len(downloaded)}\n\n")
    for i, img in enumerate(downloaded, 1):
        f.write(f"{i}. **{img['category']}/{img['filename']}** ({img['size_kb']:.0f}KB) — {img['source']}\n")
