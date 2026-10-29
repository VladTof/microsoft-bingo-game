---
description: Style conventions for workshop lab documents (workshop/*.md) and other step-by-step guides.
applyTo: "**"
---

# Workshop Document Conventions

Apply these conventions when writing or editing lab guides in `workshop/`. Leave source code files unaffected.

## Structure
- Start each part with a back-link under the title: `[← Overview](00-overview.md)`
- Separate major sections with `---`
- Use `## 🔧`-style emoji headings only when the existing part already uses them; keep heading style consistent within a file
- End each part with `## ✅ Part N Complete!` followed by a bulleted recap of what the reader learned

## Steps
- Number steps in order (`### Step 1: ...`, or `**Steps:**` followed by a numbered list)
- Bold UI elements and menu paths: **Settings** → **Pages**
- Put prompts and commands in fenced code blocks (e.g., `/setup`, `/init`)
- Close each step group with an outcome line:
  - `✅ **Result:** ...` for task outcomes
  - `✅ **Success:** ...` for setup verification

## Callouts
- Use `> 💡 **Label:** text` for insights and tips
- Use `> 🎮` or similar blockquote for optional links or demos

## Writing
- Keep instructions short and imperative
- Link to other lab parts with relative paths
