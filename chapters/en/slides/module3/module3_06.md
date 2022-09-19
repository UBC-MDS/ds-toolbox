---
type: slides
title: 'module3_06'
---

# Pulling changes from a remote repository

---

## Pulling changes from GitHub

<center>

<img src='/module3/vc-pull.png' width="550px" alt="404 image"/>

</center>

Notes:
If you are working on a project with collaborators,
they will also be making changes to files
(e.g., to the analysis code in a
Jupyter notebook and the project’s `README` file),
committing them to their own local repository,
and pushing to the remote GitHub repository 
to share their commits with you.
When they push their changes,
those changes will initially 
only exist in the remote GitHub repository
and not in your local repository on your computer.

To obtain the new changes from the remote repository on GitHub,
you will need to pull/download those changes to your own local repository.
By pulling changes, 
you synchronize your local repository to what is present on GitHub.
Additionally, until you pull changes from the remote repository,
you will not be able to push any more changes yourself
(though you will still be able to work 
and make commits in your local repository).

---

## Pulling changes from GitHub (JupyterLab IDE)

<br>
<br>
<br>

<center>

<img src='/module3/vc-pulling-contributor-commit.png' width="850px" alt="404 image"/>

</center>


Notes:

The GitHub interface indicates the name of the last user
to push a commit to the remote repository,
a preview of the associated commit message,
the unique commit hash, and how long ago the commit was made.

In this example,
we can see that someone else
has made a change to the repository.
We can use Jupyter Lab
to pull/download this change
to our local Git repository.

---

## Pulling changes from GitHub (JupyterLab IDE)

<br>
<br>
<br>
<br>
<br>

<center>

<img src='/module3/vc-pull-jupyter.png' width="850px" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

To pull from GitHub in JupyterLab,
there are two steps:

**Step 1. Click the pull button in the Jupyter Lab Git extension.**

You can tell Git to "pull" down
any new changes from the remote repository at GitHub.com
by clicking on the cloud icon with the down arrow in Jupyter Lab.

---


## Pulling changes from GitHub (JupyterLab IDE)

<br>
<br>
<br>


<center>

<img src='/module3/vc-pull-latest.png' width="850px" alt="404 image"/>

</center>

Notes:

In some cases, JupyterLab can warn you about continue modyfing your files locally when there are changes in the branch you are working. It is better to always keep the files updated with the remote and pull the changes!

---

## Pulling changes from GitHub (JupyterLab IDE)

<br>
<br>
<br>
<br>
<br>

<center>

<img src='/module3/vc-pull-reopen-notebook.png' width="850px" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

**Step 2. Refresh any open files that had changes pulled down.**

Once the files are successfully pulled from GitHub,
it is important that you refresh or reopen any files
that had changes pulled down from GitHub.
If you don't,
Jupyter Lab will keep displaying the old version of the file
and it will be confusing if you make changes to this version
instead of the newly pulled down version from GitHub.com.

In this slide,
the red arrows are indicating the changes to the open notebook
after pulling and refreshing.

---

## Pulling changes from GitHub (JupyterLab IDE)

<br>
<br>
<br>
<br>
<br>

<center>

<img src='/module3/vc-pull-history.png' width="850px" alt="404 image" />

</center>

Notes:

🙌  **Practice**

The newly pulled changes will also show up in the history tab,
since they are now part of your local repository,
just as any commit you made on your computer.

It is best practise to pull the changes 
at the start of each work session before 
you begin editing any files in your local repository.

---

## Pulling changes from GitHub (Terminal)

<br>
<br>
<br>

<center>

<img src='/module3/vc-pull-terminal-jl.png' width="850px" alt="404 image" />

</center>

Notes:

🙌  **Practice**

If you want to pull changes from GitHub.com
via the terminal,
you can use the command `git pull`.
As you can see in this slide,
Git will print a summary of what it changed
when you run `git pull`
(in the image one insertions/additions were made to `eda.ipynb`).

---

# Let's apply what we learned!
