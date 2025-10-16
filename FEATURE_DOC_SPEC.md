# Feature Doc Spec (Internal)

Use this spec every time we add or update a feature page. It exists to prevent shallow write-ups and make sure each doc reflects how the feature behaves inside the product—settings, widgets, privacy, shortcuts, timeline ties, and public visibility controls included. Only publish facts you can confirm directly in the product or source; if you're guessing, stop and verify.

## ⛔ ABSOLUTE PROHIBITION: NO CODE REFERENCES

**NEVER, EVER include:**
- Footnote references like `[^feature-flag]` or `[^mood-tools]`
- Footnote definitions at the bottom of files (e.g., `[^xyz]: path/to/file.ts:123-456`)
- File paths (e.g., `pages/api/ai/tools/logHydrationTool.ts`)
- Line numbers (e.g., `:1-66` or `:123`)
- Database table names (e.g., `ProblemLog`, `schema.prisma`)
- Class names or technical implementation details

**These docs are for USERS, not DEVELOPERS.** If you find yourself wanting to reference code, STOP and rewrite it as user-facing behavior instead.

## Prep Work Before Writing

- **Review the codebase**: Do a thorough search through `~/webdev/benji` so each statement in the doc reflects real behaviour.
- **Verify visibility**: Confirm whether the feature is hidden until toggled on. Note the exact settings path (feature flags, privacy, etc.) and the default state. Reference the precise navigation (for example `Settings → Features`) so readers know where to look.
- **Tour the surfaces**: Open the feature’s main page, any widgets it powers, and related summary or dashboard cards. Capture screenshots/notes even if they don’t ship in the doc.
- **Read supporting code**: Scan `pages/my/<feature>/**`, `app/features/<feature>/**`, Spotlight/Alfred command definitions, privacy settings, goal/template modules, and point-system config. We want verified behavior, not implementation details.
- **Trigger edge behaviors**: Complete a goal, switch units, post to the public timeline, or toggle privacy settings to observe downstream effects.
- **Capture activation paths**: Record the exact clicks required to enable the feature, surface its widgets, expose related toggles, and adjust who can see timeline posts so the doc can spell them out verbatim.
- **Stay user-facing**: Avoid database names, internal jargon, implementation talk, or code references. Everything should read like guidance for a user, not a developer. **NEVER include footnote references to code paths, file locations, or technical implementation details.**
- **Cluster related topics**: Keep configuration, sharing, lists, and goals in discrete sections so readers don’t bounce between bullets to gather the full story.
- **Skip empty sections**: If a feature has nothing meaningful to say about privacy, widgets, automation, etc., omit the section entirely—never add filler like “no widget” or “private by default.”

## Required Sections for Each Feature Page

0. **What It Does**
   - Start with a short paragraph that explains the feature’s purpose, core value, and how it feels to use before diving into setup or workflows.
   - Keep it user-facing—think of it as the elevator pitch that frames the rest of the doc.

1. **Access & Activation**
   - Keep this section SHORT. Simply state: "Enable [Feature] from `Settings → Features → [Name]`" and link to the [Enabling Features guide](/docs/enabling-features).
   - Only add extra detail if this feature has unique activation requirements beyond the standard pattern.
   - Never mention pricing tiers or plans.

2. **Core Workflow**
   - Describe the default logging/usage flow (prefilled fields, save behavior, syncing).
   - Call out optional fields, goal weighting rules, or unit conversions that alter totals or progress.

3. **Settings Inside the Feature**
   - Enumerate on-page controls: goals, templates, lists, reminders, filters, grouping.
  - Note default values and how changes affect historic data or downstream widgets.

4. **Global Settings & Privacy**
   - Summarize related global settings _only when they matter_:
     - Feature enablement toggles or mini widgets.
     - Privacy sliders or sharing options with their defaults.
     - Keyboard shortcuts or user-level switches tied to the feature.
   - Skip the section entirely if there’s nothing meaningful to note—don’t add filler about “no extra settings.”

5. **Widgets & Dashboards**
   - Include only when the feature exposes actual widgets or dashboard tiles.
   - Refer to them by their current placement (e.g., sidebar widget, My Day widget) rather than legacy names.
   - For each widget, describe what it shows, how it updates (live vs. manual), configuration limits, and the exact steps to add/remove it.

6. **Alfred & Quick Actions**
   - Link to the main [Alfred & Spotlight guide](/docs/alfred-spotlight) at the start of this section.
   - List only the feature-specific Alfred commands (e.g., "Create a new habit", "Log hydration").
   - Do NOT re-explain what Alfred/Spotlight is or how to open it—that's in the dedicated guide.
   - Mention when keyboard shortcuts are optional alternatives rather than requirements.

7. **Keyboard Shortcuts**
   - Always list shortcuts relevant to the feature.
   - Check the main Benji repo (`~/webdev/benji`) for global shortcuts (e.g., `app/hooks/useGlobalHotkeys.tsx`, settings keyboard shortcut enums) and any feature-specific bindings.
   - Mention how to trigger them and when they’re optional versus required.

8. **Timeline, Points & Privacy**
   - Specify what goes to the timeline, when it triggers (goal completion, manual share), and the exact point value it awards.
   - Identify every privacy toggle or sharing preference that controls those posts, including default audiences and how to change them.
   - Note whether timeline posts can be disabled entirely, kept private, or scoped to followers.

9. **Integrations & Dependencies**
   - Note cross-feature links (summary rings, planner reminders, automations, etc.). Highlight planner scheduling or routine chaining when duration settings matter.
   - Call out how unit/timezone settings or other global preferences influence the feature.

10. **Tips & Edge Cases**
   - Provide concise, actionable tips (templates for repetitive entries, bypass toggles for exceptions).
   - Warn about non-obvious behavior (weighted totals, backdated goals, refresh requirements).

## Writing Checklist

- [ ] Opened with a concise “What It Does” overview that explains the feature in plain language.

- [ ] Confirmed how players enable the feature and captured the exact settings path.
- [ ] Listed every on-page setting (goals, templates, filters) with default behavior.
- [ ] Documented timeline behavior, point value, and the privacy setting that controls visibility (with default state).
- [ ] Cataloged all widgets (home, summary, sidebar, etc.) and how to add/remove each one.
- [ ] Described Alfred commands or other shortcuts tied to the feature.
- [ ] Explained unit, timezone, or conversion rules that affect totals.
- [ ] Captured any templates, automation hooks, or recurring tools specific to the feature.
- [ ] Sanity-checked the write-up against real behavior (no assumptions, no filler).
- [ ] Kept language user-facing—no database tables, internal class names, engineering jargon, or code file references.
- [ ] **NEVER included footnote references to code paths** (e.g., `[^feature-flag]: db/schema.prisma:952-955`).
- [ ] Linked to the [Alfred & Spotlight guide](/docs/alfred-spotlight) instead of re-explaining it.
- [ ] Linked to the [Enabling Features guide](/docs/enabling-features) for standard activation patterns.
- [ ] Grouped related information (lists & sharing, templates, goals, customization, etc.) so each topic appears in one clear section.
- [ ] Clarified when keyboard shortcuts are optional versus the only way to act.
- [ ] Omitted empty sections—if a topic genuinely has nothing to say, skip the header instead of writing "not available".
- [ ] Documented feature-relevant keyboard shortcuts (global + local) with sources.
- [ ] **⛔ VERIFIED: Zero code references, zero footnotes, zero file paths, zero line numbers in the entire document.**
