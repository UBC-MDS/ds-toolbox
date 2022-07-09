---
type: slides
---

# Jupyter notebooks

---

# What is a Jupyter notebook?

<br>

- A Jupyter notebook is a document that contains **narrative text**, alongside **runnable code**

- Jupyter notebooks have `.ipynb` extension

<br>

<img src="/module7/notebook.png" width="550"></img>

Notes:



---

# Creating new notebooks

<br>

<img src="/module7/new-notebook.png" width="650"></img>

Notes:

You can create new notebooks in various ways.

One way is to click the blue `+` button on the top left corner of the file explorer tab, which opens a new Launcher. You can then click on any one of the available environment kernels to create a new notebook with that kernel.

---

# Creating new notebooks

<br>

<img src="/module7/new-notebook2.png" width="700"></img>

Notes:

Another way is to right-click on the empty space of the file explorer, and then choose "New notebook". You'll be asked to choose a kernel right afterwards, and then your new notebook will be ready.

---

# Building blocks of notebooks

- A Jupyter notebook consists of **cells** (an nothing but cells).

- A cell is a block of characters, that can be interpreted in different ways depending on its type.

- A in a notebook can be one of these three types:
  - Code
  - Markdown
  - Raw

<img src="/module7/cells.png" width="500"></img>

Notes:



---

# Cell selection modes

An **active** cell in a Jupyter notebook can be in either **command** or **edit** mode:

- **Command** mode:
  - You don't have a cursor inside the cell
  - The cell has a **grey** background
  - Hit `Esc` to switch from **edit** to **command** mode

- **Edit** mode:
  - You have a cursor inside the cell
  - You can start typing or edit the code or text inside a cell
  - The cell has a **white** background
  - Hit `Enter` to switch from **command** to **edit** mode
 
<br>

<img src="/module7/command-edit.png" width="650"></img>

Notes:

Whenever you interact with a cell inside a Jupyter notebook, it becomes **activated**. This means that the cell is selected, and ready to be edited or executed.

---

# Cell selection modes

<img src="/module7/command-edit2.png" width="550"></img>

Notes:

You can also find out whether you're in command or edit mode by looking at the status bar when you have an active cell.

---

# Code cells and kernels

<br>

- Code cells contain executable code written in a specific programming language.

- Each notebook is connected to a kernel, which is the backend engine in charge of running code in a notebook.

- Code cells are executed using a notebook's kernel.

- You may run code cells in any order.

Notes:

- Code cells contain executable code written in a specific programming language.

- Each notebook is connected to a kernel, which is the backend engine in charge of running code in a notebook.
  - For example, a Jupyter notebook can be connected to an IPython kernel.
  - Remember that we installed `ipykernel` in our conda environments to make them visible to JupyterLab? `ipykernel` is the IPython kernel we've been talking about here, which is nothing but an interactive Python engine that works with JupyterLab.
  - When you create a notebook with the kernel from a particular conda environment, you'll have access to all packages installed in that environment. It is basically the same as running Python code in that environment.

- Code cells are executed using a notebook's kernel
  - When you run a code cell, the code inside the cell is sent to the kernel
  - The kernel executes the code. If there are any outputs, these are sent back to the Jupyter notebook, and we'd see them as the cell's output.

- You may run code cells in any order.
  - Each time you run a code cell, the number to the left of the code cell (e.g. `[8]:`) is incremented by 1. This helps you keep track of the order of executions.

---

# Running code cells

To run a code cell:

- First make sure the cell is selected

- Then, either click the little play button in the notebook toolbar, or

- Hit `Ctrl + Enter` on your keyboard

<img src="/module7/run-cell.png" width="600"></img>

Notes:

To run a code cell:

- First make sure the cell is selected
  - You can click anywhere in a code cell to select and activate it
  - An active code cell is indicated a blue vertical bar on its left

- Then, either click the little play button in the notebook toolbar, or

- Hit `Ctrl + Enter` on your keyboard
  - You can also use `Shift + Enter` to run a cell. The difference is that `Shift + Enter` runs the cell, then advances to the next cell, whereas with `Ctrl + Enter` the focus remains on the currently selected cell.

Note how `[ ]:` changes to `[1]:` when you run the cell. Anytime you run this cell, this execution count is incremented by 1.

---

# Useful keyboard shortcuts for cell manipulation

When you are in **command** mode, you can use the following keyboard shortcuts to perform a variety of cell actions:

- `↑`: move cell selection to above cell
- `↓`: move cell selection to below cell
- `A`: insert a new cell above current cell
- `B`: insert a new cell below current cell
- `DD`: delete current cell
- `C`: copy current cell
- `X`: cut current cell
- `V`: paste already cut or copied cell below current cell
- `Z`: undo last cell action
- `Shift + Z`: redo last undone cell action

<br>

You're already familiar with the following shortcuts:

