---
title: 'module1_07'
type: slides
---

# Intermediate shell topics

Notes:
In this module we will look at slightly more complex and powerful shell workflows.

---

## Searching for text patterns in files

```sh
grep "the" note_2022-06-22.md
```

```out
note_2022-06-22.md:These are the first
note_2022-06-22.md:in the file.
```

Notes:
We can use the `grep` command to search for text in files.
To search for the word "the" in our notes file,
we can type `grep "the" note_2022-06-22.md`.
This will return every line in the file that contains the word "the".

---

## Seeing the history of commands

```sh
history
```

```out
1  pwd
2  ls
3  cd Documents/
4  cd
5  ls -F -a
6  history
```

Notes:
Occasionally,
we might want to re-use a command that we used in the past,
but don't remember exactly what it was.
The `history` command can help us with this
as it lists all the previous commands we have run
and in which order we ran them.

---

## Combining commands

```sh
history | grep "ls"
```

```out
2  ls
5  cd ls -F -a
7  history | grep "ls"
```

Note:
As you start using the shell more,
you will realize that the `history` command quickly fills up
and it becomes difficult to find any particular command we are looking for.
In cases like these,
it would be useful to be able to search in the list of commands,
e.g. you might remember that your command included the word `ls`,
but you don't remember exactly which flags you used.

We just learned about `grep` for searching for text in files,
so maybe there is someway we could use it
to search the text output from the history command?
In other words,
could we redirect the output from the history command to `grep`
before printing it on the screen?

This is exactly what a `pipe` (`|`) does,
which we can use with the following syntax `command1 | command2`.
In our case this would be `history | grep "ls"`,
which sends the output to `grep`,
which removes all the lines that don't contain "ls",
before printing the remaining three lines to the screen.

---

## A complex pipe

```text
Fruit Color
kiwi green
plum purple
apple red
apple green
plum purple
apple red
watermelon red
```

<br>

```sh
tail -n +2 fruit-colors.txt | cut -d ' ' -f2 | sort | uniq -c
```

```out
2 green
2 purple
3 red
```

Notes:
Pipes allow us to create rather complex commands.
Imagine that we have a text file containing a list of fruits and their colors
as in the top of this slide.
How can we count how many fruits there are of each color?

We need to break this down into several steps:

1. We don't want to include the first line that says "Fruit Color" when we are counting. To show the entire file except this line we can use `tail -n +2` to print everything from the second line to the end of the file.
2. To get only the colors, we need to `cut` out the second column. We can do this using the `cut` command, and specifying that the delimiter in this file is a space (`-d ' '`), and we are interesting in cutting out the second column/field (`-f2`).
3. To count the unique occurrences, we first need to `sort` the file so that all the same colors are adjacent to each other. On a sorted file, we can use the `uniq` command with the `-c/--count` flag to count the unique occurrences of words.

This is a rather complex pipe and we introduced a few new commands as well.
You don't need to worry about the details here,
it is the principle that is important:
With the shell you can find many useful small commands
and if you string them together using a pipe,
it is possible to perform rather advanced text processing directly in the shell.

---

## Creating an alias

```sh
# Before creating the alias
l
```

```out
l: command not found
```

```sh
alias l="ls -aFltr"
l
```

```out
total 12
-rw-rw-r-- 1 usergroup username   53 Jun 20 08:47 note_2022-06-22.md
drwxr-xr-x 4 usergroup username 4096 Jun 20 11:45 ../
-rw-rw-r-- 1 usergroup username    0 Jun 20 11:53 note_2022-07-02.md.bkp
-rw-rw-r-- 1 usergroup username    0 Jun 20 11:53 note_2022-07-02.md
-rw-rw-r-- 1 usergroup username    0 Jun 20 11:53 note_2022-06-20.md.bkp
drwxrwxr-x 2 usergroup username 4096 Jun 20 14:54 ./
```

Notes:
If you have a complex command that you run every so often,
but is hard to remember,
or just take a long time to type out,
you can create a nickname for this command.
This could e.g. be a command that uses many of option flags,
or a long series of commands piped together.

An example of this could be to enhance the `ls` command,
which is one we use very often and could be made more helpful
by have a nickname for some of the commonly used options.
Let's say that we want to include the following options:

- `-a` list all files, including hidden ones
- `-F` append indicator characters to make the output easier to understand
- `-l` show the "long" format, which includes more information about each file (read the man page to find out more!)
- `-t` sort files by time instead of alphabetically
- `-r` sort in reverse order with the most recent file at the bottom

We could type out `ls -aFltr` each time, but that is cumbersome.
If we instead type `alias l="ls -aFltr"`,
we can use the shorter `l` as an "alias" for the longer command.
If we want to keep this alias between reboots,
we need to save it to file `~/.bash_profile` (on Windows and Mac)
or `~/.bashrc` (on Linux)
the same way we did during the setup instructions.

---

## Reading the manual

```sh
man ls
```

```out
LS(1)                                                    User Commands
 
NAME
       ls - list directory contents
 
SYNOPSIS
       ls [OPTION]... [FILE]...
 
DESCRIPTION
       List  information  about the FILEs (the current directory by default).  Sort entries alphabetically if none of -cftuvSUX
       nor --sort is specified.
 
       Mandatory arguments to long options are mandatory for short options too.
 
       -a, --all
              do not ignore entries starting with .
 
       -A, --almost-all
              do not list implied . and ..
 
       --author
              with -l, print the author of each file
 
       -b, --escape
              print C-style escapes for nongraphic characters
 
       --block-size=SIZE
              with -l, scale sizes by SIZE when printing them; e.g., '--block-size=M'; see SIZE format below
 
       -B, --ignore-backups
              do not list implied entries ending with ~
...
```

Notes:
How can we find out what options like `-t` and `-r` do if we don't know of them already?
By reading the built-in help manual!
Typing `man ls` brings up the manual help page for the `ls` command.
You can navigate these pages with `Space` to go down and `b` to go **B**ack up.
`q` quits the manual and takes you back to the shell prompt.

Typing `/` starts a search.
Type in the search term and press `Enter`
to be taken to the first hit.
To continue to the **n**ext search hit,
press `n`,
and to go to the previous,
press `shift` + `n`.

---

# Let’s apply what we learned!

Notes: <br>
