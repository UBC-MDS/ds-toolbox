---
type: slides
title: 'module3_02'
---
# Version control repositories

---

# Schematic of local and remote version control repositories. 


<img src='/module3/vc-local-github-2.png' width="60%" alt="404 image" class="centerImage"/>


Notes: Typically, when we put a data analysis project under version control, we create two copies of the repository. One copy we use as our primary workspace where we create, edit, and delete files. This copy is commonly referred to as the **local repository**. The local repository most commonly exists on our computer or laptop, but can also exist within a workspace on a server (e.g., JupyterHub). The other copy is typically stored in a repository hosting service (e.g., GitHub), where we can easily share it with our collaborators. This copy is commonly referred to as the **remote repository**.

Under the hood, Git only saves the changes between your versions, so it is also efficient in terms of disk space. Not that while Git works great for text files, such as code, it is not so great for binary files such as images.

---

# Tracking the repository history using commit messages


<img src='/module3/vc-local-github-3.png' width="60%" alt="404 image" class="centerImage"/>



Notes: Both copies of the repository have a **working directory** where you can create, store, edit, and delete files (e.g., `analysis.ipynb` in the image). 

In the local repository we have something called "the staging" area. We are going to learn more about this soon.

---

# Tracking the repository history using commit messages


<img src='/module3/vc-local-github.png' width="48%" alt="404 image" class="centerImage"/>



Notes: Both copies of the repository also maintain a full project history. This history is a record of all versions of the project files that have been created. The repository history is not automatically generated; Git must be explicitly told when to record a version of the project. These records are called **commits**. They are a snapshot of the file contents as well metadata about the repository at that time the record was created (who made the commit, when it was made, etc.). In the local and remote repositories shown in the image, there are two commits represented as gray circles. Each commit can be identified by a human-readable message, which you write when you make a commit, and a commit hash that Git automatically adds for you

The purpose of the message is to contain a brief, rich description of what work was done since the last commit. Messages act as a very useful narrative of the changes to a project over its lifespan. If you ever want to view or revert to an earlier version of the project, the message can help you identify which commit to view or revert to. In image, you can see two such messages, one for each commit: `Created README.md` and `Added analysis draft`.

The **hash** is a string of characters consisting of about 40 letters and numbers. The purpose of the hash is to serve as a unique identifier for the commit, and is used by Git to index project history. Although hashes are quite long — imagine having to type out 40 precise characters to view an old project version! — Git is able to work with shorter versions of hashes. In the image, you can see two of these shortened hashes, one for each commit: `Daa29d6` and `884c7ce`.



---

# Tracking the repository history using commit messages


<img src='/module3/vc-local-github.png' width="48%" alt="404 image" class="centerImage"/>



Notes: Both copies of the repository have a **working directory** where you can create, store, edit, and delete files (e.g., `analysis.ipynb` in the image). Both copies of the repository also maintain a full project history. This history is a record of all versions of the project files that have been created. The repository history is not automatically generated; Git must be explicitly told when to record a version of the project. These records are called **commits**. They are a snapshot of the file contents as well metadata about the repository at that time the record was created (who made the commit, when it was made, etc.). In the local and remote repositories shown in the image, there are two commits represented as gray circles. Each commit can be identified by a human-readable message, which you write when you make a commit, and a commit hash that Git automatically adds for you

The purpose of the message is to contain a brief, rich description of what work was done since the last commit. Messages act as a very useful narrative of the changes to a project over its lifespan. If you ever want to view or revert to an earlier version of the project, the message can help you identify which commit to view or revert to. In image, you can see two such messages, one for each commit: `Created README.md` and `Added analysis draft`.

The **hash** is a string of characters consisting of about 40 letters and numbers. The purpose of the hash is to serve as a unique identifier for the commit, and is used by Git to index project history. Although hashes are quite long — imagine having to type out 40 precise characters to view an old project version! — Git is able to work with shorter versions of hashes. In the image, you can see two of these shortened hashes, one for each commit: `Daa29d6` and `884c7ce`.


---
# Creating a remote repository on GitHub

<center>

<img src='/module3/vc-remote-repository.png' width="60%" alt="404 image" class="centerImage"/>

</center>

Notes: Before you can create remote repositories on GitHub, you will need a GitHub account; you can sign up for a free account at https://github.com/. Once you have logged into your account, you can create a new repository to host your project by clicking on the “+” icon in the upper right-hand corner, and then on “New Repository” 


---

# Creating a remote repository on GitHub



<img src='/module3/vc-remote-repository-2.png' width="40%" alt="404 image" class="centerImage"/>



Notes: Repositories can be set up with a variety of configurations, including a name, optional description, and the inclusion (or not) of several template files. One of the most important configuration items to choose is the visibility to the outside world, either public or private. Public repositories can be viewed by anyone. Private repositories can be viewed by only you. Both public and private repositories are only editable by you, but you can change that by giving access to other collaborators.

To get started with a public repository having a template README.md file, take the following steps:

1. Enter the name of your project repository. In the example below, we use canadian_languages. 
2. Most repositories follow a similar naming convention involving only lowercase letter words
3. separated by either underscores or hyphens.
4. Choose an option for the privacy of your repository.
5. Select “Add a README file.” This creates a template README.md file in your repository’s root folder.
6. When you are happy with your repository name and configuration, click on the green “Create Repository” button.

---

# Cloning a repository using Jupyter

The green “Code” drop-down menu contains the remote address (URL) corresponding to the location of the remote GitHub repository. 



<img src='/module3/vc-clone-jupyter.png' width="60%" alt="404 image" class="centerImage"/>


Notes: Cloning a remote repository from GitHub to create a local repository results in a copy that knows where it was obtained from so that it knows where to send/receive new committed edits. In order to do this, first copy the URL from the HTTPS tab of the Code drop-down menu on GitHub

---

# Cloning a repository using Jupyter

1. The Jupyter Git Clone icon (red circle). 

<img src='/module3/vc-clone-jupyter-2.png' width="60%" alt="404 image" class="centerImage"/>

---
# Cloning a repository using Jupyter

2. Prompt where the remote address (URL) corresponding to the location of the GitHub repository needs to be input in Jupyter. 


<img src='/module3/vc-clone-jupyter-3.png' width="60%" alt="404 image" class="centerImage"/>


Notes: Open Jupyter, and click the Git+ icon on the file browser tab. Paste the URL of the GitHub project repository you created and click the blue “CLONE” button.

---
# Cloning a repository using Jupyter

On the file browser tab, you will now see a folder for the repository. Inside this folder will be all the files that existed on GitHub

<img src='/module3/vc-clone-jupyter-4.png' width="60%" alt="404 image" class="centerImage"/>


---
# The Terminal

**git clone**

Notes: If you want to repeat this in the terminal you can use the command git clone to download a copy of the repository to your computer.

---

# Let's practise!