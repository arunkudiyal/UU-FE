# 🚀 Git Fundamentals Guide

## 📌 1. Git Stages (The Lifecycle of Changes)

Git tracks changes through **4 main stages** :-

### 1. Untracked Stage (_U_)
- Where you create/edit files
- Changes are **not tracked yet**

### 2. Staging Stage (_A_)
- Files prepared for commit
- Think of it as a **checkpoint preview**

### 3. Modified Stage (_M_)
- Stores committed snapshots permanently

### 4. Committed Stage
- Stores committed snapshots permanently

---

## 📌 2. Essential Git Commands

### 🔹 `git init`
- Initializes a new Git repository
- Creates a hidden `.git` folder in the directory
- `.git` folder keeps the track records of the changes (Not to modify)

---

### 🔹 `git status`
- Shows current state of files
- Displays:
  - Modified files (_M_)
  - Staged files (_A_)
  - Untracked files (_U_)


---

### 🔹 `git add`
- Moves files to staging area

Add specific file - `git add <fileName>` \
Add all files - `git add .`

---

### 🔹 `git commit`
- A commit is a checkpoint of the codebase
- A commit is stored as a snapshot of the current code tree
- Saves staged changes to repository  
`git commit -m <commit_message>`

---

### 🔹 `git remote add origin`
- Connects local repo to remote repo (GitHub, etc.)
- ORIGIN --> https://[TOKEN]@github.com/[USER_NAME]/[REPO_NAME]


---

### 🔹 `git push -u origin main`
- Pushes code to remote repository



- `-u` sets upstream (so future push can be just `git push`)

---

## 📌 3. Concept of Branches & Main Branch

### 🌿 What is a Branch?
- A **separate line of development**
- Allows you to work without affecting main code

### 🌳 Main Branch (`main` / `master`)
- Default branch
- Represents **stable production code**

### 💡 Why Use Branches?
- Feature development
- Bug fixes
- Experimentation

---

## 📌 4. Branch Commands

### 🔹 `git branch`
- Lists all branches

### 🔹 `git branch b1`
- Creates a branche named 'b1'

### 🔹 `git checkout b1`
- Switch to branch 'b1'

### 🔹 `git branch -D b1`
- Deletes the branches 'b1'


---

## 📌 5. Merge Conflict (Critical Concept)

### ⚠️ What is a Merge Conflict?
Occurs when:
- Two branches modify the **same part of a file**
- Git cannot decide which version to keep

---

### 🔍 Example Conflict

---

### 🛠️ How to Resolve

1. Open conflicted file
2. Manually edit the correct version
3. Remove conflict markers
4. Stage changes:


---

### ✅ Best Practices to Avoid Conflicts

- Pull latest changes before working:


- Keep branches short-lived
- Commit frequently
- Communicate with team

---

## 🧠 Summary

- Git tracks changes via **3 stages**
- Commits act as checkout & can be followed through `git checkout <commit_number>`
- Branching enables **parallel development**
- Merge conflicts require **manual resolution**

---
