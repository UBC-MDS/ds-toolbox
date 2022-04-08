---
type: slides
---

# Virtual Environments

---

# Why use virtual environments?

<br>

- More often than not, you work on multiple projects on your computer, and you need the computational environments to be isolated from each other.
- Isolated environments are also a first step towards reproducibility. You need to have the right versions of packages to ensure that everything works great together.

<br>

A virtual environments accomplishes exactly this:

<b><p style="margin-left:10%; color:darkblue;">It lets you have multiple versions of packages on the same computer without causing conflict.</p></b>

Notes:

---

# Conda

Conda is an open source **package** and **environment** management system for any programming language; though it is the most popular in the python community.

<br>

# Managing Conda

Let’s first start by checking if conda is installed, by running the following command in Bash:

```
conda --version
```

<br>

- To see which conda commands are available, type `conda --help`
- To see the full documentation for any command of these commands, type the command followed by `--help`. For example, to learn about the conda update command:

```
conda update --help
```

Notes:

---

# Managing environments

<br>

**What is a conda environment and why is it so useful?**

Using `conda`, you can create an isolated python environment for your project.

An environment is a set of packages that can be used in one or multiple projects.

<br>

There are several major benefits of using environments:

- Guarantee reproducibility of the computing environment
- Use and manage different versions of the same package
- Create isolated environment for testing and developing new packages

The default environment is the `base` environment.

Notes:

- You can guarantee that someone else can reproduce your project by specifying which package versions your used and making it easy for others to install the same versions.
- If two of your projects relies on different versions of the same package, you can install these in different environments.
- If you want to play around with a new package, you don’t have to change the packages you use for your data analysis and risk messing something up.
- When you develop your own packages, it is essential to use environments, since you want to to make sure you know exactly which packages yours depend on, so that it runs on other systems than your own.

The default environment is the `base` environment, which contains only the essential packages from Miniconda. Your shell’s prompt string is prefixed with `(base)` when you are inside this environment.

---

# Managing environments

<br>

There are two ways of creating a conda environment:

1. Manual specifications of packages
2. An environment file in YAML format (`environment.yaml`)

Notes:

---

# Creating environment manually

<br>

- `conda create -n test_env` creates a new environment called `test_env`.
- At the time of creation, we can also specify what packages to install in the new environment and the channel from which to download the packages:

```
conda create -n test_env -c conda-forge python=3.9 jupyterlab pandas=1.3.2
```

<br>

- To activate/deactivate the new environment:

```
conda activate test_env
conda deactivate
```

<br>

- To see all environments:

```
conda env list
```


Notes:

We can create `test_env` conda environment by typing `conda -n test_env`. However, it is often useful to specify more than just the name of the environment, e.g. the channel from which to install packages, the Python version, and a list of packages to install into the new env. In the example below, I am creating the `test_env` environment that uses python 3.7 and a list of libraries: `jupyterlab` and `pandas`.

conda will solve any dependencies between the packages like before and create a new environment with those packages. Usually, we don’t need to specify the channel, but in this case I want to get the very latest version of these packages, and they are made available in `conda-forge` before they reach the default conda channel.

To activate this new environment, you can type `conda activate test_env` (and `conda deactivate` for deactivating). Since you will do this often, we created an alias shortcut ca that you can use to activate environments. To know the current environment that you’re in you can look at the prefix of the prompt string in your shell which now changed to (test_env). And to see all your environments, you can type conda env list.

---

# Sharing Environments With Others

<br>

- Environments can shared by exporting using `conda` to an environment file:

```
conda env export -f environment.yaml
```

which list each package and its version in the format `package=version=build`.

- If you look inside `environment.yaml`, you'll find a lot more packages than just `jupyterlab` and `pandas`.
- It is the **default** behavior to list the dependencies and their exact versions and builds too.
- If you want to only list the packages you explicitly installed, you should use the `--from-history` flag:

```
conda env export --from-history -f environment.yaml
```

This time, the environment file will look like this:

```yaml
name: test_env
channels:
  - conda-forge
  - defaults
dependencies:
  - conda
  - python=3.9
  - pandas=1.3.2
  - jupyterlab
```

Notes:

To share an environment, you can export your conda environment to an environment file, which will list each package and its version in the format `package=version=build`.

The environment file is named `environment.yaml` here, but it could be called anything. This is the conventional name and using it makes it easy for others to recognize that this is a conda environment file. Also, the extension can be either `.yaml` or `.yml`.

Remember that `.yaml` files are plain text, so you can use a text editor such as VS Code to open them. If you do, you will realize that this environment file has A LOT more packages than `jupyterlab` and `pandas`. This is because the default behavior is to also list the dependencies that were installed together with these packages, e.g. `numpy`. This is good in the sense that it gives an exact copy of everything in your environment.

However, some dependencies might differ between operating systems, so this file might not work with someone from a different OS. To remedy this, you can append the `--from-history` flag, which look at the history of the packages you explicitly told conda to install and only list those in the export. The required dependencies will then be handled in an OS-specific manner during the installation, which guarantees that they will work across OSes. This environment.yaml file would be much shorter this time.

Importantly, this will not include the package version unless you included it when you installed with the `package==version` syntax. For an environment to be reproducible, you NEED to add the version string manually.

