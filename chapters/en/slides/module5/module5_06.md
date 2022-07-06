---
type: slides
title: 'module5_06'
---


# Creating a pull request

---

# Creating a pull request

Notes: The next step after pushing your local branch to your remote repo, is to request that the upstream repo pulls from your branch into their master branch. To do this, go to the GitHub page of the upstream repo, and GitHub should show you a yellow banner listing any recently pushed branches (your origin repo will also show this banner):

---

# Creating a pull request

Notes: To create PR, you click the green bottom "Compare and pull request". In the new page, add a message to describe the changes you have made, scroll down to review the changed files, and the click the green button that reads "Create pull request". If you are working together in a team, you could also designate certain team members to review your work and assign relevant labels, via the right hand side panel.

---

# Creating a pull request

Notes: The next step is for the upstream repo maintainers to review your work and merge it in if they approve it. You can reference this pull request when typing Markdown in issues and other PRs on GitHub by typing # followed by the number of the PR, e.g. "Please see PR #2 for a fix to this issue". In the body of the message you type when opening the PR, you can also indicate if it is fixing a currently open issue by typing /close #1 to close issue number 1 (PRs and issues use the same numbering system, so if there is already an open issue, the first PR would be get the number 2).

---

# Keeping your remote (origin) up to date with the upstream remote

origin  https://github.ubc.ca/jostblom/fork-demo.git (fetch)
origin  https://github.ubc.ca/jostblom/fork-demo.git (push)


Notes:  
Forking a repo happens via the GitHub web interface, but this is a one time operation. If there are changes made to the upstream repo that you want to sync to your forked repo (origin), you have to first pull them from the upstream remote to your local computer and then push them to your forked remote (origin).

The first step in this, is to add the remote repo URL to your local repo so that git knows where to pull from. Remember that the forked relationship between the upstream and your forked remote is only available on GitHub; git on your computer does not care whether your repo is a fork or not. Type git remote -v and you should see something like this:

---

# Let's apply what we learned!