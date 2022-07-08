---
type: slides
title: 'module3_05'
---

# Pushing changes from a remote repository

---
# Pushing the commit to send the changes to the remote repository on GitHub

<center>

<img src='/module3/vc-push.png' width="90%" alt="404 image"/>

<center/>

Notes: Once you have made one or more commits that you want to share with your collaborators, you need to push (i.e., send) those commits back to GitHub. This updates the history in the remote repository (i.e., GitHub) to match what you have in your local repository. Now when collaborators interact with the remote repository, they will be able to see the changes you made. And you can also take comfort in the fact that your work is now backed up in the cloud!

---
# 🙌 JupyterLab: Pushing the commits to GitHub  

<center>

<img src='/module3/vc-push-jupyter.png' width="90%" alt="404 image"/>

<center/>

Notes: **1. Push your commits**

 To push your staged and commited changes to GitHub, first open the Git extension in JupyterLab and press the Git extension “push” button (circled in red).


---

# JupyterLab: Pushing the commits to GitHub 

<center>

<img src='/module3/vc-push-jupyter-1.png' width="90%" alt="404 image"/>

<center/>

Notes: **2. Enter your Git credentials to authorize the push to the remote repository.**

To send the committed changes back to the remote repository on GitHub, you need to push them. To do this, click on the cloud icon with the up arrow on the Jupyter Git tab.
You will then be prompted to enter your GitHub username and the personal access token that you generated earlier (not your account password!). Click the blue “OK” button to initiate the push.

---
# JupyterLab: Pushing the commits to GitHub 

<center>

<img src='/module3/vc-push-jupyter-2.png' width="90%" alt="404 image"/>

<center/>

Notes: **3. The prompt that the push was successful.**

---

# JupyterLab: Pushing the commits to GitHub 

<center>

<img src='/module3/vc-push-jupyter-3.png' width="90%" alt="404 image"/>

<center/>

Notes: **4. The GitHub web interface shows a preview of the commit message, and the time of the most recently pushed commit for each file.**

If the files were successfully pushed to the project repository on GitHub, you will be shown a success message. If you visit the remote repository on GitHub, you will see that the changes now exist there too!

---
# JupyterLab terminal: Pushing the commits to GitHub 

<center>

<img src='/module3/vc-push-jl-terminal.png' width="90%" alt="404 image"/>

<center/>

Notes: If insted of using JupyterLab you would like to push from the terminal you should write the command `git push`. 

---

# Let's apply what we learned!
