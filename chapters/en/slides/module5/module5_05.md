---
type: slides
title: 'module5_05'
---

# Collaborative work with GitHub


---

## Let's work together!


<center>

<img src='/module5/quote.jpg' width="80%" alt="404 image" />

<center/>

Notes:
We have already seen some ways in which Git and GitHub allow collaboration with others. In this module we will go in a more in depth on good collaborative practices for version control.

---


### Collaborative work 

There are two main strategies we can use to work with others:

1. **Branching**

2. **Forking**



Notes: 
There are two major ways to work in a collaborative basis using Git and GitHub: 

1. Working with colleagues in a repository where all of you are members with permission to push code to the repository. We call this strategy **branching**.

If you start a new repository with some coworkers and you add them as collaborators, you can all contribute to it using branching. This means that all the contributors can create branches from the `main` branch. If you think in the analogy we worked in the previous slides, each contributor could be able to create one or more branches with their part of the house (or piece of code / text) that then they will merge to the `main` branch of the project.  


2. Contributing to a repository that you don't have access using a GitHub tool called **forking**.


The use of forks is common when you want to contribute online repositories where you don't have write access, such as open source projects led by someone else.
As an example imagine that you want to contribute to this [multilingual glossary for computing and data science terms](https://glosario.carpentries.org/) created by The Carpentries, an inclusive community willing to teach data and coding skills. If you explore the GitHub repo of the project (https://github.com/carpentries/glosario) you will see a file called `CONTRIBUTING.md` where it is explained how someone can add new terms to the glossary. In general, when you want to contribute to a public repository as this one, you will have to **fork the repository** first because you don't have write access. Forking it allow you to create a copy in your GitHub account of the repository at that moment.

---
## Collaborative work 

There are two main strategies we can use to work with others:

1. <mark><b> Branching </b></mark>
 
2. **Forking**



Notes: Regardless of whether you are collaborating via branching or forking, the most common practice before accepting contributions to the `main` branch involves opening a **pull request** with the proposed changes and **ask for a review** before merging those changes.

In the next slide deck we will focus on forking, but let's start by learning about the branching strategy first!


---

## Giving collaborators access to your project

The “Invite a collaborator” button on the GitHub web interface. 
<center>

<img src='/module5/add-collab-1.png' width="80%" alt="404 image" />

<center/>



Notes: As mentioned earlier, GitHub allows you to control who has access to your project. The default of both public and private projects are that only the person who created the GitHub repository has permissions to create, edit and delete files (write access). To give your collaborators write access to the projects, navigate to the “Settings” tab and click "Invite a collaborator".



---

## Giving collaborators access to your project

<center>

<img src='/module5/add-collab-2.png' width="80%" alt="404 image" />

<center/>

Notes: Then click “Manage access” and type in the collaborator’s GitHub username or email, and select their name when it appears.

After this, you should see your newly added collaborator listed under the “Manage access” tab. They should receive an email invitation to join the GitHub repository as a collaborator. **They need to accept this invitation to enable write access**.


---

## Branch protection rules

Under "Branch name pattern", type the branch name or pattern you want to protect. 

<center>

<img src='/module5/add-branch-protection-rule.png' width="80%" alt="404 image" />

<center/>

Notes: Now that all the collaborators have access they can clone the repository and create a branch using a meaningful name with the feature they are willing to work on. If some of the collaborators push to `main` without communicating it to the other team members first could it create merging problems. To reduce that risk, you can set up a [branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) in the repository, which requires a pull request before merging any code into the protected branch.

🙌
To add a branch protection rule you can go to **Settings > Code and Automation (sidebar) > Branch protection rules** and click in **"Add rule"**. 

---

# Branch protection rules



<center>

<img src='/module5/PR-reviews-required-updated.png' width="80%" alt="404 image" />

<center/>

Notes:

🙌
Under "Branch name pattern", type the branch name or pattern you want to protect. 
Notice that you can create protect branches different to `main` but we will not cover those use cases in this tutorial.

---

## Branch protection rules

<center>

<img src='/module5/branches-house-analogy-explained.png' width="80%" alt="404 image" />

<center/>

Notes:

If you think in the analogy of the house, protecting the `main` branch would be similar to avoid creating modifications in the foundation of the house meanwhile each member is working in different sections. This makes sense since any changes in the house's foundation could give rise to problems when combining the parts, including the risk of collapsing the house.

In your repository this means that you should be sure that code in `main`, also called the production branch, is high quality code without bugs or other run problems. Each time you accept merging a contribution of another team member in `main` be sure that the code is doing what is expected and it is well documented. This way you will always have stable and well build code that runs propoperly in your `main` branch. This ensures that you are producing code collaboratively in an organized way.

Using branch protection rules is a team decision that could prevent mistakes of pushing to the `main` branch without notifying your colleagues. If you made only minor edits the team might let you merge these to `main` locally and then push up the updated `main` branch (or even let you not create a branch in the first place).

⚠️ Remember to get the input from other team members before deciding to implement branch protection, so that everyone in your team is on the same page.

We are ready to start collaborating!


---

## How pull requests look like after you protect the branch
<center>

<img src='/module5/PR-aprove.png' width="80%" alt="404 image" />

<center/>

Notes: This means that when you are doing a pull request you will need the approval of a team member before can merge your pull request.

---

## Branching basic workflow

1. **Clone the project** - To work locally
2. **Create your branch** - Create code or apply your changes
3. **Push your changes and create a pull request** - This will create a pull request to be approved by another team member.

*Remember to pull the changes before starting to work in the repository*

Notes: Giving your collaborators access to your repository is mandatory to collaborate using branches. Protecting the main branch is considered good practice but experienced users that are very familiar with the workflow could opt to not use this strategy.

The workflow will be the same that we have learned before, cloning, adding to the staging area, committing the changes and pushing to the repo with the only difference being that you will have to create a pull request. Merge conflicts could happen and you can use the strategies you have learned in the past chapters to resolve them.

Before moving forward, we are going to explain another very useful tool that is key when working on GitHub to communicate with other team members or general public exploring your repository: GitHub issues


---

## Extra: Communicating using GitHub issues

The “Issues” tab on the GitHub web interface

<center>

<img src='/module5/issue-1.png' width="80%" alt="404 image" />

<center/>

Notes: When working on a project in a team, you don’t just want a historical record of who changed what file and when in the project—you also want a record of decisions that were made, ideas that were floated, problems that were identified and addressed, and all other communication surrounding the project. Email and messaging apps are both very popular for general communication, but are not designed for project-specific communication: they often lack functionality for organizing conversations by project subtopics, searching for conversations related to particular bugs or software versions, etc.



🙌
To open a GitHub issue, first click on the “Issues” tab 

---

## Extra: Communicating using GitHub issues

Dialog boxes and submission button for creating new GitHub issues.
<center>

<img src='/module5/issue-2.png' width="80%" alt="404 image" />

<center/>

Notes: GitHub issues are an alternative written communication medium to email and messaging apps, and were designed specifically to facilitate project-specific communication. Issues are opened from the “Issues” tab on the project’s GitHub page, and they persist there even after the conversation is over and the issue is closed (in contrast to email, issues are not usually deleted). One issue thread is usually created per topic, and they are easily searchable using GitHub’s search tools. 

All issues are accessible to all project collaborators, so no one is left out of the conversation. If someone mention your name with the syntax `@yourname`, you will get a notification. If you want to be notified about all new issues and pull requests you can click the little eye icong in the top right corner that says "Watch". Replying to issues from email is also possible. Given all of these advantages, we highly recommend the use of issues for project-related communication.


🙌
To open a GitHub issue, first click on the “Issues” tab 

---

## Extra: Communicating using GitHub issues

The “Closed” issues tab on the GitHub web interface. 

<center>

<img src='/module5/issue-3.png' width="80%" alt="404 image" />

<center/>

Notes: 
🙌
When a conversation is resolved, you can click “Close issue.” The closed issue can be later viewed by clicking the “Closed” header link in the “Issue” tab


---

# Let's work together!

