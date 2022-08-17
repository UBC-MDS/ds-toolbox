---
type: slides
title: 'module4_02'
---

# Comparing commits

---

## Comparing commits

<center>

<img src='/module4/diff-intro.png' width="90%" alt="404 image"/>

</center>

Notes: 

What are the changes introduced between two commits? 
Whe have already learned
three different ways 
to check your project history.

Basically your project history 
is a temporary line with the changes (commits)
made in your repository
along with its message and
`commit id` or hash.
We can have access to this information on GitHub,
and locally using the terminal and Jupyter Lab.

What if we wanted to examine 
the changes between two commits in greater detail?
What lines exactly have been changed? 

In the image you can see
the comparison between two commits.
In red is the old commit and
in green is the most recent one.
On the commit on the right
has been introduced 
the phrase *"I have changed!* 
in line number 3
between the commits 35c218 and 89e195.

This is the way we compare commits,
let's see how we can access
this view in the different platforms.

---
## 🙌 Differences between commits (JupyterLab)

<center>

<img src='/module4/diff-commits-jl.png' width="90%" alt="404 image"/>

</center>
 
Notes:

Go to the **History** tab to observe the differences between commits. 

Select the commit you want to compare and click in the file icon with the `+` and `-` symbols on it.

If you can't see the options, be sure to click the tiny arrow pointing downward in the top right corner to bring up the information.

By default, it is always comparing with the last commit.

---
## 🙌 Differences between commits (JupyterLab)

<center>

<img src='/module4/diff-commits-distant-jl.png' width="90%" alt="404 image"/>

</center>
 
Notes: 

In order to compare commits 
that are further off from one another:

1. In the newest commit, click the file symbol with the left pointing arrow and,

2. Click the right pointing arrow icon in the oldest commit you want to compare. 

At the bottom of the screen, a new tab will be opened.
There, you can choose which files to compare. 

---
## 🙌 Differences between commits (the terminal)

<center>

<img src='/module4/diff-commits-t.png' width="90%" alt="404 image"/>

</center>
 
Notes: 

When we use the terminal
we have more flexibility
with the use of the commands.

Let's compare two commits 
in the same way we did 
with Jupyter Lab.
We will use the command 
`git diff <commit 1 id> <commit 2 id>`. 

You can see in the output that 
between these 2 commits 
we have differences in two files: 
`afile.txt` and `instructions.txt`. 
That is why in Jupyter Lab 
we have to go to that special tab
to select the file with changes!

In this case, 
because we are comparing it 
to the most recent commit, 
this is equivalent to specifying 
only one `commit id` (the oldest one)
and running `git diff 9a83b69`.


You can see the difference in both files 
using `diff --git a/afile.txt b/afile.txt` and
`diff --git a/instructions.txt b/instructions.txt`.


---
## 🙌 Differences between commits (GitHub)

<center>

<img src='/module4/diff-github.png' width="90%" alt="404 image"/>

</center>
 
Notes: 

Is it possible to see differences between commits in the remote?

Yes, it is!
You can access a view similar to
the one shown in the slide by
appending the following end `/compare/commit 1 id>..commit 2 id>`
to the url of your repository.


It is critical 
to use 7 characters for the commit id;
otherwise, it will not work!
Try it out in one of your repositories! 

---

# Let's apply what we learned!