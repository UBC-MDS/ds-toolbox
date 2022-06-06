---
type: slides
title: 'module4_03'
---

# Revert your changes

---
# Revert your changes


**reset hard** ✔️
**revert** ⬅️

Notes: We have already learn how to undo changes deleting our project history with **reset hard**. But what if we want to keep track of the reversion? 
 There is other way to go back in time that is **revert** your changes.

---
#  Revert your changes: move to a previous commit (JupyterLab)


<center>

<img src='/module4/vc-revert.png' width="80%" alt="404 image"/>

</center>

Notes:
If you want to revert your changes you can clink in the arrow icon in the commit you want to go back in the JupyterLab's tab History.
When you revert your changes, you don't loose the history of the project. This means that you are going to create a new commit where you are saving the information that you have deleted that particular commit.

---

# Revert your changes: move to a previous commit (JupyterLab)


<center>

<img src='/module4/vc-revert-2.png' width="80%" alt="404 image"/>

</center>

Notes:
When you click the arrow, JupyterLab request you the commit title and description for thet reversion. You can keep here the preloaded name or find a more meaningful one.

---

# Revert your changes: move to a previous commit (JupyterLab)


<center>

<img src='/module4/vc-revert-3.png' width="80%" alt="404 image"/>

</center>

Notes:
Now you can see that you have a new commit and your project has travel back in time! Remember to push your changes if you want to keep your remote updated. This is particularly important if you are working with other colleagues that cna be modifying the part that have deleted!


---

# Revert your changes: move to a previous commit (terminal)

`git revert <commit id>`

<center>

<img src='/module4/vc-revert-t.png' width="80%" alt="404 image"/>

</center>

Notes:
If you want to do this with the terminal you will have to provide the SHA-1 code to identify the commit.

---

# Revert your changes: move to a previous commit (terminal)


<center>

<img src='/module4/vc-revert-t2.png' width="80%" alt="404 image"/>

</center>

Notes:

After writing the command, the editor will pop up so you can modify the final commit message. If you close it as it is the message will be the default one.
You will see that after closing the editor, not you have a new commit updated with the changes.

---

# Let's Practise



