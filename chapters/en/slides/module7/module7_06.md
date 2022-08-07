---
type: slides
---

# Advanced JupyterLab tips and tricks

Notes:
In this module we will present an assortment of intermediate techniques that can help you be more efficient when working in JupyterLab.

---

## Running shell commands in Jupyter notebooks

<br>

In order to run a shell command in a cell, prefix it with a `!`:

<img src="/module7/shell.png" width="600"></img>

Notes:

Sometimes it is very handy to be able to quickly run shell commands from within a Jupyter notebook. You can run any shell command by prefixing it with a `!`, and run it inside a computational cell just like any other code cell.

You cannot interact with the output from shell commands as you would in a terminal.
Therefore,
if you want to install something with Conda,
you will not be able to respond `y/n` on the confirmation prompt
and instead need to append the `-y` option
to the original command to automatically accept the confirmation prompt.

---

## Running shell commands in Jupyter notebooks

A common action: exporting a notebook without code cells

<img src="/module7/shell-command-nbconvert.png" width="700"></img>

Notes:

One common use of `!` commands in notebook cells is to export a notebook without its code cells by using `nbconvert` directly,
instead of the export menu in JupyterLab (which also calls `nbconvert` under the hood).
To do this, copy and paste bellow command into a code cell in your notebook.
Then modify the command with an appropriate notebook file name instead of `this-notebooks-name.ipynb`,
and run the code cell:

```shell
!jupyter nbconvert this-notebooks-name.ipynb \
    --to html \
    --output=output-filename.html \
    --no-input
```

Of course you can run this command using a terminal, but it could be much more convenient if you just quickly want to run a shell command in the folder in which the notebook resides.
If you put it in the last cell in your notebook,
you will always update the exported HTML file
when you click "Run all" in JupyterLab.

---

## Magic commands

<br>

Magic commands provide useful functionalities in a convenient and concise way.

<img src="/module7/cell-magic.png" width="700"></img>

<br>

<p style="color:black; font-size:110%; background-color:floralwhite;">
Magic commands introduced here are provided by and specific to IPython. Other languages may have their own set of magic commands, or none at all.
</p>

Notes:
Magic commands are special commands which implement a particular functionality that might not be doable or straight-forward using Python code. For example, you can measure the amount of time it takes on average to run a code cell, or run a `.py` Python script file directly using the notebook's kernel.

A magic command can be run either in **line** or **cell** mode:

- Line mode: Only applies to one line of code, and is activated by prefixing a relevant command with `%`. For example, `%reset -f` removes all variable names defined by the user without restarting the kernel.

- Cell mode: Applies to an entire cell, and is activated by prefixing a relevant command with `%%` at the beginning of a code cell. For example, the `%%timeit` cell magic in the following code runs the cell multiple times to compute an average running time:

```
%%timeit
for i in range(1_000_000):
    (i - 0.1)**2
```

