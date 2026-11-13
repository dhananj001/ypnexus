# YP Nexus Foundation: Implementation & Content Update Changelog

**Date:** November 13, 2026  
**Source Documents:**
- `Content/CONTENT ADDITIONS V04.docx` (Master Additions, Revisions & Asset Library)
- `Content/CONTENT ADDITIONS V03.docx` & `Content/CONTENT ADDITIONS V02.docx`
- `Content/Suggestion V01.docx`

---

## 1. Summary of Changes

All stakeholder suggestions, corrections, and additions from the Word documents in `/Content` have been implemented. In addition, all text from the embedded brochures, posters, and flyers has been extracted and integrated directly into the website components.

---

## 2. Image & Media Asset Extraction

A total of **65 media files (25.4 MB)** were extracted directly from the Word XML structure and organized into categorized directories:

- **Original Extraction:** `Content/extracted_images/V04/`
- **Organized Structure:** `Content/extracted_images_organized/`
- **Deployed Web Assets:** `frontend/public/images/content_assets/`

### Asset Categories
1. `01_website_screenshots_and_feedback/` (6 files): Client feedback screenshots with annotations.
2. `02_logos_and_branding/` (1 file): Official transparent PNG brand logo (`image19.png`).
3. `03_programs_banners/` (7 files): Illustrated graphics for *Balmitee*, *PND (Novice)*, *Paryay Juvenile*, *yPOLEN*, *WAI (Who Am I)*, and *NeRo*.
4. `04_turtle_media_materials/` (2 files): *High & Low Stories* publishing posters and *BAM (Bee Around Media) @ Turtle Talkies*.
5. `05_piselt_capacity_materials/` (15 files): Training modules, *Vartul FLM Service Center* posters, *Pro-Learn Companionship* brochures, and parenting guides.
6. `06_activity_photographs_section_a11/` (10 files): Candid photographs of learners engaged in outdoor and workshop activities.
7. `07_activity_photographs_section_f/` (9 files): High-res nature and farm activity photography.
8. `08_activity_photographs_section_g/` (15 files): Widescreen landscape and community documentary photographs (up to 2287×1286 px).

---

## 3. Extracted Image Content & Text Integration

As requested by the client documents, text content was read and extracted from the image assets:

### A. Balmitee (`balmitee_banner.jpeg` / `image2.jpeg`)
- **Age group:** 03 to 08 Years
- **Framework:** Fundamental Learning Methodology (FLM)
- **Key Tenets:** Multi or orbital language, physical major & minor growth & development, identifying capabilities, multi-medium freedom of expression, real-life experience, journey from misunderstood to understood, positioning of self within orbit.
- **Setup:** EcoTude open learning space, flock & solo field mentoring, library, yantralaya, specialized aids.

### B. Paryay Novice Dschool (`pnd_paryay_novice_dschool.jpeg` / `image3.jpeg`)
- **Age group:** 08 to 12 Years
- **Key Tenets:** Socialization with community, natural & human environment, scientific and curious approach towards life trades, four dimensions of learner, content interventions via life mediums, flexible schedule with individual mentoring.

### C. Paryay Juvenile Dschool (`paryay_juvenile_dschool.jpeg` / `image4.jpeg`)
- **Age group:** 12 to 20 Years
- **Key Tenets:** Multilingual, multi-board open learning sanctuary; preparing independently towards NIOS and State SSC/HSC boards.
- **Highlights:** Dedicated 1:6 mentor-to-learner ratio, character building, feral learning, professional tasks practice (LPTP & PPTP), self-study habits, laboratory and yantralaya access.

### D. yPOLEN (`ypolen_banner.jpeg` / `image5.jpeg`)
- **Target:** Undergraduate & Graduate support program for students of National & International Open Universities.
- **Domain:** Studies in Ecology, Learning, Expression & Technology.
- **Offerings:** Individual facilitation, group grafting sessions, distance learning support (Edify), Ground Reality Experiences (GRE: referrals & support), and TurtleB / PYPELiB media archives.

### E. WAI – Who Am I? (`wai_who_am_i_1.jpeg` & `wai_who_am_i_2.jpeg` / `image6`, `image7`)
- **Target:** Children ages 4 to 16 Years (75-day diagnostic module).
- **Inquiry:** "WHO AM I? WHERE AM I? WHAT AM I?"
- **4 Diagnostic Tracks:**
  1. *WAI 1:* Subject-wise status report across standards
  2. *WAI 2:* Standard-wise status report across subjects
  3. *WAI 3:* Skills & capabilities diagnostic report
  4. *WAI 4:* All standards & all subjects holistic audit
