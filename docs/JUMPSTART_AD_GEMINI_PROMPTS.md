# "Make me a website" ad: prompts for Gemini (2026-11-10)

The founder: "I want it like an ad, and it actually works ... I am also happy for Gemini to generate if you can provide the prompt guidance. Let's ground it in how a website might actually look like."

## What is built

*   **The ad** at `/jumpstart/how-it-works` (`src/components/JumpstartHowItWorksPlayer.tsx`): about 52 seconds, nine beats. Nadia types "Make me a website for my tailoring business", approves the brief, and watches the wireframe become her site. She picks a look from three in her brand, answers the one gap it will not guess, and sees the checks run. The site then folds down to a phone, and her address goes live after her own click on Publish. It ends with a chat order arriving from the site.
*   **The site is real**: `/jumpstart/how-it-works/example` (`src/components/jumpstart/NadiaSite.tsx`). It is the same markup the ad shows, responsive, and its buttons work. It is kept out of search because the business is illustrative.
*   **One clock drives every frame**, so the ad can be screen-recorded to an MP4 for socials or WhatsApp with no extra work.

The photos are the only placeholders: a songket pattern and a drawn dress form. Gemini can make the real ones.

## What Gemini should and should not make

*   **Photos: yes.** The site's hero, three style cards, and one studio shot. These lift the ad most.
*   **Video clips: only as bookends.** Veo makes clips of about 8 seconds and garbles on-screen text, so it must never draw the product's screens. Those stay as our animation, which is accurate. Two silent clips, one to open and one to close, can be cut around the screen-recorded ad.

## Shared style (paste with every prompt)

> Editorial photography for a small made-to-measure tailoring studio in Singapore. Warm natural window light, soft shadows, shallow depth of field, 50mm lens look. Colours: deep plum (#6e1f45), antique gold thread (#c49a3c), and warm cream (#f6efe4), with real fabric texture. Calm, premium, and real, not glossy stock. No text, no lettering, no logos, no watermarks, no brand names. Clothing is modest and respectful. Hands look natural. One person at most.

## Photo prompts (Gemini app, image generation)

Save each as WebP in `mustech-website/public/jumpstart/nadia/` with the exact file name. Then set `HAS_PHOTOS = true` in `src/components/jumpstart/NadiaSite.tsx`, or tell Claude the files are there.

| # | File | Shape | Prompt (after the shared style) |
|---|---|---|---|
| 1 | `hero.webp` | 4:3, at least 1600 × 1200 | A plum kebaya with fine gold embroidery on a tailor's dress form, in a sunlit shophouse studio. A tape measure hangs over the form's shoulder. Behind it, softly out of focus: bolts of fabric on wooden shelves. |
| 2 | `style-kebaya.webp` | 4:3, at least 1200 × 900 | Close-up of a Nyonya kebaya's hand-embroidered front panel in cream voile with plum and gold floral needlework, laid flat on a cutting table beside brass pins. |
| 3 | `style-kurung.webp` | 4:3, at least 1200 × 900 | A soft dusty-rose baju kurung on a wooden hanger against a cream wall, the fabric falling in gentle folds, one gold-thread hem detail catching the light. |
| 4 | `style-family.webp` | 4:3, at least 1200 × 900 | Three folded garments in matching plum fabric (a baju kurung, a child's baju kurung, and a baju Melayu), stacked on a table with a gold samping folded beside them. No people. |
| 5 | `studio.webp` (spare) | 16:9, at least 1920 × 1080 | A tailor in her thirties wearing a hijab, seen from the side, pinning the hem of a garment on a dress form, focused and calm. Her face is partly turned away. |

Check each before saving: no lettering anywhere, fabric looks real, no extra fingers, and nothing that looks like a real shop's sign.

## Video bookends (Gemini app, Veo, optional)

Both are 16:9, about 8 seconds, silent, with no text on screen. Add them before and after the screen-recorded ad in any editor.

**Opener.**

> Shared style, as video. Evening in a small tailoring studio. A woman in her thirties wearing a hijab sits at a wooden table beside a sewing machine. Her phone lights up again and again with message notifications; she glances at it, sighs softly, then opens her laptop and starts typing. Slow push-in. The laptop screen faces away from the camera, so no screen content is visible.

**Closer.**

> Shared style, as video. Daytime, a bright train carriage. A young woman in a pastel baju kurung scrolls her phone, smiles, and taps once. Cut to the studio: the tailor's phone on the table buzzes with a new message; she looks up and smiles. The phone screens face away from the camera, so no screen content is visible.

## Prompt for Gemini (paste into the Gemini app)

> I am making a short product ad for AI Jumpstart, in which a tailor named Nadia (illustrative, not a real person or shop) asks her AI for a website. I need photos for her example site. Use this style for every image: [paste the shared style]. Make these one at a time, each as its own image, in the shape given: [paste rows 1 to 4 from the photo table, with their shapes]. No text, logos, or real shop names anywhere. After each one, tell me if anything looks off (hands, fabric, lettering) and offer to redo it.
