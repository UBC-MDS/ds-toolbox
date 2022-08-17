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

We've already seen how Git and GitHub 
facilitate collaboration with others.
This module will go over good collaborative practises 
for version control in greater detail.


---


### Collaborative work 

There are two main strategies we can use to work with others:

1. **Branching**

2. **Forking**



Notes: 
There are two major ways 
to work in a collaborative basis using Git and GitHub: 

1. Collaborating with colleagues in a repository where you are all members with the ability to push code to the repository.
This strategy is known as **branching**.

If you start a new repository 
with some coworkers and
you add them as collaborators,
you can all contribute to it by branching.
This means that all the contributors 
have the ability to create branches from the `main` branch.
Using the analogy from the previous slides, 
each contributor may be able to create one or more branches 
with their part of the house (or piece of code / text),
which they will then merge into the project's'main' branch.
 
2. Making contributions to a repository to which you do not have access. You can do this by using the GitHub tool **forking**.

Forks are commonly used 
when you want to contribute to online repositories
where you don't have write access, 
such as open source projects led by someone else.

As an example imagine that you want to 
contribute to this [multilingual glossary for computing and data science terms](https://glosario.carpentries.org/) 
created by The Carpentries, 
an inclusive community willing to teach data and coding skills. 
If you look through the project's GitHub repo (https://github.com/carpentries/glosario), 
you'll find a file called `CONTRIBUTING.md` that
explains how to add new terms to the glossary.
In general, 
if you want to contribute to a public repository like this one,
you must first **fork the repository** 
because you lack write access.
Forking it allows you to 
create a copy of the repository 
in your GitHub account at that time. 

---
## Collaborative work 

There are two main strategies we can use to work with others:

1. <mark><b> Branching </b></mark>
 
2. **Forking**



Notes: 

Whether you're branching or forking,
the most common practise before accepting contributions to the `main` branch 
is to open a **pull request** with the proposed changes and
**ask for a review** before merging those changes.


We'll talk about forking in the next slide deck,
but first let's learn about the branching strategy! 


---

## Giving collaborators access to your project

The “Invite a collaborator” button on the GitHub web interface. 
<center>

<img src='/module5/add-collab-1.png' width="80%" alt="404 image" />

<center/>



Notes: 

As mentioned earlier,  
GitHub allows you to manage 
who has access to your project.
By default, 
only the person who created the GitHub repository
has permission to create, edit, and delete files 
in both public and private projects (write access).
Navigate to the "Settings" tab and click "Invite a collaborator" 
to grant your collaborators write access to the projects.



---

## Giving collaborators access to your project

<center>

<img src='/module5/add-collab-2.png' width="80%" alt="404 image" />

<center/>

Notes: 

Then, under "Manage access"
enter the collaborator's GitHub username or email address,
and then select their name when it appears.


After that, 
your newly added collaborator 
should be listed under the "Manage access" tab.
They should receive an email inviting them
to become collaborators on the GitHub repository.
**They must accept this invitation in order to enable write access**.

---

## Branch protection rules

Under "Branch name pattern", type the branch name or pattern you want to protect. 

<center>

<img src='/module5/add-branch-protection-rule.png' width="80%" alt="404 image" />

<center/>

Notes: 

Now that all the collaborators have access,
they can clone the repository and 
create a branch using a meaningful name with 
the feature they are willing to work on.
If some of the collaborators push to `main` 
without first informing to the other team members,
it may couse merging problems. 
To reduce that risk,
you can set up a [branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) in the repository, 
which requires a pull request 
before merging any code into the protected branch.

🙌
To add a branch protection rule 
you navigate to **Settings > Code and Automation (sidebar) > Branch protection rules** and
select **"Add rule"**. 

---

# Branch protection rules



<center>

<img src='/module5/PR-reviews-required-updated.png' width="80%" alt="404 image" />

<center/>

Notes:

🙌
Type the branch name or pattern 
you want to protect under "Branch name pattern."

You can protect branches other than `main`,
but we won't go over that in this tutorial.


---

## Branch protection rules

<center>

<img src='/module5/branches-house-analogy-explained.png' width="80%" alt="404 image" />

<center/>

Notes:

In the analogy of a house, 
protecting the `main` branch is analogous 
to avoiding changes to the foundation of the house
while each member is working in different sections.
This makes sense because
any changes in the foundation of the house 
could cause problems when combining the parts,
including the risk of the house collapsing. 

This means that in your repository,
you should ensure that the code in `main`,
also known as the production branch, 
is of high quality and free of bugs or other runtime issues.
When you accept merging another team member's contribution into `main`,
make sure the code is performing as expected and is well documented.
This way, your `main` branch
will always have stable and well-built code that runs properly.
This ensures that you are producing code collaboratively and in a structured manner.

Using branch protection rules 
is a team decision that 
can help prevent mistakes such as 
pushing to the `main` branch 
without informing your colleagues.
If you only made minor changes,
the team may allow you to merge these to `main`
locally before pushing up the updated `main` branch
(or even let you not create a branch in the first place).


Remember to solicit feedback from other team members
before deciding to implement branch protection
to ensure that every member of your team is on the same page.


We are ready to start working together! 


---

## How pull requests look like after you protect the branch
<center>

<img src='/module5/PR-aprove.png' width="80%" alt="404 image" />

<center/>

Notes: 

After setting the branch protection rule, 
you are opening a pull request 
you will need the approval of a team member 
before it can be merged.



---

## Branching basic workflow

1. **Clone the project** - To work locally
2. **Create your branch** - Create code or apply your changes
3. **Push your changes and create a pull request** - This will create a pull request to be approved by another team member.

*Remember to pull the changes before starting to work in the repository*

Notes: 

Giving your collaborators access to your repository 
is required in order to collaborate using branches.
Protecting the main branch is considered good practise,
but experienced users who are very familiar 
with the workflow may choose not to use this strategy.

The workflow will be the same as before, 
cloning, adding to the staging area,
committing the changes, and pushing to the repo,
with the only difference being that you will need to create a pull request.
Merge conflicts may arise, 
and you can use the strategies you learned in previous chapters to resolve them.

Before proceeding, 
we will discuss another very useful tool that is essential when 
working on GitHub to communicate with
other team members or the general public. 


---

## Extra: Communicating using GitHub issues

The “Issues” tab on the GitHub web interface

<center>

<img src='/module5/issue-1.png' width="80%" alt="404 image" />

<center/>

Notes: 

When working on a project in a team, 
you don’t just want a historical record of
who changed what file and when in the project
you also want a record of decisions that were made,
ideas that were floated, 
problems that were identified and addressed, 
and all other communication surrounding the project.
Email and messaging apps are both very popular 
for general communication, but are not designed 
for project-specific communication:
they often lack functionality for organizing conversations by
project subtopics, searching for conversations related 
to particular bugs or software versions, etc.



🙌
To open a GitHub issue, first click on the “Issues” tab 

---

## Extra: Communicating using GitHub issues

Dialog boxes and submission button for creating new GitHub issues.
<center>

<img src='/module5/issue-2.png' width="80%" alt="404 image" />

<center/>

Notes: 

GitHub issues are an alternative written communication medium 
to email and messaging apps, 
and were designed specifically to facilitate project-specific communication. 
Issues are opened from the **“Issues”** tab on the project’s GitHub page,
and they persist there even after the conversation
is over and the issue is closed 
(in contrast to email, issues are not usually deleted). 
One issue thread is usually created per topic, 
and they are easily searchable using GitHub’s search tools. 

All issues are accessible to all project collaborators, 
so no one is left out of the conversation.
If someone mention your name with the syntax `@yourname`,
you will get a notification.
If you want to be notified about all new issues and
pull requests you can click the little eye icon
in the top right corner that says "Watch". 
Replying to issues from email is also possible. 
Given all of these advantages, 
we highly recommend the use of issues for project-related communication.


🙌
To open a GitHub issue, first click on the **“Issues”** tab 

---

## Extra: Communicating using GitHub issues

The “Closed” issues tab on the GitHub web interface. 

<center>

<img src='/module5/issue-3.png' width="80%" alt="404 image" />

<center/>

Notes: 
🙌
When a conversation is finished, 
click "Close issue."
The resolved issue
can be accessed at any time
by clicking the "Closed" header link in the "Issue" tab. 


---

# Let's work together!

