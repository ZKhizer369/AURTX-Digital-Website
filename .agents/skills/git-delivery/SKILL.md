---
name: git-delivery
description: Prepare and execute authorized Git and GitHub delivery actions from Codex CLI while verifying repository state and preserving human approval gates.
---

# Git Delivery

## Purpose

Provide a controlled procedure for delivering an approved frontend change through Git and GitHub using terminal-native tooling such as `git` and `gh`.

This Skill is for delivery after implementation, verification, review, and required human approval.

It does not replace engineering verification or human approval.

## Core principle

Git delivery is consequential.

Tool capability does not equal authorization.

Never commit, push, create a pull request, merge, or deploy merely because the commands are technically available.

## Preconditions

Before delivery:

- the task implementation is complete;
- applicable verification has been performed;
- required review is complete;
- the intended scope is known;
- required human approval has been explicitly obtained;
- the repository and target branch are known.

If any material precondition is missing:

`STOP → REPORT THE GAP → REQUEST AUTHORIZATION`

## Procedure

### 1. Verify repository identity

Confirm:

- current working directory;
- repository root;
- Git repository identity;
- configured remote;
- current branch;
- working-tree state.

Do not operate on an uncertain repository.

### 2. Inspect the proposed change

Review:

- `git status`;
- relevant `git diff`;
- staged changes when present;
- changed file list;
- unexpected files;
- unrelated modifications.

Do not deliver unrelated changes.

### 3. Verify branch and delivery target

Confirm:

- source branch;
- intended target branch;
- remote;
- repository.

Do not assume the target branch.

### 4. Verify task readiness

Confirm that the implementation has:

- satisfied the approved task scope;
- completed applicable verification;
- completed required review;
- resolved blocking findings.

Do not create delivery records for work that is still known to be incomplete.

### 5. Confirm human authorization

Before consequential delivery actions, confirm explicit authorization for the action being performed.

Authorization must be clear about the intended action.

Examples:

- commit;
- push;
- create PR;
- merge.

Do not infer permission for a higher-impact action from permission for a lower-impact action.

For example:

`approval to commit ≠ approval to merge`

### 6. Create commit

When explicitly authorized:

- stage only the intended files;
- inspect the staged diff;
- create an appropriate commit;
- verify the resulting commit.

Do not include unrelated files.

### 7. Push

When explicitly authorized:

- verify the target remote and branch;
- push the intended branch;
- verify the resulting remote state.

Do not force-push unless explicitly authorized.

Never rewrite shared history without explicit human approval.

### 8. Create or update pull request

When explicitly authorized:

- create or update the appropriate pull request;
- accurately summarize the change;
- identify relevant verification evidence;
- reference the intended base branch;
- avoid claiming checks that were not performed.

### 9. Inspect CI and review state

Use available GitHub tooling to inspect:

- CI/check status;
- review status;
- mergeability;
- comments or requested changes;
- branch state.

Do not assume that a PR is ready to merge.

### 10. Merge

Merge only when:

- the human has explicitly authorized merging;
- required reviews are satisfied;
- required CI/checks are satisfied according to project policy;
- no blocking review findings remain;
- the merge target is confirmed.

Do not use administrative bypasses unless explicitly authorized.

Do not enable auto-merge unless explicitly authorized.

### 11. Post-delivery verification

After each consequential action, verify the resulting state.

Examples:

- after commit → inspect commit;
- after push → inspect remote branch;
- after PR creation → inspect PR;
- after merge → verify merged state and target branch.

### 12. Report

Return:

- repository;
- source branch;
- target branch;
- commit created, if any;
- push result;
- PR created/updated, if any;
- CI/check state;
- review state;
- merge result, if any;
- remaining issues or limitations.

Distinguish:

`COMPLETED`

`FAILED`

`BLOCKED`

`NOT PERFORMED`

`INCONCLUSIVE`

## Safety boundaries

Never:

- force-push without explicit authorization;
- reset or discard work without explicit authorization;
- delete branches without authorization;
- bypass branch protection without authorization;
- use administrative merge bypass without authorization;
- enable auto-merge without authorization;
- merge an unreviewed or failing change;
- commit unrelated changes;
- claim a remote or GitHub state was changed without evidence.

## Conflict handling

If local state differs from the expected state:

- stop;
- inspect the discrepancy;
- report it;
- do not attempt an improvised recovery involving history rewriting or destructive commands.

## CLI preference

When this Skill is being used in the terminal workflow, prefer deterministic CLI commands for Git and GitHub operations.

Use:

- `git` for local repository operations;
- `gh` for GitHub repository and pull-request operations.

Do not replace deterministic command execution with unsupported claims.

## Human approval model

Treat the following as separate authorization events:

`COMMIT`

`PUSH`

`CREATE / UPDATE PR`

`MERGE`

Authorization for one does not automatically authorize the next.

## Final rule

Delivery is successful only when the requested Git/GitHub state is actually verified.

`DO NOT ASSUME THE COMMAND SUCCEEDED`

`VERIFY THE RESULT`