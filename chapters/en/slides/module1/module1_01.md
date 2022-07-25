---
type: slides
title: 'module1_01'
---

<head>
<base target="_blank">
</head>
<head>
<base target="_blank">
</head>

<style>
.column {
    float: left;
  padding: 10px;
}
</style>

# Introduction to the Data Science Toolbox

Notes:
In this slide deck
we will introduce the data science tools
we are covering in this course.

We will briefly indicate the purpose of each tool
so that you have an idea
of what they are for
before we will dive into how to install and use them.

But first, let's see why it is so important
to learn about the tools in the data science toolbox.

---

## Using the right tool for the job


<center>

<img src='/module1/the-right-tool.png' width="650px" alt="Three ways of driving in a screw. To the left using a coin, in the middle with a knife, and to the right using a screwdriver."/>

</center>

Notes:
Knowing which tools to use
and how to use them effectively
are fundamental skills in many professions.

For example,
imagine that you are trying to drive in a screw using a coin
instead of a screwdriver.
The process of driving in the screw
would be less efficient and more laborious
than it needs to be.
Using a coin as a screwdriver
might be acceptable in an emergency situation,
but you would not want it to be part of your everyday workflow.

Now imagine that instead of a coin, you were using a knife to drive in a screw. This will not only be inefficient, but slipping with the knife could cause significant personal injury!

In these examples, it is easy to see why using the right tool for the job is both the most efficient and safest option. For tasks that are less hands-on or that does not give immediate negative feedback when something goes wrong, it can be harder to realize the negative consequences of a suboptimal tool choice. 

A prime example of this is when doing data analysis, where it can be tempting to reach for tools that are familiar instead of critically assessing which is the safest and most effective tool for the job. For a budding data scientist, it can be tricky to understand the long term consequences of using the wrong tool, but failing to do can lead to dire ramifications as we will see in the next slide.

---

## The consequences of using the wrong tool

<center>

<img src='/module1/hospital-delay.png' width="500px" alt="A screenshot of an article reporting on the delayed hospital opening, showing the article headline and a picture of the hospital."/>

</center>

Notes:
In the most benign of cases, working with a less effective toolbox will be a waste of your and your employers time. A good example of this is when people repeatedly carry out tasks manually, instead of automating them which often happens when using a tool such as Excel for data analysis, instead of a programming language like Python.

The consequences of using the wrong tool in data science could be much more severe than lost were eventually terminated several years after they started; around 25 scientific papers related to these trials were retracted, and the lead investigators were put under investigation for malpractice.

