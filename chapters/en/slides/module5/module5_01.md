---
type: slides
title: 'module5_01'
---

# Branches, forks, and streams... Welcome to the Git nature walk!


---

# Collaboration

<center>

<img src='/module5/quote.png' width="100%" alt="404 image" />

<center/>


---

# Branches


<center>

<img src='/module5/branches-house-analogy.png' width="85%" alt="404 image" />

<center/>


Notes: Branches allow you to separate work that is happening on the main/main branch of the repo from new features that you are developing. This is beneficial since you don't want the repository's default branch to be updated with every commit of a half-finished feature. When features are completed, their branches will be merged into the main branch, often through a "pull request" where code is reviewed before it is merged. The separation of features from the main branch facilitates parallel development where progress can be made on multiple independent features simultaneously.

To illustrate feature-based development with a practical example we can use the construction of a house. First, you need to build the foundation. Since everything depends on the foundation being built, this would be developed on the main branch. When the foundation is finished the construction of other parts of the house that don't depend on each other could take place in parallel, e.g. some contributors might start working on the walls and others on the floor. When either of these features is finished, it can be added back to the house (merged into main). When depicted graphically, this process would look something like this (each dot is a commit, see the video for details).

---

# Branches


<center>

<img src='/module5/branches-house-analogy-explained.png' width="85%" alt="404 image" />

<center/>





---
# How branches show up in the log output


```out
0d5a6f7 (HEAD -> main, origin/main, origin/HEAD) Initial commit
```

Notes: To practice working with branches in git, let's create a new repo with your GitHub.ubc.ca account, initialize it with README and clone it to your computer.

`cd` to the folder you just cloned, and run `git log --oneline`. You will see something like what you can see in the slide. 

Now that you know what branches are, we can finally make sense of words in the parenthesis!

---

# How branches show up in the log output

```out
0d5a6f7 (HEAD -> main, origin/main, origin/HEAD) Initial commit
```

Notes: 

* `main` is your default local branch. master default branch has been renamed to main recently. You will still find master branch as the default branch in many repos.
* `HEAD` is where you currently (on the main branch)
* `origin` is a nickname for your remote repo on GitHub (instead of showing the full URL), so origin/main is the main branch on your GitHub repo.
        You don't need to care about `origin/HEAD`, it just point to the default remote branch, which will always be main unless you mess around with the settings on the GitHub webpage.

---

# How branches show up in the log output



```
682306d (HEAD -> main) Add a line to the readme
0d5a6f7 Initial commit (origin/main, origin/HEAD)
```

Notes: 

Now let's see what happens when we make a commit locally. edit your README to append one more line of your choice, then add and commit it.

run `git log --oneline`

As expected, only the reference to where we are currently (HEAD) and the local main branch moved, because we have not pushed our changes to GitHub. Now do git push and the GitHub main branch will be updated with the latest commit:

---




---