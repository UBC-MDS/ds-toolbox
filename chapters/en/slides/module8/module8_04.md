---
type: slides
---

# Publish your book online

Notes:
In this slide deck we will learn how we can host our books online for free

---

## GitHub Pages

<img src="/module8/gh-pages.png" width="700"></img>

Notes:
Once you’ve built the HTML for your book, you can host it online.

- The most convenient way to do this is with a service that supports **static websites**. This means that the files we created with Jupyter Book's `build` command can simply be uploaded to this site to create a web page.

- The quickest option for publishing your static book website online is to use **GitHub Pages**

There are a few steps to follow to publish your book using GitHub pages. We'll go over those in the following slides.

---

## Create an online repository for your book

<img src="/module8/ghp-mynewbook.png" width="550"></img>

Notes:

1. First, log in to GitHub, then go to the “create a new repository” page: https://github.com/new

2. Next, give your online repository a name and a description. Make your repository **public** and **do not** initialize it with a README file. Your screen should look like this:

3. Click “Create repository” at the end of the page.

After this step,
we could go ahead an upload the built Jupyter Book to our GitHub repo directly.
However,
It is often a good idea to first upload the source files for our Jupyter Book
so that we have everything in the same directory,
so let's do that first!

---

## Push the source files to GitHub

1. Clone the empty online repository to your computer:

    ```
    git clone https://github.com/<my-org>/<my-repository-name>
    ```

<br>

2. Copy your book files into this newly cloned repository:

    ```
    cp -r mynewbook/* myonlinebook/
    ```

<br>

3. Add `_build/` to your `.gitignore` to avoid pushing **build artifacts** to your `main` branch

<br>

4. Sync your local and remote repositories:

    ```
    cd myonlinebook
    git add ./*
    git commit -m "adding my first book!"
    git push
    ```

Notes:

1. Now, clone the (currently empty) online repository to a location on your local computer. You can do this via the command line with:

    ```
    git clone https://github.com/<my-org>/<my-repository-name>
    ```

2. Copy all of your book files and folders into this newly cloned repository. For example, if you created your book locally with `jupyter-book create mynewbook` and your new repository is called `myonlinebook`, you could do this via the command line with:

    ```
    cp -r mynewbook/* myonlinebook/
    ```

3. Add `_build/` to your `.gitignore` to avoid pushing **build artifacts** to your `main` branch. We are going to push these to another branch later to create the website.

4. Now you need to sync your local and remote (i.e., online) repositories. You can do this with the following commands:

    ```
    cd myonlinebook
    git add ./*
    git commit -m "Add my first book"
    git push
    ```

---

## Publish your built book online with GitHub Pages

- Next, we have to host the **build artifact** of our book online, although we don't want them on the `main` branch
  - The build artifacts are needed for rendering the book as a website

<br>

- The easiest way is to use the `ghp-import` package
  - `ghp-import` is a lightweight Python package that makes it easy to push HTML content to a GitHub repository

<br>

We'll learn how to use `ghp-import` in the next few slides.

Notes:
We have just pushed the **source files** for our book into our GitHub repository
This makes it publicly accessible for you or others to see the source code
(the notebooks, markdown document, etc).
However,
we still do no not have a easy to use website that anyone can reach online.

The next step is to upload the files created from the `build` command of our book online.
These are often called **build artefacts**.
The build artifacts are needed for rendering the book as a website,
but we don't want to keep track of numerous build files on the `main` branch;
these are ephemeral and replaceable since we will automatically recreate them each time
we run the `build` command.

Instead,
we are going to put them on a branch that is specific to GitHub pages,
and called `gh-pages` by default.
We could upload the build artefacts manually to this site,
but there is a package called `ghp-import` that will automate much of this process.
`ghp-import` is a lightweight Python package that makes it easy to push HTML content to a GitHub repository

`ghp-import` works by copying all of the contents of your built book (i.e., the `_build/html` folder) to a branch of your repository called `gh-pages` (instead of `main`), and pushes it to GitHub. This way you don't create unnecessary clutter on your main branch.

We'll learn how to use `ghp-import` in the next few slides.

---

## How to use `ghp-import` to publish our book

1. Install `ghp-import`:

    ```
    pip install ghp-import
    ```

<br>

2. From the `main` branch of your book’s **local** root directory, call `ghp-import` and point it to your HTML files:

    ```
    ghp-import -n -p -f _build/html
    ```

<br>

3. Now `gh-pages` branch is automatically set to host your website HTML files. You can view this in the **settings** page of your GitHub repository:

<img src="/module8/ghp-settings.png" width="800"></img>

Notes:

1. Install `ghp-import`:

    ```
    pip install ghp-import
    ```

<br>

2. From the `main` branch of your book’s **local** root directory (containing the `_build/html` folder), call `ghp-import` and point it to your HTML files:

    ```
    ghp-import -n -p -f _build/html
    ```

    With `ghp-import`, we will always use these three flags, and it is not that important to know what each one does, but here is a brief explanation:

    - The `-n` flags instructs GitHub to not treat this a "Jekyll" repository (another type of static webpage).
    - The `-p` flag is what pushes our changes to GitHub.
    - The `-f` flag create a force push. Since these build artefacts are re-generated each time, we just want to overwrite whatever is in the current `gh-pages` branch with our latest version of these files.
        - This is also mentioned in this warning from the `ghp-import` [GitHub repository](https://github.com/c-w/ghp-import):
            > <b><p style="margin-left:5%; color:darkred;">
            "...`ghp-import` will DESTROY your `gh-pages` branch... and assumes that the gh-pages branch is 100% derivative. You should never edit files in your `gh-pages` branch by hand if you’re using this script..."
</p></b>


<br>

3. Now `gh-pages` branch is automatically set to host your website HTML files. You can view this in the **settings** page of your GitHub repository as shown in this slide.


---

## Your book is now online!

- Typically after a few minutes your site should be viewable online at a URL such as: `https://<user>.github.io/<myonlinebook>/`

<br>

<img style="border:1px solid black;" src="/module8/ghp-online.png" width="800"></img>

<br>

Notes:

- Typically after a few minutes your site should be viewable online at a url such as: `https://<user>.github.io/<myonlinebook>/`

<br>

- If not, check your repository settings under **Settings -> Pages**.

---

## How to update your book

- Make changes to your book’s content on the `main` branch of your repository

<br>

- Re-build your book with `jupyter-book build myonlinebook/`

<br>

- Use `ghp-import -n -p -f myonlinebook/_build/html` to push the changes to the `gh-pages` branch.

Notes:

- Make changes to your book’s content on the `main` branch of your repository

<br>

- Re-build your book with `jupyter-book build myonlinebook/`

<br>

- Use `ghp-import -n -p -f myonlinebook/_build/html` to push the changes to the `gh-pages` branch.

<br>

---

# Let's see what you've learned!
