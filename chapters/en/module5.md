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

<exercise id='7' title='Pushing branches to the remote: creating pull requests'  type='slides, video'>
<slides source='module5/module5_06' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='8' title='Creating pull requests'>

**True or false**

You should be sure when opening a pull request because then you will not be able to include more changes in that one

 <choice>
 <opt text='True' >
 Try open a pull request and pushing new commits and check what happen!
 </opt>
 <opt text='False' correct='true'>
 You can continue pushing commits to a pull request pushing to the branch you used to create it. You will see the commits as a timeline when you open it on GitHub. Try it!
 </opt>
 </choice>

**True or false**
It is possible to open a pull request locally

<choice>
<opt text='True' >
It is possible to ckeck out a pull request locally to solve a merge conflict or test changes before aproving it. https://docs.github.com/es/enterprise-server@3.1/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
</opt>
<opt text='False' correct='true'>
You have to enter to your GitHub repository to star a pull request.
</opt>
</choice>

How is it different to open a pull request to merging branches? Is it not basically the same?

<choice>
<opt text='Yes, it is the same, you are merging branches but using GitHub' >
Even if the final goal of the pull request is to merge your changes with other branch, it is also a way to socialize that you created those changes and also to involve other team members for example as reviewers.
</opt>
<opt text='You open a pull request to merge branches when you want to involve your collaborators' correct='true'>
</opt>
</choice>




 </exercise>

<exercise id='9' title='What is your style of collaboration?' type='slides, video'>
<slides source='module5/module5_04' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='10' title='Between braches and forks'>

In which cases branching would be better?

(There is a similar question in 521 q)

<choice>
<opt text='You have write access to the repository' correct='true'>
If you have not write access it would be impossible to contribute without forking the repository first.
</opt>
<opt text='The owner of the repository have set branch protection rules to the <code> main </code>  branch'>
Even if it is a good practice as avoids that contributors push code directly to the <code> main </code> branch by accident, protecting the branch it is not requested for collaboration. 
</opt>
<opt text='You want to use GitHub issues to share problems to solve with your team members or other collaborators' >
It is always recommended to use Github issues, it does't matter your collaboration style.
</opt>
</choice>

What of these names are good for branches?

<choice>
<opt text='arman, florencia, joel'>
Select names of people as names of branches is not really meaningful as it is not given information about what each member of the team is working on.
</opt>
<opt text='fix-dockerfile, feature-testing, feature-app-modules' correct='true'>
There is not only a correct way to do this, you will have to define with your team a rule or follow the criteria of the repository you are contributing.
</opt>
<opt text='1616789, 1235348, 1555684' >
Using only numbers could create confusion when merging the branches. Selectins as branch name the issue id that the branch is trying to solve will seem a logical choice, but it is uninformative and could lead to mistakes.
</opt>
</choice>
</exercise>

<exercise id='11' title='Forks' type='slides, video'>
<slides source='module5/module5_05' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='12' title='Forks'>

**True or false**

It is a good practice to start working on a new specific branch before doing a pull request from your forked repository.

<choice>
<opt text='True' correct='true' >
Doing the pull request from a specific branch with a meaningful name will provide valuable information to the recipients of the pull request. Also, making changes directly on the `main` branch in general could not be a good idea as it coud break the code.
</opt>
<opt text='False'>
</opt>
</choice>

**True or false**
To start working locally in a GitHub repository after forking it you should clone the copy of the repository in your GitHub account.

<choice>
<opt text='True'  correct='true'>
</opt>
<opt text='False'>
You will clone, pull and push to the forked repository that lives in your GitHub account. The contribution to the initial GitHub repository will be through pul requests from your fork to the initial repository.
</opt>
</choice>
</exercise>


