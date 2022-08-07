---
type: slides
---

## Use Conda environments with JupyterLab

<br>

Suppose that you created a new Conda environment called `dstoolbox`, and you want to use it with JupyterLab.

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

From Chapter 6, you might remember that you need to follow two steps if you'd like to use Conda environments within JupyterLab. That is:

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

## Launching a notebook with a specific Conda environment

<img style="border:1px solid black;" src="/module7/jl-launch_dstoolbox.png" width="800"></img>

Notes:

After following the steps in the previous slide, you can see that the `dstoolbox` environment has shown up in JupyterLab's Launcher tab.
Clicking this icon would launch a new Jupyter Notebook with the `dstoolbox` environment.

---

# Let's see what you learned!
