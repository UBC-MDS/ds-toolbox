---
type: slides
---

# File Names: Best Practices

---

# What works, what doesn’t?


No:

```
myabstract.docx
Joe’s Filenames Use Spaces and Punctuation.xlsx
figure 1.png
fig 2.png
JW7d^(2sl@deletethisandyourcareerisoverWx2*.txt
```

Yes:

```
2014-06-08_abstract-for-sla.docx
joes-filenames-are-getting-better.xlsx
fig01_talk-scatterplot-length-vs-interest.png
fig02_talk-histogram-attendance.png
1986-01-28_raw-data-from-challenger-o-rings.txt
```

---

# Three principles for file names

1. Machine readable
2. Human readable
3. Plays well with default ordering

<br>

Awesome file names:

<img src="/module6/awesome_names.png" width="80%"></img>

Notes:

---

# Machine-readable file names

- Regular expression and globbing friendly
  - Avoid spaces, punctuation, accented characters, case sensitivity
- Easy to compute on
  - Deliberate use of delimiters

<br>

# Globbing

<img src="/module6/plasmid_names.png" width="80%"></img>

Notes:

---

**Example:** Globbing to narrow file listing

<img src="/module6/plasmid_glob.png" width="80%"></img>

Notes:

---

**Example:** Using MacOS Finder search

<img src="/module6/plasmid_mac_os_search.png" width="80%"></img>

Notes:

---

**Example:** Using regex in R

<img src="/module6/plasmid_regex.png" width="80%"></img>

Notes:

---

# Punctuation

Deliberate use of `-` and `_` allows recovery of meta-data from the filenames:

- `_` underscore used to delimit units of meta-data we want later
- `-` hyphen used to delimit words so your eyes don’t bleed

<img src="/module6/plasmid_delimiters.png" width="80%"></img>

Notes:

---


# Recap

Machine-readable file names are:

- Easy to search for files later
- Easy to narrow file lists based on names
- Easy to extract info from file names, e.g. by splitting

Even if you're new to regular expressions and globbing, be kind to yourself and avoid
- Spaces in file names
- Punctuation
- Accented characters
- Different files named `foo` and `Foo`

Notes:

---

# Human-readable file names

- Name contains info on content
- Connects to the concept of a slug from semantic URLs

**Example:**

Which set of file(name)s do you want to see at 3 a.m. before a deadline?

<img src="/module6/human_readable_not_options.png" width="80%"></img>

Notes:

---

# File names that play well with default

- Put something numeric first
- Use the ISO 8601 standard for dates
- Left pad other numbers with zeros

Let's see some examples.

Notes:

---

Logical order:

<img src="/module6/logical_order.png" width="80%"></img>

Notes:

---

Chronological order:

<img src="/module6/chronological_order.png" width="80%"></img>

Always use the ISO 8601 standard for dates: **YYYY-MM-DD**

Notes:

---

Left-pad other numbers with zeros:

<img src="/module6/left_pad.png" width="80%"></img>

If you don’t left pad, you get this:

```
10_final-figs-for-publication.R
1_data-cleaning.R
2_fit-model.R
```

Notes:

---

# Recap

Three principles for file names:

- Machine readable
- Human readable
- Plays well with default ordering

Pros:

- Easy to implement now
- Payoffs accumulate as your skills evolve and projects get more complex

Notes:

---

# Let's see what you've learned!
