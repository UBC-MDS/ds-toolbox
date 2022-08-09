---
type: slides
---

# Add your own content

Notes:
Now that we know what a Jupyter Book is,
let's go ahead and practice adding content to our sample book!

---

## Create your file and add content to it

<br>

Create a new file called `my-markdown-file.md` with the following content:

<img src="/module8/mymarkdownfile.png" width="700"></img>

Markdown syntax specific to Jupyter Book:

- `(section-label)=`
- `[link text](link-target)`

Notes:
In the folder with all of your sample book contents, create a new file called `my-markdown-file.md`. Put the following content in it:

<img src="/module8/mymarkdownfile.png" width="700"></img>

We’ve added two new pieces of markdown syntax, both of them are related to cross-references.

- `(section-label)=` is a label that’s attached to a section header. It refers to whatever header follows, and allows you to refer to this label later on in your text.

- `[link text](link-target)` syntax is how you specify a link in markdown. Here we’ve linked to another page, as well as to the label we created above.

When you build your book, you’ll see how these links resolve in the output.

---

## Add your file to your table of content

<br>

<img src="/module8/_toc.png" width="600"></img>

Notes:

Once you've created a file and added your own content to it, you have to add it to your table of content file, that is, `_toc.yml` to make it available to Jupyter Book.

<img src="/module8/_toc.png" width="600"></img>

By doing this, you are informing Jupyter Book where the new file fits with your book’s structure.

---

## Rebuild your book after making changes

<br>

**Don't forget to rebuild your book**!

<br>

Clean cached book files:

```
jupyter-book clean my-book/
```

Rebuild the book:

```
jupyter-book build my-book/
```

Notes:
In order to see the changes you've made, don't forget to rebuild your book.

<br>

To clean cached book files and make sure everything is rebuilt from scratch, first run:

```
jupyter-book clean my-book/
```

and then run the following to rebuild the book:

```
jupyter-book build my-book/
```

Your new page will now show up in the rebuilt book,
when you refresh your browser page.

---

## Figures

You can include figures in your Jupyter Book using the following syntax:

~~~
 ```{figure} https://solarsystem.nasa.gov/system/resources/detail_files/2486_stsci-h-p1936a_1800.jpg
 ---
 height: 300px
 name: jupiter-figure
 ---
 The beautiful planet Jupiter!
 ```
~~~

<br>

<img src="/module8/figure-jupiter.png" width="300"></img>

Notes:

You can include figures in your Jupyter Book using the following syntax:

~~~
 ```{figure} https://solarsystem.nasa.gov/system/resources/detail_files/2486_stsci-h-p1936a_1800.jpg
 ---
 height: 300px
 name: jupiter-figure
 ---
 The beautiful planet Jupiter!
 ```
~~~

The numbering of figures is automatic,
so if you insert new ones in before some of the existing ones,
Jupyter Book will renumber the existing ones for you!

The reason we have `name: jupiter-figure`
is so we can **cross-reference** a figure later in the text,
as we will show you in the next slide.

---

## Cross-referencing figures

<img src="/module8/md-with-figure.png" width="650"></img>

Notes:
Cross-referencing a figure means linking/referencing it
from somewhere else in the document.
In order to reference a named figure,
we can use {numref}`jupiter-figure` in the text.

After adding a figure and referencing it in the main text,
our markdown file (`my-markdown-file.md`) looks like in this slide.
The rendered version is shown on the next page.

---

## Cross-referencing figures

The end result will look like this if you rebuild your Jupyter Book:

<img style="border:1px solid black;" src="/module8/rebuilt-book.png" width="650"></img>

Notes:

This is what the end result will look like after you rebuild your Jupyter Book.

You can see how the figure we added shows up nicely in the center, has its own caption, and is numbered automatically.

Also note how the referenced figure looks like in the 2nd paragraph of the text (red arrow).

---

## Math and equations

<br>

In Jupyter Book, you can easily add:

1. Inline math equations
2. Math equation blocks
3. Numbered equations

<br>

1. Inline math:

```
Jupiter has a mass of: $m_{j} \approx 1.9 \times 10^{27} \: \text{kg}$
```

<br>

When rendered by Jupyter Book, it looks like this:

<img style="border:1px solid black;" src="/module8/math-inline.png" width="400"></img>

Notes:

Jupyter Book uses **MathJax** for typesetting math which allows you to add LaTeX-style maths to your book, including

- inline math equations,
- math equation blocks, and
- numbered equations.

1. Inline math can be defined using `$` as follows:

