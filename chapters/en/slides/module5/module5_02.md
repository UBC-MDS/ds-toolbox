---
type: slides
title: 'module5_02'
---

# Seeing how branches are related

---


# Seeing how branches are related 🙌

1. Create and clone a **Git repository** to your computer.
2. Create 2 commits.
3. Push to GitHub.
4. Start a new branch using the terminal or JupyterLab.
5. Create 2 commits in the new branch.
6. Go back to the `main` branch.
7. Create 2 commits in the `main` branch.

Notes: Before moving forward, let's practice!

Remember that after you create the branch you will always going to be working on that new branch except you go back to your original branch clicking the name of the branch you want to return in the Branches tab (JupyterLab) with `git switch <branch-name>` (terminal).

Now you can use this repository as an example for the rest of this module.

---

# Seeing how branches are related (terminal)


<center>

<img src='/module5/branches-related.png' width="100%" alt="404 image"/>

<center/>

Notes: 

For this section we are going to simulate that we start working on a project. After cloning the repository for the first time we want to see how the branches looks like. To see all branches as well as a graph indicating of their relationship instead do `git log --oneline --all --graph` in the terminal. 

We can easily detect all the different branches (for example, `origin/hosting-revisions` means that the branch `hosting-revisions` it is in the commit 558114c)

You can use the arrows on your keyboard to see the full history and the `q` to exit again to the terminal.

---

# Seeing how branches are related (VS Code)

<center>

<img src='/module5/git-history-log-unmerged.png' width="100%" alt="404 image"/>

<center/>


Notes: Even if the representation that we can get form the terminal is not wrong, it is not the more user friendly.

Open VS Code by typing `code .` inside your git folder, this will start VS Code with the current directory open (remember that `.` is a shortcut that means "current directory"). In VS Code, go to the extensions tab and search for "git history", install the extension and go to the source control tab in the left side bar, and then click the new Git history icon. 

Where it currently says "master", change it to show "All branches" and you should now see a nice graphical overview looking like the one in the picture. If the Git history view hangs or looks strange, press "Refresh". You're free to use the one you prefer between VS Code and `git log`, but many of the commands are the easiest to run via terminal.

---

# Observing the trees

<center>

<img src='/module5/observing-trees.png' width="100%" alt="404 image"/>

<center/>

Notes:

Downloading a public GitHub repository from a project you like and observing the number of branches is an excellent exercise. Determine how many branches exist that have not been merged and where the most recent modifications have occurred.

In the image, you can see the public repository of JupyterLab that has been cloned and opened using VS Code.

Understanding how the relationships between the branches provides vital information about the structure of a project, the different modifications, and how to fix problems if they arise. 

---


# Let's apply what we learned!



