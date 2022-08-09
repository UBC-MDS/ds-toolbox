---
type: slides
title: 'module3_05'
---

# PUSHing changes from a remote repository

---

## Pushing the changes to GitHub

<center>

<img src='/module3/vc-push.png' width="90%" alt="404 image"/>

</center>

Notes:
Once you have made one or more commits that you want to share with your collaborators, you need to push (i.e., send/upload) those commits back to GitHub. This updates the history in the remote repository (i.e., GitHub) to match what you have in your local repository. Now when collaborators interact with the remote repository, they will be able to see the changes you made. You can also take comfort in the fact that your work is now backed up in the cloud!

---

## 🙌 JupyterLab: Pushing the commits to GitHub

<center>

<img src='/module3/vc-push-jupyter.png' width="90%" alt="404 image"/>

</center>

Notes:
In the JupyterLab interface,
there are two steps involved in pushing your changes to GitHub for the first time.

**Step 1. Click the "Push" button**

To push your staged and committed changes to GitHub, first open the Git extension in JupyterLab and press the Git extension "push" button (click on the cloud icon with the up arrow on the Jupyter Git tab which is circled in red in this slide).

---

## JupyterLab: Pushing the commits to GitHub

<center>

<img src='/module3/vc-push-jupyter-1.png' width="90%" alt="404 image"/>

</center>

Notes:
**Step 2. Enter your Git credentials to authorize the push to the remote repository.**

After pushing the upload button,
you will be prompted to enter your GitHub username and your account password.
Click the blue “OK” button to initiate the push.
JupyterLab will remember your password so you don't need to enter it each time.

---

## JupyterLab: Pushing the commits to GitHub 

<center>

<img src='/module3/vc-push-jupyter-2.png' width="90%" alt="404 image"/>

</center>

Notes:
Next, you will see this prompt that the push was successful.

---

## JupyterLab: Pushing the commits to GitHub

<center>

<img src='/module3/vc-push-jupyter-3.png' width="90%" alt="404 image"/>

</center>

Notes:
You can now navigate to the GitHub web interface to see that your changes have been uploaded.
There you will see a preview of the commit message,
and the time of the most recently pushed commit for each file.

---

## Terminal: Pushing the commits to GitHub

<center>

<img src='/module3/vc-push-jl-terminal.png' width="90%" alt="404 image"/>

</center>

Notes:
We could also push from the terminal instead of from the JupyterLab Git extension.
If you would like to push from the terminal you can execute the command `git push`.

---

# Let's apply what we learned!
