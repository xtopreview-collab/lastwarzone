---
title: "Last War Combat Mechanics — Damage Formulas & Battle Guide"
description: "Complete breakdown of Last War's combat system: damage formulas, EHP calculations, type advantage triangle, squad synergy bonuses, and formation positioning."
category: "combat"
order: 0
tags: ["combat", "formulas", "pvp", "mechanics"]
lastUpdated: "2026-09-28"
---

# Last War Combat Mechanics — The Complete Formula Guide

> Everything you need to know about how damage actually works in Last War: Survival Game.

Last War doesn't publish its combat formulas — everything here comes from community testing, regression analysis, and in-game verification. These are the numbers that actually matter when building your squad.

## The Damage Formula

The core formula that governs all damage in Last War:

$$\text{Damage Taken} = \text{Base Damage} \times \frac{4000}{\text{Defense} + 4000}$$

**What this means in plain English:**
- The magic number is **4,000**. At exactly 4,000 Defense, you take 50% damage.
- At 8,000 Defense, you take 33% damage.
- At 12,000 Defense, you take 25% damage.

**The key insight:** Defense has *diminishing returns* on percentage reduction, but each point of Defense is equally valuable in terms of Effective HP (see below). Don't fall for the "Defense is useless late game" myth.

### Effective HP (EHP) — The Real Survivability Metric

$$\text{EHP} = \text{Raw HP} \times \frac{\text{Defense} + 4000}{4000}$$

This is the formula that actually tells you how tanky a hero is. While the *percentage* of damage blocked goes up slower and slower, the *total damage your hero can absorb* scales linearly with Defense.

| Defense | Damage Taken | EHP Multiplier |
|---|---|---|
| 0 | 100% | 1.00x |
| 2,000 | 67% | 1.50x |
| 4,000 | 50% | 2.00x |
| 8,000 | 33% | 3.00x |
| 12,000 | 25% | 4.00x |
| 20,000 | 17% | 6.00x |

> 💡 **Pro tip:** In late game with 1.4M+ HP, stacking Defense gives more survivability than stacking flat HP. Every 1 point of Defense adds +0.025% of your Raw HP to your effective health pool.

---

## Type Advantage Triangle

Last War uses a rock-paper-scissors counter system:

```
         🟢 TANK
        ╱        ╲
   beats          weak to
      ╱              ╲
🔴 MISSILE ◄─beats── 🔵 AIRCRAFT
```

- **Aircraft beats Tank** — Aircraft deal bonus damage to Tanks
- **Tank beats Missile** — Tanks resist and overwhelm Missiles
- **Missile beats Aircraft** — Missiles intercept and destroy Aircraft

**The mechanic:** The favored type deals **+20% damage** and takes **-20% damage** against the type it counters. In practice, this swings fights by roughly 40% — enough to overcome significant power differences.

---

## Squad Synergy Bonuses

Running heroes of the same type gives massive stat bonuses:

| Composition | HP/ATK/DEF Bonus |
|---|---|
| 3 same type | +5% |
| 3 same + 2 same (other) | +10% |
| 4 same type | +15% |
| **5 same type (mono-squad)** | **+20%** |

**This is why mono-squads dominate.** The +20% bonus to all three stats translates to roughly **+44% total combat effectiveness** compared to a rainbow squad. A 10M power mono-squad will beat a 13M power mixed squad.

> ⚠️ **Never mix types in your main squad.** Five mediocre heroes of the same type will outperform five elite heroes of different types. This is the single most important rule in Last War.

---

## Damage Reduction (DR) and the 75% Hard Cap

After Defense mitigation is applied, percentage-based Damage Reduction kicks in from:
- Hero skills (Murphy's *Ironclad Barrier*, Williams' *Bulwark Defense*)
- Decorations (God of Judgment, Tower of Victory)
- Tech Centre research
- Gear passives

**All DR sources stack, but there's a hard cap at 75%.** Once you hit 75% total DR, additional DR stats do absolutely nothing. Plan your builds around this cap.

### Damage Pipeline (Full)

```
Raw Damage
  ↓
× Type Advantage (±20%)
  ↓
× Defense Mitigation (4000 / [DEF + 4000])
  ↓
× (1 - Damage Reduction %) [capped at 75%]
  ↓
× Crit Multiplier (if crit, base 150%)
  ↓
= Final Damage
```

---

## Formation Positioning

Your hero placement matters more than you think. Last War uses a **mirrored targeting system**:

```
YOUR FORMATION          ENEMY FORMATION
┌─────┬─────┐          ┌─────┬─────┐
│ P1  │ P3  │    vs    │ P1  │ P3  │
│Front│Back │          │Front│Back │
│Left │Left │          │Left │Left │
├─────┤     │          ├─────┤     │
│     │ P4  │          │     │ P4  │
│     │Back │          │     │Back │
│     │Mid  │          │     │Mid  │
├─────┤     │          ├─────┤     │
│ P2  │ P5  │          │ P2  │ P5  │
│Front│Back │          │Front│Back │
│Right│Right│          │Right│Right│
└─────┴─────┘          └─────┴─────┘
```

