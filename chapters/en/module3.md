---
title: 'Module 3: Git and GitHub intro'
description:
  'This module covers the basics of version control with Git and GitHub. ' 
prev: ../../module2 
next: ../../module4
type: chapter
id: 3
---

<exercise id="0" title="Module Learning Outcomes" type="slides,video">

<slides source="module3/module3_00" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id="1" title="What is version control, and why should I use it?" type="slides,video">

<slides source="module3/module3_01" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id='2' title="✍️ Practice: What is the difference between Git and GitHub?">

Which reason listed below is not a good reason to use version control:

<choice id='1'>
<opt text='Version control tools provide transparency on how a project evolved by tracking the history of documents, and who made what changes to those documents.'>

This is one of the main benefits of version control! Remember that we can track the changes we did to the projects by reading the commit messages.

</opt>

<opt text='Version control tools usually include a remote/cloud repository hosting service that can act as a backup of your local files (i.e., the files on your computer).'>

Even if you can use Git without an associated hosting service, it is a very common practice to do so. It allows you not only to keep a backup of your work if not also to socialize and work collaboratively. For example, in this course, we are using GitHub to host our remote repositories.

</opt>
<opt text='In practice, most data science projects involve collaboration on documents that contain code (e.g., Jupyter notebooks), and version control tools facilitate collaboration on such documents.'>

One of the great advantages of version control tools is that they facilitate collaboration. We will learn more on how to use Git/GitHub collaboratively in the next chapters.

</opt>

<opt text='Version control tools check the accuracy of your code.' correct='true'>

Correct! Version control has many benefits as was described in the previous answers 1, 2, and 3, but it is not related to how good is your code. 

</opt>

</choice>

**True or False**

**Git** is a remote/cloud repository hosting service where you can backup and share your files with collaborators.

<choice id='2'>
<opt text='True'>

Success! Git is a tool for version control that is used locally on your computer, whereas GitHub is an example of a remote/cloud repository hosting service where you can backup and share your files with collaborators.

</opt>
<opt text='False' correct='true'>

Git is a tool for version control that is used locally on your computer.

</opt>
</choice>

**True or False**

Are you getting the same information if you **download** a repository from GitHub than if you **clone** it?

<choice id='3'>
<opt text='True'>

Try downloading a project and clone it and check if you can find any difference between the two options.

</opt>
<opt text='False' correct='true'>

When you clone a Git repository from GitHub you get the hidden `.git` directory that contains all the history of the changes that Git knows about for that repository, and you get a remote that is already set up to push to the repository on GitHub (this makes it so that once you make changes that are added and committed to Git, all you need to do is push teh changes to GitHub). If you instead use the "Download ZIP" link you do not get the git history (stored in `.git`) nor a set-up remote for pushing to GitHub.

</opt>
</choice>
</exercise>

<exercise id='3' title="Version control repositories"  type='slides, video'>
<slides source='module3/module3_02' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='4' title='✍️ Practice: Cloning a GitHub repo'>

Which statement below is **not** true about GitHub repositories: 

<choice id='1'>
<opt text='Immediately after a repository is created on GitHub.com using the website, the repository exists only on GitHub.com and does not exist on your computer (i.e., you need to do something to get a copy of it on your computer).' >

In general you clone your repository if you want to work locally.

</opt>
<opt text='Only the creator of GitHub repository, and people the creator specify, can edit the files in the repository. This is true even when the repository is public.'>

This one is true! If you want to contribute to a public GitHub repository that you don't have access you can fork it and then create a pull request. Don't worry now, we will learn about these concepts in detail in chapter 4.

</opt>
<opt text='If the repository is public, anyone on the web can view it.' >

In Github.com you can view a lot of public repositories!

</opt>
<opt text='If the repository is public, anyone on the web can edit it.' correct='true' >

To be able to edit a repository, the owner should give you access first!

</opt>
</choice>

**True or false**

