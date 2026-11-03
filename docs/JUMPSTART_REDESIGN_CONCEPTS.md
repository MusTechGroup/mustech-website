# Jumpstart Page Redesign: Concepts Built on Award-Winning Sites

Status (2026-10-24): superseded. The founder did not pick Concept A, B, or C. The page shipped as a dark, space-themed "website within a website" (commit `dd4a6fd` on `main`, live at `/jumpstart`). Concepts A to C and their Gemini prompts below are kept for reference only. The section "What shipped and what to maintain" is the current record.

## What shipped and what to maintain

### The page, in order
Launch (hero), Demo ("A messy note"), Stack ("Your business, with independent teams reporting to you"), Standup ("Your business pulse, at your fingertips"), Crew (instructor), Dock (register). Each is a `Scene` in `src/app/jumpstart/page.tsx`.

### Rules that must hold
- **Mocks follow the real screens.** `src/components/JumpstartDevices.tsx` copies two real surfaces with invented business content, never MusTech content: the laptop copies the HQ dashboard (`mustech-admin/app/hq/page.tsx`: moss sidebar, cream page, one card per Decide or Input with option buttons and an answer box), and the phone copies the morning email (`render_*_email_html` in `mustech-hq/tools/hq.py`: metric ribbon, docket cards with an item ID, "Reply D-0021 yes"). When either real screen changes, update the mock in the same piece of work.
- **Example data is invented.** Roslan (contractor), Hakim (agency), and Daniel (coach) live in `src/lib/jumpstartExamples.ts`, with departments and installed counts taken from the calibration run on the matching test profile in `founder-course/jumpstart/uat/profiles.json`. If calibration output changes, refresh the counts and department names there. There is no personal trainer persona; "Coach" is an online fitness coach.
- **Switching business rebuilds everything.** `ExampleProvider` and `Rebuild` in `JumpstartExamples.tsx` clear the Demo, Stack, and Standup sections for 750ms, then rebuild them, so each business looks bespoke. New example-driven sections must sit inside `Rebuild`.
- **Pre-launch copy.** No cohort, launch date, customer, or result claims. Oxford comma in lists of three or more.
- **Header.** `JumpstartNav` keeps the MusTech logo in the same place as the site `Navbar`, with Portfolio, Jumpstart, Governance, Philosophy, and Privacy. It is a copy of the link list, so a change to the site navigation needs the same change there.
- **Public site rules apply.** Static export, no `supabaseAdmin`, no internal links. Pushing `main` deploys to Cloudflare Pages, so check the branch first.

### Moving parts
- `PageTransition.tsx`: View Transitions API. Entering or leaving `/jumpstart` reveals the new page through a 16-column grid of squares (dark, then yellow). It turns off smooth scrolling for the duration so the new page appears in place. Browsers without the API, and reduced-motion users, get a normal navigation.
- `Starfield.tsx`: fixed canvas star sphere behind every scene, ported from a Gemini sketch. Reduced motion gets a still frame.
- `Scene.tsx`: scroll-driven fade of each scene in place, with snap scrolling set in `globals.css` (`mandatory` only at 1024px wide and 800px tall or more).
- Logos in `public/jumpstart/logos/` (Antigravity, Claude Code, Codex). The Codex image had a white square and was made transparent by hand.

### Still open
- The lesson photo is the old `public/jumpstart/founder.jpg`. Swap in the photo of the founder teaching when it arrives.
- Never checked on a real phone: phone layout, the mobile menu, the star field's frame rate, and the square-reveal transition as it plays. Check these on a device.
- The Jumpstart to Portfolio slide was fixed by turning off smooth scrolling during the transition. If it still slides, the cause is Portfolio's own entrance.
- The two earlier review artifacts (`jumpstart-concepts.html`, `jumpstart-redesign.html`) are still published. Delete them if no longer wanted.
- This `docs/` folder is untracked and not pushed. Decide whether it belongs in the repo.

