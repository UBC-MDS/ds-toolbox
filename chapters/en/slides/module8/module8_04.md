---
type: slides
---

# Add your own content:<br>Advanced features

Notes:

In the previous section, we covered adding essential elements such as figures and math equations to our book. Now is the time to learn how to benefit from more advanced features provided by Jupyter Book, so as to have more flexibility in presenting the content.

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

## Grids

Grids organize content into containers:

<img src="/module8/grids.png" width="700"></img>

Notes:

Grids provide an easy way for you to organize chunks of content into flexible containers on your page. They are useful for creating card-like layouts and flexible columns and rows.

This slide shows an example that creates a grid with two cards.

Note that:

- `:gutter:` specifies the separation width between the cards. In this case, it is set to `3`.

- The text immediately following `:::{grid-item-card}` will be the title of that card.

- `+++` can also be used to define the card's footer.

You can embed all kinds of content inside of grids, or have grids with columns and rows of different sizes. Check out this [page](https://jupyterbook.org/en/stable/content/components.html) for more details.

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

<img style="border:1px solid black;" src="/module8/glue.png" width="600"></img>

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

<img style="border:1px solid black;" src="/module8/altair-captioned.png" width="700"></img>

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
