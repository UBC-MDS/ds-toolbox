---
title: 'Module 8: Jupyter Book'
description:
  'In this module, you will learn how to create beautiful, publication-ready online books using Jupyter Book.' 
prev: ../../module7
next: ../../module9
type: chapter
id: 8
---

<exercise id="1" title="Module learning outcomes" type="slides,video">
<slides source="module8/module8_00" shot="1" start="0:003" end="05:31"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id="2" title="Jupyter Book ecosystem" type="slides,video">
<slides source="module8/module8_01"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id="4" title="Create your first Jupyter Book" type="slides,video">
<slides source="module8/module8_02"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='5' title="Time for practice">

We have the following folder containing the files we'd like to include in a report created using Jupyter Book:

```
climate-change/
├── _config.yml
├── _toc.yml
├── intro.md
├── lit-review.md
├── logo.png
├── analysis
|   ├── EDA.ipynb
|   ├── feat-eng.ipynb
|   ├── predictive-model.ipynb
├── discussion.md
├── references.bib
└── requirements.txt
```

How should we add the `EDA.ipynb` file to our `_toc.yml`?

<choice id="1">

<opt text="<code>- file: EDA.ipynb</code>">
File paths should be relative to the book's root folder. Also, files should not have an extension in <code>_toc.yml</code>
</opt>

<opt text="<code>- file: analysis/EDA.ipynb</code>">
Files should not have an extension in <code>_toc.yml</code>
</opt>

<opt text="<code>- file: EDA</code>">
File paths should be given relative to the book's root folder.
</opt>

<opt text="<code>- file: analysis/EDA</code>" correct="true">
</opt>

</choice>

You are done creating content for your book in `mybook/` folder. You are now inside the root folder of your book. Which command would you use to generate your Jupyter Book (i.e. your website)?

<choice id="2">

<opt text="<code>jb create mybook/</code>">
<code>jb create</code> is used to create a sample Jupyter Book with template content, rather than rendering your current book contents. Also, since you're already inside the root folder, you should use <code>./</code> for the path instead of <code>mybook/</code>.
</opt>

<opt text="<code>jb build ./</code>"  correct="true">
</opt>

<opt text="<code>jb build mybook/</code>">
Since you're already inside the root folder, you should use <code>./</code> for the path instead of <code>mybook/</code>.
</opt>

<opt text="<code>jb create ./</code>"  correct="true">
<code>jb create</code> is used to create a sample Jupyter Book with template content, rather than rendering your current book contents.
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="6" title="Add your own content" type="slides,video">
<slides source="module8/module8_03"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='7' title="Time for practice">

Suppose that you have inserted an image in your book using the following markdown block:

~~~
```{figure} https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg
 ---
 height: 600px
 name: an-african-cheetah
 ---
 An African Cheetah
 ```
~~~

How would you reference this image within the main markdown text?

<choice id="1">

<opt text="<code>Fig. 1 shows the image of an African Cheetah.</code>">
<code>Fig. 1</code> produces a static text and isn't automatically linked to anything. If your figure number changes to <code>2</code>, <code>Fig. 1</code> would stay the same.
</opt>

<opt text="<code>{ref}`an-african-cheetah` shows the image of an African Cheetah.</code>">
<code>{ref}``</code> is not quite correct to cross-reference a figure. What did you miss?
</opt>

<opt text="<code>{nameref}`an-african-cheetah` shows the image of an African Cheetah.</code>" correct="true">
</opt>

<opt text="<code>{nameref}(an-african-cheetah) shows the image of an African Cheetah.</code>">
<code>{nameref}()</code> is not quite correct to cross-reference a figure. Which part did you get wrong?
</opt>

<opt text="<code>{nameref}`An African Cheetah` shows the image of an African Cheetah.</code>">
The reference should point to the image label, not its caption.
</opt>

</choice>

What is one problem with the following math equation?

~~~
```{math}
:label: newton-2nd-law
$$\Sigma F = m \frac{dV}{dt}$$
```
~~~

<choice id="2">

<opt text="<code>$$ $$</code> should not be used inside a <code>```{math} ```</code> block" correct="true">
</opt>

<opt text="<code>:label:</code> should be changed to <code>label:</code>">
<code>:label:</code> is actually the right way to give a label to an equation.
</opt>

<opt text="<code>:label:</code> should be replaced by <code>:name:</code>">
Using <code>:name:</code> is incorrect. You've probably mistaken this with <code>name:</code> in a <code>```{figure} ```</code> block.
</opt>

<opt text="<code>$$ $$</code> should be replaced with <code>$ $</code>">
Neither of the two options are applicable inside a <code>```{math} ```</code> block.
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="8" title="Publish your book online" type="slides,video">
<slides source="module8/module8_04"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='9' title="Time for practice">

The purpose of using `ghp-import` and `gh-pages` branch is to avoid having numerous HTML files in the commit history of the `main` branch each time you rebuild your book.

<choice id="1">

<opt text="True" correct="true">
</opt>

<opt text="False">
That is indeed the reason for using the <code>ghp-import</code> package and the <code>gh-pages</code> branch!
</opt>

</choice>

All information needed to reproduce the content of the `gh-pages` branch lives in the `main` branch of your book repository.

<choice id="2">

<opt text="True" correct="true">
</opt>

<opt text="False">
Remember that the <code>gh-pages</code> branch only contains the result of running <code>jb build</code> on the content of your <code>main</code> branch, so it's completely derivative.
</opt>

</choice>

You need the source files on the `main` branch in order for Github Pages to show your website.

<choice id="3">

<opt text="True">
You only need the build artifacts (i.e., the HTML files in the <code>_build/html/</code> folder) to be hosted on a branch so that Github Pages is able to show your website. Your source files are not needed for the website itself.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->