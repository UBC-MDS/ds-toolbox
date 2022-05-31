---
type: slides
---

# Add your own content

---

# Create your file and add content to it

<br>

Now's the time to create a new file called `mymarkdownfile.md` with the following content:

<img src="/module8/mymarkdownfile.png" width="700"></img>

Note the two new pieces of markdown:

- `(section-label)=`
- `[link text](link-target)`

Notes:

In the folder with all of your sample book contents, create a new file called `mymarkdownfile.md`. Put the following content in it:

<img src="/module8/mymarkdownfile.png" width="700"></img>

We’ve added two new pieces of markdown syntax, both of them are related to cross-references.

- `(section-label)=` is a label that’s attached to a section header. It refers to whatever header follows, and allows you to refer to this label later on in your text.

- `[link text](link-target)` syntax is how you specify a link in markdown. Here we’ve linked to another page, as well as to the label we created above.

When you build your book, you’ll see how these links resolve in the output.

---

# Add your file to your table of content

<br>

<img src="/module8/_toc.png" width="800"></img>

Notes:

Once you've created a file and added your own content to it, you have to add it to your table of content file, that is, `_toc.yml` to make it available to Jupyter Book.

<img src="/module8/_toc.png" width="700"></img>

By doing this, you are informing Jupyter Book where the new file fits with your book’s structure.

---

# Rebuild your book after making changes

<br>

In order to see the changes you've made, **don't forget to rebuild your book**!

<br>

To clean cached book files and make sure everything is rebuilt from scratch, first run:

```
jupyter-book clean mybookname/
```

and then run the following to rebuild the book:

```
jupyter-book build mybookname/
```

Your new page will now show up in the rebuilt book.

Notes:

In order to see the changes you've made, don't forget to rebuild your book.

<br>

To clean cached book files and make sure everything is rebuilt from scratch, first run:

```
jupyter-book clean mybookname/
```

and then run the following to rebuild the book:

```
jupyter-book build mybookname/
```

Your new page will now show up in the rebuilt book.

---

# Figures

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

<br>

After building the book, it will show up like this:

<img src="/module8/figure-jupiter.png" width="300"></img>

---

# Cross-referencing figures

<br>

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

- The reason we have `name: jupiter-figure` is so we can **cross-reference** a figure later.

- In order to reference a named figure, we just need to use ``{numref}`jupiter-figure` `` in the markdown file.

Notes:

---

After adding a figure and referencing it in the main text, our markdown file (`mymarkdownfile.md`) looks like this:

<br>

<img src="/module8/md-with-figure.png" width="650"></img>

---

The end result will look like this if you rebuild your Jupyter Book:

<br>

<img style="border:1px solid black;" src="/module8/rebuilt-book.png" width="650"></img>

Notes:

The end result will look like this if you rebuild your Jupyter Book:

<br>

<img style="border:1px solid black;" src="/module8/rebuilt-book.png" width="650"></img>

You can see how the figure we added shows up nicely in the center, has its own caption, and is numbered automatically.

Also note how the referenced figure looks like in the 2nd paragraph of the text.

---

# Math and equations

<br>

In Jupyter Book, you can also easily add:

- inline math equations,
- math equation blocks, and
- numbered equations

to your book.

<br>

1. Inline math:

```
Jupiter has a mass of: $m_{j} \approx 1.9 \times 10^{27} \: \text{kg}$
```

<br>

When rendered by Jupyter Book, it looks like this:

<img style="border:1px solid black;" src="/module8/math-inline.png" width="400"></img>

Notes:

Jupyter Book uses **MathJax** for typesetting math which allows you to add LaTeX-style maths to your book.

you can also easily add:

- inline math equations,
- math equation blocks, and
- numbered equations

to your book.

1. Inline math can be defined using `$` as follows:

```
Jupiter has a mass of:  $m_{j} \approx 1.9 \times 10^{27} \: \text{kg}$
```

When rendered by Jupyter Book, it looks like this:

<img style="border:1px solid black;" src="/module8/math-inline.png" width="400"></img>

---

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

When rendered, it looks like this in your built book:

<img style="border:1px solid black;" src="/module8/math-numbered.png" width="700"></img>

Notes:

2. Math blocks can be defined by enclosing the math in a pair of dollar signs, i.e. `$$`:

```
$$
  m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
$$
```

Which will show up in the rendered book like this:

<img style="border:1px solid black;" src="/module8/math-block.png" width="600"></img>

<br>

3. If you want to reference an equation in the text and have Jupyter Book automatically take care of numbering it, you can use numbered equations:

~~~
```{math}
:label: eq_label
m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
```
~~~

Rendered:

<img style="border:1px solid black;" src="/module8/math-numbered.png" width="700"></img>

You will see more details about this in the next slides.
---

# Cross-referencing equations


- You can refer to equation using their labels.

