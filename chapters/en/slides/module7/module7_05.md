---
type: slides
---

# Do more with JupyterLab

Notes:
In this module we will present and assortment of intermediate and advanced techniques that can help you be more efficient when working in JupyterLab.

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
We've learned quite a bit about the Markdown format so far in this chapter. The Markdown option converts your notebook to a Markdown file that only contains plain text, and can be opened with any text editor. In order to see the rendered Markdown file however, you need to open it using JupyterLab or another IDE like VS Code.

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

Do you remember using the Git extension in JupyterLab in previous chapters? Well, as the name suggests, that was an extension that was added on to JupyterLab when you followed the installation guide in Assignment 0!

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

## Running shell commands in Jupyter notebooks

<br>

In order to run a shell command in a cell, prefix it with a `!`:

<img src="/module7/shell.png" width="600"></img>

Notes:

Sometimes it is very handy to be able to quickly run shell commands from within a Jupyter notebook. You can run any shell command by prefixing it with a `!`, and run it inside a computational cell just like any other code cell.

---

## Running shell commands in Jupyter notebooks

A common action: exporting a notebook without code cells

<img src="/module7/shell-command-nbconvert.png" width="700"></img>

Notes:

One common use of `!` commands in notebook cells is to export a notebook using `nbconvert` without its code cells. To do this, copy and paste bellow command into a code cell in your notebook. Then modify the command with an appropriate notebook file name instead of `this-notebooks-name.ipynb`, and run the code cell:

```shell
!jupyter nbconvert this-notebooks-name.ipynb \
    --to html \
    --output=output-filename.html \
    --no-input
```

Of course you can run this command using a terminal, but it could be much more convenient if you just quickly want to run a shell command in the folder in which the notebook resides.

---

## Magic commands

<br>

Magic commands are special commands that provide useful functionalities in a convenient and concise way.

<img src="/module7/cell-magic.png" width="700"></img>

<br>

<p style="color:black; font-size:110%; background-color:floralwhite;">
Magic commands introduced here are provided by and specific to IPython. Other languages may have their own set of magic commands, or none at all.
</p>

Notes:

Magic commands are special commands which implement a particular functionality that might not be doable or straight-forward using Python code. For example, you can measure the amount of time it takes on average to run a code cell, or run a `.py` Python script file directly using the notebook's kernel.

A magic command can be run either in **line** or **cell** mode:

- Line mode: Only applies to one line of code, and is activated by prefixing a relevant command with `%`. For example, `%reset -f` removes all names defined by the user without restarting the kernel.

- Cell mode: Applies to an entire cell, and is activated by prefixing a relevant command with `%%` at the beginning of a code cell. For example, the `%%timeit` cell magic in the following code runs the cell multiple times to compute an average running time:

```
%%timeit
for i in range(1_000_000):
    (i - 0.1)**2
```

---

## Magic commands

Two other common uses:

- **Post-mortem debugging**:

<img src="/module7/pm-debug.png" width="700"></img>

- **Search command history**:

<img src="/module7/search-hist.png" width="700"></img>

Notes:

You've already seen how you can reset the Python namespace using `%reset -f` and time your code using `%%timeit`. Let's also look at two other useful magic commands here:

- **Post-mortem debugging**:

If you run a cell and happen to get an error, you can investigate what happened *post mortem* (i.e., after the error was thrown), by running `%debug` in a different cell. Here, you can see an example of a syntax error, and the follow-up investigation using `%debug`.

- **Search command history**:

In JupyterLab, you can use `%hist -g <search_pattern>` to search through all code cells you have ever executed (including from previous sessions, so it is similar to `history | grep <search_pattern>` in the shell). This is great for when you delete that piece of code you were *100% sure* you would never need again and was not important enough to be committed, but you —of course— end up wanting it back a few days later. Here, you see an example of using `%hist -g` to find a list of executed cells which contained "`range(1, 10)`".

Finally, there are many more magic commands that we can cover here. If you're interested, you can:

- Run `%lsmagic` inside a cell to see the list of all magic commands, and

