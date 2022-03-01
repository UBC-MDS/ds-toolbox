
# Suggested Learning Objectives / Outline of Each Section

The overall idea of this course can be articulated as introducing students to enough tooling knowledge that they are comfortable creating and maintaining an online coding/technical resource, such as a JupyterBook. This will cover the skills they need to work with any type of literate coding document under version control:

- Use the shell to move around on their computer
- Use git and github to version control their project
- Have a good project organization
- Install jupytet-book in an isolated virutal env
- Create reproducible notebook documents and version control them
- Build and upload a Jupyter Book

## 1. Intro

1. Introduction to computing and text-based communication
    - [521 intro to computing section](https://pages.github.ubc.ca/mds-2021-22/DSCI_521_platforms-dsci_students/materials/lectures/1-lecture1-MDStools-shell-git-github.html#introduction-to-computing)
2. Introduction to the toolbox, give an overview of what each tool does and where it fits in the toolchain
3. [Installing things](https://ubc-mds.github.io/resources_pages/installation_instructions/)
    - We could either give this as part of lab0 only, or show how to do some of it during lecture as well.
    - [Simpler installation version in dsci100 textbook](https://datasciencebook.ca/move-to-your-own-machine.html)
4. Intro to VS Code
    - I think this makes sense because it lets us use vscode for markdown documents, merge conflicts, and graphical git views in the following chapters. It can also be used to open files from terminal via `code <filename>`, which jupyterlab can't.
        - I am hesitant to fully teach the graphical git interface from vscode and jupyterlab, but we can discuss it.
5. Create minimal reproducible code examples when asking for help.
    - [Lec8 521 first half](https://pages.github.ubc.ca/mds-2021-22/DSCI_521_platforms-dsci_students/materials/lectures/8-asking-effectively-and-virtual-environments.html)

## 2. Shell

1. Use Bash to navigate the computer’s filesystem
2. Creating new files and directories
3. Moving, copying, and deleting files and directories
4. Wildcards
5. Define and distinguish between absolute file paths and relative file paths
6. Reading the manual
    - In general, we can take shell inspiration from [this chapter that I wrote](https://merely-useful.tech/py-rse/bash-basics.html) and [521 Lec 1, bash section](https://pages.github.ubc.ca/mds-2021-22/DSCI_521_platforms-dsci_students/materials/lectures/1-lecture1-MDStools-shell-git-github.html#id1)

## 3. Git and GitHub intro

1. Know of the importance of version control: what it is and why we use it
2. Use git’s basic functions: clone, add, commit, pull, and push
3. Create a new repository on GitHub via the web interface

## 4. Getting groovy with Git and GitHub

1. View your Git history via git log and restore an older version of a file via git restore
2. Deal with merge conflicts at the command line and in VS Code
3. Know when you can stash your changes with git stash before pulling from GitHub
4. Telling git to ignore certain files
    - [521 lec 7 end](https://pages.github.ubc.ca/mds-2021-22/DSCI_521_platforms-dsci_students/materials/lectures/7-ssh-filenames-project-organization.html#tell-git-to-ignore-irrelevant-files-using-a-gitignore-file)

## 5. Branches, forks, and streams… Welcome to the Git nature walk!

1. Develop a feature on a branch in a Git repo.
2. Merge the feature branch with the main branch.
3. Create a fork of an existing GitHub repo.
4. Open a pull request from your forked repo to the upstream repo.
5. Sync your local and origin remote with an upstream remote.
    - This is much easier now with the new GitHub interface so will not take much time
6. Use git reset to move a branch back in the commit history.
    - This might be too much in a single lecture, but there is no natural break earlier
    - Additional resources for all git chapters:
        - https://pages.github.ubc.ca/mds-2021-22/DSCI_521_platforms-dsci_students/materials/lectures/1-lecture1-MDStools-shell-git-github.html#introduction-to-local-and-remote-version-control-software
        - https://datasciencebook.ca/Getting-started-with-version-control.html
        - https://merely-useful.tech/py-rse/git-cmdline.html

## 6. Project organization and environments

1. Organize projects and name files in a sound manner.
    - [521 lec 7](https://pages.github.ubc.ca/mds-2021-22/DSCI_521_platforms-dsci_students/materials/lectures/7-ssh-filenames-project-organization.html#filenames-best-practices)
2. Use virtual conda environments for Python.
    - [521 lec 8](https://pages.github.ubc.ca/mds-2021-22/DSCI_521_platforms-dsci_students/materials/lectures/8-asking-effectively-and-virtual-environments.html#virtual-environments)

## 7. JupyterLab and reproducible documents

1. Be comfortable using JupyterLab
    - [The first assignment in the programming course](https://github.ubc.ca/ubc-mds/prog-python-data-science-instructor/blob/master/source/assignment1/assignment1.ipynb) includes the Jupyter intro from lab 0 in 521.
        - But I still think it is fine if we repeat some things and have an easy first assignment
2. Create reproducible literate Python (e.g., reports and presentations) using Jupyter
3. Write Markdown syntax within notebooks and markdown files
4. There should be code and outputs in the notebook so that they get practice version controlling them.
5. Advanced Jupyter
    - Extensions?
    - Jupytext?

## 8. Creating books and web sites from Jupyter Notebooks

1. Learning the basis of Jupyter-book
2. Getting more practice version controlling notebooks
3. There should be code and outputs in the notebook so that they get practice version controlling them.
    - I think it would be really cool if students final project was to create a Jupyter Book, where they need to have a certain number of commits and make sure that it is published on GitHub.
        - They have to practice essentially all they learned in this course to get it right!
        - And it would be very rewarding for them to have made a book by the end of the program.


## Optional extras if we need more content

- Scaling up: read-eval-print-loop (REPL) processes versus non-interactive scripts
- Write regular expressions for pattern matching. Maybe inside Python also.
- Advanced bash with piping etc https://merely-useful.tech/py-rse/bash-tools.html
- Setup and authenticate ssh keys
- Makefiles
- Writing script in VS code?
- Breaking out notebook codes into separate files/packages
