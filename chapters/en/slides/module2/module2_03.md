---
title: 'module1_03'
type: slides
---

# Moving Around

Notes: In this slide deck,
we will see how we can use the shell to move around our file system.

---

## Our file structure

```
/home/username
├── Documents/
│   ├── another-folder/
│   └── my-document.pdf
├── Downloads/
├── Music/
├── Pictures/
├── .hidden-file
├── my-program*
└── todo.txt
```

Notes:
For this slide deck,
we will work with a file structure that looks like what is shown in this slide.
We have four folders, a hidden file, and two regular files
inside our user's home directory (`/home/username`).
Inside the `Documents` directory there is one additional file and one subfolder.
Now let's see how we can use different shell commands to move around in this structure.

---

## Moving around in the shell

```sh
ls -F
```

```out
Downloads/    Music/
Documents/    todo.txt
Pictures/     my_program*
```

<br>

```sh
ls -F Documents
```

```out
my-document.pdf
another-folder/
```

Notes:

Let's first run `ls` again to remind us about what the directory structure looks like.

If we want to see what’s in the `Documents` directory we can ask `ls` to list its contents,
by passing the folder name as an argument to `ls`.

---

## Absolute and relative paths

**Relative path**

```
Documents/
```

**Absolute path**

```
/home/username/Documents/
```

Notes:
Note that we can write paths in two separate ways.
In the previous slide we used the position `Documents` relative to the directory we were already in.
We could instead have written out it's absolute position in the file system,
starting with the root directory:
`/home/username/Documents`.
Absolute paths always start with a leading slash `/`.

Using a relative path is like telling someone to go two kilometers north and then half a kilometer east;
using an absolute path is like giving them the latitude and longitude of their destination.

They both have different advantages:
An absolute path will always be the same on your file system,
whereas using relative paths makes it easier to work with collaborators across multiple computers.

---

## Moving to a directory

```sh
cd Documents
```

There is not output from the `cd` command so we use `pwd` to confirm where we are.

```sh
pwd
```

```out
/home/username/Documents/
```

Notes:
If we are going to do a lot of work inside the `Documents` directory,
the easiest thing would be to change our current working directory,
so that we don’t have to type zips over and over again.
The command to do this is `cd`,
which stands for "Change Directory",
since it changes what directory we are currently inside.

`cd` doesn't print anything.
This is normal:
many shell commands run silently unless something goes wrong,
on the theory that they should only ask for our attention when they need it.
To confirm that `cd` has done what we asked,
we can use `pwd`,
to print the **absolute** path to the current directory.

---

## Navigating up to the parent directory

Incorrect command:

```sh
cd username
```

```out
cd: username: No such file or directory
```

<br>

Correct command followed by `pwd`:

```sh
cd ..
pwd
```

```out
/home/username
```

Notes:
We now know how to navigate down the directory tree,
but how do we go back up to our user's home directory?
It doesn't work to simply type `cd username` since we are inside the `Documents` subdirectory.

To get back up,
we could either type out the absolute path `cd /home/username`
or use a special relative path called `..`
(two periods in a row with no spaces).
This is a convenient shortcut that always means "the directory that contains the current one",
which is often called the "parent" directory of the current directory.

---

## Listing hidden files

```sh
ls -F -a
```

```out
./             Downloads/    Music/
../            Documents/    todo.txt
.hidden-file   Pictures/     my_program*
```

Notes:
Why didn't we see the special parent directory symbol `..`,
when we listed the directory content?
`ls` usually doesn't show us this special directory—since it’s always there,
so displaying it every time would be a distraction.

In fact `ls` hides every file starting with `.`,
since this is an indication that the creator of the file wanted it to be hidden
(e.g. many configuration files start with `.`).

We can ask `ls` to include all files by using the `-a` option,
which stands for "all".
You will see that this also includes a single dot `.`;
this stands for the current directory.

Some option also exist in a "long form",
in this case the `-a` option is equivalent to writing `--all`.
It is also possible to combine options with a single hyphen,
so `ls -F -a` is the same as `ls -Fa`.

---

## Navigating several directories at a time

Navigate two folders down:

```sh
cd Documents/another-folder
```

<br>

Navigate two folders up:

```sh
cd ../..
pwd
```

```out
/home/username
```

Notes:
`cd` allows us to navigate multiple directories at a time,
by joining directory names with the path separator `/`.
We can use this to navigate either down or up.

For example,
typing `cd Documents/another-folder`
would take us directly to the `another-folder` directory
(in our example folder structure).
Typing `cd ../..`
would take us two folders up:
back to out home directory.

---

## Home directory shortcut

```sh
cd ~/Documents
pwd
```

```out
/home/username/Documents
```

<br>

These two `cd` commands both return you to the home directory:

```sh
cd ~
cd
pwd
```

```out
/home/username
```

Notes:
`cd` also offers a few shortcuts for common operations,
e.g. using `~` is a shortcut for typing `/home/username`,
so no matter in which folder you are currently located,
you can type `cd ~/Documents` to navigate to the documents folder in your home directory.

Likewise, you could type `cd ~` to navigate to your home directory,
or even just `cd` without any path argument,
since this is a special shortcut just for the home directory.

Another common shortcut is `cd -` (hyphen),
which takes you back the most recent directory you visited.

---

# Let’s apply what we learned!
