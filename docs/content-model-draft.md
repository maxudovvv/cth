# Content Model Draft — Crimean Tatar Heritage Canada

> Status: **draft** — CMS-agnostic model for review. Does not bind the project to any CMS. Finalize after Phase 1 discovery and CMS evaluation (`technical-options.md`, `cms-content-manager`).

## Modeling principles

- **Model concepts, not pages.** A person, place, or object is stored once and referenced from many experiences (timeline, gallery, archive, events).
- **Relationships are first-class.** Timelines, maps, and archives are views over connected entities.
- **Portable and migration-friendly.** Generic field types; no CMS-specific lock-in.
- **Provenance everywhere.** Heritage items carry source, owner, permission, and status (link to `content-source-register.md`).
- **Status on everything substantive.** Each content item has a `contentStatus` field: `verified` | `organization-approved` | `draft` | `requires-source` | `requires-cultural-review`.
- **Locale-aware.** Translatable fields resolve per locale against one canonical concept (see `multilingual-editor`).

## Shared / common fields

Applied to most entities:

```text
id                slug (locale-aware)      title (localized)
summary (localized)   body (localized, rich text)
contentStatus     sources[] (ref → Source)  primaryImage (ref → GalleryImage)
locales[]         createdAt / updatedAt / publishedAt
seo { title, description, ogImage }
```

## Entities and key fields

### pages
Durable editorial pages (About, hub pages). Fields: common + `section`, `navLabel`, `parentPage (ref)`, `order`.

### events
Timely. Fields: common + `startDateTime`, `endDateTime`, `location (ref → places)`, `city/province`, `isOnline`, `registrationUrl`, `eventType`, `relatedFilms[] (ref)`, `gallery (ref)`, `announcement (ref)`. Has a lifecycle (upcoming → past/archived).

### galleries
Fields: common + `images[] (ref → gallery images)`, `theme`, `relatedEntities[] (polymorphic ref)`.

### gallery images
Fields: `image`, `caption (localized)`, `credit`, `dateOrPeriod`, `place (ref)`, `peopleShown[] (ref → people)`, `altText (localized)`, `source (ref → Source)`, `permissionStatus`, `contentStatus`.

### books
Fields: common + `author(s)`, `originalLanguage`, `publicationDate`, `coverImage`, `description (localized)`, `translations[] (ref → translations)`, `purchaseOrAccessUrl`.

### translations
A translated work (e.g. a book rendered into English). Fields: common + `sourceWork (ref → books)`, `targetLanguage`, `translator(s)`, `status`, `availability`, `notes`.

### films
Fields: common + `director`, `year`, `runtime`, `originalLanguage`, `subtitleLanguages[]`, `synopsis (localized)`, `poster`, `trailerUrl`, `screenings[] (ref → screenings)`, `contentWarnings`.

### screenings
Fields: common + `film (ref → films)`, `dateTime`, `venue (ref → places)`, `city/province`, `ticketUrl`, `audienceNote`, `relatedEvent (ref → events)`.

### historical timeline entries
Fields: common + `date` or `period` (supports ranges/approximate), `era/category`, `shortLabel (localized)`, `description (localized)`, `people[] (ref)`, `places[] (ref)`, `sources[]` (**required**), `contentStatus` (defaults to `requires-source`).

### oral histories
Fields: common + `narrator (ref → people, with consent)`, `recordingUrl (audio/video)`, `transcript (localized)`, `captions`, `dateRecorded`, `themes[]`, `consentStatus`, `sensitivity`, `contentStatus`.

### people
Canonical person records. Fields: `name` (+ transliteration variants), `role/description (localized)`, `portrait (ref)`, `birth/death or period`, `relatedEntities[]`, `sources[]`, `contentStatus`. Distinguish historical figures from living community members (living require consent).

### places
Canonical place records (Crimea locations, Canadian venues). Fields: `name` (+ historical/transliterated names), `geo { lat, lng }` (optional), `type`, `description (localized)`, `image (ref)`, `sources[]`.

### recipes
Fields: common + `dishNameCrimeanTatar` (kept untranslated + gloss), `category`, `ingredients (localized)`, `steps (localized)`, `image`, `culturalNote (localized, sourced)`, `contentStatus`.

### language phrases
Fields: `phraseCrimeanTatar`, `transliteration`, `translation (localized)`, `audioPronunciation`, `context/usage`, `category`, `contentStatus`.

### educational resources
Fields: common + `resourceType` (lesson, guide, reading list, downloadable), `audience` (teacher/student/general), `file/url`, `relatedTopics[]`, `license`.

### partners
Fields: `name`, `logo`, `description (localized)`, `url`, `partnerType`. Note: represent CACT here (if included) strictly per `organization-separation.md`.

### organization team members
Fields: `name`, `role (localized)`, `photo`, `bio (localized)`, `order`, `contactVisible`.

### announcements
Timely, short-lived notices. Fields: common + `startDate`, `endDate`, `priority`, `relatedEvent (ref)`, `link`.

## Relationship highlights

- **events** ↔ **screenings** ↔ **films**; **events** → **galleries**, **places**, **announcements**.
- **timeline entries**, **oral histories**, **galleries** all reference **people** and **places** (the connective tissue for museum experiences).
- **books** ↔ **translations**; **films** ↔ **screenings**.
- Every media-bearing entity references a **Source** with permission + status (see register).

## Timely vs timeless

Timely (lifecycle-managed): events, screenings, announcements. Timeless (durable): pages, heritage sections, timeline, oral histories, books, films, recipes, phrases, people, places, resources.

## Not decided here

Whether any of this is implemented in Sanity, Payload, or another CMS. This model is written to survive that choice. See `cms-content-manager` and `technical-options.md`.
