---
type: slides
---

# Markdown for text formatting

Notes:
In this slide deck we will be learning about how we can use the Markdown text format effectively in our notebooks.

---

## What is Markdown?

<br>

<img src="/module7/md.png" width="200"></img>

**Markdown** is a fast and easy way to format plain text.

Most important features:

- Quickly write text that can be nicely formatted upon rendering

- A Markdown file is nothing but a plain text file!

Markdown is supported on various platforms, including GitHub (remember `README.md` files?) and even Google Doc!

Notes:

So far we've only talked about code cells, which are responsible for the computational part of a Jupyter notebook. The other major type of cell in a Jupyter notebook is what's known as a **Markdown** cell, which allows you to write formatted text. This is where you can store the narrative part of your Jupyter notebook.

**Markdown** provides a fast and easy way to format plain text, without the need to have a graphical interface to manipulate the looks of your document, or needing any special file format. If you're familiar with HTML or Latex, you'll notice a lot of similarities. But using Markdown is much simpler and geared towards applications where you need to write a formatted document with convenience, and you don't need super advanced typographical elements in your document.

Markdown can either be used inside stand-alone text files (usually with the `.md` format, e.g. `README.md`), or as a part of a framework such as Jupyter notebooks.

Most important features of the Markdown format are:

- It let's you quickly write text that can be nicely formatted upon rendering. 

- A Markdown content is nothing but plain text, and can be stored as plain text files!

---

## Markdown cells

<br>

<img src="/module7/md-doc.png" width="800"></img>

Notes:

Here is an example of of a Markdown cell. On the left, you see the Markdown source itself, and on the right, you see how it looks when it is rendered by Jupyter Lab after executing the cell (e.g. by pressing `Ctrl + Enter`). When you execute a Markdown cell this, Jupyter interprets its content and renders it accordingly.

It's nice to be able to format the text to look that nice just by following simple conventions!

---

## Markdown cells

<img src="/module7/md2.png" width="700"></img>

Notes:

Whenever you create a new cell in a Jupyter Notebook, by default it will be a **code** cell. So if you write regular text in it, you won't get Markdown output.

In order to convert a code (or raw) cell to a Markdown cell, you can do either of the following options:

- In command mode, press `M` on your keyboard to convert the currently selected cell to a Markdown cell

- As you can see in the picture here, you can also view the current cell type in the toolbar of your notebook. You can click on "Code", and then from the dropdown menu select "Markdown" to convert the selected cell to a Markdown cell.

---

## The Markdown syntax: Headings

<br>

<img src="/module7/md3.png" width="800"></img>

Notes:

Let's learn a few most commonly used formatting rules in Markdown.
In this slide we can see how headings are created by prepending hash symbols (`#`) to the headings text.

One hash indicated the top level heading of the document
(this is usually your title),
and two hashes indicate the first level of subheadings.

You can have as many levels of subheadings as you see fit,
and they will all show up hierarchically in the table of contents tab of the left side bar
that we introduced in chapter 1.

---

## The Markdown syntax: Lists and quotes

<br>

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

You can also create numbered lists (regardless which number you put in, JupyterLab will automatically number the list in consecutive order):

```md
1. One
1. Two
5. Three
```

One other useful formatting syntax is the **block quote** for quoting or calling special attention to longer sections of text:

```md
> Here is a block quote!
>
> You can have multiple paragraphs in block quotes.
```

---

## The Markdown syntax: Links and images
<br>

<img src="/module7/md5.png" width="800"></img>

Notes:

You can insert a link into your markdown cell by following this syntax:

`[Link text](https://masterdatascience.ubc.ca/)`

Inserting images is also very easy and has a syntax similar to inserting links, except that you also have to remember to put an exclamation mark at the beginning:

`![UBC Master of data science logo](https://ubc-mds.github.io/img/mdslogopad.png)`

The text inside the `[]` is often called "alt text" and will show up if the image can't display for some reason, and it is also helpful for people who rely on accessibility features, so it is important that you include a descriptive message here. [This article describes how to write an effective alt text](https://support.microsoft.com/en-us/office/everything-you-need-to-know-to-write-effective-alt-text-df98f884-ca3d-456c-807b-1a1fa82f5dc2), in case you are interested to learn more about this topic.

