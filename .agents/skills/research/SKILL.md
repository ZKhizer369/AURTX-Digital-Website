---
name: frontend-task-research
description: Research a frontend task and produce verified findings for downstream planning without changing the project.
---

# Frontend Task Research

## Purpose

Research a frontend task when implementation depends on understanding existing project context, requirements, design, architecture, assets, constraints, or verification needs.

The purpose of this Skill is to produce verified findings for downstream planning.

## Procedure

### 1. Read the task

Identify:

- requested outcome;
- stated constraints;
- scope;
- known authority boundaries.

Do not invent missing requirements.

### 2. Read applicable context

Inspect only information relevant to the task, including when applicable:

- instruction files;
- project documentation;
- existing implementation;
- architecture;
- components;
- styles;
- assets;
- design/Figma information;
- integration points;
- tests;
- configuration relevant to the task.

Do not perform unrelated repository exploration.

### 3. Establish verified findings

Identify:

- relevant existing implementation;
- applicable requirements;
- design constraints;
- available assets;
- integration points;
- testing requirements;
- technical constraints;
- dependencies;
- risks;
- acceptance-criteria implications;
- open questions.

Each material finding must be based on inspected evidence.

### 4. Separate facts from uncertainty

Classify material information as:

- Verified
- Assumption
- Open Question
- Blocked

Never present an assumption as a verified fact.

Never invent requirements, design intent, acceptance criteria, approvals, or technical behavior.

### 5. Assess implementation readiness

Determine whether enough information exists for the next workflow stage.

Identify anything that materially prevents a reliable Task Specification or implementation.

Do not resolve material ambiguity by guessing.

### 6. Produce the Research Handoff

Return structured findings containing:

- Task
- Sources inspected
- Verified findings
- Relevant existing implementation
- Requirements identified
- Design / Figma findings
- Assets
- Constraints
- Verification requirements
- Risks
- Assumptions
- Open questions
- Readiness assessment

The Research Handoff is an evidence package for the next stage.

It is not the final Task Specification unless the parent explicitly uses the findings to create one.

## Output discipline

Research output must be:

- concise;
- traceable to inspected evidence;
- limited to the frontend task;
- clear about uncertainty;
- useful to the parent/root agent and downstream planning.

Do not include irrelevant repository information.

## Boundaries

This Skill does not:

- modify source code;
- install dependencies;
- change requirements;
- expand scope;
- commit;
- push;
- create pull requests;
- authorize consequential actions;
- silently resolve material ambiguity.

## Final rule

Research establishes what is known.

It does not decide what should be implemented when that decision requires missing requirements or human judgment.

When material information is unavailable:

`IDENTIFY THE GAP → DO NOT INVENT THE ANSWER → SURFACE THE GAP`