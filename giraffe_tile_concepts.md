# Giraffe Tile Sprite Concept Art (from your matrix)

Legend:
- `0` = transparent / empty
- `1` = primary giraffe body color
- `2` = darker patch / spot color
- `3` = shadow tone (used in some concepts)
- `4` = highlight tone (used in some concepts)

## 1) Base Side-View (cleaned game-ready)
Use this as the default idle frame.

```json
[
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,2,1,1,2,1,1,1,2,1,1,1,2,1,1,0,0,0],
  [0,0,0,0,0,0,1,2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,2,1,1,2,1,1,1,2,1,1,2,1,1,2,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0],
  [0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0],
  [0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0],
  [0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0],
  [0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0],
  [0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0]
]
```

## 2) Walk Frame A (front legs forward)
Concept tweak: move leg silhouette to show stride.

```text
- Shift columns 22-23 legs up by 1 pixel.
- Add one extra `1` at row 19, col 22 for knee hint.
- Remove one `1` at row 24, col 7 to imply rear-leg lift.
```

## 3) Walk Frame B (rear legs forward)
Opposite stride for a 2-frame walk loop.

```text
- Shift columns 6-7 leg pair up by 1 pixel.
- Add one `1` at row 19, col 8 for knee hint.
- Remove one `1` at row 24, col 23 to imply front-leg lift.
```

## 4) Eating / Grazing Pose
Lower head and neck by ~2 tiles and forward by 1 tile.

```text
- Neck segment rows 0-11, cols 17-19 -> move down +2, right +1.
- Head cluster rows 1-5, cols 18-22 -> rotate downward shape:
  - add `1` at (6,22), (7,22)
  - remove `1` at (2,21), (3,21)
```

## 5) Rare Golden Giraffe Variant
Palette-only concept (same geometry):

```text
0 = transparent
1 = warm gold base (#E2B24A)
2 = deep caramel spots (#8A4E1F)
3 = belly/underside shadow (#6E3E17)
4 = horn + snout highlight (#F4D27A)
```

## 6) Armored Mount Variant (fantasy)
Add tack/armor accents while preserving silhouette.

```text
- Row 12 across body center: replace alternating `1` with `3` for harness strap.
- Add `4` pixels at shoulder and haunch points: (13,10), (13,18), (16,9), (16,19).
- Add banner pole at back: cols 6-7 rows 9-12 using `3` and `4` tip.
```

## Quick Tileset Pipeline Suggestion
1. Keep matrix at 25x25 for logic/collision consistency.
2. Export each frame as indexed PNG (palette size 5).
3. Build loops:
   - Idle: Base
   - Walk: Frame A <-> Frame B
   - Eat: Grazing pose with subtle neck bob
4. Use nearest-neighbor scaling x4 for crisp pixel style.
