---
type: slides
---
# Stashing local non-committed changes before pulling


---

# Stashing local non-committed changes before pulling

error: Your local changes to the following files would be overwritten by merge:
        README.md
Please commit your changes or stash them before you merge.
Aborting


Notes: We have learned that if there are changes on your remote repo in GitHub and you already have local committed changes, you will need to pull before you can push. If the local and remote changes are in the same lines, you will have to resolve the resulting merge conflict, otherwise git will merge automatically. But what if you have just started to make changes to a file when you realize that you forgot to pull before you started to work? The first thing to do is to try to pull, if you're lucky there are either no new changes or they are not in the same file you modified. If they are in the same file, you will get an error message like this:

---

# Stashing local non-committed changes before pulling

Notes: As you can see, you could finish off your changes, add them, commit them, and then pull. This is possible if the changes you are about to make locally will not affect the files that have been updated remotely. However, if you're about to change some of the files that have also been changed remotely it is better to run git stash, which removes your local changes from the working area and and saves them in another location (you can think of this as a secrete pocket which git does not care about when pulling from the remote repo, and from which you can take out the changes again when you need them). You can then do git pull, and follow up with a git stash pop to put your changes back from the stash to the working area, and then carry on working.

---

# Stashing local non-committed changes before pulling


Notes: This workflow can save you from running into merge conflicts, as long as you have not already made modifications to the same lines as you are pulling down. If you have already modified the same file that was updated remotely, you will still run into a merge conflict when you do git stash pop. Stashing is also great when you are working on one feature but realize that you should actually work on another unrelated feature first, you can stash your existing work (instead of manually saving it elsewhere) and finish working on the most urgent feature first.