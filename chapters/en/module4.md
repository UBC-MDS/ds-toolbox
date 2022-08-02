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

<slides source="module4/module4_00" shot="0" start="0:002" end="3:40">
</slides>
</exercise>

<exercise id="1" title="View your Git history" type="slides,video">

<slides source="module4/module4_01" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id='2' title="Test Your Knowledge">

Clone the repo https://github.com/UBC-MDS/equine_numbers_value_canada. What is the hash or the first commit of the project? 

<choice id=1>
<opt text='cc400df4b2a382f653abd0d9e514f6daae98d2ad'>
Is the first commit of the project or the first commit of the user flor14?
</opt>
<opt text='e98d2ad'>
To use a shorter version of a SHA you should select the first characters, not the last ones.
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


What kind of information is not displayed **not** in a Git project's history?

<choice id=2>
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

<slides source="module4/module4_02" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id='4' title='Test Your Knowledge'>

View this git diff comparison between on GitHub:
https://github.com/UBC-MDS/equine_numbers_value_canada/compare/1bb5ab8..9021b83

You can see that there has been changes made to the `README.md` file,
highlighted in red and green in the web interface.
Looking at the commit history of the repository and the order the commits were made in,
which of the red and green highlights represent
the current state of the <code>README.md</code> file in the repository?

<choice id=3>
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

How would realice this comparison using the command line? https://github.com/UBC-MDS/equine_numbers_value_canada/compare/1bb5ab8..9021b83

<choice id=4>
<opt text='<b>A.</b><code>git diff 9021b83</code>' >
<code>9021b83</code> is the SHA-1 of the last commit, what would you like to compare it with?
</opt>
<opt text='<b>B.</b><code>git diff 1bb5ab8</code>' >
But there is also other correct option!
</opt>
<opt text='<b>C.</b><code>git diff 1bb5ab8 9021b83</code>' >
But there is also other correct option!
</opt>
<opt text='A and C are correct' >
IN the option <b>A.</b>, <code>9021b83</code> is the SHA-1 of the last commit, what would you like to compare it with?
</opt>
<opt text='B and C are correct' correct='true' >
Writing the newest commit is not necessary. If you write only one commit (that is not the newest one) it will compare it with the last one without specifing anything else.
</opt>
</choice>
</exercise>

<exercise id='5' title="Restoring an older version of a file"  type='slides, video'>
<slides source='module4/module4_03' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='6' title='Test Your Knowledge'>

You are writing a book using version control. In your local repository, you have a text file for each chapter. Today, after reading your work again you decided to move some of the text you have written for `chapter3.md` to `chapter1.md`. How would you save this change using Git?

<choice>
<opt text='I would cut and copy the text into a new file, add both files to the staging area, and then commit with a message explaining the changes.' correct='true'>

</opt>

<opt text='I would <b>revert</b> to the commit I did after writing that paragraph. Then, I would add the text in the correct chapter and make a new commit with a message explaining the changes.'>

Are you sure you want to lose all the changes you made in `chapter2.md`? Even if you can recover those changes, reverting the changes will make you go back to that particular point in the the history of your project.

</opt>

<opt text='I would perform a <b>hard reset</b> to the commit I did after writing that paragraph. Then, I would add the text in the correct chapter and make a new commit with a message explaining the changes.'>

When you do a hard reset, you are deleting the history of your project up to a particular commit. This means that you will lose all the changes you made between that particular commit and your most recent one.

</opt>
</choice>

True or false

Select all the situations in which it is a good idea to reset your work to a previous commit:

<choice>
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

<exercise id='7' title='Revert your changes' type='slides, video'>
<slides source='module4/module4_04' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='8' title='Test Your Knowledge'>

Which of the following statements are TRUE about `git revert`?


<choice>
<opt text='This command creates a new commit that undoes the changes from a previous commit.' >
</opt>
<opt text='This command undoes the changes in your project up to the commit id that you have specified.'>
</opt>
<opt text='This command makes the history of the project shorter (deletes commits)'>
</opt>
<opt text='This command is used to undo changes in your working directory that have not been comitted yet.'>
</opt>
<opt text='A and B are correct' correct='true'>
</opt>
<opt text='A and C are correct'>
</opt>
</choice>


</exercise>

<exercise id='9' title="Deal with merge conflicts"  type='slides, video'>
<slides source='module4/module4_05' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='10' title='Test Your Knowledge'>

What do you have to do if you are working with the terminal and you want to write a different text for this merge conflict?

<choice>
<opt text='Accept current change' >
</opt>
<opt text='Accept incoming change'>
</opt>
<opt text='Accept both changes' correct='true'>
</opt>
<opt text='You should delete everything between <code> <<<<<<< </code> and <code> >>>>>>> </code> and add the text you want instead'>
</opt>

</choice>
</exercise>




<exercise id='11' title='.gitgnore'  type='slides, video'>
<slides source='module4/module4_06' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='12' title='Test Your Knowledge'>

`**/` is prepended to an entry in `.gitignore` to tell Git that this entry is a folder.

<choice id="1">

<opt text="True">
<code>**/</code> is used to tell Git that the same file/folder name should be ignored in the subdirectories of a repo as well.
</opt>

<opt text="False"  correct="true">
</opt>

</choice>

The `.gitignore` file itself needs to be committed, and is thus version-controlled.

<choice id="2">

<opt text="True" correct="true">
Right, <code>.gitignore</code> is not ignored itself.
</opt>

<opt text="False">
Remember that you need to do "add" and "commit" <code>.gitignore</code> with Git?
</opt>
</choice>
</exercise>

<exercise id="13" title="What did we just learned?" type="slides,video">

<slides source="module4/module4_end" shot="0" start="0:002" end="3:40">
</slides>
</exercise>
