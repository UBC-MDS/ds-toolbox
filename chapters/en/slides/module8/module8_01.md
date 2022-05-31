---
type: slides
---

# Jupyter Book ecosystem

---

# What is Jupyter Book?

<br>

<img src="/module8/jb_logo.png" width="400"></img>

<br>

Jupyter Book is an open source project to help you create publication-quality books and documents from Markdown documents and Jupyter Notebooks.

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
- A command-line interface to quickly build books, e.g., `jupyter-book build mybook/`


---

# Installing Jupyter Book

You can install Jupyter Book with Conda using the following command in your terminal:

```
conda install -c conda-forge jupyter-book
```

This will install everything you need to build a Jupyter Book locally.

To see if the installation was successful, run the following command:

```
jupyter-book -h
```

The output should look like this:

```
Usage: jupyter-book [OPTIONS] COMMAND [ARGS]...

  Build and manage books with Jupyter.

Options:
  --version   Show the version and exit.
  -h, --help  Show this message and exit.

Commands:
  build   Convert your book's or page's content to HTML or a PDF.
  clean   Empty the _build directory except jupyter_cache.
  config  Inspect your _config.yml file.
  create  Create a Jupyter Book template that you can customize.
  myst    Manipulate MyST markdown files.
  toc     Command-line for sphinx-external-toc.
```

Notes:

You can install Jupyter Book with Conda using the following command in your terminal:

```
conda install -c conda-forge jupyter-book
```

This will install everything you need to build a Jupyter Book locally.

To see if the installation was successful, run the following command:

```
jupyter-book -h
```

The output should look like this:

```
Usage: jupyter-book [OPTIONS] COMMAND [ARGS]...

  Build and manage books with Jupyter.

Options:
  --version   Show the version and exit.
  -h, --help  Show this message and exit.

Commands:
  build   Convert your book's or page's content to HTML or a PDF.
  clean   Empty the _build directory except jupyter_cache.
  config  Inspect your _config.yml file.
  create  Create a Jupyter Book template that you can customize.
  myst    Manipulate MyST markdown files.
  toc     Command-line for sphinx-external-toc.
```

---

# Book building process

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

# Let's see what you've learned!