## Ground rules (from the founder, 2026-10-23)

- Jumpstart may leave the MusTech look entirely. It should feel like a different page.
- The MusTech navigation stays: the same `Navbar` component, the MusTech emblem, and the same links. Only the page below it changes.
- Graphics are the weak point on the current site. Custom graphics are made in Gemini, outside Antigravity, from the prompts at the bottom of this document.
- Pre-launch: no claims about a cohort, a launch date, customers, or results. Copy stays with what the course is.

## What the page has to say

One idea: **you do not get a tool, you get an organisation, and you stay in charge of it.**

Supporting facts (all already on the live page or in the founder course state of play):

- A short questionnaire decides which departments are installed and how deep each one goes.
- Each department has rules, skills, and a state of play, in the founder's own workspace.
- Every morning one standup arrives, sorted into Decide, Input, and Notify.
- The founder checks the work before it reaches customers.
- Works with Antigravity, Claude Code, and Codex. Nothing breaks if the subscription stops.
- Taught by Taufiq Rashid, from the system that runs MusTech Group.

## The references (what was actually checked)

Checked on awwwards.com, 2026-10-23. I read each site's Awwwards page (category, tools, palette, jury scores). I did not see the sites rendered: the heavy ones would not capture in my browser. So the notes on look and feel below come from those records, the tags, and the winners' known style, not from a walkthrough. Open each one yourself.

| Site | Studio | Awarded | Tags and tools on record | Palette on record |
|---|---|---|---|---|
| FORMAT | Obys with DES | Site of the Day, 19 Oct 2026, 7.59 | Culture and Education, Experimental, Typography, Transitions, Interaction Design. CSS, GSAP, Matter.js | 2 colours: black, white |
| Le Choeur des Pierres (Cartier) | makemepulse | Site of the Day, 20 Oct 2026, 7.51 | Luxury, Animation, WebGL. Animated scroll, "gouache reveal" | 2 colours: off-white, black |
| ESR Bespoke | NIGHTJAR | Site of the Day, 23 Oct 2026, 7.31 | Luxury, Big Background Images, Clean Footer Design | 2 colours: black, white |
| Messenger | abeto | Site of the Year 2025 | Illustrated 3D world (from awards listing) | not checked |

Pattern across all of them: two colours, one big idea per page, and the graphic is made by code or by one consistent art style, not by stock icons.

Practical note: the site is a static export on Cloudflare Pages. GSAP, Matter.js, and a small WebGL layer all work there. Each concept needs a mobile fallback and a reduced-motion fallback, and must keep the page fast.

---

## Concept A: Format (physics and typography, no illustration needed)

**Reference:** FORMAT by Obys and DES. Culture and Education, built on CSS, GSAP, and Matter.js. A page about design as a physical thing, with shapes and boundaries you can move.

**Idea for Jumpstart:** your organisation as blocks you can pick up. The headline is huge type on black. Below it, department blocks (Research, Operations, Communications, Finance, Customers, Content) fall under gravity into a frame labelled "you". The visitor drags them. A questionnaire strip changes the pile: answers add blocks, make some bigger (level 3), or remove them. The page proves "calibrated, not one-size-fits-all" by letting people feel it.

**Palette:** black, white, and Jumpstart yellow as the single accent (the lit block, the stamp, the underline).