- `Ctrl + Enter`: run current cell
- `Shift + Enter`: run current cell and advance

---

# Consoles

<br>

Consoles in JupyterLab are **interactive command lines** connected to a kernel.

<img src="/module7/console.png" width="600"></img>

Notes:

There are times that you want to quickly experiment with short pieces of code, but you don't necessarily want the code you write to be part of your Jupyter notebook.

Using an interactive **console** is a great idea in such a situation. The nice thing about it is that you can open a console that's connected to your notebooks kernel, so it will be aware of all variables, arrays, functions, etc. that you have defined in your notebook.

In order to open a console that's connected to your notebook's kernel, right-click on your notebook's name in the tab bar, and choose "New Console for Notebook".

---

# Consoles

<img src="/module7/console2.png" width="700"></img>

Notes:

Here I have opened a console for the notebook which I already created. As you can see, I print a variable called `myString`, which stores a string value. Because the console is connected to the notebook's kernel, I can access that variable right from the console.

You can resize or move the console window as you wish. Also, remember that you can run the piece of code that you've entered in the input area by pressing `Shift + Enter`.

---

# Getting help when writing code

<br>

**Auto-completion:**

You can partially type the name of a variable, function, class, or any other known name in your Python session, and then press `Tab` to see the available options for auto-completion.

<img src="/module7/tab.png" width="500"></img>

Notes:

Like in a terminal, you can take advantage of the auto-completion capability of JupyterLab (through the IPython kernel).

Whenever you partially type the name of a variable, function, class, etc. you can press `Tab` on your keyboard to see the available options.

Auto-completion is a very handy feature also to see what methods and functions are available in a package. You can type the packages alias (e.g. `np` in this case for the `numpy` package) followed by a `.`, and then hit `Tab` to see the available options.

It's important to remember that, you won't get auto-completion until the expressions that you're looking for are known in your Python session. This means that, for example, unless you run `import numpy as np`, auto-completion won't be available for any function belonging to the Numpy package.

---

# Getting help when writing code

<br>

**Contextual help:**

To see a function's docstring, press `Shift + Tab` while your curser is anywhere inside a function's name characters:

<img src="/module7/help.png" width="700"></img>

Notes:

When you're writing code, you might not remember all arguments that a particular function accepts, or the type outputs. Sometimes it's also very helpful to be able to see a few examples of how a function can be used.

In these situations, you might want to have a quick look at a function's documentation (i.e. "docstring" in Python lingo).

In JupyterLab, you can press `Shift + Tab` while your cursor is anywhere inside a function's name characters, to quickly make the function's documentation appear as a pop-up window.

Keep in mind that, the documentation pop-up content depends on the cursor location. If you move your cursor to a different function and hit `Shift + Tab` again, the helper pop-up would show the other function's documentation.

---

# Getting help when writing code

<br>

<img src="/module7/help2.png" width="800"></img>

Notes:

Another way of accessing the docstring for various functions is to open the "Contextual Help" window by right-clicking any cell and choosing "Show Contextual Help".

As soon as you click on any function's name, the contextual help window will look something like this:

---

# Jupyter notebooks & reproducibility

It is possible (and common) to execute code cells **out of order** in a Jupyter notebooks. If not careful, this can lead to to reproducibility issues.

<img src="/module7/reprod.png" width="480"></img>

Notes:

In Jupyter notebooks, it is possible (and common) to execute code cells out of order. If not careful, this can lead to to reproducibility issues.

Once you are done with your analysis, it's a good idea to take the following steps to ensure that your results and outputs are reproducible:

- Restart your notebook kernel
  - By doing this, you would make sure that the Python engine is fresh and does not contain any variables, functions, etc. Sometimes, you might define a variable and then delete the cell containing that piece of code. If someone else runs your notebook, they will run into error. Make sure your notebook contains everything it needs to run properly by restarting your kernel, and testing everything fresh!
  - To restart the kernel, go to the "Kernel" menu and choose "Restart Kernel..."

- After restarting, run all cells from the top
  - This way, you would be sure that your out-of-order executions do not affect the reproducibility of your code.
  - To run all cells from the top, go to the "Run" menu and choose "Run All Cells"

It's not a bad idea to explore other similar options in the "Kernel" and "Run" menus. For example, it's also possible and sometimes helpful to run a notebook from the top, but up to a selected cell, or run a notebook beginning from a selected cell.

---

# The Command Palette

<br>

<img src="/module7/comm-pal.png" width="600"></img>

Notes:

Whenever you happen to forget the where a particular command is, you can take advantage of the Command Palette in JupyterLab.

To open the Command Palette, go to the "View" menu and choose "Activate Command Palette", or use the corresponding keyboard shortcut.

In the search box that appears, you can type the name of the command you're looking for. The nice thing is that, it works well even if you **partially** remember the command's name!

---

# Let's see what you learned!
