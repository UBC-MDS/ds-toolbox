---
type: slides
title: 'module5_01'
---

# Branches, forks, and streams... Welcome to the Git nature walk!





---

## What is a branch?


<center>

<img src='/module5/branches-house-analogy.jpg' width="85%" alt="404 image" />

<center/>


Notes:

It is time to learn about branches! 

A branch is a pointer to a snapshot of your work 
that was taken at a specific commit.
Working with branches enables you 
to continue developing from there 
in isolation of your principal changes in the `main` branch.
This is beneficial since you don't want the repository's default branch
to be updated with every commit of a half-finished feature.
When a feature is finished,
their branches will be merged into the `main` branch. 
The separation of features from the main branch facilitates 
parallel development
where progress can be made on
multiple independent features simultaneously.

To illustrate feature-based development 
with a practical example 
we can use the construction of a house. 
First, you need to build the foundation.
Since everything depends on the foundation being built, 
this would be developed on the `main` branch.
When the foundation is finished
the construction of other parts of the house
that don't depend on each other could take place in parallel,
e.g. some contributors might start working on the walls
and others on the floor. 
When either of these features is finished, 
it can be added back to the house 
(what would be similar to merged into `main`).
When depicted graphically, 
this process would look something like this
(each dot in the image represents a commit).

---

## When should a new branch be opened?

When we initiate a repository by default we start working on the `main` branch, but we can be working in paralell in other features.

<center>

<img src='/module5/branches-house-analogy-explained.png' width="85%" alt="404 image" />

<center/>


Notes: 

In the image we can see that two branches were created from `main`. 
The first snapshot was taken after
the second commit to include there the trained model. 
The second branch was initiated in the third commit 
to fix one of the exploratory analysis plots.
At the end we merge all these branches to `main` 
so the isolated modifications are included in
our principal source of code.

When should a new branch be opened?
Generally speaking,
you can assume that every modification that
has the potential to break the original code
is a good one to attempt 
to fix without taking the risk of
working in the `main` branch.


Note that in some old repositories
the default branch could be called `master` instead of `main`.


---
## How to create a branch? (JupyterLab)

<center>

<img src='/module5/create_branch.png' width="85%" alt="404 image" />

<center/>

Notes: 

To create a branch in Jupyter Lab 
navigate to **Branches > New branch** and 
then enter the name of the branch there.
If you want to create the new branch based on
another branch than `main` 
you can click and select it from the menu.
You can always switch easily 
between branches on the **Branches** tab.

In this scenario, 
we create the branch from `main` 
or from `origin/HEAD` and
`origin/main`.
We already know that `main` 
is the default branch, 
but what about `origin` and `HEAD`?
Let's review some concepts:

* `main` is your default local branch.
* `HEAD` is poiting where you currently are (in this case, on the `main` branch)
* `origin` is a nickname for your remote repo on GitHub (instead of showing the full URL), so `origin/main` is the `main` branch of the version of the repo you pushed to GitHub.com.
   You don't need to care about `origin/HEAD`, it just point to the default remote branch, which will always be `main` unless you mess around with the settings on the GitHub webpage.

In Jupyter Lab, 
you can see this information as
labels under the tab **Changes**.

⚠️ Here we added a new synonym for a GitHub repository. 
Previously, used the term `remote` as a way to refer to any GitHub repository. We can now use the nickname `origin` to refer to the specific GitHub remote we are working on. 

---
## How to create a branch? (terminal)

<center>

<img src='/module5/terminal-branches.png' width="85%" alt="404 image" />

<center/>


Notes: 

You can see the `origin/HEAD`, `origin/main` and `main` 
displayed in the terminal 
when you check the history of your project,
in the example with `git log --oneline`.

The command `git switch` 
can be used to alternate between existing branches. 
If a branch does not yet exist,
you can append the `-c` flag 
to create the branch as you switch to it. 
Let's create a new branch!
Type `git switch -c <branch-name>`, 
to create and switch to this branch.



🙌

To practise working with branches,
let's try adding a commit to one of your example repositories and
check what happens in Jupyter Lab (tab **Changes**) and 
with the command line (running the command `git log --oneline`):
1. Before and after doing a commit.
2. Before and after pushing to the remote.



---

# How to create a branch? (terminal)

<center>

<img src='/module5/branches-head.png' width="85%" alt="404 image" />

<center/>

Notes: 


Let's see what happens when we make a commit locally. 

1. Edit your README to append one more line of your choice, then add it to the staging area and commit it.

2. Execute `git log --oneline`

Because we did not push the changes 
to our GitHub remote (`origin`), 
only the reference to where we are now (HEAD) 
and the local main branch moved, as expected.
When you push your changes, the GitHub `main` branch (`origin/main`) 
will be updated with the most recent local commit.
After pushing the new commit to GitHub, 
you can confirm this by running `git log —oneline`. 

---

# Pushing a new branch

<center>

<img src='/module5/pushing-new-branch.png' width="85%" alt="404 image" />

<center/>

Notes:

Pushing a new branch using Jupyter Lab
is exactly the same as you are used to with the "push" button. 
However, there is a slight change in the command 
when you are pushing a branch you created locally 
with the terminal. 
Instead of `git push` you will have to write:

`git push --set-upstream origin <new-branch-name>`

This command determines the name of the new branch
on the remote GitHub repository.
It is recommended that you use the same name
as you use locally, and uis rarely necessary to use a differnt name.
You don't need to worry about remembering this command,
because, as shown in the image, Git will remind you if you forget to specify it. 


---


# Let's apply what we learned!






