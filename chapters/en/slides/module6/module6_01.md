---
type: slides
---

# File Names: Best Practices

---

# What works, and what doesn’t

<br>

No:

```
myabstract.docx
Joe’s Filenames Use Spaces and Punctuation.xlsx
figure 1.png
fig 2.png
JW7d^(2sl@deletethisandyourcareerisoverWx2*.txt
```

<br>

Yes:

```
2014-06-08_abstract-for-sla.docx
joes-filenames-are-getting-better.xlsx
fig01_talk-scatterplot-length-vs-interest.png
fig02_talk-histogram-attendance.png
1986-01-28_raw-data-from-challenger-o-rings.txt
```

Notes:

Here are two sets of file name examples: one with not-so-great choices, and another that is much more readable.

Can you point out a few problems with the first set of file names?

For example, the last file name is not so easily readable by a human, despite containing certain words.

The second file name, on the other hand, uses spaces and punctuation which can cause problems when processing files using a script or in the terminal, because they usually have special meanings.

---

# Three principles for file names

<br>

1. Be machine readable
2. Be human readable
3. Play well with default ordering

<br>

Awesome file names:

<br>

<img src="/module6/awesome_names.png" width="80%"></img>

Notes:

In general, we'd like file names to be easy to process by the computer and easy to read and explore by a human.

Moreover, it's also very helpful to have files show up in a logical order when viewed in a file explorer or when listed in the terminal.

---

# 1. Machine-readable file names

<br>

- Regular expression and globbing friendly
  - Avoid spaces, punctuation, accented characters, case sensitivity
- Easy to compute on
  - Deliberate use of delimiters

<br>

# Globbing

<br>

<img src="/module6/plasmid_names.png" width="80%"></img>

Notes:

In a data science project, we usually read files using a script or inside the terminal environment.

Therefore, it is critical to use file names that are both machine friendly and consistent across files with similar or related content.

For example, spaces and punctuation should be avoided in file names. The reason is that these characters carry special meaning in most programming languages and in Bash.

So working with a file name that contains these characters requires special treatment to prevent a script or the terminal from misinterpreting it.

Machine-readable file names make it easy to find a group of desired file names by using special patterns that the machine understands.

These patterns are called "glob"s, and finding file names using this method is called "globbing".

---

**Example:** Globbing to narrow file listing

<br>

<img src="/module6/plasmid_glob.png" width="80%"></img>

Notes:

In this example here, we have specified a particular pattern, namely `*Plasmid*` to find all file names that contain this word. This is an example of "globbing" using the `*` wildcard.

If we've already been careful to include `Plasmid` in the name of all files with a related content, then finding those files using a script or in the terminal would be very easy.

---

**Example:** Using MacOS Finder search

<br>

<img src="/module6/plasmid_mac_os_search.png" width="80%"></img>

Notes:

Well, it's not just the terminal.

Using these file name conventions also makes it easy to find the files you need in the Mac Finder, or in Windows Explorer:

---

**Example:** Using regex in R

<br>

<img src="/module6/plasmid_regex.png" width="80%"></img>

Notes:

The same goes for when you want to find those files in a Python or R script. In this case, you have a similar matching mechanism available to you called "regular expressions".

Regular expressions are simply search patterns for finding desired strings of characters, just like globs, when we are using a programming language like Python.

The takeaway here is that, if you consistently use machine-readable file names, you can easily find what you want later, whether it be in the terminal, in a file explorer or using a script!

---

# Punctuation

<br>

Deliberate use of `-` and `_` allows recovery of meta data from the filenames:

- `_` underscore used to delimit units of meta data we want later
- `-` hyphen used to delimit words so your eyes don’t bleed

<br>

<img src="/module6/plasmid_delimiters.png" width="80%"></img>

Notes:

Although file names should never contain punctuation characters such as `*` or `?` (because they have special meaning in e.g. globbing and regular expressions), we can use underscores or hyphens to separate units of meta data or words in a file name.

This makes it easy to recover all meta data in our file names in the future, using pattern matching by globbing or regular expressions.

---

# Recap

<br>

Machine-readable file names are:

- Easy to search for files later
- Easy to narrow file lists based on names
- Easy to extract info from file names, e.g. by splitting

<br>

Even if you're new to regular expressions and globbing, be kind to yourself and avoid
- Spaces in file names
- Punctuation
- Accented characters
- Different files named `foo` and `Foo`

Notes:

---

# 2. Human-readable file names

<br>

- Name contains info on content
- Connects to the concept of a _slug_ from semantic URLs

<br>

**Example:**

Which set of file names do you want to see at 3 a.m. before a deadline?

<img src="/module6/human_readable_not_options.png" width="80%"></img>

Notes:

Computers are used by humans, so it makes sense to come up with file names that are meaningful to humans.

It is always preferred to use file names that reflect something important about the content of the files.

The idea of having meaningful file names consisting words separated by delimiters, such as a hyphen or underscore is related to concept of a URL slug.

A URL slug is the last part of a URL, which is supposed to relevant to the content of the webpage it points to. If it nicely matches the content of the webpage and is easy to read, chances are more people will click on it, and mention it in other places. It will also help search engines identify the content of a webpage.

---

# 3. File names that play well with default

<br>

- Put something numeric first
- Left-pad other numbers with zeros
- Use the `YYYY-MM-DD` format for dates

<br>

Let's see some examples.

Notes:

One other helpful convention to consider is to use file names that will be ordered in a preferable way by default.

Depending on the context, we should practice:

- Putting something numeric first
- Left-padding other numbers with zeros
- Using the `YYYY-MM-DD` format for dates

---
<br>

Logical order:

<br>

<img src="/module6/logical_order.png" width="80%"></img>

Notes:

In this example, we have reason to have the first 5 files in a particular order, and the next 4 in another order.

To make sure this happens by default, we can use numbers in the beginning of file names in a particular order.

Note the zero-left-padding of the numbers. We'll see an example of why this is important in the next slide.

---

<br>

We should left-pad numbers with zeros:

<br>

<img src="/module6/left_pad.png" width="80%"></img>

<br>

If you don’t left-pad, you'll get this:

<br>

```
10_final-figs-for-publication.R
1_data-cleaning.R
2_fit-model.R
```

Notes:

In this case, we probably want `1_data-cleaning.R` and `2_fit-model.R` to appear before `10_final-figs-for-publication.R`.

But since sorting in the terminal or file explorer is done first according to the first character from the left, we ended up with this illogical order order here.

---

Chronological order:

<br>

Always use the **YYYY-MM-DD** format (that is, the ISO 8601 standard) for dates: 

<br>

<img src="/module6/chronological_order.png" width="80%"></img>

Notes:

For ordering based on date and time, we need to use a formatting that computers understand.

I encourage you to always use the **YYYY-MM-DD** format, also known as the ISO 8601 standard.

Computer environments understand this format well, and it is also nicely readable by humans.

---


# Recap

<br>

Remember these three principles for file names:

- Being machine-readable
- Being human-readable
- Playing well with default ordering

Notes:

Adopting these basic principles is recommended as soon as you start working on a project because:

- They are easy to implement now
- Payoffs accumulate projects get more complex

---

# Let's see what you've learned!
