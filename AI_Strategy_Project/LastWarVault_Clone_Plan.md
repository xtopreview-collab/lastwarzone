# Kế Hoạch Clone Dự Án LastWarVault.com (Phiên Bản Tối Ưu Hóa Bởi ECC)

> **⚠️ HỆ THỐNG ECC ĐÃ KÍCH HOẠT (Everything Claude Code Framework)**
> Dựa trên phân tích bằng tư duy của một hệ thống đa tác vụ AI (Multi-Agent System), kế hoạch truyền thống 8 tuần đã bị loại bỏ. Dưới đây là Lộ trình Siêu Tốc (Accelerated Roadmap) sử dụng AI thay thế toàn bộ quy trình phát triển thủ công, rút ngắn thời gian xuống còn **1-2 tuần**.

---

## 1. PHÂN TÍCH QUY MÔ & SỐ LƯỢNG NỘI DUNG
Để clone toàn bộ **hơn 215 bài hướng dẫn chuyên sâu** và cơ sở dữ liệu từ LastWarVault, ECC sẽ không dùng sức người mà áp dụng **Data Pipeline Tự Động**:

### Hệ Thống Dữ Liệu (Collections) Cần Tự Động Hóa:
- **Hero Database:** ~50+ tướng (HP, Attack, Defense, Skills).
- **Gears & Exclusive Weapons Database:** Chỉ số cộng dồn của trang bị Mythic.
- **Content Articles (~150 bài theo Season):** Chuyển ngữ tự động 100%.

> **Chiến lược ECC:** Triển khai hàng loạt `Data Scraper Agents` chạy song song. Các Agent này sẽ đọc trang gốc, bóc tách dữ liệu và tự động sinh ra các file `.json` hoặc `.yaml` với cấu trúc Schema chuẩn hóa (TypeScript Interfaces) cho Astro.

---

## 2. KIẾN TRÚC KỸ THUẬT SIÊU TỐC (ECC Architecture)

Hệ thống sẽ giữ nguyên nền tảng **Astro + GitHub + Cloudflare** nhưng áp dụng các quy chuẩn kỹ thuật bậc cao:

- **Frontend UI (v0-style):** Kích hoạt kỹ năng `frontend-master-builder`. Dùng AI để sinh mã (Generate) toàn bộ giao diện UI bằng **React + TailwindCSS + Shadcn/UI** chỉ qua mô tả text.
- **State Management:** Dùng **Nano Stores** để chia sẻ trạng thái (State) giữa các máy tính (Calculators) tĩnh của Astro mà không làm nặng web.
- **Logic & Algorithms:** Sử dụng phương pháp **TDD (Test-Driven Development)** do AI tự viết. AI sẽ tự tạo bộ Test cho các công thức tính toán (Damage, Thời gian nâng cấp) trước, sau đó mới viết Code để đảm bảo chính xác 100%.

---

## 3. PHÂN TÍCH 6 MÁY TÍNH (CALCULATORS) & SQUAD BUILDER

Thay vì code tay từng giao diện, ECC phân rã thành các module để AI tự sinh (Auto-generate):

1. **Research Calculator & Tech Center Priority:** 
   - *Đầu vào:* Cấp độ hiện tại, Tốc độ nghiên cứu (%).
   - *Giải pháp AI:* Giao cho Agent 1 viết file `TechTree.json` và Agent 2 viết Component UI bằng React.
2. **Upgrade Planner & Unit X:** 
   - *Giải pháp AI:* Sinh form nhập liệu (Inputs) bằng Tailwind, gắn logic trừ lùi thời gian.
3. **Pack Optimiser:** 
   - *Giải pháp AI:* Crawl giá các Pack, tạo thuật toán sắp xếp (Sorting Algorithm) theo tỷ lệ P/P.
4. **Trái Tim Của Hệ Thống - SQUAD BUILDER:**
   - *Độ khó cao nhất:* Yêu cầu tính toán buff hệ (3-2, 4-1, 5 đồng hệ) và trang bị. 
   - *Giải pháp ECC:* Viết một hàm `calculateSquadPower(heroes, gears)` bằng TypeScript cực kỳ chặt chẽ, được kiểm duyệt chéo (Cross-review) bởi một Agent chuyên về Logic Toán Học.

---

## 4. LỘ TRÌNH THỰC THI BẰNG ECC (1-2 TUẦN)

### SPRINT 1: Thiết Lập Database & Giao Diện Cốt Lõi (Ngày 1-3)
- **[Auto]** Gọi 5 `Data Scraper Agents` đi quét toàn bộ thông số Tướng, Trang bị, Nâng cấp nhà chính từ web gốc và đóng gói thành file JSON.
- **[Auto]** Gọi `Frontend Agent` tạo cấu trúc Layout chung (Navbar, Footer, Sidebar, TOC) bằng Tailwind.

### SPRINT 2: Chế Tạo Calculators Bằng Prompt (Ngày 4-7)
- **[Auto]** Kích hoạt chế độ lập trình. Yêu cầu AI viết các Component React cho 6 Máy tính.
- **[Auto]** Ghép nối UI vào thuật toán tĩnh. Tích hợp Nano Stores.
- **[Auto]** Xây dựng Squad Builder kéo thả (Drag & Drop) thông minh.

### SPRINT 3: Mass Content Generation (Ngày 8-11)
- **[Auto]** Triển khai đồng thời 10 `Translation Agents` chạy song song (Parallel Execution) để dịch 150+ bài viết các Season.
- **[Auto]** Chạy Python Script tự động tải ảnh, nén ảnh (WebP) và map lại đường dẫn ảnh vào bài viết.

### SPRINT 4: Kiểm Duyệt & Tự Động Triển Khai (Ngày 12-14)
- **[Auto]** Gọi `QA Agent` (Kỹ sư kiểm thử) quét toàn bộ trang web để tìm lỗi hiển thị và lỗi chính tả.
- **[Auto]** Tối ưu hóa điểm số PageSpeed (Lighthouse), chèn JSON-LD, Sitemap.
- Đóng gói (Commit) và Đẩy lên Cloudflare (Push to Main). Mở Index Google.

---
*Bản kế hoạch đã được thiết lập lại bởi Antigravity (ECC Mode).*
