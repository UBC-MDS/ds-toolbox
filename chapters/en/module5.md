---
title: 'Module 5: Branches, forks, and streams… Welcome to the Git nature walk!'
description:
  'Discover how to efficiently collaborate with Git and GitHub by using branches, forks ad pull requests.' 
prev: ../../module4
next: ../../module6
type: chapter
id: 5
---


<exercise id="0" title="Module Learning Outcomes" type="slides,video">

<slides source="module5/module5_00" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id="1" title="The role of branches" type="slides,video">

<slides source="module5/module5_01" shot="0" start="0:002" end="3:40">
</slides>

</exercise>

<exercise id='2' title="✍️ Practice: Be careful if you can't see the forest because of all the branches">

Which of these names are used to refer to the default branch in Git/GitHub?

<choice id = 1>
<opt text='<code>HEAD</code>'>
<code> HEAD </code> is providing valuable information to the user when checking the project history. Specifically, it will point to the commit that you are currently at in the repository.
</opt>
<opt text='<code>main</code>'>
Right, but there is also another correct option.
</opt>
<opt text='<code>origin</code>'>
<code> origin </code> is referring to the remote GitHub repository.
</opt>
<opt text='<code>master</code>'>
Right, but there is also another correct option.
</opt>
<opt text='The three first options are all correct'>
<code>main</code>, <code>origin</code> and <code>HEAD</code> are labels that provide valuable information to the user when checking the project history, but two of them not necessary refer to the default branch.
</opt>
<opt text='The second and fourth options are both correct' correct='true'>
<code>master</code> was the old name for the default branch and <code>main</code> is the new one. You still will find repositories that use <code>master</code> to refer to the default branch.
</opt>
<opt text='The two last options are both correct' >
Only one of these options is correct.
</opt>
</choice>

When should you create a new branch?

<choice id = 2>
<opt text='When you want to make a change that can break the code in the <code> main </code> branch'>
Right, but there is also another correct option.
</opt>
<opt text='You can create a branch when you decide to add a new feature, even if you later decide not to merge it'>
Right, but there is also another correct option.
</opt>
<opt text='You can create a branch to fix a bug, and then merge it to <code> main </code> '>
Right, but there is also another correct option.
</opt>
<opt text='It is the first thing you should do after you start a project. You open a branch for all the features you are planning to add to your code' >
You can not predict when you will have a bug to fix. 
</opt>
<opt text='All options are correct'>
Remember that you will create a branch from the stage your project currently is in. Are you sure that it would make sense to create all of them at the beginning of the project?   
</opt>
<opt text='The three first options are all correct' correct='true'>
</opt>
</choice>


Imagine that you cloned a repository from Github with a README file to your own computer. You then created a new local branch called <code>app</code> and made three commits. What labels will be included in your most recent commit (the third one) when you view the repo's commit history? 

<choice id = 3>
<opt text='<code>origin/HEAD</code> and <code>origin/main</code>'>
<code>origin/HEAD</code> and <code>origin/main</code> are pointing to the latest changes in the remote the moment of pulling.
</opt>
<opt text='<code>HEAD -> app</code> ' correct='true'>
<code>HEAD</code> is pointing to the last place you make changes and that was in the <code>app</code> branch
</opt>
<opt text='<code>main</code>'>
Which branch are you currently working on?
</opt>
<opt text=' <code>HEAD -> main</code>'>
Which branch are you currently working on?
</opt>
</choice>
</exercise>

<exercise id='3' title="How branches are related"  type='slides, video'>
<slides source='module5/module5_02' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='4' title='✍️ Practice: How branches are related'>

**True or False**

The labels <code>origin/main</code> and <code>origin/HEAD</code> always will be associated to the more recent commit in the history of a project that you have just cloned from GitHub.

<choice id = 4>
<opt text='True'>
What happens if the last change in the GitHub repository was in a different branch than <code>main</code>? You can try to reproduce this in your computer, creating a new branch in the remote and pulling the information to the local repository!
</opt>
<opt text='False' correct='true'>

