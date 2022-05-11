---
type: slides
title: 'module3_04'
---

# Committing changes to a local repository 

---

# Committing changes to a local repository 


<center>

<img src='/module3/vc-commit.png' width="80%" alt="404 image" align="center"/>

<center/>

Notes: **Committing the modified files in the staging area to the local repository history, with an informative message about what changed.** 

Once the files we wish to commit have been added to the staging area, we can then commit those files to the repository history. When we do this, we are required to include a helpful commit message to tell collaborators (which often includes future you!) about the changes that were made.

In image, the message is `"Message about changes..."`; in your work you should make sure to replace this with an informative message about what changed. It is also important to note here that these changes are only being committed to the local repository’s history. The remote repository on GitHub has not changed, and collaborators would not yet be able to see your new changes.

---

# JupyterLab: Making the commit

🙌 Let's commit the files that are in the staging area

<center>

<img src='/module3/vc-commits-jupyter.png' width="70%" alt="404 image"/>

<center/>

Notes: **1. Jupyter Git extension icon (circled in red).**

Now that you have cloned the remote repository from GitHub to create a local repository, you can get to work editing, creating, and deleting files. For example, suppose you created and saved a new file (named `eda.ipynb`) that you would like to send back to the project repository on GitHub. To “add” this modified file to the staging area (i.e., flag that this is a file whose changes we would like to commit), click the Jupyter Git extension icon on the far left-hand side of Jupyter.

---

# JupyterLab: Making the commit

<center>

<img src='/module3/vc-commits-jupyter-4.png' width="70%" alt="404 image"/>

<center/>

Notes: **2. A commit message must be added into the Jupyter Git extension commit text box before the blue Commit button can be used to record the commit.**

To snapshot the changes with an associated commit message, you must put a message in the text box at the bottom of the Git pane and click on the blue “Commit” button (see image). It is highly recommended to write useful and meaningful messages about what was changed. These commit messages, and the datetime stamp for a given commit, are the primary means to navigate through the project’s history in the event that you need to view or retrieve a past version of a file, or revert your project to an earlier state. When you click the “Commit” button for the first time, you will be prompted to enter your name and email. This only needs to be done once for each machine you use Git on.

---
# JupyterLab: Making the commit


<center>

<img src='/module3/vc-commits-jupyter-5.png' width="70%" alt="404 image"/>

<center/>


Notes: **3. After recording a commit, the staging area should be empty.**

After “committing” the file(s), you will see there are 0 “Staged” files. You are now ready to push your changes to the remote repository on GitHub

---
# JupyterLab's terminal: Making the commit


<div class="row">
  <div class="column">
    <img src="/module3/vc-commit-jl-terminal.png" alt="404 image" style="width:25%">
  </div>
  <div class="column">
    <img src="/module3/vc-commit-jl-terminal-editor.png" alt="404 image" style="width:25%">
  </div>
</div> 


Notes: To reproduce the same commit message using the terminal you should write the command `git commit` and press ENTER.
This command will open a file called `COMMIT_EDITMSG` in your editor. There you can write the title and body of the commit message that you want to associate with your changes.

In the case you don't want to add so many details and only write a title, you can use the shorter version of the command including the flag `-m`:

`git commit -m "Create an eda notebook"`

---

# Let's apply what we learned!