- **Inclusions:** Daily learner facilitation, 2 parent facilitation sessions, Turtle media library.

### F. NeRo (`nero_program_poster.jpg` / `image8.jpg`)
- **Target:** Intergenerational life learning for ages 2 to 100 years old (Live on-field or 1-on-1 remote mentoring).
- **3 Age Tiers:**
  - *O! NeRo (2–14 Yrs):* Screen-free hands-on maker activities using hands to make brains think.
  - *Yo! NeRo (15–40 Yrs):* Self-discovery, stress relief, building self-made products.
  - *oA! NeRo (41–60+ Yrs):* Productive daily engagement for homemakers, professionals, and grandparents.

### G. Vartul FLM Parent Inquiries (`image30`, `image31`, `image32`)
- Extracted real questions asked by parents and grandparents regarding open schooling, no homework, screen-free focus, child inquiry handling, and co-learning companionship. Integrated directly into the FAQ component.

---

## 4. Codebase Updates by Component

### 1. `frontend/src/components/Navbar.astro`
- **Logo Replacement:** Replaced the temporary green circle `✳` with the official transparent YP Nexus logo `<img src="/images/ypnexus-logo.png" />`.
- **Navigation Links Realigned:**
  - `Our Ethos` (`#about`)
  - `Pillars` (`#initiatives`)
  - `Our Programs` (`#programs`) — *Replaced standalone "Paryay Dschool"*
  - `Field Inquiries` (`#faq`)
- **Mobile Menu:** Synchronized with the updated link hierarchy.

### 2. `frontend/src/components/Hero.astro`
- **Authentic Hero Visuals:** Replaced stock hero photo with `/images/ypnexus-hero-desktop.jpg` (authentic photograph `image64.jpeg` showing learners sitting together on a Pune hillside study tour).
- **Hero Description:** Updated to match Document Section B.1:
  > *"Learning for life; beyond the boundaries of age, syllabus, gender, society & exams. An open learning sanctuary for children to develop independent capabilities for living realities."*
- **Primary CTA Updated:** Changed label from `"Explore Paryay Dschool"` to `"Explore LEARNING with YPNF"`, linking directly to `#programs`.
- **CRITICAL COMPLIANCE FIX:** Replaced `"NIOS Approved"` with **`"Towards Open Schooling"`** as requested by stakeholder note `3. Nios approved: (it is not) Towards open schooling.`
- **Bottom Pillar Tabs:** Expanded to all 4 official pillars:
  - `01 / Learning` (`#programs`)
  - `02 / PiSELT` (`#piselt`)
  - `03 / TurTle Media` (`#turtle-media`)
  - `04 / Community Habitats` (`#habitats`)
- **Mobile Bento View:** Synchronized text, badges, and CTAs.

### 3. `frontend/src/components/InitiativesGrid.astro`
- **Paryay Dschool Card:**
  - Tag changed to `"Flagship Alternative to School"`.
  - Subhead: `"Multilingual | Multi-board | Open | Learning Sanctuary"`.
  - Copy updated: `"Learning beyond boundaries of age, content, curriculum, geography or gender. Work is guided by experienced mentors at a 1:6 ratio, supporting learners towards open schooling..."`
  - Feature tags updated: `✓ 1:6 Dedicated Ratio`, `✓ Visits & Journeys`, `✓ Life Content Across Streams`, `✓ Towards Open Schooling`.
  - Visual: Integrated candid reading photo `image54.jpeg` (`ypnexus-paryay-mentoring.jpg`).
- **PiSELT Institute Card:**
  - Sub-brand noted: `(Name subject to change)`.
  - Tagline: `"Studies in Ecology, Learning & Tech"`.
  - Listed 8 official capacity domains: *Organisational Audits, Livelihood Strengthening, Tailored Research & Analytics, Meaningful Internships (14–35y), Skill Building, Usable Analytics, Ground Reality Experience, Pro-Learn Companionship*.
- **TurTle Media Card:**
  - Integrated publishing imprint: `"High & Low Stories"`.
  - Subhead: `"Films | Media | Publishing | Documentation"`.
  - Featured *BAM (Bee Around Media)* film appreciation and *Children's Multilingual Library (BAMS)*.
