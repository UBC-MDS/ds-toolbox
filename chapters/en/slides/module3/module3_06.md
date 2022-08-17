---
type: slides
title: 'module3_06'
---

# Pulling changes from a remote repository

---

## Pulling changes from GitHub

<center>

<img src='/module3/vc-pull.png' width="55%" alt="404 image"/>

</center>

Notes:
If you are working on a project with collaborators,
they will also be making changes to files
(e.g., to the analysis code in a Jupyter notebook and the project’s `README` file),
committing them to their own local repository,
and pushing their commits to the remote GitHub repository to share them with you.
When they push their changes,
those changes will initially only exist in the remote GitHub repository
and not in your local repository on your computer.

To obtain the new changes from the remote repository on GitHub,
you will need to pull/download those changes to your own local repository.
By pulling changes, you synchronize your local repository to what is present on GitHub.
Additionally, until you pull changes from the remote repository,
you will not be able to push any more changes yourself
(though you will still be able to work and make commits in your own local repository).

---

## Pulling changes from GitHub (JupyterLab IDE)


<center>

<img src='/module3/vc-pull-jupyter.png' width="70%" alt="404 image"/>

</center>


Notes:

The GitHub interface indicates the name of the last user
to push a commit to the remote repository,
a preview of the associated commit message,
the unique commit hash, and how long ago the commit was made.

In this example,
we can see that someone else
has made a change to the repository.
In the next slide we will see
how we can use JupyterLab
to pull/download this change
to our local Git repository.

---

## Pulling changes from GitHub (JupyterLab IDE)

<center>

<img src='/module3/vc-pull-jupyter-1.png' width="80%" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

To pull from GitHub in JupyterLab,
there are N steps:

**Step 1. Click the pull button in the JupyterLab Git extension.**

You can tell Git to "pull" down
any new changes from the remote repository at GitHub.com
by clicking on the cloud icon with the down arrow in JupyterLab.

---

## Pulling changes from GitHub (JupyterLab IDE)

<center>

<img src='/module3/vc-pull-jupyter-4.png' width="70%" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

**Step 2. Refresh any open files that had changes pulled down.**

Once the files are successfully pulled from GitHub,
you need to click “Dismiss” on the dialog box before you keep working.
It is also important that you refresh or reopen any files
that had changes pulled down from GitHub.
If you don't,
JupyterLab will keep displaying the old version of the file
and it will be confusing if you make changes to this version
instead of the newly pulled down version from GitHub.com.

In this slide,
the red arrows are indicating the changes to the open notebook
after pulling and refreshing.

---

## Pulling changes from GitHub (JupyterLab IDE)

<center>

<img src='/module3/vc-pull-jupyter-4.png' width="70%" alt="404 image" />

</center>

Notes:

🙌  **Practice**

The newly pulled changes will also show up in the history tab,
since they are now part of your local repository,
just as any commit you made on your computer.

It is good practice to pull any changes at the start of every work session
before you start editing any files in your local repository.

---

## Pulling changes from GitHub (Terminal)

<center>

<img src='/module3/vc-pull-jl-terminal.png' width="60%" alt="404 image" />

</center>

Notes:

🙌  **Practice**

If you want to pull changes from GitHub.com
via the terminal,
you can use the command `git pull`.
As you can see in this slide,
the Git will print a summary of what it changed
when you run `git pull`
(in this case two insertions/additions were made to the file `README.md`).

---

# Let's apply what we learned!
