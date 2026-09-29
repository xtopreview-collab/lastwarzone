# ECC MASTER BLUEPRINT: CHIẾN LƯỢC CLONE LASTWARVAULT

**Tài liệu Kỹ thuật Khung (Technical Specification)**
Tài liệu này không chỉ là kế hoạch, mà là **Bản vẽ thi công (Blueprint)** chỉ định chính xác cấu trúc dữ liệu, thuật toán và nhiệm vụ cho từng AI Agent trong hệ thống ECC để clone dự án LastWarVault.com thành LastWarZone.com.

---

## PHẦN 1: KIẾN TRÚC HỆ THỐNG VÀ CƠ SỞ DỮ LIỆU (DATABASE)

Trái tim của dự án không nằm ở giao diện, mà ở **Dữ liệu**. Thay vì hardcode từng bài viết, hệ thống sẽ sử dụng kiến trúc CMS-less (Không cần Backend), lưu trữ toàn bộ dữ liệu dưới dạng JSON Collections.

### 1. Cấu trúc Schema (Sẽ giao cho Data Agent cào và khởi tạo)
Hệ thống cần 3 file JSON lõi đặt tại `src/data/`:

**A. `heroes.json` (Dữ liệu Tướng)**
```typescript
interface Hero {
  id: string; // ex: "kimberly"
  name: string;
  rarity: "UR" | "SSR" | "SR";
  type: "Tank" | "Aircraft" | "Missile";
  position: "Front" | "Back";
  stats: {
    hpBase: number;
    attackBase: number;
    defenseBase: number;
  };
  skills: Array<{ name: string; description: string; multiplier: number }>;
  exclusiveWeapon?: { name: string; bonuses: any };
}
```

**B. `buildings.json` (Chi phí & Thời gian nâng cấp)**
- Lưu trữ công thức thời gian cơ sở và tài nguyên (Food, Iron, Coin, Ore) từ cấp 1 đến 35.

**C. `tech_tree.json` (Cây công nghệ)**
- Lưu trữ các Node nghiên cứu (Tên, Buff nhận được, Tài nguyên yêu cầu).

---

## PHẦN 2: THIẾT KẾ CÁC REACT COMPONENTS (CALCULATORS & TOOLS)

Kích hoạt kỹ năng `frontend-master-builder`. Các công cụ sẽ được viết bằng **React + Tailwind** và gắn vào Astro qua chỉ thị `client:load`.

### 1. Ứng dụng Squad Builder (Xếp đội hình)
- **Logic Cốt lõi:** Tính toán **Synergy Buff** (Buff hệ).
  - *Thuật toán:* Nếu đếm trong mảng `[slot1, slot2, slot3, slot4, slot5]` có:
    - 3 tướng cùng hệ (VD: 3 Tank): +5% HP, +5% Atk, +5% Def.
    - 3 tướng hệ A + 2 tướng hệ B: +10% all stats.
    - 4 tướng cùng hệ: +15% all stats.
    - 5 tướng cùng hệ: +20% all stats.
- **Component cần viết:** `<SquadSlot />`, `<HeroSelectorModal />`, `<StatsSummary />`.

### 2. Các Máy Tính (Calculators)
Sử dụng trạng thái dùng chung (State Management) qua **Nano Stores** để lưu lại cấp độ VIP hoặc buff của người chơi, áp dụng cho mọi máy tính.
- **Research Calculator:** `(BaseTime / (1 + ResearchSpeedBuff))`.
- **Unit X Calculator:** Công thức tính toán tổng số Huy Hiệu (Special Forces).
- **Pack Optimiser:** Thuật toán tính tỷ lệ `Total Value (USD) / Pack Price (USD)` hiển thị dưới dạng bảng xếp hạng (Leaderboard).

---

## PHẦN 3: BỐ TRÍ MẠNG LƯỚI ĐẶC VỤ AI (SUBAGENT SWARM)

Để tối ưu hóa tài nguyên API và tốc độ, dự án được chia cho 3 loại Agent chạy độc lập:

1. **Scraper Agents (Kỹ sư Dữ liệu):**
   - *Nhiệm vụ:* Cào bảng (HTML Tables) từ LastWarVault (Ví dụ bài Hero Tier List).
   - *Output:* Xuất ra file `heroes.json` hoàn chỉnh.
2. **Translation & Markdown Agents (Kỹ sư Nội dung):**
   - *Nhiệm vụ:* Đọc 150+ bài viết Markdown, giữ nguyên cấu trúc Frontmatter (Astro), dịch sang Tiếng Việt với văn phong Game thủ.
3. **Frontend React Agents (Kỹ sư Giao diện):**
   - *Nhiệm vụ:* Nhận yêu cầu "Tạo form máy tính có 4 ô input, giao diện Glassmorphism màu tối".
   - *Output:* Xuất file `.tsx` chuẩn Tailwind.

---

## PHẦN 4: TRÌNH TỰ THI CÔNG CHI TIẾT (LỆNH THỰC THI)

Dưới đây là các đầu mục công việc (Tickbox) để bạn có thể ra lệnh cho tôi chạy bất cứ lúc nào:

- [ ] **Task 1 (Data):** Khởi tạo `src/data/heroes.json`. Cào thông số cơ bản của 10 tướng phổ biến nhất làm mẫu.
- [ ] **Task 2 (UI):** Dựng Component `<HeroCard />` để hiển thị data từ JSON lên web.
- [ ] **Task 3 (Logic):** Code công cụ **Squad Builder** bản nháp (UI kéo thả và tính tổng Buff).
- [ ] **Task 4 (Scraping):** Viết Script Python tải hàng loạt ảnh chân dung tướng từ LastWarVault về `/public/images/`.
- [ ] **Task 5 (Content):** Spawn (Tạo) 3 Subagents dịch ngay 15 bài viết "Pre-Season 1".
- [ ] **Task 6 (Calculators):** Code công cụ **Research Calculator** bằng React và nhúng vào trang Astro.

*Tất cả lệnh trên đều đã sẵn sàng để thực thi. Hệ thống đang chờ tín hiệu kích hoạt Task đầu tiên từ bạn.*
