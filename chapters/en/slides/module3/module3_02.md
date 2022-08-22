---
type: slides
title: 'module3_02'
---

# Version control repositories

Notes:

In this slide deck,
we will learn the basics of how to create repository that uses version control.

---

## Schematic of local and remote version control repositories. 

<br>
<br>
<br>
<br>
<br>

<center>

<img src='/module3/vc-local-github-2.png' width="700px" alt="404 image"/>

</center>

Notes:

Typically, when we put a data analysis project under version control,
we create two copies of the repository.
One copy we use as our primary workspace where we create,
edit, and delete files. 
This copy is commonly referred to as the **local repository**.
The local repository most commonly exists on our computer or laptop, 
but can also exist within a workspace on a server (e.g., JupyterHub). 
The other copy is typically stored in a repository hosting service (e.g., GitHub),
where we can easily share it with our collaborators. 
This copy is commonly referred to as the **remote repository**.

Under the hood, 
Git only saves the changes between your versions 
rather than a complete version of the document for each version,
so it is also efficient in terms of disk space. 
Note that while Git works great for text files, 
such as code, it is not so great for binary files such as images
because the changes between two versions of the same image
cannot easily be expressed in plain text.

---

## Tracking the repository history using commit messages

<center>

<img src='/module3/vc-local-github.png' width="600px" alt="404 image" />

</center>

Notes:

Both copies of the repository:

- have a **working directory** where you can create, store, edit, and delete files (e.g., `analysis.ipynb` in the image).

- maintain a full project history. This history is a record of all versions of the project files that have been created. The repository history is not automatically generated; Git must be explicitly told when to record a version of the project. These records are called **commits**. They are a snapshot of the file contents and metadata about the repository at the time the record was created (a commit includes who made the commit, when it was made, etc.).

In the local and remote repositories shown in the image,
there are two commits represented as gray circles.
Each commit can be identified by a human-readable message,
which you write when you create the commit,
and a commit hash that Git automatically adds for you.

You have probably noticed that in the local repository 
there is a **staging area**, 
which does not exist in the remote repository.
We will soon learn more about the staging area,
but for now imagine that it is a particular area in your local repository
that will give you more flexibility to track your changes.

---

## Commit message

<center>

<img src='/module3/vc-commits.png' width="600px" alt="404 image"/>

</center>


Notes:

The purpose of the commit message is to contain a brief, 
rich description of what work was done since the last commit. 
Messages act as a very useful narrative of the changes to a project over its lifespan. 
If you ever want to view or revert to an earlier version of the project,
the message can help you identify which commit to view or revert to. 
In this image, you can see two such messages, 
one for each commit: `Created README.md` and `Added analysis draft`.

The **hash** is a string of characters consisting of about 40 letters and numbers. 
The purpose of the hash is to serve as a unique identifier for the commit,
and is used by Git to index project history.
Although hashes are quite long — imagine having to type out 40 precise characters 
to view an old project version! — Git is able to work with shorter versions of hashes.
In the image, you can see two of these shortened hashes,
one for each commit: `Daa29d6` and `884c7ce`.

---

## How can you create your repositories? 

<br>
<br>
<br>
<br>
<br>

1. Create the remote repository in www.github.com (**GitHub**)
2. Clone the repository to your local computer with the terminal **OR** JupyterLab IDE (**Git**)

Notes:

We are going to learn how to create a remote repository in GitHub
and then to clone it locally using the terminal or JupyterLab.

Cloning a GitHub repository is not the same as downloading it to your computer.
When you clone it you are downloading the files and all the project history 
including the commits and their associated messages. 
The information about your project
that are not the files themselves is downloaded as a hidden folder called `.git`. 
Any folders that contains a hidden `.git` folder is considered a Git repository. 
By default all your projects on GitHub are Git repositories.

You can clone your project to have a local copy
using an integrated development environment (IDE) as JupyterLab or the terminal. 
The terminal will give you greater versatility since you can use a wide variety of commands,
while the IDE will allow you to handle the basic commands in a more intuitive way.

Next, we are going to learn more about both the steps in this slide,
starting with how to create the remote repository!

---

## 1. Creating a remote repository on GitHub

<center>

<img src='/module3/vc-new-repository-github.png' width="600px" alt="404 image" />

</center>

Notes:

🙌  **Practice**

Before you can create remote repositories on GitHub, you will need a GitHub account; 
you can sign up for a free account at https://github.com.
Once you have logged into your account, you can create a new repository to host your project 
by clicking on the `+` icon in the upper right-hand corner, and then on `New Repository`.

