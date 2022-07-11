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

Notes: Once you have finished your modifications in the branch you are working, it is time to merge your changes to the `main` branch!

The changes you was working on isolation in a particular branch now are combined with the content of the `main` branch (or the branch you decide to merge your changes with)


---

# Merging branches (JupyterLab)

<center>

<img src='/module5/merge-branch.png' width="100%" alt="404 image"/>

<center/>


Notes: To merge a branch using JupyterLab, you have to click in the tab **Branches** the name of the branch you want to merge your current work on it. For example, if you are working on the branch `report`, you can click next to the `main` branch and select "Merge this branch into the current branch"

Notice that after doing this, the report branch is not deleted except you do so explicitly.


---

# Merging branches (terminal)

<center>

<img src='/module5/merge-branch-2.png' width="100%" alt="404 image"/>

<center/>

Notes:

If you want to use the terminal to merge the branches you can type `git merge <branch>` to merge the commits from the `report` branch into the `main` branch. Remember that you have to be in the oposite branch 


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

You will notice that merging the branch will not make it dissapear. If you are not going to be developing that feature anymore you can delete it after merging it. You can delete a branch only when you are not working on it (it is not colores as blue)

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
