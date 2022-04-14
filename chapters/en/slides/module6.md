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
<exercise id='4' title="Test Your Knowledge">

Which of the following file names follows best practices?

<choice id="1">

<opt text="report 5.md">
Spaces should always be avoided in file names.
</opt>

<opt text="group-feedback_2022-09.md"  correct="true">

</opt>

<opt text="analysis_2022:09-2.md">
The recommended date format is YYYY-MM-DD. Also, the use of : is not allowed for file names.
</opt>

<opt text="2br144.tmp">
Such a file name is not descriptive of the file contents.
</opt>

<opt text="summary_08">
Always use proper extensions (e.g. summary_08.txt) for your files.
</opt>

</choice>

Using case sensitivity for differentiating between file names is prevented by Windows, Mac, and Linux.

<choice id="2">

<opt text="True">
File names are case-insensitive only in Windows (e.g. intro.txt is considered to be the same as Intro.txt), therefore creating two files with the same name but different letter cases is prevented. In Linux-based systems, however, you can simultaneously have both intro.txt and Intro.txt, which should be avoided.
</opt>

<opt text="False"  correct="true">
If it was automatically prevented, then this couldn't have been a problem!
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="5" title=".gitignore" type="slides,video">
<slides source="module6/module6_02"> </slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='6' title="Test Your Knowledge">

`**/` is prepended to an entry in `.gitignore` to tell Git that this entry is a folder.

<choice id="1">

<opt text="True">
**/ is used to tell Git that the same file/folder name should be ignored in the subdirectories of a repo as well.
</opt>

<opt text="False"  correct="true">

</opt>

</choice>

The `.gitignore` file itself needs to be committed, and is thus version-controlled.

<choice id="2">

<opt text="True" correct="true">
Right, .gitignore is not ignored itself.
</opt>

<opt text="False">
Remember that you need to do "add" and "commit" .gitignore with Git?
</opt>

</choice>

</exercise>
<!-- ------------------------------------ -->
<exercise id="7" title="Project Organization" type="slides,video">
<slides source="module6/module6_03"> </slides>
</exercise>
<!-- ------------------------------------ -->
<exercise id='8' title="Test Your Knowledge">

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
`conda env list` is the command that lists all existing environments (but not their packages).
</opt>

<opt text="Doesn't do anything as it needs more arguments">
It doesn't need more arguments if it's used for its intended purpose!
</opt>

<opt text="Lists all available channels">

</opt>

</choice>

When exporting an environment, the `--from-history` flag is used to include all packages in the environment file.

<choice id="2">

<opt text="True">
`--from-history` is used to include only those packages which are explicitly installed, not their dependencies.
</opt>

<opt text="False" correct="true">

</opt>

</choice>

The `pandas` package depends on the `numpy` package. What will happen if you try to remove `pandas`, given that you installed `numpy` when creating the environment?

<choice id="3">

<opt text="Both pandas and numpy will be removed">
Since numpy is installed explicitly, it won't be removed.
</opt>

<opt text="Will see an error">
No error will occur for removing a package.
</opt>

<opt text="Only pandas will be removed" correct="true">
Explicitly installed packages (numpy in this case) are not removed along with packages that depend on them.
</opt>

<opt text="Depends on whether this is the base environment or not">
The base environment is just an environment, the rules are the same!
</opt>

</choice>

</exercise>