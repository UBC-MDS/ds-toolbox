---
type: slides
title: 'module5_02'
---

# Seeing how branches are related

---


## Seeing how branches are related 🙌

1. Create and clone a **Git repository** to your computer.
2. Create 2 commits.
3. Push to GitHub.
4. Start a new branch using the terminal or JupyterLab.
5. Create 2 commits in the new branch.
6. Go back to the `main` branch.
7. Create 2 commits in the `main` branch.

Notes: 

Before moving forward, let's practice!

Remember that once you create the branch,
you will always going to be working on that new branch.
You can return to your original branch 
by clicking the name of the branch 
in the **Branches** tab (Jupyter Lab) 
or by typing `git switch branch-name>` (terminal).


We will use the repository you have created
as an example for the rest of this module.

---

## Seeing how branches are related (terminal)


<center>

<img src='/module5/branches-related.png' width="100%" alt="404 image"/>

<center/>

Notes: 

In this section, 
we will pretend that we are starting a new project.
We want to see what the branches look like
after cloning the repository for the first time.
In the terminal, 
type `git log —oneline —all —graph`
to see all branches as well as
a graph indicating their relationship.


We can easily identify all of the different branches.
For example, `origin/hosting-revisions`
indicates that the remote branch `hosting-revisions`
is in commit 558114c.


You can use `space` on your keyboard 
to page down through the commit history and
`b` to page up. 
Press `q` to exit back out to the terminal.

---

## Seeing how branches are related (VS Code)

<center>

<img src='/module5/git-history-log-unmerged.png' width="100%" alt="404 image"/>

<center/>


Notes:

Even if the branch representation displayed in the terminal is correct,
it is not as visually appealing as 
what can be obtained from graphical interfaces such as VS Code.


Open the current folder in VS Code by typing `code .` 
(remember that `.` is a shortcut for "current directory").
Go to the extensions tab in VS Code and search for "Git history",
install the extension, and then go to 
the source control tab 
in the left side bar and click the new Git history icon.


Change the text "master" to "All branches" 
and you should see a nice graphical overview 
similar to the one shown in the image.
Press "Refresh" if the Git history view hangs or looks strange.
You can choose between VS Code and 'git log,

---

## Observing the trees

<center>

<img src='/module5/observing-trees.png' width="100%" alt="404 image"/>

<center/>

Notes:

Downloading a public GitHub repository 
from a project you like and
observing the number of branches 
is an excellent exercise.
Determine how many branches exist that
have not been merged and where 
the most recent modifications have occurred.

In the image, 
you can see the public repository of Jupyter Lab 
that has been cloned and opened using VS Code.

Understanding these graph-based commit history visualizations 
can help you to understand the relationships between branches,
provide vital information about the structure of a project,
and help you troubleshoot problems that could arise. 
For example,
we can tell from the image in this slide shows
that there are three active branches:
the default `master` branch (the topmost commit), 
the branch for version 3.4 (the second commit from the top),
and an older branch with a snapshot of the repository
(commit message: "Update snapshots for challenger commit").

---


# Let's apply what we learned!



