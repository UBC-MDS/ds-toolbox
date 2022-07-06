---
type: slides
title: 'module5_01'
---

# Branches, forks, and streams... Welcome to the Git nature walk!





---

# Branches


<center>

<img src='/module5/branches-house-analogy.jpg' width="85%" alt="404 image" />

<center/>


Notes:

It is time to learn about branches! 

A branch is a pointer to a snapshot of your work that was taken at a specific commit. Working with branches enables you to continue developing from there in isolation of your principal changes in the `main` branch.
This is beneficial since you don't want the repository's default branch to be updated with every commit of a half-finished feature. When a feature is finished, their branches will be merged into the `main` branch, often through a "pull request" where code is reviewed before it is merged. The separation of features from the main branch facilitates parallel development where progress can be made on multiple independent features simultaneously.

To illustrate feature-based development with a practical example we can use the construction of a house. First, you need to build the foundation. Since everything depends on the foundation being built, this would be developed on the `main` branch. When the foundation is finished the construction of other parts of the house that don't depend on each other could take place in parallel, e.g. some contributors might start working on the walls and others on the floor. When either of these features is finished, it can be added back to the house (what would be similar to merged into `main`). When depicted graphically, this process would look something like this (each dot in the image represents a commit).

---

# Branches

When we initiate a repository by default we start working on the `main` branch, but we can be working in paralell in other features.

<center>

<img src='/module5/branches-house-analogy-explained.png' width="85%" alt="404 image" />

<center/>


Notes:  In the image we can see that two branches were created from `main`. The first snapshot was taken after the second commit to include there the trained model. The second branch was initiated in the third commit to fix one of the exploratory analysis plots. At the end we merge all these branches to `main` so the isolated modifications are included in our principal source of code.

When you should open a new branch? As general rule you can think that each changes that can break the original code is potentially a good feature to start workin in a new branch.

Note that in some old repositories the `main` branch could be called `master`.


---
# How to create a branch? (JupyterLab)

<center>

<img src='/module5/create_branch.png' width="85%" alt="404 image" />

<center/>

Notes: To create a branch in JupyterLab you have to go to **Current Branch (tab) > Branches > New branch** and then write the name of the branch you want there. If you want to switch to other branch you can click and select your branch in the **Branches** tab.

You can create the branch from `main` or from `origin/HEAD` and `origin/main`. We already know that `main` is the default branch, but what about `origin` and `HEAD`? Let's review some concepts:

* `main` is your default local branch.
* `HEAD` is where you currently are (in this case, on the `main` branch)
* `origin` is a nickname for your remote repo on GitHub (instead of showing the full URL), so `origin/main` is the `main` branch on your GitHub repo.
   You don't need to care about `origin/HEAD`, it just point to the default remote branch, which will always be `main` unless you mess around with the settings on the GitHub webpage.

In JupyterLab you can see this information as labels under the tab **Changes**.

⚠️ We are adding a new synonim for a GitHub repository. We can use `remote` as a way to mention GitHub in general, now we can refer specifically to the GitHub repository we are workin on as `origin`.

---
# How to create a branch? (terminal)

<center>

<img src='/module5/terminal_branch.png' width="85%" alt="404 image" />

<center/>


Notes: 

You can see the `origin/HEAD`, `origin/main` and `main` displayed in the terminal when you check the history of your project, in the example with `git log --oneline`.

To create a branch using the terminal with `git switch` command, that can be used to switch between existing branches. If a branch does not yet exist, you can append the `-c` flag to create the branch as you switch to it. Let's create a new branch! Type `git switch -c <branch-name>`, to create and switch to this branch.



🙌

To practice working with branches, let's try adding a commit to one of your example repositories and check what happens in JupyterLab (tab Changes) and with the command line (with the command `git log --oneline`):
1. Before and after doing a commit.
2. Before and after pushing to the remote.



---

# How to create a branch? (terminal)

<center>

<img src='/module5/branches-head.png' width="85%" alt="404 image" />

<center/>

Notes: 


Now let's see what happens when we make a commit locally. 

1. Edit your README to append one more line of your choice, then add and commit it.

2. Run `git log --oneline`

As expected, only the reference to where we are currently (HEAD) and the local main branch moved, because we have not pushed our changes to GitHub (`origin`). If you do git push, the GitHub main branch will be updated with the latest commit.

---

# Pushing a new branch

<center>

<img src='/module5/pushing-new-branch.png' width="85%" alt="404 image" />

<center/>

Notes: Pushing a new branch using JupyterLab is exacly the same as you are use to, but there is a slight change in the command when you are doing this with the terminal. Instead of `git push` you will have to write:

`git push --set-upstream origin <new-branch-name>`

You shouldn't worry because git will remind you the command in the case you forget to specify it as you can see in the image. 


---


# Let's apply what we learned!






