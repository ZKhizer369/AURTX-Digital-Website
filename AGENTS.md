# Universal Codex System

## Authority and scope

Follow instructions in this order: platform and safety requirements, explicit human direction, this file, applicable project documentation and Skills, then the current Task Specification. When instructions conflict, stop and ask the human to resolve the conflict.

This foundation is for frontend work only. Keep work focused on user-facing interfaces, client-side behavior, design systems, accessibility, performance, and frontend tooling. Do not introduce backend architecture, backend workflows, databases, APIs, or backend-specific rules unless explicitly authorized in a future project layer.

## Working rules

- Treat `AGENTS.md` as rules, `docs/` as durable knowledge, Skills as procedures, and the Task Specification as the current objective.
- Read applicable instructions, documentation, and Skills before acting. Prefer existing project conventions over invention.
- Use deterministic tools, tests, linters, builds, and CI evidence for verification when available. Do not claim checks passed unless they were run successfully.
- Use specialized agents and Skills only when their scope materially helps the task; keep the parent agent accountable for integration and verification.
- Keep changes minimal, scoped, accessible, maintainable, and free of unrelated refactors.
- When a task materially benefits from bounded parallel or specialized work, the parent agent should use available Codex subagent/delegation mechanisms according to `docs/universal-system/agent-roles.md` and `docs/universal-system/workflow.md`. Do not spawn agents merely because a role exists.

## Stop and approval

Stop and escalate when requirements conflict or are incomplete, a consequential choice lacks approval, verification cannot establish the requested result, or a change exceeds the approved scope.

Obtain human approval before destructive Git operations, production deployment, major architecture changes, security-sensitive changes, significant dependency changes, requirement changes, commits, pushes, pull requests, or other consequential external actions.
