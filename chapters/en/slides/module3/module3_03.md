---
type: slides
title: 'module3_03'
---

# The staging area

---

# Version control workflows


1. Tell Git when to **make a commit** of your own changes in the local repository.
2. Tell Git when to **send your new commits to the remote** GitHub repository.
3. Tell Git when to **retrieve any new changes** (that others made) from the remote GitHub repository.

Notes: When you work in a local version-controlled repository, there are generally three additional steps you must take as part of your regular workflow. In addition to just working on files—creating, editing, and deleting files as you normally would—you must:

1. Tell Git when to **make a commit** of your own changes in the local repository.
2. Tell Git when to **send your new commits to the remote** GitHub repository.
3. Tell Git when to **retrieve any new changes** (that others made) from the remote GitHub repository.

In this section we will discuss all three of these steps in detail.

---

# Local repository with changes to files
 

<img src='/module3/vc-local-github-notes.png' width="40%" alt="404 image" align="center"/>


Notes: When working on files in your local version control repository (e.g., using Jupyter) and saving your work, these changes will only initially exist in the working directory of the local repository


---

# Committing changes to a local repository 

Adding modified files to the staging area in the local repository. 


<img src='/module3/vc-staging-area.png' width="48%" alt="404 image" align="center"/>


Notes: Once you reach a point that you want Git to keep a record of the current version of your work, you need to commit (i.e., snapshot) your changes. A prerequisite to this is telling Git which files should be included in that snapshot. We call this step adding the files to the **staging area**. 

Note that the staging area is not a real physical location on your computer; it is instead a conceptual placeholder for these files until they are committed. The benefit of the Git version control system using a staging area is that you can choose to commit changes in only certain files. For example, we add only the two files that are important to the analysis project (a`nalysis.ipynb` and `README.md`) and not our personal scratch notes for the project (`notes.txt`).



---
# Jupyter Lab: Specifying files to commit

Follow this steps in your computer to add files to the staging area:


1. The file `eda.ipynb` is added to the staging area via the plus sign (+).

<img src='/module3/vc-commits-jupyter-2.png' width="60%" alt="404 image" align="center"/>

---
# Jupyter lab: Specifying files to commit

2. Adding `eda.ipynb` makes it visible in the staging area. 


<img src='/module3/vc-commits-jupyter-3.png' width="60%" alt="404 image" align="center"/>


Notes: This opens the Jupyter Git graphical user interface pane. Next, click the plus sign (+) beside the file(s) that you want to “add” (see image). Note that because this is the first change for this file, it falls under the “Untracked” heading. However, next time you edit this file and want to add the changes, you will find it under the “Changed” heading.

You will also see an `eda-checkpoint.ipynb` file under the “Untracked” heading. This is a temporary “checkpoint file” created by Jupyter when you work on `eda.ipynb`. You generally do not want to add auto-generated files to Git repositories; only add the files you directly create and edit.

Clicking the plus sign (+) moves the file from the “Untracked” heading to the “Staged” heading, so that Git knows you want a snapshot of its current state as a commit (Figure 12.28). Now you are ready to “commit” the changes. Make sure to include a (clear and helpful!) message about what was changed so that your collaborators (and future you) know what happened in this commit.


---

# Terminal: Specifying files to commit

If you want to add the files to the staging area using the terminal you can use the following command:

`git add <file-name(s)>`

Notes: If you decide to work in the terminal, you should use the command `git add` instead.

---

# Let's practise!