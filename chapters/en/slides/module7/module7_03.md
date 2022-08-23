---
type: slides
---

# Intermediate JupyterLab tips and tricks

Notes:
In this module we will present an assortment of intermediate techniques that can help you be more efficient when working in JupyterLab.

---

## Using multiple views of the same content

<br>

In JupyterLab, you can change the way you view content in three main ways:

1. Opening an additional view of the same notebook.

2. Opening an additional view of the output of a specific cell.

3. Render cell output on the side of a code cell instead of below it.

<br>

Notes:
As we learned previously,
it is possible to have multiple windows open in JupyterLab.
In fact,
we can even view the same content in more than one window,
which can be helpful when you
e.g. want to have two parts of a long notebook in view at the same time
or have specific space constraints to work around.

There are three main ways that we can modify how we view content in JupyterLab:

1. Opening an additional view of the same notebook.
2. Opening an additional view of the output of a specific cell.
3. Render cell output on the side of a code cell instead of below it.

Let's see how views look like in JupyterLab in the next slides.

---

## 1. Additional notebook views

<img src="/module7/view2.png" width="650"></img>

<img src="/module7/view3.png" width="650"></img>

Notes:

Additional notebook views can be created by right clicking the notebook's title bar, and choose "New View for Notebook". An alternative way is to go to the "File" menu, and choose "New View for Notebook".

As you can see here in the screenshot at the bottom of the slide, both open tabs are views of the same Jupyter notebook. Now you can work on and edit a part of the notebook, while also looking at a different part and potentially editing that part too.

Remember, though, you can only have one cell running at a time. This is because you still have only one kernel for your notebook, even though you're working with it from different views.

---

## 2. Additional cell output views

<img src="/module7/view.png" width="425"></img>

<img src="/module7/view1.png" width="425"></img>

Notes:
To create an output view for any computational cell, you can right-click anywhere in the cell, and then choose "Create New View for Output".
This can be useful when an output can't fit on the screen under the code cell
and need to be repositioned.

You can reposition the location of your new output window as you wish, by dragging the title bar of the output window to the desired position.

---

## 3. Side-by-side output views

<img src="/module7/sbs-output.png" width="750"></img>

Notes:
When vertical space is precious, another option is to enable **side-by-side** rendering of cell outputs. This way the output of each cell will appear horizontally to the right of the cell, thereby saving vertical space.
This has the advantage that it applies to all output cells,
and you don't have to create a separate view for each one,
as you would with the additional cell output views.

In order to enable this feature, either go the "View" menu and choose "Render Side-by-Side", or press `Shift + R` on your keyboard.
When you do that, your notebook will look it does in this slide.

---

## Exporting notebooks

<br>

To share your work with others, it is possible to export your notebook to various formats in JupyterLab, including:

1. HTML
2. PDF
3. Markdown

<br>

<img src="/module7/export.png" width="700"></img>

Notes:

To share your work with others, it is possible to export your notebook to various formats in JupyterLab, including:

- HTML
- PDF
- Markdown

Exporting your notebooks to these formats means that you can share them with your colleagues
even if they don't have JupyterLab installed themself.
This makes it easy to collect feedback from others,
since they can work in a format that is already familiar to them.

