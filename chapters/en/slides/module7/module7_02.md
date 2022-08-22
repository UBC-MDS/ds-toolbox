---
type: slides
---

# Markdown for text formatting

Notes:
In this slide deck, we will be learning about how we can use the Markdown text format effectively in our notebooks.

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

**Markdown** provides a fast and easy way to format plain text, without the need to have a graphical interface to manipulate the looks of your document, or needing any special file format.

If you're familiar with HTML or Latex, you'll notice a lot of similarities. But using Markdown is much simpler and geared towards applications where you need to write a formatted document with convenience, and you don't need super advanced typographical elements in your document.

Markdown can either be used inside stand-alone text files (usually with the `.md` format, e.g. `README.md`), or as a part of a framework such as Jupyter notebooks.

Most important features of the Markdown format are:

- It lets you quickly write text that can be nicely formatted upon rendering.

- The content of a Markdown file is nothing but plain text, and can be stored as a plain text file.

---

## Markdown cells

<br>

<img src="/module7/md-doc.png" width="800"></img>

Notes:

Here is an example of a Markdown cell. On the left, you see the Markdown source itself, and on the right, you see how it looks when it's rendered by Jupyter Lab after executing the cell (e.g. by pressing `Ctrl + Enter`).

When you execute a Markdown cell, Jupyter interprets its content and renders it accordingly.

It's nice to be able to format the text to look that nice just by following simple conventions!

---

## Markdown cells

<img src="/module7/md2.png" width="700"></img>

Notes:

Whenever you create a new cell in a Jupyter Notebook, by default it will be a **code** cell. So if you write regular text in it, you won't get Markdown output.

In order to convert a code (or raw) cell to a Markdown cell, you can do either of the following:

- In command mode, press `M` on your keyboard to convert the currently selected cell to a Markdown cell

- The current cell type is also shown in the toolbar of your notebook as seen in the picture. You can click on the dropdown menu that shows the text "Code", and then from the menu select "Markdown" to convert the selected cell to a Markdown cell.

---

## The Markdown syntax: Headings

<br>

<img src="/module7/md3.png" width="800"></img>

Notes:

Let's learn a few most commonly used formatting rules in Markdown.
In this slide we can see how headings are created by prepending the pound sign (`#`) to the heading text.

One pound sign indicates the top level heading of the document
(this is usually your title),
and two pound signs indicate the first level of subheadings.

You can have as many levels of subheadings as you see fit,
and they will all show up hierarchically in the table-of-contents tab in the left side bar,
which we introduced in Module 1.

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

You can also create numbered lists. Regardless which number you put in, JupyterLab will automatically number the list in consecutive order:

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

The text inside the `[]` is often called "alt text" and will show up if the image can't be display for some reason, and it is also helpful for people who rely on accessibility features, so it is important that you include a descriptive message here. [This article describes how to write an effective alt text](https://support.microsoft.com/en-us/office/everything-you-need-to-know-to-write-effective-alt-text-df98f884-ca3d-456c-807b-1a1fa82f5dc2), in case you are interested to learn more about this topic.

---

## The Markdown syntax: Formatted code

<br>

<img src="/module7/md6.png" width="800"></img>

Notes:

Code is usually formatted with a **mono-space font**, just as it usually appears in any IDE. For example, anything you write in a **code cell** inside Jupyter Lab shows up with a mono-space font and has Python syntax highlighting.

In Markdown, we can easily format any code to be rendered in mono-space font using backticks like the word `this` that you can see here in the picture.

You can type a backtick by pressing the key under `Esc` on your keyboard (which is the key with the <code>\`</code> and <code>\~</code> symbols on it). For example, what you can see here on the picture, `import numpy as np`, looks like Python code, right?

Another way to write code is to have a code block by enclosing text inside a pair of 3 backticks:

~~~
```
arr = np.zeros((2, 2))
result = arr + 10
```
~~~

We can also enable colorful syntax highlighting by specifying the language in front of the first set of the 3 backticks:

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

Markdown supports $\LaTeX$ math formulas, which are a powerful and commonly used way to write mathematical expressions.

If you have never seen $\LaTeX$ before, it can look a bit intimidating, especially for the more complex formulas. But you can quickly pick up the syntax for basic expressions, and then look up the more advanced functionality whenever needed.

To write an "inline" math formula in a paragraph of text, we can surround the expression with a pair of dollar signs: `Here is an inline math formula $ F = ma $`.

Longer formulas can be written in a math "block", which you can create by surrounding the math expression by a pair of double dollar signs, as shown at the bottom of the screenshot.

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

Since Markdown renderers use HTML under the hood to format a Markdown text document, explicit HTML tags will be rendered when used inside a Markdown document.

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

You can use the HTML tag that you see in the slide to change the displayed size of an image:

```html
<img src="<PATH_TO_FILE>" width="400px"></img>
```

Note that in `width=400px`, `px` is optional. Instead of `px` (which stands for "pixel"), you can also use `%` to specify the `width` relative to the original width of the image. For example, the image HTML tag with `width="150%"`

```html
<img src="<PATH_TO_FILE>" width="150%"></img>
```

enlarges the displayed image by a factor of 1.5.

---

## Pro tip 2: Change text size & color

You can also use the following HTML tag to change the size and color of a piece of text:

```html
<p style="color:black; font-size:120%">
Some text you want to show in a different color or size
</p>
```

<br>

<img src="/module7/html-tag2.png" width="800"></img>

Notes:

In this slide, you can see how we can also style a paragraph
using the HTML paragraph tags (`<p>`) together with the `style` attribute.
The `style` attribute allows us to specify CSS properties that we want to style our text with.

Learning HTML and CSS is beyond the scope of this course,
but the excellent [Khan academy has a helpful introduction to both HTML and CSS](https://www.khanacademy.org/computing/computer-programming/html-css)
in case you are interested to learn more about these topics.

Keep in mind that you can do much more than just changing the size of an image or the color of text in HTML.
However, since the whole idea of Markdown is its readability, and that it can be written without the usual complexity of markup languages such as HTML, try to use HTML tags sparingly and only if you absolutely need to achieve a particular formatting.

---

# Let's apply what we learned!
