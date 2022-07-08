---
type: slides
title: 'module3_06'
---

# Pulling changes from a remote repository

---
# Pulling changes from the remote GitHub repository to synchronize your local repository

<center>

<img src='/module3/vc-pull.png' width="55%" alt="404 image"/>

<center/>

Notes: Changes pushed by collaborators, or created directly on GitHub will not be automatically sent to your local repository. 

If you are working on a project with collaborators, they will also be making changes to files (e.g., to the analysis code in a Jupyter notebook and the project’s `README` file), committing them to their own local repository, and pushing their commits to the remote GitHub repository to share them with you. When they push their changes, those changes will only initially exist in the remote GitHub repository and not in your local repository. 

To obtain the new changes from the remote repository on GitHub, you will need to pull those changes to your own local repository. By pulling changes, you synchronize your local repository to what is present on GitHub. Additionally, until you pull changes from the remote repository, you will not be able to push any more changes yourself (though you will still be able to work and make commits in your own local repository)


---

#  Pulling changes from GitHub using JupyterLab 


<center>

<img src='/module3/vc-pull-jupyter.png' width="70%" alt="404 image"/>

<center/>


Notes: **1. The GitHub interface indicates the name of the last person to push a commit to the remote repository, a preview of the associated commit message, the unique commit identifier, and how long ago the commit was snapshotted.**

---

#  Pulling changes from GitHub using JupyterLab 


<center>

<img src='/module3/vc-pull-jupyter-1.png' width="80%" alt="404 image"/>

<center/>


Notes: **2. The Jupyter Git extension clone button.**
We will now walk through how to use the Jupyter Git extension tool to pull changes to our `eda.ipynb` analysis file that were made by a collaborator.
You can tell Git to “pull” by clicking on the cloud icon with the down arrow in JupyterLab

---

#  Pulling changes from GitHub using JupyterLab

<center>

<img src='/module3/vc-pull-jupyter-3.png' width="70%" alt="404 image"/>
git pu
<center/>

Notes: **3. The prompt after changes have been successfully pulled from a remote repository.**

---
#  Pulling changes from GitHub using JupyterLab

<center>

<img src='/module3/vc-pull-jupyter-4.png' width="70%" alt="404 image"/>

<center/>

Notes: **4. Changes made by the collaborator to `eda.ipynb` (code highlighted by red arrows).**

Once the files are successfully pulled from GitHub, you need to click “Dismiss” to keep working.
And then when you open (or refresh) the files whose changes you just pulled, you should be able to see them

---
# JupyterLab: Pulling changes from GitHub

<center>

<img src='/module3/vc-pull-jupyter-4.png' width="70%" alt="404 image" />

<center/>

Notes: **5. Version control repository history viewed using the Jupyter Git extension.** 

It can be very useful to review the history of the changes to your project. You can do this directly in Jupyter by clicking “History” in the Git tab. It is good practice to pull any changes at the start of every work session before you start working on your local copy.

---

# Jupyter Lab terminal: Pulling changes from GitHub

<center>

<img src='/module3/vc-pull-jl-terminal.png' width="60%" alt="404 image" />

<center/>

Notes: If you want to do this with the terminal, you have to pull from the terminal you should use the command `git pull`.

---

# Let's apply what we learned!