> The definition of cloning a repository is to copy/download the entire contents (files, project history, and location of the remote repository) of a remote GitHub.com repository to a computer (e.g., your workspace on a JupyterHub, or your laptop).

<choice id='2'>
<opt text='True' correct='true'>
</opt>
<opt text='False'>

When you are cloning a repository you are downloading a <code>.git</code> hidden folder that holds information as the project history. You can retrieve that information using git commands or JupyterLab GUI.

</opt>
</choice>
</exercise>

<exercise id='5' title="The staging area"  type='slides, video'>
<slides source='module3/module3_03' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='6' title='✍️ Practice: What can an empty area on your local computer be used for?'>

**Git** has a distinct step of **adding** files to the staging area because:

<choice id=1>
<opt text='Not all changes we make (i.e., files we create or edit) are ones that we want to push to our remote GitHub repository.'>

This is partially correct.

</opt>
<opt text='It allows us to edit multiple files at once, but associate particular commit messages with those modifications (so that the commit messages can more specifically reflect the changes that were made).'>

This is partially correct.

</opt>
<opt text='This is technically required of all version control software.'>

Although a staging area is used in Git which is the most popular version control software, there are other software that use different approaches for version control.

</opt>
<opt text='Both the first and the third options are correct.'>

The third option is not correct. Although a staging area is used in Git which is the most popular version control software, there are other software that use different approaches for version control.

</opt>
<opt text='Both the first and the second options are correct.' correct='true'>

</opt>
</choice>

**True or False**

The staging area doesn't exist in the GitHub web interface.

<choice id=2>
<opt text='True' correct='true'>
</opt>
<opt text='False'>

There is no equivalent to the staging area when you are working with the GitHub web interface. This means that you will have to commit each change directly and can't e.g. combine changes from multiple files into the same commit directly via the web interface.

</opt>
</choice>

Both changed and untracked files can be added to the staging area.

<choice id=3>
<opt text='True' correct='true'>
</opt>
<opt text='False'>

Changed files and new (untracked) files can both be added to the staging area and then committed.

</opt>
</choice>

</exercise>

<exercise id='7' title='Committing changes to a local repository' type='slides, video'>
<slides source='module3/module3_04' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='8' title='✍️ Practice: A commit in a bottle'>

**True or False**

> When we **commit** our changes to Git the record of changes, the commit message, the timestamp and the user who committed the changes are all uploaded to the Git history on GitHub.

<choice id='1'>
<opt text='True'>

Committing your changes only puts them in the Git history on the local computer you are working on. To get the changes on GitHub you need to do an additional step of pushing the changes to the remote repository on GitHub which we will learn about in the next slide deck.

</opt>
<opt text='False' correct='true'>

You're right! The changes (and all the associated information) are not yet on GitHub, they are only in the Git history on the local computer you are working on (i.e., your workspace on the JupyterHub or your laptop).

</opt>
</choice>

When working on a project that is under version control, how often should you `commit` to your local Git repository?

<choice id='2'>
<opt text='After every new unit/addition/fix you add to the project' correct='true'>
</opt>
<opt text='2-3 times'>

How many important changes did you include in your project? Rather than the absolute number of commits, it is more important to focus on the number of relevant changes. Think of the commits as checkpoints you can revisit if something goes wrong.

</opt>
<opt text='Only once, shortly before the deadline'>

Imagine that minutes before the deadline you realized you shouldn't have made your last changes. Git allow you to revert your project to a particular past commit! But if you have not tracked your changes frequently it wouldn't be possible! It is a good practice to commit each time you add, edit, fix or remove important units of the project.

</opt>
<opt text='Obsessively, like every 5 minutes'>

Are you sure you are committing only the relevant changes? You are probably spending too much time writing meaningful commit messages. Also, if you want to revert your project to a particular commit, you will probably spend too much time finding the exact commit you want, since not all of them are for a meaningful change.

</opt>
</choice>

Which command(s) below would save the changes of `README.md` to my local Git repository if you are using the terminal? 

