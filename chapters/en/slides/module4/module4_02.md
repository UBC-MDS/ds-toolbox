---
type: slides
title: 'module4_02'
---

# Restoring an older version of a file

---
# Time travelling 


There are two ways you go back in time to a previos commit:

1. In JupyerLab
2. On your local machine using `git reset`


Notes: Oh no! We realize by viewing the history that we made a mistake! We didn't mean to delete our list of dependencies. Worry not! We can now take advantage that we have been tracking this file under version control by using git restore to retrieve an older version of the file to replace the current version.

Let's restore the version of the file BEFORE we deleted the software dependency list.

---
# Refer to a commit

Commit ID or SHA-1 hash

```bash
commit b22d6421363c7b82e2b88b0b5f1f25edca703303
commit b22d
```

---

# Move to a previous commit

`git reset <commit id>`

<center>

<img src='/module4/reset.png' width="70%" alt="404 image"/>

</center>

Notes:
1.  Look at the log to see which version of the file we want to go back to and get its **Short SHA-1** (the first characters of the commit ID, we'll need this to know which point in time to retrieve the file from).

2. Then we use git restore in the command line to grab it: `git restore -s SHORT_SHA-1 FILENAME`.

3. When restoring the file, it is added to the working area. If we want to save the restored version of the file to the git repo, we need to add and commit it, just like with any other modifications.

4. Don't forget git push to get the file backed up on GitHub!

---

# What if we want to discard the changes instead of moving them to the working area?

`git reset --hard <sha>`

Notes: It will not show us any message, since the changes are not unstaged, they are discarded.

---
# JupyterLab

MISSING

---

# Let's practise