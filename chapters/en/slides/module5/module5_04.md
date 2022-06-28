---
type: slides
title: 'module5_04'
---

# Forks

---

# Forks

Notes: If you create your own repository on GitHub or you are part of a team of people who all have read and write access to a repo, then you can clone it to you computer, make changes and then push them back to this repository (either on a feature branch or on the master branch).

If you want the code from someone else's repository, where you are not a member or official collaborator, then you can clone it and use it on computer. However, you cannot push your changes back to the GitHUb repository because you don't have the write permissions to that repository.

If you make changes to the code and improve something, it would still be valuable for the owners of that repository to get your improvements without having to give you full access to their repo and risking that you might mess something up. To solve this problem, you can fork someone else's repository instead of working on it directly.

Forks are copies of other's repositories on GitHub that you own. You can do anything you want on your fork. If you make improvements, you can send a notification to the owner of the "upstream" repository (the one you forked from) and request that they pull the code from your repository (referred to as "origin") into theirs. This is referred to as a "pull request" (a PR), and includes a review of the code from the maintainers of the upstream repository.

The fork workflow is used in many open source projects where there is often a small team of core maintainers, but contributions from many more users. For example, the JupyterLab project has around 10 members in their team, but more than 300 people have contributed code to the project and almost 2 000 has forked it.

---

# How can I fork a repository?

Notes: Go to the GitHub page of the project that you want to fork. In the upper right corner, click the icon that says "fork". That's it! You just forked a repo!

---

# Developing in a forked repo

Notes: To start developing on a fork, first clone it (your fork, not the upstream repo). It is good practice to always create a branch when you are about to add changes to a fork, and in many projects this is required, so they will not accept a pull request that comes from your master branch. This is because it is easier to keep track of branches with descriptive names compared to having all pull request branches names "master", but coming from different people.

The workflow for creating a branch is the same as above, so I will not repeat that here. One thing that we did not do in the previous section was to upload our feature branch to GitHub. Instead, we finished the development of this branch locally and merged it into our master branch via git merge. If we would have worked on a team of people, it would have been good practice to have first pushed the branch to GitHub, and then created a pull request to let the other people on the team review the code and suggested any changes before merging it in. If you made only minor edits the team might let you merge these to master locally and then push up the updated master branch (or even let you not create a branch in the first place

When you are working on a branch you have to push your branch to GitHub and ask for it to be merged via a pull request. Since you don't have write access to the upstream repo, you have to request they the maintainer pull your code (remember that merging is part of what happens during a pull, so this is similar to what we did with branches via git merge, just that the code first needs to be fetched from your forked repo)

---

# Pushing a branch to GitHub 

Notes: To push a feature branch to GitHub, you can try typing git push, just as when we pushed to the master branch on GitHub It will show you the following error message:

fatal: The current branch lecture-todo has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin lecture-todo

Git is telling you that there is no branch with this name currently on your GitHub repo, so it asks you to be explicit about creating a new branch and which name to give it. One gotcha here is that the word "upstream" is not referring to the GitHub branch you forked from. Instead, it is referring to a branch that will be created on your repo (origin). Technically, this seemingly ambiguous use of the word "upstream" is correct (the repo you forked from is upstream of your remote repo, and the branch on your remote repo is upstream of the branch on your local repo), but it can be confusing that the same name is used so it might help to think of the command above as git push --set-repo-branch <repo-nickname> <new-branch-name> instead.

---

# Pushing a branch to GitHub 

Notes: This behavior is rather conservative from git's side. Almost always, we want the branch on our remote repo to have the same name as the branch on our local repo. If you want this to be the default behavior, you can type git config --global push.default current. From now on, you can just type git push even when pushing a new branch to GitHub.