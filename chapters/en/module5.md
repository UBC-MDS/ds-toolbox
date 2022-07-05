---
title: 'Module 5: Branches, forks, and streams… Welcome to the Git nature walk!'
description:
  'Course introduction, summary of course learning outcomes and prerequisite validation.' 
prev: ../../module4
next: ../../module6
type: chapter
id: 5
---

<exercise id="1" title="Branches" type="slides,video">

<slides source="module5/module5_01" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id='2' title="Branches">

What of this names refer to the default branch in Git/GitHub?

<choice>
<opt text='<code> master </code>'>
Right, but there is also another correct option.
</opt>
<opt text='<code> HEAD </code>'>
<code> HEAD </code> is providing valuable information to the user when checking the project history. Specifically will point to the last commit in the origin and in the local repository.
</opt>
<opt text='<code> main </code>'>
Right, but there is also another correct option.
</opt>
<opt text='<code> origin </code>'>
<code> origin </code> is referring to the remote GitHub repository.
</opt>
<opt text='2, 3 and 4 are correct'>
<code> main </code>, <code> origin </code> and <code> HEAD </code> are concepts that provide valuable information to the user when checking the project history, but 2 of them not necessary refer to the default branch.
</opt>
<opt text='1 and 3 are correct' correct='true'>
<code> master </code> was the old name for the <code> main </code> branch. You still will find repositories you can contribute to that uses <code> master </code> as the default branch.
</opt>
<opt text='2 and 3 are correct' >
Only one of this options is correct.
</opt>
</choice>

When do you need to open a new branch?

<choice>
<opt text='It is the first thing you should do after you start a project. You open a branch for all the features you are planning to add to your code' >
You can not predict when you will have a bug to fix. Also, remember that you will open a branch from the stage your project currently is. Are you sure that would have sense to open all of them at the beggining of the project?   
</opt>
<opt text='When you want to make a change that can break the code in the <code> main </code> branch'>
Right, but there is also another correct option.
</opt>
<opt text='You can create a branch when you decide to add a new feature'>
Right, but there is also another correct option.
</opt>
<opt text='You can create a branch to fix a bug, and then merge it to <code> main </code> '>
Right, but there is also another correct option.
</opt>
<opt text='All are correct '>
Remember that you will open a branch from the stage your project currently is. Are you sure that would have sense to open all of them at the beggining of the project?   
</opt>
<opt text='2, 3 and 4 are correct' correct='true'>
</opt>
</choice>

What of this expressions is incorrect?

<choice>
<opt text='I will push to the origin' >
</opt>
<opt text='When you want to make a change that can break the code in the <code> main </code> branch'>
Right, but there is also another correct option.
</opt>
<opt text='You can create a branch when you decide to add a new feature'>
Right, but there is also another correct option.
</opt>
<opt text='You can create a branch to fix a bug, and then merge it to <code> main </code> '>
Right, but there is also another correct option.
</opt>
<opt text='All are correct'>
Remember that you will open a branch from the stage your project currently is. Are you sure that would have sense to open all of them at the beggining of the project?   
</opt>
<opt text='2, 3 and 4 are correct' correct='true'>
</opt>
</choice>

</exercise>

<exercise id='3' title="How to create a branch?"  type='slides, video'>
<slides source='module5/module5_02' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='4' title='branches'>

What command have to use to merge branches?
IN PROGRESS

<choice>
<opt text='x' correct='true'>
</opt>
<opt text='y'>
</opt>
</choice>
</exercise>

<exercise id='5' title="Merging branches"  type='slides, video'>
<slides source='module5/module5_03' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='6' title='merging branches'>

How you can check locally if you are working in a repo clone from the original one or from your fork?

<choice>
<opt text='x' >
</opt>
<opt text='x'>
</opt>
<opt text='x' correct='true'>
</opt>

</choice>
</exercise>

<exercise id='7' title='collaboration' type='slides, video'>
<slides source='module5/module5_04' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='8' title='collab'>

In which cases is better you should work on a fork and or a branch?

(There is a similar question in 521 q)

<choice>
<opt text='x' >
</opt>
<opt text='x'>
</opt>
<opt text='x' correct='true'>
</opt>
<opt text='x'>
</opt>

</choice>
</exercise>

<exercise id='7' title='forks' type='slides, video'>
<slides source='module5/module5_05' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='8' title='forks'>

In which cases is better you should work on a fork and or a branch?

(There is a similar question in 521 q)

<choice>
<opt text='x' >
</opt>
<opt text='x'>
</opt>
<opt text='x' correct='true'>
</opt>
<opt text='x'>
</opt>

</choice>
</exercise>


<exercise id='9' title='Creating pull requests'  type='slides, video'>
<slides source='module5/module5_06' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

 <exercise id='10' title='Creating pull requests'>

How is different the command `git reset` from `git restore`?

 <choice>
 <opt text='x' >
 </opt>
 <opt text='x'>
 </opt>
 <opt text='x'>
 </opt>
 <opt text= x correct='true'>
 </opt>
 </choice>
 </exercise>