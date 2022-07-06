---
type: slides
title: 'module5_03'
---

# Merging branches

---

# Merging branches


<center>

<img src='/module5/branches-house-analogy-explain.png' width="100%" alt="404 image"/>

<center/>

Notes: Once you have finished your modifications in the branch you are working, it is time to merge your changes to the main branch!

---

# Merging branches (JupyterLab)

<center>

<img src='/module5/merge-branch.png' width="100%" alt="404 image"/>

<center/>


Notes: To merge a branch using JupyterLab, you have to click in the tab **branches** the name of the branch you want to merge your current work on it. For example, if you are working in the branch `report`, you can click next to the `main` branch and select "Merge this branch into the current branch"

Notice that after doing this, the report branch is not deleted except you do so explicitly.


---

# Merging branches (terminal)

<center>

<img src='/module5/merge-branch' width="100%" alt="404 image"/>

<center/>

Notes:

To merge the branches you can type `git merge <branch>` to merge the commits from the `report` branch into the `main` branch. Remember that you have to be in the oposite branch 

You have now merged your branch! 

---
# Merging branches

<center>

<img src='/module5/git-history-log.png' width="100%" alt="404 image"/>

<center/>


Notes: 
Let's see how these graphics change once we merge the branches together. Let's see how that looks graphically on VS Code. Remember that you can open the editor from the terminal using the comand `code .` and opeining `git history`. 

---

# Merging branches

We're spending this much time figuring out where you are between branches and commits since it's usual for Git beginners to get confused, which leads to a lot of misunderstanding.
It will be easier to deal with branches and forks after you have a strong idea of where you are in the Git commit tree. 

---

# Let's apply what we learned!
