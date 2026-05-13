# Empire Under Pressure — Student Simulator UI Kit

The simulator is the student's primary surface: kingdom dashboard, edict drafting, diplomacy, treasury, war room, and turn-end ceremony.

## Files

- `index.html` — interactive click-thru with screen switcher
- `Chrome.jsx` — top bar + left rail (shared shell)
- `KingdomDashboard.jsx` — main realm overview
- `EdictScreen.jsx` — decision drafting with consequence preview
- `DiplomacyScreen.jsx` — treaty list + private channel
- `WarRoom.jsx` — military planning
- `Treasury.jsx` — coffers + ledger
- `TurnEnd.jsx` — cycle-advance ceremony
- `primitives.jsx` — Card, Chip, Button, Resource, etc.

## Patterns
- All screens use the shared imperial top chrome (umber bar) and a left rail.
- Cards are parchment-2 on parchment-1 page, with letterpress shadows and gold double-rules at section boundaries.
- Resource counts are JetBrains Mono; titles are Cinzel uppercase.
- The cycle indicator on the top chrome ticks down — turn-end is a ceremonial moment, not a click-and-forget button.
