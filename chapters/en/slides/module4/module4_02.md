---
type: slides
title: 'module4_02'
---

# Restoring an older version of a file

---
# Time travelling 


We are going to learn two ways you to go back in time to a previous commits:


1. **reset hard** 
2. **revert** 

Notes: Oh no! We realize by viewing the history that we made a mistake! We didn't mean to delete our list of dependencies. Worry not! We can now take advantage that we have been tracking this file under version control to retrieve an older version of the file to replace the current version.



---
# Refer to a commit

Commit ID or SHA-1 hash

```bash
commit b22d6421363c7b82e2b88b0b5f1f25edca703303
commit b22d
```
Notes: The commit ID or SHA-1 identifies the commit. the commit ID will be necessary to can identify the change we want to modify.

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