# Feature Prioritization — Crimean Tatar Heritage Canada

> Status: **draft recommendation.** Classifies candidate features by value, dependency, complexity, and risk. Priorities assume the content and permission blockers in `content-inventory.md` are the main constraint. Final priorities depend on stakeholder answers (audience priority, content readiness, budget, who maintains the site).

## Classification key

**Must have** (launch) · **Should have** (launch if content/time allow) · **Could have** (nice, low-risk) · **Later** (post-launch phase) · **Not recommended** (avoid, or needs strong justification).

Each feature notes: user value · organizational value · content dependency · technical complexity · accessibility concerns · performance concerns · recommended phase.

---

### Homepage cinematic hero — **Must have**
- **User value:** high — sets tone, orients newcomers. **Org value:** high — first impression, identity.
- **Content dependency:** 1–2 cleared, high-quality images + a concise verified headline/intro. **Complexity:** low–medium.
- **Accessibility:** must not trap focus or rely on motion; readable text over imagery (contrast); reduced-motion path. **Performance:** optimize hero image; avoid heavy video at launch.
- **Phase:** MVP (Phase 6). *Blocker: needs at least one cleared image + approved copy.*

### Event calendar / listing — **Must have**
- **User value:** high (community + attendees). **Org value:** high (most active program).
- **Content dependency:** real upcoming events with dates/locations. **Complexity:** medium (CMS model + list/detail).
- **Accessibility:** accessible date/list semantics; keyboard filters. **Performance:** light.
- **Phase:** MVP. *Blocker: event data.* Start as a simple list; calendar grid is "Could have".

### Event gallery — **Should have**
- **User value:** high (community life, shareable). **Org value:** high.
- **Content dependency:** **heavy** — permissions, captions, dates, consent (SRC-FB-01/02 pending). **Complexity:** medium.
- **Accessibility:** keyboard-navigable gallery, alt text per image. **Performance:** responsive images, lazy load.
- **Phase:** MVP **only if** at least one album is fully cleared; otherwise Phase 7. *Primary blocker of the whole project.*

### Historical timeline — **Should have / Later**
- **User value:** high (educational). **Org value:** high (heritage mission).
- **Content dependency:** **heavy** — every entry needs a source; sensitive periods need approval. **Complexity:** medium–high.
- **Accessibility:** timelines are hard to make accessible — needs keyboard/screen-reader-friendly pattern, not a mouse-only widget. **Performance:** medium.
- **Phase:** start as a simple sourced list in MVP History page; rich interactive timeline in Phase 7.

### Interactive cultural map ("Explore the Homeland") — **Later**
- **User value:** high (engaging). **Org value:** medium–high. **Content dependency:** place data + sourcing. **Complexity:** high.
- **Accessibility:** maps are a major a11y challenge (keyboard, screen reader, alternatives required). **Performance:** heavy (tiles/JS).
- **Phase:** Phase 7. Not for MVP.

### Oral-history audio archive — **Later**
- **User value:** high. **Org value:** high (community memory). **Content dependency:** recordings + consent + transcripts. **Complexity:** medium.
- **Accessibility:** transcripts + captions mandatory; accessible player. **Performance:** media hosting.
- **Phase:** Phase 7. Needs consent workflow first.

### Crimean Tatar phrase feature ("Learn a Phrase") — **Could have**
- **User value:** high with younger diaspora + learners. **Org value:** high (language mission). **Content dependency:** verified phrases + audio + correct orthography. **Complexity:** low–medium.
- **Accessibility:** audio controls + text; correct `lang`. **Performance:** light.
- **Phase:** small static version possible in MVP if a few verified phrases exist; richer version Phase 7.

### Cuisine / recipe archive — **Could have / Later**
- **User value:** medium–high (broadly appealing). **Org value:** medium. **Content dependency:** recipes + cultural notes + photos. **Complexity:** low–medium.
- **Phase:** a few featured dishes could sit in Heritage/Food at MVP; full archive Later.

### Music player — **Later**
- **User value:** medium. **Org value:** medium. **Content dependency:** music with clear rights (**licensing risk**). **Complexity:** medium.
- **Accessibility:** accessible controls, no autoplay. **Performance:** media weight.
- **Phase:** Later. Rights are a real hurdle.

### Books & translation library — **Must have (basic)**
- **User value:** high (core program). **Org value:** high. **Content dependency:** book list + covers + rights. **Complexity:** low–medium.
- **Phase:** MVP as a simple list/detail within "Films & Books". *Blocker: titles + cover rights.*

### Film & screening library — **Must have (basic)**
- **User value:** high (core program). **Org value:** high. **Content dependency:** film list + rights + screening dates. **Complexity:** medium.
- **Phase:** MVP as basic list/detail; richer catalog Later. *Blocker: rights + data.*

