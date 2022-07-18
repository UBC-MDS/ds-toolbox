---
title: 'Module 2: The shell'
description:
  'In this module we will introduce you to several of the tools that we will be using in this course, as well as to computing in general.'
prev: ../../module1
next: ../../module3
type: chapter
id: 2
---

<exercise id="0" title="Module Learning Outcomes"  type="slides, video">
<slides source="module2/module2_00" shot="0" start="3:42" end="4:35"> </slides>
</exercise>

<exercise id="1" title="Introduction to the shell" type="slides,video">
<slides source="module2/module2_01" shot="1" start="0:003" end="05:31"> </slides>
</exercise>

<exercise id="2" title="Test Your Knowledge">

**True or False**       
*Using a text-based interface such as a shell to communicate with your computer is always better than using a graphical interface.*

<choice id="1" >
<opt text="True">

While text-based interfaces having many advantages over graphical shells, they are not always the right tool for the job. For example, text based interfaces are better for automation, reproducibility, and advanced commands, but graphical interfaces can be easier to use for novices since they are more similar to the graphical operating systems that we are already used to using on our laptops and mobile devices.

</opt>

<opt text="False" correct="true">

Text-based interfaces have many advantages over graphical shells, but they are not always the right tool for the job.

</opt>

</choice>

What does the `ls` command do?

<choice id="2" >
<opt text="Lists the name of the current working directory">
The command that does this is <code>pwd</code>.
</opt>

<opt text="Lists the content of the current working directory" correct="true">
</opt>

<opt text="Lists your username">
The command that does this is <code>whoami</code>.
</opt>

</choice>

How do you pass an option to <code>ls</code> which tells is to decorate the output with a suffix based on file type?

<choice id="3" >
<opt text="<code>ls -f</code>">

</opt>

<opt text="<code>ls --f</code>">

</opt>

<opt text="<code>ls -F</code>"  correct="true">

</opt>

<opt text="<code>ls --F</code>">

</opt>

</choice>

</exercise>

<exercise id="3" title="Navigating the file system" type="slides,video">
<slides source="module2/module2_03" shot="1" start="5:4008" end="26:2200"> </slides>
</exercise>

<exercise id="4" title="Test Your Knowledge">

Is `Documents/pdfs` a relative or absolute path?

<choice id="1" >
<opt text="Absolute">

An absolute path always starts with a `/`  which indicates the root (uppermost) directory on the file system (on Windows an absolute path can sometimes start with a drive letter, e.g. `C:`, but Git Bash changes this to `/c` which is more in line with how Linux and MacOS work).

</opt>

<opt text="Relative" correct="true">

An absolute path always starts with a `/` which indicates the root (uppermost) directory on the file system (on Windows an absolute path can sometimes start with a drive letter, e.g. `C:`, but Git Bash changes this to `/c` which is more in line with how Linux and MacOS work).

</opt>

</choice>

Which of the following is True?

<choice id="2" >
<opt text="<code>.</code> is a shortcut for the parent directory.">

`.` is a shortcut for the *current* directory.

</opt>

<opt text="<code>..</code> is a shortcut for the parent directory." correct="true">

</opt>

<opt text="<code>~</code> is a shortcut for the parent directory.">

`~` is a shortcut for the *user's home* directory.

</opt>

</choice>

How do you list all files in a directory, including hidden ones?

<choice id="3" >
<opt text="<code>ls -F</code>">

The <code>-F</code> option flag adds a suffix decoration character to the output to indicate the file type.

</opt>

<opt text="<code>ls -Fa </code>">

While this command would list the hidden files, the <code>-F</code> flag is not required.

</opt>

<opt text="<code>ls -F -a">

While this command would list the hidden files, the <code>-F</code> flag is not required.

</opt>

<opt text="<code>ls -a" correct="true">

</opt>

</choice>

</exercise>

<exercise id="5" title="Moving, copying, and deleting files" type="slides,video">
<slides source="module2/module2_05" shot="1" start="26:3200" end="40:07"></slides>
</exercise>

<exercise id="6" title="Test Your Knowledge">

How do you view the first few lines of a file called `notes.txt`?

<choice id="1">
<opt text="<code>cd notes.txt</code>">

<code>cd</code> is for changing to another directory.

</opt>

<opt text="<code>head notes.txt</code>" correct="true">

</opt>

<opt text="<code>tail notes.txt</code>">

That would show the last few lines of the file, not the first few.

</opt>

</choice>

How would you move the file `agenda.txt` from the parent directory `Documents` to your current directory `meeting-notes`?

<choice id="2">
<opt text="<code>mv ./agenda.txt ..</code>">

This command would move a file from the current directory to the parent directory.

</opt>

<opt text="<code>mv ../agenda.txt .</code>" correct="true">

</opt>

<opt text="<code>mv Documents/agenda.txt .</code>">

This command would move a file from a directory called `Documents` that is under the current directory. The parent directory is above the current directory.

</opt>

</choice>

Which of the following files would be removed if we type `rm not*`?

<choice id="3">
<opt text="<code>no.txt</code>">

The file needs to start with `not`.

</opt>

<opt text="<code>notes.txt</code>" correct="true">

</opt>

<opt text="<code>my-note.txt</code>">

The file needs to start with `not`.

</opt>

</choice>

</exercise>

<exercise id="7" title="Intermediate shell topics" type="slides,video">
<slides source="module2/module2_07" shot="1" start="26:3200" end="40:07"></slides>
</exercise>

<exercise id="8" title="Test Your Knowledge">

How can we search for the word "here" in the file `notes.txt`?

<choice id="1">
<opt text="<code>find 'here' notes.txt</code>">

`find` is used to find filenames.

</opt>

<opt text='<code>grep "here" notes.txt</code>' correct="true">

</opt>

<opt text='<code>search "here" notes.txt</code>'>

There is no `search` command in the shell.

</opt>

</choice>

What is the purpose of a pipe (`|`) in the shell?

<choice id="2">
<opt text="A pipe allow you to save multiple commands and then execute them all at once">

This is not quite what a pipe does; it let's you link the output from one command to another.

</opt>


<opt text='A pipe sends the output from one command to any file you want'>

A pipe works between commands, not between files.

</opt>

<opt text='A pipe send the output from one command to another command' correct="true">

</opt>

</choice>

</exercise>

<exercise id="9" title="What Did We Just Learn?" type="slides, video">
<slides source="module2/module2_end" shot="0" start="04:37" end="05:35">
</slides>
</exercise>