- Use `` {eq}`eq_label` `` for equations, just like ``{numref}`jupiter-figure` `` for images.

<br>

Here is how we add equations to `mymarkdownfile.md`:

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

Here is how we add equations to `mymarkdownfile.md`:

---

Once you add these equations to `mymarkdownfile.md` and rebuild your Jupyter Book, your book will look like:

<br>

<img style="border:1px solid black;" src="/module8/equation.png" width="750"></img>

Notes:

Once you add these equations to `mymarkdownfile.md` and rebuild your Jupyter Book, your book will look like:

<img style="border:1px solid black;" src="/module8/equation.png" width="750"></img>

---

# Margin content

Sometimes it is helpful to add notes to the margin of a page. This is similar to _footnotes_ in a conventional book.

In Jupyter Book, you can do that using `{margin}` blocks in a markdown file:

~~~
```{margin} Did you know?
Jupiter is 11.0x larger than Earth!
```
~~~

<br>

Here is how it appears in our Jupyter Book:

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

Here is how it appears in our Jupyter Book:

<img style="border:1px solid black;" src="/module8/margin.png" width="800"></img>

---

# Admonitions

Admonitions in Jupyter Book are visual elements that you can use to draw attention to important information.

There are different types of admonitions that you can use in Jupyter Book, including _Note_, _Tip_, _Warning_, _Danger_ and _Hint_.

You can define an admonition by inserting an admonition code block:

~~~
```{note}
I'm a note!
```
~~~

`{note}` can be replaced with `{warning}`, `{tip}`, `{danger}` and so on. This is how these admonitions will show up:

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

`{note}` can be replaced with `{warning}`, `{tip}`, `{danger}` and so on. This is how these admonitions will show up:

<img src="/module8/admonition.png" width="600"></img>

---

# Panels

<img src="/module8/panels.png" width="700"></img>

Notes:

Panels provide an easy way for you to organize chunks of content into flexible containers on your page. They are useful for creating card-like layouts, flexible columns, and grids.

Here is an example that creates two panels:

<img src="/module8/panels.png" width="700"></img>

Note that:

- `---` separates each panel

- `^^^` defines the panel header

- `+++` defines the panel footer

You can embed all kinds of content inside of panels. See [here](https://jupyterbook.org/en/stable/content/content-blocks.html#panels) for more details!

---

# Dropdowns

<br>

<img src="/module8/dropdowns.png" width="750"></img>

Notes:

You can use the `{dropdown}` directive to create a clickable dropdown with a title.

---

# Dropdown admonitions

<br>

<img src="/module8/dropdown-admonitions.png" width="750"></img>

Notes:

You can also hide the body of your admonition blocks so that users must click a button to reveal their content.

This is helpful if you’d like to include some text that isn’t immediately visible to the user.

Here is an example:

<img src="/module8/dropdown-admonitions.png" width="750"></img>

---

# Showing and hiding code and its output

<br>

<img src="/module8/code-cell.png" width="750"></img>

We need to edit the cell's **metadata** to tell Jupyter Book to show/hide the code or its output.

Notes:

Sometimes we may not want to show the content of a code cell, or its output.

For example, suppose that we have this code cell to generate a plot:

<img src="/module8/code-cell.png" width="750"></img>

We need to edit the cell's **metadata** to tell Jupyter Book to show/hide the code or its output.

---

Acessing code cell metadata in JupyterLab:

<img src="/module8/metadata.png" width="400"></img>

Notes:

To edit a code cell's metadata in Jupyter lab:

- Select the cell and click on the gear icon in your JupyterLab environment
- Then expand the "Advanced Tools" tab

---

For hiding the code itself, add `"hide-input"` to the "Cell Metadata" box as the following:

<br>

<img src="/module8/hide-input.png" width="500"></img>

---

Now if you rebuild your book, this code cell will show up like this:

<br>

<img src="/module8/hidden-code.png" width="800"></img>

The code itself is hidden, while the output is visible.

---

You can do the same thing with a code cell's output by adding `"hide-output"` to the "Cell Metadata" in JupyterLab.

Here is the result of hiding the output:

<img src="/module8/hidden-output.png" width="800"></img>

---

# "Glueing" variables in your notebook

Using the `glue` tool, you can:

- Bind a variable to a name (called a "key")
- Reference that variable from your page’s content

<img src="/module8/glue.png" width="600"></img>

---

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

<img style="border:1px solid black;" src="/module8/altair-rendered.png" width="525"></img>

Notes:

And here is what this Jupyter notebook looks like when **rendered by Jupyter Book**:

Did you note that:

- I've **hidden** the piece of code that generates the `altair` figure? I did that using **cell metadata tags** that I discussed in the earlier slides!

- I the HTML version of your built book, try using your mouse to drag and zoom in/out on the figure. It's **interactive**!

---

# Let's see what you've learned!