We will go through some of the key export options in the next few slides,
and you can always [read more about Jupyter notebook exports in the documentation](https://jupyterlab.readthedocs.io/en/stable/user/export.html#user-export).

---

## 1. Notebook to HTML

<img style="border:1px solid black;" src="/module7/html-export.png" width="750"></img>

Notes:
To export your notebook to HTML,
got to `File -> Save and Export Notebook As... -> HTML`
in the JupyterLab menu bar.

You can see how our notebook looks like when converted to HTML in this slide. This is the format used to show content on the web and converting to HTML often means that all your plots and animations will show up just as they do in the JupyterLab interface.

Therefore,
converting a notebook to HTML is convenient when you want to share it with someone who does not have JupyterLab installed themselves,
while retaining as many as possible of the visualization intact.
After export,
you can simply send the exported HTML file in a email (or similar) to your colleague and they can download it and open it in any modern browser such as Firefox or Chrome.

In the next slide show,
we will how you can hide code cells in your exported notebook,
which is useful when sharing them with someone who doesn't need to review you code,
just you analysis results.

---

## 2. Notebook to PDF

<img style="border:1px solid black;" src="/module7/webpdf-export.png" width="750"></img>

Notes:
There are two ways of converting notebooks to PDF,
the regular PDF option which requires LaTeX to be installed,
and the newer WebPDF option.
The WebPDF option is generally preferable,
since this makes the output PDF document look more like what you see in JupyterLab,
whereas the LaTeX PDF option will format the output document quite differently.

You can export to WebPDF by going to `File -> Save and Export Notebook As... -> WebPDF`
You can easily convert your notebook to a PDF document using the WebPDF option.
If you don't have this option available,
you might need to run `pip install nbconvert[webpdf]`
in the environment where you have JupyterLab installed ([more details on webpdf in the documentation](https://nbconvert.readthedocs.io/en/latest/usage.html?highlight=webpdf#webpdf)).

Please note that the WebPDF option does not support rendering images that are inserted using HTML tags.

---

## 3. Notebook to Markdown

<img style="border:1px solid black;" src="/module7/md-export.png" width="750"></img>

Notes:
We've learned quite a bit about the Markdown format so far in this module. The Markdown option converts your notebook to a Markdown file that only contains plain text, and can be opened with any text editor. In order to see the rendered Markdown file however, you need to open it using JupyterLab or another IDE like VS Code.

In the screenshot on this slide you can see what an example notebook would look like when converted to markdown.
Note how computational cells are converted to Markdown code blocks with appropriate syntax highlighting language included.

It is actually possible to work with notebooks directly in Markdown format instead of the default JSON format that they `.ipynb` files as stored as. This has the advantage of making the notebook source files easier to read with the human eye which can be helpful when reviewing each others code on GitHub, so it is preferred by some organizations. To do this, you would need to install the [Jupytext extension](https://jupytext.readthedocs.io/en/latest/); we will show you how to install extensions in the next few slides.

---

## JupyterLab extensions

- JupyterLab is built to be modular and extensible by nature

- When a feature is needed, developers can add it to JupyterLab by creating an extension

- JupyterLab itself is mainly a collection of various extensions

<img src="/module7/ext.png" width="400"></img>

Notes:

JupyterLab is built to be modular and extensible by nature. When a feature does not already exist in JupyterLab, developers can create an **extension** to provide that feature for JupyterLab.

Do you remember using the Git extension in JupyterLab in previous modules? Well, as the name suggests, that was an extension that was added on to JupyterLab when you followed the installation guide in Assignment 0!

As a matter of fact, JupyterLab itself is mainly a collection of various extensions.
We will cover some of the highlights for JupyterLab extensions in the next few slides
and you can [find out more about JupyterLab extensions in the documentation](https://jupyterlab.readthedocs.io/en/stable/user/extensions.html).

---

## Installing JupyterLab extensions

<br>

- JupyterLab extensions may be in either **source** or **prebuilt** format

**Prebuilt**

- Most JupyterLab extensions are in the prebuilt format
- These can be installed via `conda install <extension_name>`
- They can be used right away after installation

<br>

**Source**

- Some older JupyterLab extensions still use the source format
- These can be installed via the Extension Manager or the `jupyter labextension install <extension_name>` command
- A **source** extension cannot be used right away, but requires a rebuild of JupyterLab. 

<br>

<p style="color:black; font-size:110%; background-color:floralwhite;">
Always refer to an extension's documentation to find the recommended way of installation.
</p>

Notes:
JupyterLab extensions may be in either **source** or **prebuilt** format

**Prebuilt**

- Most JupyterLab extensions are in the prebuilt format
- These can be installed via `conda install <extension_name>`
- They can be used right away after installation

<br>

**Source**

- Some older JupyterLab extensions still use the source format
- These can be installed via the Extension Manager GUI or by typing `jupyter labextension install <extension_name>` command
- A **source** extension cannot be used right away, but requires a rebuild of JupyterLab.
  - This rebuild required the program **Node.js** to be installed in your Conda environment. You can install Node.js by running `conda install nodejs`.

Since there are different ways of installing extensions,
make sure to always refer to an extension's documentation to find the recommended way of installation.
As an example,
here is the [link to the installation steps recommended by the `jupyterlab-git` extension](https://github.com/jupyterlab/jupyterlab-git#install). This is an example of a Conda installation of a prebuilt extension.

---

## JupyterLab Extension Manager

<img src="/module7/ext2.png" width="700"></img>

Notes:

JupyterLab provides a GUI for managing extensions.

As shown in the screenshots, you can view a list of installed extensions by clicking on the puzzle-piece icon on the left-hand side bar of JupyterLab.

Suppose that we're looking for a particular extension called "jupyterlab-drawio". If you type "draw" in the search box at the top and hit `Enter`, you'll see that this extension appears at the top. Now you just need to click "Install", and your desired extension will be installed.

Note that, since the extensions that you can install using the GUI are **not prebuilt**, you will be prompted with a message box to rebuild JupyterLab. But no need to worry! Simply click the "Rebuild" button. Finally, you'll see a "Build Complete" message if everything is successful. It's safest to click "Save and Reload" so that you don't lose any unsaved changes.

---

# Let's apply what we learned!
