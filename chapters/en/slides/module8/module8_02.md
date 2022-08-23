---
type: slides
---

# Create your first Jupyter Book

Notes:
In this slide deck we will explain what Jupyter Book is and learn how to build our own.

---

## What is Jupyter Book?

<br>

<img src="/module8/jb_logo.png" width="400"></img>

<br>

Key Jupyter Book features:

- Write publication-quality content
- Write content in multiple formats
- Add interactivity to your book
- Generate a variety of outputs
- A command-line interface

Notes:

Jupyter Book is an open source project to help you create publication-quality books and documents from Markdown documents and Jupyter Notebooks.

<br>

Key Jupyter Book features:

- Write publication-quality content including figures, math, citations and cross-references
- Write content as Jupyter Notebooks, Markdown, or reStructuredText
- Add interactivity to your book, e.g., toggle visibility of cells, connect with an online service like Binder, and include interactive outputs (e.g., figures and widgets)
- Generate a variety of outputs, including websites (HTML, CSS, JS), markdown and PDF.
- A command-line interface to quickly build books, e.g., `jupyter-book build my-book/`

Under the hood,
Jupyter Books rely on the well-regarded Sphinx documentation system,
which is the gold standard for writing Python package documentation.
This makes writing Jupyter Book both powerful and flexible.

---

## Book building process

<br>

Building a Jupyter Book broadly consists of these steps:

<br>

- ✏️ **Create your book’s content**

<br>

- 🛠 **Build your book**

<br>

- 📚 **Publish your book online**

Notes:

Building a Jupyter Book broadly consists of these steps:

- ✏️ **Create your book’s content.**
  - You structure your book with a collection of folders, files, and configuration.

- 🛠 **Build your book.**
  - Using Jupyter Book’s command-line interface you can convert your pages into either an HTML or a PDF book.

- 📚 **Publish your book online.**
  - Once your book is built, you can share it with others. Most common is to build HTML, and host it as a public website.

---

## Anatomy of a Jupyter Book

<br>

The three components of every Jupyter Book:

- A configuration file (`_config.yml`)

- A table of contents file (`_toc.yml`)

- Your book’s content

Notes:

There are three things that you need in order to build a Jupyter Book.

- A configuration file (`_config.yml`)

- A table of contents file (`_toc.yml`)

- Your book’s content

We will learn about these more in detail in the later part of this slide deck,
but let's first see how we can conveniently generate
a template of a sample book with all the necessary files for a book.

---

## Generate a sample book with template files

Create a sample book:

```
jupyter-book create my-book/
```

<br>

The created directory `my-book/` should look like this:

```
my-book/
├── _config.yml
├── _toc.yml
├── intro.md
├── logo.png
├── markdown-notebooks.md
├── markdown.md
├── notebooks.ipynb
├── references.bib
└── requirements.txt
```

Notes:
Jupyter Book comes bundled with a lightweight sample book that you can use both to help you understand a book’s structure and as templates to build your own book from.

You can create a sample book by running the following command
(the name of the folder can be anything, here we chose `my-book/` as an example):

```
jupyter-book create my-book/
```

This will generate a small Jupyter Book in your current working directory that you can both build and explore locally.
This is helpful since we can quickly get an overview of what a full Jupyter Book looks like,
instead of figuring it out
while creating the files one by one ourselves.
The created directory `my-book/` should look like this:

```
my-book/
├── _config.yml
├── _toc.yml
├── intro.md
├── logo.png
├── markdown-notebooks.md
├── markdown.md
├── notebooks.ipynb
├── references.bib
└── requirements.txt
```

You can see that this structure includes the configuration and structure files
that we mentioned on the previous slide (`_config.yml` and `_toc.yml`.).
It also includes the following:

- The landing page in `intro.md`.
- A logo for the book in `logo.png`.
- Content for the book in `markdown-notebooks.md`, `markdown.md`, and `notebook.ipynb`.
- Literary references in `references.bib`.
- The Python packages required to build the book in `requirements.txt`.

We will use this sample Jupyter Book as a starting point
to work from in the rest of this slide deck
and explain each of the book parts in more detail.

---

## Book configuration (`_config.yml`)

<br>

All of the configuration for your book is in a YAML file called `_config.yml`.

<br>

Here’s an example of a simple `_config.yml` file:

```yaml
# In _config.yml
title: My sample book
author: The Jupyter Book Community
logo: logo.png
execute:
  execute_notebooks: force

# Add a bibtex file so that we can create citations
bibtex_bibfiles:
  - references.bib
```

Notes:

All of the configuration for your book is in a file called `_config.yml`.
This file is in the YAML format,
just as the `environment.yml` files that we created in module 6 uses `conda`.

You can define metadata for your book (such as its title), add a book logo, turn on different “interactive” buttons (such as a Binder button for pages built from a Jupyter Notebook), and more.

Here’s an example of a simple `_config.yml` file:

- `title`: defines a title for the book. It will show up in the left sidebar.

- `author`: adds the author’s name to your book template, for attribution.

- `logo`: defines a path to an image file for your book’s logo (it will also show up in the sidebar).

- `execute`: contains a collection of configuration options to control execution and cacheing.

- `execute_notebooks`: "force" tells Jupyter Book force execute any computational content each time it builds the book. By default, Jupyter Book executes and caches all book content.

- `bibtex_bibfiles`: is a section to define bibliography files for your Jupyter Book. This configuration activates citations for your book.

