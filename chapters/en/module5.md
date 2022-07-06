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
<opt text='When you want to make a change that can break the code in the <code> main </code> branch'>
Right, but there is also another correct option.
</opt>
<opt text='You can create a branch when you decide to work on a new feature, even if later you decide not to merge it in the <code> main </code> branch'>
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


You clone a repository from Github with a README file to your own computer. After that, you create a new branch locally called 'app' and commit three times. What labels will include your most recent commit? 

<choice>
<opt text='<code>origin/HEAD</code> and <code>origin/main</code>'>

</opt>
<opt text='<code> HEAD -> app </code> ' correct='true'>
Head is pointing to the last place you make changes and that was in the app branch
</opt>
<opt text='<code> main </code>'>

</opt>
<opt text=' <code> HEAD -> main </code>'>
Remember that you will open a branch from the current stage of your project. Are you sure it makes sense to open all of them at the start of the project?  
</opt>
<opt text='<code> app </code>'>
</opt>
</choice>


</exercise>

<exercise id='3' title="What is the relationship between the branches?"  type='slides, video'>
<slides source='module5/module5_02' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='4' title='Observing the trees'>

**True or False**

The labels <code> origin/main </code> and <code> origin/HEAD </code> always will be associated to the more recent commit in the history of a project that you have just cloned from GitHub.

<choice>
<opt text='True'>
What happens if the last change in the GitHub repository was in a different branch than <code> main </code>. You can try in your computer what happens!
</opt>
<opt text='False'  correct='true' >

The term `origin` refers to the remote repository. If the last change in the remote repository you are cloning was in other branch than <code> main </code> the labels in the most recent commit will be (HEAD -> new-branch, origin/new-branch)

</opt>
</choice>

*git log --oneline --all --graph*

* a949e61 2020-09-13 (HEAD -> master) Update readme
| * 0a8dfef 2020-09-13 (lecture-todo) List todo items
|/
* 6e69947 2020-09-13 (origin/master, origin/HEAD) Add a line to readme
* 0d5a6f7 2020-09-13 Initial commit

Select the options that are TRUE

<choice>
<opt text='The most recent commit on GitHub was performed in the master branch'>
You can recognize the latest commit on GitHub with the label <code> origin/HEAD </code>
</opt>
<opt text='There is a branch called <code> lecture-todo </code> that has not been pushed to GitHub yet '>
The labels <code> origin/master, origin/HEAD </code> that points the last change in the remote are downstream. This means that a949e61 and 0a8dfef were created after pulling or cloning from GitHub.
</opt>
<opt text='The last local change of this repository has associated the commit message "Update readme"' >
The last commit is always the one that appears first. <code> HEAD -> master </code>
</opt>
<opt text='The commits a949e61 and 0a8dfef exist only in your local computer'>
</opt>
<opt text='The commits 6e69947 and 0d5a6f7 exist both in your local computer and on GitHub'>
</opt>
<opt text='All are correct' correct='true' >
</opt>
<opt text='Only 1 and 3 are correct' correct='true' >
What does the labels <code> origin/HEAD </code> and <code> HEAD </code> means?
</opt>
<opt text='Only 2, 4 and 5 are correct' correct='true' >
The most recent commits are always the first to appear in the representation of the trees. 
</opt>
</choice>
</exercise>

<exercise id='5' title="Merging branches"  type='slides, video'>
<slides source='module5/module5_03' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='6' title='Merging branches'>


Would you delete a branch after merge it?

<choice>
<opt text='Yes, to avoid having extra copies of the code that you do not need anymore' >
A branch in Git is a pointer, you are not saving extra information on it. 
</opt>
<opt text='Yes, I am not going to develop more on it' correct='true'>
</opt>
<opt text='No, I could be loosing important information' >
Once the branch has been merged all the information is combined. If the merge was successful no information could be missing.
</opt>
</choice>

what branches are you merging in this example:

<choice>
<opt text='Yes' >
</opt>
<opt text='No' correct='true'>
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