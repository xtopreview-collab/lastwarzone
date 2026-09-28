---
title: "Cơ Chế Chiến Đấu Last War — Công Thức Sát Thương & Hướng Dẫn Thực Chiến"
description: "Phân tích chi tiết hệ thống chiến đấu của Last War: công thức sát thương, tính toán EHP, tam giác khắc hệ, buff đội hình và xếp vị trí."
category: "combat"
order: 0
tags: ["combat", "formulas", "pvp", "mechanics"]
lastUpdated: "2026-09-28"
---

# Cơ Chế Chiến Đấu Last War — Hướng Dẫn Công Thức Toàn Tập

> Tất tần tật những gì bạn cần biết về cách sát thương hoạt động trong Last War: Survival Game.

Last War không công bố công thức chiến đấu — mọi thứ ở đây đều đến từ thử nghiệm của cộng đồng, phân tích hồi quy và kiểm chứng trong game. Đây là những con số thực sự quan trọng khi xây dựng đội hình (squad) của bạn.

## Công Thức Sát Thương

Công thức cốt lõi chi phối mọi sát thương trong Last War:

$$\text{Damage Taken} = \text{Base Damage} \times \frac{4000}{\text{Defense} + 4000}$$

**Diễn giải đơn giản:**
- Con số kỳ diệu là **4.000**. Ở mức chính xác 4.000 Phòng thủ (Defense), bạn nhận 50% sát thương.
- Ở mức 8.000 Phòng thủ, bạn nhận 33% sát thương.
- Ở mức 12.000 Phòng thủ, bạn nhận 25% sát thương.

**Điểm cốt lõi:** Phòng thủ mang lại *hiệu suất giảm dần* (diminishing returns) khi tính theo phần trăm giảm sát thương, nhưng mỗi điểm Phòng thủ đều có giá trị ngang nhau khi xét theo Máu Hiệu Quả (EHP - xem bên dưới). Đừng tin vào lầm tưởng "Phòng thủ vô dụng ở cuối game".

### Máu Hiệu Quả (EHP) — Chỉ Số Sinh Tồn Thực Sự

$$\text{EHP} = \text{Raw HP} \times \frac{\text{Defense} + 4000}{4000}$$

Đây là công thức thực sự cho bạn biết một tướng (hero) trâu bò đến mức nào. Mặc dù *phần trăm* sát thương bị chặn tăng chậm dần, nhưng *tổng sát thương tướng có thể gánh* lại tăng tuyến tính với Phòng thủ.

| Phòng thủ | Sát thương nhận vào | Hệ số EHP |
|---|---|---|
| 0 | 100% | 1.00x |
| 2,000 | 67% | 1.50x |
| 4,000 | 50% | 2.00x |
| 8,000 | 33% | 3.00x |
| 12,000 | 25% | 4.00x |
| 20,000 | 17% | 6.00x |

> 💡 **Mẹo (Pro tip):** Ở giai đoạn late game với 1,4M+ HP, stack Phòng thủ mang lại khả năng sinh tồn tốt hơn stack Máu thô. Mỗi 1 điểm Phòng thủ cộng thêm +0,025% Máu thô vào tổng máu hiệu quả của bạn.

---

## Tam Giác Khắc Hệ (Type Advantage Triangle)

Last War sử dụng hệ thống khắc chế kéo-búa-bao:

```
         🟢 TĂNG (TANK)
        ╱              ╲
    khắc              kỵ
       ╱                  ╲
🔴 TÊN LỬA (MISSILE) ◄─khắc── 🔵 MÁY BAY (AIRCRAFT)
```

- **Máy bay khắc Tăng** — Máy bay gây sát thương cộng thêm lên Tăng
- **Tăng khắc Tên lửa** — Tăng chống chịu và áp đảo Tên lửa
- **Tên lửa khắc Máy bay** — Tên lửa đánh chặn và tiêu diệt Máy bay

**Cơ chế:** Hệ có lợi thế sẽ gây **+20% sát thương** và nhận **-20% sát thương** khi đối đầu với hệ mà nó khắc chế. Trong thực chiến, điều này tạo ra chênh lệch khoảng 40% — đủ để bù đắp sự chênh lệch lớn về lực chiến (power).

---

## Buff Đồng Hệ (Squad Synergy Bonuses)

Sử dụng các tướng cùng hệ sẽ mang lại buff chỉ số khổng lồ:

| Đội hình | Buff HP/ATK/DEF |
|---|---|
| 3 cùng hệ | +5% |
| 3 cùng hệ + 2 cùng hệ (khác) | +10% |
| 4 cùng hệ | +15% |
| **5 cùng hệ (Đội hình thuần / Mono-squad)** | **+20%** |

**Đây là lý do tại sao đội hình thuần (mono-squad) thống trị meta.** Buff +20% cho cả ba chỉ số tương đương với khoảng **+44% tổng hiệu quả chiến đấu** so với đội hình hỗn hợp (rainbow squad). Một đội hình thuần 10M lực chiến sẽ đánh bại một đội hình hỗn hợp 13M lực chiến.

