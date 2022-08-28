---
title: 'module1_02'
type: slides
---

# How to use JupyterLab

Notes:
You have already been working with JupyterLab and Jupyter Notebooks in the [Programming in Python for Data Science](https://prog-learn.mds.ubc.ca/) course. In this module we will go through these tools at a basic level as a reminder to prepare you for the upcoming modules.

---

## Project Jupyter

<br>

<img src="/module7/proj_jupyter.png" width="200"></img>

Main goals of [Project Jupyter](https://jupyter.org/):

- Providing an ecosystem for **interactive** data science projects

- Being **language agnostic**: support most popular programming languages

<br>

<p style="color:black; font-size:130%; background-color:floralwhite;">
The name "Jupyter" -> "Julia" + "Python" + "R"
</p>

Notes:
Project Jupyter's foundation is the interactive Python project ("IPython"), which was started by a Colombian graduate student in physics back in 2001 with the goal of create an easier to use Python environment for scientific computing.
In 2014, the notebook interface was first introduced and this part of the project was renamed to Jupyter to indicate that it supported more programming languages than just Python.
The main goals of Project Jupyter are to provide an ecosystem for interactive data science projects and to support multiple popular programming languages.

The name "Jupyter" is a combination of "Julia" (popular scientific computing language), "Python", and "R" (popular statistical analysis tool).

---

## JupyterLab

<br>

<img src="/module7/jlab.png" width="400"></img>

<br>

- JupyterLab is a browser-based interactive development environment

- You can work with various types of documents in JupyterLab

- The main document type used with JupyterLab is **Jupyter notebook**

Notes:
JupyterLab is an interactive development environment (IDE) that enables you to work with documents and activities such as Jupyter notebooks, text editors, terminals, and custom components in a flexible, integrated, and extensible manner.

The main document type that is most commonly used in JupyterLab is the Jupyter **notebook**.

One of the core strengths of Jupyter notebooks is that they enable you to combine narrative text with interactive, executable code and its output all in one place. 

We'll talk about Jupyter notebooks in more detail in chapter 7.

---

## The JupyterLab interface

After running `jupyter lab`, a browser window should open with JupyterLab's interface:

<img style="border:1px solid black;" src="/module7/jl-launch.png" width="750"></img>

Notes:
In previous courses in this data science specialization,
you have been running JupyterLab via a web server,
without installing anything on your computer.

As part of assignment 1 in this course,
you will be installing JupyterLab on your own machine.
After you have installed it,
you can launch JupyterLab by running the command `jupyter lab`
from a terminal
(more on terminals in the first assignment instructions and in module 2).

When JupyterLab launches, you're going to see the "Launcher" tab, which allows you to create various new working environments.

---

## The JupyterLab interface

<img style="border:1px solid black;" src="/module7/jl-interface2.png" width="700"></img>

Notes:

JupyterLab is equipped with a lot of features in traditional IDE's such as PyCharm and VS Code. However, JupyterLab is geared towards interactive and exploratory computations.

The JupyterLab interface mainly consists of a **main work area**, and a **left sidebar** which are marked out in this slide. You'll spend most of your time using these two elements of the JupyterLab interface for various tasks and we will explore both of them in detail in the next slides.

---

## The left sidebar

<img src="/module7/left-sidebar.png" width="650"></img>

Notes:

Here you can see various tabs of the left sidebar:

- (1): This tab is the file explorer, which you can use to navigate your file system, open the files you're looking for, or even create and rename files and much more. You can right-click on any file or folder to see available options.

- (2): This is the running terminals and kernels tab. Here you can see all open tabs in the working area, as well as all running kernels. A kernel is a running language engine connected to your notebooks. We'll learn more about these later in the course.

- (3): This is the Git extension tab. You will be using this extensively in chapters 3-5 to version-control your repositories.

- (4): This is your table of contents tab. Whenever you insert Markdown headings to your notebooks, they will automatically show up here and will help you easily jump to any specific section of your notebook. You can also show code cells in the table of contents and expand and collapse sections to get a quick overview of your notebook.

There is also an Extension Manager tab which we will talk about in more detail in module 7.

---

## The main work area

<img src="/module7/main-work-area.png" width="700"></img>

Notes:

The main work area is where all your working windows reside. Here for example, we have opened:

- a notebook,
- an image file,
- an IPython console, and
- a terminal.

The content of each window, as well as the toolbars (and whether or not you get one!) depends on the type of the file you opened (e.g. notebook, image, PDF), and the type of the window (e.g. whether it's a console or a terminal).

You can resize the windows as you wish and change their arrangement by dragging the grey margin area between them.

You can also drag and drop a tab to another window to make it part of that window, or you can do the reverse.

---

## Simple mode


<img src="/module7/simple.png" width="750"></img>

Notes:

If you want to maximize a particular open tab so that you can focus on it, you can do so by

- first clicking the tabs title bar to activate it (note the thin blue bar appearing at above the title when you activate a tab),
- then clicking the "Simple" toggle button which is located on the lower left part of the JupyterLab's interface in the status bar.

Here, I have focused on my notebook tab.

---

# Let's see what you learned!
