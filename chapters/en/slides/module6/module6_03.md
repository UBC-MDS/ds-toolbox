---
type: slides
---

# Project Organization

Note:

---

<br>

- In a data science project, it's easy to focus only on the final product
- The code and data that produce the end result are as important
- It's hard to change your mind once you're halfway there, so **it's best to start with a standard project structure** from the very beginning

<br>

**Benefits of a standard project structure:**

- Well-organized code is self documenting!
- A new collaborator would immediately know where to look for specific things
- Your future self would find it much easier to reproduce your own results

Note:

In the first part of this module, we talked about how using certain file name conventions makes finding and processing relevant information easy.

When it comes to organizing an entire project, it's even more important to structure the files and folders in a logical, commonly accepted way.

---

**Example of a good project structure:**

```
project-name/
├── .gitignore
├── README.md
├── environment.yaml
├── LICENSE.md
├── data/              *.csv        
│   ├── processed/
│   └── raw/
├── docs/              *.md
├── reports/           *.html, *.pdf, *.tex
├── notebooks/         *.ipynb
└── src/               *.py
    ├── __init__.py
    │
    ├── data
    │   └── make_dataset.py
    │
    ├── models
    │   ├── predict_model.py
    │   └── train_model.py
    │
    └── visualization
        └── visualize.py
```

Note:

In this slide, you can see an example of what a well-organized project structure looks like.

Note that each category of files has its own special folder.

When I look at this repo, I would immediately know where to look to find the data or where reports are kept, even if I haven never seen this project repo before.

When most people agree on using more or less the same structure for organizing their projects, good things will happen.

It will be much easier for people to collaborate with each other. It will also be easier for yourself to manage your project as it grows in complexity.

---

Here are some files/folders in a standard project structure:

<br>

- `.gitignore`: List of files not to commit to your repo
- `README.md`: General explanations about the project
- `environment.yaml`: Information about packages/libraries needed to reproduce the computational environment
- `data/`: This is where the raw and processed data lives. Since your data usually doesn't need version control, you can add this folder in `.gitignore`.
- `docs/`: Contains documentation about the project, which can sometimes be automatically generated 
- `notebooks/`: This is where Jupyter notebook files go, which are used for exploration and communication.
- `src/`: Code files are usually stored in this folder, which can itself have subfolders as needed.

Note:

Here, I just want you to tell you about the role of each file and folder in an example of a standard project repo.

Note that the naming of particular folders might be slightly different between different projects.

For example, one might choose to call their code-containing folder `code` or even `script`. But it is still easy to see that such a folder hosts programming codes for the project, and not data or reports.

---

# Let's see what you've learned!
