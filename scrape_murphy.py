import requests, os

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
BASE = r"C:\Users\RioPC\AppData\Local\FunFly\Last War-Survival Game\lastwarzone\public\images\heroes"

# Murphy portrait from heaven-guardian
urls = [
    ("https://heaven-guardian.com/wp-content/uploads/2026/03/Last-War-Murphy.webp", "murphy-portrait.webp"),
    ("https://heaven-guardian.com/wp-content/uploads/2026/03/Last-War-Survival-Murphy.webp", "murphy-portrait.webp"),
    ("https://heaven-guardian.com/wp-content/uploads/2026/03/Last-War-Williams.webp", "williams-portrait.webp"),
    ("https://heaven-guardian.com/wp-content/uploads/2026/03/Last-War-Survival-Williams.webp", "williams-portrait.webp"),
]

for url, fname in urls:
    dest = os.path.join(BASE, fname)
    if os.path.exists(dest):
        print(f"EXISTS: {fname}")
        continue
    try:
        r = requests.get(url, headers=HEADERS, timeout=10)
        if r.status_code == 200 and len(r.content) > 1000:
            with open(dest, "wb") as f:
                f.write(r.content)
            print(f"OK [{len(r.content)//1024}KB] {fname} <- {url}")
        else:
            print(f"SKIP [{r.status_code}] {url}")
    except Exception as e:
        print(f"ERR: {e}")
