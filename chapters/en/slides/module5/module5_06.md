---
type: slides
title: 'module5_06'
---


# Creating a pull request

---

# Creating a pull request

Notes: The next step after pushing your local branch to your remote repo, is to request that the upstream repo pulls from your branch into their master branch. To do this, go to the GitHub page of the upstream repo, and GitHub should show you a yellow banner listing any recently pushed branches (your origin repo will also show this banner):

---

# Creating a pull request (GitHub)

<center>

<img src='/module5/PR.png' width="80%" alt="404 image" />

<center/>






Notes: To create PR, you click the green bottom "Compare and pull request". In the new page, add a message to describe the changes you have made, scroll down to review the changed files, and the click the green button that reads "Create pull request". If you are working together in a team, you could also designate certain team members to review your work and assign relevant labels, via the right hand side panel.

---

# Creating a pull request (GitHub)

<center>

<img src='/module5/PR-2.png' width="80%" alt="404 image" />

<center/>


Notes: As general rule you are going to be doing pull requests to the main branch, but Github allows you to select the branches to merge in case you would like to select another one.
---
# Creating a pull request (GitHub)

<center>

<img src='/module5/PR3.png' width="80%" alt="404 image" />

<center/>

Notes:

The next step is for the upstream repo maintainers to review your work and merge it in if they approve it. You have the option of assigning someone to a pull request and/or designating the parson as reviewer.

 
- **Reviewers**: You can choose anyone who can help from the list of prior authors that GitHub will offer as reviewers for that code. A review request will be sent to the reviewers. GitHub will automatically suggest you as reviewers past authors of that code (if existent), but you can select anyone. The reviewers will receive a review request. Later, you will obtain their final approval and feedback once they completed it.

- **Assign**: Assigning someone to the pull request is less strict, basically you can assign anyone that you want to link with the pull request for any reason. Good reasons to assign someone to a project could be that for  merging the pull request you prefer someone different from the reviewer and/or that you prefer assigning someone else (you can even assign yourself!) to solve the review issues opened.

If you are working with a team probably you will define how to designate reviewers and assign different team members in relation to your workflow.

Other useful thing that you can do it is to include **labels**, they can help you to easily classify what your pull request is solving/adding. All the open pull request will be shown in the tab **Pull requests** of the repository.

You can reference this pull request when typing Markdown in a **GitHub issues** by typing # followed by the number of the PR, e.g. "Please see PR #1 for a fix to this issue". In the body of the message you type when opening the pull request, you can also indicate if it is fixing a currently open issue by typing /close #1 to close issue number 1 (pull requets and issues use the same numbering system, so if there is already an open issue, the first PR would be get the number 2).


---
# Pull request successfully merged and closed (GitHub)

<center>

<img src='/module5/PR-delete-branch.png' width="80%" alt="404 image" />

<center/>

Notes:
After you succesfully merge the pull request GitHub gives you the option to delete the branch automatically if you are not going to be working in that feature anymore.


---

# Keeping your remote (origin) up to date with the upstream remote

origin  https://github.ubc.ca/jostblom/fork-demo.git (fetch)
origin  https://github.ubc.ca/jostblom/fork-demo.git (push)


Notes:  
Forking a repo happens via the GitHub web interface, but this is a one time operation. If there are changes made to the upstream repo that you want to sync to your forked repo (origin), you have to first pull them from the upstream remote to your local computer and then push them to your forked remote (origin).

The first step in this, is to add the remote repo URL to your local repo so that git knows where to pull from. Remember that the forked relationship between the upstream and your forked remote is only available on GitHub; git on your computer does not care whether your repo is a fork or not. Type git remote -v and you should see something like this:

---

# Let's apply what we learned!