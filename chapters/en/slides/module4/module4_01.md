---
type: slides
title: 'module4_01'
---

# Viewing the history of a project

Notes:
In this slide deck we will explore how we can view a projects commit history.

---

## Viewing the history of a project

There are three ways you can view the Git history of a project:

**On the remote**

1. In the GitHub web interface through the repo's code commit view

**On your computer**

1. In Jupyter Lab through the repo's code commit view
2. In the terminal using `git log`

Notes:
Do you remember the commit messages that we used to write at the time of making a commit, for saving the state of a project?
We said that these were helpful when we need to look back at the repository's history,
but how can we go about viewing this history?
As we can see in this slide,
it is possible to have a look at the history of the full project
with three different methods.

Let's look closer at each one in the next few slides.

---

## 1. Viewing the history of a project: GitHub


<center>

<img src='/module4/vc-history-gb.png' width="90%" alt="404 image"/>

</center>

Notes:
On the repo's landing page on GitHub, you can click the "*N* commits" link marked in red in the slide (where *N* is the number of commits made on the repo).

---

## 1. Viewing the history of a project: GitHub

<center>

<img src='/module4/vc-history-gb-2.png' width="90%" alt="404 image"/>

</center>

Notes:
After clicking the "*N* commits" link, we can see the view on this slide.
Here we can see all the commits in our projects;
in this toy project, there are only three commits.
You can identify all parts of each commit,
including the day it was made, its author, and hash.
You can also go back to browse the state of the repository
at the time of this commit by clicking the `<>` button.

---

## 2. Viewing the history of a project: Jupyter Lab

<center>

<img src='/module4/vc-history-jl-2.png' width="70%" alt="404 image"/>

</center>

Notes:
In JupyterLab, you can access the history of your project by looking in the "History" tab within the Git extension side panel (as we did in the previous module).
In this view,
we can see the same information as we could online:
the time when the commit was made, its author, and hash.

---

## 3. Viewing the history of a project: the Terminal

<center>

<img src='/module4/vc-history-terminal.png' width="90%" alt="404 image"/>

</center>

Notes:
If you want to access your project information using the terminal you can use the `git log` command.
Pay attention that here you are looking at the long version of the hash and not the 7-character long version displayed by default in Jupyter Lab or GitHub. In both cases, you will be able to identify the commit using its hash.

---

## 3. Viewing the history of a project: the Terminal

<center>

<img src='/module4/vc-history-terminal-2.png' width="90%" alt="404 image"/>

</center>

Notes:
Adding the flag `--oneline` to the command `git log` will provide you a different format for the output, in this case, you get a succint version of the information of each commit. 

The terminal allows greater flexibility when it comes to obtaining information about your project. If you would like to know what other possibilities you have for using the `git log` command, you can access the help by typing the command `git log --help`

---

## Viewing the history of a project 

**On the remote**
1. On GitHub through the repo's code commit view ✔️
**On your computer**
2. In Jupyter Lab through the repo's code commit view ✔️
3. In the terminal using `git log` ✔️

Notes:
We have covered three distinct methods for viewing your project's history.
Prior to starting the activities, give them a try yourself in an example Git repository! 

---

# Let's apply what we learned!
