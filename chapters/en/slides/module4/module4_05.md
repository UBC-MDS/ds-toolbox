---
type: slides
title: 'module4_05'
---

# Handling merge conflicts

Notes:
In this slide deck we will see when merge conflicts arise and how to solve them.

---

## When does a merge conflict arise?


<center>

<img src='/module4/vc-merge-conflict-jl.png' width="700px" alt="404 image"/>

</center>


Notes:
As we mentioned a few slide decks ago, 
it is good practice to pull any changes at the start of every work session   
before you start working on your local copy.  
If you forget to do this you might end up in a situation where
your collaborators have pushed some changes  
to the remote that you don't have locally.  
 
The solution to this situation is usually simple:
you pull down the remote changes to your computer
and let Git automatically merge the changes for you,  
which often works well even if you and
your collaborators were working on different parts of the same file!  

However, if you and your collaborators made changes to the **same line(s)** of the **same file(s)**,
Git will not be able to automatically merge the changes
since it doesn't know whether to keep your version of the line(s),    
your collaborator's version of the line(s), or some blend of the two.   
When this happens, Git will inform you that you have a "merge conflict"
in certain file(s) and let you decide how to solve the issue.    

In the terminal, the merge conflict will look like this when you try to pull:

```
$ git pull
error: Pulling is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.
```

---

## When does a merge conflict arise?

<center>

<img src='/module4/vc-merge-conflict-jl-push.png' width="700px" alt="404 image"/>

</center>



Notes:

You also can visualize the merge conflict
as an error when you try to push your local changes to GitHub,
telling you that the remote contains work that you don't have locally. 

Imagine that at least one commit in the remote repository 
and one in your local repository 
are incompatible to combine without overwriting a portion of the work.
This is why attempting to pull or push modifications will result in an error.
Git is unable to merge the remote and the local version.

In the terminal, the merge conflict will look like this when you try to push:

```
$ git push
To github.com:flordandrea/canadian_languages.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'github.com:flordandrea/canadian_languages.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

---

## Handling merge conflicts: Terminal


`git status`
```out
On branch main
Your branch and 'origin/main' have diverged,
and have 2 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Notes:


If you are using the terminal, 
you can detect which files are affected in the merge conflict 
with the command `git status`.


Every file affected by a merge conflict 
will be listed in the "Unmerged paths", in the example
we can see that there is a merge conflict on the README.md file.


---

## Handling merge conflicts: Terminal

<br>

<center>

<img src='/module4/vc-merge-conflict-open-editor.png' width="800px" alt="404 image"/>

</center>

Notes:

In a merge conflict,
Git will create marks in the affected files
that indicate which areas it is unsure how to handle.
To resolve a merge conflict,
you need to open the indicated file in a plain text editor and 
edit the marked up content in a way so that Git knows which changes you want to keep.

You can click on the file and select the Option **Open With Editor** -> **Editor**

---

## Handling merge conflicts: Terminal

<br>
<br>
<br>

<center>

<img src='/module4/vc-merge-conflict-readme.png' width="800px" alt="404 image"/>

</center>

Notes:
Once you open the file, you have to find the merge conflict. 
The beginning of the merge conflict is preceded by `<<<<<<<` and
the end of the merge conflict is marked by `>>>>>>>`. 
Between these markings, Git also inserts a separator (`=======`).
The version of the change before the separator is your change (marked with `HEAD`),
and the version that follows the separator was the change that existed on GitHub (marked with the commit hash).
In the image, you can see that in your local repository the README.md title is `Canadian languages`.
It looks like your collaborator made an edit to that line too,  
 but the name selected for the title is slighly different: `Data Science project: Canadian languages` !

To resolve the merge conflict, we can do anything we want:

- Keep the change made in the local repository,
- Keep the change made in the remote repository,
- Write something new to replace both, or get rid of the change entirely.

Once you have decided which option you prefer, 
you must remove any separators and unwanted text/code from the file and
leave only the information you want to include in the new version of the file.
After you made your changes, the file must first be saved, then added to the staging area,
and finally committed before you will be able to push your changes to GitHub.

---

## Handling merge conflicts: JupyterLab

<br>

<center>

<img src='/module4/vc-merge-conflict-jl-conflicted.png' width="700px" alt="404 image"/>

</center>


Notes: 

