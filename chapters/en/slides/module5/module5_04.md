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

<figure class="quote">
  <blockquote style="background: gray;">
When I first started we all pushed to one branch, but the problem is you push and nobody knows what changes are going through and there is no chance for a review. Our current system is that you don’t make any changes without submitting a <strong>pull request</strong>[...]and then one or more members will review it and you need one thumbs up from another team member to merge it, otherwise it can’t go in.
</blockquote>
  <figcaption>
    &mdash; <a href="http://thesegalgroup.org/wp-content/uploads/2014/04/code-centric.pdf">Kalliamvakou, E. (2014). The Code-Centric Collaboration Perspective: Evidence from GitHub.</a>
  </figcaption>
</figure>





Notes: 

Pull requests involve merging someone else's changes into your code.
They are essential for team collaboration and
proper pull request review is critical for 
ensuring code quality.

In the previous part, 
we did not push our feature branch to GitHub.
Instead,
we finished the development of this branch locally and 
merged it into our `main` branch using
JupyterLab GUI or the command `git merge`.

If we would have worked in a team, 
it would have been good practice to have first push the branch to GitHub,
and then create a pull request to 
allow the other team members to review the code and
suggested any changes before merging it in.


---

## Opening a pull request (GitHub)

<center>

<img src='/module5/PR.png' width="100%" alt="404 image" />

<center/>


Notes: 

You must first push the changes in your branch
to GitHub in order to create a pull request.
After that, 
a yellow banner will appear at the top of the GitHub repository interface, 
and you can click the green "Compare and pull request" button.

Add a message to the new page describing the changes you've made,
scroll down to review the changed files, 
and then click the green "Create pull request" button.


Congrats!
You've made your first GitHub Pull Request! 

---

## Opening a pull request (GitHub)

<center>

<img src='/module5/PR-2.png' width="100%" alt="404 image" />

<center/>


Notes: 

As a general rule, you'll open pull requests from your feature branch
with the `main` branch as the "base",
but GitHub allows you to change the base branch 
(the leftmost arrow in the slide) and
the branch from which the changes will be pulled 
(the right most arrow in the slide).

You can add a title and a description to the pull request.
Remember that Markdown can be used to format the message content.
Before creating the pull request,
you can use the **Preview** tab 
to see what the rendered Markdown will look like.


In the body of the message, 
you can also indicate whether it is resolving an existing issue 
by typing '/close #1' to close issue number 1.
Pull requests and GitHub issues use the same numbering system,
so if there is already an open issue, 
the first PR would be get the number 2. 


---
## Opening a pull request (GitHub)

<center>

<img src='/module5/PR-2.png' width="100%" alt="404 image" />

<center/>


Notes:
Once you have open a pull request 
you can continue to add commits by pushing to your feature branch on GitHub.
This means that you can open the pull request 
before finishing the work 
and doing so is a way to communicate that
you are preparing changes to merge in `main` 
(or another branch) that will need review. 
The commits will appear in chronological order.



---
## Opening a pull request (GitHub)

<center>

<img src='/module5/PR3.png' width="80%" alt="404 image" />

<center/>

Notes:

The upstream repo maintainers
will then review your work and merge it
in if they approve.
You can assign someone to a pull request 
and/or designate the person as a reviewer.
 
- **Reviewers**: You can select anyone who can help from the list of previous authors provided by GitHub as reviewers for that code.
A review request will be sent to the reviewers, and you will be notified via email and notification once they have submitted their feedback.

If you are working with a team, 
you will most likely establish guidelines for
which team members will review which pull requests.


In GitHub's Markdown syntax,
you can refer to a pull request or issue 
by typing '#' followed by the number of the PR, 
for example, "Please see PR #1 for a fix to this issue."

Because this is the project's first pull request,
it is numbered #1, as shown next to the title in the screenshot.

Another thing you can do is **label** each pull request;
this will help you by grouping similar pull requests together, 
such as "bug fixes," "enhancements," and so on. 

---
## Pull request successfully merged and closed (GitHub)

<center>

<img src='/module5/PR-delete-branch.png' width="80%" alt="404 image" />

<center/>

Notes:

After you successfully merge the pull request 
GitHub gives you the option to delete the branch via the web interface. 
This is always safe to do, 
as the deleted branches can easily be restored later.



---


# Let's apply what we learned!