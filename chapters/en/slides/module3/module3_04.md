---
type: slides
title: 'module3_04'
---

# Committing changes to a local repository

Notes:
In this slide deck we will see how we can commit our staged changes
to the repository on our computer.

---

## Committing the modified files in the staging area

<br>
<br>


<center>

<img src='/module3/vc-commit.png' width="800px" alt="404 image"/>

</center>

Notes:
Once the files we want to keep have been added to the staging area, we can "commit" them to the repository history.
When we do this, we are required to include an informative message 
briefly describing the purpose of the changes we made.

In the screenshot, the commit message is `"Message about changes..."`;
in your work you should make sure to replace this with an informative message about what you changed.
It is also important to note that these changes
are only being committed to the history of the local repository's on your computer.
The remote repository on GitHub has not changed,
and collaborators would not yet be able to see your new changes online.

---

## Committing to add sections to your project history

<br>
<br>
<br>

<center>

<img src='/module3/commit-messages-comic.png' width="600px" alt="404 image"/>

<a href="https://xkcd.com/1296/">image source: xkcd.com</a>

</center>



Notes:
Writing meaningful commit messages is really important.
When commit messages are too vague (`code additions` or `Add some stuff`)
it will be difficult to interpret for our collaborators,
including ourselves in the future.
Writing clear and descriptive commit messages
increases the quality of your project and facilitates collaborative work.


---

## Making the commit (JupyterLab IDE)

<br>


<center>

<img src='/module3/vc-commit-jupyter.png' width="800px" alt="404 image"/>

</center>

Notes:

🙌 **Practice**

**Step 3. Add a commit message into the Jupyter Git extension commit text box.**

To commit the staged changes together with an associated commit message,
you must write a message in the text box at the bottom of the Git pane
and click on the blue "Commit" button (see image).
It is highly recommended to write useful and meaningful messages about what was changed.

These commit messages, and the time stamp for a given commit,
are the primary means to navigate through the project’s history
in the event that you need to view or retrieve a past version of a file,
or revert your project to an earlier state.

When you click the "Commit" button for the very first time,
you will be prompted to enter your name and email.
This only needs to be done once for each machine you use Git on,
and is added as author information to the commit message.

---

## Making the commit (JupyterLab IDE)

<br>


<center>

<img src='/module3/vc-commit-description-jupyter.png' width="800px" alt="404 image"/>

</center>

Notes:

🙌 **Practice**

**Step 3 continued**

When committing changes, you need to include a title/summary for each message (the upper text box in JupyterLab). Optionally, you could also include a longer description for the commit in the next text box.



---

## Making the commit (JupyterLab IDE)

<br>
<br>
<br>

<b>Bad messages</b> ❌ : <br>
    - fixes an error <br>
    - added new code <br>
<br>
<br>
<b>Good messages</b> ✅ : <br>
    - Reorder sections to make the README more welcoming <br>
    - Fix notebook error to allow for export with images <br>


Notes:


You can see example of informative commit titles in this slide.   
The general guideline for the title is to summarize the purpose of the commit as a short descriptive message.  
It is recommended to write your messages in imperative mood (imagine that your commit should complete the sentence "this commit will...") and start with a capital letter. 


---

## Making the commit (JupyterLab IDE)

<br>


<center>

<img src='/module3/vc-commit-done-jupyterlab.png' width="800px" alt="404 image"/>

</center>


Notes:

🙌 **Practice**

After recording a commit, the staging area should be empty and you will see that there are 0 staged files. You are now ready to push your changes to the remote repository on GitHub.

---

## Making the commit (JupyterLab IDE)

<br>


<center>

<img src='/module3/vc-jupyter-history.png' width="800px" alt="404 image"/>

</center>

Notes:

🙌 **Practice**

After the changes have been successfully committed,
you can view them in the **History** tab together with your message.
You have now tracked this change and made it part of the history of your project!

---

## Making the commit (Terminal)

<br>
<br>
<br>

<center>

<img src="/module3/vc-commit-editor.png" width="800px" alt="404 image" >

</center>

`git commit`

Notes:

🙌 **Practice**

The equivalent terminal command for making a commit
with a title and long description,
is to type `git commit` inside Bash and press enter.
This will open your default text editor
with a temporary file called `COMMIT_EDITMSG`
where you can type in the commit message
as shown in the next slide.

---

## Making the commit (Terminal)

<br>


<center>

<img src="/module3/vc-commit-jl-terminal-editor.png" alt="404 image" width="800px">

</center>

Notes:

🙌 **Practice**

Your default text editor should be VS Code
if you followed the setup steps in the first assignment.
If you didn't, you might end up in a text editor called `vim`
that runs inside the terminal
as shown in this slide.
`vim` is powerful,
but has a steep learning curve,
so in case this happens,
you can exit `vim` by typing `:q`
and then pressing `Enter`.
Then you can go back
and make sure that VS Code is your default editor
by following the instructions in the first assignment.




---

## Making the commit (Terminal)

<br>


<center>

<img src="/module3/vc-commit-jl-message-terminal.png" alt="404 image" width="800px">

</center>

Notes:

Often,
a descriptive summary in the title field is sufficient
and we don't need to write out a long description.
When this is the case,
you can use the shorter version of the command `git commit` with the flag `-m`,
which allows you to type in the title summary
together with the command:

`git commit -m "Create an eda notebook"`

---

# Let's apply what we learned!
