---
name: git-delivery
description: Execute explicitly authorized Git and GitHub delivery actions using deterministic commands, minimal state inspection, and verified results.
---

# Git Delivery

## Purpose

Provide a controlled procedure for executing authorized Git and GitHub delivery actions after engineering work is ready for delivery.

This Skill handles:

- commit;
- push;
- pull request creation/update;
- merge;
- post-action state verification.

It does not replace:

- implementation;
- verification;
- code review;
- human approval.

---

# Core Principles

1. Git and GitHub actions are consequential.
2. Tool access does not equal authorization.
3. Authorization is action-specific.
4. Inspect only the state required for the requested action.
5. Never deliver unrelated changes.
6. Use deterministic Git/GitHub commands.
7. Verify every consequential action.
8. Do not repeat an already completed action without a reason.
9. Do not perform destructive recovery without explicit authorization.
10. Stop when the requested delivery state is verified.

---

# Authorization Model

Treat these as separate authorization events:

`COMMIT`

`PUSH`

`CREATE / UPDATE PR`

`MERGE`

Authorization for one does not authorize the others.

Examples:

`COMMIT ≠ PUSH`

`PUSH ≠ MERGE`

`PR APPROVAL ≠ MERGE AUTHORIZATION`

If the requested action is not explicitly authorized:

`STOP → REPORT → REQUEST AUTHORIZATION`

---

# Action-Scoped Execution

Determine the exact requested delivery action before inspecting repository state.

Examples:

### Commit only

Inspect:

- repository;
- branch;
- working tree;
- intended diff.

Do not inspect:

- PR;
- CI;
- mergeability.

### Push

Inspect:

- repository;
- current branch;
- remote;
- intended commit/state.

Then verify the remote branch.

### Create/update PR

Inspect:

- repository;
- source branch;
- target branch;
- remote;
- current PR state when applicable.

Then create/update the PR and verify it.

### Merge

Inspect the states required by project policy:

- repository;
- source branch;
- target branch;
- PR;
- required checks;
- required reviews;
- mergeability.

Do not inspect unrelated GitHub resources.

---

# Preconditions

Before performing the requested action, confirm only the preconditions required for that action.

For delivery of an approved engineering change, the relevant workflow state should already indicate:

- implementation complete;
- applicable verification complete;
- required review complete;
- blocking findings resolved;
- human authorization obtained.

Do not rerun engineering verification from this Skill.

If required readiness information is missing:

`STOP → REPORT GAP → ESCALATE`

---

# 1. Verify Repository Identity

Before local Git operations, establish:

- current working directory;
- repository root;
- current branch;
- repository identity;
- configured remote when relevant.

Do not operate on an uncertain repository.

Use deterministic Git commands.

---

# 2. Inspect Intended Change

Before committing:

- inspect `git status`;
- inspect the relevant diff;
- inspect staged changes when present;
- identify changed files.

Confirm that the changes belong to the approved task.

Do not inspect unrelated history unless the current state requires it.

---

# 3. Scope Check

Do not deliver:

- unrelated files;
- unrelated modifications;
- accidental generated files;
- unexpected configuration changes;
- unintended dependency changes.

If unexpected changes are present:

`STOP → REPORT UNEXPECTED CHANGES`

Do not silently discard them.

Do not reset, clean, or overwrite work without explicit authorization.

---

# 4. Commit

When commit authorization is explicit:

1. stage only intended files;
2. inspect the staged diff;
3. create the commit;
4. verify the resulting commit.

Do not:

- stage everything blindly;
- amend another commit without authorization;
- rewrite history;
- include unrelated files.

### Commit completion

After a successful commit:

`VERIFY COMMIT → REPORT → STOP`

Do not automatically push unless push authorization also exists.

---

# 5. Push

When push authorization is explicit:

1. verify repository;
2. verify source branch;
3. verify remote;
4. push the intended branch;
5. verify the resulting remote state.

Do not force-push unless explicitly authorized.

Do not rewrite shared history without explicit approval.