- Find the comprehensive documentation of all magic commands [here](https://ipython.readthedocs.io/en/stable/interactive/magics.html).

---

## Multiple cursors

<br>

- Hold `Alt`/`Option` + drag:

<img src="/module7/multi-cursor.gif" width="700"></img>

<br>

- Hold `Alt`/`Option` + `Ctrl`/`Command` + click

<img src="/module7/multi-cursor2.gif" width="700"></img>

Notes:

A cool and sometimes time-saving feature in JupyterLab is the multiple cursor feature.

Suppose that here, you need to type `100 + ` in front of all of these variable definitions. Instead of typing `100 + ` one by one, first hold down `Alt` (in Windows or Linux) or `Option` (in Mac). Your mouse pointer changes into a `+`. Now, click and hold while dragging down the cursor to place multiple cursors at multiple positions, just as seen in the first recording here. When you're happy with your selection, you can start typing, and voila!

Instead of

- holding `Alt`/`Option` + drag

you can also

- hold `Alt`/`Option` + `Ctrl`/`Command` + click

at various locations to place multiple cursors wherever you need them, and then start typing. An example of this is shown in the second recording.

---

## Next-level JupyterLab

<br>

More advanced features of JupyterLab:

- The debugger

- Real-time collaboration

- Workspaces

Notes:

In addition to what we have discussed so far, there are more advanced features of JupyterLab which can be tremendously helpful when working on specific projects. Some of these features are:

- The debugger

- Real-time collaboration

- Workspaces

We will not discuss these features in detail here, but we'll briefly explain their functionality and point you to the official documentation for each feature in the next few slides.

---

## The debugger

Documentation: [https://jupyterlab.readthedocs.io/en/stable/user/debugger.html](https://jupyterlab.readthedocs.io/en/stable/user/debugger.html)

<img src="/module7/debugger.gif" width="800"></img>

Notes:

When you write code, things usually do not go perfectly on the first go, and you'll eventually need to debug your code at some point. 

JupyterLab provides a very useful visual debugger, which you can use to set breakpoints and step into your code, inspect variables, and more. You can find more details, including a tutorial notebook, [here](https://jupyterlab.readthedocs.io/en/stable/user/debugger.html) in JupyterLab's official documentation.

---

## Real-time collaboration

Documentation: [https://jupyterlab.readthedocs.io/en/stable/user/rtc.html](https://jupyterlab.readthedocs.io/en/stable/user/rtc.html)

<img src="/module7/rtc.png" width="750"></img>

Notes:

Another interesting and potentially helpful feature of JupyterLab is that you can enable **real-time collaboration** between multiple clients. Every user will have their own cursor in the same notebook as shown in the screenshot here (pretty much like in a Google Doc!). They can simultaneously edit and execute cells, and all the changes will be visible to other users in real time.

For more detailed info on the real-time collaboration feature of JupyterLab, please refer to JupyterLab's documentation [here](https://jupyterlab.readthedocs.io/en/stable/user/rtc.html).

Note that the real-time collaboration feature of JupyterLab is still experimental.

---

## Workspaces

Documentation: [https://jupyterlab.readthedocs.io/en/stable/user/urls.html#managing-workspaces-ui](https://jupyterlab.readthedocs.io/en/stable/user/urls.html#managing-workspaces-ui)

<img src="/module7/workspace.png" width="600"></img>

Notes:

When you work in JupyterLab, you might have a couple of files, views, and other windows open. You might also have set up the layout of your JupyterLab in a particular way; for example, notebooks on the left, output views on the right, and consoles on the bottom.

If you shutdown and relaunch JupyterLab, you'll see that this particular setup, including the open files and tabs and their arrangements, will get restored. This is because JupyterLab internally stores these information using the concept of a **workspace**.

In case you need different setup of open files and layouts while working on multiple or large projects, you may want to create and use several workspaces. This is easily possible with JupyterLab: you can create new workspaces or clone existing workspaces and modify them as you wish, just through the URL of your browser. In order to to learn how to do so, please check out JupyterLab's documentation [here](https://jupyterlab.readthedocs.io/en/stable/user/urls.html#managing-workspaces-ui).

---

# Let's see what you learned!
