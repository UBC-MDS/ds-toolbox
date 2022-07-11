---
type: slides
title: 'module5_03'
---

# Merging branches

---

## Merging branches


<center>

<img src='/module5/branches-house-analogy-explained.png' width="100%" alt="404 image"/>

<center/>

Notes: Once you have finished your modifications in the branch you are working on, it is time to merge your changes to the `main` branch!

Upon merging, the changes you were working on in a particular branch are combined with the content of the `main` branch (or any other branch that you decide to merge your changes with).


---

# Merging branches (JupyterLab)

<center>

<img src='/module5/merge-branch.png' width="100%" alt="404 image"/>

<center/>


Notes: To merge a branch using JupyterLab, you have to click on the tab **Branches** and then on the name of the branch you want to merge your current work with. For example, if you are working on the branch `report`, you can click next to the `main` branch and select "Merge this branch into the current branch".

Notice that after doing this, the report branch is not deleted automatically, so you can still access it if you need to.


---

# Merging branches (terminal)

<center>

<img src='/module5/merge-branch-2.png' width="100%" alt="404 image"/>

<center/>

Notes:

If you want to use the terminal to merge the branches and you are currently working on the `main` branch, you can type `git merge <branch>` to merge the commits from the branch with the new feature into the `main` branch. In this slide, we merged in the changes of the branched named `report` into `main`.


---
# Merging branches

<center>

<img src='/module5/git-history-log.png' width="100%" alt="404 image"/>

<center/>


Notes: 
Let's see how these graphics change once we merge the branches together on VS Code. Remember that you can open the editor from the terminal using the comand `code .` and then writting `git history`. 

---

# Deleting branches (JupyterLab)

<center>

<img src='/module5/delete-branch.png' width="100%" alt="404 image"/>

<center/>

Notes:

You will notice that merging the branch will not automatically delete it. If you are not going to be developing that feature anymore you can delete the branch after merging it by clicking on the small garbage bin icon in the "Branches" tab.
`

Be careful because if you didn't merge it it can be difficult to recover the information.

---

# Deleting branches (terminal)


<center>

<img src='/module5/delete-branch-t.png' width="100%" alt="404 image"/>

<center/>


Notes:

If you want to delete the branches using the terminal you can use the command `git branch -d <branch-name>`.


Now that you have a strong idea of where you are in the Git commit tree it will be easier to deal with branches and forks.

---

# Let's apply what we learned!
