---
name: Opulent Vault
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#909097'
  outline-variant: '#45464c'
  surface-tint: '#c0c6db'
  primary: '#c0c6db'
  on-primary: '#293041'
  primary-container: '#0b1221'
  on-primary-container: '#777d90'
  inverse-primary: '#575e70'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c7c7ba'
  on-tertiary: '#2f3128'
  tertiary-container: '#11130b'
  on-tertiary-container: '#7d7e72'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce2f8'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#151b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e3e3d5'
  tertiary-fixed-dim: '#c7c7ba'
  on-tertiary-fixed: '#1b1c14'
  on-tertiary-fixed-variant: '#46483d'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
---

## Brand & Style

The design system is engineered to evoke the atmosphere of a multi-generational private members' club—exclusive, quiet, and profoundly authoritative. The brand personality is "The Discerning Guardian," balancing heritage-inspired aesthetics with the seamless efficiency of a modern high-end concierge.

The visual style is **Contemporary Luxury Editorial**, blending high-contrast classical typography with a minimalist, structured layout. The emotional goal is to provide a sense of "belonging to the elite" while ensuring the interface remains a silent, high-performance tool for the world's most demanding users.

Key design pillars:
- **Quiet Luxury:** Avoiding excessive ornamentation in favor of perfect proportions and superior materials (represented by color and texture).
- **The Golden Ratio:** Heavy reliance on whitespace to convey value; the UI never feels crowded or hurried.
- **Micro-interactions:** Every transition must feel deliberate and weighted, moving with a "soft-close" luxury door dampened feel.

## Colors

This design system utilizes a sophisticated, high-contrast palette that avoids pure black to maintain a softer, more expensive appearance.

- **Primary (Midnight Navy - #0B1221):** The foundation of the experience. It serves as the deep background for the "vault" aesthetic, providing more depth than standard black.
- **Secondary (Champagne Gold - #D4AF37):** Used sparingly for call-to-actions, the "Verified" badge, and premium highlights. It represents excellence and prestige.
- **Tertiary (Ivory - #FFFFF0):** The primary text color for readability against dark backgrounds, offering a warmer, more organic feel than pure white.
- **Neutral (Soft Stone - #E5E5E5):** Used for secondary text, borders, and UI skeletons.
- **Surface (Charcoal - #1F1F1F):** A slightly elevated dark tone used for cards and containers to create depth within the dark mode environment.

## Typography

The typography strategy relies on the tension between the classic, high-contrast **Playfair Display** and the sharp, technical precision of **Hanken Grotesk**.

- **Headlines:** Use Playfair Display for all display text and titles. It should be typeset with tight letter spacing to emphasize its editorial heritage.
- **Body & Interface:** Hanken Grotesk is the utilitarian workhorse. It provides a contemporary contrast that ensures the app feels like a modern platform rather than a dusty archive.
- **Uppercase Labels:** Small labels, category tags, and the "Verified" status should always be in uppercase Hanken Grotesk with generous letter spacing to evoke the feeling of a luxury watch face or a high-end fashion label.

## Layout & Spacing

This design system follows a **Fluid Editorial Grid**. The layout uses significant vertical spacing to allow content to "breathe," emphasizing the premium nature of the service.

- **Desktop:** A 12-column grid with wide margins (80px) to center the focus. Large sections are separated by 120px gaps.
- **Mobile:** A 4-column grid with 20px margins. Content is primarily single-stack to maintain legibility and focus.
- **Visual Rhythm:** Spacing is strictly based on 8px increments. Use 64px or 80px of internal padding for primary content blocks to reinforce the feeling of "generous space."

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than traditional drop shadows.

- **Background:** The base layer is Midnight Navy (#0B1221).
- **Surfaces:** Floating cards or modals use Charcoal (#1F1F1F) with a very thin (0.5px) border in Soft Stone (#E5E5E5) at 20% opacity.
- **Shadows:** When shadows are necessary for high-level modals, use a very large, soft ambient shadow with a navy tint (Blur: 40px, Opacity: 40%, Color: #05080F).
- **Glassmorphism:** Navigation bars use a backdrop blur (20px) with 80% opacity of the Midnight Navy color to maintain context during scroll.

## Shapes

To maintain an authoritative and architectural feel, this design system uses **Sharp (0px)** corners for all primary containers, buttons, and input fields. 

Rounded corners are strictly reserved for:
1. **The "Verified by OPV" Badge:** A circular seal or gold-stamped wax-style icon.
2. **Profile Avatars:** Circular to humanize the concierge agents.
3. **Toggle Switches:** Pill-shaped for functional clarity.

The dominance of sharp edges communicates precision, stability, and a high-end bespoke aesthetic.

## Components

### Buttons
- **Primary:** Champagne Gold background, Midnight Navy text. Sharp corners. No shadow.
- **Secondary:** Transparent background, Ivory text, 1px Ivory border.
- **Hover State:** Subtle increase in letter spacing and a 5% lighten of the background color.

### The "Verified by OPV" Badge
A circular component with a #D4AF37 (Gold) 1px border. Inside, the "OPV" monogram in Hanken Grotesk. It should appear next to high-value assets and verified service providers as a stamp of absolute trust.

### Input Fields
Minimalist design: A single 1px Soft Stone line at the bottom of the field. The label floats above in small-caps Hanken Grotesk. When focused, the line turns Champagne Gold.

### Cards
Cards do not have shadows. They are defined by their #1F1F1F background and a 0.5px border. Full-bleed photography should be used at the top of cards, with text content given generous internal padding (32px).

### Lists
Lists are separated by thin, low-opacity Ivory dividers. Interaction on list items is a simple background color shift to a slightly lighter Navy or a subtle slide-in of a Gold chevron.

### Navigation
A top-fixed bar with the OPV logo centered. Navigation links are in Hanken Grotesk Small-Caps. On mobile, the menu transition is a full-screen Ivory overlay that fades in with refined ease-out motion.