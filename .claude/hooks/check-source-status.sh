#!/usr/bin/env bash
# Advisory PostToolUse reminder for Crimean Tatar Heritage Canada.
# When a docs/content Markdown file is edited, remind the author to record a
# content status and source for any historical/cultural claim. Advisory only:
# prints guidance, never edits, always exits 0 (cannot loop or block).
#
# Enable by referencing it from .claude/settings.json (see .claude/hooks/README.md).

target="${CLAUDE_FILE_PATH:-${CLAUDE_TOOL_FILE_PATH:-}}"

case "$target" in
  *docs/*.md|*content/*.md|*.mdx)
    echo "📝 CONTENT-STATUS REMINDER for '$target':"
    echo "   If this adds a historical/cultural claim, record its status —"
    echo "   verified | organization-approved | draft | requires-source | requires-cultural-review —"
    echo "   and log provenance in docs/content-source-register.md. Never present unverified claims as fact."
    ;;
  *)
    : # not a content file; nothing to do
    ;;
esac

exit 0
