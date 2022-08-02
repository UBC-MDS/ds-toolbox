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

<img src='/module4/diff-intro.png' width="90%" alt="404 image"/>

</center>

Notes:
We have just learned how to check your project's commit history
using GitHub, JupyterLab, and the terminal.
In this history view,
we could see some key information about each commit
such as when it was made and who made it.

But what if we want to go more into the detail and see exactly what have changed between two commits? What lines have been modified in which files?

In this slide you can see the comparison between two commits for a single file (`instructions.txt`). The version of the file to the left is the older (commit `35c218`)
and the version to the right is more recent (commit `89e195`)
The green and red highlights indicate that there has been one line changed between these two commits:
The phrase *"I have changed!* in line number three
has been introduced between the commits 35c218 and 89e195.

This type of comparison is called the "diff" (difference) between commits,
and you can probably already appreciate that this type of comparison can be helpful to understand what has changed,
so let's explore how we can access this view in JupyterLab, the terminal, and on GitHub.

---

## 🙌 Differences between commits: JupyterLab

<center>

<img src='/module4/diff-commits-jl.png' width="90%" alt="404 image"/>

</center>

Notes:
To see the difference between commits in JupyterLab,
you first need to open the **History** tab.
Select the commit you want to compare
and click in the file icon with the `+` and `-` symbols on it as you can see in this slide.
In case you don't see these icons,
you need to click on the small down arrow that in the upper right corner of the commit.

By default you are going to compare the information with the last commit.

---

## 🙌 Differences between commits: JupyterLab

<center>

<img src='/module4/diff-commits-distant-jl.png' width="90%" alt="404 image"/>

</center>

Notes:
If you want to compare against another commit than the most recent one, you can click the symbol of the file with the left pointing arrow in the newest commit and then the icon of the right pointing arrow in the oldest commit you want to compare against.
A new tab will be open in the bottom of the screen. There you can select the file you would like to compare.

---

## 🙌 Differences between commits: Terminal

<center>

<img src='/module4/diff-commits-t.png' width="90%" alt="404 image"/>

</center>

Notes:
As we have seen before,
the terminal is often more flexible
than the graphical user interface
and the same is true when comparing commits.

Let's first compare two commits the same way as we did with JupyterLab. For this we will use the command `git diff <commit 1 id> <commit 2 id>` as in the slide.
You can see in the diff output that between these two commits there are changes in two files: `afile.txt` and `instructions.txt`.
This is why we earlier had to go to that special box to select the file with changes in JupyterLab!

Just as in JupyterLab,
the default is to compare the specified commit with the most recent one
so what we wrote about would be equal to specifying only one commit id
(the oldest one) doing `git diff 9a83b69`,
since `89e195e` is the most recent commit.

Note that `git diff` is useful for comparing files outside git repositories as well.
You can use `git diff <file 1> <file 2>` to see all the differences between two text files
in the familiar `git diff` format.

---

## 🙌 Differences between commits: GitHub

<center>

<img src='/module4/diff-github.png' width="90%" alt="404 image"/>

</center>

Notes:
So far we have seen how to compare commits locally in JupyterLab and via the terminal.
What about visualizing the differences between commits directly on GitHub,
is that possible?

Yes, it is! There is no way to click in the GitHub web interface, but you can append add the following to your repository's URL `/compare/<commit1>..<commit2>` (substituting in the commits hashes to compare) and you will access the view that you can see in this slide.
Which changes show up in red and which show up in green
depends on which commit hash your write in on the left and right,
so you cannot always rely on the color
to indicate which change is the oldest.

Pay attention to use 7 characters for the commits id, if not is not going to work! Give it a try in one of your repositories!

Also note that you could use `...` instead of `..` to compare commits,
but double dot is the same as `git diff <commit1> <commit2>`.
You can [read more about the difference of two and three dots in this StackOverflow answer](https://stackoverflow.com/a/24186641/2166823).

---

# Let's apply what we learned!
