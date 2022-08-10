---
type: slides
---

# Add your own content:<br>Essentials

Notes:
Now that we know what a Jupyter Book is,
let's go ahead and practice adding basic content to our sample book!

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

You can find out more about cross-referencing in Jupyter Book here: [https://jupyterbook.org/en/stable/content/references.html](https://jupyterbook.org/en/stable/content/references.html).

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

# Let's apply what we learned!