There are helpful comments in the configuration file
that explain many of the additional options that can be used.
For an even more [extensive explanation of all the configuration options,
refer to the documentation](https://jupyterbook.org/en/stable/customize/config.html).

---

## Table of contents (`_toc.yml`)

<br>

The `_toc.yml` file defines the structure of the book:

```yaml
# In _toc.yml
format: jb-book
root: intro
chapters:
- file: markdown
- file: notebooks
- file: markdown-notebooks
```

<br>

**Important:**

- Each entry under `chapters:` is the name of a file (extensions are optional).
- The filenames should be relative to your book’s **root folder**.

Notes:
Jupyter Book uses your **table of contents** file to define the structure of your book. For example, your chapters, sub-chapters, etc.

This is a YAML file with a collection of pages, each one linking to a file in your book. Here’s an example of the two content files shown above:

```yaml
# In _toc.yml
format: jb-book
root: intro
chapters:
- file: markdown
- file: notebooks
- file: markdown-notebooks
```

The `_toc.yml` is arranged with a format such as `jb-article`, or `jb-book`.

The `root` item is considered the landing page (for `html` builds) and is used as front matter (for `latex` builds).

For `jb-book`, subsequent chapters can be added under the `chapters:` section in the `.yml` file.

<br>

**Important:**

- Each entry under `chapters:` is the name of a file (extensions are optional).
- The filenames should be relative to your book’s **root folder**.

The title of each chapter will be inferred from the title in your files, i.e. the heading specified with a single `#`, such as `# Title` (the "top-level" heading).

---

## Table of contents (`_toc.yml`)

<br>

You can also put chapters into different groups, which are called `parts:`

<img src="/module8/parts.png" width="750"></img>

Notes:

You may optionally organize your chapters into parts, by using the `parts:` key in your `_toc.yml`:

The `parts:` key accepts a list of entries, each of which defines a chapter.

You can number each part
by including `numbered: True`.
There are [more details on numbering
and part-specific configuration in the documentation](https://jupyterbook.org/en/stable/structure/configure.html)

---

## Book content

<br>

**Markdown files (`.md`)**:

<br>

Let’s take a look at one of the markdown files in the template book, `intro.md`:

<img src="/module8/markdown.png" width="600"></img>

Notes:

**Markdown files (`.md`)**:

As we learned in the previous module,
the Markdown format can be used to structure text with extra characters and syntax that give it extra meaning (e.g., using `**bold**` to denote **bold**). It is very popular and used across many different technology platforms, including Jupyter Book.

<br>

Let’s take a look at one of the markdown files in the template book, `intro.md`:

<img src="/module8/markdown.png" width="600"></img>

You can see that there are some special formatting
that we didn't learn about in the last module,
e.g. `:::`.
There are some additions to the regular Markdown syntax
that are specific for Jupyter Book
and we will learn more about them in the next slide deck.

---

## Book content

<br>

**Jupyter Notebooks (`.ipynb`)**:

<img style="border:1px solid black;" src="/module8/jnotebook.png" width="500"></img>

Notes:

**Jupyter Notebooks (`.ipynb`)**:

The other type of content is a **Jupyter Notebook**, ending in `.ipynb`.

Jupyter Notebooks have a combination of **computational** content and **narrative** content.

Each notebook is associated with a kernel (e.g. Python, R, Julia) that defines the language used to execute the notebook’s computational content.

By default, when Jupyter Book builds your book, **notebooks will be executed and their outputs cached**. On subsequent builds, notebook pages will be re-executed only if their code has changed.

Any outputs generated by the notebook will be inserted into your built book (though they may not be in your input notebook). This way you do not need to store the notebook’s outputs with your repository.

---

## Time to build your book!

Run the `build` command in the sample book folder:

```
jupyter-book build my-book/
```

<br>

Content of the build directory (`my-book/_build/html/`):

```
html/
├── _panels_static
│   ├── ...
├── _sources
│   ├── intro.md
│   ├── markdown-notebooks.ipynb
│   ├── ...
├── _static
│   ├── ...
├── index.html
...
```

Notes:

Now that we've added content and configured our book,
it’s time to "build" your book.
You can think of the build process
as a more advanced type of export
for Jupyter Notebook,
since it will take your source documents
and create output documents
that can be used to present your book,
e.g. like a web page.

Since we have already created the sample book in the folder `my-book/`, you can run the following `build` command in your terminal to create a fully functioning HTML website:

```
jupyter-book build my-book/
```

**Note**: You can use the short-hand `jb` instead of `jupyter-book` in the above command, i.e. `jb build my-book/`.

<br>

If you look into `my-book/_build/html/` folder, you'll see something like this:

```
html/
├── _panels_static
│   ├── ...
├── _sources
│   ├── intro.md
│   ├── markdown-notebooks.ipynb
│   ├── ...
├── _static
│   ├── ...
├── index.html
...
```

These are all the files needed for a standalone website!

---

## Your first Jupyter Book website

<br>

This is what your home page file `_build/html/index.html` looks like:

<img style="border:1px solid black;" src="/module8/jb_index.png" width="800"></img>

Notes:

You can view the website you just created by opening `_build/html/index.html` using any browser that you like. You should see a webpage like this:

<img style="border:1px solid black;" src="/module8/jb_index.png" width="800"></img>

Although this page opens in a browser,
so far it only exists locally on your computer.
Later in this module
we will see how you can make this book publicly available
using GitHub's publishing system.

---

# Let's apply what we learned!
