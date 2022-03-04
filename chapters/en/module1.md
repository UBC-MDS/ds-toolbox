---
title: 'Chapter 1: Jupyter Lab'
description:
  'This chapter will teach you about many cool things and introduce you to the
  most important concepts of the course.'
prev: null
next: /chapter2
type: chapter
id: 1
---

<exercise id="1" title="Introduction" type="slides">

<slides source="module1_01_Overview">
</slides>

</exercise>

<exercise id="2" title="What is Jupyter Lab?" type="slides">

<slides source="module1_02_JLab">
</slides>

</exercise>

<exercise id="3" title="How to access JupyterLab?">

As you can see, Jupyter Lab it is opened in a browser. Where is the program running?

<choice>
<opt text="My computer">
You have not installed locally jupyter lab. You can install Jupyter Lab locally in your desktop here: https://github.com/jupyterlab/jupyterlab-desktop
</opt>

<opt text="UBC Servers" correct="true">

For this course we are going to be using UBC Jupyter Lab. This means that you will be able to use the packages that are already installed in our servers. If you would like to learn how to install Jupyter Lab in your computer, you can follow these instructions: x

</opt>

<opt text="On the internet">

You need internet access to get JupyterLab working, but it not coming from anuwhere on the internet. We have already installed some packages you are going to ube using during this course.

</opt>
</choice>

</exercise>

<exercise id="4" title="Jupyter Notebooks" type="slides">

<slides source="module1_04_JNotebook">
</slides>

</exercise>

<exercise id="5" title="Running cells">

If you have the following code, what would be the value of the variable `var`

IMAGE

<choice>
<opt text="5" correct="true">
That is correct! 
</opt>

<opt text="3" >

Double check in what order the cells where run

</opt>

<opt text="8">

Double check in what order the cells where run
</opt>
</choice>

</exercise>

<exercise id="6" title="Working with text via markdown cells" type="slides">

<slides source="module1_06_Markdown">
</slides>

</exercise>

<exercise id="7" title="Markdown syntax">

How would you write the following text using markdown?

IMAGE

<codeblock id="01_07">

You can check the cheatsheet (LINK)

</codeblock>

</exercise>

<exercise id="8" title="Static figure creation and exporting notebooks" type="slides">

<slides source="module1_08_Figures">
</slides>

</exercise>

<exercise id="9" title="Create and save your first plot!">

Copy the following code in one cell in your notebook, run it anf then export it as a `.png` image.

```
# Please note, you don't have to understand what is going on in this cell
# it is just to show you how a static plot looks inside JupyterLab

import numpy as np
import matplotlib.pyplot as plt

N = 50
x = np.random.rand(N)
y = np.random.rand(N)
colors = np.random.rand(N)
area = (30 * np.random.rand(N))**2  # 0 to 15 point radii

plt.scatter(x, y, s=area, c=colors, alpha=0.5)
```

<choice>

<opt text="I right clicked is the JupyterLab menu and hold shift brings up the browser menu. Then I select Save">
That is correct! But it is not the only way
</opt>

<opt text="I printed the screen to save it" >

</opt>

<opt text="I used the Save command in the plotting library" >
That is correct! But it is not the only way
</opt>

<opt text="1 and 3 are correct"  correct="true" >

</opt>

<opt text="2 and 3 are correct" >

</opt>

<opt text="All are correct">

</opt>
</choice>

</exercise>

<exercise id="10" title="Jupyter Lab sidebars and other tools" type="slides">

<slides source="module1_10_Sidebar">
</slides>

<exercise id="11" title="FINAL EXERCISE (pending)">

**In progress**

<choice>
<opt text="5" correct="true">
That is correct! 
</opt>

<opt text="3" >

Double check in what order the cells where run

</opt>

<opt text="8">

Double check in what order the cells where run
</opt>
</choice>

</exercise>