### Push completion

After successful push:

`VERIFY REMOTE STATE → REPORT → STOP`

Do not automatically create a PR unless PR authorization also exists.

---

# 6. Pull Request

When PR creation/update is explicitly authorized:

Confirm:

- source branch;
- target branch;
- repository;
- intended change.

Create or update only the relevant PR.

The PR description should accurately state:

- what changed;
- relevant verification evidence;
- relevant review state.

Do not claim:

- tests passed when they were not run;
- review completed when it was not;
- visual validation completed when it was not.

After PR creation/update:

`VERIFY PR STATE → REPORT → STOP`

---

# 7. CI and Review State

Inspect CI/review state only when it is relevant to the requested action.

For example:

- creating a PR → basic PR state may be relevant;
- merging → required CI and review state is relevant;
- committing locally → CI/PR state is not required.

Reuse existing verification and review results where possible.

Do not rerun engineering checks merely because delivery is occurring.

---

# 8. Merge

Merge only when all required conditions are satisfied:

- explicit merge authorization exists;
- target branch is confirmed;
- required reviews are satisfied;
- required checks are satisfied according to project policy;
- no blocking review findings remain;
- PR is mergeable.

Do not:

- bypass branch protection;
- use administrative merge bypasses;
- enable auto-merge;
- merge an unreviewed change;
- merge a failing change;

unless each such action is explicitly authorized and permitted by project policy.

After merge:

`VERIFY MERGED STATE → REPORT → STOP`

---

# 9. Action-Specific Verification

Every consequential action must be verified.

### Commit

Verify:

- commit exists;
- expected files are included;
- repository state is consistent.

### Push

Verify:

- remote branch contains the intended commit/state.

### PR

Verify:

- PR exists;
- source and target branches are correct;
- intended commit/change is associated.

### Merge

Verify:

- PR is merged;
- target branch reflects the merge.

Never assume command success solely because the command returned without an obvious error.

---

# Failure Handling

When a Git/GitHub operation fails:

1. capture the actual error;
2. determine whether the failure is actionable;
3. make one meaningful corrective attempt when safe;
4. verify the result.

If the problem persists:

`STOP → REPORT → BLOCKED`

Do not repeatedly retry the same command.

Do not escalate from:

`normal operation → destructive recovery`

without explicit authorization.

---

# Conflict Handling

If local or remote state differs from the expected state:

`STOP`

Report:

- expected state;
- observed state;
- affected branch/repository;
- relevant error or discrepancy.

Do not automatically:

- reset;
- clean;
- rebase;
- force-push;
- overwrite;
- delete branches;
- rewrite history.

Recovery requires explicit authorization when it can affect existing work or shared history.

---

# Deterministic Tooling

Prefer:

- `git` for local repository operations;
- `gh` for GitHub operations.

Use deterministic commands for deterministic state changes.

Do not replace actual command execution with assumptions.

Do not claim a GitHub state changed without evidence.

---

# No Duplicate Delivery

Once a requested delivery action has been successfully verified:

`STOP`

Do not repeat the action.

Examples:

- verified commit → do not create another commit;
- verified push → do not push again;
- verified PR → do not create a duplicate PR;
- verified merge → do not merge again.

If the workflow requires a later action, that action must have its own authorization and execution step.

---

# Safety Boundaries

Never without explicit authorization:

- force-push;
- reset/discard work;
- delete branches;
- rewrite shared history;
- bypass branch protection;
- bypass required reviews;
- bypass required checks;
- enable auto-merge;
- merge;
- deploy.

Never deliver unrelated changes.

---

# Output

Return a compact Delivery Handoff containing only relevant information.

```text
Action:
[COMMIT / PUSH / PR / MERGE]

Repository:
[repository]

Source branch:
[branch]

Target branch:
[branch, when relevant]

Result:
[COMPLETED / FAILED / BLOCKED / NOT PERFORMED / INCONCLUSIVE]

Evidence:
[commit / remote state / PR / merge state]

Remaining issues:
[if any]