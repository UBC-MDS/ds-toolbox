---
type: slides
title: 'module5_04'
---


# When merging branches goes social: Opening a pull request

---

# When merging branches goes social

<br>
<br>
<br>
<br>
<br>

>*"When I first started we all pushed to one branch, but the problem is you push and nobody knows what changes are going through and there is no chance for a review. Our current system is that you don’t make any changes without submitting a **pull request**[...]and then one or more members will review it and you need one thumbs up from another team member to merge it, otherwise it can’t go in.”*


<a href="http://thesegalgroup.org/wp-content/uploads/2014/04/code-centric.pdf">Kalliamvakou, E. (2014). The Code-Centric Collaboration Perspective: Evidence from GitHub.</a>



Notes: 

Pull requests are essential for team communication and are also a need for ensuring the code's quality.

In the previous part, we did not push our feature branch to GitHub. Instead, we finished the development of this branch locally and merged it into our `main` branch using JupyterLab GUI or the command `git merge`. If we would have worked on a team of people, it would have been good practice to have first pushed the branch to GitHub, and then created a pull request to let the other people on the team review the code and suggested any changes before merging it in.


---

# Opening a pull request (GitHub)

<center>

<img src='/module5/PR.png' width="100%" alt="404 image" />

<center/>


Notes: To create a pull request, you have to push the changes in your branch to GitHub. A ywllow banner will apper on the repository. You should click the green button "Compare and pull request". In the new page, add a message to describe the changes you have made, scroll down to review the changed files, and the click the green button that reads "Create pull request". 

---

# Opening a pull request (GitHub)

<center>

<img src='/module5/PR-2.png' width="100%" alt="404 image" />

<center/>


Notes: As general rule you are going to be doing pull requests to the `main` branch, but GitHub allows you to select the branches to merge in case you would like to select another one.

You can write a title for the pull request and description. Remember that you can use Markdown to give format to that message. You can use the tab **Preview** to have a look before creating the pull request.

In the body of the message you can also indicate if it is fixing a currently open issue by typing /close #1 to close issue number 1 (pull requests and issues use the same numbering system, so if there is already an open issue, the first PR would be get the number 2).


---
# Opening a pull request (GitHub)

<center>

<img src='/module5/PR-2.png' width="100%" alt="404 image" />

<center/>


Notes:
Once you have open a pull request you can continue to add commits pushing to the branch you use to iniciate it. This means that you can open the pull request before finishing the work. Anyway, opening a pull request is a way to socialize that you are preparing changes to merge in `main` (or other branch) that will need review. These commits will appear in chronological order.



---
# Opening a pull request (GitHub)

<center>

<img src='/module5/PR3.png' width="80%" alt="404 image" />

<center/>

Notes:

The next step is for the upstream repo maintainers to review your work and merge it in if they approve it. You have the option of assigning someone to a pull request and/or designating the parson as reviewer.

 
- **Reviewers**: You can choose anyone who can help from the list of prior authors that GitHub will offer as reviewers for that code. A review request will be sent to the reviewers. GitHub will automatically suggest you as reviewers past authors of that code (if existent), but you can select anyone. You will obtain their final approval and feedback once they completed it.

- **Assign**: Assigning someone to the pull request is less strict, basically you can assign anyone that you want. Good reasons to assign someone to a project could be that for  merging the pull request you prefer someone different from the reviewer and/or that you prefer assigning someone else (you can even assign yourself!) to solve the reviewer's comments.

If you are working with a team probably you will define how to designate reviewers and assign different team members in relation to your workflow.

Other useful thing that you can do it is to include **labels**, they can help you to easily classify what your pull request is solving/adding. All the open pull request will be shown in the tab **Pull requests** of the repository.

You can reference this pull request when typing Markdown in a **GitHub issues** by typing # followed by the number of the PR. e.g. "Please see PR #1 for a fix to this issue".
In this case this is the first pull request of the project so it is numbered #1, as you can see next to the title.  


---
# Pull request successfully merged and closed (GitHub)

<center>

<img src='/module5/PR-delete-branch.png' width="80%" alt="404 image" />

<center/>

Notes:
After you succesfully merge the pull request GitHub gives you the option to delete the branch automatically if you are not going to be working in that feature anymore.


---


# Let's apply what we learned!