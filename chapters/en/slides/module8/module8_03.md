---
type: slides
---

# Add your own content

---

# Create your file and add content to it

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

Once you've created a new file and added your own content to it, you have to add it to your table of content file `_toc.yml` in order to make it known to Jupyter Book:

<img src="/module8/_toc.png" width="700"></img>

By doing this, you are informing Jupyter Book where the new file fits with your book’s structure.

Notes:

Once you've created a file and added your own content to it, you have to add it to your table of content file, that is, `_toc.yml` to make it available to Jupyter Book.

<img src="/module8/_toc.png" width="700"></img>

By doing this, you are informing Jupyter Book where the new file fits with your book’s structure.

---

# Rebuild your book after making changes

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

# Adding figures

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

- The reason we have `name: jupiter-figure` is so we can **cross-reference** a figure later

- In order to reference a named figure, we just need to use ``{numref}`jupiter-figure` `` in the markdown file

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

- The reason we have `name: jupiter-figure` is so we can **cross-reference** a figure later.

- In order to reference a named figure, we just need to use ``{numref}`jupiter-figure` `` in your markdown file.

---

# Cross-referencing figures

After adding a figure and referencing it in the main text, our markdown file (`mymarkdownfile.md`) looks like this:

<img src="/module8/md-with-figure.png" width="700"></img>

Notes:

After adding a figure and referencing it in the main text, our markdown file (`mymarkdownfile.md`) looks like this:

<img src="/module8/md-with-figure.png" width="700"></img>

---

# Cross-referencing figures

The end result will look like this if you rebuild your Jupyter Book:

<img style="border:1px solid black;" src="/module8/rebuilt-book.png" width="650"></img>

Notes:

The end result will look like this if you rebuild your Jupyter Book:

<img style="border:1px solid black;" src="/module8/rebuilt-book.png" width="650"></img>

You can see how the figure we added shows up nicely in the center, has its own caption, and is numbered automatically.

Also note how the referenced figure looks like in the 2nd paragraph of the text.

---

# Math and equations

Jupyter Book uses MathJax for typesetting math which allows you to add LaTeX-style maths to your book.

You can add inline maths, math blocks and numbered equations to your Jupyter Book.

1. Inline math can be defined using `$` as follows:

```
Jupiter has a mass of:  $m_{j} \approx 1.9 \times 10^{27} \: \text{kg}$
```

<br>

2. Math blocks can be defined using `$$` notation:

```
$$
  m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
$$
```

<br>

3. Numbered equations can be defined like this:

~~~
```{math}
:label: eq_label
m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
```
~~~

Notes:

Jupyter Book uses MathJax for typesetting math which allows you to add LaTeX-style maths to your book.

You can add inline maths, math blocks and numbered equations to your Jupyter Book.

1. Inline math can be defined using `$` as follows:

```
Jupiter has a mass of:  $m_{j} \approx 1.9 \times 10^{27} \: \text{kg}$
```

<br>

2. Math blocks can be defined using `$$` notation:

```
$$
  m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
$$
```

<br>

3. Numbered equations can be defined like this:

~~~
```{math}
:label: eq_label
m_{j} \approx 1.9 \times 10^{27} \: \text{kg}
```
~~~

---

# Cross-referencing equations

If you have created an equation with a label, you can link to it from within your text and across pages.

You can refer to the equation using the label that you’ve provided by using `` {eq}`eq_label` ``, just like ``{numref}`jupiter-figure` `` that we used with images.

<br>

Here is how we add equations to `mymarkdownfile.md`:

~~~
Jupiter has a mass of $m_{j} \approx 1.9 \times 10^{27} \: \text{kg}$. Let's show this as a code block as well:

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

# Cross-referencing equations

Once you add these equations to `mymarkdownfile.md` and rebuild your Jupyter Book, your book will look like:

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

# Let's see what you've learned!
