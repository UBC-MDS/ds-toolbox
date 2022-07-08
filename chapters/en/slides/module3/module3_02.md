---
type: slides
title: 'module3_02'
---
# Version control repositories

---

# Schematic of local and remote version control repositories. 

<br>
<br>
<br>
<br>
<br>

<center>

<img src='/module3/vc-local-github-2.png' width="80%" alt="404 image"/>

<center/>

Notes: Typically, when we put a data analysis project under version control, we create two copies of the repository. One copy we use as our primary workspace where we create, edit, and delete files. This copy is commonly referred to as the **local repository**. The local repository most commonly exists on our computer or laptop, but can also exist within a workspace on a server (e.g., JupyterHub). The other copy is typically stored in a repository hosting service (e.g., GitHub), where we can easily share it with our collaborators. This copy is commonly referred to as the **remote repository**.

Under the hood, Git only saves the changes between your versions, so it is also efficient in terms of disk space. Note that while Git works great for text files, such as code, it is not so great for binary files such as images.


---

# Tracking the repository history using commit messages

<center>

<img src='/module3/vc-local-github.png' width="55%" alt="404 image" />

<center/>

Notes: Both copies of the repository have a **working directory** where you can create, store, edit, and delete files (e.g., `analysis.ipynb` in the image). 

Also, both copies of the repository also maintain a full project history. This history is a record of all versions of the project files that have been created. The repository history is not automatically generated; Git must be explicitly told when to record a version of the project. These records are called **commits**. They are a snapshot of the file contents as well metadata about the repository at that time the record was created (who made the commit, when it was made, etc.). In the local and remote repositories shown in the image, there are two commits represented as gray circles. Each commit can be identified by a human-readable message, which you write when you make a commit, and a commit hash that Git automatically adds for you.

Probably you have noticed that in the local repository it is a **staging area**, that is not existent in the remote repository. We will learn about it soon, but for now imagine that it is a particular area in your local repository that will give you more flexibility to track your changes.

---

# Commit message

<center>

<img src='/module3/vc-commits.png' width="70%" alt="404 image"/>

<center/>


Notes:  The purpose of the commit message is to contain a brief, rich description of what work was done since the last commit. Messages act as a very useful narrative of the changes to a project over its lifespan. If you ever want to view or revert to an earlier version of the project, the message can help you identify which commit to view or revert to. In this image, you can see two such messages, one for each commit: `Created README.md` and `Added analysis draft`.

The **hash** is a string of characters consisting of about 40 letters and numbers. The purpose of the hash is to serve as a unique identifier for the commit, and is used by Git to index project history. Although hashes are quite long — imagine having to type out 40 precise characters to view an old project version! — Git is able to work with shorter versions of hashes. In the image, you can see two of these shortened hashes, one for each commit: `Daa29d6` and `884c7ce`.




---
# How can you create your repositories? 

<br>
<br>
<br>
<br>
<br>

1. Create the remote repository in www.github.com (**GitHub**)
2. Clone the repository to your local computer with the terminal OR JupyterLab (**Git**)

Notes: We are going to learn how to create a remote repository in GitHub and then to clone it locally using the terminal or JupyterLab.

Cloning a GitHub repository it is not the same as downloading it to your computer. When you clone it you are downloading the files and all the project history including the commits and their associated messages. This information about your project that are not the files you are working on themselves is dowloaded as a hidden folder `.git`. The folders that contain this information are considered Git repositories. By default all your projects on GitHub are Git repositories.

You can clone your project to have a local copy using an integrated development environment (IDE) as JupyterLab or the terminal. The terminal will give you greater versatility since you can use a wide variety of commands, while the IDE will allow you to handle the basic commands in a more intuitive way.
We are going to learn both ways! 

---

# 🙌  1. Creating a remote repository on GitHub

<center>

<img src='/module3/vc-remote-repository.png' width="60%" alt="404 image" />

