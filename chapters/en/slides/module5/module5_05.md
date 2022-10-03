---
type: slides
title: 'module5_05'
---

# Collaborative GitHub workflows: Branching

Notes:
In this slide deck we will learn more about how to collaborate effectively on GitHub.

---

## Let's work together!

<br>
<br>

<center>

<img src='/module5/quote.jpg' width="700px" alt="404 image" />

</center>

Notes:
We have already seen some ways in which Git and GitHub allow collaboration with others. 
Here we will dive more in depth into which collaborative workflows are the most effective
when multiple people are contributing code to the same repository.

---

## Branching and forking

There are two main strategies we can use to work with others:

1. **Branching**

2. **Forking**

Notes:
There are two major ways to work in a collaborative basis using Git and GitHub: 

1. Working with colleagues in a repository where all of you are members with permission to push code. We call this strategy **branching**.

If you start a new repository with some coworkers and you add them as collaborators, 
you can all contribute to it using branching. 

1. Contributing to a repository that you don't have access to using a GitHub tool called **forking**.

The use of forks is common when collaborating on online repositories where you don't have write access, such as open source projects led by someone else.

As an example imagine that you want to contribute to this [multilingual glossary for computing and data science terms](https://glosario.carpentries.org/) created by The Carpentries, an inclusive community willing to teach data and coding skills.

If you explore the GitHub repo of the project (https://github.com/carpentries/glosario) you will see a file called `CONTRIBUTING.md` where it is explained how someone can add new terms to the glossary. 

In general, when you want to contribute to a public repository as this one, you will have to **fork the repository** first because you don't have write access. Forking it allow you to create a copy in your GitHub account of the repository at that moment.

---

## Collaborative work

There are two main strategies we can use to work with others:

1. <mark><b> Branching </b></mark>

2. **Forking**

Notes:
In the next slide deck we will focus on forking, but let's start by learning about the branching strategy first!

Before we dive in,
remember that regardless of whether you are collaborating via branching or forking, the most common practice before accepting contributions to the `main` branch involves opening a **pull request** with the proposed changes and **ask for a review** before merging those changes.

---

## Giving collaborators access to your project

The “Invite a collaborator” button on the GitHub web interface.

<center>

<img src='/module5/github-colab.png' width="700px" alt="404 image" />

</center>



Notes:
When working with a branching workflow,
all collaborators need to have "write access" to the remote repository
so that they can push up their branches to GitHub.
As mentioned earlier, GitHub allows you to control who has access to your project. 
The default of both public and private projects 
are that only the creator of the GitHub 
repository has permissions to create, edit and delete files (write access).
Go to the "Settings" tab if your repostiroy on GitHub and select "Collaborators"
There, you must click the green "Add people" button.

---

## Giving collaborators access to your project

<br>
<br>

<center>

<img src='/module5/github-colab-select.png' width="700px" alt="404 image" />

</center>

Notes:
Then type in the collaborator’s GitHub username or email, and select their name when it appears.

After this, you should see your newly added collaborator listed under the “Manage access” tab. They should receive an email invitation to join the GitHub repository as a collaborator. **They need to accept this invitation to enable write access**.


---

## Branch protection rules

Under "Branch name pattern", type the branch name or pattern you want to protect. 

<center>

<img src='/module5/branch-protection-rule-github.png' width="700px" alt="404 image" />

</center>

Notes:
Now that everyone has access, they can clone the repository and create a branch using a meaningful name with the feature they are willing to work on. If some of the collaborators push to `main` without communicating it to the other team members first could it create merging problems. To reduce that risk, you can set up a [branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) in the repository, which requires a pull request before merging any code into the protected branch.

🙌
To add a branch protection rule you can go to **Settings > Code and Automation (sidebar) > Branch protection rules** and click  **"Add rule"**. 


🙌
Under "Branch name pattern", type the branch name or pattern you want to protect. 
Notice that you can create protect branches different to `main` but we will not cover those use cases in this tutorial.

---

## Branch protection rules

<br>
<br>


<center>

<img src='/module5/house-analogy-explained-new.png' width="700px" alt="404 image" />

</center>

Notes:

If you think in the analogy of the house, protecting the `main` branch would be similar to avoid creating modifications in the foundation of the house meanwhile each member is working in different sections. This makes sense since any changes in the house's foundation could give rise to problems when combining the parts, including the risk of collapsing the house.

In your repository, this means that you should be sure that code in `main`, also called the production branch, is high quality code without bugs or other run problems. Each time you accept merging a contribution of another team member in `main` be sure that the code is doing what is expected and it is well documented. This way you will always have stable and well build code that runs propoperly in your `main` branch. This ensures that you are producing code in an organized way.

Using branch protection rules is a team decision that could prevent the error of pushing to the `main` branch without notifying your colleagues. If you made only minor edits the team might let you merge these to `main` locally and then push up the updated `main` branch (or even let you not create a branch in the first place).

⚠️ Remember to get the input from other team members before deciding to implement branch protection, so that everyone in your team is on the same page.



---

## How pull requests look like after you protect the branch

<br>

<center>

<img src='/module5/PR-blocked.png' width="600px" alt="404 image" />

</center>

Notes:
This is how pull requests look like after you protect the branch. You will need the approval of a team member before you can merge the pull request.

---

## A basic branching workflow

1. **Clone the project** - To work locally.
2. **Create your branch** - Create code or apply your changes.
3. **Make the desired modifications** - Adding a new feature, fixing a bug, etc.
4. **Push your changes** - This will upload your branch to GitHub
5. **Create a pull request** - So that your changes can be reviewed by another team member.

*Remember to pull the changes before starting to work in the repository*

Notes:
Giving your collaborators access to your repository is mandatory to collaborate using branches. Protecting the main branch is considered good practice but experienced users that are very familiar with the workflow could opt to not use this strategy.

The workflow will be the same that we have learned before, cloning, adding to the staging area, committing the changes and pushing to the repo with the only difference being that you will have to create a pull request. Merge conflicts could happen and you can use the strategies you have learned in the past modules to resolve them.


We are ready to start collaborating!

---

# Let's work together!

