---
title: 'Module 4: Getting groovy with Git and GitHub'
description:
  'View your git history, travel back in time, deal with merge conflicts and other useful tools' 
prev: ../../module3
next: ../../module5
type: chapter
id: 4
---

<exercise id="0" title="Module Learning Outcomes" type="slides,video">

<slides source="module4/module4_00" shot="10" start="0:00" end="0:44">
</slides>
</exercise>

<exercise id="1" title="Viewieng the history of your project" type="slides,video">

<slides source="module4/module4_01" shot="11" start="0:002" end="3:23">
</slides>

</exercise>

<exercise id='2' title="✍️ Practice: A history lesson">

Clone the repo https://github.com/UBC-MDS/equine_numbers_value_canada. What is the hash or the first commit of the project?

<choice id="1">
<opt text='cc400df4b2a382f653abd0d9e514f6daae98d2ad'>
Is the first commit of the project or the first commit of the user flor14?
</opt>
<opt text='e98d2ad'>
To use a shorter version of a commit hash you should select the first characters, not the last ones.
</opt>
<opt text='cc400df'>
Is the first commit of the project or the first commit of the user flor14?
</opt>
<opt text='0896801'>
This is correct, but there is one more correct answer.
</opt>
<opt text='0896801fdd38d461414e0b061b2b2ef3395f7dd0'>
This is correct, but there is one more correct answer.
</opt>
<opt text='The first and the third options are correct'>
Is the first commit of the project or the first commit of the user flor14?
</opt>
<opt text='The two last options are both correct' correct='true'>
</opt>
</choice>


What kind of information is **not** displayed in a Git project's history?

<choice id="2">
<opt text='commit message' >
</opt>
<opt text='date and time'>
</opt>
<opt text='HASH'>
</opt>
<opt text='author'>
</opt>
<opt text='commit number' correct='true'>
When checking your project history you will see that the commits are displayed from older to newer using the date as a reference, but there is no explicit commit enumeration.
</opt>
</choice>
</exercise>



<exercise id="3" title="Comparing commits" type="slides,video">

<slides source="module4/module4_02" shot="11" start="3:24" end="8:39">
</slides>

</exercise>

<exercise id='4' title='✍️ Practice: Know your diffs'>

View this <code>git diff</code> comparison between on GitHub:
https://github.com/UBC-MDS/equine_numbers_value_canada/compare/1bb5ab8..9021b83

You can see that there has been changes made to the `README.md` file,
highlighted in red (- sign)  and green (+ signs) in the web interface.
Looking at the commit history of the repository and the order the commits were made in,
which of the red and green highlights represent
the current state of the <code>README.md</code> file in the repository?

