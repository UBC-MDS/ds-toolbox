---
type: slides
---

# Do more with JupyterLab

---

# Notebook views

<br>

In JupyterLab, you can open a separate window for:

- the output of a single cell, or

- an independent view of your notebook.

<br>

This can be very helpful when you want to:

- compare outputs of cells far from each other, or

- looking at various sections of the same notebook simultaneously.


Notes:

Let's see how views look like in JupyterLab in the next slides.

---

# Cell output view

<img src="/module7/view.png" width="425"></img>

<img src="/module7/view1.png" width="425"></img>

Notes:

To create an output view for any computational cell, just right-click anywhere in the cell, and then choose "Create New View for Output".

You can reposition the location of your new output window as you wish, by dragging the title bar of the output window to the desired position.

---

# Notebook view

<img src="/module7/view2.png" width="650"></img>

<img src="/module7/view3.png" width="650"></img>

Notes:

Notebook views can be created in a similar way. You just need to right click the notebook's title bar, and choose "New View for Notebook". An alternative way is to go to the "File" menu, and choose "New View for Notebook".

As you can see here in the bottom screenshot, both open tabs are views of the same Jupyter notebook. You can work on and edit a part of the notebook, while also looking at a different part and potentially editing that part too.

Remember, though, you can only have one cell running at a time. This is because you still have only one kernel for your notebook, even though you're working with it from different views.

---

# Exporting notebooks

<br>

To share your work with others, it is possible to export your notebook to various formats in JupyterLab, including:

- HTML
- PDF
- Markdown

<br>

<img src="/module7/export.png" width="700"></img>

Notes:

To share your work with others, it is possible to export your notebook to various formats in JupyterLab, including:

- HTML
- PDF
- Markdown

---

# Notebook in HTML

<img style="border:1px solid black;" src="/module7/html-export.png" width="750"></img>

Notes:

Here you see how our notebook looks like when converted to HTML. This is the format used to show content on the web.
Converting a notebook to HTML is convenient when you want to share it with someone who does not have JupyterLab installed themselves.
You can simply send the exported HTML file in a email (or similar) to your colleague and they can download it and open it in any modern browser such as Firefox or Chrome.
We will see later in this slide show how you can hide code cells in your exported notebook.

---

# Notebook in PDF

<img style="border:1px solid black;" src="/module7/pdf-export.png" width="650"></img>

Notes:

When you use the PDF option to convert your notebook, the output will look like a document generated using [Latex](https://en.wikipedia.org/wiki/LaTeX), with all the beautiful formatting styles.

---

# Notebook in Markdown

<img style="border:1px solid black;" src="/module7/md-export.png" width="750"></img>

Notes:

We've learned quite a bit about the Markdown format so far in this chapter. The Markdown option converts your notebook to a Markdown file that only contains plain text, and can be opened with any text editor. In order to see the rendered Markdown file however, you need to open it using JupyterLab or another IDE like VSCode.

It is actually possible to work with notebooks directly in Markdown format instead of the default JSON format that they `.ipynb` files as stored as. This has the advantage of making the notebook source files easier to read with the human eye which can be helpful when reviewing each others code on GitHub, so it is preferred by some organizations. To do this, you would need to install the [Jupytext extension](https://jupytext.readthedocs.io/en/latest/); we will show you how to install extensions in the next few slides.

Note how computational cells are converted to Markdown code blocks with appropriate syntax highlighting.

---

# JupyterLab extensions

- JupyterLab is built to be modular and extensible by nature

- When a feature is needed, developers can add it to JupyterLab by creating an extension

- JupyterLab itself is mainly a collection of various extensions

<img src="/module7/ext.png" width="300"></img>

Find out more about JupyterLab extensions [here](https://jupyterlab.readthedocs.io/en/stable/user/extensions.html).

Notes:

JupyterLab is built to be modular and extensible by nature. When a feature does not already exist in JupyterLab, developers can create an **extension** to provide that feature for JupyterLab.

Do you remember using the Git extension in JupyterLab in previous chapters? Well, as the name suggests, that was an extension that was added on to JupyterLab when you followed the installation guide in Assignment 0!

As a matter of fact, JupyterLab itself is nothing but a collection of various extensions.

---

# Installing JupyterLab extensions

<br>

- JupyterLab extensions may be in either **source** or **prebuilt** format

**Prebuilt**

- Most JupyterLab extensions are in the prebuilt format
- These can be installed via `conda install <extension_name>`
- They can be used right away after installation

<br>

**Source**

- Some older JupyterLab extensions still use the source format
- These can be installed via the Extension Manager GUI or by typing `jupyter labextension install <extension_name>` command
- A **source** extension cannot be used right away, but requires a rebuild of JupyterLab.
  -This rebuild required the program **Node.js** to be installed in your conda environment. You can install Node.js by running `conda install nodejs`.

<p style="color:black; font-size:110%; background-color:floralwhite;">
Always refer to an extension's documentation to find the recommended way of installation.
</p>

Notes:

In case it is the recommended method, installing an extension using 

`conda install <extension_name>`

or

`jupyter labextension install <extension_name>`

is straight-forward. Simply run the above commands in the Conda environment where JupyterLab is installed. Be sure to follow the steps recommended by the extension's documentation.

Here is the [link](https://github.com/jupyterlab/jupyterlab-git#install) to the installation steps recommended by the `jupyterlab-git` extension. This is an example of a conda installation.

---

# JupyterLab Extension Manager

<img src="/module7/ext2.png" width="700"></img>

Notes:

JupyterLab provides a GUI for managing extensions.

As shown in the screenshots, you can view a list of installed extensions by clicking on the puzzle-piece icon on the left-hand side bar of JupyterLab.

Suppose that we're looking for a particular extension called "jupyterlab-drawio". If you type "draw" in the search box at the top and hit `Enter`, you'll see that this extension appears at the top. Now you just need to click "Install", and your desired extension will be installed.

Note that, if the extension you're trying to install is **not prebuilt**, you will be prompted with a message box to rebuild JupyterLab. But no need to worry! Simply click the "Rebuild" button. Finally, you'll see a "Build Complete" message if everything is successful. It's safest to click "Save and Reload" so that you don't lose any unsaved changes.

---

# Let's see what you learned!