> ⚠️ **Tuyệt đối không trộn lẫn các hệ trong đội hình chính.** Năm tướng hạng trung cùng hệ sẽ thể hiện tốt hơn năm tướng ưu tú nhưng khác hệ. Đây là quy tắc quan trọng nhất trong Last War.

---

## Giảm Sát Thương (Damage Reduction - DR) và Giới Hạn Cứng 75%

Sau khi giảm trừ sát thương từ Phòng thủ được áp dụng, phần trăm Giảm Sát Thương (DR) sẽ được tính đến từ:
- Kỹ năng tướng (*Ironclad Barrier* của Murphy, *Bulwark Defense* của Williams)
- Đồ trang trí / Kiến trúc (God of Judgment, Tower of Victory)
- Nghiên cứu ở Tech Centre
- Nội tại trang bị (Gear)

**Tất cả các nguồn DR đều cộng dồn, nhưng có giới hạn cứng là 75%.** Khi bạn đạt tổng cộng 75% DR, bất kỳ chỉ số DR nào thêm vào đều hoàn toàn vô tác dụng. Hãy lên đồ (build) sao cho tối ưu xung quanh giới hạn này.

### Quy Trình Tính Sát Thương (Đầy đủ)

```
Sát thương gốc (Raw Damage)
  ↓
× Khắc hệ (±20%)
  ↓
× Giảm trừ từ Phòng thủ (4000 / [DEF + 4000])
  ↓
× (1 - % Giảm Sát Thương) [tối đa 75%]
  ↓
× Hệ số Chí mạng (nếu bạo kích, cơ bản là 150%)
  ↓
= Sát thương cuối cùng (Final Damage)
```

---

## Xếp Vị Trí Đội Hình (Formation Positioning)

Vị trí đặt tướng quan trọng hơn bạn nghĩ. Last War sử dụng **hệ thống mục tiêu đối xứng (mirrored targeting system)**:

```
ĐỘI HÌNH CỦA BẠN        ĐỘI HÌNH ĐỊCH
┌─────┬─────┐          ┌─────┬─────┐
│ V1  │ V3  │    vs    │ V1  │ V3  │
│H.Đầu│H.Sau│          │H.Đầu│H.Sau│
│Trái │Trái │          │Trái │Trái │
├─────┤     │          ├─────┤     │
│     │ V4  │          │     │ V4  │
│     │H.Sau│          │     │H.Sau│
│     │Giữa │          │     │Giữa │
├─────┤     │          ├─────┤     │
│ V2  │ V5  │          │ V2  │ V5  │
│H.Đầu│H.Sau│          │H.Đầu│H.Sau│
│Phải │Phải │          │Phải │Phải │
└─────┴─────┘          └─────┴─────┘
```

### Ưu Tiên Mục Tiêu

- **Vị trí 1 (Hàng Đầu-Trái)** gánh chịu ~60% tổng sát thương mở màn → Đặt tướng tank trâu nhất ở đây (Williams/Lucius)
- **Vị trí 2 (Hàng Đầu-Phải)** gánh chịu ~40% sát thương mở màn → Tank phụ (Murphy/Carlie)
- **Vị trí 4 (Hàng Sau-Giữa)** là mục tiêu bị nhắm đến CUỐI CÙNG → Vị trí an toàn nhất cho chủ lực / carry chính (Kimberly/DVA)
- **Vị trí 3 & 5 (Hàng Sau-Hai Bên)** → DPS phụ và Hỗ trợ (Marshall, Stetmann, Schuyler)

### Kỹ Năng Xuyên Tuyến Sau

Một số tướng bỏ qua thứ tự đội hình hoàn toàn:
- **Tesla** — Sét dây chuyền ưu tiên các mục tiêu hàng sau
- **Schuyler** — Gây choáng (Stun) đặc biệt nhắm vào carry hàng sau
- **Swift** — Kết liễu kẻ địch ít máu nhất bất kể vị trí
- **DVA** — Tia laser xuyên qua hàng đầu để bắn tới hàng sau

Đây là lý do tại sao sự sống còn của hàng tiền đạo lại vô cùng quan trọng — nếu tanker của bạn gục ngã trong 6-8 giây đầu trước khi carry kịp xả chiêu cuối (ult), bạn sẽ thua bất kể hàng sau của bạn mạnh đến đâu.

---

## Sát Thương Vật Lý vs Năng Lượng

Mỗi tướng chủ yếu gây ra một loại sát thương:

| Loại Sát Thương | Tướng | Cách Khắc Chế |
|---|---|---|
| **Vật lý (Physical)** | Morrison, Swift, McGregor, Mason, Fiona | Stack Áo giáp (Armor) + Phòng thủ Vật lý |
| **Năng lượng (Energy)** | Kimberly, DVA, Tesla, Stetmann, Schuyler | Stack Radar + Phòng thủ Năng lượng |

