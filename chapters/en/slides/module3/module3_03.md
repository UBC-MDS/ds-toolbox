---
type: slides
title: 'module3_03'
---

# The staging area

---

# Version control workflows

<br>
<br>
<br>

<p style="border:3px; border-style:solid; border-color:#FA9C18; padding: 1px;"> 1. <strong> Make a commit <strong/> of your own changes in the local repository. <br> 2. <strong> Send your new commits to the remote <strong/> GitHub repository. <br> 3.  <strong> Retrieve any new changes <strong/> (that others made) from the remote GitHub repository.</p>

Notes: When you work in a local version-controlled repository, there are generally three additional steps you must take as part of your regular workflow. In addition to just working on files—creating, editing, and deleting files as you normally would—you must tell Git when to:

1. **Make a commit** of your own changes in the local repository.
2. **Send your new commits to the remote** GitHub repository.
3. **Retrieve any new changes** (that others made) from the remote GitHub repository.


In this section we will discuss the first step.

Making a commit is a two step process where you first add the changes to the staging area and then commit them, which saves the differences between the current and previous version of the file together with your message describing what you did. These changes are saved in the hidden `.git` directory in the Git repository.

Let's learn how to make a commit in your local repository step by step

---

# Local repository with changes to files
 
<center>

<img src='/module3/vc-local-github-notes.png' width="55%" alt="404 image" />

<center/>

Notes: When working on files in your local version control repository (e.g., using JupyterLab) and saving your work, these changes will only initially exist in the working directory of the local repository


---

# Committing changes to a local repository 

<center>

<img src='/module3/vc-staging-area.png' width="85%" alt="404 image" />

<center/>


Notes: **Adding modified files to the staging area in the local repository.** 

Once you reach a point that you want Git to keep a record of the current version of your work, you need to commit (i.e., snapshot) your changes. A prerequisite to this is telling Git which files should be included in that snapshot. We call this step adding the files to the **staging area**. 

Note that the staging area is not a real physical location on your computer; it is instead a conceptual placeholder for these files until they are committed. The benefit of the Git version control system using a staging area is that you can choose to commit changes in only certain files. For example, we add only the two files that are important to the analysis project (`analysis.ipynb` and `README.md`) and not our personal scratch notes for the project (`notes.txt`).



---
# JupyterLab: Specifying files to commit

🙌 Follow this steps in your computer to add files to the staging area:

<center>

<img src='/module3/vc-commits-jupyter-2.png' width="100%" alt="404 image" />

<center/>

Notes: **1. The file `eda.ipynb` is added to the staging area via the plus sign (`+`).**

---
# JupyterLab: Specifying files to commit

<center>

<img src='/module3/vc-commits-jupyter-3.png' width="100%" alt="404 image" />

<center/>

Notes: **2. Adding `eda.ipynb` makes it visible in the staging area.** 

This opens the Jupyter Git graphical user interface pane. Next, click the plus sign (+) beside the file(s) that you want to `add` (see image). Note that because this is the first change for this file, it falls under the `Untracked` heading. However, next time you edit this file and want to add the changes, you will find it under the `Changed` heading.

You will also see an `eda-checkpoint.ipynb` file under the `Untracked` heading. This is a temporary “checkpoint file” created by Jupyter when you work on `eda.ipynb`. You generally do not want to add auto-generated files to Git repositories; only add the files you directly create and edit.

Clicking the plus sign (+) moves the file from the `Untracked` heading to the `Staged` heading, so that Git knows you want a snapshot of its current state as a commit (see image). Now you are ready to `commit` the changes. Make sure to include a (clear and helpful!) message about what was changed so that your collaborators (and future you) know what happened in this commit.


---

# JupyterLab terminal: Specifying files to commit

To check the status of the files using the terminal (`Untracked` / `Changed` / `Staged`) you can use the command `git status`

<center>

<img src='/module3/vc-staging-area-jl-terminal-status.png' width="100%" alt="404 image" />

<center/>

Notes: Before adding files to the staging area you can check the status of the files using the `git status` command. You can verify that this command gives you the same information as JupyterLab about which files are `Untracked`, `Changed` or `Staged`.
An advantage of using this command if you are working in the terminal is that it gives you information on which commands to use to continue your workflow. For example, for files that are under the `Changes not staged for commit` area,it is suggesred to use the command `git add <file>` to include them into the staging area.

```
Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
```
We recommend using `git status` / checking the staging area before each commit to make sure you are committing what you think you are.
---

# JupyterLab terminal: Specifying files to commit

If you want to add the files to the staging area using the terminal you can use the following command:

`git add <file-name(s)>`

<img src='/module3/vc-staging-area-jl-terminal-add.png' width="100%" alt="404 image" />

Notes: Working in the terminal you can add many files at the same time listing them after `git add`.

---

# Let's apply what we learned!