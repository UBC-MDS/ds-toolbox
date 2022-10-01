---
type: slides
title: 'module4_02'
---

# Comparing commits

Notes:
In this slide deck we will see how we can visualize the changes between two commits.

---

## Comparing commits


<center>

<img src='/module4/diff-intro-jl.png' width="850px" alt="404 image"/>

</center>

Notes:
We have learned how to check the commit history of a project
using GitHub, JupyterLab, and the terminal.

We can see some key information about each commit in the history view,
such as when it was made and who made it.

But what if we want to examine the specific changes made between two commits in more detail?
Which files had changes? Which lines exactly have been modified?


---

## Comparing commits

<br>
<br>
<br>
<br>
<br>
<br>

<center>

<img src='/module4/diff-intro-comparison.png' width="850px" alt="404 image"/>

</center>

Notes: 
In this slide you can see the comparison between two commits for a single file (`README.md`). 
The version of the file displayed on the left side is the older (commit `d59b6bb`)
and the version on the right is more recent (commit `aa2a019`)
The green and red highlights indicate the lines that have changed between the commits:
In the example, the phrase *"Hello world!* 
has been introduced in line number four in the commit `aa2a019`.

This type of comparison is called the "diff" (difference) between commits.
and it can be helpful to understand what has changed.

Let's explore how we can access this view in JupyterLab, the terminal, and GitHub.

---
## 🙌 Differences between commits: JupyterLab

<br>


<center>

<img src='/module4/diff-commits-example-jl.png' width="800px" alt="404 image"/>

</center>

Notes:
Open the **History** tab in JupyterLab to see the differences between commits.

1 - Once there, find the older commit you want to compare first
and then click the file icon symbol with the left arrow.
Repeat the process for the most recent commit that you want to compare,
but this time you should click the file icon symbol with the right arrow.
After doing so,
a new section called **Compare `d59b6bb` and `aa2a019`**   
will appear at the bottom of the **History** tab. 

2 - In that section   
you should choose the file for which you want to see the differences.  
In our example,    
we have only changed the `README.md` file.  
The next step is to click the file icon with the `+` and `-` symbols   
next to the name of the file.
The differences between both commits will be displayed as a new file.  
  

---
## 🙌 Differences between commits: Terminal

<br>


<center>

<img src='/module4/diff-commits-jl-terminal.png' width="800px" alt="404 image"/>

</center>

Notes:
As we have seen before,
the terminal is often more flexible
than the graphical user interface
and the same is true when comparing commits.

Let's first compare two commits the same way as we did with JupyterLab.   
For this we will use the command 
`git diff <commit 1 hash> <commit 2 hash>` as in the slide.
We can read that a line including "Hello world!"   
was added to the README.md file.  

Just as in JupyterLab,
the default is to compare the specified commit with the most recent one
so what we wrote about would be equal to specifying only one commit hash
(the oldest one) doing `git diff d59b6bb`,
since `aa2a019` is the most recent commit.

Note that `git diff` is useful   
for comparing files outside Git repositories as well.
You can use `git diff <file 1> <file 2>` 
to see all the differences between two text files.

---
## Understanding the comparison

<br>


<center>

<img src='/module4/diff-inverted-jl-t.png' width="800px" alt="404 image"/>

</center>

Notes:
When visualizing differences, you can invert the commit order.
As result, the output of `git diff` will be inverted as well.
To avoid confusion, we recommend that you always use the same criteria
to select the order of the commits to compare.

You must also pay attention to the `-` and `+` symbols. 
They are indicating the order in which the commits were chosen to be compared.

* `-` symbol is indicating changes in the first commit you have selected in JupyterLab or `git diff` first commit hash.
* `+` symbol is indicating changes in the second commit you have selected in JupyterLab or `git diff` second commit hash.

In both cases, the phrase "Hello world!" has been added.   
What the `-` and `+` are showing you is in which commit is the addition! 
Which changes show up in red and which show up in green
will also depend on which commit hash   
your write on the left and right side,
so you cannot always rely on the color
to indicate which change is the oldest.

If you want to undestand in more detail  
what the `git diff` output  
you can find a more detailed description [in this tutorial](https://www.atlassian.com/git/tutorials/saving-changes/git-diff).

---

## 🙌 Differences between commits: GitHub

<br>
<br>

`https://github.com/flordandrea/toy_ds_project/compare/d59b6bb..aa2a019`

<center>

<img src='/module4/diff-github-example.png' width="800px" alt="404 image"/>

</center>

Notes:
So far we have seen how to compare commits locally in JupyterLab and via the terminal.
What about visualizing the differences between commits directly on GitHub,
is that possible?

Yes, it is! You can add the following line to your repository's URL `/compare/<commit1>..<commit2>` 
(substituting in the commits hashes to compare) and  
you will access the view that you can see in this slide. 

Remember to use 7 characters for the commits id, if not is not going to work! Give it a try in one of your repositories!

Also note that you could use `...` instead of `..` to compare commits,
but double dot is the same as `git diff <commit1> <commit2>`.
You can [read more about the difference of two and three dots in this StackOverflow answer](https://stackoverflow.com/a/24186641/2166823).

---

# Let's apply what we learned!
