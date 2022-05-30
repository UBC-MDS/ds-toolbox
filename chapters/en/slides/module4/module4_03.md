---
type: slides
title: 'module4_03'
---

# Handling merge conflicts



---
# What is a merge conflict?

Error message that indicates that there are changes on the remote repository that you do not have locally. 

<center>

<img src='/module4/vc-merge-conflict.png' width="60%" alt="404 image"/>

</center>


Notes: It is good practice to pull any changes at the start of every work session before you start working on your local copy. If you do not do this, and your collaborators have pushed some changes to the project to GitHub, then you will be unable to push your changes to GitHub until you pull. This situation can be recognized by the error message shown in the image

---
# What is a merge conflict?

Error message that indicates you and your collaborators made changes to the same line of the same file and that Git will not be able to automatically merge the changes. 

<center>

<img src='/module4/vc-merge-conflict-2.png' width="60%" alt="404 image"/>

</center>

Notes: Usually, getting out of this situation is not too troublesome. First you need to pull the changes that exist on GitHub that you do not yet have in the local repository. Usually when this happens, Git can automatically merge the changes for you, even if you and your collaborators were working on different parts of the same file!

If, however, you and your collaborators made changes to the same line of the same file, Git will not be able to automatically merge the changes—it will not know whether to keep your version of the line(s), your collaborators version of the line(s), or some blend of the two. When this happens, Git will tell you that you have a merge conflict in certain file(s) 

---

# Handling merge conflicts

Error message that indicates you and your collaborators made changes to the same line of the same file and that Git will not be able to automatically merge the changes. 

<center>

<img src='/module4/vc-merge-conflict-3.png' width="60%" alt="404 image"/>

</center>

Notes: To fix the merge conflict, you need to open the offending file in a plain text editor and look for special marks that Git puts in the file to tell you where the merge conflict occurred.

---

# Handling merge conflicts

How to open a Jupyter notebook as a plain text file view in Jupyter. 

<center>

<img src='/module4/vc-merge-conflict-4.png' width="60%" alt="404 image"/>

</center>

Notes: The beginning of the merge conflict is preceded by `<<<<<<< HEAD` and the end of the merge conflict is marked by `>>>>>>>`. Between these markings, Git also inserts a separator (`=======`). The version of the change before the separator is your change, and the version that follows the separator was the change that existed on GitHub. In the image, you can see that in your local repository there is a line of code that calls `scale_color_manual` with three color values (`deeppink2`, `cyan4`, and `purple1`). It looks like your collaborator made an edit to that line too, except with different colors (to `blue3`, `red3`, `and black`)!

---

# Handling merge conflicts

File where a merge conflict has been resolved. 

<center>

<img src='/module4/vc-merge-conflict-5.png' width="60%" alt="404 image"/>

</center>

Notes: Once you have decided which version of the change (or what combination!) to keep, you need to use the plain text editor to remove the special marks that Git added.

The file must be saved, added to the staging area, and then committed before you will be able to push your changes to GitHub.

---

# Let's Practise

