---
title: 'Module 4: Getting groovy with Git and GitHub'
description:
  'View your git history, travel back in time, deal with merge conflicts and other useful tools' 
prev: ../../module3
next: ../../module5
type: chapter
id: 4
---


<exercise id="1" title="Viewing your Git history" type="slides,video">

<slides source="module4/module4_01" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id='2' title="Test Your Knowledge">

Clone the repo https://github.com/UBC-MDS/equine_numbers_value_canada. What is the hash or the first commit of the project? 

<choice>
<opt text='cc400df4b2a382f653abd0d9e514f6daae98d2ad'>
</opt>
<opt text='cc400df'>
</opt>
<opt text='0896801'>
</opt>
<opt text='0896801fdd38d461414e0b061b2b2ef3395f7dd0'>
</opt>
<opt text='A and B are correct'>
</opt>
<opt text='C and D are correct' correct='true'>
</opt>
<opt text='B and C are correct'>
</opt>
</choice>
</exercise>

<exercise id='3' title="Restoring an older version of a file"  type='slides, video'>
<slides source='module4/module4_02' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='4' title='Test Your Knowledge'>

You are writing a book using version control. In your local repository you have text file for each chapter. Today, after reading your work again and decided to move some of the text you have written for `chapter3.md` to `chapter1.md`. How would you save this change in Git?

<choice>
<opt text='It would cut and copy the text into the new file, add both files to the staging area, and then commit with a message explaining the changes.' correct='true'>

</opt>

<opt text='I would **revert** to the commit when I wrote the paragraph. Then, I would add the text in the correct chapter and make a new commit with a message explaining the changes.'>

</opt>

<opt text='I would perform a **hard reset** to the commit when I wrote the paragraph. Then, I would add the text in the correct chapter and make a new commit with a message explaining the changes.'>

When you realize a hard reset, you are deleting the history of your project until that commit. This means that you will be losing all the changes you did in between that commit.

</opt>
</choice>
</exercise>

<exercise id='5' title="Deal with merge conflicts"  type='slides, video'>
<slides source='module4/module4_03' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='6' title='Test Your Knowledge'>

what steps you need to follow to solve a merge conflict
IN PROGRESS

<choice>
<opt text='(1) open the editor (2) accept incoming changes (3) save changes' >
</opt>
<opt text='TBD'>
</opt>
<opt text='TBD' correct='true'>
</opt>

</choice>
</exercise>


<exercise id='7' title='Stashing local non-committed changes before pulling' type='slides, video'>
<slides source='module4/module4_04' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='8' title='Test Your Knowledge'>

In what of this option is useful the command git stash?
IN PROGRESS


<choice>
<opt text='situation a' >
</opt>
<opt text='situation b'>
</opt>
<opt text='situation c' correct='true'>
</opt>

</choice>
</exercise>

<exercise id='9' title='.gitgnore'  type='slides, video'>
<slides source='module4/module4_05' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='10' title='Test Your Knowledge'>

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
