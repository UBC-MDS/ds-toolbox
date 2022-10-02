---
type: slides
title: 'module5_04'
---

<style>
blockquote {
    margin: 0;
    padding: 0 1em;
    color: #57606;
    border-left: .25em solid #d0d7de;
}
</style>

# When merging branches goes social: Opening a pull request

Notes:
In this slide deck, we will learn how to merge branches in a collaborative setting via pull requests.

---

## When merging branches goes social

<br>
<br>
<br>
<br>

> When I first started we all pushed to one branch, but the problem is you push and nobody knows what changes are going through and there is no chance for a review. Our current system is that you don’t make any changes without submitting a <strong>pull request</strong>[...]and then one or more members will review it and you need one thumbs up from another team member to merge it, otherwise it can’t go in.

&mdash; <a href="http://thesegalgroup.org/wp-content/uploads/2014/04/code-centric.pdf">Kalliamvakou, E. (2014). The Code-Centric Collaboration Perspective: Evidence from GitHub.</a>

Notes:
Pull requests involve merging someone else's changes into your remote repository on GitHub. They are essential for team collaboration and proper pull request review is critical for for ensuring code quality.

In the previous part, we did not push our feature branch to GitHub. Instead, we finished the development of this branch locally and merged it into our `main` branch using JupyterLab GUI or the command `git merge`.

If we would have worked in a team of people, it would have been good practice to have first push the branch to GitHub, and then create a pull request to let the other people on the team review the code and suggested any changes before merging it in.

---

## Opening a pull request

<br>

<center>

<img src='/module5/PR-compare-and-pull.png' width="800px" alt="404 image" />

</center>

Notes:
To create a pull request, you have to push the changes in your branch to GitHub. After doing so, a yellow banner will appear at the top of the repository interface on GitHub and you can click the green button that says "Compare and pull request".

---

## Opening a pull request

<br>

<center>

<img src='/module5/PR-compare-branches.png' width="800px" alt="404 image" />

</center>

Notes:
After clicking "Compare and pull request",
you will be taken to a screen that looks like the screenshot in this slide.
The dropdown menus on top indicate the branches the pull request is related to.
As general rule you are going to be opening pull requests from your feature branch with the `main` branch as the "base", but GitHub allows you to change the base branch (the leftmost arrow in the slide) and the branch to pull the changes from (the right most arrow in the slide).

You should include a descriptive title for your pull request and elaborate on your suggested changes in the comment section. Remember that you can use Markdown to format the message content and that you can use the tab **Preview** to view what the rendered Markdown will look like before creating the pull request.

In the body of the message you can also indicate if it is fixing a currently open issue by typing `/close #1` to close issue number 1 (pull requests and issues use the same numbering system, so if there is already an open issue, the first PR would be get the number 2).

---

## Opening a pull request

<br>

<center>

<img src='/module5/PR-reviewers-labels.png' width="800px" alt="404 image" />

</center>

Notes:

The next step is for the upstream repo maintainers to review your work and merge it in if they approve it. You have the option of assigning someone to a pull request and/or designating the parson as reviewer.

- **Reviewers**: You can choose anyone who can help from the list of prior authors that GitHub will offer as reviewers for that code. A review request will be sent to the reviewers and you will obtain a notification and email once they have submitted their feedback. If you are working with a team you will probably define guidelines for which team member reviews which PRs.

Another useful thing that you can do is to **label** each pull request, they can help you by grouping similar pull requests together, e.g. "Bug fixes", "Enhancements", etc.

---

## Opening a pull request

<br>

<center>

<img src='module5/PR-draft-conversion.png' width="800px" alt="404 image" />

</center>


Notes:

Once you have open a pull request you can continue to add commits by pushing to your feature branch on GitHub (the commits will appear in chronological order). This means that you can open the pull request before finishing the work and doing so is a way to communicate that you are preparing changes to merge in `main` (or another branch) that will need review.

Until the PR is ready for review, you can open it as a "Draft" by clicking the dropdown arrow on the green button that says "Create Pull Request" and mark it as "Ready for review" later.



---

## Pull request successfully merged and closed

<br>
<br>

`git push <remote> --delete <branch>`
<center>

<img src='/module5/PR-delete-branch-github.png' width="700px" alt="404 image" />

</center>

Notes:
After a collaborator has reviewed your changes and approved the pull request,
they or you can click the `Merge` button and accept the pull request
GitHub will offer you  
to delete the branch via the web interface.
To do this you should click `Delete branch` button.

Pay attention to the fact that deleting a remote branch 
won't affect the local branch `report` in your local repository. 
Instead, the label `origin/report` will disappear from
your `git log`or project history visualisation.
You still have to delete the local version of `report`
if you want to get rid of that branch
as we learned some minutes ago.

It is possible to delete the remote branch from the terminal
using the command `git push <remote> --delete <branch>`.
For example, the command `git push origin --delete report` 
would allow you to perform the same action that we did on GitHub in the image.

Although it is not necessary to remove a branch after merging it,
doing so can help to keep your repository tidy.  

---

# Let's apply what we learned!