---

# Creating environment from an environment file

To create a conda environment from an `environment.yaml` file, you can use the following command:

```
conda env create --file environment.yaml
```

<br>

# Cloning an environment

We can clone an environment with a different name using the following command:

```
conda create --name live_env --clone test_env
```

In this example, `test_env` is cloned to create `live_env`.

<br>

# Deleting an environment

If we are only testing out our environment, we can delete `live_env` to remove some clutter. Make sure that `live_env` is not currently active:

```
conda env remove -n live_env
```

Notes:

---

# Conda environments in Jupyter Lab

<br>

- By default, Jupyter Lab only sees the conda environment where it is installed.
- But no need to install Jupyter Lab in each and every new environment!
- There is a package called `nb_conda_kernels` that makes it possible to have a single installation of Jupyter Lab, and access all other conda environments.

<br>

In order to make Jupyter Lab detect a new environment:

- `nb_conda_kernels` needs to be installed once in the conda environment where JupyterLab is installed (usually the `base` environment).
- A package called `ipykernel` needs to be installed in each new environment to make it visible to Jupyter Lab.

Notes:


---

# Listing installed packages

<br>

Return the list of installed packages in the currently active environment using the following command:

```
conda list
```

```
# packages in environment at //miniconda/envs/test_env:
#
Using Anaconda Cloud api site https://api.anaconda.org
blas                      1.1                    openblas    conda-forge
ca-certificates           2016.9.26                     0    conda-forge
certifi                   2016.9.26                py27_0    conda-forge
cycler                    0.10.0                   py27_0    conda-forge
freetype                  2.6.3                         1    conda-forge
functools32               3.2.3.2                  py27_1    conda-forge
libgfortran               3.0.0                         0    conda-forge
```

The list will include versions of each package, the specific build, and the channel that the package was downloaded from.

Notes:

---

# Searching packages

You can search to see if a particular package can be installed using `conda` or `pypi` the following command. For example, here we look for a package named `rasterio`:

```
conda search rasterio
```

```
Using Anaconda Cloud api site https://api.anaconda.org
Run 'anaconda show <USER/PACKAGE>' to get more details:
Packages:
     Name                      |  Version | Package Types   | Platforms      
     ------------------------- |   ------ | --------------- | ---------------
     IOOS/rasterio             |    1.0a2 | conda           | linux-64, win-32, win-64, osx-64
     Terradue/rasterio         |   0.32.0 | conda           | linux-64       
                                          : Fast and direct raster I/O for use with Numpy and SciPy
     anaconda/rasterio         |   0.36.0 | conda           | linux-64, win-32, win-64, linux-32, osx-64
     conda-forge/rasterio      |    1.0a2 | conda           | linux-64, win-32, win-64, osx-64
                                          : Rasterio reads and writes geospatial raster datasets
     dharhas/rasterio          |   0.23.0 | conda           | win-64         
                                          : Rasterio reads and writes geospatial raster datasets.
     erdc/rasterio             |   0.23.0 | conda           | win-64         
                                          : Rasterio reads and writes geospatial raster datasets.
     jesserobertson/rasterio   |   0.23.0 | conda           | linux-64, linux-32, osx-64
     jhamman/rasterio_to_xarray | 2016.03.16-1558 | ipynb           |                
                                          : IPython notebook
     krisvanneste/rasterio     |   0.26.0 | conda           | win-64         
     ocefpaf/rasterio          |   0.19.1 | conda           | linux-64, osx-64
     omgarcia/rasterio         |   0.25.0 | conda           | linux-64       
     pypi/rasterio             |   0.13.2 | pypi            |                
                                          : Fast and direct raster I/O for Python programmers who use Numpy
     robintw/rasterio          |   0.35.1 | conda           | osx-64         
                                          : Rasterio reads and writes geospatial raster datasets
     sgillies/rasterio         |     0.15 | conda           | osx-64         
     ztessler/rasterio         |   0.31.0 | conda           | osx-64         
                                          : Fast and direct raster I/O for use with Numpy and SciPy
Found 15 packages
```

Notes:

The anaconda cloud page for `rasterio` will show how to install the package, compatible OS, individual files for that package, etc.

---

# Installing packages

<br>

- The first column of the output of `conda search` shows the `channel/package-name`.
- You can use this information to install a desired package in the active environment.
- For example, to install version 0.35 of the package `rasterio` from the `conda-forge` channel, you can run:

```
conda install -c conda-forge rasterio=0.35
```

<br>

- If you want the latest version, simply avoid providing a version, e.g. run `conda install -c conda-forge rasterio`.
- If this package depends on other packages to function, conda will automatically install its dependencies.
- If you have a few preferred channels, you can pre-configure these so that you don’t need to explicitly declare the channel every time you want to install a package:

```
conda config --add channels conda-forge
```

---

# Removing a package

<br>

- Suppose you decided that you no longer need the package `rasterio`.
- To remove this package from the currently active environment, you can run:

```
conda remove -n test_env rasterio
```

<br>

- Note that this will remove `rasterio` and its dependencies, unless:
  - a dependency was installed explicitly at an earlier point in time or,
  - it is required be another package.

Notes:

---

# Let's see what you've learned!