<choice id="1">
<opt text='Red'>
The colors could be tricky, because they depend on in which order the commits are written, so you can't rely on the same color always indicating that a change is newer/older. Try reversing the order of the commits to `1bb5ab8..9021b83` and you will see.
</opt>
<opt text='Green' correct='true'>
If you go to the current state of the repository (https://github.com/UBC-MDS/equine_numbers_value_canada/) and check the <code>README.md</code> file or the commit history,
you can see that the green highlights represent the more recent commits
(remember that the color alone is not enough to tell which are more recent,
try reversing the order of the commits to `1bb5ab8..9021b83` and you will see.).
</opt>
</choice>

How could you make this same comparison using `git diff` from the command line https://github.com/UBC-MDS/equine_numbers_value_canada/compare/1bb5ab8..9021b83?

<choice id="2">
<opt text='<code>git diff 9021b83</code>' >
<code>9021b83</code> is the hash of the last commit, what would you like to compare it with?
</opt>
<opt text='<code>git diff 1bb5ab8</code>' >
That's right, but there is also another correct option!
</opt>
<opt text='<code>git diff 1bb5ab8 9021b83</code>' >
That's right, but there is also another correct option!
</opt>
<opt text='The first and third options are both correct' >
In the first option, <code>9021b83</code> is the hash of the last commit, what would you like to compare it with?
</opt>
<opt text='The second and third option are both correct' correct='true' >
Writing the newest commit is not necessary. If you write only one commit (that is not the newest one) it will compare it with the last one without specifying anything else.
</opt>
</choice>
</exercise>

<exercise id='5' title="Reset your Git project to an earlier state"  type='slides, video'>
<slides source='module4/module4_03' shot='11' start='8:42' end='12:16'> </slides>
</exercise>

<exercise id='6' title='✍️ Practice: The "no regrets" reset'>

Select all the situations in which it is a good idea to reset your work to a previous commit:

<choice id="1">
<opt text='When you are working on a project locally, without having already pushed your work to the remote' correct='true'>

If you are working locally on a private project, it is quite safe to use reset. Nobody is going to be affected by you deleting part of the history of your project.

</opt>
<opt text='When we are working with other collaborators pushing to the same repository' >

This is not a good idea, because you are deleting part of the history of your project. Keep in mind that your collaborators are working with the full history. This could pose a problem at the time of combining the information. In this case, it is probably better to revert the changes—a command that we are going to learn in the next sections of this module.

</opt>

<opt text='Both are correct' >

You can hard-reset your work in both cases, but one of the options could cause problems.

</opt>

</choice>
</exercise>

<exercise id='7' title='Revert changes made to your Git project' type='slides, video'>
<slides source='module4/module4_04' shot='11' start='12:17' end='15:02'> </slides>
</exercise>

<exercise id='8' title='✍️ Practice: Subtraction through addition (of a new commit)'>

Which of the following statements are TRUE about `git revert`? 

<choice id="1">
<opt text='This command creates a new commit that undoes the changes from previous commits.' >

That's right, but there is also another correct option!

</opt>
<opt text='This command undoes the changes in your project up to the commit hash that you have specified.'>

That's right, but there is also another correct option!

</opt>
<opt text='This command makes the history of the project shorter by deleting commits'>

Resetting deletes commits, but reverting does not.

</opt>
<opt text='This command is used to undo changes in your working directory that have not been committed yet.'>

We cannot use revert for this task.

</opt>

<opt text='The first and second options are both correct' correct='true'>

</opt>

<opt text='The first and third options are both correct'>

Is the third options really correct?

</opt>
</choice>
</exercise>

<exercise id='9' title="Deal with merge conflicts"  type='slides, video'>
<slides source='module4/module4_05' shot='11' start='15:03' end='23:10'> </slides>
</exercise>

<exercise id='10' title='✍️ Practice: Merge with care'>

Imagine you want to fix a merge conflict in README.md file. What do you have to do if you are working with the terminal and you want to write a different text for this merge conflict (i.e., neitehr of changes is sutisfactory for you)?

```
$ cat README.md

If you have questions, please
<<<<<<< HEAD
open an issue
=======
ask your question via email.
>>>>>>> new_branch_to_merge_later
```
  
<choice id="1">
<opt text='You should delete everything between <code> <<<<<<< </code> and <code> ======= </code> and leave the remaining text' >
</opt>
<opt text='You should delete everything between <code> ======= </code> and <code> >>>>>>> </code>  and leave the remaining text'>
</opt>
<opt text='You should delete everything between <code> <<<<<<< </code> and <code> >>>>>>> </code> but keep all the text'>
</opt>
<opt text='You should delete everything between <code> <<<<<<< </code> and <code> >>>>>>> </code> and add the text you want instead' correct='true'>
</opt>

</choice>
</exercise>


<exercise id='11' title='.gitgnore'  type='slides, video'>
<slides source='module4/module4_06' shot='11' start='23:11' end='28:26'> </slides>
</exercise>

<exercise id='12' title='✍️ Practice: Ignorance is bliss'>

**True or False**

`**/` is prepended to an entry in `.gitignore` to tell Git that this entry is a folder.

<choice id="1">

<opt text="True">
<code>**/</code> is used to tell Git that the same file/folder name should be ignored in the subdirectories of a repo as well.
</opt>

<opt text="False"  correct="true">
</opt>

</choice>

The `.gitignore` file itself can be committed and pushed to a remote repository.

<choice id="2">

<opt text="True" correct="true">
Yes, <code>.gitignore</code> is like any other file in your repository, so if you want to share it with your collaborators, you need to commit it and push it to the remote repository.
</opt>

<opt text="False">
<code>.gitignore</code> is like any other file in your repository, so if you want to share it with your collaborators, you need to commit it and push it to the remote repository.
</opt>
</choice>
</exercise>

<exercise id="13" title="What did we just learned?" type="slides,video">

<slides source="module4/module4_end" shot="12" start="0:00" end="0:23">
</slides>
</exercise>
