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

Notes: What are the changes introduced between two commits? Whe have already learned three different ways to check your project history. Basically your project history is a temporary line with the changes (commits) made in your project along with its message and commit id or hash.
We can have access to this information on GitHub, and locally using the terminal and Jupyter Lab.

But what if we want to go more into the detail and see exactly what have changed between two commits? What lines have been modified?

In the image you can see the comparison between two commits. In read is the old commit and in green is the most recent one. On the commit on the right has been introduced the phrase *"I have changed!* in line number 3 between the commits 35c218 and 89e195.

This is the way we compare commits, let's see how we can access this view in the different platforms.

---
## 🙌 Differences between commits (JupyterLab)

<center>

<img src='/module4/diff-commits-jl.png' width="90%" alt="404 image"/>

</center>
 
Notes:

To see the different between commits you have to go to the tab **History**.

Select the commit you want to compare and click in the file icon with the `+` and `-` symbols on it as you can see on the image.

In case you don't see the options pay attention to click on the small arrow that looks down in the upper right corner to display the information.

By default you are going to compare the information with the last commit.

---
## 🙌 Differences between commits (JupyterLab)

<center>

<img src='/module4/diff-commits-distant-jl.png' width="90%" alt="404 image"/>

</center>
 
Notes: If you want to compare commits that are more distant among each other you can click the symbol of the file with the left pointing arrow in the newest commit and then the icon of the right poiting arrow in the oldest commit you want to compare.
A new tab will be open in the bottom of the screen. There you can select the file you would like to compare.

---
## 🙌 Differences between commits (the terminal)

<center>

<img src='/module4/diff-commits-t.png' width="90%" alt="404 image"/>

</center>
 
Notes: As always that we use the terminal we have more flexibility with the use of the commands.

Let's compare two commits the same as we did with JupyterLab. For this we will use the command `git diff <commit 1 id> <commit 2 id>`. You can see in the output that between these 2 commits we have differences in two files: `afile.txt` and `instructions.txt`. That is why in JupyterLab we have to go to that special tab to select the file with changes!

In this case, as we are comparing it with the newest commit, this will be equal to specifying only one commit id (the oldest one) doing `git diff 9a83b69`.

You can see the difference in both files using `diff --git a/afile.txt b/afile.txt` and `diff --git a/instructions.txt b/instructions.txt` (note for the reviewer: this should be corrected after the image is final. The output should be explained).


---
## 🙌 Differences between commits (GitHub)

<center>

<img src='/module4/diff-github.png' width="90%" alt="404 image"/>

</center>
 
Notes: Is it possible to visualize differences among commits in the remote?

Yes, it is! You can add to the url of your repository the following end `/compare/<commit 1 id>..<commit 2 id>`, reeplacing with the commits hash of your interest and you will access a view as the one you can see in the slide.

Pay attention to use 7 characters for the commits id, if not is not going to work! Give it a try in one of your repositories!

---

# Let's apply what we learned!