---
title: 'module1_05'
type: slides
---

# Working with Files and Directories

Notes:
We now know how to explore files and directories, but how do we create them? 
That's what we will find out in this chapter.

---

## Creating a directory

```sh
cd ~/Documents

# MaKe Directory
mkdir notes
```

**Naming guidelines**

1. Don't use spaces
2. Don't begin the name with a `-` (hyphen)
3. Stick to digits and letters (preferably lower case)

Notes:
Let's go back to the `~/Documents` directory and create a subfolder called `notes`.
For this we first use the `~` home  directory shortcut,
and then the `mkdir` command.

We will talk more about useful naming conventions in module 6.
For now it is enough if you remember these three guidelines.

1. Don't use spaces
2. Don't begin the name with a `-` (hyphen)
3. Stick to digits and letters (preferably lower case)

---

## Creating a file

```sh
ls -F notes
```

<br>

```sh
cd notes
code my-first-note.md
```

Notes:
Since we just created the `notes` directory,
ls doesn't display anything when we ask for a listing of its contents.

Let’s change our working directory to `notes`,
then use the `VS Code` editor to create a file called `my-first-note.md`.
The command to invoke VS Code from the command line is `code`,
and if we pass it a filename as an argument,
the file will be created in the current directory.
Now try launching it yourself!

The `.md` syntax means that we want to create a markdown file.
File extensions like `.md` and `.py` don't change anything about the content of the file,
but they are an indicator to other program such as `VS Code` what type of content
we are going to put inside the file.
These program can then activate special functions for certain files,
such as using the appropriate colors to highlight headings and functions.

Let's move on to the next slide to see how it looks when we are editing file in `VS Code`.

---

## Editing a file in VS Code

<img src='/module2/edit-file-vscode.png' width="80%" alt="How to edit a file in VS Code"/>

Notes:
This is what it looks like to edit a text file in `VS Code`.
You will see that there is a small white circle next to the file name.
This is an indication that the file is not saved yet.

When we are done adding our edits,
we can hit `Ctrl` + `s` to save the file,
which will make the white circle disappear.
After saving the file,
you can optionally close `VS Code` before returning to the terminal.

We are only using `VS Code` as a simple text editor here,
but it is worth knowing that you can use use it as a powerful editor for code as well.

---

## Viewing the content of a file in the terminal

```sh
ls
```

```out
my-first-note.md
```

<br>

```sh
head my-first-note.md
```

```out
These are the first
few lines of content
in the file.
```

Notes:
If we now type `ls` we will see the name of the file we just created in VS Code.
To see the content of the file,
we can use the `head` command.
`head` show the first few lines of a file
(just as when we use `df.head()` in pandas),
and optionally takes an argument for how many lines to show:
`head -n 10` (the default is five).

`head` works with all plain text files,
such as code and markdown files,
but not with binary files
such as word documents, spreadsheets, or images.
To see the last few lines,
you can use `tail` instead of `head`.

---

## Moving files and directories

```sh
mv my-first-note.md ..
ls ..
```

```out
Downloads/    Music/        my-first-note.md
Documents/    todo.txt
Pictures/     my_program*
```

<br>

```sh
mv ../my-fist-note.md .
ls
```

```out
my-fist-note.md
```

Notes:
To **m**o**v**e a file around,
we can use the `mv` command.
For example,
to move the text file we just created to the parent directory,
we would type `mv my-first-note.md ..`.
This moves it to the parent directory,
and keeps the name the same as we can see if we do `ls ..`

If we want to move the file back to the current directory,
we can use the `.` shortcut: `mv ../my-fist-note.md .`

---

## Renaming a file

```sh
mv my-fist-note.md note_2022-06-20.md
ls
```

```out
note_2022-06-20.md
```

<br>

```sh
mv -v notte_2022-06-20.md note_2022-06-20.md
```

```out
renamed 'notte_2022-06-20.md' -> 'note_2022-06-20.md'
```

Notes:
Renaming a file can be thought of as moving it to a new filename
either in the same or a different directory.
This might initially seem a bit different from a graphical file browser,
where renaming and moving are two distinct functions,
but the underlying operation is actually the same.

To give our file a more descriptive name that includes the date we created this file,
we would type `mv my-fist-note.md notte_2022-06-20.md`.
We intentionally made a typo here,
let's fix it while showing off the functionality of the `-v` (verbose) option,
which prints what was moved/renamed so that it is easier to keep track of
`renamed 'notte_2022-06-20.md' -> 'note_2022-06-20.md'`.

We must be careful when specifying the destination
because `mv` will overwrite existing files without warning.
The option `-i` ("interactive") makes `mv` ask us for confirmation before overwriting,.
`mv` also works on directories where it renames the directory without changing its contents.

---

## Copying files and directories

```sh
# Copy the file to the parent directory
cp note_2022-06-20.md ..
```

<br>

```sh
# Create a backup copy in the same directory
cp note_2022-06-20.md note_2022-06-20.md.bkp
ls
```

```out
note_2022-06-20.md
note_2022-06-20.md.bkp
```

Notes:
The `cp` command create a **c**o**p**y of a file.
Just as with `mv`,
we optionally rename the file as we are copying it.

Here we first copy the note we created to the parent directory and then
show how we could use `cp` to create a backup of our file in the same directory.
Remember that the file extension does not change the content of the file,
so this is just a visual indicator to us for what type of file this is.

If we ever wanted to copy a directory,
we would have to specify the `-r` flag,
which indicates that we want to copy the directory recursively,
i.e. also making a copy of all the directory contents.

---

## Deleting files and directories

```sh
rm note_2022-06-20.md.bkp
ls
```

```out
note_2022-06-20.md
```

<br>

```sh
rm -iv ../note_2022-06-20.md
```

```out
rm: remove regular file '../note_2022-06-20.md'? y
removed '../note_2022-06-20.md'
```

Notes:
Let's clean things up by removing our backup copy that we just created.
The `rm` commands allows us to **r**e**m**ove files and folders.
In this case we would type `rm note_2022-06-20.md.bkp`.

Deleting is forever: unlike most graphical file browsers,
the Unix shell doesn't have a trash bin that we can recover deleted files from.
Just as with `mv`, we can use the `-i` and `-v` to make `rm` a bit more safe and informative.
Let's use these flags when removing the copy we placed in the parent directory
`rm -iv ../note_2022-06-20.md`.

And just as with `cp`, we would need to include the `-r` flag
to recursively remove a directory and all its contents.

---

## Wildcards

```sh
touch note_2022-06-20.md.bkp note_2022-07-02.md note_2022-07-02.md.bkp
ls *.bkp
```

```out
note_2022-06-20.md.bkp
note_2022-07-02.md.bkp
```

<br>

```sh
ls *07*
```

```out
note_2022-07-02.md
note_2022-07-02.md.bkp
```

Notes:
Wildcards (also called "globbing") simplifies targeting multiple files with similar names
in the same command.
The most commonly used wildcard is `*` (a single asterisk).
It matches zero or more characters,
so typing `ls *.md` list all of the markdown files in the current directory.

If we wanted to list all the files created in July (month 7),
we would need to type ls `ls *07*`,
which means that the filename can include anything before and after `07`.
If we would have left out the second `*` and type `ls *07`
we would not have seen any matches because there is not file that end in 07,
they all have some characters after.

Using wildcards is helpful when we want to delete, move, or copy files
with a predictable naming pattern.

---

# Let’s apply what we learned!

Notes: <br>