The term `origin` refers to the remote repository. If the last change in the remote repository you are cloning was in other branch than <code>main</code> the label in the most recent commit will be (<code>origin/new-branch</code>). <code>origin/HEAD</code> will always point to the last commit in the <code>main</code> branch next to <code>origin/main</code> (except if you change the GitHub default settings).

</opt>
</choice>

After running <code>git log --oneline --all --graph</code> in your repository you get as output the following tree:


<img src="/module5/module5-gitlog.png" alt="output git log"> 


Select the options that are TRUE

<choice id = 5>
<opt text='The most recent commit on GitHub was performed on the <code>lecture-todo</code> branch'>
You can recognize the latest commit on GitHub by comparing the timestamps for all commits marked with an <code>origin/</code> label.
</opt>
<opt text='There are changes to the <code>lecture-todo</code> branch that has not been pushed to GitHub yet ' correct='true'>
The <code>lecture-todo</code> branch shows up alone on the latest commit. If the changes were on GitHub there would be at least one branch with the <code>origin/</code> prefix on the latest commit as well.
</opt>
<opt text='The most recent local commit of this repository has associated the message "Update readme"' >
By default, the most recent commits appear on the top of commit history. 
</opt>
<opt text='The commits a949e61 and 0a8dfef exist only in your local computer' correct='true'>
The labels <code>origin/master</code>, <code>origin/HEAD</code> that are pointing the last change in the remote are downstream these two commits. This means that a949e61 and 0a8dfef were created after pulling or cloning from GitHub.
</opt>
<opt text='The commits 6e69947 and 0d5a6f7 exist both in your local computer and on GitHub' correct='true'>
The position of the label <code>origin/master</code> indicates that both these commits are part of this branch on the GitHub remote.
</opt>
</choice>
</exercise>

<exercise id='5' title="Merging branches"  type='slides, video'>
<slides source='module5/module5_03' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='6' title='✍️ Practice: All roads merge to `main`'>


Would you delete a branch after merging it?

<choice id = 6>
<opt text='Yes, to avoid having extra copies of the code that you do not need anymore' >
A branch in Git is a pointer to the previous version of the code, but it does not contain an entire extra copy of the code. 
</opt>
<opt text='Yes, if I am not going to develop more on it' correct='true'>
</opt>
<opt text='No, I could be discarding important information' >
Once the branch has been merged all the information of both branches is combined in a new commit, and therefore no information would be lost when deleting the branch.
</opt>
</choice>

What branches are you merging in this example:


<img src="/module5/module5-terminal.png" alt="terminal"> 


<choice id = 7>
<opt text='the <code>app</code> branch with the <code>fix-app-slider</code> branch' correct='true'>
</opt>
<opt text='the <code>app</code> branch with the <code>main</code> branch'>
How do you know you are in the <code>main</code> branch? Where you can find which branch you are currently working on?
</opt>
<opt text='the <code>fix-app-slider</code> branch with the <code>main</code> branch'>
How do you know you are in the <code>main</code> branch? Where you can find which branch you are currently working on?
</opt>
<opt text='the <code>canadian-languages</code> branch with the <code>app</code> branch'>
Is <code> canadian-languages</code>  referring to a branch? 
</opt>
</choice>
</exercise>

<exercise id='7' title='When merging branches goes social: opening pull requests'  type='slides, video'>
<slides source='module5/module5_04' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='8' title='✍️ Practice: You are cordially invited to review my changes'>

**True or False**

You should be quite sure when creating a pull request because you will not be able add more commits after you create it.

<choice id = 8>
<opt text='True' >
Try open a pull request and pushing new commits and check what happen!
</opt>
<opt text='False' correct='true'>
You can continue adding commits to a pull request by pushing to the branch you used to create it. You will see the commits as a timeline when you open it on GitHub. Try it!
</opt>
</choice>

**True or False**  

It is possible to open a pull request locally

<choice id = 9>
<opt text='True' >
It is possible to <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally">check out a pull request locally to solve a merge conflict or test changes before approving it</a>. If you wanted to created a pull request locally, you would need to use <a href="https://cli.github.com/"> the GitHub CLI</a>.
</opt>
<opt text='False' correct='true'>
You have to enter to your GitHub repository to start a pull request. What you can do locally is to create a new branch and push it to GitHub. Then GitHub will give you the option to start a pull request.
</opt>
</choice>

