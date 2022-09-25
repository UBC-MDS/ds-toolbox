---
title: 'Module 8: Jupyter Book'
description:
  'In this module you will learn how to create beautiful, publication-ready books and websites using Jupyter Book.' 
prev: ../../module7
next: ../../module9
type: chapter
id: 8
---

<exercise id="0" title="Module learning outcomes" type="slides,video">
<slides source="module8/module8_00" shot="22" start="0:00" end="00:37"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id="1" title="Create your first Jupyter Book" type="slides,video">
<slides source="module8/module8_02" shot="23" start="0:00" end="10:58"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='2' title="✍️ Practice: Today a reader, tomorrow a leader">

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
File paths should be relative to the book's root folder.
</opt>

<opt text="<code>- file: analysis/EDA.ipynb</code>">
Correct, but there is one more correct answer.
</opt>

<opt text="<code>- file: EDA</code>">
File paths should be given relative to the book's root folder.
</opt>

<opt text="<code>- file: analysis/EDA</code>">
Correct, but there is one more correct answer.
</opt>

<opt text="Both the first and third options are correct">
File paths should be given relative to the book's root folder.
</opt>

<opt text="Both the second and fourth options are correct" correct='true'>
</opt>

</choice>

You are done creating content for your book in `my-book/` folder. You are now inside the root folder of your book. Which command would you use to generate your Jupyter Book (i.e. your website)?

<choice id="2">

<opt text="<code>jb create my-book/</code>">
<code>jb create</code> is used to create a sample Jupyter Book with template content, rather than rendering your current book contents. Also, since you're already inside the root folder, you should use <code>./</code> for the path instead of <code>my-book/</code>.
</opt>

<opt text="<code>jb build ./</code>"  correct="true">
</opt>

<opt text="<code>jb build my-book/</code>">
Since you're already inside the root folder, you should use <code>./</code> for the path instead of <code>my-book/</code>.
</opt>

<opt text="<code>jb create ./</code>"  correct="true">
<code>jb create</code> is used to create a sample Jupyter Book with template content, rather than rendering your current book contents.
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="3" title="Add your own content: Essentials" type="slides,video">
<slides source="module8/module8_03" shot="23" start="11:01" end="16:12"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='4' title="✍️ Practice: Becoming an author">

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
<exercise id="5" title="Add your own content: Advanced features" type="slides,video">
<slides source="module8/module8_04" shot="23" start="16:15" end="24:35"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='6' title="✍️ Practice: Do it like a professional">

**True or False**

Altair figures can be made auto-numbered by modifying the cell meta data.

<choice id="1">

<opt text="True">
You need to use the <i>gluing</i> feature in order to make generated figures auto-numbered and referenceable.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

How do you hide a code input cell in JupyterLab?

<choice id="2">

<opt text="You use a code block starting with <code>```hide-input</code>.">
This syntax is used to to indicate syntax highlighting for different programming languages, e.g. <code>```python</code>.
</opt>

<opt text="You use a code block starting with <code>```{hide-input}</code>.">
This syntax is used to format some content such as admonitions and dropdowns, but not for hiding code cells.
</opt>

<opt text="You add a cell tag called <code>hide-input</code> via the JupyterLab interface." correct="true">
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="7" title="Publish your book online" type="slides,video">
<slides source="module8/module8_05" shot="23" start="24:37" end="30:55"></slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='8' title="✍️ Practice: Publication ready!">

**True or False**

The purpose of using `ghp-import` and `gh-pages` branch is to avoid having numerous HTML files in the commit history of the `main` branch each time you rebuild your book and instead automate pushing them to a separate branch.

<choice id="1">

<opt text="True" correct="true">
</opt>

<opt text="False">
That is indeed the reason for using the <code>ghp-import</code> package and the <code>gh-pages</code> branch!
</opt>

</choice>

**True or False**

All information needed to reproduce the content of the `gh-pages` branch lives in the `main` branch of your book repository.

<choice id="2">

<opt text="True" correct="true">
</opt>

<opt text="False">
Remember that the <code>gh-pages</code> branch only contains the result of running <code>jb build</code> on the content of your <code>main</code> branch, so it's completely derivative.
</opt>

</choice>

**True or False**

You need the source files on the `main` branch in order for GitHub Pages to show your website.

<choice id="3">

<opt text="True">
You only need the build artifacts (i.e., the HTML files in the <code>_build/html/</code> folder) to be hosted on a branch so that GitHub Pages is able to show your website. Your source files are not needed for the website itself.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="9" title="What Did We Learn?" type="slides,video">
<slides source="module8/module8_end" shot="24" start="0:00" end="00:29"></slides>
</exercise>
<!-- ------------------------------------ -->