---

## 1. Creating a remote repository on GitHub

<center>

<img src='/module3/vc-new-repository-create.png' width="500px" alt="404 image" />

</center>

Notes:

🙌  **Practice**

Repositories can be set up with a variety of configurations,
including a name, optional description, and the inclusion (or not) of several template files.
One of the most important configuration items to choose is the visibility to the outside world, 
either public or private:

- **Public repositories** can be viewed by anyone.
- **Private repositories** can be viewed by only you.

Both public and private repositories are only editable by you, but you can change that by giving access to other collaborators.

To get started with a public repository having a template `README.md` file, take the following steps:

1. Enter the name of your project repository. In the example below, we use `canadian_languages`. 
2. Most repositories follow a similar naming convention involving only lowercase letter words separated by either underscores or hyphens.
3. Choose an option for the privacy of your repository.
4. Select `Add a README file` This creates a placeholder `README.md` file in your repository’s root folder, which makes it possible to clone the repository to your computer directly.
5. When you are happy with your repository name and configuration, click on the green `Create Repository` button.

That's it! Now let's clone it to get a local copy on your computer.

---

## 2. Cloning a repository using Jupyter Lab (IDE)

<br>
<br>
<br>

<center>

<img src='/module3/vc-clone-jupyter-https.png' width="600px" alt="404 image" align="center"/>

</center>

Notes:

🙌  **Practice**

Cloning a remote repository from GitHub to create a local repository
results in a copy that is aware where it was obtained from, 
so that it knows where to send/receive new committed edits. 
In order to do this, 
first click the green button that says "Code" on your GitHub repo,
and choose to copy the URL from the HTTPS tab.

*The green “Code” drop-down menu contains the remote address (URL) corresponding to the location of the remote GitHub repository.*

---

## 2. Cloning a repository using Jupyter Lab (IDE)

<center>

<img src='/module3/vc-clone-jupyter-2.png' width="600px" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

Next, open JupyterLab and click the Jupyter Git Clone icon
in the "Files" tab of the left side bar.
We have marked this icon with a red circle in the screenshot in this slide.
When you click this button a dialog box will show up, which we will explain in the next slide.

---

## 2. Cloning a repository using Jupyter Lab (IDE)

<center>

<img src='/module3/vc-clone-jupyter-URL.png' width="600px" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

Once the dialog box pops up, you can paste the URL of the GitHub project repository you copied earlier and click the blue “CLONE” button. This will download the repository files to your computer.

---

## 2. Cloning a repository using Jupyter Lab (IDE)

<center>

<img src='/module3/vc-clone-jupyter-4.png' width="600px" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

When the cloning is complete,
you will now see a folder for the repository showing up in the file browser tab.
Inside this folder are all the files that existed on your repository on GitHub.

---

## 2. Cloning a repository using Jupyter Lab (Terminal)

<center>

<img src='/module3/vc-clone-jupyter-terminal.png' width="650px" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

It is also possible to work with Git from the terminal instead of the JupyterLab Git client.
We will later see that there are some advantages of working in the terminal for the more advanced commands.
For now, let's see how we can perform the same cloning steps in the terminal
as we just did via the graphical Git client.
Note that we will never need to clone a project *both* from the Git client
and the terminal,
so we are just doing this here
to show you how it is done in both interfaces.

To clone a repository from the terminal,
we will use the `git clone` command
followed by the same URL we copied previously
as can be seen in the screenshot on this slide.
After the cloning has finished,
you will see that the repository appears in the JupyterLab files tab,
just as it did when we clones via the graphical Git client.

---

## How can you check that you are working in a Git repository? (Terminal)

<center>

<img src='/module3/vc-git-hidden-folder.png' width="600px" alt="404 image"/>

</center>

Notes:

🙌  **Practice**

A Git repository stores all the necessary information for version control your project in a hidden folder called `.git`. If you want to know if you are working in a Git repo using the terminal you can use the bash command `ls -a` as you can see in the image. The `-a` flag will include into the lists of files displayed on the terminal the hidden folders. If `.git` is included you are working in a Git repository.

Remember to first double check that you are in the directory which the files have been cloned to.
When you clone, the files will be downloaded to a subdirectory of the folder you are currently in,
so you need to use `cd` to get to that folder before running `ls -a`.
By cloning a repository from GitHub to your computer, you are automatically getting a copy of `.git` and thus, working in a Git repository.

---

# Let's apply what we learned!
