---
type: slides
---

# What is Jupyter?

---

# Project Jupyter

<br>

<img src="/module7/proj_jupyter.png" width="200"></img>

Main goals of [Project Jupyter](https://jupyter.org/):

- Providing an ecosystem for **interactive** data science projects

- Being **language agnostic**: support most popular programming languages

<br>

<p style="color:black; font-size:130%; background-color:floralwhite;">
The name "Jupyter" -> "Julia" + "Python" + "R"
</p>

Notes:

Project Jupyter was born from the IPython project in 2014.

The name "Jupyter" is a combination of "Julia" (popular scientific computing language), "Python", and "R" (popular statistical analysis tool).

---

# JupyterLab

<br>

<img src="/module7/jlab.png" width="400"></img>

<br>

- JupyterLab is a web-based interactive development environment

- You can work with various types of documents in JupyterLab

- The main document type used with JupyterLab is **Jupyter notebook**

Notes:

JupyterLab enables you to work with documents and activities such as Jupyter notebooks, text editors, terminals, and custom components in a flexible, integrated, and extensible manner. 

The main document type that is most commonly used in JupyterLab is Jupyter **notebook**.

Jupyter notebooks enable you to combine narrative with interactive, executable code and its output all in one place. 

We'll talk about Jupyter notebooks in more detail in the upcoming sections.

---

<img style="border:1px solid black;" src="/module7/jl-interface.png" width="900"></img>

Notes:

By now, this interface should look familiar to you!

You have used the terminal and Git extension inside JupyterLab in previous chapters. In this chapter, we will go in more detail about JupyterLab's functionality, and how we can effectively use this environment for interactive development of our data science projects.

---

# Install and run JupyterLab

<br>

- To install JupyterLab, run the following command in a terminal:


```
conda install -c conda-forge jupyterlab
```

When asked to proceed, press `Enter`.

<br>

- When installation is complete, you can run:

```
jupyter lab
```

to launch JupyterLab.

Notes:

Make sure that you are in a conda environment (preferably the `(base)` environment), before attempting to install JupyterLab.

Note that on MachOS and Linux, you can use the standard terminal app to run these commands. On Windows, you need to open "Anaconda Prompt" (the equivalent the terminal in Windows) to run these commands. Remember that "Anaconda Prompt" should be available on your system, as a part of your Miniconda installation.

---

After running `jupyter lab`, a browser window should open with JupyterLab's interface:

<img style="border:1px solid black;" src="/module7/jl-launch.png" width="750"></img>

Notes:

By default, you're going to see the "Launcher" tab, which allows you to create various new working environments.

---

# Use conda environments with JupyterLab

<br>

Suppose that you created a new conda environment called `dstoolbox`, and you want to use it with JupyterLab.

<br>

To access your `dstoolbox` environment from JupyterLab, you need to:

<br>

- Install `nb_conda_kernels` in your base environment by running
```
conda install nb_conda_kernels
```

<br>

- Install `ipykernel` in your `dstoolbox` environment by running
```
conda install ipykernel
```

Notes:

From Chapter 6, you might remember that you need to follow two steps if you'd like to use conda environments within JupyterLab. That is:

- Install `nb_conda_kernels` in your base environment by running
```
conda install nb_conda_kernels
```

- Install `ipykernel` in your `dstoolbox` environment by running
```
conda install ipykernel
```

Once you've done that, you'll be able to see your desired environment in the Launcher tab when you run JupyterLab, and also access its kernel in notebooks (we'll learn about this later!).

---

<img style="border:1px solid black;" src="/module7/jl-launch_dstoolbox.png" width="800"></img>

Notes:

I have followed the steps that I mentioned earlier, and you can see that the `dstoolbox` environment has shown up in my JupyterLab's Launcher tab.

---

# Let's see what you learned!
