---
title: 'module1_07'
type: slides
---

# Asking effective questions

Notes:
An important part of working on
both collaborative and individual software projects,
is to be able to as effective questions
so that you can get help 

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
is not able to reproduce problem,
or the question is unclear.

---

## Be respectful to volunteers helping you

- People are often volunteering their help
- Be respectful and considerate
- Don't ask unclear questions like this:

> WHY IS THIS CODE NOT WORKING??????

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

## Type out the problem for yourself before asking the question

- Type our a proper question for yourself
- Simplifying and formalizing your issue might even lead you to the solution!

Notes:
When I feel frustrated by a problem
I find it really helpful and calming to sit down
and type out a proper question.
You can start banging out words in the beginning,
but as you slowly adhere to the format of asking properly,
it will become like a meditative practice
which also calms you down.

In addition to your mental wellbeing,
writing down questions properly has another superb quality:
they help you solve your own problems.
The act of formulating a question in either speech or text
helps you uncover what you missed while the problem was a mere thought.

---

## Rubber duck debugging

<!--TODO include rubber duck debugging from google drive presentation -->

<img src="/module1/your-screenshot.png" alt="My VS code screenshot" width="100%"></img>

Notes:
This is so common that it has a name:
"Rubber duck debugging"
allegedly from a software developer who put a rubber duck on their desk
and whenever they had a problem they couldn't solve,
they starting talking to the toy duck,
and often came upon the resolution during while describing the problem.

---

## How to ask effectively

- Make your question easy to understand
- Include a succinct description of the problem
- Include the minimal ode to reproduce it.

<!--TODO Include screenshot of good and bad example? -->

Notes:
In essence,
you want to make your question as easy to understand as possible
and your specific problem as easy to reproduce as possible.

If you just include a screenshot and title your question "Help",
the person helping you has to spend time trying to figure out
what you actually want help with instead of helping,

Instead include a succinct, clear
description of your problem
and the minimal code needed to reproduce it.
Altogether,
this is often called a "Minimal reproducible example".

## Minimal reproducible example

0. Search for other questions similar to yours.
1. Describe the issue clearly in the title and elaborate briefly in the text body.
2. Reduce the code to the minimum required to recreate your error, and paste it as text.
    - If your code includes functions or classes, include their definitions.
    - Create small toy dataset instead of using real data.
    - Use markdown code blocks for proper indentation and syntax highlighting.
3. Describe what you have tried so far,
   what you don't understand or what went wrong,
   including any error messages and their full traceback.

Notes:
In summary,
asking effectively 
and creating an MRE includes completing the tasks
listed in this slide.

There have been great articles written on what goes into an MRE,
and here are some of them that I recommend that you check out:

- https://stackoverflow.com/help/how-to-ask
- https://stackoverflow.com/help/minimal-reproducible-example
- https://community.rstudio.com/t/faq-whats-a-reproducible-example-reprex-and-how-do-i-do-one/5219
- https://reprex.tidyverse.org/ (an R package to help creating MREs from code)

<!--TODO Where to put this detailed description? Mayve in a details tag? -->
The points are elaborated on below:

1. Search for other questions similar to yours.
   Many questions already have an answer,
   and finding it is faster both for you and for others.
   If the answer to an existing question is not good enough,
   improve it by adding the missing info!
2. Write the tile as a summary of your issue.
   Think about what you would want the title to say
   if you were searching the issue list for help.
   Just "Error" or "Question" is not helpful,
   but "How to list content in a folder?" is.
3. Introduce the problem by briefly describing what you want to do.
4. Show what you have tried,
   explain what you expected to happen,
   and what went wrong.
   It is often critical that the person helping you can reproduce the problem,
   so include both the code or command you tried to run and the error message.
      - For coding questions,
        text is preferred over a screenshot since it is easy to copy and paste,
        which facilitates reproducing your problem.
      - Inline code should be surrounded by single backticks for clarity.
        Longer blocks of code with multiple lines should be surrounded by triple backticks.
5. Include versions of any packages you are using,
   and the operating system if relevant,
   e.g. Win10, Python 3.8, pandas 1.0.2.
   On R you can use `devtools::session_info()` to see this information
   (after `install.packages("devtools")`).
   and on Python you can use `sinfo()`
   (after importing: `from sinfo import sinfo`,
   needs to be installed via `pip install sinfo`). 
6. When your problem is solved,
   acknowledge the solution,
   close the issue/ticket/question.
   If you found the solution yourself,
   post it in a comment before closing,
   so that others can find it.

---

## Where to ask?

- Stack Overflow

<!--TODO include course specific forum? -->

Notes:
If you are asking your question on stack overflow
you can use tags to categorize it,
and these can then be used to search for an answer via the syntax `[tag-name]`.

---

# Let’s apply what we learned!

Notes: <br>
