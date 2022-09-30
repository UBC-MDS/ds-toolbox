---
type: slides
title: 'module4_02'
---

# Comparing commits

Notes:
In this slide deck we will see how we can visualize the changes between two commits.

---

## Comparing commits

<br>
<br>
<br>

<center>

<img src='/module4/diff-intro-jl.png' width="850px" alt="404 image"/>

</center>

Notes:
We have just learned how to check your project's commit history
using GitHub, JupyterLab, and the terminal.
In this history view,
we could see some key information about each commit
such as when it was made and who made it.

But what if we want to go more into the detail and see exactly what have changed between two commits? What lines have been modified in which files?


---

## Comparing commits

<br>
<br>
<br>
<br>
<br>

<center>

<img src='/module4/diff-intro-comparison.png' width="850px" alt="404 image"/>

</center>

Notes: 
In this slide you can see the comparison between two commits for a single file (`README.md`). The version of the file to the left is the older (commit `d59b6bb`)
and the version to the right is more recent (commit `aa2a019`)
The green and red highlights indicate the lines that have changed between the commits:
In the example, the phrase *"Hello world!* 
has been introduced in line number four in the commit `aa2a019`.

This type of comparison is called the "diff" (difference) between commits.
As you can see in the slide, this type of comparison can be helpful to understand what has changed,
so let's explore how we can access this view in JupyterLab, the terminal, and on GitHub.

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
will appear at the bottom of the history tab. 

2 - In that section   
you should choose the file for which you want to see the differences.  
In our example,    
we have only changed the `README.md` file.  
The next step is to click on the file icon with the `+` and `-` symbols   
next to the name of the file.
The differences between both commits will be displayed as a new file.  
  
You can now compare the diffs between different commits on your computer.


---
## Understanding the comparison

`$ git diff d59b6bb aa2a019`

```out
diff --git a/README.md b/README.md
index 1ba39b4..a612860 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,4 @@
 # Data science project
 Author: Florencia D'Andrea
+
+Hello world!
```
`$ git diff aa2a019 d59b6bb` 

```out
diff --git a/README.md b/README.md
index a612860..1ba39b4 100644
--- a/README.md
+++ b/README.md
@@ -1,4 +1,2 @@
 # Data science project
 Author: Florencia D'Andrea
-
-Hello world!
```

Notes:
When visualizing differences, you can invert the commit order.
What will happen is that the output of `git diff` will be inverted as well.
To avoid confusion, we recommend that you always use the same criteria
to select the order of the commits to compare.

You must also pay attention when comparing the differences between the `-` and `+` symbols. 
They are indicating the order in which the commits were chosen to be compared.

* `-` symbol is indicating changes in the first commit you have selected in JupyterLab or `git diff` first commit.
* `+` symbol is indicating changes in the second commit you have selected in JupyterLab or `git diff` second commit.

In both cases, the phrase "Hello world!" has been added.   
What the `-` and `+` are showing you is in which commit is the addition! 
Which changes show up in red and which show up in green
will also depend on which commit hash   
your write in on the left and right,
so you cannot always rely on the color
to indicate which change is the oldest.

If you want to undestand in more detail  
what does it mean for each part of the `git diff` output  
you find a more detailed description [on this tutorial](https://www.atlassian.com/git/tutorials/saving-changes/git-diff).

---
## 🙌 Differences between commits: Terminal

<br>


<center>

<img src='/module4/diff-commits-jl-t.png' width="800px" alt="404 image"/>

</center>

Notes:
As we have seen before,
the terminal is often more flexible
than the graphical user interface
and the same is true when comparing commits.

Let's first compare two commits the same way as we did with JupyterLab.   
For this we will use the command 
`git diff <commit 1 id> <commit 2 id>` as in the slide.
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
to see all the differences between two text files  
in the familiar `git diff` format.

---

## 🙌 Differences between commits: GitHub

<br>
<br>
<br>

<center>

<img src='/module4/diff-github-example.png' width="800px" alt="404 image"/>

</center>

Notes:
So far we have seen how to compare commits locally in JupyterLab and via the terminal.
What about visualizing the differences between commits directly on GitHub,
is that possible?

Yes, it is! There is no way to click in the GitHub web interface,   
but you can append add the following to your repository's URL `/compare/<commit1>..<commit2>` 
(substituting in the commits hashes to compare) and  
you will access the view that you can see in this slide. 

Pay attention to use 7 characters for the commits id, if not is not going to work! Give it a try in one of your repositories!

Also note that you could use `...` instead of `..` to compare commits,
but double dot is the same as `git diff <commit1> <commit2>`.
You can [read more about the difference of two and three dots in this StackOverflow answer](https://stackoverflow.com/a/24186641/2166823).

---

# Let's apply what we learned!
