---
title: 'Module 7: JupyterLab'
description:
  'In this module, you will learn about JupyterLab, one of the most popular development environments for data science projects.' 
prev: ../../module6
next: ../../module8
type: chapter
id: 7
---

<exercise id="1" title="Module learning outcomes" type="slides,video">
<slides source="module7/module7_00" shot="1" start="0:003" end="05:31"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id="2" title="What is Jupyter?" type="slides,video">
<slides source="module7/module7_01"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='3' title="Test your knowledge">

JupyterLab only supports Python.

<choice id="1">

<opt text="True">
Remember that the Jupyter Project is created to be language agnostic? It supports multiple languages, including Python, Julia, R, and more.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

Among the following options, which one is JupyterLab most similar to?

<choice id="2">

<opt text="Python">
JupyterLab is an IDE, whereas Python is a programming language.
</opt>

<opt text="Visual Studio Code" correct="true">
Both JupyterLab and Visual Studio code are IDEs with similar features.
</opt>

<opt text="GitHub">
JupyterLab is an IDE, whereas GitHub is an online platform for hosting and managing code through the Git system.
</opt>

<opt text="Notepad">
JupyterLab is an IDE, whereas Notepad is a text editor.
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="4" title="The JupyterLab interface" type="slides,video">
<slides source="module7/module7_02"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='5' title="Test your knowledge">

When you use the "Simple" mode in JupyterLab, all windows will be closed except for the currently active one.

<choice id="1">

<opt text="True">
All other windows will be just <b>hidden</b> from view, not closed! Once you disable the "Simple" mode, you'll see already open windows back in their original place.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

All JupyterLab windows have the same toolbar.

<choice id="2">

<opt text="True">
As opposed to a notebook window, you'd see that a terminal window, for example, does not have a toolbar at all.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id='6' title="Jupyter notebooks" type="slides,video">
<slides source="module7/module7_03"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='7' title="Test your knowledge">

Suppose that you have just opened a notebook with the following cells:

<img src="/module7/mcq.png" width="500"></img>

What happens if you hit `Shift + Tab` while your cursor is in the shown position?

<choice id="1">

<opt text="A pop-up will appear to show the <code>pd.read_csv()</code>'s documentation">
This is what's expected to happen, but it won't. Remember that, you've just opened your notebook...
</opt>

<opt text="Nothing will appear" correct="true">
Since the first cell is not executed yet, the notebook's kernel doesn't know anything about those functions.
</opt>

<opt text="You'll get an error message">
No error error message will appear as a result of pressing <code>Shift + Tab</code>.
</opt>

<opt text="JupyterLab's contextual help window will be opened">
The <code>Shift + Tab</code> shortcut is not set for opening the contextual help window.
</opt>

</choice>

A notebook's console uses the same kernel as the notebook itself.

<choice id="2">

<opt text="True" correct="true">
</opt>

<opt text="False">
Even though you can launch an independent console in JupyterLab too, the console opened for a particular notebook is connected to the same kernel as the notebook.
</opt>

</choice>

We have a notebook like the following:

<img src="/module7/mcq2.png" width="500"></img>

What do you think the output will be if we run the last cell?

<choice id="3">

<opt text="27">
Note the order in which the cells have been executed. This would have been the output if only the second cell was already run.
</opt>

<opt text="9">
Note the order in which the cells have been executed. This would have been the output if the second and third cell were already run.
</opt>

<opt text="60" correct="true">
</opt>

<opt text="An error message">
Note that some cells have already been executed. An error message would have resulted from running the last cell only if the kernel didn't know about the variable <code>num</code>.
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id='8' title="Markdown for text formatting" type="slides,video">
<slides source="module7/module7_04"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='9' title="Test your knowledge">

It's possible to run code inside Markdown code blocks if you've specified the language after the first three back ticks, e.g. ` ```python`.

<choice id="1">

<opt text="True">
You can't run code inside a Markdown document! Code can only be executed inside code cells in a Jupyter notebook.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

Markdown documents can be rendered with any text editor.

<choice id="2">

<opt text="True">
You can <b>open</b> a Markdown document with any text editor, since it only contains plain text. However, you can view <b>rendered output</b> only in environments that support displaying Markdown output, such as JupyterLab, VS Code, and GitHub.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id='10' title="Do more with JupyterLab" type="slides,video">
<slides source="module7/module7_05"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='11' title="Test your knowledge">

Which of the following statements is false?

<choice id="1">

<opt text="When you edit a notebook, all notebook views reflect the change.">
This is a true statement.
</opt>

<opt text="A notebook converted to Markdown format can be opened with any text editor.">
This is a true statement.
</opt>

<opt text="A source extension requires rebuilding JupyterLab.">
This is a true statement.
</opt>

<opt text="Different kernels can be used with different views of a notebook." correct="true">
Views are just "views". In other words, view are like looking at a single notebook, but from different viewpoints.
Each single notebook in Jupyter Lab can only be connected to a single kernel.
</opt>

</choice>

Which of the following prefix characters can be used in to run shell commands inside a code cell?

<choice id="2">

<opt text="<code>&</code>">
This is not a valid command prefix in for a notebook cell.
</opt>

<opt text="<code>!</code>" correct="true">
</opt>

<opt text="<code>%</code>">
This is the prefix for running magic commands.
</opt>

<opt text="<code>$</code>">
This is not a valid command prefix in for a notebook cell.
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id='12' title="What Did We Learn" type="slides,video">
<slides source="module7/module7_06"></slides>
</exercise>
<!-- ------------------------------------ -->