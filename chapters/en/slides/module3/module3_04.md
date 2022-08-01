---
type: slides
title: 'module3_04'
---

# Committing changes to a local repository

Notes:
In this slide deck we will see how we can commit our staged changes
to the repository on our computer.

---

## Committing the modified files in the staging area

<center>

<img src='/module3/vc-commit.png' width="100%" alt="404 image"/>

</center>

Notes:
Once the files we wish to commit have been added to the staging area, we can then "commit" those files to add them to the repository history. When we do this, we are required to include an informative message briefly describing the purpose of the changes we made. This message will be helpful to explain why the changes were made to your collaborators. Remember that your most common collaborator is a future version of yourself, and that it is very easy to forget why made a particular change a few month ago!.

In the screenshot in this slide, the commit message is `"Message about changes..."`; in your work you should make sure to replace this with an informative message about what you changed. It is also important to note that these changes are only being committed to the history of the local repository's on your computer. The remote repository on GitHub has not changed, and collaborators would not yet be able to see your new changes online.

---

## Committing to add sections to your project history

<center>

<img src='/module3/commit-messages-comic.png' width="80%" alt="404 image"/>

</center>

<a href="https://xkcd.com/1296/">Image extracted from xkcd.com</a>

Notes:
Writing meaningful commit messages is really important. When commit messages are too vague (`code additions` or `Add some stuff`) it will be difficult to interpret for our collaborators, including ourselves in the future. Writing clear and descriptive commit messages increases the quality of your project and facilitates collaborative work.

---

## JupyterLab: Making the commit

🙌 Let's commit the files that are in the staging area

<center>

<img src='/module3/vc-commits-jupyter.png' width="90%" alt="404 image"/>

</center>

Notes:
There are two required steps when creating a commit in JupyterLab,
which we will explain in the next few slides.

**Step 1. Click Jupyter Git extension icon (circled in red).**

After you have cloned the remote repository from GitHub to create a local repository, you can get to work editing, creating, and deleting files. For example, suppose you created a new file named `eda.ipynb` that you would like to commit to the project history. To "add" this modified file to the staging area (i.e., flag that this is a file with changes we would like to commit), click the Jupyter Git extension icon on the far left-hand side of JupyterLab.

---

## JupyterLab: Making the commit

<center>

<img src='/module3/vc-commits-jupyter-4_1.png' width="90%" alt="404 image"/>

</center>

Notes:
**Step 2. Add a commit message into the Jupyter Git extension commit text box before pressing the blue "Commit" button to commit the staged changes.**

To commit the staged changes together with an associated commit message, you must write a message in the text box at the bottom of the Git pane and click on the blue "Commit" button (see image). It is highly recommended to write useful and meaningful messages about what was changed.

These commit messages, and the time stamp for a given commit, are the primary means to navigate through the project’s history in the event that you need to view or retrieve a past version of a file, or revert your project to an earlier state.

When you click the "Commit" button for the very first time, you will be prompted to enter your name and email. This only needs to be done once for each machine you use Git on, and is added as author information to the commit message.

---

## JupyterLab: Making the commit

<center>

<img src='/module3/vc-commits-jupyter-4_2.png' width="90%" alt="404 image"/>

</center>

Notes:

(continuation of step 2)

When committing changes, you need to include a title/summary for each message (the upper text box in JupyterLab). Optionally, you could also include a longer description for the commit in the next text box.

You can see a good example of an informative title and long description in this slide. The general guideline for the title is to summarize the purpose of the commit as a short descriptive message. It is recommended to write your messages in imperative mood (imagine that your commit should complete the sentence "this commit will...") and start with a capital letter. You can [read more about how to write a good commit message in this article](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) and see a few examples below:

- Bad messages:
    - fixes an error
    - added new code
- Good messages:
    - Reorder sections to make the README more welcoming
    - Fix notebook error to allow for export with images

---

## JupyterLab: Making the commit


<center>

<img src='/module3/vc-commits-jupyter-5.png' width="90%" alt="404 image"/>

</center>


Notes:
After recording a commit, the staging area should be empty and you will see that there are 0 staged files. You are now ready to push your changes to the remote repository on GitHub, which we will show you how to do in the next slide deck.

---

## JupyterLab: Making the commit


<center>

<img src='/module3/vc-commits-jupyter-5_2.png' width="90%" alt="404 image"/>

</center>


Notes:
After the changes have been successfully committed, you can view them in the History tab together with your message. You have now tracked this change and made it part of the history of your project!

---
## JupyterLab's terminal: Making the commit


<center>

<img src="/module3/vc-commit-jl-terminal.png" alt="404 image" style="width:75%">
 
</center> 

Notes:
 In the case you don't want to add so many details and only write a title, you can use the shorter version of the command including the flag `-m`:

`git commit -m "Create an eda notebook"`

---
## JupyterLab's terminal: Making the commit


<center>

<img src="/module3/vc-commit-jl-terminal-editor.png" alt="404 image" style="width:25%">



Notes:
To include a description in your commit using the terminal, you should write the command `git commit` and press ENTER. After doing that, a file called `COMMIT_EDITMSG` will open in your editor. There you can write the title and body of the commit message that you want to associate with your changes.



---

# Let's apply what we learned!
