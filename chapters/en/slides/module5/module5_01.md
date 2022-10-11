---
type: slides
title: 'module5_01'
---

# The role of branches

Notes:
In this slide deck
we will learn about branches
and how they can make our Git workflow more effective.

---

## What is a branch?

<br>
<br>
<br>

<center>

<img src='/module5/house-analogy-features-new.png' width="700px" alt="404 image" />

</center>


Notes:
In Git,
a branch represents an isolated line of commits 
in a repository.
By default,
you will always start working on 
the so called `main` branch.
Creating a new branch allows you to work on
a series of commits in isolation from the `main` branch.

This is beneficial since 
you don't want the repository's default branch 
to be updated with every commit of a half-finished feature.
Instead,
new features are developed on 
separate branches that will be "merged" into the `main` branch
once the development of that feature is finished.
The separation of feature branches
from the main branch
facilitates parallel development
where progress can be made on multiple independent features simultaneously.

To illustrate feature-based development 
with a practical example,
we can use the construction of a house 
as you can see in this slide 
(each dot represent a commit).
First, you need to build the foundation. 
Since everything depends on the foundation being built,
this would be developed on the `main` branch. 
When the foundation is finished
the construction of other parts of the house 
that don't depend on each other could take place in parallel, 
e.g. some contributors might start working on
the walls and others on the floor. 
When either of these features is finished, 
it can be added back to the house (what would be similar to merged into `main`).

---

## When should a new branch be opened?

<center>

<img src='/module5/house-analogy-explained-new.png' width="700px" alt="404 image" />

</center>

When we initiate a repository by default we start working on the `main` branch, but we can be working in parallel in other features.


Notes:
In the image we can see that 
two branches were created from `main`. 
The first one, `feat-trained-model`, 
is based on the state of the repository 
at the third commit to the `main` branch.
The second branch is called `fix-eda-plot` 
and was initiated from the fourth commit 
of the `main` branch to
fix one of the exploratory analysis plots. 
At the end we merge all these branches to `main` 
so the isolated modifications are included 
in the principal branch of our repository.

When should a new branch be opened?
Generally speaking, you can assume that 
every modification that has the potential 
to break the original code is suitable to be developed 
in its own feature branch to avoid 
the risk of it changing how 
the code in the `main` branch works.

Note that the name `main` 
for the default branch is just 
a convention and in some old repositories 
the default branch 
could be called `master` instead of `main`.

---

## How to create a branch? (JupyterLab)

<br>


<center>

<img src='/module5/branches-new-jl.png' width="800px" alt="404 image" />

</center>

Notes:
To create a branch in JupyterLab 
you have to go to **Branches > New branch** and 
then write the name of the branch there. 
If you want to create the new branch 
based on another branch than `main` 
you can click and select it in the menu.
You can always switch easily between branches on the **Branches** tab in the side bar.

In this slide, 
the options available are to create a branch from `main`,
from `origin/HEAD` and `origin/main`.
We already know that `main` is the default branch,
but what about `origin` and `HEAD`? 
    
      
  
      
  
*The material of this module is based on the book by Timbers, T., Campbell, T., & Lee, M. (2022). [Data science: A first introduction. CRC Press](https://datasciencebook.ca/) and the course DSCI 521: Computing Platforms for Data Science from the UBC Master of Data Science.*

---


## How to create a branch? (JupyterLab)

<br>


<center>

<img src='/module5/branches-labels.png' width="800px" alt="404 image" />

</center>

Notes:

In the terminal, you can use `git log --oneline` to check the history of your project,
and see which commits correspond to the names `origin/HEAD`, `origin/main` and `main`.
You can also see that the currently active branch is shown in cyan at the end of the terminal prompt.

* `main` is your default local branch.
* `HEAD` is pointing where you currently are (in this case, on the `main` branch)
* `origin` is a nickname for your remote repo on GitHub (instead of showing the full URL), so `origin/main` is the `main` branch of the version of the repo you pushed to GitHub.com.

You don't need to care about `origin/HEAD`, it just point to the default remote branch, which will always be `main` unless you mess around with the settings on the GitHub webpage.

In JupyterLab you can see this information as labels under the tab **Changes** in the sidebar. 


⚠️ Here we added a new synonym for a GitHub repository.
Previously, we were using `remote` 
as a way to refer to any GitHub repository. 
Here Git refers to the default `remote` in which 
we are working on with the nickname `origin`.

---

## How to create a branch? (Terminal)

<br>

`git switch -c <branch-name> <commit-hash>` 
<center>

<img src='/module5/branch-switch-create.png' width="800px" alt="404 image" />

</center>


Notes:
The `git switch` command can be used 
to alternate between existing branches.
If a branch does not yet exist,
you can append the `-c` flag
to create the branch as you switch to it.
Let's create a new branch! 
Type `git switch -c <branch-name>`, 
to create and switch to this branch.
If you want to create a branch
starting in a particular commit
you should add the commit hash as another argument.
In the example, 
the branch is created from the last commit,
that is the default behaviour 
when a commit hash is not included.

After creating the branch,
you will switch to working on there.
In the terminal, you'll notice that the name of the new branch,
in this case `report`, appears now in parenthesis in the terminal.
Also, the **Current branch** tab in JupyterLab is updated,
and the new branch is now listed there.


🙌

To practice working with branches,
let's try adding a commit to
one of your example repositories and 
check what happens in JupyterLab (tab **Changes**) 
and with the command line (running the command `git log --oneline`):

1. Before and after doing a commit.
2. Before and after pushing to the remote.

---

## How to create a branch? (Terminal)

<br>

<center>

<img src='/module5/branch-head-local-commit.png' width="800px" alt="404 image" />

</center>

Notes:

Let's see what happens when we make a commit locally.

1. Edit your README to append one more line of your choice, then add it to the staging area and commit it.
2. Run `git log --oneline`

As expected, 
only the reference to where we are currently (`HEAD`) and 
the `report` branch moved, 
because we have not pushed the changes 
to our GitHub remote (`origin`).
If you push your changes,
the GitHub `main` branch (`origin/main`) 
will also be updated with the latest commit. 
To confirm this, you can run `git log --oneline` 
after pushing the new commit to GitHub.

But how can we push a local branch to GitHub?

---

## Pushing a new branch

<br>

`git push --set-upstream origin <new-branch-name>`
<center>

<img src='/module5/pushing-new-branch-jl-t.png' width="800px" alt="404 image" />

</center>

Notes:
Pushing a new branch using JupyterLab 
is exactly the same as you are used to with the "push" button. 
However, there is a slight change in the command 
when you are pushing a branch you created locally with the terminal. 
Instead of `git push` you will have to write:

`git push --set-upstream origin <new-branch-name>`

This command decides what the new branch
will be called on the remote GitHub repo.
It is recommended that you use the same name 
as you use locally, and using a different name
is rarely necessary.
You don't need to worry about remembering this command,
because git will remind you in the case 
you forget to specify it as you can see in the image. 


After pushing the new branch `report` to the remote
you will notice that the local branch `report`
and the remote branch `origin/report` 
are placed in the same commit when you read
the history of the project. 
This means that your remote repository 
is synchronized with your local repository.


---





# Let's apply what we learned!






