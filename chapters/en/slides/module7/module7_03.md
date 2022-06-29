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

# Cell selection modes

A cell in a Jupyter notebook can be in either **command** or **edit** mode:

- **Command** mode:
  - You don't have an active cursor inside the cell
  - The cell has a **grey** background
  - Hit `Esc` to switch from **edit** to **command** mode

- **Edit** mode:
  - You have an active cursor inside the cell
  - You can start typing or edit the code or text inside a cell
  - The cell has a **white** background
  - Hit `Enter` to switch from **command** to **edit** mode
 
<br>

<img src="/module7/command-edit.png" width="650"></img>

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

# Markdown cells



Notes:



---

# Let's see what you learned!
