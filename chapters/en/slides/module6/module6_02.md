---
type: slides
---

# What is .gitignore?

Notes:

---

<br>

`.gitignore` is used to tell Git to ignore irrelevant files.

<br>

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

Git is letting us know about untracked files (ones we have never committed before).

We don’t care about these files. We’d prefer not to have them clutter our view, so we can pay attention to files we do want to track.

What do we do?

---

# Create a `.gitignore` file

<br>

Using the plain text editor of your choice (mine is VS Code) create a file called `.gitignore` inside your Git repo:

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

Here are the steps you need to take in order to have Git ignore the files and folders that you don't want to be committed to your repo.

---

# .gitignore tips and tricks

<br>

Here are two useful tricks so that you can avoid doing unnecessary work when it comes to `.gitignore`:

<br>

1. Recursive ignoring of filename patterns

2. Using `.gitignore_global` to ignore certain patters in every repository

---

# 1. Recursive ignoring of filename patters

<br>

Append `**/` to the beginning of any file/folder name listed in the `.gitignore` file to have them ignored in subdirectories within the repo as well

<br>

Here are the steps to follow:

- Use a text editor (e.g., VS Code, nano, Jupyter) to create a file called `.gitignore`

- Add `**/.ipynb_checkpoints/` to that file and save it

- `add` and `commit` it with Git

- Type `git status` and see if you no longer see `.ipynb_checkpoints/` as an untracked file

Notes:

The first trick:
if you need a particular file or folder name to be ignored by Git everywhere,
you don't need to list the path to each and every instance of that file or folder name in your `.gitignore`.

Simply add `**/` to the beginning of that file or folder name!

---

# 2. Using `.gitignore_global`

<br>

Create a global `.gitignore` file so that you do not have to create the same `.gitignore` for all your repos

<br>

Here are the steps to follow:

- Use a text editor to create a file called `.gitignore_global`. You can run `code ~/.gitignore_global` in a terminal to do this.

- Just like for a regular `.gitignore` file, add a list of files and folders that you want to get ignored in **all** repos on your computer

- Save `.gitignore_global`

<br>

The specified files should now be automatically ignored in all repos, without needing to add them in the `.gitignore` of each repo!

Notes:

Now comes the second trick:

There might be certain files that you'd like to always get ignored in all repos.

In that case, you can add them once to a global `.gitignore` file called `.gitignore_global` which lives in your home directory.

This way, you'll no longer need to add those particular file or folder names to the `.gitignore` file of each repo on your computer.

---

# Let's get started!