JupyterLab makes it easier to detect and resolve merge conflicts.
In the Git tab, a new section called **Conflicted** will appear below **Changes**.

There you can visualize all the files that have a merge conflict.
In the example, the issue is only affecting the `README.md` file.



---


## Handling merge conflicts: JupyterLab

<br>
<br>
<br>

<center>

<img src='/module4/vc-merge-conflicts-current.png' width="800px" alt="404 image"/>

</center>


Notes: 

Once you click the file with the merge conflict, 
you will be able to select to accept your current local change or the incoming changes from the remote.
In this case, I accepted the current changes by clicking the arrow next to the change.
After that, click `Mark as resolved`,
stage the changes, and create a new commit to resolve the conflict.

You will now be able to push or pull changes without error!


---

## Special case: Version control and Jupyter Notebooks

JSON format

```out
{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# Canadian Languages\n",
    "\n",
    "This project aims to understand what languages Canadian residents speak, and where they speak them."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas as pd\n",
    "import altair as alt"
   ]
  },
```



Notes:
First - a bit about what a Jupyter notebook are “plain” text files, 
and we can view them in a plain text editor.

However, the contents of the notebook are encoded in JSON format, 
which means that there are many brackets in the file, 
which can make it hard to read for humans (but easy for machines).


---
## Special case: Version control and Jupyter Notebooks

<br>

<img src='/module4/vc-merge-conflict-eda.png' width="800px" alt="404 image"/>

Notes:
Because the notebooks are stored as plain text,
we can use them for version control, but this is not without issues, 
since the JSON format can make it difficult to interpret 
difference between files and to manually fix conflicts.

In this situation is better to use JupyterLab than any other editor.
The same as we explained before, to solve the merge conflict
you have to click in this case in the notebook `eda.ipynb` 
that show up in the section called **Conflicted**.


---

## Special case: Version control and Jupyter Notebooks

<br>

<img src='/module4/vc-fix-merge-conflict-eda.png' width="800px" alt="404 image"/>

Notes: 

A new tab will appear,
displaying the current local changes and 
incoming remote changes that are incompatible.
The conflicting lines are highlighted in red as you can see in the image.
You can choose to keep the current changes, the incoming changes,
or go back to the commit before the project's history diverged.
The last option is known as "Common ancestor"
In the example, I decided to keep the current changes,
so you should click the small arrow next to the selected option.
Finally, you should click the `Mark as solved` button. 
Remember that you need to stage and commit
the changes after solving the conflict.

We recommend using JupyterLab rather than the terminal  
to resolve merge conflicts in Jupyter Notebooks.

---



## Extra: Stashing local non-committed changes before pulling (Terminal)

```out
error: Your local changes to the following files would be overwritten by merge:
        README.md
Please commit your changes or stash them before you merge.
Aborting
```

Notes:

We have learned that if there are changes in your remote repo on GitHub   
and you already have locally committed changes, you will need to pull before you can push.   
If the local and remote changes are in the same lines,  
you will have to resolve the resulting merge conflict,   
otherwise Git will merge automatically.  

But what if you have just started to make changes to a file  
when you realize that you forgot to pull before you started to work?   
The first thing to do is to try to pull,  
if you're lucky there are either no new changes or they are not in the same file you modified.  
If they are in the same file, you will get an error message like the one in the slide.  

---

## Extra: Stashing local non-committed changes before pulling (Terminal)

`git stash`
```out
Saved working directory and index state WIP on main: d59b6bb Add MIT license
```


Notes:
To solve this error in the previous slide, 
we can use a command called `git stash`, 
which removes your local changes 
from the working area and 
saves them in another location 
(you can think of this as a secrete pocket
which Git does not care about when pulling from the remote repo, 
and from which you can take out the changes again when you need them). 
You can then do `git pull`,   
and follow up with a `git stash apply`  
to bring your changes back from the stash  
to the working area, and then carry on working.  

This workflow can save you from running into merge conflicts,   
as long as you have not already made modifications to the same lines as you are pulling down.   
If you have already modified the same file that was updated remotely,   
you will still run into a merge conflict when you do `git stash apply`.   
 
Stashing is also great when you are working on one feature   
but realize that you should actually work on another unrelated feature first,   
you can stash your existing work  
(instead of manually saving it elsewhere) and finish working on the most urgent feature first.  

---

# Let's apply what we learned!
