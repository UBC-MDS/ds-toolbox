---
type: slides
---

# Project Organization

Note:

---

A good project structure looks similar to this:

```
project/          
├── data/              *.csv        
│   ├── processed/
│   └── raw/     
├── reports/           *.ipynb *.Rmd
├── src/               *.py *.R
├── doc/               *.md
├── README.md
└── environment.yaml (or renv.lock)
```

This can differ slightly between projects and for R the `src` directory is often just called `R/`, whereas for Python is has the same name as the project (`project`). You will learn more about project hierarchy when making packages.

Note:

---

# Let's see what you've learned!
