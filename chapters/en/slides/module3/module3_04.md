---
type: slides
title: 'module3_04'
---

# Committing changes to a local repository 

---

# Committing changes to a local repository 

Committing the modified files in the staging area to the local repository history, with an informative message about what changed. 


<img src='/module3/vc-commit.png' width="60%" alt="404 image" align="center"/>


Notes: Once the files we wish to commit have been added to the staging area, we can then commit those files to the repository history. When we do this, we are required to include a helpful commit message to tell collaborators (which often includes future you!) about the changes that were made.

 In image, the message is "Message about changes..."; in your work you should make sure to replace this with an informative message about what changed. It is also important to note here that these changes are only being committed to the local repository’s history. The remote repository on GitHub has not changed, and collaborators would not yet be able to see your new changes.

---

# Jupyter lab: Making the commit

Let's commit the files that are in the staging area

1. Jupyter Git extension icon (circled in red). 

<img src='/module3/vc-commits-jupyter.png' width="60%" alt="404 image"/>


Notes: Now that you have cloned the remote repository from GitHub to create a local repository, you can get to work editing, creating, and deleting files. For example, suppose you created and saved a new file (named `eda.ipynb`) that you would like to send back to the project repository on GitHub. To “add” this modified file to the staging area (i.e., flag that this is a file whose changes we would like to commit), click the Jupyter Git extension icon on the far left-hand side of Jupyter.



---

# Jupyter lab: Making the commit

2. A commit message must be added into the Jupyter Git extension commit text box before the blue Commit button can be used to record the commit. 

<img src='/module3/vc-commits-jupyter-4.png' width="50%" alt="404 image"/>


---

# Jupyter lab: Making the commit

3. After recording a commit, the staging area should be empty.


<img src='/module3/vc-commits-jupyter-5.png' width="60%" alt="404 image"/>


Notes: To snapshot the changes with an associated commit message, you must put a message in the text box at the bottom of the Git pane and click on the blue “Commit” button (Figure 12.29). It is highly recommended to write useful and meaningful messages about what was changed. These commit messages, and the datetime stamp for a given commit, are the primary means to navigate through the project’s history in the event that you need to view or retrieve a past version of a file, or revert your project to an earlier state. When you click the “Commit” button for the first time, you will be prompted to enter your name and email. This only needs to be done once for each machine you use Git on.

After “committing” the file(s), you will see there are 0 “Staged” files. You are now ready to push your changes to the remote repository on GitHub

---
# Terminal: Making the commit

If you prefer to use the terminal in this step you can use the following commands:

1. Check the files in the staging area (optional)

`git status`

2. Commit the changes together with a descriptive message

    `git commit -m "Clarify the README installation instructions"`

Notes: This is a two step process where you first add the changes to the stanging area and then committ them, which saves the differences between the current and previous version of the file together with your message describing what you did. These changes are saved in the hidden .git directory in the Git repository. 
For more details, see Software Carpentry's lesson on tracking local changes with Git.

---

# Let's practise!
