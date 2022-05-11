---
type: slides
---

# Create your first Jupyter Book

---
# How to quickly generate a sample book

Jupyter Book comes bundled with a lightweight sample book to help you understand a book’s structure.

You can create a sample book by running the following command:

```
jupyter-book create mynewbook/
```

This will generate a mini Jupyter Book in your current working directory that you can both build and explore locally.

The created directory `mynewbook/` should look like this:

```
mynewbook/
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

It will have a few decisions made for you, and you can explore the configuration of the book in `_config.yml` and its structure in `_toc.yml`.


We will use this sample Jupyter Book as a starting point to work from.

Notes:



---

# Anatomy of a Jupyter Book

<br>

There are three things that you need in order to build a Jupyter Book, each of which was just created by running jupyter-book create:

- A configuration file (`_config.yml`)

- A table of contents file (`_toc.yml`)

- Your book’s content

<br>

There are a few extra files in there included to demonstrate some features, but the required pieces are `_toc.yml`, `_config.yml`, and content files. We’ll cover each briefly in the next slides.

Notes:



---

# Book configuration (`_config.yml`)

<br>

All of the configuration for your book is in a YAML file called `_config.yml`.

You can define metadata for your book (such as its title), add a book logo, turn on different “interactive” buttons (such as a Binder button for pages built from a Jupyter Notebook), and more.

<br>

Here’s an example of a simple _config.yml file:

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

All of the configuration for your book is in a YAML file called `_config.yml`.

You can define metadata for your book (such as its title), add a book logo, turn on different “interactive” buttons (such as a Binder button for pages built from a Jupyter Notebook), and more.

Here’s an example of a simple _config.yml file:

- `title`: defines a title for the book. It will show up in the left sidebar.

- `author`: adds the author’s name to your book template, for attribution.

- `logo`: defines a path to an image file for your book’s logo (it will also show up in the sidebar).

- `execute`: contains a collection of configuration options to control execution and cacheing.

- `execute_notebooks`: "force" tells Jupyter Book force execute any computational content each time it builds the book. By default, Jupyter Book executes and caches all book content.

- `bibtex_bibfiles`: is a section to define bibliography files for your Jupyter Book. This configuration activates citations for your book.
---

# Table of contents (`_toc.yml`)

<br>

Jupyter Book uses your Table of Contents to define the structure of your book. For example, your chapters, sub-chapters, etc.

<br>

This is a YAML file with a collection of pages, each one linking to a file in your book. Here’s an example of the two content files shown above.

```yaml
# In _toc.yml
format: jb-book
root: intro
chapters:
- file: markdown
- file: notebooks
- file: markdown-notebooks
```

Notes:

The `_toc.yml` is arranged with a format such as `jb-article`, or `jb-book`.

The `root` item is considered the landing page (for `html` builds) and is used as front matter (for `latex` builds).

For `jb-book`, subsequent chapters can be added under the `chapters:` section in the `yml` file.

Each entry relates to a file, and they should be added as names with
- **no extensions** and
- **relative to your book’s root folder**.

The title of each chapter will be inferred from the title in your files.

---

# Book content

<br>

**Markdown files (`.md`)**:

Markdown is an example of a markup language - a way to structure text with extra characters and syntax that give it extra meaning (e.g., using `**bold**` to denote **bold**). It is very popular and used across many different technology platforms.

<br>

Let’s take a look at one of the markdown files in the template book, `intro.md`:

<img src="/module8/markdown.png" width="600"></img>

Notes:



---

# Book content

<br>

**Jupyter Notebooks (`.ipynb`)**:

The other type of content is a **Jupyter Notebook**, ending in `.ipynb`. Jupyter Notebooks have a combination of computational content and narrative content. Each notebook is associated with a kernel (aka, Python, R, Julia, etc) that defines the language used to execute the notebook’s computational content.

By default, when Jupyter Book builds your book, **notebooks will be executed and their outputs cached**. On subsequent builds, notebook pages will be re-executed only if their code has changed.

Any outputs generated by the notebook will be inserted into your built book (though they may not be in your input notebook). This way you do not need to store the notebook’s outputs with your repository.

Notes:



---

# Time to build your book!

<br>

Now that we’ve added content and configured our book, it’s time to build outputs for your book.

Since we have already created the sample book in the folder `mybookname/`, you can simply run the following `build` command in your terminal to create a fully functioning HTML website:

```
jupyter-book build mybookname/
```

**Note**: You can use the short-hand `jb` instead of `jupyter-book` in the above command, i.e. `jb build mybookname/`.

<br>

If you look into `mybookname/_build/html/` folder, you'll see something like this:

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
...
```

These are the files for a standalone website!

Notes:



---

# Your first Jupyter Book website

<br>

You can view the website you just created by opening `index.html` using any browser that you like. You should see a webpage like this:

<img style="border:1px solid black;" src="/module8/jb_index.png" width="800"></img>

Notes:



---

# Let's see what you've learned!
