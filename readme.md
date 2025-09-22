# 🌌 MindDial

MindDial is an application built using a **GitFlow-inspired branching strategy** to ensure clean development, safe releases, and predictable workflows.

---

## 🚀 Branching Strategy

We use the following branches:

### 🔹 `main`

- **Production-ready branch**.
- Always stable and deployable.
- Only **release** and **hotfix** branches are merged here.

### 🔹 `dev`

- **Integration branch** for ongoing development.
- All features and bugfixes are merged here.
- Represents the **next version** of the app before release.

### 🔹 `feature/*`

- For **new features**.
- Branch off from `dev`.
- Example: `feature/chat-module`
- Merge back into `dev` via Pull Request (PR).

### 🔹 `bugfix/*`

- For **bug fixes during development**.
- Branch off from `dev`.
- Example: `bugfix/payment-rounding`
- Merge back into `dev` via PR.

### 🔹 `hotfix/*`

- For **urgent fixes in production**.
- Branch off from `main`.
- Example: `hotfix/login-crash`
- Merge into both `main` **and** `dev`.

### 🔹 `release/*`

- For **preparing a new release**.
- Branch off from `dev`.
- Example: `release/v1.0.0`
- Merge into both `main` (production) and `dev` (to stay in sync).

---

## 🔄 Workflow Summary

1. **Create branches** based on your work:
   - `feature/*` → new features
   - `bugfix/*` → bug fixes
   - `hotfix/*` → urgent production fixes
   - `release/*` → preparing a release

2. **Merges:**
   - `feature/*` → `dev`
   - `bugfix/*` → `dev`
   - `release/*` → `main` + `dev`
   - `hotfix/*` → `main` + `dev`

3. **Rules:**
   - `main` = production-ready only
   - `dev` = latest integrated development
   - PR reviews + CI checks required before merging

---

## ✅ Example Flow

```bash
# Start a new feature
git checkout dev
git checkout -b feature/chat-module
# work, commit, push
git push origin feature/chat-module

# Open PR → dev
# After review + CI → merge into dev
```
