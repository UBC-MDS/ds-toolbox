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

Notes: 

Once you've completed your changes 
in the branch you're working on, 
it's time to merge them into the `main` branch!


When you merge, 
the changes you were working on 
in one branch are combined with
the content of the `main` branch 
(or any other branch that you decide to merge your changes with). 


---

## Merging branches (JupyterLab)

<center>

<img src='/module5/merge-branch.png' width="100%" alt="404 image"/>

<center/>


Notes: 

To merge a branch in JupyterLab, 
go to the **Branches** tab and then 
click on the name of the branch you want to merge your current work with.
For example,
if you are working on the branch `report`,
you can select "Merge this branch into the current branch"
by clicking next to the'main' branch.


The report branch is not automatically deleted after this,
so you can still access it if necessary. 


---

## Merging branches (terminal)

<center>

<img src='/module5/merge-branch-2.png' width="100%" alt="404 image"/>

<center/>

Notes:

If you want to use the Terminal 
to merge the branches and
you are currently working on the `main` branch,
you can type `git merge <branch>` 
to merge the commits from the branch with
the new feature into the `main` branch. 
In this slide, 
we merged in the changes of 
the branched named `report` into `main`.


---
## Merging branches

<center>

<img src='/module5/git-history-log.png' width="100%" alt="404 image"/>

<center/>


Notes: 
Let's see how these graphics change once 
the branches are merged in VS Code.
Remember that you can launch the editor 
from the terminal by typing `code.`
Then select **View > Command Palette** and
type `Git: View History (git log)`.
The Git History will be displayed in a new tab.
If you want to see all of the branches,
you must first select them in one of the 

---

## Deleting branches (JupyterLab)

<center>

<img src='/module5/delete-branch.png' width="100%" alt="404 image"/>

<center/>

Notes:

You will notice that merging the branch 
will not automatically delete it.
If you are not going to be developing that feature anymore 
you can delete the branch after merging it by clicking on
the small garbage bin icon in the **Branches** tab.
`

You can only delete a branch when you are not working on it
(it is not highlighted in blue in the Jupyter Lab UI) 
and although it can be difficult
to recover the information after it has been deleted, 
you do it safely after successfully merging the changes into another branch.

---

## Deleting branches (terminal)


<center>

<img src='/module5/delete-branch-t.png' width="100%" alt="404 image"/>

<center/>


Notes:

If you want to delete the branches using the terminal you can use the command `git branch -d <branch-name>`.


It will be easier to work with both branches and forks 
now that you understand 
how to read the Git history and merge branches. 

---

# Let's apply what we learned!
