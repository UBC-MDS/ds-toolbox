---
type: slides
---

# Add your own content:<br>Advanced features

Notes:

In the previous section, we covered adding essential elements such as figures and math equations to our book.

Now is the time to learn how to benefit from more advanced features provided by Jupyter Book, so as to have more flexibility in presenting the content.

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

In Jupyter Book, you can do that using blocks denoted by `{margin}` in a markdown file:

~~~
```{margin} Did you know?
Jupiter is 11.0x larger than Earth!
```
~~~

Note that this syntax is similar to what we used for creating a figure:
<code>```{figure}</code>.

These types of blocks are called *directives* in Jupyter Book
and we will see several different types on the following few slides.

<br>

You can see the rendered version of the margin directive
in this slide.

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

`{note}` can be replaced with `{warning}`, `{tip}`, `{danger}` and so on. This slide shows how these admonitions will show up in the output.

Another way of writing the admonition syntax is to use `:::` instead of <code>```</code>:

~~~
:::{note}
I'm a note!
:::
~~~

This does not change anything for how Jupyter Book interprets the content,
but ensures that it is formatted as Markdown instead of as code
when viewing the file in JupyterLab,
which can make it easier for the eye when editing.

You can [read more about these "Markdown-friendly" directives
in the documentation](https://jupyterbook.org/en/stable/content/content-blocks.html#markdown-friendly-directives-with).

---

## Grids

Grids organize content into containers:

<img src="/module8/grids.png" width="700"></img>

Notes:

Grids provide an easy way for you to organize chunks of content into flexible containers on your page. They are useful for creating card-like layouts and flexible columns and rows.

This slide shows an example that creates a grid with two cards.
Not that we are using the markdown friendly `:::` directives here just as an example,
we could also have used <code>```</code> instead.

Note that:

- We are nesting directives here, starting with four `:` for the `grid` directive and three `:` for the `grid-item-card` directive to indicate that the latter is a sub-directive of the outer `grid` directive.

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

So how can we hide the input code cell
while still showing the output visualization?

We saw in the Jupyter notebook slide deck
that we could export a notebook
without its code cells using the `nbconvert` shell command,
since there was no built-in interface element in JupyterLab to achieve this.

For Jupyter Book,
the option to hide code input is built-in
since it's a very common use case.

We can hide the input of a cell
by editing the cell's **metadata**
to tell Jupyter Book whether we want to hide the code input or its output.

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

For hiding the code itself, add a "Cell Tag" called `hide-input` to the cell via the Jupyter Lab interface.
The easier way to do this is to click the button "Add Tag +"
in the side panel,
and type in `hide-input`.
This will automatically populate the "Cell Metadata" box with the correct text
as shown in the slide.
If you wanted,
you could also edit the "Cell Metadata" text box directly,
but you will have to be careful getting the brackets correct.

---

## Showing and hiding code and its output

<br>

<img src="/module8/hidden-code.png" width="800"></img>

Notes:

Now if you rebuild your book,
the code cell will show up like the screenshot in this slide.

You can see that the code itself is hidden, while the output is visible.
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

Sometimes we might want to access the value of a variable within the text that we're writing.

This is useful since the value in the text
will be updated each time the notebook is executed,
instead of having to change it manually
if something changes in our data or analysis code.

Jupyter Book allows us to do this using the `glue` prefix,
which makes it possible to "glue" numbers and even figures
into our text.

You can see an example of gluing a numerical variable in this slide.
If you are gluing a string/text variable
and you want to avoid the variable value being surrounded by quotation marks in the text,
you can pass the `text` option to the `glue` prefix like this: `{glue:text}`.

---

## "Gluing" variables in your notebook

<img style="border:1px solid black;" src="/module8/altair-captioned.png" width="700"></img>

Notes:

**Important application of "gluing":**

Previously, we have learned how to give **auto-numbered** and **referenceable** captions to figures that contain image files.
However, we've never discussed how we can do the same for figures generated right in notebook.
Good news is, gluing can be used for giving captions to figures generated from code as well.

Here I first create an `altair` figure and then I assign it to a variable called `fig`.

Then I glue the name `altair_fig` to `fig`, so I can use it later elsewhere in my Jupyter Book.

After doing this, Jupyter Book knows about that figure object, so I can "paste" the object anywhere I want. Here, I've used this functionality to give an auto-numbered and referenceable caption to my figure.

---

## "Gluing" variables in your notebook

<img style="border:1px solid black;" src="/module8/altair-rendered.png" width="500"></img>

Notes:

And here is what this Jupyter notebook looks like when **rendered by Jupyter Book**:

Note that:

- I've **hidden** the piece of code that generates the `altair` figure. I did this using **cell metadata tags** that we discussed in the earlier slides.

- Moreover, in the HTML version of your built book, try using your mouse to drag and zoom in/out on the figure. You'll see that the figure is **interactive**, just like in a Jupyter notebook!

---

# Let's apply what we learned!
