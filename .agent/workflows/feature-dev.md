---
description: Guided feature development with codebase understanding and architecture focus
argument-hint: Optional feature description
---

# Feature Development

You are helping a developer implement a new feature. Follow a systematic approach: understand the codebase deeply, identify and ask about all underspecified details, design elegant architectures, then implement.

## Core Principles
- **Ask clarifying questions**: Identify all ambiguities, edge cases, and underspecified behaviors. Ask specific, concrete questions rather than making assumptions. Wait for user answers before proceeding with implementation. Ask questions early (after understanding the codebase, before designing architecture).
- **Understand before acting**: Read and comprehend existing code patterns first
- **Read files identified during exploration**: When exploring the codebase, identify the most important files to read. After exploration, read those files to build detailed context before proceeding.
- **Simple and elegant**: Prioritize readable, maintainable, architecturally sound code
- **Use task.md**: Track all progress throughout with task artifact

---

## Phase 1: Discovery
**Goal**: Understand what needs to be built

**Actions**:
1. Create task.md with all phases as checklist items
2. If feature unclear, ask user for:
   - What problem are they solving?
   - What should the feature do?
   - Any constraints or requirements?
3. Summarize understanding and confirm with user

---

## Phase 2: Codebase Exploration
**Goal**: Understand relevant existing code and patterns at both high and low levels

**Actions**:
1. Perform 2-3 parallel exploration analyses. Each exploration should:
   - Trace through the code comprehensively and focus on getting a comprehensive understanding of abstractions, architecture and flow of control
   - Target a different aspect of the codebase (eg. similar features, high level understanding, architectural understanding, user experience, etc)
   - Include a list of 5-10 key files to read

   **Example exploration focuses**:
   - "Find features similar to [feature] and trace through their implementation comprehensively"
   - "Map the architecture and abstractions for [feature area], tracing through the code comprehensively"
   - "Analyze the current implementation of [existing feature/area], tracing through the code comprehensively"
   - "Identify UI patterns, testing approaches, or extension points relevant to [feature]"

2. Once explorations complete, read all identified key files to build deep understanding
3. Present comprehensive summary of findings and patterns discovered

**Exploration Output Format**:
For each exploration, provide:
- Entry points with file:line references
- Step-by-step execution flow with data transformations
- Key components and their responsibilities
- Architecture insights: patterns, layers, design decisions
- Dependencies (external and internal)
- Observations about strengths, issues, or opportunities
- List of 5-10 essential files to read

---

## Phase 3: Clarifying Questions
**Goal**: Fill in gaps and resolve all ambiguities before designing

**CRITICAL**: This is one of the most important phases. DO NOT SKIP.

**Actions**:
1. Review the codebase findings and original feature request
2. Identify underspecified aspects: edge cases, error handling, integration points, scope boundaries, design preferences, backward compatibility, performance needs
3. **Present all questions to the user in a clear, organized list**
4. **Wait for answers before proceeding to architecture design**

If the user says "whatever you think is best", provide your recommendation and get explicit confirmation.

---

## Phase 4: Architecture Design
**Goal**: Design multiple implementation approaches with different trade-offs

**Actions**:
1. Design 2-3 architecture approaches with different focuses:
   - **Minimal Changes**: Smallest change, maximum reuse of existing code
   - **Clean Architecture**: Focus on maintainability, elegant abstractions
   - **Pragmatic Balance**: Balance between speed and quality

2. For each approach, analyze:
   - Patterns & Conventions Found: Existing patterns with file:line references, similar features, key abstractions
   - Architecture Decision: Your chosen approach with rationale and trade-offs
   - Component Design: Each component with file path, responsibilities, dependencies, and interfaces
   - Implementation Map: Specific files to create/modify with detailed change descriptions
   - Data Flow: Complete flow from entry points through transformations to outputs
   - Build Sequence: Phased implementation steps as a checklist
   - Critical Details: Error handling, state management, testing, performance, and security considerations

3. Review all approaches and form your opinion on which fits best for this specific task (consider: small fix vs large feature, urgency, complexity, team context)

4. Present to user:
   - Brief summary of each approach
   - Trade-offs comparison
   - **Your recommendation with reasoning**
   - Concrete implementation differences

5. **Ask user which approach they prefer**

---

## Phase 5: Implementation
**Goal**: Build the feature

**DO NOT START WITHOUT USER APPROVAL**

**Actions**:
1. Wait for explicit user approval
2. Read all relevant files identified in previous phases
3. Implement following chosen architecture
4. Follow codebase conventions strictly
5. Write clean, well-documented code
6. Update task.md as you progress

---

## Phase 6: Quality Review
**Goal**: Ensure code is simple, DRY, elegant, easy to read, and functionally correct

**Actions**:
1. Perform 3 parallel code reviews with different focuses:
   - **Simplicity/DRY/Elegance**: Code quality and maintainability
   - **Bugs/Functional Correctness**: Logic errors, null handling, race conditions, security
   - **Project Conventions/Abstractions**: Adherence to existing patterns and CLAUDE.md guidelines

2. For each review, use confidence scoring (0-100):
   - **0-25**: Low confidence, likely false positive
   - **50**: Moderate, real issue but might be a nitpick
   - **75-100**: High confidence, verified real issue that impacts functionality
   
   **Only report issues with confidence ≥ 80**

3. Consolidate findings and identify highest severity issues that you recommend fixing

4. **Present findings to user and ask what they want to do** (fix now, fix later, or proceed as-is)

5. Address issues based on user decision

**Review Output Format**:
For each high-confidence issue, provide:
- Clear description with confidence score
- File path and line number
- Specific project guideline reference or bug explanation
- Concrete fix suggestion

Group issues by severity (Critical vs Important).

---

## Phase 7: Summary
**Goal**: Document what was accomplished

**Actions**:
1. Mark all items in task.md complete
2. Create walkthrough.md summarizing:
   - What was built
   - Key decisions made
   - Files modified/created
   - Suggested next steps

---

## Usage

To start the feature development workflow, use:
```
/feature-dev Add user authentication with OAuth
```

Or simply:
```
/feature-dev
```

The workflow will guide you through all 7 phases interactively.

---

## Best Practices
1. **Use the full workflow for complex features**: The 7 phases ensure thorough planning
2. **Answer clarifying questions thoughtfully**: Phase 3 prevents future confusion
3. **Choose architecture deliberately**: Phase 4 gives you options for a reason
4. **Don't skip code review**: Phase 6 catches issues before they reach production
5. **Read the suggested files**: Phase 2 identifies key files—read them to understand context

## When to Use This Workflow
**Use for:**
- New features that touch multiple files
- Features requiring architectural decisions
- Complex integrations with existing code
- Features where requirements are somewhat unclear

**Don't use for:**
- Single-line bug fixes
- Trivial changes
- Well-defined, simple tasks
- Urgent hotfixes

---

## Author
Adapted from Sid Bidasaria's feature-dev plugin (sbidasaria@anthropic.com)

## Version
1.0.0
