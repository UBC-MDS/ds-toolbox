---
type: slides
title: 'module4_02'
---

# Restoring an older version of a file

---
# Time travelling 


There are two ways you go back in time to a previos commit:

1. **revert** your changes
2. **reset** your changes


Notes: Oh no! We realize by viewing the history that we made a mistake! We didn't mean to delete our list of dependencies. Worry not! We can now take advantage that we have been tracking this file under version control by using git restore to retrieve an older version of the file to replace the current version.

Let's restore the version of the file BEFORE we deleted the software dependency list.

---
# Refer to a commit

Commit ID or SHA-1 hash

```bash
commit b22d6421363c7b82e2b88b0b5f1f25edca703303
commit b22d
```
Notes: The commit ID or SHA-1 could identify the commit.

---

# 1. Revert your changes: move to a previous commit (JupyterLab)


<center>

<img src='/module4/vc-revert.png' width="80%" alt="404 image"/>

</center>

Notes:
If you want to revert your changes you can clink in the arrow icon in the commit you want to go back in the JupyterLab's tab History.
When you revert your changes, you don't loose the history of the project. This means that youa re going to create a new commit where you are saving the information that you have deleted that particular commit.

---

# 1. Revert your changes: move to a previous commit (JupyterLab)


<center>

<img src='/module4/vc-revert-2.png' width="80%" alt="404 image"/>

</center>

Notes:
When you click the arrow, JupyterLab request you the commit title and description for thet reversion. You can keep here the preloaded name or find a more meaningful one.

---

# 1. Revert your changes: move to a previous commit (JupyterLab)


<center>

<img src='/module4/vc-revert-3.png' width="80%" alt="404 image"/>

</center>

Notes:
Now you can see that you have a new commit and your project has travel back in time! Remember to push your changes if you want to keep your remote updated. This is particularly important if you are working with other colleagues that cna be modifying the part that have deleted!


---

# 1. Revert your changes: move to a previous commit (terminal)

`git revert <commit id>`

<center>

<img src='/module4/vc-revert-t.png' width="80%" alt="404 image"/>

</center>

Notes:
If you want to do this with the terminal you will have to provide the SHA-1 code to identify the commit.

---

# 1. Revert your changes: move to a previous commit (terminal)


<center>

<img src='/module4/vc-revert-t2.png' width="80%" alt="404 image"/>

</center>

Notes:

After writing the command, the editor will pop up so you can modify the final commit message. If you close it as it is the message will be the default one.
You will see that after closing the editor, not you have a new commit updated with the changes.



---

# 2. Reset your changes: delete your changes AND the history of your project (JupyterLab)



<center>

<img src='/module4/vc-reset.png' width="60%" alt="404 image"/>

</center>

Notes:

If you want to delete changes and also remove the commits associated, you can perform a hard reset. For that you should click the clock icon next to the commit you would like to return in time.



---

# 2. Reset your changes: delete the history of your project (JupyterLab)



<center>

<img src='/module4/vc-reset-2.png' width="80%" alt="404 image"/>

</center>

Notes: Be careful! This action can't be undone



---

# 2. Reset your changes: delete the history of your project (JupyterLab)



<center>

<img src='/module4/vc-reset-3.png' width="80%" alt="404 image"/>

</center>

Notes: This is the key step. If you want to revert your changes, you can easily pull the information back from the remote repository, but if you push, you will be changing the remote and making this changes permanent.


**Important!** If you are going to do this it is extremely important that you share it with the team you are working because it is possible you are going to be affecting their work.


---

# 2. Reset your changes: delete the history of your project (terminal)

`git reset --hard <commit id>`

<center>

<img src='/module4/vc-reset-t.png' width="80%" alt="404 image"/>

</center>

Notes:
Look at the log to see which version of the file we want to go back to and get its **Short SHA-1** (the first characters of the commit ID, we'll need this to know which point in time to retrieve the file from). Then try with the command `git reset --hard <commit id>`. 

---

# 2. Reset your changes: delete the history of your project (terminal)

`git reset --hard <commit id>`

<center>

<img src='/module4/vc-reset-t2.png' width="80%" alt="404 image"/>

</center>

Notes:
Don't forget git push to get the file backed up on GitHub!

**Important!** If you are going to do this it is extremely important that you share it with the team you are working because it is possible you are going to be affecting their work.


---

# Let's practise