### Targeting Priority

- **Position 1 (Front-Left)** absorbs ~60% of all opening damage → Put your tankiest hero here (Williams/Lucius)
- **Position 2 (Front-Right)** absorbs ~40% of opening damage → Second tank (Murphy/Carlie)
- **Position 4 (Back-Middle)** is targeted LAST → Safest spot for your main carry (Kimberly/DVA)
- **Positions 3 & 5 (Back-Flanks)** → Co-DPS and support (Marshall, Stetmann, Schuyler)

### Backline-Bypassing Skills

Some heroes ignore formation order entirely:
- **Tesla** — Chain lightning prioritizes backline targets
- **Schuyler** — Stun specifically targets backline carries
- **Swift** — Executes the lowest HP enemy regardless of position
- **DVA** — Laser pierces through frontline to hit backline

This is why frontline survival is so critical — if your tanks fold in the first 6-8 seconds before your carries can cycle their ults, you lose regardless of how strong your backline is.

---

## Physical vs Energy Damage

Every hero deals primarily one type:

| Damage Type | Heroes | Counter |
|---|---|---|
| **Physical** | Morrison, Swift, McGregor, Mason, Fiona | Stack Armor + Physical Defense |
| **Energy** | Kimberly, DVA, Tesla, Stetmann, Schuyler | Stack Radar + Energy Defense |

### Defensive Counter-Specialists

- **Murphy** → Squad-wide Physical Damage Reduction
- **Lucius** → Squad-wide Energy Damage Reduction (-25% to -40%)

This is why Lucius is essential for Aircraft squads — he single-handedly shuts down enemy Kimberly and Tesla damage.

### Gear Defensive Slots

- **Radar**: HP + Energy Defense + Crit Damage Reduction → Priority vs energy meta
- **Armor**: HP + Physical Defense + Physical DR → Priority vs physical attackers

---

## Critical & Skill Damage

- **Base Critical Damage:** 150% (1.5x normal damage)
- **Crit Rate** and **Crit Damage** scale from gear, decorations, and hero passives
- **Mythic Radar passive:** -30% incoming Crit Damage — this is why Mythic Radar is the highest priority gear piece in the game

> 💡 **Late-game insight:** In high-level PvP where everyone has Mythic Radars stacking Crit Damage Reduction, **Skill Damage %** and raw **Attack %** become superior to Crit builds. Crit gets countered; Skill Damage doesn't.

---

## Combat Phase Timeline

A typical battle plays out in three phases:

### Phase 1: Opening Burst (0-5 seconds)
- Auto-attacks begin immediately
- Drone Initial Move activates (shields, buffs)
- Heroes accumulate energy/rage
- ~60% of damage hits Position 1 tank

### Phase 2: Skill Cycle (5-15 seconds)
- Heroes trigger tactical skills in order of energy accumulation
- Kimberly/DVA rocket salvos fire
- Marshall's crit/ATK buff activates
- Schuyler stuns attempt on enemy backline
- **This is where most fights are decided**

### Phase 3: Cleanup (15+ seconds)
- Frontline heroes start dying
- Backline exposed to direct fire
- Swift executes lowest HP targets
- First team to lose frontline usually loses

---

## TL;DR — Quick Combat Cheat Sheet

| Concept | The Rule |
|---|---|
| **Damage formula** | Base × 4000/(DEF+4000) |
| **EHP** | HP × (DEF+4000)/4000 |
| **Type advantage** | ±20% damage |
| **Mono-squad bonus** | +20% HP/ATK/DEF |
| **DR cap** | 75% maximum |
| **Position 1** | Takes 60% opening damage → main tank |
| **Position 4** | Targeted last → main carry |
| **Best defensive stat** | Mythic Radar (-30% crit damage taken) |
| **Late-game priority** | Skill Damage > Crit Damage |

---

## 📚 Sources & References

This guide was compiled from multiple community resources and verified in-game:

- [LastWarVault — Combat Mechanics Guide](https://lastwarvault.com/guides/combat-mechanics)
- [Heaven Guardian — Hero & Gear Guide](https://heaven-guardian.com/last-war-survival-hero-tier-list)
- [Cpt Hedge — Strategy Tools & Calculators](https://cpt-hedge.com/)
- [Reddit r/LastWarMobileGame — Community Formula Testing](https://reddit.com/r/LastWarMobileGame)
- In-game verification as of Season 3 (September 2026)

*LastWarZone is a fan-made resource. Not affiliated with FunFly PTE. LTD.*
