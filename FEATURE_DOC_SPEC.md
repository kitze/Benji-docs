# Feature Doc Spec (Internal)

Use this spec every time we add or update a feature page. It exists to prevent shallow write-ups and make sure each doc reflects how the feature behaves inside the product—settings, widgets, privacy, shortcuts, timeline ties, and public visibility controls included. Only publish facts you can confirm directly in the product or source; if you’re guessing, stop and verify.

## Prep Work Before Writing

- **Verify visibility**: Confirm whether the feature is hidden until toggled on. Note the exact settings path (feature flags, privacy, etc.) and the default state. Reference the precise navigation (for example `Settings → Features`) so readers know where to look.
- **Tour the surfaces**: Open the feature’s main page, any widgets it powers, and related summary or dashboard cards. Capture screenshots/notes even if they don’t ship in the doc.
- **Read supporting code**: Scan `pages/my/<feature>/**`, `app/features/<feature>/**`, Spotlight/Alfred command definitions, privacy settings, goal/template modules, and point-system config. We want verified behavior, not implementation details.
- **Trigger edge behaviors**: Complete a goal, switch units, post to the public timeline, or toggle privacy settings to observe downstream effects.
- **Capture activation paths**: Record the exact clicks required to enable the feature, surface its widgets, expose related toggles, and adjust who can see timeline posts so the doc can spell them out verbatim.
- **Stay user-facing**: Avoid database names, internal jargon, or implementation talk. Everything should read like guidance for a user, not a developer.
- **Cluster related topics**: Keep configuration, sharing, AI, lists, and goals in discrete sections so readers don’t bounce between bullets to gather the full story.

## Required Sections for Each Feature Page

1. **Access & Activation**
   - Explain how to enable the feature if it’s hidden.
   - Note any feature flags, device requirements, or permissions—never mention pricing tiers or plans.

2. **Core Workflow**
   - Describe the default logging/usage flow (prefilled fields, save behavior, syncing).
   - Call out optional fields, goal weighting rules, or unit conversions that alter totals or progress.

3. **Settings Inside the Feature**
   - Enumerate on-page controls: goals, templates, lists, reminders, filters, grouping.
  - Note default values and how changes affect historic data or downstream widgets.

4. **Global Settings & Privacy**
   - Summarize related global settings:
     - Feature enablement toggles or mini widgets.
     - Privacy sliders or sharing options with their defaults.
     - Keyboard shortcuts or user-level switches tied to the feature.

5. **Widgets & Dashboards**
   - List every widget the feature exposes (home dashboard, summary ring, sidebar mini widget, etc.).
   - Explain what each widget displays, how it updates (live vs. manual), and any configuration limits.
   - Document exactly how to add or remove each widget (settings path, toggle label, permissions).

6. **Alfred & Quick Actions**
   - Document Alfred commands: how to launch them, what they prefill, and which templates appear. Mention when keyboard shortcuts are optional alternatives rather than requirements.
   - Mention other quick launchers (menu bar, Raycast, mobile widgets) if supported.

7. **Automation & AI** (include when relevant)
   - Describe any background jobs, AI helpers, or automations and how users trigger or monitor them.
   - Note refresh steps, required integrations (e.g., OpenAI key), and how results surface in the UI.

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

- [ ] Confirmed how players enable the feature and captured the exact settings path.
- [ ] Listed every on-page setting (goals, templates, filters) with default behavior.
- [ ] Documented timeline behavior, point value, and the privacy setting that controls visibility (with default state).
- [ ] Cataloged all widgets (home, summary, sidebar, etc.) and how to add/remove each one.
- [ ] Described Alfred commands or other shortcuts tied to the feature.
- [ ] Covered automation/AI behavior (if present) in a single section, including refresh steps and setup requirements.
- [ ] Explained unit, timezone, or conversion rules that affect totals.
- [ ] Captured any templates, automation hooks, or recurring tools specific to the feature.
- [ ] Sanity-checked the write-up against real behavior (no assumptions, no filler).
- [ ] Kept language user-facing—no database tables, internal class names, or engineering jargon.
- [ ] Grouped related information (lists & sharing, AI, templates, goals, customization, etc.) so each topic appears in one clear section.
- [ ] Clarified when keyboard shortcuts are optional versus the only way to act.
