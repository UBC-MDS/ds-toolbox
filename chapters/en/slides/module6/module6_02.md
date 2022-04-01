---
type: slides
---

# What is .gitignore?

Notes:

---

`.gitignore` is used to tell Git to ignore irrelevant files.

You may have encountered this before:

```
git status
```

```
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.ipynb_checkpoints/
	.DS_Store

no changes added to commit (use "git add" and/or "git commit -a")
```

Notes:

Git is letting us know about untracked files (ones we have never committed before). We don’t care about these files. We’d prefer not to have them clutter our view (so we can pay attention to files we do want to track). What do we do?

---

# Create a `.gitignore` file

Using the plain text editor of your choice (mine is VS Code) create a file called .gitignore inside your Git repo:

```
code .gitignore
```

<br>
Inside the text file, list the files and folders you would like to ignore, one per line. For example:

```
.ipynb_checkpoints/
.DS_Store
```

<br>
Save the file, and add and commit it with Git. Then try git status again. You should see:

```
On branch main
nothing to commit, working tree clean
```

Notes:

---

# .gitignore tips and tricks

- Append **/ to the beginning of any file/folder names listed in the `.gitignore` file to have them ignored in subdirectories within the repo as well
- Create a global `.gitignore` file so that you do not have to create the same `.gitignore` for all your homework repos

<br>

Steps to follow:

- Use a text editor (e.g., VS Code, nano, Jupyter) to create a file called `.gitignore`
- Add `**/.ipynb_checkpoints/` to that file and save it
- `add` and `commit` it with Git
- Type git status and see if you no longer see `.ipynb_checkpoints/` as a untracked file

Notes:

---

# Let's get started!
