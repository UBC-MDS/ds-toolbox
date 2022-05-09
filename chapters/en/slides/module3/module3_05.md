---
type: slides
title: 'module3_05'
---

# Pushing changes from a remote repository

---
# Communicating with the remote repository

Changes pushed by collaborators, or created directly on GitHub will not be automatically sent to your local repository. 


<img src='/module3/vc-local-github.png' width="40%" alt="404 image" align="center"/>


Notes: If you are working on a project with collaborators, they will also be making changes to files (e.g., to the analysis code in a Jupyter notebook and the project’s `README` file), committing them to their own local repository, and pushing their commits to the remote GitHub repository to share them with you. When they push their changes, those changes will only initially exist in the remote GitHub repository and not in your local repository 

---

# Pushing the commit to send the changes to the remote repository on GitHub


<img src='/module3/vc-push.png' width="70%" alt="404 image" align="center"/>


Notes: Once you have made one or more commits that you want to share with your collaborators, you need to push (i.e., send) those commits back to GitHub. This updates the history in the remote repository (i.e., GitHub) to match what you have in your local repository. Now when collaborators interact with the remote repository, they will be able to see the changes you made. And you can also take comfort in the fact that your work is now backed up in the cloud!

---
# Pushing the commits to GitHub using JupyterLab

1. The Jupyter Git extension “push” button (circled in red). 


<img src='/module3/vc-push-jupyter.png' width="60%" alt="404 image"/>


Notes:


---

# Pushing the commits to GitHub using JupyterLab

2. Enter your Git credentials to authorize the push to the remote repository.


<img src='/module3/vc-push-jupyter-1.png' width="60%" alt="404 image"/>


Notes: To send the committed changes back to the remote repository on GitHub, you need to push them. To do this, click on the cloud icon with the up arrow on the Jupyter Git tab.
You will then be prompted to enter your GitHub username and the personal access token that you generated earlier (not your account password!). Click the blue “OK” button to initiate the push.

---
# Pushing the commits to GitHub using JupyterLab

3. The prompt that the push was successful. 


<img src='/module3/vc-push-jupyter-2.png' width="60%" alt="404 image"/>

Notes:

---

# Pushing the commits to GitHub using JupyterLab

4. The GitHub web interface shows a preview of the commit message, and the time of the most recently pushed commit for each file.   

<img src='/module3/vc-push-jupyter-3.png' width="60%" alt="404 image""/>


Notes: If the files were successfully pushed to the project repository on GitHub, you will be shown a success message. If you visit the remote repository on GitHub, you will see that the changes now exist there too!

---
# Using the terminal

`git push origin main`

Notes: To push from the terminal you should write the command `git push`

---

# Let's apply what we learned!