</center>

Notes: Before you can create remote repositories on GitHub, you will need a GitHub account; you can sign up for a free account at https://github.com. Once you have logged into your account, you can create a new repository to host your project by clicking on the `+` icon in the upper right-hand corner, and then on `New Repository`. 


---
# 1. Creating a remote repository on GitHub

<center>

<img src='/module3/vc-remote-repository-2.png' width="40%" alt="404 image" />

<center/>

Notes: Repositories can be set up with a variety of configurations, including a name, optional description, and the inclusion (or not) of several template files. One of the most important configuration items to choose is the visibility to the outside world, either public or private. **Public repositories** can be viewed by anyone. **Private repositories** can be viewed by only you. Both public and private repositories are only editable by you, but you can change that by giving access to other collaborators.

To get started with a public repository having a template `README.md` file, take the following steps:

1. Enter the name of your project repository. In the example below, we use `canadian_languages`. 
2. Most repositories follow a similar naming convention involving only lowercase letter words.
3. separated by either underscores or hyphens.
4. Choose an option for the privacy of your repository.
5. Select `Add a README file` This creates a template `README.md` file in your repository’s root folder.
6. When you are happy with your repository name and configuration, click on the green `Create Repository` button.

That's it! Now let's clone it to get a local copy on your computer.

---

# 🙌  2. Cloning a repository using Jupyter Lab (IDE)

 

<center>

<img src='/module3/vc-clone-jupyter.png' width="60%" alt="404 image" align="center"/>

<center/>

Notes: **The green “Code” drop-down menu contains the remote address (URL) corresponding to the location of the remote GitHub repository.**

 Cloning a remote repository from GitHub to create a local repository results in a copy that knows where it was obtained from so that it knows where to send/receive new committed edits. In order to do this, first copy the URL from the HTTPS tab of the Code drop-down menu on GitHub

---

# 2. Cloning a repository using Jupyter Lab (IDE)

<center>

<img src='/module3/vc-clone-jupyter-2.png' width="60%" alt="404 image"/>

<center/>

Notes: **1. Click the Jupyter Git Clone icon (red circle).**
---
# 2. Cloning a repository using Jupyter Lab (IDE)

<center>

<img src='/module3/vc-clone-jupyter-3.png' width="60%" alt="404 image"/>

<center/>

Notes: **2. Prompt where the remote address (URL) corresponding to the location of the GitHub repository needs to be input in Jupyter.** 

Open Jupyter, and click the Git+ icon on the file browser tab. Paste the URL of the GitHub project repository you created and click the blue “CLONE” button.

---
# 2. Cloning a repository using Jupyter Lab (IDE)

<center>

<img src='/module3/vc-clone-jupyter-4.png' width="60%" alt="404 image"/>

<center/>

Notes: On the file browser tab, you will now see a folder for the repository. Inside this folder will be all the files that existed on GitHub

---
# 2. Cloning a repository using Jupyter Lab (terminal)

<center>

<img src='/module3/vc-clone-jupyter-4.png' width="60%" alt="404 image"/>

<center/>

Notes: If you want to do this in the terminal you can use the command git clone to download a copy of a repository to your computer. You will see that the repository will appear in JupyterLab after you cloned it. Remember to check that you are in the directory where the file has been cloned.

---

# How can you check that you are working in a Git repository? (terminal)


<center>

<img src='/module3/vc-clone-jupyter-4.png' width="60%" alt="404 image"/>

<center/>

Notes: A Git repository stores all the necessary information for version control your project in a hidden folder called `.git`. If you want to know if you are working in a Git repo using the terminal you can use the bash command `ls -a` as you can see in the image. The `-a` flag will include into the lists of files displayed on the terminal the hidden folders. If `.git` is included you are working in a Git repository.

By cloning a repository from GitHub to your computer, you are automatically getting a copy of `.git` and thus, working on a Git.

---

# Let's apply what we learned!