**Type:** one very large, very tight grotesque or condensed face, plus a monospace for labels (the logo's "start").

**Graphics:** none from Gemini. The blocks and the type are the graphics. This avoids the weak-graphics problem.

**Scroll story:** hero type, then the block pit (physics), then the daily standup as three blocks that sort themselves into Decide, Input, and Notify, then instructor, then register.

**Risk:** physics must feel good on a phone. Fallback: a staged drop animation, no dragging.

## Concept B: Gouache (painted reveals on a clean page)

**Reference:** Cartier, Le Choeur des Pierres by makemepulse. WebGL, "gouache reveal", animated content scroll, off-white and black.

**Idea for Jumpstart:** a quiet white page where each department is revealed by a painted brush wipe over the text, in gouache illustration. Painterly images are something image tools do well, and a single consistent art style is what makes the page feel expensive. Each department gets one painted object (a desk, a bench, a window, a ledger, a door, a pen). The yellow of the Jumpstart logo is the only saturated colour that appears in every painting.

**Palette:** off-white `#fafafa`, black, one painted yellow, with the paintings carrying soft muted colour.

**Type:** an elegant high-contrast serif for headings, a clean sans for body. Calm, slow, expensive.

**Graphics:** six gouache paintings from Gemini (prompts below).

**Scroll story:** a single painted hero, then six departments revealed one at a time with a brush-mask transition, then the standup as a painted letter, then instructor, then register.

**Risk:** the WebGL mask effect is real engineering. Fallback: a CSS clip-path wipe.

## Concept C: Workshop at Dawn (stylised world)

**Reference:** Messenger by abeto, Site of the Year 2025, the benchmark for an illustrated world you move through by scrolling. Detail not checked.

**Idea for Jumpstart:** one small workshop at dawn. The camera moves through it as you scroll, and each room lights up as its department is explained. The questionnaire is a clipboard on the door that decides which rooms are lit.

**Palette and type:** dawn gradient (deep blue to peach to yellow) with moss green and the Jumpstart black for grounding. Soft serif headings, rounded sans body.

**Graphics:** one master scene plus lit versions and parallax layers from Gemini (prompts below).

**Risk:** the most dependent on illustration quality. Needs the master scene to be good before anything else is built.

---

## Recommendation

Build A first. It is the closest to what the award sites do (code-made graphics, two colours, one big idea), it needs no generated art, and the physics block pit is a demonstration of the product's idea, not decoration. B is the best second choice if you want a softer, premium feel. C is the most work and the biggest gamble.

---

## How to use the prompts

Concept A needs no prompts. Concepts B and C use Gemini.

1. Open Gemini (gemini.google.com) and choose image generation.
2. Attach the Jumpstart logo from `mustech-website/public/jumpstart/logo-trim.png` as a colour reference in the first message.
3. Paste the style anchor first. Keep the same chat for every asset in that concept so the style stays consistent.
4. Paste one asset prompt at a time. Ask for 3 variations and pick one.
5. Every prompt asks for a flat solid background so the image can be cut out afterwards, because Gemini cannot output true transparency. Every prompt also forbids any words in the image: text is set in code.
6. Save picks to `mustech-website/public/jumpstart/art/` with the file names given.

---

## Prompts: Concept B, Gouache

### Style anchor (paste first)

```
You are creating a set of paintings for a premium web page. Style: gouache on cream paper, painted by hand. Opaque matte flat colour with visible soft brush edges, slightly uneven fills, tiny paper grain, gentle imperfections. Simplified, graphic shapes in the manner of mid-century French illustration, calm and precise. Palette: warm off-white paper (#fafafa) background, ink black, one saturated yellow (#f5cb1d) that appears in every painting, and two or three muted supporting colours (sage green, dusty blue, clay red) chosen per painting. One single object per painting, centred, with generous empty space around it. Absolutely no text, letters, numbers, logos, or faces. Use the attached logo only as a reference for the black-and-yellow pairing; do not draw it. Confirm, then wait for the asset request.
```

### Asset: the six objects (`gouache-research.png`, `gouache-operations.png`, `gouache-comms.png`, `gouache-finance.png`, `gouache-customers.png`, `gouache-content.png`, 4:5)

```
Asset of the set. One gouache painting, 4:5 portrait, on a flat solid #fafafa background so it can be cut out. Single centred subject: [research = an open book with a magnifying glass resting on it / operations = a brass gear beside a wrench / communications = an open window with a paper plane flying out / finance = a ledger book with a small scale / customers = a front door ajar with a bell above it / content = a fountain pen with ink drawing a loop]. Include the yellow somewhere on the object. Same brush style, paper grain, and lighting as the previous paintings.
```

(Run six times, changing only the subject in brackets.)

### Asset: hero painting (`gouache-hero.png`, 16:9)

```
Asset of the set. One wide gouache painting, 16:9: a single lightning-bolt shaped crack of yellow light striking down onto a small black rounded-rectangle plate sitting on a plain wooden table, on a flat solid #fafafa background that fades to empty paper. Nothing written on the plate. Same hand-painted style as the set. Leave the left third of the frame empty for a headline.
```

---

## Prompts: Concept C, Messenger-style Workshop at Dawn

### Style anchor (paste first)

```
You are creating illustrations for an immersive scroll-driven web page. Visual language: a stylised miniature diorama, like a soft 3D-rendered toy world with hand-painted textures. A small timber-and-brick workshop at dawn. Smooth rounded shapes, matte clay-like materials, warm bounce light, gentle haze. Palette: pre-dawn deep blue (#1c2a4a) fading to peach (#f4b79a) and soft yellow (#f5cb1d) near the horizon, moss green (#233219) for foliage, near-black (#1a1a1a) for roofs and doors. No people or faces: the founder is implied by a lit window and a chair. Absolutely no text, letters, numbers, logos, signage, or watermarks. Use the attached logo only for its black-and-yellow colour pairing; do not draw it. Confirm, then wait for the asset request.
```

### Asset 1: master scene (`dawn-master.png`, 21:9)

```
Asset 1 of the set. A very wide establishing shot of the small workshop in a quiet street at pre-dawn, seen from slightly above and a little to the side, in the stylised miniature diorama look. The workshop has four visible parts: a research desk by a window, an operations workbench with tools, a communications window with an open shutter, and a ledger room with a green desk lamp. At this moment only the founder's window is lit warm yellow, every other room is dark. A thin line of peach light on the horizon. Leave the sky and the lower third of the frame calm and uncluttered for headline text. 21:9, high resolution.
```

### Asset 2: the same scene with each room lit (`dawn-lit-research.png`, `dawn-lit-operations.png`, `dawn-lit-comms.png`, `dawn-lit-finance.png`, `dawn-lit-all.png`)

```
Asset 2 of the set. Using the exact same scene, camera, and composition as the master image you just made, change only the lighting: now the [research desk / operations workbench / communications window / ledger room / all four rooms] are lit warm yellow from inside, with a soft glow spilling onto the street, and the sky is a little brighter peach. Everything else must stay identical so I can crossfade between the images. 21:9.
```

### Asset 3: sky and parallax layers (`dawn-sky.png`, `dawn-hills.png`, `dawn-foreground.png`, 21:9)

```
Asset 3 of the set. Three separate images in the same style, each on a flat solid #00ff00 background except the sky: (a) the dawn sky only, deep blue to peach to yellow, with a few soft clouds, no ground; (b) a band of distant rolling hills and a few tiny rooftops in muted blue-green, on flat #00ff00; (c) foreground leaves, a wooden fence, and a few stones in moss green and near-black, framing the bottom edge, on flat #00ff00. All 21:9, same palette and lighting.
```

### Asset 4: the paper plane (`dawn-plane.png`, square)

```
Asset 4 of the set. A single folded paper aeroplane, cream with a yellow edge, flying diagonally up and to the right, soft shadow beneath it, in the same stylised miniature look, on a flat solid #00ff00 background. No text. Square.
```

---

## After you pick

Tell me the concept (or a mix), and drop the generated images in `mustech-website/public/jumpstart/art/`. The build then goes into `src/app/jumpstart/page.tsx` with the existing `Navbar` and `Footer` untouched, the register form kept, and the metadata and course schema kept.

Open questions for the founder:

- Which concept, or which two to prototype side by side?
- Is a dark page acceptable under the MusTech navbar? The navbar already switches to a dark style over dark sections, so it is supported.
- Should the animated lightning logo stay in the hero, or does the new page use a still logo?
