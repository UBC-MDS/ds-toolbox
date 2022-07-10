---
type: slides
---

# Markdown for text formatting

---

# What is Markdown?

<br>

<img src="/module7/md.png" width="200"></img>

**Markdown** is a fast and easy way to format plain text.

Most important features:

- Quickly write text that can be nicely formatted upon rendering

- A Markdown file is nothing but a plain text file!

Markdown is supported on various platforms, including GitHub (remember `README.md` files?) and even Google Doc!

Notes:

So far we've only talked about code cells, which are responsible for the computational part of a Jupyter notebook. The other major type of cell in a Jupyter notebook is what's known as a **Markdown** cell, which allows you to write formatted text. This is where you can use to store the narrative part of your Jupyter notebook.

**Markdown** provides a fast and easy way to format plain text, without the need to have a graphical interface to manipulate the looks of your document, or needing any special file format. If you're familiar with HTML or Latex, you'll notice a lot of similarities. But using Markdown is much simpler and geared towards applications where you need to write a formatted document with convenience, and you don't need super advanced typographical elements in your document.

Markdown can either be used inside stand-alone text files (usually with the `.md` format, e.g. `README.md`), or as a part of a framework such as Jupyter notebooks.

Most important features of the Markdown format are:

- It let's you quickly write text that can be nicely formatted upon rendering. 

- A Markdown content is nothing but plain text, and can be stored as plain text files!

---

# Markdown cells

<br>

<img src="/module7/md-doc.png" width="800"></img>

Notes:

Here is an example of of a Markdown cell. On the left, you see the Markdown source itself, and on the right, you see how it looks when it is rendered by Jupyter Lab. It's nice to be able to format the text to look that nice just by following simple conventions!

---

# Markdown cells

<img src="/module7/md2.png" width="700"></img>

Notes:

Whenever you create a new cell in a Jupyter Notebook, by default it will be a **code** cell. So if you write regular text in it, you won't get Markdown output.

In order to convert a code (or raw) cell to a Markdown cell, you can do either of the following options:

- In command mode, press `M` on your keyboard to convert the currently selected cell to a Markdown cell

- As you can see in the picture here, you can also view the current cell type in the toolbar of your notebook. You can click on "Code", and then from the dropdown menu select "Markdown" to convert the selected cell to a Markdown cell.

---
 
# The Markdown syntax

<br>

**Headers and font styles:**

<img src="/module7/md3.png" width="800"></img>

Notes:

Let's learn a few most commonly used formatting rules in Markdown. In order to try these out, create a Markdown cell in your Jupyter notebook as you've learner earlier. After you're done with editing the content of the cell, simply press `Ctrl + Enter` (or `Shift + Enter`) to have Jupyter render your cell. This is the same as with code cells.

Here on the left, you can see the source Markdown written in a Markdown cell, and on the right, you see what you'd get if you "run" that cell by pressing `Ctrl + Enter`. When you do this, Jupyter interprets your Markdown content and renders it accordingly.

---

# The Markdown syntax

<br>

**Lists and quotes:**

<img src="/module7/md4.png" width="800"></img>

Notes:

Now's the time to create a bullet-point style list:

```md
- Item 1
- Item 2
- Item 3
  - Sub-item 1
    - Sub-sub-item 1
```

You can also create numbered lists:

```md
1. One
1. Two
5. Three
```

One other useful formatting syntax is the **block quote**:

```md
> Here is a block quote!
>
> You can have multiple paragraphs in block quotes.
```

---

# The Markdown syntax

<br>

**Links and images:**

<img src="/module7/md5.png" width="800"></img>

Notes:

You can insert a link into your markdown cell by following this syntax:

`[Link text](https://masterdatascience.ubc.ca/)`

Inserting images is also very easy and has a syntax similar to inserting links, except that you also have to remember to put an exclamation mark at the beginning:

`![](https://ubc-mds.github.io/img/mdslogopad.png)`

---

# The Markdown syntax

<br>

**Formatted code:**

<img src="/module7/md6.png" width="800"></img>

Notes:

Code is usually formatted with a **mono-space font**, just as it usually appears in any IDE. For example, anything you write in a **code cell** inside Jupyter Lab shows up with a mono-space font and has Python syntax highlighting.

In Markdown, we can easily format any code to be rendered in mono-space font using back ticks like `this` (the key under `Esc` on your keyboard!). For example, this is Python code: `import numpy as np`, right?

Another way to have code is to have a code block by enclosing text inside a pair of three back ticks:

```
arr = np.zeros((2, 2))
result = arr + 10
```

We can also enable syntax highlighting by specifying the language in front of the first set of three back ticks:

```python
arr = np.zeros((2, 2))
result = arr + np.pi
```

---

# The Markdown syntax

<br>

**Math formulas:**

<img src="/module7/md7.png" width="800"></img>

Notes:

If you're familiar with $\LaTeX$, you can also use math typesetting with ease.

Here is an inline math formula: $ F = ma $.

You can also write math in a math block, which you can create using a pair of double dollar signs:

---

# Markdown pro tips

<br>

- Standard Markdown provides a limited (but mostly enough) formatting styles

- Sometimes, we just need more!

<br>

You can use HTML inside Markdown text to

- Change the displayed size of an image
- Change text size and color

Notes:

Since Markdown renderers use HTML under the hood to format a Markdown text document, HTML tags will be rendered when used inside a Markdown document.

Sometimes it might be helpful to borrow a few tricks from HTML to achieve certain formatting styles that are not available in standard Markdown.

Here are a few things you can't do with standard Markdown, but you can do with HTML tags:

- Change the displayed size of an image
- Change text size and color

---

# Pro tips: Change image size

You can use the following HTML tag to change the displayed size of an image:

```html
<img src="<PATH_TO_FILE>" width="400"></img>
```

<br>

<img src="/module7/html-tag.png" width="800"></img>

---

# Pro tips: Change text size & color

You can use the following HTML tag to change the size and color of a piece of text:

```html
<p style="color:black; font-size:120%">
Some text you want to show in a different color or size
</p>
```

<br>

<img src="/module7/html-tag2.png" width="800"></img>

Notes:

Keep in mind that you can do much more than just change the size of an image or color of text in HTML.

However, since the whole idea of Markdown is its readability and that it can be written without the usual complexity of markup languages such as HTML, try to use HTML tags sparingly and only if you absolutely need to achieve a particular formatting.

---

# Let's see what you learned!