---

## The Markdown syntax: Formatted code

<br>

<img src="/module7/md6.png" width="800"></img>

Notes:

Code is usually formatted with a **mono-space font**, just as it usually appears in any IDE. For example, anything you write in a **code cell** inside Jupyter Lab shows up with a mono-space font and has Python syntax highlighting.

In Markdown, we can easily format any code to be rendered in mono-space font using back ticks like `this` (the key under `Esc` on your keyboard with the symbol <code>\`</code>). For example, this is Python code: `import numpy as np`, right?

Another way to have code is to have a code block by enclosing text inside a pair of three back ticks:

~~~
```
arr = np.zeros((2, 2))
result = arr + 10
```
~~~

We can also enable colorful syntax highlighting by specifying the language in front of the first set of three back ticks:

~~~
```python
arr = np.zeros((2, 2))
result = arr + np.pi
```
~~~

---

## The Markdown syntax: Math formulas

<br>

<img src="/module7/md7.png" width="800"></img>

Notes:

Markdown supports $\LaTeX$ math formulas, which are a powerful and commonly used way to write mathematical expression.
If you have never seen $\LaTeX$ before, it can look a bit intimidating, especially for the more complex formulas, but you can quickly pick up the basic expressions and then look up more advanced functionality as it is needed.

To write an "inline" math formula in a paragraph of text, we can surround the expression with a pair of dollar signs: `Here is an inline math formula $ F = ma $`.

Longer formulas can be written in math "block", which you can create by surrounding the math expression with a pair of double dollar signs as in the bottom of the screenshot.

---

## Pro tips for Markdown formatting

<br>

- Markdown provides limited formatting styles that are often enough, but not always.

- Sometimes, we just need more!

<br>

You can use HTML inside Markdown text to enable advanced formatting, such as

- Change the displayed size of an image
- Change text size and color

Notes:

Since Markdown renderers use HTML under the hood to format a Markdown text document, HTML tags will be rendered when used inside a Markdown document.

Sometimes it might be helpful to borrow a few tricks from HTML to achieve certain formatting styles that are not available in standard Markdown.

Here are a few things you can't do with standard Markdown, but you can do with HTML tags:

- Change the displayed size of an image
- Change text size and color

---

## Pro tip 1: Change image size

You can use the following HTML tag to change the displayed size of an image:

```html
<img src="<PATH_TO_FILE>" width="400px"></img>
```

<br>

<img src="/module7/html-tag.png" width="800"></img>

Notes:

When you use

```html
<img src="<PATH_TO_FILE>" width="400px"></img>
```

The `px` for specifying the `width` is optional. Instead of `px`, you can also use `%` to specify the `width` relative to the original width of the image. For example, the following HTML tag

```html
<img src="<PATH_TO_FILE>" width="150%"></img>
```

shows an enlarged view of the image, where the displayed width is 1.5 times larger than the original width of the image.

---

## Pro tip 2: Change text size & color

You can use the following HTML tag to change the size and color of a piece of text:

```html
<p style="color:black; font-size:120%">
Some text you want to show in a different color or size
</p>
```

<br>

<img src="/module7/html-tag2.png" width="800"></img>

Notes:
In this slide you can see how we can style a paragraph of text
using the HTML paragraph tags (`<p>`) together with a `style` attribute.
The `style` attribute allows us to specify CSS properties that we want to style our text with.

Learning HTML and CSS is beyond the scope of this course,
but the excellent [Khan academy has a helpful introduction to both HTML and CSS](https://www.khanacademy.org/computing/computer-programming/html-css)
in case you are interested to learn more about these topics.

Keep in mind that you can do much more than just change the size of an image or color of text in HTML. However, since the whole idea of Markdown is its readability and that it can be written without the usual complexity of markup languages such as HTML, try to use HTML tags sparingly and only if you absolutely need to achieve a particular formatting.

---

# Let's see what you learned!
