# Midi Design System — Take Home Assessment

## Live Demo
[View on Netlify](https://stupendous-elf-ddc428.netlify.app/)

## Figma File
[View Design File](https://www.figma.com/design/qpmGBwlGUHkG9jPSSI19jP/Copy-of-Mini-Design-System?node-id=24484-9226&t=5emvV4LTmaukZ88k-1)

## Components
- **Button** — 3 variants (primary, secondary, tertiary) with all states
- **SelectablePill** — toggleable pill component for symptom selection with default, hover, selected, and focus states
- **SymptomCard** — composed card using Button and SelectablePill, includes a CHECK-IN label, contextual copy, wrapping pill layout, full-width CTA, and a skip action

## How I Used AI

### Button
I set up Figma MCP connected to Claude Code so Claude could read the Midi design file directly. My initial prompt was:

> "Read this Figma component and generate a React Button component using token-based styling with CSS custom properties for all token values. Use the exact token names from the Figma file."

Claude pulled all the token data, variants, and states in one pass which was impressive. The issue I ran into was that the styles weren't rendering — I realized CSS custom properties don't support "/" in variable names, which is how Figma names its tokens. I prompted Claude to fix it:

> "Replace all CSS custom property names that contain "/" with "-" instead."

That fixed it while keeping the token hierarchy intact.

### Selectable Pill
Before touching code I designed the pill in Figma first, exploring a few different directions — different border radius styles, icon variations, and selected states. I landed on a clean full-radius pill with a checkmark for the selected state because it felt the most intentional and accessible. Once the design was solid I used the Figma link to generate the React component:

> "Read this Figma component and generate a React SelectablePill component using the same token system as the Button. Do not hardcode any values."

### Symptom Card
I composed the SymptomCard by hand using the Button and SelectablePill components. I explored a few card layouts in Figma before choosing the one with the CHECK-IN label and contextual copy — it felt closer to a real Midi product screen than the simpler variations.

## What I Modified vs Accepted
- **Accepted:** Token values, component structure, variant logic, state handling.
- **Modified:** CSS variable naming (slashes to hyphens for browser compatibility), selected state styling to better match the Figma design.
- **Designed myself:** The Selectable Pill component, the Symptom Card layout and copy, and the overall card direction after exploring multiple variations.

## Design Decisions

The Selectable Pill was the most interesting part of this exercise. The brief said to use the Button as a foundation, so I pulled the same token system — colors, spacing, border radius — but made deliberate choices to differentiate it as its own component. I went with a full pill radius instead of the Button's 6px radius because it reads more clearly as a toggleable tag rather than an action. The checkmark on selected was a conscious accessibility decision — it doesn't rely on color alone to communicate state, which matters for users with color vision differences.

For the Symptom Card I chose the layout with the CHECK-IN label and contextual copy because it felt the most grounded in a real clinical interaction. The copy "We'll use this to personalize your care plan" gives the user a reason to engage, which felt important for a healthcare context.