# Upgrade Tree Flowchart

```mermaid
flowchart TD
  START([Start])

  LH[Long Horse I-III+]
  MM[Molar Master I-III+]
  LD[Leg Day I-III+]
  CR[Crits R Us I-III+]
  UN[Use Ur Noodle I-III+]
  QS[Quad Stomachs I-II]

  WF[Wakanda Foragever I-II]
  LT[Lorax Tax I-II]
  CS[CUD STORM I-II]
  BR[Bless the Rains I]
  BG[Bungulate I]
  LE[Lamarckable Effort I]
  HM[HerbiMore I]

  START --> LH
  START --> MM
  START --> LD
  START --> CR
  START --> UN
  START --> QS

  LD --> WF
  CR --> WF
  LH --> WF
  UN --> WF

  MM --> LT
  CR --> LT

  QS --> CS
  CR --> CS

  MM --> BR
  UN --> BR

  QS --> BG
  LD --> BG

  UN --> LE
  LD --> LE

  QS --> HM
  LH --> HM
```

## Unlock conditions (current)

- **Wakanda Foragever**: `Leg Day I` + `Crits R Us I` + `Long Horse I` + `Use Ur Noodle I`
- **Lorax Tax**: `Molar Master III` + `Crits R Us III`
- **CUD STORM**: `Quad Stomachs II` + `Crits R Us III`
- **Bless the Rains**: `Molar Master III` + `Use Ur Noodle III`
- **Bungulate**: `Quad Stomachs II` + `Leg Day III`
- **Lamarckable Effort**: `Use Ur Noodle III` + `Leg Day III`
- **HerbiMore**: `Quad Stomachs II` + `Long Horse III`
