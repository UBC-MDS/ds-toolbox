---
type: slides
title: 'module4_04'
---


# Handling merge conflicts



---
# What is a merge conflict?

Error message that indicates that there are changes on the remote repository that you do not have locally. 

<center>

<img src='/module4/vc-merge-conflict.png' width="60%" alt="404 image"/>

</center>


Notes: It is good practice to pull any changes at the start of every work session before you start working on your local copy. If you do not do this, and your collaborators have pushed some changes to the project to GitHub, then you will be unable to push your changes to GitHub until you pull. This situation can be recognized by the error message shown in the image.

---
# What is a merge conflict?

Error message that indicates you and your collaborators made changes to the same line of the same file and that Git will not be able to automatically merge the changes. 

<center>

<img src='/module4/vc-merge-conflict-2.png' width="60%" alt="404 image"/>

</center>

Notes: Usually, getting out of this situation is not too troublesome. First you need to pull the changes that exist on GitHub that you do not yet have in the local repository. Usually when this happens, Git can automatically merge the changes for you, even if you and your collaborators were working on different parts of the same file!

If, however, you and your collaborators made changes to the same line of the same file, Git will not be able to automatically merge the changes—it will not know whether to keep your version of the line(s), your collaborators version of the line(s), or some blend of the two. When this happens, Git will tell you that you have a merge conflict in certain file(s) 

---

# Handling merge conflicts: JupyterLab

Error message that indicates you and your collaborators made changes to the same line of the same file and that Git will not be able to automatically merge the changes. 

<center>

<img src='/module4/vc-merge-conflict-3.png' width="60%" alt="404 image"/>

</center>

Notes: To fix the merge conflict, you need to open the offending file in a plain text editor and look for special marks that Git puts in the file to tell you where the merge conflict occurred.

---

# Handling merge conflicts: JupyterLab

How to open a Jupyter notebook as a plain text file view in Jupyter. 

<center>

<img src='/module4/vc-merge-conflict-4.png' width="60%" alt="404 image"/>

</center>

Notes: The beginning of the merge conflict is preceded by `<<<<<<< HEAD` and the end of the merge conflict is marked by `>>>>>>>`. Between these markings, Git also inserts a separator (`=======`). The version of the change before the separator is your change, and the version that follows the separator was the change that existed on GitHub. In the image, you can see that in your local repository there is a line of code that calls `scale_color_manual` with three color values (`deeppink2`, `cyan4`, and `purple1`). It looks like your collaborator made an edit to that line too, except with different colors (to `blue3`, `red3`, `and black`)!

---

# Handling merge conflicts: JupyterLab

File where a merge conflict has been resolved. 

<center>

<img src='/module4/vc-merge-conflict-5.png' width="60%" alt="404 image"/>

</center>

Notes: Once you have decided which version of the change (or what combination!) to keep, you need to use the plain text editor to remove the special marks that Git added.

We can do anything we want:
    - keep the change made in the local repository,
    - keep the change made in the remote repository,
    - write something new to replace both, or get rid of the change entirely.

After your changes the file must be saved, added to the staging area, and then committed before you will be able to push your changes to GitHub.

---
# Handling merge conflicts: the terminal


<center>

<img src='/module4/vc-merge-conflict-t.png' width="70%" alt="404 image"/>

</center>

Notes: It is possible to solve the merge conflicts using the terminal. For this you have to open the editor and find the files where the conflict is.
You will be able to visualize the merge conflict as appears in the image.



---
# Extra: Stashing local non-committed changes before pulling (terminal)


```
error: Your local changes to the following files would be overwritten by merge:
        README.md
Please commit your changes or stash them before you merge.
Aborting
```

Notes: 
We have learned that if there are changes on your remote repo in GitHub and you already have local committed changes, you will need to pull before you can push. If the local and remote changes are in the same lines, you will have to resolve the resulting merge conflict, otherwise git will merge automatically. But what if you have just started to make changes to a file when you realize that you forgot to pull before you started to work? The first thing to do is to try to pull, if you're lucky there are either no new changes or they are not in the same file you modified. If they are in the same file, you will get an error message like the one in the slide.

---
# Extra: Stashing local non-committed changes before pulling (terminal)

`git stash`


Notes: If you're about to change some of the files that have also been changed remotely it is a command called `git stash`, which removes your local changes from the working area and and saves them in another location (you can think of this as a secrete pocket which git does not care about when pulling from the remote repo, and from which you can take out the changes again when you need them). You can then do git pull, and follow up with a `git stash pop` to put your changes back from the stash to the working area, and then carry on working.

This workflow can save you from running into merge conflicts, as long as you have not already made modifications to the same lines as you are pulling down. If you have already modified the same file that was updated remotely, you will still run into a merge conflict when you do git stash pop. Stashing is also great when you are working on one feature but realize that you should actually work on another unrelated feature first, you can stash your existing work (instead of manually saving it elsewhere) and finish working on the most urgent feature first.


---

# Let's Practise