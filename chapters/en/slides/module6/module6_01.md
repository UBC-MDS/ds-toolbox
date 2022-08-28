---
type: slides
---

# Filenames: Best Practices

Notes:

In this slide deck, we will learn about the most effective conventions when naming files.

---

## Examples of bad filenames

<br>

```
my-figure.png
figure1-scatterplot-*-vs-&.png
Figure 1 scatterplot of asterisks vs ampersands.png
```

Notes:

Here are a few examples of filenames that are not recommended to use.
Pause here for a minute and study these examples;
Can you point out a few problems with the examples in this slide?

We will come back to these and show examples
of more effective filenames in the next few slides.

---

## Three principles for effective filenames

<br>

1. Be easy to read and informative to a human
2. Be machine-readable
3. Play well with default ordering

Notes:

In general, we'd like filenames to be easy to process by the computer and easy to read and explore by a human.
This means that a filename should ideally include both
an easily readable human description of what is in the file,
and metadata such as dates or tags that make it easy to parse for a computer.
It's also very helpful to have files show up in a logical order when viewed in a file explorer or when listed in the terminal.

Let's look closer at each one of these in the next few slides.

---

## 1. Human-readable filenames

<br>

- Name contains info on content
- Connects to the concept of a _slug_ from semantic URLs

<br>

**Example:**

Which set of filenames do you want to see at 3 a.m. before a deadline?

<img src="/module6/human_readable_not_options.png" width="70%"></img>

Notes:

Filenames provide an opportunity to describe what a file contains
so that we don't have to open each file in order to know what is in it
(imagine how tedious this would be!).

Therefore,
it is important to write filenames in a way
that makes them easy to interpret for a human reader.
It is always preferred to use filenames that reflect something important about the content of the files.

The informative part of a filename is often called a "slug".
This is similar to how the last part of a URL is also called a "slug" and is supposed to be relevant to the content of the webpage it points to. If it nicely matches the content of the webpage and is easy to read, chances are more people will click on it, and mention it in other places. It will also help search engines identify the content of a webpage.

---

## 1. Human-readable filenames

<br>

An uninformative filename:

```
my-figure.png
```

<br>

A filename that is not human-readable:

```
1_scat_len_int.png
```

<br>

An easy to read and informative filename:

```
fig1_scatterplot-length-vs-interest.png
```

Notes:

In this slide,
the name `my-figure.png` does not contain much information about what this file contains.

What if you created multiple figures for different purposes? Then they would all have the same name.

The name `1_scat_len_int.png` does seem to provide some information,
but it is not easy for a human to understand the file contents
just from reading the filename.

A more effective name for this file would be something like `fig1_scatterplot-length-vs-interest.png`.
This name is easy to parse for a human
and includes relevant information about the content of the file.

---

## 2. Machine-readable filenames: Special characters and spaces

<br>

An ineffective name that contains the special characters `*` and `&`:

```
figure1-scatterplot-*-vs-&.png
```

<br>

An ineffective name that contains spaces:

```
Figure 1 scatterplot of asterisks vs ampersands.png
```

<br>

A name that is easy to parse for a computer:

```
fig1_scatterplot-asterisks-vs-ampersands.png
```

Notes:

In a data science project, we usually read files using a script or inside the terminal environment.
Therefore, it is critical to use filenames that are both machine friendly and consistent across files with similar or related content.

For example, spaces and punctuation should be avoided in filenames. The reason is that these characters carry special meaning in most programming languages and in Bash.
So working with a filename that contains these characters requires special treatment to prevent a script or the terminal from misinterpreting it.

Returning to our example in the first slide,
`figure1-scatterplot-*-vs-&.png` is not an effective file name.
This is because it contains special characters,
some of which have special meanings in the shell and will therefore be hard to type in (e.g.
`*`, which we learned is a wildcard matching any sequence of characters in Bash).

The second name, `Figure 1 scatterplot of asterisks vs ampersands.png`,
might initially look like a suitable filename
because it is easy for us humans to read
and it does not appear to contain any special characters.

However,
it does contain spaces, and these are often hard to work with,
both in Bash and in programming languages like Python.
It is therefore recommended to use `hyphens` instead of spaces to separate words.

The words in the filename are also not separated in a way that is easy for a human to read,
and they are not descriptive for the contents of the file.
The name `1986-01-28_raw-data-from-challenger-o-rings.txt` addresses all these issues.

---

## 2. Machine-readable filenames: Deliberate use of delimiters

Deliberate use of `-` and `_` allows recovery of metadata from filenames:

- `_` underscore used to delimit units of metadata we want later
- `-` hyphen used to delimit words so reading becomes easier

<br>

An ineffective name without delimiters:

```
Jun6th Figure 1 scatterplot of asterisks vs ampersands.png
```

<br>

A name where metadata fields are separated by `_`:

```
fig1_2022-06-20_scatterplot-asterisks-vs-ampersands.png
```

<br>

Consistent use of delimiters for files with similar content:

<img src="/module6/plasmid_delimiters.png" width="50%"></img>

Notes:

Although filenames should never contain punctuation characters such as `*` or `?`,
we can use underscores or hyphens
to separate meaningful parts of a filename
such as metadata or tags.

