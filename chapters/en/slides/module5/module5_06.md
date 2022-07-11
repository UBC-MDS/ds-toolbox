---
type: slides
title: 'module5_06'
---

# Forking



---
# Collaborative work 

There are two main strategies we can use to work with others:

1. **Branching** 
 
2. <mark><b> Forks </b></mark>

---

# Forking



<center>

<img src='/module5/issue-3.png' width="80%" alt="404 image" />

<center/>

Notes: We have learned that if you create your own repository on GitHub or you are part of a team of people who all have read and write access to a repo, then you can clone it to you computer, make changes and then push them back to this repository (either on a feature branch or on the `main` branch). We called this style of collaboration **branching**.

If you want the code from someone else's repository, where you are not a member or official collaborator, then you can clone it and use it on computer. However, you cannot push your changes back to the GitHub repository because you don't have the write permissions to that repository.

It would still be beneficial for the repository's owners to receive your contributions if you make code modifications and enhance something, without having to grant you full access and running the risk of breaking something. **Instead of working directly on the repository, you can fork someone else's repository and work in your own copy.**


---

# How can I fork a repository?

Go to the GitHub page of the project that you want to fork. In the upper right corner, click the icon that says "fork". That's it! You just forked a repo!

<center>

<img src='/module5/create-fork.png' width="80%" alt="404 image" />

<center/>


Notes:

**Forks** are copies of other's repositories on GitHub that you own. You can do anything you want on your fork. If you make improvements, you can send a notification to the owner of the **"upstream"** repository (the one you forked from) and request that they pull the code from your repository (referred to as "origin") into theirs. This is referred to as a "pull request", and includes a review of the code from the maintainers of the upstream repository as we discussed in the last section.

The fork workflow is used in many open source projects where there is often a small team of core maintainers, but contributions from many more users. For example, the JupyterLab project has around 10 members in their team, but more than 300 people have contributed code to the project and almost 2 000 has forked it.


---

# Developing on a forked repo


<center>

<img src='/module5/fork.png' width="80%" alt="404 image" />

<center/>

Notes: To start developing on a fork, first clone it **(your fork, not the upstream repo)**. It is good practice to always create a branch when you are about to add changes to a fork, and in many projects this is required, so they will not accept a pull request that comes from your `main` branch. This is because it is easier to keep track of branches with descriptive names compared to having all pull request branches names `main`, but coming from different people.

When you are working on a branch you have to push your branch to GitHub and ask for it to be merged via a pull request. Since you don't have write access to the upstream repo, you have to request they the maintainer pull your code (remember that merging is part of what happens during a pull, so this is similar to what we did with branches via git merge, just that the code first needs to be fetched from your forked repo)

---

# Pushing a branch to GitHub (terminal)
```
git push
```

```out
fatal: The current branch lecture-todo has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin new-branch

```


Notes: To push a feature branch to GitHub, you can try typing git push, just as when we pushed to the master branch on GitHub It will show you the error message you can see in the slide.

Git is telling you that there is no branch with this name currently on your GitHub repo, so it asks you to be explicit about creating a new branch and which name to give it. One gotcha here is that the word "upstream" is not referring to the GitHub branch you forked from. Instead, it is referring to a branch that will be created on your repo (origin). Technically, this seemingly ambiguous use of the word "upstream" is correct (the repo you forked from is upstream of your remote repo, and the branch on your remote repo is upstream of the branch on your local repo), but it can be confusing that the same name is used so it might help to think of the command above as `git push --set-repo-branch <repo-nickname> <new-branch-name>` instead.

This behavior is rather conservative from Git's side. Almost always, we want the branch on our remote repo to have the same name as the branch on our local repo. If you want this to be the default behavior, you can type `git config --global push.default current`. From now on, you can just type git push even when pushing a new branch to GitHub.


---


# Keeping your remote (origin) up to date with the upstream remote


<center>

<img src='/module5/fetch-upstream.png' width="80%" alt="404 image" />

<center/>


Notes:  
Forking a repo happens via the GitHub web interface, but this is a one time operation. If there are changes made to the upstream repo that you want to sync to your forked repo (origin), you have to first pull them from the upstream remote to your local computer and then push them to your forked remote (origin).

To solve this you can update your forked repository with the button **fetch upstream**. Then you can pull this changes to continue working locally before doing the pull request.

---

# Let's apply what we learned!