- **Community Habitats Card:**
  - Formally framed as Pillar 4 (`04 / Community Habitats`).
  - Showcases agro-ecology sanctuaries, living neighborhoods, and native soil protection with authentic field photo `image53.jpeg`.

### 4. `frontend/src/components/ProgramsContinuumSection.astro` (NEW COMPONENT)
- Created a dedicated section displaying the complete 6-tier learning continuum:
  1. **Balmitee (Ages 3–8)**
  2. **PND - Paryay Novice Dschool (Ages 8–12)**
  3. **Paryay Juvenile Dschool (Ages 12–20)**
  4. **yPOLEN (Higher Education Support)**
  5. **WAI - Who Am I? (75-Day Diagnostic)**
  6. **NeRo (Intergenerational 2–100y)**
- Each program includes its official illustrated banner, Marathi title, methodology, extracted feature bullets, and local Pune contact info.

### 5. `frontend/src/components/ParyayDschoolSection.astro`
- Corrected board exam description to clarify that Paryay Dschool is an alternative learning sanctuary that guides learners towards independent open schooling through NIOS and MsBOS.
- Badge updated from `"Govt. Validated"` to `"Towards Open Schooling"`.

### 6. `frontend/src/components/FAQSection.astro`
- Transformed from generic questions into authentic **Field Inquiries**:
  - *What does YP Nexus Foundation stand for?*
  - *Is Paryay Dschool an approved or affiliated NIOS school? (Clarifying independent open schooling)*
  - *Why are there no conventional textbooks, rote exams, or homework?*
  - *How does the dedicated 1:6 mentor-to-learner ratio work?*
  - *What are Expedition Visits (EVs) and Biodiversity Journeys (JEEVs)?*
  - *What is the Vartul FLM guidance course for Parents and Grandparents?*
  - *What programs are available under YP Nexus? (Overview of all 6 tiers)*

### 7. `frontend/src/components/Footer.astro`
- Replaced placeholder icon with official transparent YP Nexus logo.
- Updated core initiative links to include the 6 programs, Paryay Dschool, PiSELT, TurTle Media (High & Low Stories), and Community Habitats.

### 8. `frontend/src/components/ActivityGallerySection.astro` (NEW COMPONENT & MOBILE NATIVE VIEWER)
- Created a curated, filterable gallery section titled **"Life in Action • Authentic Moments from Field Journeys & Sanctuaries"** displaying real learner activity photographs:
  - **Mobile Native App Layout:** Renders a clean 2-column square photo album grid (iOS/Google Photos aesthetic) with horizontally scrolling category pills.
  - **Fullscreen Native Mobile Lightbox Viewer:**
    - Tapping any photo smoothly launches a full-screen dark viewer (`bg-black/95 backdrop-blur-xl`).
    - Displays active index counter (e.g. `3 / 12`), tag pill, location, and close button (`✕`).
    - Central high-res image with previous/next tap buttons and image transition fade.
    - Bottom drawer sheet with photo title, location, and caption.
    - Touch swipe gestures: swipe left for next photo, swipe right for previous photo.
    - Keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`) and backdrop click-to-dismiss.
    - Locks page body scroll when modal is active.
  - **Desktop Editorial Grid:** Rich 3-column cards with "Tap to Expand" trigger.

### 9. `frontend/src/pages/index.astro`
- Imported and integrated both `<ProgramsContinuumSection />` and `<ActivityGallerySection />` into the main page flow.

---

## 5. Verification Checklist

- [x] All 65 image assets extracted and categorized.
- [x] Official YP Nexus logo added to Navbar, Hero, and Footer.
- [x] "NIOS Approved" replaced with "Towards Open Schooling".
- [x] Hero CTA changed to "Explore LEARNING with YPNF".
- [x] 4 Pillars verified across Hero and InitiativesGrid.
- [x] 6-tier learning continuum created with authentic extracted banners and copy.
- [x] Activity gallery created with interactive category filters for field studies, life trades, creative floor art, and community cooking.
- [x] PiSELT 8-point capacity building domains added.
- [x] TurTle Media updated with "High & Low Stories", BAM, and Library.
- [x] Authentic Pune field study photography deployed across hero and feature cards.
- [x] Comprehensive documentation markdown file created.

