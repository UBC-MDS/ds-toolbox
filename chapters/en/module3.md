---
title: 'Module 3: Git and GitHub intro'
description:
  'This module will also introduce how to use the two most common version control tools: Git for local version control, and GitHub for remote version control.' 
prev: ../../module2 
next: ../../module4
type: chapter
id: 3
---

<exercise id="1" title="What is version control, and why should I use it?" type="slides,video">

<slides source="module3/module3_01" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id='2' title="What is the difference between Git and GitHub?">

**Question 1**

Which reason listed below is not a good reason to use version control:

<choice id='1'>
<opt text='Version control tools provide transparency on how a project evolved by tracking the history of documents, and who made what changes to those documents.''>
Incorrect. This is one of the main benefits of version control! Remember that we can track the changes we did to the projects by reading the commit messages.
</opt>
<opt text='Version control tools usually include a remote/cloud repository hosting service that can act as a backup of your local files (i.e., the files on your computer).'>
</opt>
<opt text='In practice, most data science projects involve collaboration on documents that contain code (e.g., Jupyter notebooks), and version control tools facilitate collaboration on such documents.'>
</opt>
<opt text='Version control tools check the accuracy of your code.' correct='true'>

Correct! Version control has many benefits as was described in the previous answers 1, 2, and 3, but it is not related to how good is your code. 
</opt>
</choice>

**Question 2**

**True or false**

(1) **Git** is a remote/cloud repository hosting service where you can backup and share your files with collaborators.

<choice id='2'>
<opt text='true'>

Success! Git is a tool for version control that is used locally on your computer, whereas GitHub is an example of a remote/cloud repository hosting service where you can backup and share your files with collaborators.

</opt>
<opt text='false' correct='true'>

Git is a tool for version control that is used locally on your computer.

</opt>
</choice>

(2) Are you getting the same information if you **download** a repository from GitHub than if you **clone** it?

<choice id='3'>
<opt text='true'>

Try downloading a project and clone it and check if you can find any difference between the two options.

</opt>
<opt text='false' correct='true'>

When you clone a Git repository from GitHub you get the hidden `.git` directory that contains all the history of the changes that Git knows about for that repository, and you get a remote that is already set up to push to the repository on GitHub (this makes it so that once you make changes that are added and committed to Git, all you need to do is push teh changes to GitHub). If you instead use the "Download ZIP" link you do not get the git history (stored in `.git`) nor a set-up remote for pushing to GitHub.


</opt>
</choice>
</exercise>

<exercise id='3' title="Version control repositories"  type='slides, video'>
<slides source='module3/module3_02' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='4' title='Cloning a GitHub repo'>

**Question 1**
Which statement below is **not** true about GitHub repositories: 

<choice id='1'>
<opt text='Immediately after a repository is created on GitHub.com using the website, the repository exists only on GitHub.com and does not exist on your computer (i.e., you need to do something to get a copy of it on your computer).' >
</opt>
<opt text='Only the creator of GitHub repository, and people the creator specify, can edit the files in the repository. This is true even when the repository is public.'>
</opt>
<opt text='If the repository is public, anyone on the web can view it.' >
</opt>
<opt text=' If the repository is public, anyone on the web can edit it.' correct='true' >
</opt>
<opt text='A GitHub repository is like a folder on Dropbox or Google Drive, but it is different in that it has special properties for version control.' >
</opt>
</choice>

**Question 2**

**True or false**

> The definition of cloning a repository is to copy/download the entire contents (files, project history, and location of the remote repository) of a remote GitHub.com repository to a computer (e.g., your workspace on a JupyterHub, or your laptop).

<choice id='2'>
<opt text='true' correct='true'>
</opt>
<opt text='false'>
</opt>
</choice>

</exercise>

<exercise id='5' title="The staging area"  type='slides, video'>
<slides source='module3/module3_03' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='6' title='What can an empty area on your local computer be used for?'>

**Git** has a distinct step of **adding** files to the staging area because:

<choice>
<opt text='Not all changes we make (i.e., files we create or edit) are ones that we want to push to our remote GitHub repository.'>
</opt>
<opt text='It allows us to edit multiple files at once, but associate particular commit messages with particular files (so that the commit messages can more specifically reflect the changes that were made).'>
</opt>
<opt text='This is technically required of all version control software.'>
</opt>
<opt text='A and C'>
</opt>
<opt text='A and B' correct='true'>
</opt>
</choice>

</exercise>

<exercise id='7' title='Committing changes to a local repository' type='slides, video'>
<slides source='module3/module3_04' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='8' title='A commit in a bottle'>

**Question 1**

**True or false**

> When we **commit** our changes to Git, the snapshot of changes, the commit message, the time and date stamp and the user who committed the changes are all saved to the Git history on GitHub.

<choice id='1'>
<opt text='true'>

Solution is incorrect. Committing your changes only puts them in the Git history on the local computer you are working on (i.e., your workspace on the JupyterHub or your laptop). To get the changes on GitHub you need to do an additional step of pushing the changes to the remote repository on GitHub.

</opt>
<opt text='false' correct='true'>

"Success! You're right! The changes (and all the associated information) are not yet on GitHub, they are only in the Git history on the local computer you are working on (i.e., your workspace on the JupyterHub or your laptop)."

</opt>
</choice>

**Question 2**

When working on a project that is under version control you should `commit` to you local Git repository:

<choice id='2'>
<opt text='After every new unit/addition/fix you add to the project' correct='true'>
</opt>
<opt text='2-3 times'>
</opt>
<opt text='only once, shortly before the deadline'>
</opt>
<opt text='obsessively, like every 5 minutes'>
</opt>
</choice>

**Question 3**

Which command(s) below would save the changes of `README.md` to my local Git repository? 

<choice id='3'>
<opt text='`git init README.md`  `git commit -m "Add authors and copyright"`' >
</opt>
<opt text='`git commit -m "Add authors and copyright"`'>
</opt>
<opt text='`git add README.md` `git commit -m "Add authors and copyright"`'  correct='true'>
</opt>
<opt text='`git commit -m README.md "Add authors and copyright"`'>
</opt>
</choice>
</exercise>

<exercise id='9' title='PUSHing changes from a remote repository'  type='slides, video'>
<slides source='module3/module3_05' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='10' title='Everything that goes up...'>

When working on a project that is under version control you should `push` to online GitHub repository:

<choice>
<opt text='obsessively, like every 5 minutes' >
</opt>
<opt text='at least at the end of every session you work on the project' correct='true'>
</opt>
<opt text='2-3 times'>
</opt>
<opt text='only once, shortly before the deadline'>
</opt>
</choice>
</exercise>

<exercise id='11' title='PULLing changes from a remote repository'  type='slides, video'>
<slides source='module3/module3_06' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='12' title='...has to come down (with changes)'>

Which statement below is **not** true?

<choice>
<opt text='Cloning and pulling a GitHub repository are the exact same thing.' correct='true'>
</opt>
<opt text='Pushing with Git is the act of sending changes that were committed to Git to a remote repository, for example, on GitHub.com.'>
</opt>
<opt text='Pulling with Git is the act of collecting changes that exists in a remote repository, for example, on GitHub.com, that do not yet exist on the local computer you are working on (i.e., your workspace on the JupyterHub or your laptop).'>
</opt>
<opt text='You should push your work to GitHub anytime you want to share your work with others, or when you are done a work session and want to back up your work.'>
</opt>
</choice>
</exercise>

