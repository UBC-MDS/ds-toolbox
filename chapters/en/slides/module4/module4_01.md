---
type: slides
title: 'module4_01'
---

# Viewing the history of a project

Notes:
In this slide deck we will explore the project's commit history.

---

## Viewing the history of a project

There are three ways you can view the Git history of a project:

**Remote**

1. In the GitHub web interface through the repo's code commit view

**On your computer**

1. In Jupyter Lab, through the repo's code commit view
2. In the terminal, using `git log`

Notes:
Do you remember the commit messages?
These will be very useful when looking at the history of our repository.
we will outline three alternative ways 
to look at the history of the entire project.

Let's look closer at each one in the next few slides.

---

## 1. Viewing the history of a project: GitHub

<br>
<br>
<br>

<center>

<img src='/module4/vc-history-gb.png' width="900px" alt="404 image"/>

</center>

Notes:
On the repo's landing page on GitHub, you can click the "*N* commits" link marked in red in the slide (where *N* is the number of commits made on the repo).

---

## 1. Viewing the history of a project: GitHub

<br>
<br>
<br>

<center>

<img src='/module4/vc-history-gb-with-notes.png' width="800px" alt="404 image"/>

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

<br>
<br>
<br>

<center>

<img src='/module4/vc-history-jl-2.png' width="600px" alt="404 image"/>

</center>

Notes:
In JupyterLab, you can access the history of your project by looking in the "History" tab within the Git extension side panel (as we did in the previous module).
In this view,
we can see the same information as we could online:
the time when the commit was made, its author, and hash.

---

## 3. Viewing the history of a project: the Terminal

<br>
<br>
<br>

<center>

<img src='/module4/vc-git-log.png' width="900px" alt="404 image"/>

</center>

Notes:

You can use the command `git log` to view your project's history in the terminal. In this slide, we've indicated with a red line how the three commits in the `git log` output correspond to the information in Jupyter Lab's "History" tab.

It is important to note that `git log` output shows the long version of the commit hash, not the 7-character version that is displayed by default in Jupyter Lab or GitHub. Except your project is extremely large, Git won't require more than 7 characters to identify the commit. In consequence, if you need the commit hash and you are using the terminal, you can only copy and paste the first 7 hash characters of the commit.

Another option is to add the flag `--oneline` (run `git log --oneline` instead of `git log`) to get a version of the output that automatically shortens the hash characters. You can try this command on your terminal.

---

## 3. Viewing the history of a project: the Terminal

<br>
<br>
<br>

<center>

<img src='/module4/vc-git-log-oneline.png' width="900px" alt="404 image"/>

</center>

Notes:
Another option is adding the options flag `--oneline` to the command `git log`. The command `git log --oneline` will provide a more succinct version of the information in each commit.
This is often more convenient as it is easier to digest and get an overview of the project history,
but it can be tedious to type out each time.
Here it would be good to create a shell alias,
which we learned about in module 2!
Executing `alias gl="git log --oneline"`
means that we can simply type `gl` each time we want to view the git log output.
Refer to module 2 for more details around aliases and how to make them persist through reboots.

The terminal allows greater flexibility when it comes to displaying the history of the project.
If you would like to know what other possibilities you have for using the `git log` command, you can access the help by typing the command `git log --help` (any operating system) or `man git log` (MacOS and Linux).

---

## Viewing the history of a project

**On the remote**

1. On GitHub through the repo's code commit view ✔️
**On your computer**

1. In Jupyter Lab through the repo's code commit view ✔️
2. In the terminal using `git log` ✔️

Notes:
We have covered three distinct methods for viewing your project's history.
Prior to starting the multiple choice questions below,
give these commands a try yourself in an example Git repository!

---

# Let's apply what we learned!
