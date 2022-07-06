---
type: slides
title: 'module5_02'
---

# Seeing how branches are related

---


# Seeing how branches are related


Notes: Before moving forward, let's practice

1. Open a playground Git repository in your computer that you can use to try.
2. Create 3 commits.
3. Push to GitHub.
4. Start a new branch using the terminal or JupyterLab.
5. Go back to the main branch.

Remember that after you create the branch you will always going to be working on that new branch except you apply step 4.


You can see that we have a new reference now (to our local lecture-todo branch), and HEAD indicates that this is where we are currently. Since we are done with our feature development on the lecture-todo branch, we could now go back to the master branch with git switch master and then merge in the changes by running git merge lecture-todo. Just as when you do a pull request and there are no conflicting changes, git will "fast forward" your master branch, which means it will incorporate all the changes from the lecture-todo branch. But let's create a more realistic scenario instead.

---

# Seeing how branches are related (terminal)


<center>

<img src='/module5/branches-related.png' width="100%" alt="404 image"/>

<center/>

Notes: 

For this section we are going to similate that we start working in a project. After cloning the repository for the first time we want to see how the branches looks like. To see all branches as well as a graph indicating of their relationship instead do `git log --oneline --all --graph` in the terminal.

As you can see uuou can track all the different branches (for example, `origin/hosting-revisions` means that the branch `hosting-revisions` it is in the commit 558114c)

You can use the arrows on your keyboard to see the full history and the `q` to exit the code.

---

# Seeing how branches are related (VS Code)

<center>

<img src='/module5/git-history-log-unmerged.png' width="100%" alt="404 image"/>

<center/>


Notes: Even if the representation that we can get form the terminal is not wrong, it is not the more user friendly. Open VS Code by typing `code .` inside your git folder, this will start VS Code with the current directory open (remember that `.` is a shortcut that means "current directory"). In VS Code, go to the extensions tab and search for "git history", install the extension and go to the source control tab in the left side bar, and then click the new Git history icon. Where it currently says "master", change it to show "All branches" and you should now see a nice graphical overview looking like this:

(If the Git history view hangs or looks strange, press "Refresh") You're free to use the one you prefer between VS Code and `git log`, but many of the commands are the easiest to run via terminal (although things like adding, committing, pulling and pushing can also be done in VS Code).

---

# Observing the trees

<center>

<img src='/module5/observing-trees.png' width="100%" alt="404 image"/>

<center/>

Notes:

Downloading a public GitHub repository from software you use or a project you enjoy and counting the number of branches is an excellent exercise. Determine how many branches exist that have not been merged and where the most recent modifications have occurred.

In the image, you can see the public repository of JupyterLab that has been cloned and opened using VS Code.

Understanding how the relationships between the branches evolve provides vital information about the structure of a project, the different modifications, and how to fix problems if they arise. 

---


# Let's apply what we learned!



