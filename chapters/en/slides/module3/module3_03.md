---
type: slides
title: 'module3_03'
---

<style>
blockquote {
    margin: 0;
    padding: 0 1em;
    color: #57606;
    border-left: .25em solid #d0d7de;
}
</style>

# The staging area

Notes:
In this module we will be learning more about what the staging area
in the git repository on your computer is used for.

---

## Version control workflows

<br>
<br>
<br>

> 1. Make a commit of your own changes in the local repository.
> 2. Send your new commits to the remote GitHub repository.
> 3.Retrieve any new changes (that others made) from the remote GitHub repository.

Notes:
When you work in a local version-controlled repository, there are generally three additional steps you must take as part of your regular workflow. In addition to working on your files—creating, editing, and deleting them as you normally would—you must also tell Git when to:

1. **Make a commit** of your own changes in the local repository.
2. **Send your new commits to the remote** GitHub repository.
3. **Retrieve any new changes** (that others made) from the remote GitHub repository.

In this slide deck we will discuss the first step.

Making a commit is a two step process where you first add the changes to the staging area and then commit them, which saves the differences between the current and previous version of the file together with your message describing what you did. These changes are saved in the hidden `.git` directory in the Git repository.

Let's learn step by step how to make a commit in your local repository

---

## Local repository with changes to files

<center>

<img src='/module3/vc-local-github-notes.png' width="600px" alt="404 image" />

</center>

Notes:
When working on files
in your local version control repository
(e.g., using JupyterLab) and saving your work,
these changes will only initially exist
in the working directory of the local repository on your computer.

---

## Committing changes to a local repository 

<br>
<br>
<br>

<center>

<img src='/module3/vc-staging-area.png' width="800px" alt="404 image" />

</center>


Notes:
Once you reach a point that
you want Git to keep a record of the current version of your work,
you need to commit (i.e., snapshot) your changes.
A prerequisite to this is telling Git which files should be included in that snapshot.
We call this step adding the files to the **staging area**. 

Note that the staging area is not a meaningful location on your computer;
it is instead a temporary placeholder for these files until they are committed.
The benefit of the Git version control system using a staging area is
that you can choose to commit changes in only certain files.
For example, we could add only the two files that are important to the analysis project
(`analysis.ipynb` and `README.md`) and not the changes we made
to our personal scratch notes for the project (`notes.txt`).

---

## Open Git (JupyterLab IDE)



<center>

<img src='/module3/vc-commits-jupyter.png' width="600px" alt="404 image"/>

</center>

Notes:

🙌 **Practice**

Let's commit the files that are in the staging area

**Step 1. Click Jupyter Git extension icon (circled in red).**

After you have cloned the remote repository from GitHub to create a local repository,
you can get to work editing, creating, and deleting files.
For example, suppose you created a new file named `eda.ipynb`
that you would like to commit to the project history.
To "add" this modified file to the staging area 
(i.e., flag that this is a file with changes we would like to commit),
click the Jupyter Git extension icon on the far left-hand side of JupyterLab.

---

## Specifying files to commit (Jupyter Lab IDE)

<br>
<br>
<br>

<center>

<img src='/module3/vc-jupyter-add-staging-area.png' width="600px" alt="404 image" />

</center>

Notes:

🙌  **Practice**

**Step 1. Add the files you want to commit to the staging area.**

To add changes we have made to a file to the staging area through the JupyterLab,
we can use the small plus sign (`+`).
In this screenshot,
we are adding the notebook file `eda.ipynb` to our project's staging area
("eda" stands for "Exploratory Data Analysis",
and is something we often do at the beginning of our project
in order to familiarize ourselves with our dataset).

Note that because if this was the first change we ever made to this file,
it would have shown up under the `Untracked` heading in the side panel,
indicating that Git is not yet keeping track of this file.
However,
in this example we had already made a previous commit to `eda.ipynb`,
which why it showed up under the `Changed` heading in the side panel.

---

## Specifying files to commit (Jupyter Lab IDE)

<br>
<br>
<br>

<center>

<img src='/module3/vc-jupyter-staged.png' width="600px" alt="404 image" />

</center>

Notes:

🙌  **Practice**

Clicking the plus sign (`+`) moves the file from the `Untracked` heading
to the `Staged` heading,
so that Git knows you want a snapshot
of its current state as a commit (see image).
Now you are ready to `commit` the changes.
When committing it is important to
include a (clear and helpful!) message
about what was changed so
that your collaborators (and future you) know what happened in this commit,
something we will learn more about in the next slide deck.

Note that you will also see an `eda-checkpoint.ipynb` file
under the `Untracked` heading in the side panel.
This is a temporary “checkpoint file”
created by Jupyter when you work on `eda.ipynb`.
You generally do not want to
add auto-generated files like this one to Git repositories;
only add the files you directly create and edit.

---

## Specifying files to commit (Terminal)

<br>
<br>
<br>

<center>

<img src='/module3/vc-jupyter-git-status-terminal.png' width="600px" alt="404 image" />

</center>

To check the status of the files using the terminal (`Untracked` / `Changed` / `Staged`) you can use the command `git status`.

Notes:

🙌  **Practice**

If you would be using the terminal outside Jupyter Lab,
you would not have access to the side panel
that shows which files are  `Untracked`, `Changed`, and `Staged`.
To check the status of all files in your repository using the terminal
you can instead use the command `git status`.
In this slide you can see how the different parts of the output from `git status`
corresponds to the Jupyter Lab side panel.

An advantage of using this command if you are working in the terminal
is that it gives you information on which commands to use to continue your workflow.
For example, for files that are under the `Changes not staged for commit` area,
it is suggesred to use the command `git add <file>` to include them into the staging area.

```
Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
```

We recommend using `git status` / checking the staging area before each commit to make sure you are committing what you think you are.

---

## Specifying files to commit (Terminal)

If you want to add the files to the staging area using the terminal you can use the following command:

`git add <file-name(s)>`

<br>
<br>
<br>

<center>

<img src='/module3/vc-staging-terminal.png' width="600px" alt="404 image" />

</center>


Notes:

🙌  **Practice**

Working in the terminal you can add many files at the same time listing them after `git add`.

A very command to use in the terminal is `git add -p`.
This allows you to interactively choose which part of each file to add
by answering either `y` (yes) or `n` (no)
to the messages that prompts you about which parts you want to add to the staging area.
This way you can add just some changes in a file,
which is helpful when trying to include only the relevant changes in each commit
and ensuring that you can describe all your changes in a short commit message.

---

# Let's apply what we learned!