<choice id='3'>
<opt text='<code>git init README.md</code> and <code>git commit -m "Add authors and copyright"</code>' >
What does the command <code>git init</code> do? You can read the manual to find out: `man git init` or `git init --help`.
</opt>
<opt text='<code>git commit -m "Add authors and copyright"</code>'>
Have you included the README.md file in the staging area?
</opt>
<opt text='<code>git add README.md</code> and <code>git commit -m "Add authors and copyright"</code>'  correct='true'>
</opt>
<opt text='<code>git commit -m README.md "Add authors and copyright"</code>'>
Have you include the README.md file in the staging area?
</opt>
</choice>
</exercise>

<exercise id='9' title='PUSHing changes from a remote repository'  type='slides, video'>
<slides source='module3/module3_05' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='10' title='✍️ Practice: Everything that goes up...'>

When working on a project that is under version control, how often should you `push` to your online GitHub repository?

<choice id=1>
<opt text='Obsessively, like every 5 minutes' >

You will probably be better using your time to move forward with the project than pushing this frequently. 

</opt>
<opt text='At least at the end of every session you work on the project' correct='true'>
This is a minimum. You can push more often if you have important updates to share your colleagues or want more frequent backups of your repository.
</opt>
<opt text='2-3 times'>
What if you have done more (or less) important changes to your project than 2-3?

</opt>
<opt text='Only once, shortly before the deadline'>
If you are working in a collaborative project, pushing too close to a deadline could reveal merging conflicts that would take time to solve.
</opt>
</choice>

One of the following actions is not necessary for pushing to the remote successfully. Can you detect it?

<choice id=2>
<opt text='Add files you want to record changes to the staging area' >
This is a necessary step before pushing your changes to GitHub.

</opt>
<opt text='Commit your changes to record them as part of your project history'>
This is a necessary step before pushing your changes to GitHub.
</opt>

<opt text='Add a hash to your commit to identify it easily'  correct='true'>
The HASH code it is automatically generated by Git each time you create a commit. It allows you to identify unambiguously the commit.

</opt>

</choice>
</exercise>

<exercise id='11' title='PULLing changes from a remote repository'  type='slides, video'>
<slides source='module3/module3_06' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='12' title='✍️ Practice: ...has to come down (with changes)'>

Which statement below is **not** true?

<choice id=3>
<opt text='Cloning and pulling a GitHub repository are the exact same thing.' correct='true'>

Cloning is downloading the repository for the first time, including the project history. Pulling is to update your local copy of the repository with the remote changes. For example, if a colleague has added changes to the repository you should update your local repository before push your own changes to avoid merging conflicts.

</opt>
<opt text='Pushing with Git is the act of sending changes that were committed to Git to a remote repository, for example, on GitHub.com.'>

Pushing updates the remote repository with any changes committed in your remote repository.
</opt>
<opt text='Pulling with Git is the act of collecting changes that exists in a remote repository, for example, on GitHub.com, that do not yet exist on the local computer you are working on'>

Pulling updates your local repository with any changes existing in the remote repository.
</opt>
<opt text='You should push your work to GitHub anytime you want to share your work with others, or when you finish a work session and want to back up your work.'>

These are both good reasons to push your changes to GitHub.com.
</opt>
</choice>


If you are working on a GitHub repository that is frequently updated by other colleagues. What is a recommended step before start working locally?


<choice id=4>

<opt text='Clone the repository again to be updated with their changes'>
The repository should be cloned only the first time you start working on a project locally. What other command would you use instead?
</opt>
<opt text='Stage the files you are interested to work on'>
You need to add to the staging area the changes on the files you are interested to commit and make part of your project history. You are already working locally on this step, the question is referring to a previous step.
</opt>
<opt text='Pull the remote changes to your computer' correct='true'>
</opt>
</choice>
</exercise>

<exercise id="13" title="What did we just learned?" type="slides,video">

<slides source="module3/module3_end" shot="0" start="0:002" end="3:40">
</slides>

</exercise>
