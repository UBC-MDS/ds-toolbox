---
type: slides
---

# Publish your book online

---

Once you’ve built the HTML for your book, you can host it online.

- The best way to do this is with a service that hosts **static websites**. That’s what you have created with Jupyter Book.

- The quickest option for publishing your book online is to use **Github Pages**

<img src="/module8/gh-pages.png" width="700"></img>

There are a few steps to follow to publish your book using Github pages. We'll go over that in the following slides.

Notes:

Once you’ve built the HTML for your book, you can host it online.

- The best way to do this is with a service that hosts **static websites**. That’s what you have created with Jupyter Book.

- The quickest option for publishing your book online is to use **Github Pages**

<img src="/module8/gh-pages.png" width="700"></img>

There are a few steps to follow to publish your book using Github pages. We'll go over that in the following slides.

---

# Create an online repository for your book

<img src="/module8/ghp-mynewbook.png" width="550"></img>

Notes:

1. First, log in to GitHub, then go to the “create a new repository” page: https://github.com/new

2. Next, give your online repository a name and a description. Make your repository **public** and **do not** initialize it with a README file. Your screen should look like this:

3. click “Create repository” at the end of the page.

---

4. Now, clone the (currently empty) online repository to a location on your local computer:

```
git clone https://github.com/<my-org>/<my-repository-name>
```

<br>

5. Copy all of your book files and folders into this newly cloned repository:

```
cp -r mynewbook/* myonlinebook/
```

<br>

6. Add `_build/` to your `.gitignore` to avoid pushing **build artifacts** to your `main` branch

<br>

7. Now you need to sync your local and remote:

```
cd myonlinebook
git add ./*
git commit -m "adding my first book!"
git push
```

Notes:

4. Now, clone the (currently empty) online repository to a location on your local computer. You can do this via the command line with:

```
git clone https://github.com/<my-org>/<my-repository-name>
```

5. Copy all of your book files and folders into this newly cloned repository. For example, if you created your book locally with `jupyter-book create mynewbook` and your new repository is called `myonlinebook`, you could do this via the command line with:

```
cp -r mynewbook/* myonlinebook/
```

6. Add `_build/` to your `.gitignore` to avoid pushing **build artifacts** to your `main` branch

7. Now you need to sync your local and remote (i.e., online) repositories. You can do this with the following commands:

```
cd myonlinebook
git add ./*
git commit -m "Add my first book"
git push
```

---

# Publish your book online with Github Pages

- We have just pushed the **source files** for our book into our GitHub repository
  - This makes it publicly accessible for you or others to see

<br>

- Next, we have to host the **build artifact** of our book online, although we don't want them on the `main` branch
  - The build artifacts are needed for rendering the book as a website

<br>

- The easiest way is to use the `ghp-import` package
  - `ghp-import` is a lightweight Python package that makes it easy to push HTML content to a Github repository

<br>

We'll learn how to use `ghp-import` in the next few slides.

Notes:

- We have just pushed the **source files** for our book into our GitHub repository
  - This makes it publicly accessible for you or others to see

- Next, we have to host the **build artifact** of our book online, although we don't want them on the `main` branch
  - The build artifacts are needed for rendering the book as a website

- The easiest way is to use the `ghp-import` package
  - `ghp-import` is a lightweight Python package that makes it easy to push HTML content to a Github repository

`ghp-import` works by copying all of the contents of your built book (i.e., the `_build/html` folder) to a branch of your repository called `gh-pages` (instead of `main`), and pushes it to Github. This way you don't create unnecessary clutter on your main branch.

We'll learn how to use `ghp-import` in the next few slides.

---

# How to use `ghp-import` to publish our book

1. Install `ghp-import`:

```
pip install ghp-import
```

<br>

2. From the `main` branch of your book’s **local** root directory (containing the `_build/html` folder), call `ghp-import` and point it to your HTML files:

```
ghp-import -n -p -f _build/html
```

<br>

3. Now `gh-pages` branch is automatically set to host your website HTML files. You can view this in the **settings** page of your Github repository:

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

<br>

3. Now `gh-pages` branch is automatically set to host your website HTML files. You can view this in the **settings** page of your Github repository:

<img src="/module8/ghp-settings.png" width="800"></img>


---

# Your book is now online!

- Typically after a few minutes your site should be viewable online at a url such as: `https://<user>.github.io/<myonlinebook>/`

<br>

<img style="border:1px solid black;" src="/module8/ghp-online.png" width="800"></img>

<br>

- If not, check your repository settings under **Settings -> Pages**.

Notes:

- Typically after a few minutes your site should be viewable online at a url such as: `https://<user>.github.io/<myonlinebook>/`

<br>

<img style="border:1px solid black;" src="/module8/ghp-online.png" width="800"></img>

<br>

- If not, check your repository settings under **Settings -> Pages**.

---

# How to update your book

- Make changes to your book’s content on the `main` branch of your repository

<br>

- Re-build your book with `jupyter-book build myonlinebook/`

<br>

- Use `ghp-import -n -p -f myonlinebook/_build/html` to push the changes to the `gh-pages` branch.

<br>

Finally, note this warning from the `ghp-import` [GitHub repository](https://github.com/c-w/ghp-import):

<b><p style="margin-left:5%; color:darkred;">
"...`ghp-import` will DESTROY your `gh-pages` branch... and assumes that the gh-pages branch is 100% derivative. You should never edit files in your `gh-pages` branch by hand if you’re using this script..."
</p></b>

Notes:

- Make changes to your book’s content on the `main` branch of your repository

<br>

- Re-build your book with `jupyter-book build myonlinebook/`

<br>

- Use `ghp-import -n -p -f myonlinebook/_build/html` to push the changes to the `gh-pages` branch.

<br>

Finally, note this warning from the `ghp-import` [GitHub repository](https://github.com/c-w/ghp-import):

<b><p style="margin-left:5%; color:darkred;">
"...`ghp-import` will DESTROY your `gh-pages` branch... and assumes that the gh-pages branch is 100% derivative. You should never edit files in your `gh-pages` branch by hand if you’re using this script..."
</p></b>

---

# Let's see what you've learned!
