---
type: slides
title: 'module5_02'
---

# How do we create a branch?

---

# How do we create a branch?

Notes: 
The `git switch` command can be used to switch between existing branches. If a branch does not yet exist, you can append the -c flag to create the branch as you switch to it. Let's create a new branch! Type `git switch -c lecture-todo`, to create an d switch to this branch. As you can guess from the well-chosen branch name, we are going to list out ToDo items in this branch. It is good practice to give branches a name that succinctly describes the feature that you want to develop.

---

# How do we create a branch?


To add the list of ToDo items, we're going to use the markup language Markdown, which was introduced in lec0 and is similar to what you have been using both on Slack and in chat apps such as Whatsapp. A good guide to Markdown can be found here.

Open README.md with VS Code: code README.md and add a task list of the todo items by typing the following:

- [x] Introduce lecture
- [ ] Explain branches
- [ ] Explain forks

---

# How do we create a branch?

Notes: These will render nicely on GitHub, which you can see by going to your repo, and clicking Issues -> New issue, paste your Markdown, and then click "Preview". Issues are used for planning and discussion purposes, such as keeping track of bugs and new features, and we will talk more about them later. This is just a neat trick if you're unsure how something will render and you don't want to commit it to your repo just to test it out.

Now add, commit, and run git log --oneline. As you can see, there are now three commits after each other:

$ git log --oneline
394e339 (HEAD -> lecture-todo) List todo items
682306d (master, origin/master, origin/HEAD) Add a line to the readme
0d5a6f7 Initial commit

You can see that we have a new reference now (to our local lecture-todo branch), and HEAD indicates that this is where we are currently. Since we are done with our feature development on the lecture-todo branch, we could now go back to the master branch with git switch master and then merge in the changes by running git merge lecture-todo. Just as when you do a pull request and there are no conflicting changes, git will "fast forward" your master branch, which means it will incorporate all the changes from the lecture-todo branch. But let's create a more realistic scenario instead.

---

# Seeing how branches are related
## In the shell

<center>

<img src='/module5/git-log.png' width="100%" alt="404 image"/>

<center/>

Notes: Usually you work on your feature branch for some time, and in the meantime there has been other changes on the master branch, so let's simulate that. While remaining on the master branch, let's make a change to the heading of the README file so that it reads # 521-lec3 Branches and forks.

Now if we do git log --oneline, we see this:

* a949e61 2020-09-13 (HEAD -> master) Update readme
* 6e69947 2020-09-13 (origin/master, origin/HEAD) Add a line to readme
* 0d5a6f7 2020-09-13 Initial commit

---

# Seeing how branches are related
## In the shell

* a949e61 2020-09-13 (HEAD -> master) Update readme
| * 0a8dfef 2020-09-13 (lecture-todo) List todo items
|/
* 6e69947 2020-09-13 (origin/master, origin/HEAD) Add a line to readme
* 0d5a6f7 2020-09-13 Initial commit


Notes: Where did our lecture-todo branch go? By default, log only shows the current branch's history and since master has now diverge from lecture-todo we only see one of them. To see all branches as well as a graph indicating of their relationship instead do git log --oneline --all --graph:

---

# Seeing how branches are related
### In VS Code

<center>

<img src='/module5/git-history-log-unmerged.png' width="100%" alt="404 image"/>

<center/>

Notes: This shows how our branches are related! You might think this is a lot to type each time (and I would agree), so you can either define an alias (a shortcut to long commands) or use VS Code. Open VS Code by typing code . inside your git folder, this will start VS Code with the current directory open (remember that . is a shortcut that means "current directory") In VS Code, go to the extensions tab and search for "git history", install the extension and go to the source control tab in the left side bar, and then click the new Git history icon. Where it currently says "master", change it to show "All branches" and you should now see a nice graphical overview looking like this:


---

---

# Seeing how branches are related
### In VS Code


(If the Git history view hangs or looks strange, press "Refresh") You're free to use the one you prefer between VS Code and git log, but many of the commands are the easiest to run via terminal (although things like adding, committing, pulling and pushing can also be done in VS Code).