### Chuyên Gia Phòng Thủ Điển Hình

- **Murphy** → Giảm Sát Thương Vật Lý cho toàn đội
- **Lucius** → Giảm Sát Thương Năng Lượng cho toàn đội (-25% đến -40%)

Đó là lý do tại sao Lucius không thể thiếu cho đội hình Máy Bay — anh ta một mình khắc chế hoàn toàn lượng sát thương khổng lồ của Kimberly và Tesla team địch.

### Cột Trang Bị Phòng Thủ

- **Radar**: Máu (HP) + Phòng thủ Năng lượng + Giảm sát thương Chí mạng → Ưu tiên khi đối đầu với meta Năng lượng
- **Áo giáp (Armor)**: Máu (HP) + Phòng thủ Vật lý + Giảm sát thương Vật lý → Ưu tiên khi đối đầu với tướng sát thương Vật lý

---

## Chí Mạng (Critical) & Sát Thương Kỹ Năng (Skill Damage)

- **Sát thương Chí mạng Cơ bản:** 150% (Gấp 1.5 lần sát thương thường)
- **Tỷ lệ Chí mạng (Crit Rate)** và **Sát thương Chí mạng (Crit Damage)** tăng tiến từ trang bị, đồ trang trí, và nội tại của tướng
- **Nội tại Radar Thần thoại (Mythic Radar):** -30% Sát thương Chí mạng nhận vào — đây là lý do tại sao Radar Thần thoại là món đồ ưu tiên nâng cấp cao nhất trong game

> 💡 **Lưu ý ở giai đoạn Late-game:** Trong PvP cấp cao, nơi mọi người đều có Radar Thần thoại để stack Giảm Sát thương Chí mạng, **% Sát thương Kỹ năng** và **% Tấn công** thuần sẽ vượt trội hơn lối build Chí mạng. Chí mạng bị khắc chế; Sát thương Kỹ năng thì không.

---

## Tiến Trình Các Giai Đoạn Chiến Đấu

Một trận đấu điển hình diễn ra qua ba giai đoạn:

### Giai đoạn 1: Dồn Sát Thương Mở Màn (0-5 giây)
- Các đòn đánh thường (auto-attack) bắt đầu ngay lập tức
- Nước đi đầu tiên của Drone kích hoạt (khiên, buff)
- Các tướng tích lũy năng lượng/nộ (energy/rage)
- ~60% sát thương dồn vào tank Vị trí 1

### Giai đoạn 2: Xả Kỹ Năng (5-15 giây)
- Các tướng tung kỹ năng chiến thuật theo thứ tự tích lũy năng lượng
- Kimberly/DVA xả loạt tên lửa/laze
- Buff chí mạng/Tấn công của Marshall kích hoạt
- Schuyler cố gắng làm choáng hàng sau địch
- **Đây là lúc hầu hết các trận đấu được định đoạt**

### Giai đoạn 3: Dọn Dẹp (15+ giây)
- Tướng hàng tiền đạo bắt đầu tử trận
- Hàng sau phơi mình trước hỏa lực trực tiếp
- Swift kết liễu các mục tiêu thấp máu nhất
- Đội nào mất hàng tiền đạo trước thường sẽ thua

---

## TL;DR — Bảng Tóm Tắt Chiến Đấu Nhanh

| Khái Niệm | Quy Tắc |
|---|---|
| **Công thức sát thương** | Gốc × 4000/(DEF+4000) |
| **EHP** | HP × (DEF+4000)/4000 |
| **Khắc hệ** | ±20% sát thương |
| **Buff đội hình thuần** | +20% HP/ATK/DEF |
| **Giới hạn DR** | Tối đa 75% |
| **Vị trí 1** | Nhận 60% sát thương mở màn → tank chính |
| **Vị trí 4** | Bị nhắm đến cuối cùng → carry chính |
| **Chỉ số phòng thủ tốt nhất** | Radar Thần thoại (-30% sát thương chí mạng nhận vào) |
| **Ưu tiên Late-game** | Sát Thương Kỹ Năng > Sát Thương Chí Mạng |

---

## 📚 Nguồn & Tài Liệu Tham Khảo

Hướng dẫn này được tổng hợp từ nhiều nguồn cộng đồng và đã được kiểm chứng trong game:

- [LastWarVault — Combat Mechanics Guide](https://lastwarvault.com/guides/combat-mechanics)
- [Heaven Guardian — Hero & Gear Guide](https://heaven-guardian.com/last-war-survival-hero-tier-list)
- [Cpt Hedge — Strategy Tools & Calculators](https://cpt-hedge.com/)
- [Reddit r/LastWarMobileGame — Community Formula Testing](https://reddit.com/r/LastWarMobileGame)
- Đã được xác minh trong game tính đến Mùa 3 (Tháng 9/2026)

*LastWarZone là một trang tài nguyên do người hâm mộ tạo ra. Không liên kết với FunFly PTE. LTD.*
