---
type: slides
title: 'module4_04'
---

# Revert changes made to your Git project


Notes: 

In this slide deck we will see how we can undo changes we have made without deleting our past commits.

---

## Reversion (JupyterLab)

<center>

<img src='/module4/vc-revert-jl.png' width="800px" alt="404 image"/>

</center>

Notes:
As we saw in the previous slide deck,
it is troublesome to perform a hard reset
when we are working together with collaborators online.
Another approach for undoing some of your work
is to create a new commit that reverts your changes.
This means that nothing in your Git history is deleted,
there is just a new commit added containing the reversions to each file.

To revert to a previous commit via JupyterLab,
you can click the arrow icon in the commit you want to go back to in JupyterLab's "History" tab,
as seen in this slide.

---

## Reversion (JupyterLab)

<center>

<img src='/module4/vc-revert-commit.png' width="800px" alt="404 image"/>

</center>

Notes:
When you click the arrow, JupyterLab asks you for the commit title and description for the new reversion commit. You can either keep the preloaded name here or find a more meaningful one.

---

## Reversion (JupyterLab)

<br>


<center>

<img src='/module4/vc-revert-history.png' width="600px" alt="404 image"/>

</center>

Notes:
Now you can see that you have a new commit, and the state of the your project is the same as it was previously, without deleting anything!

Remember to push your changes if you want to keep your remote updated. In contrast to a hard reset,
a reversion if more friendly for collaborating on GitHub, but it is still important to push big reversions soon and inform your collaborators, since some of them might be modifying the part that you reverted!

---


## Reversion (Terminal)


`git revert <commit hash>`

<center>

<img src='/module4/vc-revert-t-jl.png' width="800px" alt="404 image"/>

</center>



Notes:
If you want to revert changes with the terminal
you can use `git revert`
together with the commit hash you want to revert to.

---

## Reversion (Terminal)

<br>


<center>

<img src='/module4/vc-revert-t-jl-changes.png' width="800px" alt="404 image"/>

</center>

Notes:
After running `git revert`,  
your default text editor will pop up so you can modify the final commit message.   
If you close it as it is, the message will be the default one.  
After closing the editor, you can view the new reversion in the project history tab  
or with `git log`.   

The number of files changed, insertions and deletions are informed
when you are using the terminal or JupyterLab as you can see in the image.

---

## Travelling back in time 🕑

<br>
<br>
<br>
<br>
<br>

1. **Doing a hard reset** ✔️  

<br>

2. **Reverting previous changes** ✔️  

Notes:
In the last two slide decks,
we have learned two ways of restoring our project to a previous point in time:
hard reset and revert changes.
One of the major differences is that when we select the option of doing a hard reset we are removing the previous commits we made and thereby modifying the Git history of the project.
If we instead chose to revert our changes,
we keep all our previous commits
and add a new "reversion" commit that includes all the changes needed to make our repository identical to a previous points in time.

---

# Let's apply what we learned!
