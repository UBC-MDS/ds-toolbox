---
type: slides
title: 'module5_04'
---

# Collaborative work with GitHub


---

# Let's work together!


<center>

<img src='/module5/quote.jpg' width="80%" alt="404 image" />

<center/>

Notes: One of the most interesting tools you will fins on GitHub . 

---


# Collaborative work 

There are 2 strategies we can use to work with others:

1. **Branching**

2. **Forks**



Notes: 
There are two major ways to work in a collaborative basis using Git and GitHub: 

1. Exchanging with other colleagues in a reporsitory where all of you can access through an strategy called **branching**.

If you start a new repository with some coworkers and you add them as collaborators, you can avoid this step and directly work using branching. This means that all the contributors can create branches from the main branch. If you think in the analogy we worked in the previous slides, each contributor could be able to create one of more branches with their part of the house (or piece of code / text) that then they will merge to the main project.  


2. Contributing to a repository that you don't have access using a GitHub tool called **fork**.


On the other hand, the use of forks is more common if you want to contribute to open source projects or public online repositories which you don't have write access. 
As an example imagine that you want to contribute to this [multilingual glossary for computing and data science terms](https://glosario.carpentries.org/) created by The Carpentries, an inclusive community willing to teach data and coding skills. If you explore the GitHub repo of the project (https://github.com/carpentries/glosario) you will see a file called `CONTRIBUTING.md` where it is explained how someone can add new terms to the glossary. In general, when you want to contribute to a public repository as this one, you will have to **fork the repository** first. You will create a copy in your GitHub account of the repository at that moment.

Even if 1 and 2 are very different ways of work,  the most common practice before accepting contributions to the `main` branch not matter the strategy you are using involves to open a **pull request** with the proposed changes to the `main` branch and **ask for review** to someone part of the project before accepting those changes.

Now will learn with more detail both strategies and finish this chapter with 





---
# Collaborative work 

There are 2 strategies we can use to work with others:

1. <mark><b> Branching </b></mark>
 
2. **Forks**



Notes: Let's start with branching!



---

# Giving collaborators access to your project

The “Invite a collaborator” button on the GitHub web interface. 
<center>

<img src='/module5/add-collab-1.png' width="80%" alt="404 image" />

<center/>



Notes: As mentioned earlier, GitHub allows you to control who has access to your project. The default of both public and private projects are that only the person who created the GitHub repository has permissions to create, edit and delete files (write access). To give your collaborators write access to the projects, navigate to the “Settings” tab



---

# Giving collaborators access to your project

<center>

<img src='/module5/add-collab-2.png' width="80%" alt="404 image" />

<center/>

Notes: Then click “Manage access” and type in the collaborator’s GitHub username or email, and select their name when it appears.

After this, you should see your newly added collaborator listed under the “Manage access” tab. They should receive an email invitation to join the GitHub repository as a collaborator. **They need to accept this invitation to enable write access**.


---

# Branch protection rules

Under "Branch name pattern", type the branch name or pattern you want to protect. 

<center>

<img src='/module5/add-branch-protection-rule.png' width="80%" alt="404 image" />

<center/>

Notes: Now that all the collaborators have access they can clone the repository and create a branch using a meaningful name with the feature they are willing to work on. Merging the individual branches without socializing it to the other team members could create merging problems. To avoid that, you can set a [branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) in the repository that requires a pull request before merging. We will talk with detail about pull requests later on, but for now you can think about them as specific notifications you will receive when someone is trying to modify the `main` branch. Pull request should be approved before merging in general by other team members.

🙌
To add a branch protection rule you should go to **Settings > Code and Automation (sidebar) > Branch protection rules** and click in **"Add rule"** in your repository. 

---

# Branch protection rules



<center>

<img src='/module5/PR-review-required-updated.png' width="80%" alt="404 image" />

<center/>

Notes:

🙌
Under "Branch name pattern", type the branch name or pattern you want to protect. 
Notice that you can create protect branches different to `main` but we will not cover those cases of use in this tutorial.

---

# Branch protection rules



<center>

<img src='/module5/branches-house-analogy-explained.png' width="80%" alt="404 image" />

<center/>

Notes:

If you think in the analogy of the house, protecting the `main` branch would be similar to avoid creating modifications in the structure of the house meanwhile each member is working in different sections. It is not a good idea to modify the foundation of the house at the same time other team members are working in the walls or windows. If there are changes in the house's foundation there could be problems when combining the parts, including the risk of collapsing the house.

In your repository this means that you should be sure that code in `main`, also called the production branch, is high quality code without bugs or other run problems. Each time you accept merging a contribution of another team member in `main` be sure that the code is doing what is expected and it is well documented. This way you will always have stable and well build code that runs propoperly in your `main` branch. This ensures that you are producing code collaboratively in an organized way.

⚠️ Remember to share with other team members that you have stablish this dynamic of work in the repository

We are ready to start collaborating!

---

# Branching basic workflow

1. **Clone the project** - To work locally
2. **Create your branch** - Create code or apply your changes
3. **Push your changes and create a pull request** - This will create a pull request to be approved by other team member.

*Remember to pull the changes before start working in the repository*

Notes: Giving access to your collaborators to your repository is mandatory to collaborate using branches. Protecting the main branch it is consider a good practice but experienced users that are very familiar with the workflow could not use this at all.

The workflow will be the same that we have learned before, cloning, adding to the staging area, committing the changes and pushing to the repo with the only difference you will have to create a pull request. Merge conflicts could happen and you can use the strategies you have learned in the past chapters.

Before moving forward, we are going to explain other very useful tool that is key when working on GitHub to communicate with other team members or general public exploring your repository: github issues






---

# Extra: Communicating using GitHub issues

The “Issues” tab on the GitHub web interface

<center>

<img src='/module5/issue-1.png' width="80%" alt="404 image" />

<center/>

Notes: When working on a project in a team, you don’t just want a historical record of who changed what file and when in the project—you also want a record of decisions that were made, ideas that were floated, problems that were identified and addressed, and all other communication surrounding the project. Email and messaging apps are both very popular for general communication, but are not designed for project-specific communication: they both generally do not have facilities for organizing conversations by project subtopics, searching for conversations related to particular bugs or software versions, etc.



🙌
To open a GitHub issue, first click on the “Issues” tab 

---

# Extra: Communicating using GitHub issues

Dialog boxes and submission button for creating new GitHub issues.
<center>

<img src='/module5/issue-2.png' width="80%" alt="404 image" />

<center/>

Notes: GitHub issues are an alternative written communication medium to email and messaging apps, and were designed specifically to facilitate project-specific communication. Issues are opened from the “Issues” tab on the project’s GitHub page, and they persist there even after the conversation is over and the issue is closed (in contrast to email, issues are not usually deleted). One issue thread is usually created per topic, and they are easily searchable using GitHub’s search tools. All issues are accessible to all project collaborators, so no one is left out of the conversation. Finally, issues can be set up so that team members get email notifications when a new issue is created or a new post is made in an issue thread. Replying to issues from email is also possible. Given all of these advantages, we highly recommend the use of issues for project-related communication.


🙌
To open a GitHub issue, first click on the “Issues” tab 

---

# Extra: Communicating using GitHub issues

The “Closed” issues tab on the GitHub web interface. 

<center>

<img src='/module5/issue-3.png' width="80%" alt="404 image" />

<center/>

🙌
When a conversation is resolved, you can click “Close issue.” The closed issue can be later viewed by clicking the “Closed” header link in the “Issue” tab


---

# Let's work together!

