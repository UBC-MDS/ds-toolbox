---
type: slides
title: 'module5_02'
---

# How branches are related

---

## How branches are related 🙌

<br>
<br>
<br>

1. Create and clone a **Git repository** to your computer.
2. Create 2 commits (e.g. modifying README file).
3. Push to GitHub.
4. Start a new branch using the terminal or JupyterLab.
5. Create 2 commits in the new branch.
6. Go back to the `main` branch.
7. Create 2 commits in the `main` branch.

Notes:
Before moving forward, let's practice!

Remember that after you create the branch you are always going to be working on that new branch.
If you want to go back to your original branch you can (1) click the name of the branch you want to return in the **Branches** tab (JupyterLab) or (2) run `git switch <branch-name>` (terminal).

We will use the repository you just created as an example for the rest of this module.

---

## Seeing how branches are related (terminal)

<br>

`git log --oneline --all --graph`

<center>

<img src='/module5/branches-history-jl-t.png' width="800px" alt="404 image"/>

</center>

Notes:


For this section we are going to simulate that we start working on a project.
After cloning the repository for  
the first time we want to see what the branches look like. 
To see all branches as well as a graph indicating their relationship,
we can type `git log --oneline --all --graph` in the terminal.

You can clone any repository on github.com 
and run this command to visualize the project history. 
For example, in the image we are visualizing 
the repository of the [open source project Glosario](https://github.com/carpentries/glosario)  
using the History tab of JupyterLab and   
also the command `git log --oneline --all --graph` in the terminal.  
Glosario is an open source glossary of terms used in data science  
that [is available online](https://glosario.carpentries.org/)  
 and also as a library in both R and Python.  

Remember that you can use `space` on your keyboard
to page down through the commit history and `b` to page up. 
Press `q` to exit back out to the terminal.

---

## Seeing how branches are related (VS Code)

<br>

<center>

<img src='/module5/branches-vscode.png' width="600px" alt="404 image"/>

</center>


Notes:
Even if the branch representations that we can view in the terminal and JupyterLab are correct, 
it is not as detailed as the one we can get from VS Code.

Open the current folder in VS Code by typing `code .` inside your git folder  
(remember that `.` is a shortcut that means "current directory"). 
In VS Code, go to the extensions tab and search for "git history",   
install the extension.
Then go to **View** -> **Command Palette** and
start writing `Git: View History (git log)`. 
A new tab will open with the Git History. 
If you want to display all the branches
you will have to select them in one of the menus
as you can see in the image. 


Where it currently says `master`,
change it to show "All branches" and you should now see
a nice graphical overview looking like the one in the picture. 
If the Git history view hangs or looks strange, press "Refresh".
You're free to use the one you prefer between VS Code and `git log`, 
but many of the commands are the easiest to run via terminal.

---

## Observing the trees

<br>

<center>

<img src='/module5/observing-trees.png' width="600px" alt="404 image"/>

</center>

Notes:

Downloading a public GitHub repository from a project you like and observing the number of branches is an excellent exercise. For example you can try to determine how many branches exist that have not been merged and where the most recent modifications have occurred.

Understanding these graph-based commit history visualizations is helpful to understand the relationships between branches, provides vital information about the structure of a project, and can help you fix problems if they arise.

In this slide, you can see the public repository of JupyterLab that has been cloned and opened using VS Code.
Here we can see that there are three active branches:

1. The default `master` branch which is indicated on the topmost row. 
   This is the orange line in the graphical representation to the left and there are five commits visible in this image on this branch (the black dots on the orange line).
2. The branch for version 3.4 which is indicated on the second row from the top. This is the middle red line in the graphical represenation and there are three commits visible in this image on this branch.
3. The branch with a long name starting with `12758-snapshots` at the third row from the bottom (commit message: "Update snapshots for challenger commit"). This is the red line in the graphical representation to the right, and it contains only a single commit.


---

# Let's apply what we learned!



