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

# Introduction to computing and text-based communication

Notes:
In this slide deck
we will introduce how to work
with the shell,
but before we get into exploring the shell,
we want to give some background to the idea of computing.

---

## What is a computer

<img src='/module2/wires-computers-eniax-1946.png' width="50%" alt="A few of the world's most prominent programmers of the time computing ballistic trajectories on the ENIAC during the second world war."/>

A few of the world's most prominent programmers of the time computing ballistic trajectories on the ENIAC during the second world war.

Notes:
Essentially,
computing is about humans communicating
with the computer to modulate flows of current in the hardware.
Early examples of human computer communication were quite primitive
and included actually disconnecting a wire and connecting it again in a different spot.

Luckily,
we are not doing this anymore;
instead we have graphical user interface with menus and buttons,
which is what you are commonly using on your laptop.

These graphical interface can be thought of as a layer (or *shell*)
around the internal components of your operating system.
Shells exist as an intermediate that both makes it easy for us to express our thoughts,
and for computers to interpret them.


---

## Text-based communication

Selecting open from the file menu
<img src='/module2/file-open-menu.png' width="50%" alt="Selecting open from the file menu"/>

Opening a file via a text based interface could look like this
```
file.open('filename.csv')
```

Notes:
Today,
We will learn how to communicate to a computer via a text-based shell,
rather than a graphical one.

Using a text-based shell might at first seems counter-intuitive,
since the reason for creating a shell in the first place
was to facilitate user interaction with the computer.
So now that we have these easy to use graphical user interfaces,
why would anyone in their right mind go back to using a text based interface?

Well,
it’s partly a misconception,
GUIs are nice when you are new to something,
but text based interfaces are actually faster
and easier to use when you know what you are doing.

We can compare it to learning a language,
in the beginning it’s nice to look things up in a dictionary (or a menu on the computer),
but once I know what I want to say,
it is just easer to say or type it directly,
instead of looking in submenues.

And by extension,
it would be even faster to speak or even just think of what you want to do and have it executed by the computer,
this is what speech- and brain-computer interfaces are concerned with.

---

## Which shell are we using

<img src="https://cdn.rawgit.com/odb/official-bash-logo/master/assets/Logos/Identity/PNG/BASH_logo-transparent-bg-color.png" alt="The Bourne Again SHell" width="400px"></img>

The Bourne Again SHell

Notes:

Bash is the most commonly used text shell.
You have it installed on your computer by default if you are using Mac or Linux machine,
and if you are on a Windows machine you downloaded bash as part of the setup instructions.
Sometimes we might use "prompt",
“command line”,
or "terminal",
which for the purposes of this lecture,
refers to the same thing.

The abbreviation BASH stands for Bourne Again SHell.
Other shells existed before Bash,
and one of the most successful early shells was invented by Stephen Bourne at Bell Labs in 1977,
which he called the Bourne Shell.
In 1989,
the Free Software Foundation improved the Bourne Shell and as a pun named it the Bourne Again Shell,
to symbolize it was now "reborn" with new features.

Text-based shells are also called command-line interfaces (CLI).
The heart of every CLI is a read-evaluate-print loop (REPL).
When we type a command and press Return (also called Enter) the CLI reads the command,
evaluates it (i.e.,
executes it),
prints the command’s output,
and loops around to wait for another command.
Let's see how to do that next!

---

## Your first words

The default prompt character:

```sh
$
```

<br>

Typing in a command and pressing enter to run it:

```sh
whoami
```

```out
username
```

<br>

```sh
pwd
```

```out
/home/username
```

Notes:
Our first shell commands will let us explore our folders and files,
and will also introduce us to several conventions that most Unix tools follow.
To start,
when Bash runs it presents us with a prompt to indicate that it is waiting for us to type something.
This prompt is a simple dollar sign by default (`$`).
However,
different shells may use a different symbol:
in particular,
the zsh shell,
which is the default on newer versions of MacOS,
uses %.

If we run the command `whoami`,
the computer will tell us who we are (our login name),
and if we run `pwd` (Print Working Directory) the shell tells us where we are (the `home` directory by default).

Our home directory will be in different places on different operating systems.
On Linux it may be `/home/username`,
and on Windows it may be `C:\Documents and Settings\username` or `C:\Users\username` (depending on the version of Windows).
On Max it will be `/Users/username`.
Our examples show what we would see on Linux.

---

## Exploring the files system

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
let’s see what we have using the command ls (short for “listing”),
which prints the names of the files and directories in the current directory:

Again,
our results may be different depending on our operating system and what files or directories we have.

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
We can make the output of ls more informative using the -F option (also sometimes called a switch or a flag).
Options are exactly like arguments to a function in Python;
in this case,
-F tells ls to decorate its output to show what things are.
A trailing `/` indicates a directory,
while a trailing `*` tells us something is a runnable program.
Depending on our setup,
the shell might also use colors to indicate whether each entry is a file or directory.

---

# Let’s apply what we learned!

Notes: <br>