Is opening a pull request the same as merging a branch locally?

<choice id = 10>
<opt text='Yes, it is the same, you are just merging branches, either using the GitHub UI or your local interface' >
Even if the final goal of the pull request is to merge your changes with another branch, it is also a way to communicate that you created those changes and to involve other team members, for example as reviewers.
</opt>
<opt text='You open a pull request to merge branches when you want to involve your collaborators' correct='true'>
</opt>
</choice>
</exercise>

<exercise id='9' title='Collaborative GitHub workflows: Branching' type='slides, video'>
<slides source='module5/module5_05' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='10' title='✍️ Practice: Branching out'>

In which cases would branching be better than using forks?

<choice id = 11>
<opt text='The owner of the repository have set branch protection rules to the <code>main</code>  branch'>
Even if it is a good practice to avoid that contributors push code directly to the <code>main</code> branch by accident, protecting the branch it is not a requirement to collaborate using branching. 
</opt>
<opt text='You want to work with Pull Requests' >
It is always recommended to use Pull Requests, no matter your collaboration style.
</opt>
<opt text='You have write access to the repository' correct='true'>
If you have not write access it would be impossible to contribute without forking the repository first.
</opt>
</choice>

What of these names are good for branches?

<choice id = 12>
<opt text='arman, florencia, joel'>
Using the names of collaborators as names of branches is not meaningful as it is not providing information about what each member of the team is working on.
</opt>
<opt text='fix-dockerfile, feature-testing, feature-app-modules' correct='true'>
There is not a unique way to do this, you will have to define with your team a rule or follow the criteria of the repository you are contributing.
</opt>
<opt text='1616789, 1235348, 1555684' >
Using only numbers could create confusion when merging the branches. For example, selecting as branch name the issue id that the branch is trying to solve will seem a logical choice, but it is uninformative and could lead to mistakes.
</opt>
</choice>
</exercise>

<exercise id='11' title='Collaborative GitHub workflows: Forking' type='slides, video'>
<slides source='module5/module5_06' shot='0' start='3:42' end='4:35'> </slides>
</exercise>

<exercise id='12' title='✍️ Practice: Forking your repository'>

**True or False**

When working on a forked repository, it is good practice to begin a new branch before submitting a pull request.

<choice id = 13>
<opt text='True' correct='true' >
</opt>
<opt text='False'>
Making the pull request from a branch with a meaningful name will give the pull request's reviewers useful information. If not they will receive changes of <code>main</code> branches from different users.
</opt>
</choice>

**True or False**


After forking a GitHub repository, you should clone the repository's copy in your GitHub account to begin working on it locally. 

<choice id = 14>
<opt text='True'  correct='true'>
You probably don't have write access to the original repository to push modifications directly to it, that is why you have to clone your fork.
</opt>
<opt text='False'>
You will clone, pull, and push to your GitHub account's cloned repository (the fork). Contributions to the original GitHub repository will be made by pul requests from your fork to the original repository. 
</opt>
</choice>

Which of the following statements are True regarding GitHub issues?

<choice id = 15>
<opt text='They are effective at recording decisions that were made, problems that were identified and addressed, and all other communication surrounding the project.'>
This is correct, but so are some other options.
</opt>

<opt text='They are useful in both collaborative and your own private projects.'>
This is correct, but so are some other options.
</opt>

<opt text='You can use GitHub issues for project management to plan and track your work.'>
This is correct, but so are some other options.
</opt>

<opt text='They are only useful for collaborative projects.'>
They are very useful to keep track of tasks and recording your thoughts in individual projects as well.
</opt>

<opt text='All of the above options are correct'>
Not quite.
</opt>

<opt text='The first three options are all correct'>
</opt>

<opt text='The first two options are both correct'>
These are both correct, but so is another option.
</opt>

</choice>

</exercise>

<exercise id="13" title="What did we learn?" type="slides,video">

<slides source="module5/module5_end" shot="0" start="0:002" end="3:40">
</slides>

</exercise>
