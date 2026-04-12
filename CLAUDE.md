# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

This is a browser-based Python code tracer/debugger for learning algorithms, specifically designed for studying for the 基本情報技術者試験 (Fundamental Information Technology Engineer Examination) subject B. It allows users to step through Python code execution line-by-line and visualize variable changes in real-time.

## Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## Core Architecture

### Pyodide Engine (`app/lib/pyodideEngine.ts`)

The heart of the application. Executes Python code in the browser using Pyodide loaded from CDN.

**Critical implementation details:**

1. **CDN Loading**: Pyodide is loaded via script tag from `https://cdn.jsdelivr.net/pyodide/v0.25.0/full/` because Next.js bundler cannot handle dynamic imports of the Pyodide npm package.

2. **Trace Function**: Uses Python's `sys.settrace` to capture execution steps. The trace function has several critical optimizations:
   - Only traces user code (filename check for `'<string>'` or `'<exec>'`)
   - Only records `'line'` events (excludes `'call'` and `'return'` to reduce memory)
   - Filters out internal variables via exclusion list
   - Limits string lengths, array sizes, and total steps to prevent memory errors
   - Skips steps with only internal variables (e.g., `self`, `text` from print() internals)

3. **Variable Exclusion List**: Prevents display of trace infrastructure variables:
   ```python
   excluded_vars = {
       'trace_steps', 'max_steps', 'safe_str', 'trace_function',
       'output_lines', 'OutputCapture', 'old_stdout',
       'sys', 'json', 'frame', 'event', 'arg',
       'self', 'text'  # print() and other internal processing
   }
   ```

**When modifying the trace function:**
- Always test with loops containing print statements to ensure internal processing steps are filtered
- Verify that the trace doesn't trace itself (infinite recursion)
- Check memory usage with large arrays or long-running loops

### Component Structure

The UI follows a LeetCode-style layout:

```
┌─────────────────┬────────────────────────────────────┐
│                 │  CodeEditor    │  VariableMonitor  │
│  ProblemPanel   │  (flex-1)      │  (w-96)           │
│  (w-[450px])    ├──────────────────────────────────  │
│  (full height)  │  ControlPanel                      │
│                 │  (buttons, output, step counter)   │
└─────────────────┴────────────────────────────────────┘
```

**AlgorithmTracer.tsx**: Main component that orchestrates:
- Pyodide initialization on mount
- Execution state management
- Step navigation (forward/back)
- Keyboard shortcuts (Ctrl/Cmd+Enter to run, arrow keys for step navigation)
- Current line highlighting coordination

**CodeEditor.tsx**:
- Uses `react-simple-code-editor` + Prism.js (NOT Monaco Editor - Monaco had loading issues in Next.js)
- Custom line highlighting with yellow background, left border, and glow effect
- Line numbers with separate highlighting for current line
- Syntax highlighting for Python

**VariableMonitor.tsx**:
- Displays variables from current step's `locals`
- Shows type information
- Formats values (strings with quotes, objects as JSON)

**ControlPanel.tsx**:
- Execution controls (Run, Step Forward, Step Back, Reset)
- Output/error display area
- Step counter

**ProblemPanel.tsx**:
- Displays problem description, examples, and constraints
- Designed for LeetCode-style problem presentation

### State Flow

```
User clicks Run
  → AlgorithmTracer.handleRun()
  → executeWithTrace(code) in pyodideEngine
  → Python trace function captures each line execution
  → Returns { steps: TraceStep[], output: string }
  → AlgorithmTracer sets steps, currentStep=0, state='completed'

User clicks Step Forward/Back
  → Updates currentStep index
  → Triggers re-render with new currentVariables and currentLine
  → CodeEditor highlights new line
  → VariableMonitor displays new variables
```

## Type Definitions (`app/types/index.ts`)

- **TraceStep**: Contains `line` number, `locals` (variables), `event` type, and optional `functionName`
- **ExecutionState**: `'idle' | 'running' | 'paused' | 'completed' | 'error'`
- **ExecutionResult**: Success flag, steps array, output, and error message

## Known Issues and Constraints

- Pyodide has limitations on available Python libraries (stdlib only, some packages available via micropip)
- File I/O and network operations are restricted in browser environment
- Large outputs or infinite loops will cause browser performance issues
- Maximum 10,000 trace steps enforced to prevent memory errors

## Development Notes

- This uses Next.js 15+ (App Router) which may have breaking changes from training data
- All client components must use `'use client'` directive
- Tailwind CSS v4 is used for styling
- The editor requires client-side only rendering due to browser APIs
