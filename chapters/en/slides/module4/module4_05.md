---
type: slides
title: 'module4_05'
---

# Handling merge conflicts

In this slide deck we will see when merge conflicts arise and how to solve them.

---

## When does a merge conflict arise?

This error message indicates that there are changes on the remote repository that you do not have in your local repository.

<center>

<img src='/module4/vc-merge-conflict.png' width="60%" alt="404 image"/>

</center>

Notes:
As we mentioned a few slide decks ago, 
it is good practice to pull any changes at the start of every work session before you start working on your local copy. If you forget to do this you might end up in a situation where your collaborators have pushed some changes to the project to GitHub that you don't have locally.

If this occurs then you will see the error message in this slide when you try to push your local changes to GitHub, telling you that the remote contains work that you don't have locally. The solution to this is usually simple: you pull down the remote changes to your computer and let Git automatically merge the changes for you, which often works well even if you and your collaborators were working on different parts of the same file!

---

## When does a merge conflict arise?

This error message indicates you and your collaborators made changes to the **same line** of the **same file** and that Git will not be able to automatically merge the changes. 

<center>

<img src='/module4/vc-merge-conflict-2.png' width="60%" alt="404 image"/>

</center>

Notes:
However, if you and your collaborators made changes to the same line of the same file, Git will not be able to automatically merge the changes since it does not know whether to keep your version of the line(s), your collaborator's version of the line(s), or some blend of the two. When this happens, Git will tell you that you have a "merge conflict" in certain file(s) and ask you to tell it what to do explicitly.

---

## Handling merge conflicts: JupyterLab

Error message that indicates you and your collaborators made changes to the same line of the same file and that Git will not be able to automatically merge the changes. 

<center>

<img src='/module4/vc-merge-conflict-3.png' width="60%" alt="404 image"/>

</center>

Notes:
In a merge conflict,
Git will create marks in the affected files
that indicate which areas it is unsure how to handle.
To resolve a merge conflict, you need to open the indicated file in a plain text editor and edit the marked up content in a way so that Git knows which changes you want to keep.

---

## Handling merge conflicts: JupyterLab

How to open a Jupyter notebook as a plain text file view in JupyterLab:

<center>

<img src='/module4/vc-merge-conflict-4.png' width="60%" alt="404 image"/>

</center>

Notes:
The beginning of the merge conflict is preceded by `<<<<<<<` and the end of the merge conflict is marked by `>>>>>>>`. Between these markings, Git also inserts a separator (`=======`). The version of the change before the separator is your change (marked with `HEAD`), and the version that follows the separator was the change that existed on GitHub (marked with the commit hash). In the image, you can see that in your local repository there is a line of code that calls `scale_color_manual` with three color values (`deeppink2`, `cyan4`, and `purple1`). It looks like your collaborator made an edit to that line too, except with different colors (to `blue3`, `red3`, `and black`)!

---

## Handling merge conflicts: JupyterLab

Here is the file where a merge conflict has been resolved:

<center>

<img src='/module4/vc-merge-conflict-5.png' width="60%" alt="404 image"/>

</center>

Notes:
To resolve the merge conflict, we can do anything we want:

- Keep the change made in the local repository,
- Keep the change made in the remote repository,
- Write something new to replace both, or get rid of the change entirely.

Once you have decided which version of the change (or what combination of changes!) to keep, you need to also remove the special marks that Git added.
After you made your changes, the file must first be saved, then added to the staging area, and finally committed before you will be able to push your changes to GitHub.

---

## Handling merge conflicts: Terminal

<center>

<img src='/module4/vc-merge-conflict-t.png' width="70%" alt="404 image"/>

</center>

Notes:
It is possible to resolve merge conflicts using the terminal
and the process is similar to what we did in JupyterLab.
We will see similar error message when we try to push and pull
and the solution is to open our favourite text editor and edit the file containing the conflict.

In this slide we have opened the file that contains the merge conflict in VS Code.
You can see that VS Code highlights the merge conflict marks in blue and green.
It also offer us the option to click the grey buttons above the highlighted areas 
(marked with a red rectangle and arrows in the slide)
as a shortcut to directly editing the text in the file.

---

## Extra: Stashing local non-committed changes before pulling (Terminal)

```out
error: Your local changes to the following files would be overwritten by merge:
        README.md
Please commit your changes or stash them before you merge.
Aborting
```

Notes:

We have learned that if there are changes in your remote repo on GitHub and you already have locally committed changes, you will need to pull before you can push. If the local and remote changes are in the same lines, you will have to resolve the resulting merge conflict, otherwise Git will merge automatically.

But what if you have just started to make changes to a file when you realize that you forgot to pull before you started to work? The first thing to do is to try to pull, if you're lucky there are either no new changes or they are not in the same file you modified. If they are in the same file, you will get an error message like the one in the slide.

---

## Extra: Stashing local non-committed changes before pulling (Terminal)

`git stash`


Notes:
To solve this error in the previous slide, 
we can use a command called `git stash`, 
which removes your local changes 
from the working area and 
saves them in another location 
(you can think of this as a secrete pocket
 which Git does not care about when pulling from the remote repo, and from which you can take out the changes again when you need them). You can then do `git pull`, and follow up with a `git stash apply` to bring your changes back from the stash to the working area, and then carry on working.

This workflow can save you from running into merge conflicts, as long as you have not already made modifications to the same lines as you are pulling down. If you have already modified the same file that was updated remotely, you will still run into a merge conflict when you do `git stash pop`. Stashing is also great when you are working on one feature but realize that you should actually work on another unrelated feature first, you can stash your existing work (instead of manually saving it elsewhere) and finish working on the most urgent feature first.

---

# Let's apply what we learned!
