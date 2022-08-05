---
type: slides
title: 'module5_03'
---

# Merging branches

---

## Merging branches


<center>

<img src='/module5/branches-house-analogy-explained.png' width="100%" alt="404 image"/>

</center>

Notes:
Once you have finished your modifications in the branch you are working on, it is time to merge your changes to the `main` branch!

Upon merging, the changes you were working on in a particular branch are combined with the content of the `main` branch (or any other branch that you decide to merge your changes with).


---

## Merging branches (JupyterLab)

<center>

<img src='/module5/merge-branch.png' width="100%" alt="404 image"/>

</center>


Notes:
To merge a branch using JupyterLab, you have to click on the tab **Branches** and then on the name of the branch you want to merge your current work into. For example, if you are working on the branch `main`, you can click next to the `report` branch in the side panel and select "Merge this branch into the current branch".

Notice that after doing this, the report branch is not deleted automatically, so you can still access it if you need to.

---

## Merging branches (Terminal)

<center>

<img src='/module5/merge-branch-2.png' width="100%" alt="404 image"/>

</center>

Notes:
If you want to use the terminal to merge the branches and you are currently working on the `main` branch, you can type `git merge <branch>` to merge the commits from the branch with the new feature into the `main` branch. In this slide, we merged in the changes of the branched named `report` into `main` by typing `git merge report` while having the `main` branch active.

---

## Visualizing merged branches

<center>

<img src='/module5/git-history-log.png' width="100%" alt="404 image"/>

</center>


Notes:
Let's see how VS Code's graphical representation of the Git history changed when we merged the branches together. Remember that you can open VS Code from the terminal using the command `code .`. Then go to **View > Command Palette** and start writing `Git: View History (git log)`. A new tab will open with the Git History. If you want to display all the branches you will have to select them in one of the menus.

---

## Deleting branches (JupyterLab)

<center>

<img src='/module5/delete-branch.png' width="100%" alt="404 image"/>

</center>

Notes:
You will notice that merging the branch will not automatically delete it. If you are not going to be developing that feature anymore you can delete the branch after merging it by clicking on the small garbage bin icon in the **Branches** tab.

You can only delete a branch when you are not working on it (it is not highlighted in blue in the JupyterLab UI) and although it can be difficult to recover the information after it is deleted, you can safely do so after successfully merging the changes into another branch.

---

## Deleting branches (terminal)


<center>

<img src='/module5/delete-branch-t.png' width="100%" alt="404 image"/>

</center>


Notes:

If you want to delete the branches using the terminal you can use the command `git branch -d <branch-name>`.


Now that you have a better grip on how to read the Git history and how to merge branches, it will be easier to work with both branches and forks.

---

# Let's apply what we learned!