Another example from a couple of years ago is how the opening of a new expensive hospital was delayed because there had been an error when copying values between spreadsheet; something that could have been avoided if programmatic tools with automatic sanity checks would have been used instead (if you are interested in more details and examples on inappropriate tool use, refer to [section 2.1 and 2.2 in one of our recently published papers](https://www.tandfonline.com/doi/full/10.1080/26939169.2022.2074922)).

Although the use of improper tools and practices can lead to such negatively impactful real-life outcomes, there are few courses that focus on teaching toolbox skills to data scientists, and in many cases data scientists are expected to figure out what is effective for themselves. This is both inefficient and can lead to unfortunate and easily avoided mistakes.

In this course, we learn which tools to use and how to use them to facilitate they are necessary for efficient, reproducible, and collaborative data science practices, which are all important building blocks for a successful and sustained data science career.

Let's briefly introduce the tools in the toolbox, starting with the shell!

---

## The Shell (Bash)

<img src="/module1/bash-logo.png" alt="Bash logo" width="400px"></img>

 <!-- https://raw.githubusercontent.com/odb/official-bash-logo/master/assets/Logos/Icons/PNG/512x512.png -->

- Navigate the filesystem
- Launch programs
- Automation of tasks

Notes:
The first tool we will learn about is the shell.
A shell can use to
navigate our computers file system,
launch programs,
and automate tasks via the shell's own programming language.

You can think of it as a much more powerful
version of your default graphical file browser.
The specific shell that we will learn more about in this course
is called Bash.
Bash stands for "The Bourne Again Shell";
the name was chosen as a pun
to indicate that it was a rebirth with many new features
compared to its predecessor "The Bourne Shell"
(named after its creator Stephen Bourne).

We will learn more about the shell in module 2!

---

## Git and GitHub

<div class="row">
    <div class="column">
        <img src="/module1/git-icon.png" alt="Git logo" width="200px"></img>
        <ul>
        <li>Version control</li>
        <li>Collaboration</li>
        <li>Communication</li>
        </ul>
    </div>
    <div class="column">
        <img src="/module1/github-icon.png" alt="GitHub logo" width="200px"></img>
    </div>
</div>


Notes:
Git is a program that runs on your computer
and allows you to keep track of historic versions of your files.
This version control is similar to how "Track Changes" works
in word processors,
but much more elaborate and powerful.

GitHub is an online platform
where developers and data scientists
can collaborate on their Git-based projects
by raising issues, discuss features,
and review code.

Git and GitHub are used widely in both companies and hobby projects.
They are the most common ways of collaborating on code
and making sure that it easy to keep track of changes in code bases
even as they grow large and are managed by multiple people.

You will learn more about Git and GitHub in modules 3-5!

## Conda

<img src="/module1/conda-icon.svg" alt="Conda logo" width="400px"></img>

- Installing programs and packages (Python, R, and more)
- Managing software versions
- Separating software that requires different environments

Notes:
Conda is a package manager,
which provides a convenient way to install programs and packages.
While there exist package managers that are tailor-made for programming language such as R and Python or for specific operating systems,
Conda is the most widely use package manager that is both cross-platform
(works on different operating systems)
and allows you to install packages from many programming languages.

Conda also allows us to keep different programs separate,
so that there are not conflicts
when two programs requires different versions
of the same software.
This is called virtual environments,
and we will learn more about it and other Conda features in module 6!

---

## JupyterLab and VS Code

<div class="row">
    <div class="column">
        <img src="/module1/jupyter-logo.svg" alt="Jupyter Logo" width="200px"></img>
        <ul>
        <li>Edit text and code files</li>
        <li>Develop interactive notebooks</li>
        <li>Create and view data visualizations</li>
        <li>Generate reports</li>
        </ul>
    </div>
    <div class="column">
        <img src="/module1/vscode-icon.png" alt="VS Code Logo" width="200px"></img>
    </div>
</div>

Notes:
As a soft prerequisite for this course,
we recommend you to already be familiar with using JupyterLab
it to edit Jupyter notebooks.
Notebooks are powerful since they allow us to combine
code, text, and rich output such as data visualizations.

In this course we will see some more advanced features of JupyterLab,
such as how to use it with Git for version control,
and also introduce you to another commonly used tool for programming:
VS Code.
VS Code is a more traditional programming environment than JupyterLab
and here we will use it for editing text files
and for some aspects of version control with Git.

---

## Jupyter Book and Markdown

<div class="row">
    <div class="column">
        <img src="/module1/jupyter-book-logo.svg" alt="Jupyter Logo" width="200px"></img>
        <ul>
        <li>Create websites, books, and documentation</li>
        <li>Allows for code execution and interaction</li>
        <li>Content is written in Jupyter Notebooks and text files</li>
        </ul>
    </div>
    <div class="column">
        <img src="/module1/md-icon.svg" alt="Markdown Logo" width="200px"></img>
    </div>
</div>


Notes:
Jupyter Book is an open source project for building beautiful,
publication-quality books and documents.
The books allow for code to be executed
and for visualizations to be interacted with.

Content is written in Jupyter Notebooks and text files,
using Markdown syntax.
You have already seen some simple examples of using Markdown
for text formatting


---

## A commitment to open source

<img src="/module1/osi-icon.png" alt="Open Source Initiative logo" width="200px"></img>


- Being able to use the software after leaving school without paying exorbitant amounts of money
- Having access to the source code - you can learn and fix bugs
  (even closed source, Commercial Software has bugs, they are just harder to see and help fixing...).
- Open Source software is customizable and flexible
- It's becoming the standard in many tech companies
- You are part of an awesome and active community!

Notes:
All the programs mentioned in the previous slides
have active development communities and are open source,
which means that anyone can read the source code and contribute to these projects.
Open source programs have many benefits,
such as those mentioned on this slide.

---

# Let’s apply what we learned!

Notes: <br>
