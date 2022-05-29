---
type: slides
title: 'module3_01'
---

# What is version control, and why should I use it?

---
# What is version control, and why should I use it?

<center>

<img src='/module3/vc-final-comic.png' width="34%" alt="404 image"/>
 
<center/>

<a href="http://www.phdcomics.com">image source: “Piled Higher and Deeper” by Jorge Cham</a>  

Notes: Data analysis projects often require iteration and revision to move from an initial idea to a finished product ready for the intended audience. Without deliberate and conscious effort towards tracking changes made to the analysis, projects tend to become messy. This mess can have serious, negative repercussions on an analysis project, including interesting results files that your code cannot reproduce, temporary files with snippets of ideas that are forgotten or not easy to find, mind-boggling file names that make it unclear which is the current working version of the file (e.g., `document_final.txt`, `to_hand_in_final_v2.txt`, etc.), and more.

Being able to record and view the history of a data analysis project is important for understanding how and why decisions to use one method or another were made, among other things. Many of you might already have used version control software if you work with Google Docs, Dropbox, or TimeMachine on macOS. These programs, all automatically create versions of your documents and you can then browse through the history.


---
# What is version control, and why should I use it?

Instead of creating a new copy for each version of a file with an unwieldy name (as in the image below), version control allows you to have a single file and records the changes between the versions.

<img src='/module3/vc-files.png' width="30%" alt="404 image"/>

Notes: Additionally, data analyses are typically completed by a team of people rather than a single person. This means that files need to be shared across multiple computers, and multiple people often end up editing the project simultaneously. In such a situation, determining who has the latest version of the project—and how to resolve conflicting edits—can be a real challenge.

Version control also facilitates collaboration via tools to share edits with others and resolve conflicting edits. But even if you’re working on a project alone, you should still use version control. It helps you keep track of what you’ve done, when you did it, and what you’re planning to do next!

---

# What is version control, and why should I use it?

<br>
<br>
<br>
<br>
<br>

<p style="border:3px; border-style:solid; border-color:#FA9C18; padding: 2px;"> We can define <b>version control</b> as the process of keeping a record of changes to documents, including when the changes were made and who made them, throughout the history of their development. It also provides the means both to view earlier versions of the project and to revert changes. </p>

Notes: We can define **version control** as the process of keeping a record of changes to documents, including when the changes were made and who made them, throughout the history of their development. It also provides the means both to view earlier versions of the project and to revert changes. 

---


# Git and GitHub

**Git** - Version control system

<img src='/module3/git-logo.png' width="10%" alt="404 image"/>

**GitHub** - Repository hosting service

<img src='/module3/github-logo.png' width="10%" alt="404 image"/>

Notes: To **version control** a project, you generally need two things:
(1) a version control system and 
(2) a repository hosting service.

The version control system is the software responsible for tracking changes, sharing changes you make with others, obtaining changes from others, and resolving conflicting edits. The repository hosting service is responsible for storing a copy of the version-controlled project online (a repository), where you and your collaborators can access it remotely, discuss issues and bugs, and distribute your final product. For both of these items, there is a wide variety of choices. In this textbook we’ll use Git for version control, and GitHub for repository hosting, because both are currently the most widely used platforms.

Technically you don’t have to use a repository hosting service. You can, for example, version control a project that is stored only in a folder on your computer—never sharing it on a repository hosting service. But using a repository hosting service provides a few big benefits, including managing collaborator access permissions, tools to discuss and track bugs, and the ability to have external collaborators contribute work, not to mention the safety of having your work backed up in the cloud. Since most repository hosting services now offer free accounts, there are not many situations in which you wouldn’t want to use one for your project.

---

# Let's apply what we learned!

---