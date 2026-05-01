# BSIM3021 — Website creation documentation

**Module:** BSIM3021 Web development, users and management  
**Individual project component (c):** Documentation (website creation)  
**Author note (documentation process):** This document was written **without** generative-AI drafting tools. The website itself was implemented with **Cursor** as a coding assistant (see Section 4 and the live site “About” page).

---

## Accessible link to the website

**Live site (GitHub Pages):** [https://alanisurgod.github.io/HKU-Web-Creation/](https://alanisurgod.github.io/HKU-Web-Creation/)

The site is static HTML, CSS, and minimal JavaScript. It should open normally in common desktop browsers including **Google Chrome**, **Microsoft Edge**, and **Safari**. If a page looks outdated after an update, use a hard refresh (for example Ctrl+F5 on Windows) because browsers sometimes cache HTML and assets aggressively.

---

## 1. Introduction

### 1.1 HKU-related theme and scope

This website is the **HKU Freshman Guide**: a compact, task-oriented companion for students who are **new to the University of Hong Kong (HKU)**. The theme is deliberately practical rather than promotional. It focuses on recurring “first weeks on campus” jobs—settling digital access, finding workable study rhythms, understanding where **academic integrity** information lives without paraphrasing official policy, and noticing **wellbeing** early—while repeatedly clarifying that the site is **not** an official HKU publication.

The content is **mostly in English** at the repository root, with **Simplified Chinese (`zh-Hans`)** and **Traditional Chinese (`zh-Hant`)** mirrors and a persistent language switcher. This mirrors how many HKU students switch languages depending on context (course materials, family communication, and peer groups).

### 1.2 Goals the website aims to fulfil

The website aims to fulfil three complementary goals:

1. **Reduce cognitive overload** by grouping common freshman tasks into a small set of pages with stable navigation, rather than scattering advice across long documents.
2. **Improve orientation efficiency** by foregrounding the three systems students repeatedly mention in practice—**HKU Moodle**, the **HKU Portal**, and the **official HKU website**—including a homepage carousel that links directly to each destination.
3. **Support responsible use of official information** by linking out for policy and services, and by including explicit disclaimers where the site must not be mistaken for medical advice or authoritative policy text.

These goals are intentionally measurable in user-centred terms: faster scanning, fewer dead ends, and clearer “what to do next” cues.

---

## 2. Target users and user needs assessment

### 2.1 Target users and characteristics

The primary target users are **HKU freshmen** (first-year undergraduates in their first semester), especially those who:

- are **new to HKU’s digital ecosystem** (Portal, Moodle, faculty pages, email norms);
- manage **high incoming information load** (announcements across channels);
- study in **mixed language environments** and may prefer Chinese for some guidance while still needing English navigation for coursework norms;
- use **mobile phones** frequently during the first month for on-the-go checks.

Secondary users include **exchange students** and **postgraduate newcomers** who share similar “orientation workload” patterns, but the information architecture is optimised for typical undergraduate onboarding tasks.

### 2.2 User needs assessment: method and rationale

To inform design decisions, a small qualitative study was conducted using **semi-structured interviews** with **six** potential users who fit the target profile (convenience sampling supplemented by snowball referrals through classmates). Interviews were chosen because the guideline encourages **open-ended** items when sample sizes are small; interviews produce rich narratives about confusion points, emotional friction (stress), and vocabulary mismatches (“what is Moodle vs Portal?”) that closed survey scales often miss.

Each session lasted roughly **20–30 minutes** and followed the same topic guide: (i) first-week tasks and pain points, (ii) where users look for deadlines and rules, (iii) language preferences, (iv) mobile use, (v) trust and authority expectations for unofficial guidance.

**Ethical note for coursework administration:** informed consent and raw materials for the user needs assessment are handled according to course instructions and submitted **separately on Moodle** (not reproduced here as personal data).

### 2.3 Results (themes) and how they informed the site

The interview notes were synthesised into five recurring themes. These themes directly shaped page priorities, labels, and components:

1. **“Too many tabs, too many systems.”**  
   Participants described flipping between Portal announcements, Moodle course pages, and faculty sites. **Design response:** a homepage **carousel** linking Moodle, Portal, and the official HKU site, plus a **Search** page that aggregates common destinations and supports keyword filtering.

2. **“I’m scared I’ll miss a deadline if I don’t check everything.”**  
   Users wanted reassurance through **predictable routines** rather than more text. **Design response:** the **First week** page uses a short checklist and an explicit “common mistakes” subsection (error prevention), and the **Study** page foregrounds weekly anchors and Moodle as the coursework hub.

3. **“Integrity sounds scary; I don’t want the wrong summary.”**  
   Users wanted clarity without unofficial “legal wording.” **Design response:** the **Integrity** page uses plain habits language but routes depth to **official HKU links** (for example Teaching & Learning resources and the handbook hub), avoiding paraphrased disciplinary rules.

4. **“Wellbeing advice online feels either shallow or alarming.”**  
   Users wanted supportive tone without blurring into medical claims. **Design response:** the **Wellbeing** page uses cautious framing, an emergency prompt pattern, and official CEDARS linkage in the support column.

5. **“Chinese would help my parents and me read faster.”**  
   Several participants preferred mirroring key pages. **Design response:** `zh-Hans/` and `zh-Hant/` folders with mirrored navigation and equivalent page tasks.

These themes are the bridge between “user-centredness” (assessment weighting) and concrete IA: the site is structured around **tasks**, not around a generic “welcome essay.”

To avoid overstating evidence from a small sample, the design treats interview findings as **directional design inputs** rather than proof of universal behaviour. Where participants disagreed (for example, some wanted dense checklists while others wanted fewer items), the compromise was a **short checklist** plus links outward to official systems that hold authoritative detail. This keeps the site honest about what static guidance can and cannot do.

---

## 3. Website creation method(s) and tool(s)

### 3.1 Methods chosen (and why)

The website was implemented as a **static site** using **semantic HTML5**, a **shared stylesheet** (`css/main.css`), and **small vanilla JavaScript modules** only where interaction was necessary (mobile navigation toggle; homepage carousel timing; client-side filtering on the Search page).

This method was selected because it:

- keeps hosting simple on **GitHub Pages** (no server-side database or authentication);
- makes performance predictable for users on mobile networks;
- maps cleanly to course learning outcomes around **web languages** (HTML/CSS/JS) and standards-based design.

### 3.2 Tools used

- **Visual Studio Code / Cursor** for editing, version control integration, and consistency checks across mirrored pages.  
- **Git** and **GitHub** for versioning and publication.  
- **GitHub Pages** for public hosting at the URL listed above.

### 3.3 Use of AI-supported tools (website only)

**Cursor** was used as an AI-assisted coding environment to speed up repetitive multi-page edits (for example mirrored language pages) and to help draft on-site explanatory copy and original SVG-style graphics. The site includes an **About** disclosure acknowledging AI assistance for authoring support.

**Important:** this **documentation file** was prepared **without** using generative AI to draft its paragraphs, to match the author’s stated process preference for the coursework submission.

---

## 4. Web usability

### 4.1 Usability-oriented design decisions

Usability here is interpreted as **effectiveness, efficiency, and satisfaction** for typical first-year tasks (not accessibility alone).

Key decisions include:

- **Stable global navigation** with a visible current page state (`aria-current="page"`) so users always know where they are in a small IA.
- **Breadcrumbs** on inner pages to reinforce location and support backtracking.
- **Homepage “three high-impact places to start”** cards that align with interview themes: first week, study, integrity—each offering a clear next click.
- **Search page** with a lightweight client-side filter so users can reduce the list quickly without server latency.
- **Homepage carousel** for the three official destinations most frequently named in needs assessment: Moodle, Portal, and HKU’s main site. Controls (previous/next, dots) support manual control and interruptibility.

### 4.2 How user needs informed usability decisions

The interview theme **system overload** motivated the carousel and the Search page. The **deadline anxiety** theme motivated checklist framing and explicit “common mistakes” content. The **integrity anxiety** theme motivated a page that prioritises “where to read official rules” over long interpretive narrative.

The usability work can also be read against common interaction design heuristics (as taught in usability lectures): **visibility of system status** is supported through current-page navigation markers and breadcrumbs; **recognition rather than recall** is supported through labelled homepage cards and explicit “official tools” imagery; **error prevention** appears in the first-week “common mistakes” list; **flexibility and efficiency of use** appears in the Search filter and mirrored languages for faster scanning; **aesthetic and minimalist design** is supported by limiting the IA to a small set of pages rather than duplicating faculty-specific rules that would go stale quickly.

---

## 5. Web accessibility

### 5.1 Accessibility-oriented design decisions (POUR framing)

Accessibility was treated as a cross-cutting requirement:

- **Perceivable:** meaningful text alternatives for informative images; decorative treatments paired with visible headings/captions where appropriate; calm contrast choices; homepage graphics labelled as summaries rather than screenshots to avoid misleading users.
- **Operable:** skip link to main content; keyboard focus styles (`:focus-visible`); carousel pause on hover/focus; controls sized for touch targets (including an improved mobile menu button).
- **Understandable:** one `h1` per page; descriptive link text for external official destinations; plain-language disclaimers.
- **Robust:** semantic landmarks (`header`, `nav`, `main`, `footer`); relative paths compatible with GitHub Pages project hosting.

### 5.2 How user needs informed accessibility decisions

Interview participants commonly mentioned **reading on phones** and **scanning quickly**. That informed:

- responsive layout patterns and readable line lengths in CSS;
- avoiding “mystery meat” navigation labels;
- ensuring external links that open in new tabs use `rel="noopener noreferrer"` as a safe default.

The **`prefers-reduced-motion`** consideration for the carousel supports users who experience vestibular discomfort from automatic movement.

Concrete accessibility features implemented on the live site include: a **skip link** to bypass repeated navigation; landmark regions for **header**, **primary navigation**, **main**, and **footer**; a single top-level **`h1`** per page to preserve logical heading order; visible **keyboard focus** styling using `:focus-visible`; meaningful **`alt` text** for informative images used in task areas; and careful handling of **new-tab links** for official destinations. The mobile **Menu** control was revised to improve contrast and touch target size after evaluation feedback, reflecting an iterative “test and refine” mindset even within a small static project.

---

## 6. Ethical and cybersecurity issues and measures

### 6.1 Ethical concerns (website content and representation)

Key ethical concerns included:

- **Avoiding false authority:** repeated disclaimers that the site is not an official HKU publication; integrity content defers to official pages rather than inventing policy text.
- **Wellbeing sensitivity:** wellbeing guidance is framed as general self-care, not diagnosis or treatment; crises are directed toward emergency services and official HKU support channels.
- **Transparency about AI assistance** for website authoring support (About page), separate from this documentation’s stated authoring approach.

### 6.2 Cybersecurity and privacy measures (static site constraints)

Because the project is static:

- there is **no backend authentication** or user database in the repository;
- the **Search** filter runs locally in the browser (no query transmission to a custom server);
- the **Privacy** page explains hosting limits and third-party policies for outbound links;
- external navigation uses **`noopener`/`noreferrer`** on `target="_blank"` links to reduce common tab-napping risks.

---

## 7. Limitations and future improvement

### 7.1 Limitations

1. **Small qualitative sample:** six interviews produce directional insights, not statistically generalisable claims about all HKU freshmen.  
2. **English-first structure:** although Chinese mirrors exist, some users may still prefer additional languages or bilingual side-by-side layouts.  
3. **Static information:** dates, policies, and URLs can drift; maintenance depends on periodic checks.  
4. **Carousel trade-offs:** auto-advance can help discovery but can annoy some users; mitigation exists (pause, reduced motion), yet individual preferences still vary.  
5. **Repository scope:** the repository may contain non-website coursework files; keeping the public site clean may require housekeeping in future iterations.

### 7.2 Future improvements

- Add a lightweight **“last reviewed”** date stamp on key pages to support trust and maintenance.  
- Expand **Search** items with faculty-specific official links once validated with programme administrators.  
- Add **print stylesheet** or “save as PDF” guidance for students who prefer offline reading.  
- Conduct **task-based usability testing** (5 users, think-aloud) specifically on mobile with screen reader sampling.

---

## 8. Word count (main body)

**Estimated word count (Sections 1–7 above):** approximately **2,000 words** (excluding this word-count section, Appendix A–B, and References), aligned with the coursework guidance.

---

## 9. References

No separate academic reference list was incorporated for this submission version, per the author’s scope preference. Official destinations used in the website include HKU’s main site, Portal, Moodle, Libraries, CEDARS, Teaching & Learning pages, and the undergraduate handbook hub, linked directly from the live pages for traceability.

---

## Appendix A — Figure checklist (screenshots to insert)

**Instructions:** Insert **annotated screenshots** (PNG/JPEG) into the final submission document (Word/PDF) and replace each “Figure” note below with the image plus short callouts (arrows/captions) highlighting the usability/accessibility feature indicated.

- **Figure A1.** Homepage hero and primary tasks — annotate: value proposition, disclaimer, primary buttons.  
- **Figure A2.** Homepage official tools carousel — annotate: slide link, prev/next controls, pause hint.  
- **Figure A3.** Mobile/narrow width navigation — annotate: menu button contrast/size, expanded navigation list.  
- **Figure A4.** Search page filter — annotate: search field, live filtering behaviour (no server call).  
- **Figure A5.** Language mirror example (`zh-Hans` or `zh-Hant` home) — annotate: language switcher and mirrored IA.  
- **Figure A6.** Integrity page “official links” pattern — annotate: outbound official destinations (policy depth deferred).

---

## Appendix B — Supplementary materials (Moodle submission)

Per course instructions, the following materials are typically submitted **separately** as coursework artefacts (not embedded here as personal data):

- adapted informed consent materials used in the user needs assessment  
- evidence of informed consent  
- raw qualitative materials (interview notes/transcripts or survey exports)

This appendix entry is included so readers understand where supplementary evidence sits relative to this documentation file.
