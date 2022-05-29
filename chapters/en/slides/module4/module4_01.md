---
type: slides
title: 'module4_01'
---

# Viewing the history of a project

---
# Viewing the history of a project

There are two ways you can view the Git history of a project:

**In the remote**
1. On GitHub through the repo's code commit view
**In your computer**
2. On Jupyter Lab through the repo's code commit view
3. On your local machine using `git log`


Notes: Do you remember the commit messages that we write for the different changes that we save from the project?
It is possible to have a look at the history of the full project with any of these 3 different methods

---

# 1. Viewing the history of a project: GitHub

On GitHub, on the repo's landing page click "*N* commit" link (where *N* is the number of commits made on the repo)

<center>

<img src='/module4/vc-history-gb.png' width="70%" alt="404 image"/>

</center>

Notes: On GitHub, on the repo's landing page click "*N* commit" link (where *N* is the number of commits made on the repo)
---

# 1. Viewing the history of a project: GitHub



<center>

<img src='/module4/vc-history-gb-2.png' width="70%" alt="404 image"/>

</center>

Notes: Now we have a project, but only 3 commits. You can identify all the parts of each commit, includind day it was made, author, hash and also go back to the repository at the moment of this change chicking the button `<>`

---

# 2. Viewing the history of a project: Jupyter Lab

<center>

<img src='/module4/vc-history-jl-2.png' width="70%" alt="404 image"/>

</center>

Notes: Accessing the history of your project is very simple, you just have to look for the History tab within the Git options.

---

# 3. Viewing the history of a project: the Terminal

<center>

<img src='/module4/vc-history-terminal.png' width="70%" alt="404 image"/>

</center>

Notes: If you want to access your project information using the terminal you can use the `git log` command.

---

# 3. Viewing the history of a project: the Terminal

<center>

<img src='/module4/vc-history-terminal-2.png' width="70%" alt="404 image"/>

</center>

Notes: Adding the flag `--oneline` to the command `git log` will provide you a different format for the output, in this case, you get a succint version of the information of each commit. 

The terminal allows greater flexibility when it comes to obtaining information about your project. If you would like to know what other possibilities you have for using the `git log` command, you can access the help by typing the command `git log --help`

---

# Let's practise
