# Claude Code Hooks — Assessment & Conservative Proposal

> Status: **proposal, opt-in.** No hooks are active by default. Nothing in this folder runs unless you copy the configuration into `.claude/settings.json` yourself. This keeps the bootstrap non-disruptive and avoids loops or failures while the toolchain does not yet exist.

## Assessment

Hooks can add value to this repository, but **most useful hooks depend on tools that are not installed yet** (Phase 0 has no Prettier, ESLint, or TypeScript). Running format/lint/typecheck hooks now would fail or loop. So this phase **documents** a conservative set and provides ready-to-enable examples, but activates **only** two lightweight, dependency-free guard hooks if you opt in.

### Recommended hooks and when to enable them

| Hook | Value | Enable when | Risk if premature |
| --- | --- | --- | --- |
| Format after edits (Prettier) | Consistent style | Phase 5 (Prettier installed) | Fails/loops now — no formatter |
| Lint check (ESLint) | Catch issues early | Phase 5 (ESLint installed) | Fails now — no linter |
| TypeScript check | Type safety | Phase 5 (tsconfig exists) | Fails now — no `tsc` |
| **Protect cultural assets** | Prevent accidental edits to the tamga / protected assets | **Now (opt-in)** | Low — advisory only |
| **Warn on unsourced history** | Nudge to add source status when historical content is added | **Now (opt-in)** | Low — advisory only |

The first three are **deferred to Phase 5** and included as commented examples in `settings.example.json`. The last two are dependency-free and safe to enable now.

## What is provided here

- `settings.example.json` — a conservative, ready-to-adapt hooks configuration. **Not** read by Claude Code (only `settings.json` is). Copy the parts you want.
- `protect-cultural-assets.sh` — a PreToolUse guard that warns (does not hard-block) when an edit targets a protected cultural asset path (e.g. the tamga).
- `check-source-status.sh` — a PostToolUse advisory that reminds you to record a content status/source when Markdown under `docs/` or content files gain historical claims.

Both scripts are **advisory**: they print guidance and exit `0`. They never block work, never modify files, and cannot loop.

## How to enable

1. Review `settings.example.json` and the two scripts.
2. Copy the hook entries you want into `.claude/settings.json` (create it if absent).
3. Ensure the scripts are executable: `chmod +x .claude/hooks/*.sh`.
4. Restart the Claude Code session so settings are re-read.

## How to disable

- Remove the relevant entries from `.claude/settings.json` (or delete the file), then restart the session.
- Or set the hook command to `true` to no-op it.
- `settings.local.json` and `*.local.json` are git-ignored; use them for personal overrides.

## Safety principles followed

- No hook runs a tool that is not installed.
- No hook edits files or reformats content in this phase.
- All active hooks are advisory (exit 0), so they cannot create loops or block progress.
- Formatting/lint/typecheck hooks are deferred with clear enable conditions.
