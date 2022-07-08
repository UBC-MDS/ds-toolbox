---
title: 'Module 6: File Names, Project Organization, Virtual Environments'
description:
  'An overview of how to effectively manage files, projects, and virtual environments.' 
prev: ../../module5
next: ../../module7
type: chapter
id: 6
---

<exercise id="1" title="Module learning outcomes" type="slides,video">
<slides source="module6/module6_00" shot="1" start="0:003" end="05:31"> </slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id="2" title="File Names: Best Practices" type="slides,video">
<slides source="module6/module6_01"> </slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='3' title="Test Your Knowledge">

Which of the following file names follows best practices?

<choice id="1">

<opt text="<code>report 5.md</code>">
Spaces should always be avoided in file names.
</opt>

<opt text="<code>group-feedback_2022-09.md</code>"  correct="true">
</opt>

<opt text="<code>analysis_2022:09-2.md</code>">
The recommended date format is <code>YYYY-MM-DD</code>. Also, the use of <code>:</code> is not allowed for file names.
</opt>

<opt text="<code>2br144.tmp</code>">
Such a file name is not descriptive of the file contents.
</opt>

<opt text="<code>summary_08</code>">
Always use proper extensions (e.g. <code>summary_08.txt</code>) for your files.
</opt>

</choice>

Using case sensitivity for differentiating between file names is prevented by Windows, Mac, and Linux.

<choice id="2">

<opt text="True">
File names are case-insensitive only in Windows (e.g. <code>intro.txt</code> is considered to be the same as <code>Intro.txt</code>), therefore creating two files with the same name but different letter cases is prevented. In Linux-based systems, however, you can simultaneously have both <code>intro.txt</code> and <code>Intro.txt</code>, which should be avoided.
</opt>

<opt text="False"  correct="true">
If it was automatically prevented, then this couldn't have been a problem!
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="4" title=".gitignore" type="slides,video">
<slides source="module6/module6_02"> </slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='5' title="Test Your Knowledge">

`**/` is prepended to an entry in `.gitignore` to tell Git that this entry is a folder.

<choice id="1">

<opt text="True">
<code>**/</code> is used to tell Git that the same file/folder name should be ignored in the subdirectories of a repo as well.
</opt>

<opt text="False"  correct="true">
</opt>

</choice>

The `.gitignore` file itself needs to be committed, and is thus version-controlled.

<choice id="2">

<opt text="True" correct="true">
Right, <code>.gitignore</code> is not ignored itself.
</opt>

<opt text="False">
Remember that you need to do "add" and "commit" <code>.gitignore</code> with Git?
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="6" title="Project Organization" type="slides,video">
<slides source="module6/module6_03"> </slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='7' title="Test Your Knowledge">

Which of the following is NOT a reason for having a standard project structure?

<choice id="1">

<opt text="Reproducibility">
This is indeed one of the reasons!
</opt>

<opt text="Being self-documenting">
This is indeed one of the reasons!
</opt>

<opt text="Ease of collaboration">
This is indeed one of the reasons!
</opt>

<opt text="Optimizing code performance"  correct="true">
The way a project is organized has no effect on the code performance.
</opt>

</choice>

What is one problem with the following project repo?

```
sales-proj/
├── .gitignore
├── README.md
├── proj-env.yaml
├── data/
├── reports/
|   ├── figures/
│   └── visualize.py
│
└── src/
    ├── __init__.py
    ├── make_dataset.py
    │
    ├── analysis
    │   ├── stat_model.py
    │   └── ml_model.py
```

<choice id="2">

<opt text="<code>make_dataset.py</code> is not inside a separate folder within <code>scr/</code>">
Unless the project is too complex and the <code>src</code> folder has a lot of files, it's not necessarily needed to put different code files inside separate folders.
</opt>

<opt text="<code>visualize.py</code> is a python code file and should be placed inside <code>src/</code>" correct="true">
All code files should live in one place rather being scattered around.
</opt>

<opt text="The environment file name is <code>proj-env.yaml</code> instead of <code>environment.yaml</code>">
As long as the file name is descriptive and relevant, any name is acceptable.
</opt>

<opt text="There is no folder for documentation">
Not every project is supposed to have a documentation folder.
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="9" title="Virtual Environments" type="slides,video">
<slides source="module6/module6_04"> </slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='10' title="Test Your Knowledge">

What does `conda list` do?

<choice id="1">

<opt text="Lists all packages in the current environment" correct="true">
</opt>

<opt text="Lists all environments with their packages">
<code>conda env list</code> is the command that lists all existing environments (but not their packages).
</opt>

<opt text="Doesn't do anything as it needs more arguments">
It doesn't need more arguments if it's used for its intended purpose!
</opt>

<opt text="Lists all available channels">
We actually didn't mention a command for listing available conda channels in the lecture slides (it's <code>conda config --show channels</code> by the way!).
</opt>

</choice>

When exporting an environment, the `--from-history` flag is used to include all packages in the environment file.

<choice id="2">

<opt text="True">
<code>--from-history</code> is used to include only those packages which are explicitly installed, not their dependencies.
</opt>

<opt text="False" correct="true">
</opt>

</choice>

The `pandas` package depends on the `numpy` package. What will happen if you try to remove `pandas`, given that you installed `numpy` when creating the environment?

<choice id="3">

<opt text="Both <code>pandas</code> and <code>numpy</code> will be removed">
Since <code>numpy</code> is installed explicitly, it won't be removed.
</opt>

<opt text="Will see an error">
No error will occur for removing a package.
</opt>

<opt text="Only <code>pandas</code> will be removed" correct="true">
Explicitly installed packages (<code>numpy</code> in this case) are not removed along with packages that depend on them.
</opt>

<opt text="Depends on whether this is the base environment or not">
The base environment is just an environment, the rules are the same!
</opt>

</choice>

</exercise>