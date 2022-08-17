---
type: slides
title: 'module4_01'
---

# Viewing the history of a project

---
## Viewing the history of a project

There are two ways you can view the Git history of a project:

**On the remote**
1. On GitHub through the repo's code commit view
**On your computer**
2. In Jupyter Lab through the repo's code commit view
3. In the terminal using `git log`


Notes:

As you can see in this slide,
there are three distinct ways
to look at the history of
the entire project.

Let's look closer at each one
in the next few slides.

---

## 1. Viewing the history of a project: GitHub


<center>

<img src='/module4/vc-history-gb.png' width="90%" alt="404 image"/>

</center>

Notes: 

On GitHub, on the repo's landing page 
click "*N* commits" link 
(where *N* is the number of commits made on the repo)

---

## 1. Viewing the history of a project: GitHub



<center>

<img src='/module4/vc-history-gb-2.png' width="90%" alt="404 image"/>

</center>

Notes:

In this project there are 3 commits.
You can identify all parts of each commit,
including the day it was made, author and hash.
You can also go back to the repository
at the moment of making this change
by clicking the `<>` button.

---

## 2. Viewing the history of a project: Jupyter Lab

<center>

<img src='/module4/vc-history-jl-2.png' width="90%" alt="404 image"/>

</center>

Notes: 

Accessing the history of your project 
is very simple in JupyterLab, 
you have to look for the "History" tab
within the Git options.

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

Adding the flag `--oneline` 
to the command `git log` 
will change the output's format.
In this case, 
you get a succint version
of the information of each commit. 

The terminal allows greater flexibility
when it comes to obtaining 
information about your project.
If you would like to know 
what other possibilities 
you have for using the `git log` command,
you can access the help by
typing the command `git log --help`

---
## Viewing the history of a project 

**On the remote**
1. On GitHub through the repo's code commit view ✔️
**On your computer**
2. In Jupyter Lab through the repo's code commit view ✔️
3. In the terminal using `git log` ✔️

Notes: 

We have covered three distinct methods
for viewing your project's history.
Prior to starting the activities,
give them a try yourself
in an example Git repository! 

---

# Let's apply what we learned!
