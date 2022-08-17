---
type: slides
title: 'module4_03'
---

# Restoring an older version of the project

---
## Time travelling 


We are going to learn two ways to go back in time to a previous commit:


1. **Doing a hard reset** 
2. **Reverting previous changes** 

Notes:

When viewing the history,
it is common to recognise 
that we made a mistake!
Don't be concerned!
We can now use version control 
to track our files and
retrieve an older version of a file 
to replace the current version. 



---
## Refer to a commit

Commit ID or SHA-1 hash

```bash
commit b22d6421363c7b82e2b88b0b5f1f25edca703303
commit b22d
```
Notes: 

The `commit id` (also known as SHA-1 hash) 
identifies the commit. 

The `commit id` will be necessary to identify the change that we want to modify.

---



## 2. Reset your changes: delete your changes AND the history of your project (JupyterLab)



<center>

<img src='/module4/vc-reset.png' width="60%" alt="404 image"/>

</center>

Notes:

You can perform a hard reset
to delete changes as well as 
the associated commits.
To do so, 
click the clock icon
next to the commit
you want to go back to in time. 



---

## 2. Reset your changes: delete the history of your project (JupyterLab)



<center>

<img src='/module4/vc-reset-2.png' width="80%" alt="404 image"/>

</center>

Notes: 

Be careful! This action can't be undone



---

## 2. Reset your changes: delete the history of your project (JupyterLab)



<center>

<img src='/module4/vc-reset-3.png' width="80%" alt="404 image"/>

</center>

Notes: 

This is the key step. 
If you want to undo your local changes,
you can do so by pulling information back
from the remote repository.
But if you push, 
you will be changing the remote,
and thus making these changes permanent.

**Important!**
If you do this,
it is critical that
you notify your collaborators 
because your changes
may have an impact on their work. 


---

## 2. Reset your changes: delete the history of your project (terminal)

`git reset --hard <commit id>`

<center>

<img src='/module4/vc-reset-t.png' width="80%" alt="404 image"/>

</center>

Notes:
Examine the log to determine
which version of the file
you want to go back to and obtain its **Short SHA-1 hash** 
(the first characters of the **commit ID**, 
we'll need this to determine 
which point in time to retrieve the file from). 
Then use the command `git reset --hard <commit id>`. 

---

## 2. Reset your changes: delete the history of your project (terminal)

`git reset --hard <commit id>`

<center>

<img src='/module4/vc-reset-t2.png' width="80%" alt="404 image"/>

</center>

Notes:
Don't forget to use `git push` to backup the file to GitHub!

**Important!**
If you do this, it is critical that you notify your collaborators because your changes may have an impact on their work. 


---

# Let's apply what we learned!