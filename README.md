# Midi Design System — Take Home Assessment

## Live Demo
[CodeSandbox link]

## Figma File
[Figma link]

## Components
- **Button** — 3 variants (primary, secondary, tertiary) with all states
- **SelectablePill** — toggleable pill component for symptom selection

## How I Used AI

### Button Component
I used Figma MCP connected to Claude Code to read the Button component directly from the Midi Figma file. Claude extracted all token values, variant structures, and states. I prompted it to generate a React component using CSS custom properties matching the exact Figma token names. I manually fixed the CSS variable naming — slashes in token names aren't valid in CSS, so I converted them to hyphens while preserving the token hierarchy.

### Selectable Pill
[Describe what you prompted, what Claude generated, what you changed]

### Symptom Card
[Describe how you composed the components together]

## What I Modified vs Accepted
[Be specific — what did Claude get wrong, what did you fix, what design decisions did you make yourself]