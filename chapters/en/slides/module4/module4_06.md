---
type: slides
title: 'module4_06'
---

# What is .gitignore?

Notes:
In this slide deck we will learn how we can tell Git to exclude certain files from its version control.

---

## Unnecessary untracked files

You may have encountered this before:

```
git status
```

```out
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.ipynb_checkpoints/
	.DS_Store

no changes added to commit (use "git add" and/or "git commit -a")
```

Notes:

As we know,
Git let us know about untracked files when we run the command `git status`.
An untracked file or folder one that you didn't have in the previous commit, 
and which hasn't yet been staged. 
In the example on this slide,
there is an untracked folder and file that are automatically saved:

- `.ipynb_checkpoints` contain old backup versions of our notebook which are saved by JupyterLab automatically.
- `.DS_Store` contains directory display options for the Finder application on MacOS.

The fact that they both start with a `.` means 
that they will be hidden in file browsers and in the output from `ls` in the terminal;
an indication that they are not something that we need to work with manually,
but are there for applications on our computer to use when needed.

Therefore,
we also don't care about making these folders part of our version controlled project
and we’d prefer not to have them clutter our view of the `git status` output,
so that we instead can focus on the files we do want to track.
How can we achieve this?

---

## Create a `.gitignore` file

<br>
<br>
<br>
<br>


Use a text editor of your choice (here we use VS Code) to create a file called `.gitignore` inside your Git repo:

```
code .gitignore
```

<br>
Inside the text file, list the files and folders you would like to ignore, one per line. For example:

```
.ipynb_checkpoints/
.DS_Store
```

Notes:
To "hide" folders and files from Git
we can create a file called `.gitignore` in the root/main directory of our repository
(the same directory where the `.git` folder is located).
These two slides describe how we can create this file using VS Code,
and what we need to add to it
in order to ignore the two files from the previous slide.

---

## Create a `.gitignore` file

<br>
<br>
<br>
<br>
Save the file, add it to the staging area, and commit the changes with Git. 
<br>
Then try `git status` again. You should now see that the files are ignored by Git:

```
git status
```

```out
On branch main
nothing to commit, working tree clean
```

Notes:


---

## .gitignore tips and tricks

<br>
<br>
<br>
<br>

Here are two useful tricks so that you can avoid doing unnecessary work when it comes to `.gitignore`:

<br>

1. Recursively ignoring filename patterns

2. Using `.gitignore_global` to ignore certain patterns in every repository

Notes:
While we could list out every file we want to ignore
in every project's `.gitignore`,
this can quickly become tedious to type.

Instead,
we can use filename pattern matching and global Git settings
to simplify this process.
We will look closer at each of these two approach in the next couple of slides.

---

## 1. Recursively ignoring of filename patters

<br>
<br>
<br>
<br>

Wildcards can be used inside `.gitignore` to ignore multiple files with the same name:

```
*.log
```

Prepending `**/` to filenames ignores those files in subdirectories as well:

```
**/.*log
```

Notes:
The `.gitignore` file accepts wildcards for matching pattern names,
similar to what we learned about for the shell in Module 2.
So say that we e.g. have a Git repository
where a lot of log files files are created
and they all end in `.log`.
Instead of typing out the name of each file,
we could add `*.log` to the `.gitignore` file
and it would ignore all the log files in the root of the repository.

If we wanted to ignore the log files in every subdirectory of the project,
we would need to use the `**/` patterns,
which means "in any folder".
The line in our `.gitignore` would now read `**/*.log`.

---

## 1. Recursively ignoring of filename patters

<br>
<br>
<br>
<br>

Starting with a `!` tells git to not ignore a certain directory.

```
**/*.log
!important/*.log
```

Notes:

What if we wanted to ignore all the log files,
except those inside a specific directory?
Let's imagine the directory of the log files we want to keep is called important.
We would now need to add two lines to our `.gitignore`:
one to ignore all log files,
and a second to tell git to not ignore the log files in the important directory.
It would look like this:

```
**/*.log
!important/*.log
```

---

## 2. Using `.gitignore_global`

<br>
<br>
<br>
<br>

Create a global `.gitignore` file in your home directoy so that you do not have to create the same `.gitignore` for all your repos

```
code ~/.gitignore_global
```
Notes:
Now comes the second trick: There might be certain files that you'd like to always get ignored in all repos. In that case, you can add them once to a global `.gitignore` file called `.gitignore_global` which lives in your home directory.



---

## 2. Using `.gitignore_global`

<br>
<br>
<br>
<br>


- Just like for a regular `.gitignore` file, add a list of files and folders that you want to get ignored in **all** repos on your computer

- Save `.gitignore_global` file and configure Git to exclude the file for every Git repository in your computer.

```
git config --global core.excludesfile ~/.gitignore_global
```

Notes:

This way, you'll no longer need to add those particular files or folder names to the `.gitignore` file of each repo on your computer!

You can read more about ignoring files on the [GitHub documentation](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)

---

# Let's apply what we learned!
