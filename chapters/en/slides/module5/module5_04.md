---
type: slides
title: 'module5_04'
---


# When merging branches goes social: Opening a pull request

---

## When merging branches goes social

<br>
<br>
<br>
<br>
<br>

>*"When I first started we all pushed to one branch, but the problem is you push and nobody knows what changes are going through and there is no chance for a review. Our current system is that you don’t make any changes without submitting a **pull request**[...]and then one or more members will review it and you need one thumbs up from another team member to merge it, otherwise it can’t go in.”*


<a href="http://thesegalgroup.org/wp-content/uploads/2014/04/code-centric.pdf">Kalliamvakou, E. (2014). The Code-Centric Collaboration Perspective: Evidence from GitHub.</a>



Notes: 

Pull requests involve merging someone else's changes into your code. They are essential for team collaboration and proper pull request review is critical for for ensuring code quality.

In the previous part, we did not push our feature branch to GitHub. Instead, we finished the development of this branch locally and merged it into our `main` branch using JupyterLab GUI or the command `git merge`.

If we would have worked in a team of people, it would have been good practice to have first push the branch to GitHub, and then creat a pull request to let the other people on the team review the code and suggested any changes before merging it in.


---

# Opening a pull request (GitHub)

<center>

<img src='/module5/PR.png' width="100%" alt="404 image" />

<center/>


Notes: To create a pull request, you have to push the changes in your branch to GitHub. After doing so, a yellow banner will appear at the top of the repository interface on GitHub and you can click the green button that says "Compare and pull request". In the new page, add a message to describe the changes you have made, scroll down to review the changed files, and the click the green button that reads "Create pull request".

Congrats! You have made your first Pull Request on GitHub!

---

# Opening a pull request (GitHub)

<center>

<img src='/module5/PR-2.png' width="100%" alt="404 image" />

<center/>


Notes: As general rule you are going to be opening pull requests from your feature branch with the `main` branch as the "base", but GitHub allows you to change the base branch (the leftmost arrow in the slide) and the branch to pull the changes from (the right most arrow in the slide).

You can write a title for the pull request and description. Remember that you can use Markdown to format the message content. You can use the tab **Preview** to view what the rendered Markdown will look like before creating the pull request.

In the body of the message you can also indicate if it is fixing a currently open issue by typing `/close #1` to close issue number 1 (pull requests and issues use the same numbering system, so if there is already an open issue, the first PR would be get the number 2).


---
# Opening a pull request (GitHub)

<center>

<img src='/module5/PR-2.png' width="100%" alt="404 image" />

<center/>


Notes:
Once you have open a pull request you can continue to add commits by pushing to your feature branch on GitHub. This means that you can open the pull request before finishing the work and doing so is a way to communicate that you are preparing changes to merge in `main` (or another branch) that will need review. The commits will appear in chronological order.



---
# Opening a pull request (GitHub)

<center>

<img src='/module5/PR3.png' width="80%" alt="404 image" />

<center/>

Notes:

The next step is for the upstream repo maintainers to review your work and merge it in if they approve it. You have the option of assigning someone to a pull request and/or designating the parson as reviewer.

 
- **Reviewers**: You can choose anyone who can help from the list of prior authors that GitHub will offer as reviewers for that code. A review request will be sent to the reviewers and you will obtain a notification and email once they have submitted their feedback. If you are working with a team you will probably define guidelines for which team member reviews which PRs.

- **Assign**: Assigning someone to the pull request is less strict, basically you can assign anyone that you want. Good reasons to assign someone to a project could be that for  merging the pull request you prefer someone different from the reviewer and/or that you prefer assigning someone else (you can even assign yourself!) to solve the reviewer's comments.

If you are working with a team probably you will define how to designate reviewers and assign different team members in relation to your workflow.


You can reference a pull request or issue in GitHub's Markdown syntax by typing `#` followed by the number of the PR. e.g. "Please see PR #1 for a fix to this issue".
In this case this is the first pull request of the project so it is numbered #1, as you can see next to the title in the screenshot.
Another useful thing that you can do is to **label** each pull request, they can help you by grouping similar pull requests together, e.g. "Bug fixes", "Enhancements", etc.


---
# Pull request successfully merged and closed (GitHub)

<center>

<img src='/module5/PR-delete-branch.png' width="80%" alt="404 image" />

<center/>

Notes:
After you successfully merge the pull request GitHub gives you the option to delete the branch via the web interface. This is always safe to do, as the deleted branches can easily be restored later.


---


# Let's apply what we learned!