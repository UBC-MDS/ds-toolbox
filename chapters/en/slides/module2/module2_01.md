---
title: 'module1_01'
type: slides
---

<head>
<base target="_blank">
</head>
<head>
<base target="_blank">
</head>

<style>
.column {
    float: left;
  padding: 10px;
}
</style>

# Introduction to the shell

Notes:
In this module we will be learning how to use the shell
to communicate with out computer via text-based commands
rather than graphical menus that we click with the mouse pointer.
To get a deeper understanding of this concept,
we will start with a brief introduction to computing in general.

This chapter is largely based on the Shell chapters in the book
["Research Software Engineering with Python"](https://merely-useful.tech/py-rse/bash-basics.html),
which is freely available
and can be referred to for additional details.

---

## What is a computer?

<img src='/module2/wires-computers-eniac-1946.png' width="50%" alt="A few of the world's most prominent programmers of the time computing ballistic trajectories on the ENIAC computer during the second world war."/>

A few of the world's most prominent programmers of the time computing ballistic trajectories on the ENIAC computer during the second world war.

Notes:
Essentially,
computing is about humans communicating
with machines to modulate flows of current in the hardware.
Early examples of human computer communication were quite primitive
and included physically disconnecting a wire and connecting it again in a different spot.

Luckily,
we are not doing this anymore;
instead we have graphical user interfaces with menus and buttons,
which is what you are commonly using when interacting with a computer 
that runs an operating system such as MacOS, Linux, or Windows.

These graphical interface can be thought of as a layer (or a [shell](https://glosario.carpentries.org/en/#shell))
around the internal components of your operating system.
Shells exist as an intermediate between the human and the machine;
they make it easy for us to express our commands,
and for computers to interpret them.

---

## What is text-based communication?

Open a file from a graphical menu:

<img src='/module2/file-open-menu.png' width="30%" alt="Selecting open from the file menu"/>

Opening a file via a text-based interface:

```
file.open('filename.csv')
```

Notes:
In this slide deck,
we will learn how to communicate with a computer via a text-based shell,
rather than a graphical one.

Using a text-based shell might at first seems counter-intuitive,
since the reason for creating a shell in the first place
was to facilitate user interaction with the computer.
So now that we have these easy to use graphical user interfaces (GUIs),
why would anyone in their right mind go back to using a text based interface?

Well,
this notion is partly a misconception;
GUIs can be nice when you are new to something,
but text-based interfaces are actually faster
and easier to use when you become more experienced
and know more precisely which commands you want the machine to execute.

We can compare this process to learning a language:
in the beginning it’s nice to look things up in a dictionary
(analogous to the menu on a computer),
but once we know what we want to say,
it is just easer to say or type it directly,
instead of being forced to spend time on looking it up first.

By extension,
it would be even faster to speak
or even just think of what you want to do
and have the appropriate commands executed by the computer.
This is what speech-and brain-computer interfaces are concerned with,
and once these becomes more refined and accessible
they might take over as the main way for us to interact with computers.

---

## Which shell will we be using?

<img src="https://cdn.rawgit.com/odb/official-bash-logo/master/assets/Logos/Identity/PNG/BASH_logo-transparent-bg-color.png" alt="The Bourne Again SHell" width="400px"></img>

The Bourne Again SHell

Notes:
Bash is the most commonly used text shell.
You have it installed on your computer by default if you are using a Mac or Linux machine,
and if you are on a Windows machine you downloaded Bash as part of the setup instructions.

As we mentioned in the introduction chapter,
the abbreviation BASH stands for "Bourne Again SHell".
Other shells existed before Bash,
and one of the most successful early shells was invented by Stephen Bourne at Bell Labs in 1977,
which he called the Bourne Shell.
In 1989,
the Free Software Foundation improved the Bourne Shell and as a pun named it the Bourne Again Shell,
to symbolize it was now "reborn" with new features.

Text-based shells are sometimes called command-line interfaces
(CLI, or just "the command line")
and at the heart of every CLI is a read-evaluate-print loop (REPL).
When we type a command and press Return (also called Enter) the CLI reads the command,
evaluates it (i.e.,
executes it),
prints the command’s output,
and loops around to wait for another command.

Let's see how to do that next!

---

## How do we open Bash on our computer?

<img src='/module2/jl-terminal-open.png' width="600px" alt="A screenshot of opening the terminal in JupyterLab via the File menu."/>

A screenshot of opening the terminal in JupyterLab via the File menu.

<br>
<br>

<img src='/module2/jl-terminal.png' width="600px" alt="A screenshot of an open JupyterLab terminal with black background."/>

A screenshot of an open JupyterLab terminal with black background.

Notes:
To run a shell such a Bash,
we need to use a Terminal Emulator,
or just "Terminal" for short.
Most operating systems have one built-in,
on MacOS it is called `Terminal.app`,
and on Linux it is usually just called `Terminal`.
On Windows,
you could use the terminal application that comes with Git Bash
that you installed in Assignment 1,
or the newer "Windows Terminal" application.

In this course,
we will be using Bash via the JupyterLab terminal,
to ensure that the experience is similar
across all three operating systems.

To open the JupyterLab terminal,
go to `File -> New -> Terminal`
as in the screenshot in this slide.

The JupyterLab terminal that opens will look slightly different
depending on which operating system you are using
and what its default terminal settings are.
If you want to switch between dark and light backgrounds,
you can go to `Settings -> Theme`
and chose either `JupyterLab Light` or `JupyterLab Dark`.

---

## Your first words in Bash

The default prompt character:

```sh
username@computer $
```

<br>

Typing in the `whoami` command for showing your username and pressing enter to run it:

```sh
whoami
```

```out
username
```

Notes:
Our first shell commands will let us explore our folders and files,
and will also introduce us to several conventions that most command line tools follow.

To start,
you will have noticed that when the Terminal with Bash launches
it presents us with a blinking line or block.
This is called the "prompt"
because the blinking is prompting us to enter a command.

The default character that is used to represent the prompt
is a dollar sign (`$`).
However,
different shells may use a different symbol:
in particular,
the zsh shell,
which is the default on newer versions of MacOS,
uses %.

Before the dollar sign,
we can see our username and computer name printed,
but this might look different for you
depending on your operating systems and settings.

Let's run our first command!
By typing in `whoami` and pressing `Enter`,
the computer will tell us who we are
by displaying our username.

Next,
let's move on to something more useful
and find out which directory we are in!

---

## Where are we?

The `pwd` command stands for Print Working Directory.

```sh
pwd
```

```out
# Linux
/home/username

# MacOS
/Users/username

# Windows
/c/Users/username
```

Notes:
The shell is like a file browser
in the sense that we are always inside a directory.
When we launch the shell,
it puts us inside our `home` directory by default.
Each user on the computer has a separate `home` directory
and the function and location of this directory
differs a little bit between operating systems.

To view which directory we are currently in
we can execute the command `pwd` (Print Working Directory).
Since the `home` directory differs between operating system,
what the shell return when we type `pwd` inside our `home` directory
will depend on which operating system we are using.

On Linux the `home` directory is usually `/home/username`,
on MacOS it is `/Users/username`,
and on Windows it will show up as `/c/Users/username`
(if you have Git Bash installed).
Our examples in this module shows the Linux directory structure,
but you will see that some of the other modules
show what we would see on MacOS or Windows.

In general it is enough to be familiar with the directory structure on your machine,
but if you ever work on a shared cloud computer
to get access to more computing resources,
it is important to also be familiar with the Linux directory structure
since most cloud computers run Linux.

---

## Exploring the filesystem

```
ls
```

```out
Downloads     Music
Documents     todo.txt
Pictures      my_program
```

Notes:
Now that we know where we are,
let’s see what this directory contains by using the command `ls` (short for “listing”),
which prints the names of the files and directories in the current directory.
Again,
our results may be different depending on our operating system
and what files or directories we have created previously.

In our example in the slide,
we have one file with a `txt` extension
which indicates that this files contains text,
and we have five files without an extension
(some of these appear to be directories,
but we can't know for sure from this output).

---

## Using commands with options

```
ls -F
```

```out
Downloads/    Music/
Documents/    todo.txt
Pictures/     my_program*
```

Notes:
We can make the output of `ls` more informative
by using the -F option
(a command option is sometimes called a "switch" or a "flag").
Options modify the behavior of the command.

In this case,
`-F` tells `ls` to decorate the printed output
to indicate what type of file each entry is.
A trailing `/` ("slash") indicates a directory,
while a trailing `*` ("asterisk") tells us that the file is a runnable program.
Depending on our setup,
the shell might also use colors
to indicate what type of file or directory each entry is.

---

# Let’s apply what we learned!

Notes: <br>
