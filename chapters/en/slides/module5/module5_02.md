---
type: slides
title: 'module5_02'
---

# How branches are related

---

## How branches are related 🙌

1. Create and clone a **Git repository** to your computer.
2. Create 2 commits (e.g. modifying README file).
3. Push to GitHub.
4. Start a new branch using the terminal or JupyterLab.
5. Create 2 commits in the new branch.
6. Go back to the `main` branch.
7. Create 2 commits in the `main` branch.

Notes:
Before moving forward, let's practice!

Remember that after you create the branch you are always going to be working on that new branch except if you go back to your original branch by clicking the name of the branch you want to return in the Branches tab (JupyterLab) or with `git switch <branch-name>` (terminal).

We will use the repository you just created as an example for the rest of this module.

---

## Seeing how branches are related (terminal)

<br>
<br>
<br>

<center>

<img src='/module5/branches-related.png' width="600px" alt="404 image"/>

</center>

Notes:


For this section we are going to simulate that we start working on a project. After cloning the repository for the first time we want to see what the branches look like. To see all branches as well as a graph indicating their relationship, we can type `git log --oneline --all --graph` in the terminal.

We can easily detect all the different branches (for example, `origin/hosting-revisions` means that the remote branch `hosting-revisions` it is in the commit 558114c)

Remember that you can use `space` on your keyboard to page down through the commit history and `b` to page up. Press `q` to exit back out to the terminal.

---

## Seeing how branches are related (VS Code)

<br>
<br>
<br>

<center>

<img src='/module5/git-history-log-unmerged.png' width="600px" alt="404 image"/>

</center>


Notes:
Even if the branch representation that we can view in the terminal is correct, it is not as visually appealing as what we can get from graphical interfaces such as VS Code.

Open the current folder in VS Code by typing `code .` inside your git folder (remember that `.` is a shortcut that means "current directory"). In VS Code, go to the extensions tab and search for "git history", install the extension and go to the source control tab in the left side bar, and then click the new Git history icon. 

Where it currently says "master", change it to show "All branches" and you should now see a nice graphical overview looking like the one in the picture. If the Git history view hangs or looks strange, press "Refresh". You're free to use the one you prefer between VS Code and `git log`, but many of the commands are the easiest to run via terminal.

---

## Observing the trees

<br>
<br>
<br>

<center>

<img src='/module5/observing-trees.png' width="600px" alt="404 image"/>

</center>

Notes:

Downloading a public GitHub repository from a project you like and observing the number of branches is an excellent exercise. For example you can try to determine how many branches exist that have not been merged and where the most recent modifications have occurred.

Understanding these graph-based commit history visualizations is helpful to understand the relationships between branches, provides vital information about the structure of a project, and can help you fix problems if they arise.

In this slide, you can see the public repository of JupyterLab that has been cloned and opened using VS Code.
Here we can see that there are three active branches: the default master branch (the topmost commit), the branch for version 3.4 (the second commit from the top), and an older branch with a snapshot of the repo (commit message: "Update snapshots for challenger commit").

---

# Let's apply what we learned!



