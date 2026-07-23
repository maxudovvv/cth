#!/usr/bin/env bash
# Advisory PreToolUse guard for Crimean Tatar Heritage Canada.
# Warns (does NOT block) when an edit targets a protected cultural asset,
# such as the tamga. Always exits 0 so it can never block work or loop.
#
# Enable by referencing it from .claude/settings.json (see .claude/hooks/README.md).

# Claude Code passes tool context on stdin as JSON and/or via env vars.
# We read a best-effort file path from common env vars without requiring jq.
target="${CLAUDE_FILE_PATH:-${CLAUDE_TOOL_FILE_PATH:-}}"

# Protected path fragments (case-insensitive). Adjust as assets are added in Phase 1/3.
protected_patterns='tamga|brand/logo|assets/protected|/logo\.|/tamga'

if [ -n "$target" ]; then
  if echo "$target" | grep -Eiq "$protected_patterns"; then
    echo "⚠️  CULTURAL ASSET NOTICE: '$target' looks like a protected cultural asset (e.g. the tamga/logo)."
    echo "   Do not redraw, recolor, or distort it. Use approved artwork only and confirm with the organization."
    echo "   See CLAUDE.md (Cultural integrity) and docs/design-direction.md (Ornament rules)."
  fi
fi

exit 0