Note that magic commands are only available in notebooks running a Python kernel.
The `%lsmagic` magic command lists all the available magic commands,
and you can [read more about the magic commands in the documentation](https://ipython.readthedocs.io/en/stable/interactive/magics.html).

---

## Magic commands: Post-mortem debugging

- **Post-mortem debugging**:

<img src="/module7/pm-debug.png" width="700"></img>

Notes:
You've already seen how you can reset the Python namespace using `%reset -f` and time your code using `%%timeit`.

Another useful magic command allows us to perform Post-mortem debugging. If you run a cell and happen to get an error, you can investigate what happened *post mortem* (i.e., after the error was thrown (literally "after death")), by running `%debug` in a different cell. Here, you can see an example of a syntax error, and the follow-up investigation using `%debug`.

When an error is thrown,
the traceback shows that several files are affected.
When you enter into debugging mode,
you might not be in the right file from the beginning.
If this is the case,
you can use `u` and `d` to navigate up and down in the files hierarchy respectively.
Two other useful shortcuts are `c` to continue execution until the next error
and `q` to quit the debugger and go back to working with your code cells
(the rest of your notebook is unresponsive until you quit the debugger with `q`).

The debugger that is used by JupyterLab is the standard Python debugger `pdb`,
so you can [read more about all the options and commands in the Python documentation](
https://docs.python.org/3/library/pdb.html#debugger-commands-1).

---

## Magic commands: Searching code cell history

- **Searching code cell history**:

<img src="/module7/search-hist.png" width="700"></img>

Notes:
Another useful magic command is `%hist`
which displays the history for all the input cells you have executed.
This is a bit overwhelming on its own, but it is very useful with the `-g` option.

In JupyterLab, you can use `%hist -g <search_pattern>` to search through all code cells you have ever executed (including from previous sessions, so it is similar to `history | grep <search_pattern>` in the shell). This is great for when you delete that piece of code you were *100% sure* you would never need again and was not important enough to be committed, but you —of course— end up wanting it back a few days later.

Here, you see an example of using `%hist -g` to find a list of executed cells which contained "`range(1, 10)`".

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

- The graphical debugger

- Real-time collaboration

- Workspaces

Notes:
In addition to what we have discussed so far, there are a few additional advanced features of JupyterLab which can be helpful when working on specific projects. Some of these features are:

- The graphical debugger

- Real-time collaboration

- Workspaces

We will not discuss these features in detail here, but we'll briefly explain their functionality and point you to the official documentation for each feature in the next few slides.

---

## The graphical debugger

Documentation: https://jupyterlab.readthedocs.io/en/stable/user/debugger.html

<img src="/module7/debugger.gif" width="800"></img>

Notes:

When you write code, things usually do not go perfectly on the first go, and you'll eventually need to debug your code at some point.

We have already seen how we can use `%debug` to perform post-mortem debugging
and JupyterLab recently also added a useful graphical debugger.
This allows for easier access to more advanced debugging techniques
such as setting breakpoints, inspecting variables, and more.

You can find more details, including a tutorial notebook, [in JupyterLab's official documentation](https://jupyterlab.readthedocs.io/en/stable/user/debugger.html).

---

## Real-time collaboration

Documentation: [https://jupyterlab.readthedocs.io/en/stable/user/rtc.html](https://jupyterlab.readthedocs.io/en/stable/user/rtc.html)

<img src="/module7/rtc.png" width="750"></img>

Notes:

Another interesting and potentially helpful feature of JupyterLab is that you can enable **real-time collaboration** between multiple clients. Every user will have their own cursor in the same notebook as shown in the screenshot here (pretty much like in a Google Doc!). They can simultaneously edit and execute cells, and all the changes will be visible to other users in real time.

You can [read more about the real-time collaboration feature of JupyterLab in the documentation ](https://jupyterlab.readthedocs.io/en/stable/user/rtc.html).

Note that the real-time collaboration feature of JupyterLab is still experimental,
and being actively worked on
so its features and interface might change quickly.

---

## Workspaces

Documentation: [https://jupyterlab.readthedocs.io/en/stable/user/urls.html#managing-workspaces-ui](https://jupyterlab.readthedocs.io/en/stable/user/urls.html#managing-workspaces-ui)

<img src="/module7/workspace.png" width="600"></img>

Notes:

When you work in JupyterLab, you might have a couple of files, views, and other windows open. You might also have set up the layout of your JupyterLab in a particular way; for example, notebooks on the left, output views on the right, and consoles on the bottom.

If you shutdown and relaunch JupyterLab, you'll see that this particular setup, including the open files and tabs and their arrangements, will get restored. This is because JupyterLab internally stores these information using the concept of a **workspace**.

In case you need different setup of open files and layouts while working on multiple or large projects, you may want to create and use several workspaces. This is easily possible with JupyterLab: you can create new workspaces or clone existing workspaces and modify them as you wish, just through the URL of your browser. In order [to learn how to use workspaces, check out JupyterLab's documentation ](https://jupyterlab.readthedocs.io/en/stable/user/urls.html#managing-workspaces-ui).

---

# Let's apply what we learned!