Using an extended example from our previous slide,
we can see that `Jun6th Figure 1 scatterplot of asterisks vs ampersands.png`
is an ineffective name where it is hard for a machine
to figure out the different distinct metadata contained within the filename
(e.g., date, figure number, and description).

A better name would be `fig1_2022-06-20_scatterplot-asterisks-vs-ampersands.png`,
where the format of the name is `<figure number>_<date>_<description>`,
which can easily be parsed programmatically
by using underscore as a separator for the different parts.

This also avoid using upper-case letters,
which can be confusing since filenames are case sensitive on MacOS and Linux,
but not on Windows.

When using delimiters to separate metadata fields,
it is important to be consistent across files with similar content
as we can see an example of in the screenshot in this slide.

Deliberate and consistent use of delimiters
makes it easy to recover all metadata in our filenames in the future,
using pattern matching via globbing or using regular expressions
as we will see in the next slide.

---

## 2. Machine-readable filenames: Pattern matching in the terminal

Files in the directory:

<img src="/module6/plasmid_names.png" width="50%"></img>

<br>

**Example:** Globbing with <code>ls</code>to narrow file listing:

<img src="/module6/plasmid_glob.png" width="60%"></img>

Notes:

Machine-readable filenames make it easy to find a group of desired filenames by using special patterns to match parts of the filenames.
These patterns are called "glob"s, and finding filenames using this method is called "globbing".

In this example here, we have specified a particular pattern, namely `*Plasmid*` to find all filenames that contain this word. This is an example of "globbing" using the `*` wildcard as you might remember from Module 2.

If we've already been careful to include `Plasmid` in the name of all files with related content, then finding those files using a script or in the terminal would have been be very easy.

---

## 2. Machine-readable filenames: Pattern matching in the file browser

**Example:** Using MacOS Finder search

<br>

<img src="/module6/plasmid_mac_os_search.png" width="70%"></img>

Notes:

Using these filename conventions are not only useful in the terminal,
but they also make it easy to find the files you need in file browser on Linux, MacOS, or Windows,
as can be seen in this slide.

---

## 2. Machine-readable filenames: Pattern matching in a programming language

**Example:** Using regex in Python

<br>

<img src="/module6/plasmid_regex.png" width="60%"></img>

Notes:

The same goes for when you want to find those files using a Python or R script.
In this case, you have a similar pattern matching mechanism available to you called "regular expressions" or "regex".
Regular expressions are simply search patterns for finding desired strings of characters
that we can use in a programming language like Python.
They work similarly to globbing,
but have a more advanced functionality.

The takeaway here is that, if you consistently use machine-readable filenames, you can easily find what you want later, whether it be in the terminal, in a file explorer or using a script!

---

## 3. Works well with default ordering

<br>

- Put something numeric first
- Left-pad numbers with zeros or display files in "natural" order
- Use the `YYYY-MM-DD` format for dates

<br>

Let's see some examples.

Notes:

One other helpful convention to consider is to use filenames that will be ordered in a preferable way by default.

Depending on the context, we should practice:

- Putting something numeric first
- Left-pad numbers with zeros or display files in "natural" order
- Using the `YYYY-MM-DD` format for dates

---

## 3. Works well with default ordering

<br>

Logical order:

<br>

<img src="/module6/logical_order.png" width="80%"></img>

Notes:

In this example, we have reason to have the first 5 files in a particular order, and the next 4 in another order.
To make sure this happens by default, we can use numbers in the beginning of filenames in a particular order.

Note the zero-left-padding of the numbers. We'll see an example of why this is important in the next slide.

---

## 3. Works well with default ordering

<br>

```
ls
```

```out
figure02.png
figure12.png
figure2.png
```

<br>

```
ls -v
```

```out
figure02.png
figure2.png
figure12.png
```

Notes:

It is good to name files so that they show up in the expected order
when viewing them in the terminal or in a file browser.

By default,
`figure12.png` would appear before `figure2.png`
because `1` comes before `2`.

To avoid this,
we can number files with a leading zero (e.g. `01`, `02`, etc)
or use the `-v` option with `ls` in the terminal.
The `-v` option is called "natural" sort
and is available for some graphical file browsers as well.

---

## 3. Works well with default ordering

Chronological order:

<br>

Always use the **YYYY-MM-DD** format (that is, the ISO 8601 standard) for dates: 

<br>

<img src="/module6/chronological_order.png" width="80%"></img>

Notes:

For ordering based on date and time, we need to use a formatting that computers understand.

We encourage you to always use the **YYYY-MM-DD** format, also known as the ISO 8601 standard.

Computer environments understand this format well, and it is also nicely readable by humans.

---

## Recap

<br>

Remember these three principles for filenames:

- Being machine-readable
- Being human-readable
- Playing well with default ordering

<br>

Some more examples of effective filenames:

<br>

<img src="/module6/awesome_names.png" width="65%"></img>

Notes:

Adopting these basic principles is recommended as soon as you start working on a project because:

- They are easy to implement now
- Payoffs accumulate as projects grow more complex

---

# Let's apply what we learned!
