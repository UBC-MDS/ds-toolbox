---
title: 'module1_03'
type: slides
---

# Asking Effective Questions

Notes:
Before we dive deeper into the details of each software
in the data science toolbox,
we first want to emphasize
an important skill when learning about any topic:
"How to ask effective questions when you are stuck?"

This is important both when you seek help online,
or when working collaboratively with a team.

---

## Why even bother?

- You will get help faster
- Others will get help faster

Notes:
Asking questions effectively means that the person helping you
will be able to answer your question better and quicker.
Being able to answer a question quicker means more time to help others,
including your future self.

When questions require clarification,
fewer people will be helped overall.
Sometimes this in unavoidable because the question is complex,
but all too often it if because the person trying to help
is not given enough information to reproduce and troubleshoot the problem,
or because the question is unclear.

---

## Be respectful to volunteers helping you

- People are often volunteering their help
- Be respectful and considerate
- Don't ask unclear questions like this:

    *WHY IS THIS CODE NOT WORKING??????*

Notes:
When you are asking for help online,
e.g. on StackOverflow or on GitHub,
remember that you are often receiving help from people
who are volunteering their time.
So please make it as easy as possible for them to help you.

You might be frustrated by a problem
to the point where you just want to ask something like.

> WHY IS THIS CODE NOT WORKING??????

Don't do this.  
No one will help you.  
You will get more frustrated.  

---

## How to ask effectively

- Make your question easy to understand
- Include a succinct description of the problem
- Mention what you were expecting to happen and what went wrong
- Include the minimal code to reproduce the problem

Notes:
This slide outlines the high level parts
that you want to include in an effective question.
In essence,
you want to make your question as easy to understand as possible
and your specific problem as easy to reproduce as possible.

If you just include a screenshot and title your question "Help",
the person helping you has to spend time trying to figure out
what you want help with instead of helping with the actual problem.

To avoid this,
include a succinct and clear
description of your problem
together with the minimal code needed to reproduce it.
Altogether,
this is often called a "Minimal Reproducible Example" (or MRE for short),
which we will learn more about on the next page.

---

## An effective question with a Minimal Reproducible Example

1. Search for other questions similar to yours.
2. Describe the issue clearly in the title and elaborate briefly in the text body.
3. Reduce the code to the minimum required to recreate your error, and paste it as text.
    - If your code includes functions or classes, include their definitions.
    - Create small toy dataset instead of using real data.
    - Use markdown code blocks for proper indentation and syntax highlighting.
4. Describe what you have tried so far,
   what you don't understand or what went wrong,
   including any error messages and their full traceback.

Notes:
This slide outlines the detailed steps of how to ask an effective question,
starting with searching for other similar questions
and also listing the key components of creating an MRE.

In essence, you want the person helping you
to be able to copy your code
and run it on their machine to reproduce the problem right away,
so that they can focus on figuring out what has gone wrong.

If you are interested on more in-depth articles
on how to create effective MRE's,
there have been several great articles written
on what goes into an MRE.
Here are some of the ones we recommend you to check out:

- https://stackoverflow.com/help/how-to-ask
- https://stackoverflow.com/help/minimal-reproducible-example
- https://community.rstudio.com/t/faq-whats-a-reproducible-example-reprex-and-how-do-i-do-one/5219
- https://reprex.tidyverse.org/ (an R package to help creating MREs from code)

---

## Type out the problem for yourself before asking the question

- Type our a proper question for yourself
- Simplifying and formalizing your issue might even lead you to the solution!

Notes:
It is easy to get frustrated by a problem,
especially if you have been stuck at it for a while.
When I feel this frustration myself
I find it helpful and calming
to put precise words on what the issue is.

You can start banging out words in the beginning,
but as you slowly adhere to the format of asking properly,
it will become like a meditative practice
which calms you down
and lays the foundation for posting your question online.

In addition to your mental well-being,
writing down questions properly has another superb quality:
they help you solve your own problems.
The act of formalizing a question in either speech or text
helps you slow down
and uncover what you missed while the problem was a mere thought;
it is easy to come to conclusions to quickly
in our own heads and disregard possible solutions to quickly.
We will look closer at this phenomena in the next slide.

---

## Rubber duck debugging

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg" alt="Rubber duck debugging" width="300px"></img>

[Image from Tim Morris - Wikimedia Common](https://commons.wikimedia.org/wiki/File:Rubber_duck_assisting_with_debugging.jpg)

Notes:
Realizing the solution to your problem as you are verbalizing it
is so common that it has a name:
"Rubber duck debugging".
Allegedly,
a software developer put a rubber duck on their desk
and whenever they had a problem they couldn't solve in their head,
they starting talking to the toy duck,
and often came upon the resolution while describing the problem
for their toy duck.

---

## Where to ask?

<img src="/module1/so-logo.svg" alt="Stack Overflow logo" width="400px"></img>
<img src="/module1/cv-logo.svg" alt="Stack Overflow logo" width="400px"></img>


- https://stackoverflow.com/
- https://stats.stackexchange.com/

Notes:
When you have written down an effective question
without finding the solution yourself in the process,
then it is time to reach out to the data science community and ask for help.
One of the most common places
to ask for help with programming questions is Stack Overflow
For data science questions,
its sister site Cross Validated.
Thousands of volunteers are answering questions on these sites everyday

If you are asking your question on either of these sites
a tip is to use tags to categorize your question.
These can then be used to search for an answer via the syntax `[tag-name]`,
and community members can choose to get notifications
when a new question with a certain tag is asked.

Remember, try to make your questions as easy to understand as possible!

---

# Let’s apply what we learned!

Notes: <br>