### Screening request form — **Should have**
- **User value:** high (partners). **Org value:** high (drives collaborations). **Content dependency:** monitored recipient + process. **Complexity:** low–medium (form + spam protection + email).
- **Accessibility:** accessible form, clear errors. **Performance:** light.
- **Phase:** MVP if a recipient/process is confirmed; else fast-follow.

### Volunteer form — **Should have**
- **User value:** medium–high. **Org value:** medium–high. **Content dependency:** roles + recipient. **Complexity:** low.
- **Phase:** MVP if roles/recipient confirmed; else Later.

### Donation integration — **Should have / Later**
- **User value:** medium. **Org value:** high (sustainability). **Content dependency:** **charitable status + platform + receipts** (legal). **Complexity:** medium (third-party).
- **Accessibility/Perf:** depends on processor; keep off critical path.
- **Phase:** MVP **only if** charity status + platform confirmed; otherwise a simple "Support us / contact" placeholder now, full donations Later. Keep clearly within CTHC identity, not political fundraising.

### Membership — **Later**
- **User value:** low–medium (niche). **Org value:** medium. **Content dependency:** membership program details. **Complexity:** medium–high (accounts/payments).
- **Phase:** Later. Only if a real program exists.

### Multilingual support — **Should have (architecture now, content later)**
- **User value:** high for community; **Org value:** high (language mission). **Content dependency:** translators + reviewed translations. **Complexity:** medium (i18n routing).
- **Accessibility:** `lang`/`hreflang`, accessible switcher. **Performance:** modest.
- **Phase:** **Build i18n-ready from the start** (no hardcoded copy), ship **English at launch**, add the next language when translations are ready. See `multilingual-editor`.

### Site search — **Later**
- **User value:** grows with content. **Org value:** medium. **Content dependency:** enough content to search. **Complexity:** medium.
- **Phase:** Later. Not worth it for a small MVP; use structured browse instead.

### Newsletter sign-up — **Could have**
- **User value:** medium (stay informed). **Org value:** high (audience building). **Content dependency:** a mailing tool + privacy handling. **Complexity:** low.
- **Accessibility:** simple accessible field. **Performance:** light (avoid heavy third-party scripts).
- **Phase:** MVP or fast-follow if the org has or wants a mailing list.

### Educational downloads — **Could have**
- **User value:** high for teachers/students. **Org value:** medium–high. **Content dependency:** actual resources with clear rights. **Complexity:** low.
- **Phase:** MVP if materials exist; else Later.

### Interactive tamga — **Not recommended (at launch)**
- **User value:** low–medium (novelty). **Org value:** medium (identity) **but cultural risk high.** **Content dependency:** approved tamga artwork + strict usage rules. **Complexity:** medium.
- **Cultural concern:** the tamga is a **protected symbol** — interactivity risks distortion/disrespect (see `CLAUDE.md`, `cultural-brand-director`). **Accessibility:** decorative interactivity rarely accessible.
- **Phase:** Not recommended now. Use approved static tamga respectfully; revisit only with explicit organizational approval.

### Animated ornament system — **Could have (restrained) / Later**
- **User value:** low–medium (atmosphere). **Org value:** medium (identity). **Content dependency:** **authentic, verified** ornament only. **Complexity:** medium.
- **Cultural concern:** must be genuine Crimean Tatar ornament, not invented or borrowed. **Accessibility/Perf:** reduced-motion, no permanent background motion, watch performance.
- **Phase:** subtle static motifs at MVP; tasteful animation Later, only if authentic and approved.

### Social-media integration — **Could have (links) / Not recommended (embeds)**
- **User value:** medium. **Org value:** medium. **Content dependency:** official accounts. **Complexity:** low (links) / medium (embeds).
- **Concern:** third-party embeds hurt **performance and privacy** and can pull in unmoderated content; also risks reintroducing unpermissioned Facebook material. **Accessibility:** embeds often inaccessible.
- **Phase:** simple **links** to official accounts at MVP; **avoid live embeds/feeds**.

---

## Recommended MVP feature set (subject to stakeholder confirmation)

**Must have:** homepage hero, "Who are the Crimean Tatars" overview, basic Events listing, basic Films & Books listings, About (with CACT distinction), Contact (form + details), i18n-ready architecture (English content).

**Should have (if content/recipients ready):** one cleared event gallery, screening-request form, volunteer form, newsletter sign-up, a simple sourced History page.

**Explicitly deferred:** interactive map, oral-history archive, music player, full timeline, membership, site search, donations (unless charity status confirmed), interactive tamga, animated ornament, social embeds.

The single largest determinant of MVP scope is **how much content is cleared and permissioned** — see `mvp-recommendation.md`.
