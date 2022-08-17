---
type: slides
title: 'module4_05'
---


# Handling merge conflicts



---
## What is a merge conflict?

This error message indicates that there are changes on the remote repository that you do not have in your local repository. 

<center>

<img src='/module4/vc-merge-conflict.png' width="60%" alt="404 image"/>

</center>


Notes: 

It is best practise to
pull any changes at the start of 
each work session 
before modifying your local copy.
If you do not do this,
and your collaborators
have pushed changes to GitHub, 
you will be unable to push 
your changes to GitHub until you pull. 

---
## What is a merge conflict?

This error message indicates you and your collaborators made changes to the **same line** of the **same file** and that Git will not be able to automatically merge the changes. 

<center>

<img src='/module4/vc-merge-conflict-2.png' width="60%" alt="404 image"/>

</center>

Notes: 

Normally, 
getting out of this situation
isn't too difficult.

First,
you should pull any changes from GitHub
that are not yet in your local repository.

When this occurs, 
Git will merge the changes for you, 
even if you and your collaborators 
were working on different secrtions
of the same file!

However, 
you and your collaborators
make changes to 
the same line of the same file,
Git will be unable to automatically merge 
the changes—Git will not know
whether to keep your version of the line(s),
your collaborator's version of the line(s), 
or a combination of the two.

Then, Git will notify 
that there is a merge conflict. 

---

## Handling merge conflicts: JupyterLab

Error message that indicates you and your collaborators made changes to the same line of the same file and that Git will not be able to automatically merge the changes. 

<center>

<img src='/module4/vc-merge-conflict-3.png' width="60%" alt="404 image"/>

</center>

Notes: 

To fix the merge conflict,
ou need to open the indicated file
in a plain text editor and
look for special marks that 
Git puts in the file to
tell you where the merge conflict occurred.

---

## Handling merge conflicts: JupyterLab

How to open a Jupyter notebook as a plain text file view in JupyterLab:

<center>

<img src='/module4/vc-merge-conflict-4.png' width="60%" alt="404 image"/>

</center>

Notes: 

The beginning of the merge conflict
is preceded by `<<<<<<< HEAD` and
the end of the merge conflict is marked by `>>>>>>>`.
Between these markings,
Git also inserts a separator (`=======`). 
The version of the change 
before the separator is your change,
and the version that follows the separator 
was the change that existed on GitHub. 


---

## Handling merge conflicts: JupyterLab

Here is the file where a merge conflict has been resolved:

<center>

<img src='/module4/vc-merge-conflict-5.png' width="60%" alt="404 image"/>

</center>

Notes: 
Once you have decided 
which version of the change (or what combination of changes!) to keep, 
you need to use the plain text editor 
to remove the special marks that Git has added.

We can do anything we want:
    - keep the change made in the local repository,
    - keep the change made in the remote repository,
    - write something new to replace both, or get rid of the change entirely.

After you've made your changes, 
the file must first be saved, 
then added to the staging area,
and finally committed before you can push your changes to GitHub.

---
## Handling merge conflicts: the terminal


<center>

<img src='/module4/vc-merge-conflict-t.png' width="70%" alt="404 image"/>

</center>

Notes: 
It is possible to resolve merge conflicts using the terminal. 
To do this, 
launch the editor and 
navigate to the file containing 
the merge conflict.
You will be able to see
the merge conflict as shown in the image. 



---
## Extra: Stashing local non-committed changes before pulling (terminal)


```out
error: Your local changes to the following files would be overwritten by merge:
        README.md
Please commit your changes or stash them before you merge.
Aborting
```

Notes: 

We have learned that
if there are changes in your remote repository on GitHub
and you already have locally committed changes, 
you will need to pull before pushing. 

If the local and remote changes are in the same lines, 
you must resolve the resulting merge conflict,
otherwise Git will not be able 
to merged them automatically. 

But what if you have just started editing a file
when you realize that you forgot to pull 
before you started to work? 
The first step is to try to pull,
if you're lucky there will be no new changes or
they will be in a different file 
than the one you modified. 
If they are in the same file,
an error message similar to
the one in the slide will appear. 

---
## Extra: Stashing local non-committed changes before pulling (terminal)

`git stash`


Notes: 

If you're about to change some of the files
that have also been changed remotely, there is a command called `git stash`,
which removes your local changes from the working area 
and saves them in another location
(you can think of this as a secrete pocket
which Git does not care about when pulling
from the remote repo,
and from which you can take out the changes again 
when you need them). 
You can then do `git pull`, 
and follow up with a `git stash pop` 
to bring your changes back from the stash to the working area, 
and then carry on working.

This workflow can save you from running into merge conflicts, 
as long as you have not already made modifications 
to the same lines as you are pulling down. 
If you have already modified the same file that 
was updated remotely,
you will still run into a merge conflict when you do `git stash pop`. 
Stashing is also great when you are working on one feature but
realize that you should actually work on another unrelated feature first,
you can stash your existing work (instead of manually saving it elsewhere) and
finish working on the most urgent feature first.


---

# Let's apply what we learned!