```
Jupiter has a mass of:  $m_{j} \approx 1.9 \times 10^{27} \: \text{kg}$
```

When rendered by Jupyter Book, it looks like the screenshot at the bottom of this slide.

---

## Math and equations

<br>

2. Math blocks:

```
$$
  m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
$$
```

Rendered:

<img style="border:1px solid black;" src="/module8/math-block.png" width="600"></img>

<br>

3. Numbered equations:

~~~
```{math}
:label: eq_label
m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
```
~~~

Rendered:

<img style="border:1px solid black;" src="/module8/math-numbered.png" width="700"></img>

Notes:

1. Math blocks are used for more complex expressions
   and can be defined by enclosing the math in a pair of dollar signs, i.e. `$$`:

```
$$
  m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
$$
```

Which will show up in the rendered book like the top-most screen host in this slide.

<br>

3. If you want to reference an equation in the text and have Jupyter Book automatically take care of numbering it, you can use numbered equations via the `label` attribute:

~~~
```{math}
:label: eq_label
m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
```
~~~

This will render as the screenshot on the bottom of this slide
and you will see more details about cross-referencing equations like this
in the next slide.

---

## Cross-referencing equations

- You can refer to equation using their labels.

- Use `` {eq}`eq_label` `` for equations, just like ``{numref}`jupiter-figure` `` for images.

<br>

Here is how we add equations to `my-markdown-file.md`:

~~~
Jupiter has a mass of $m_{j} \approx 1.9 \times 10^{27} \: \text{kg}$.
Let's show this as a code block as well:

$$
  m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
$$

Another way is to have named equations so you can cross-reference them later:

```{math}
:label: eq_label
m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
```

Equation {eq}`eq_label` is an example of a named equation.
~~~

Notes:
If you have created an equation with a label, you can link to it from within your text and across pages.

You can refer to the equation using the label that you’ve provided by using `` {eq}`eq_label` ``, just like ``{numref}`jupiter-figure` `` that we used with images.

<br>

You can see in the slide how we add equations to `my-markdown-file.md`:

---

## Cross-referencing equations

Once you add these equations to `my-markdown-file.md` and rebuild your Jupyter Book, your book will look like:

<img style="border:1px solid black;" src="/module8/equation.png" width="750"></img>

Notes:

Once you add these equations to `my-markdown-file.md` and rebuild your Jupyter Book, your book will look like the screenshot in this slide.
Note the equation numbering pointed at by the red arrow.

---

## Margin content

Margin content is similar to _footnotes_ in a conventional book:

~~~
```{margin} Did you know?
Jupiter is 11.0x larger than Earth!
```
~~~

<br>

Rendered:

<img style="border:1px solid black;" src="/module8/margin.png" width="800"></img>

Notes:
Sometimes it is helpful to add notes to the margin of a page. This is similar to _footnotes_ in a conventional book.

In Jupyter Book, you can do that using `{margin}` blocks in a markdown file:

~~~
```{margin} Did you know?
Jupiter is 11.0x larger than Earth!
```
~~~

<br>

This slide shows how it appears in our Jupyter Book.

---

## Admonitions

Admonitions draw attention to important information:

~~~
```{note}
I'm a note!
```
~~~

`{note}` can be replaced with `{warning}`, `{tip}`, `{danger}` and so on.

This is how these admonitions will show up:

<img src="/module8/admonition.png" width="600"></img>

Notes:
Admonitions in Jupyter Book are visual elements that you can use to draw attention to important information.

There are different types of admonitions that you can use in Jupyter Book, including _Note_, _Tip_, _Warning_, _Danger_ and _Hint_.

You can define an admonition by inserting an admonition code block:

~~~
```{note}
I'm a note!
```
~~~

`{note}` can be replaced with `{warning}`, `{tip}`, `{danger}` and so on. This slide how these admonitions will show up in the output.

---

## Panels

Panels organize content into containers:

<img src="/module8/panels.png" width="700"></img>

Notes:

Panels provide an easy way for you to organize chunks of content into flexible containers on your page. They are useful for creating card-like layouts, flexible columns, and grids.

This slide shows an example that creates two panels.

Note that:

- `---` separates each panel

- `^^^` defines the panel header

- `+++` defines the panel footer

