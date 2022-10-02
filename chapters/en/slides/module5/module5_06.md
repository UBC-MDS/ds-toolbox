---
type: slides
title: 'module5_06'
---

# Collaborative GitHub workflows: Forking

Notes:
In this slide deck we will continue to learn about different ways to collaborate on GitHub.

---

## Collaborative work

There are two main strategies we can use to work with others:

1. **Branching**

2. <mark><b> Forking </b></mark>

Notes:
We have learned that if you create your own repository on GitHub or you are part of a team of people who all have read and write access to a repo, then you can clone it to you computer, make changes and then push them back to this repository (either on a feature branch or on the `main` branch). We called this style of collaboration **branching**.

If you want the code from someone else's repository, where you are not a member or official collaborator, then you can clone it and use it on computer. However, you cannot push your changes back to the GitHub repository because you don't have the write permissions to that repository.

It would still be beneficial for the repository's owners to receive your contributions if you make code modifications and enhance something, without having to grant you full access and running the risk of breaking something. **Instead of working directly on the repository, you can fork (copy) someone else's repository and work on a branch in your own copy.**

---

## How can I fork a repository?


<center>

<img src='/module5/fork-glosario.png.png' width="700px" alt="404 image" />

</center>


Go to the GitHub page of the project that you want to fork. In the upper right corner, click the icon that says "fork". That's it! You just forked a repo!

Notes:

**Forks** are copies of other's repositories on GitHub that you own. You can do anything you want on your fork. If you make improvements, you can send a notification to the owner of the **"upstream"** repository (the one you forked from) and request that they pull the code from your repository (referred to as "origin") into theirs. As we learned earlier, this is referred to as a "pull request", and includes a review of the code from the maintainers of the upstream repository as we discussed in the last section.

The fork workflow is used in many open source projects where there is often a small team of core maintainers, but contributions from many more users. For example, the JupyterLab project has around 10 members in their team, but more than 300 people have contributed code to the project and almost 2 000 has forked it.

In the example, we are forking [the repository of the project Glosario](https://github.com/carpentries/glosario), a multilingual glossary for computing and data science terms that is also an open-source project. As you can see in the image, this repository has been forked by 168 users so far.

🙌
Go to the GitHub page of the project that you want to fork. In the upper right corner, click the icon that says "fork". That's it! You just forked a repo!
---

## Developing on a forked repo

<br>

<center>

<img src='/module5/create-fork-glosario.png' width="800px" alt="404 image" />

</center>

Notes:
To start developing on a fork, first clone it to your computer **(your fork, not the upstream repo)**. It is good practice to always create a branch when you are about to add changes to a fork, and in many projects this is required, so they will not accept a pull request that comes from your `main` branch. This is because it is easier to keep track of branches with descriptive names compared to having all pull request branches names `main`, but coming from different people.

When you are working on a branch you have to push your branch to GitHub and ask for it to be merged via a pull request. Since you don't have write access to the upstream repo, you have to request they the maintainer pull your code (remember that merging is part of what happens during a pull, so this is similar to what we did with branches via git merge, just that the code first needs to be fetched from your forked repo)

---

## Keeping your remote (origin) up to date with the upstream remote

<br>


<center>

<img src='/module5/sync-fork.png' width="800px" alt="404 image" />

</center>


Notes:
Forking a repo happens via the GitHub web interface, but this is a one time operation. If there are changes made to the upstream repo that you want to sync to your forked repo (`origin`), you have to first pull them from the upstream remote to your local computer and then push them to your forked remote (`origin`).

To solve this you can update your forked repository with the button **Sync fork**. Then you can pull this changes to continue working locally before doing the pull request. In the example thare are not changes in the repository that I have just forked, but if this was the case I would have to select the option `update branch`.




---

## Create a pull request from the forked repository

<br>


<center>

<img src='/module5/fork-contribute.png' width="800px" alt="404 image" />

</center>


Notes:

When you finish your local changes and you push to the fork that lives in your user's account, you can create the pull request to the upstream repository if you click in the `Contribute` button. If you have added some commits, the `Open pull request` option will be available. 

⚠️ You should read the `CONTRIBUTING.md` file before making your first contribution to a new open-source project. There you will find relevant instructions on how to participate in the project.
Another file you must read is the `CODE OF CONDUCT.md`.
There, you will discover information on who to contact if you ever feel uncomfortable working on the project as well as other guidelines you should adhere to in order to foster a welcoming and supportive environment among the contributors.

Both files are typically located in the root of the repository.

---


## Communicating using GitHub issues

The “Issues” tab on the GitHub web interface

<center>

<img src='/module5/issue-1.png' width="800px" alt="404 image" />

</center>

Notes:
Regardless of whether you are collaborating with forks or using branches directly on the main repo,
you don’t just want a historical record of who changed what file and when in the project.
When working on a any collaborative project, you also want a record of decisions that were made, ideas that were floated, problems that were identified and addressed, and all other communication surrounding the project.

Email and messaging apps are both very popular for general communication, but are not designed for project-specific communication: they often lack functionality for organizing conversations by project subtopics, searching for conversations related to particular bugs or software versions, etc.

🙌
To open a GitHub issue, first click on the “Issues” tab,
and then click the green button that says "New Issue".

---

## Communicating using GitHub issues

Dialog boxes and submission button for creating new GitHub issues.
<center>

<img src='/module5/issue-2.png' width="800px" alt="404 image" />

</center>

Notes:
GitHub issues are an alternative written communication medium to email and messaging apps, and were designed specifically to facilitate project-specific communication. Issues are opened from the “Issues” tab on the project’s GitHub page, and they persist there even after the conversation is over and the issue is closed (in contrast to email, issues are not usually deleted). One issue thread is usually created per topic, and they are easily searchable using GitHub’s search tools. 

All issues are accessible to all project collaborators, so no one is left out of the conversation. If someone mention your name with the syntax `@yourname`, you will get a notification. If you want to be notified about all new issues and pull requests you can click the little eye icong in the top right corner that says "Watch". Replying to issues from email is also possible. Given all of these advantages, we highly recommend the use of issues for project-related communication.

---

## Communicating using GitHub issues

The “Closed” issues tab on the GitHub web interface. 

<center>

<img src='/module5/issue-3.png' width="80%" alt="404 image" />

</center>

Notes:

🙌
When a conversation is resolved, you can click “Close issue.” The closed issue can be later viewed by clicking the “Closed” header link in the “Issue” tab.
Issues will be automatically closed if you merge a PR that refers to the issue.

Although you might think that GitHub issues are mostly for collaborative projects,
they are highly useful for individual projects too,
as it is important to record ideas and decisions for your self in the future.

GitHub has recently also improved issues capabilities to be used for project management,
so that you don't need to use a separate program for that.
It is beyond the scope of this course to go through this topic in detail,
but you can [find more information about GitHub issues on this page](https://github.com/features/issues/).

---

# Let's apply what we learned!
