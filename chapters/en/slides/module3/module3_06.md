---
type: slides
title: 'module3_06'
---

# Pulling changes from a remote repository

---
# Pulling changes from the remote GitHub repository to synchronize your local repository

<img src='/module3/vc-pull.png' width="40%" alt="404 image" align="center"/>



Notes: To obtain the new changes from the remote repository on GitHub, you will need to pull those changes to your own local repository. By pulling changes, you synchronize your local repository to what is present on GitHub. Additionally, until you pull changes from the remote repository, you will not be able to push any more changes yourself (though you will still be able to work and make commits in your own local repository)


---

#  Pulling changes from GitHub using Jupyter Lab 

1. The GitHub interface indicates the name of the last person to push a commit to the remote repository, a preview of the associated commit message, the unique commit identifier, and how long ago the commit was snapshotted. 


<img src='/module3/vc-pull-jupyter.png' width="60%" alt="404 image"/>



---

#  Pulling changes from GitHub using Jupyter Lab 

2. The Jupyter Git extension clone button. 


<img src='/module3/vc-pull-jupyter-1.png' width="60%" alt="404 image"/>


Notes: We will now walk through how to use the Jupyter Git extension tool to pull changes to our `eda.ipynb` analysis file that were made by a collaborator.
You can tell Git to “pull” by clicking on the cloud icon with the down arrow in Jupyter

---

#  Pulling changes from GitHub using Jupyter Lab

3. The prompt after changes have been successfully pulled from a remote repository. 


<img src='/module3/vc-pull-jupyter-3.png' width="60%" alt="404 image"/>

---
#  Pulling changes from GitHub using Jupyter Lab


4. Changes made by the collaborator to `eda.ipynb` (code highlighted by red arrows). 

<img src='/module3/vc-pull-jupyter-4.png' width="60%" alt="404 image"/>


Notes: Once the files are successfully pulled from GitHub, you need to click “Dismiss” to keep working.
And then when you open (or refresh) the files whose changes you just pulled, you should be able to see them

---
#  Jupyter Lab: Pulling changes from GitHub

5. Version control repository history viewed using the Jupyter Git extension. 


<img src='/module3/vc-pull-jupyter-4.png' width="60%" alt="404 image" />


Notes: It can be very useful to review the history of the changes to your project. You can do this directly in Jupyter by clicking “History” in the Git tab. It is good practice to pull any changes at the start of every work session before you start working on your local copy.

---

# Terminal: 

`git pull`

Notes: To pull from the terminal you should use the command `git pull`

---

# Let's practise!