You can embed all kinds of content inside of panels. See [here](https://jupyterbook.org/en/stable/content/content-blocks.html#panels) for more details!

---

## Dropdowns

Dropdowns can hide and show content:

<br>

<img src="/module8/dropdowns.png" width="750"></img>

Notes:

You can use the `{dropdown}` directive to create a dropdown with a title,
that shows content only when clicked.

This is good when you want your readers to think about something on their own,
before revealing the information you have written,
e.g. for a practice quiz.

---

## Dropdown admonitions

Dropdowns admonitions combine admonitions and dropdown:

<br>

<img src="/module8/dropdown-admonitions.png" width="750"></img>

Notes:
You can also hide the body of your admonition blocks so that users must click a button to reveal their content.

This is helpful if you’d like to include some text that isn't immediately visible to the user.

You can see an example in this slide.

---

## Showing and hiding code and its output

<img src="/module8/code-cell.png" width="750"></img>

<br>

We need to edit the cell's **metadata** to tell Jupyter Book to show/hide the code or its output.


Notes:

Sometimes we may not want to show the content of a code cell, or its output.

For example, suppose that we have the code cell in this slide.
It generates a plot that is important to our readers,
but maybe we don't need to show them all the code.

How can we hide the input code cell
while still showing the output visualization?

We saw in the Jupyter notebook slide deck
that we could export a notebook
without code cells via using the `!nbconvert` shell command
since there was not build in functionality for this.

For Jupyter Book,
hiding code input is such a common use case,
that there is functionality built-in to hide it.
We can activate this function and hide the input of a cell
by editing the cell's **metadata**
and tell Jupyter Book whether we want to hide the code or its input (or output).

---

## Showing and hiding code and its output

Accessing code cell metadata in JupyterLab:

<img src="/module8/metadata.png" width="400"></img>

Notes:

To edit a code cell's metadata in JupyterLab:

- Select the cell and click on the gear icon in your JupyterLab environment
- Then expand the "Advanced Tools" tab

---

## Showing and hiding code and its output

<br>

<img src="/module8/hide-input.png" width="500"></img>

Notes:
For hiding the code itself, add `"hide-input"` to the "Cell Metadata" box as shown in the slide.

---

## Showing and hiding code and its output

<br>

<img src="/module8/hidden-code.png" width="800"></img>

Notes:
Now if you rebuild your book,
the code cell will show up like the screenshot in this slide.

The code itself is hidden, while the output is visible.
If the reader clicks the "Click to show" button,
they can see the code as well.

---

## Showing and hiding code and its output

<img src="/module8/hidden-output.png" width="800"></img>

Notes:
Similar to the last slide,
you can hide a code cell's output
by adding `"hide-output"` to the "Cell Metadata" in JupyterLab.

This slide shows the rendered result of hiding the output.

---

## "Gluing" variables in your notebook

Using the `glue` prefix, you can:

- Bind a variable to a name (called a "key")
- Reference that variable from your page’s content

<img src="/module8/glue.png" width="600"></img>

Notes:
Sometimes we might want to access the value of a variable
in the text when we are writing.
This is useful since the value in the text
will be updated each time the notebook is run,
instead of having to change it manually
if something changes in our data or analysis code.

Jupyter Book allows us to do this via the `glue` prefix,
which is able to "glue" both text, numbers, and even figures
into our text.

You can see an example of gluing a numerical variable in this slide.
If you are gluing a string/text variable
and you want to avoid that the variable value is surrounded by quotation marks in the text,
you can use pass the `text` option to the `glue` prefix like so `{glue:text}`.

---

## "Gluing" variables in your notebook

<img src="/module8/altair-captioned.png" width="700"></img>

Notes:

**Important application of "gluing":**

Previously, we have learned how to give **auto-numbered** and **referenceable** captions to figures that contain image files.
However, we've never discussed how we can do the same for figures generated right in notebook.
Gluing can be used for giving captions to figures generated from code!

Here I'm first creating an `altair` figure and assign it to a variable called `fig`.

Then I glue the name `altair_fig` to `fig`, so I can later use it elsewhere in my Jupyter Book.

After doing this, Jupyter Book knows about that figure object. So I can "paste" the figure object anywhere I want. Here, I use the functionality to give an auto-numbered and referenceable caption to my figure.

---

## "Gluing" variables in your notebook

<img style="border:1px solid black;" src="/module8/altair-rendered.png" width="500"></img>

Notes:

And here is what this Jupyter notebook looks like when **rendered by Jupyter Book**:

Did you note that:

- I've **hidden** the piece of code that generates the `altair` figure? I did that using **cell metadata tags** that I discussed in the earlier slides!

- I the HTML version of your built book, try using your mouse to drag and zoom in/out on the figure. It's **interactive**!

---

# Let's apply what we learned!
