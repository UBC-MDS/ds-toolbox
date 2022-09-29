---
type: slides
---

# Virtual Environments

Notes:

In this slide deck, we will learn how we can work with multiple version of the same package
in different virtual environments.

---

## Why use virtual environments?

<br>

- More often than not, you work on multiple projects on your computer.
    - That means you need the projects' computational environments to be isolated from each other.

<br>

- Isolated environments are also a first step towards reproducibility.
    - You need to have the right versions of packages to ensure that everything works great together.

<br>

Virtual environments accomplishes exactly this:

<br>

<b><p style="margin-left:10%; color:darkblue;">
It lets you have multiple versions of packages on the same computer without causing conflict.
</p></b>

Notes:

Just like we don't store files and folders of different projects in the same place,
we also often don't want different projects to be run in the same computing environment.

For example,
what if we need to run the code in a project with `pandas 1.1`,
and another project with `pandas 1.4`?

Well, we probably shouldn't uninstall and reinstall different versions of `pandas` each time we switch between the two projects.

What can we do then? The solution is to use different virtual computing environments!
Being able to simultaneously run different versions of the same packages is highly useful when working on multiple projects on the same computer.

Using virtual environments is also critical for reproducibility. Why?

The reason is that we want to run each project using the same version of packages with which the project is developed. Failing to do this could result in many problems. For example, a newer version of a package might introduce breaking changes that could prevent our project from running properly. Also, an older version of a package might not yet have the required functionalities used in a project.

---

## Conda

<br>

<img src="/module6/conda-logo.png" width="400px"></img>

<br>

- Conda is an open source **package** and **environment** management system for any programming language

- It is the most popular in the Python community

Notes:

Alright, I hope you're convinced that using virtual environments is a terrific idea. So, how can we create and use virtual environments?

There are several tools to do this, including `virtualenv`, `venv`, `pipenv` and `conda`.

Here we use Conda, which is an open source **package** and **environment** management system for any programming language; although it's most popular in the Python community.

---

## Managing Conda environments

**What is a Conda environment and why is it so useful?**

- Conda environment: a set of packages that can be used in one or multiple projects

- Create an isolated Python environment for your project

<br>

Benefits of using environments:

- **Reproducibility**
- **Easily manage different versions**
- **Create isolated environments**

Notes:

**What is a Conda environment and why is it so useful to use?**

- A Conda environment is a set of packages that can be used in one or multiple projects.

- Using Conda environments, you can create an isolated Python environment for your project.

<br>

There are several major benefits to using environments:

- **Reproducibility**: You can guarantee that someone else can reproduce your project by specifying which package versions you used, making it easy for others to install the same versions.

- **Easily manage different versions**: If two of your projects rely on different versions of the same package, you can install these in different environments.

- **Create isolated environments**: If you want to play around with a new package, you don’t have to change the packages you use for your data analysis and risk messing something up.

---

## Creating a Conda environment

<br>

There are two ways of setting up a Conda environment:

1. Creating the environment and installing packages manually

2. Creating the environment using a file in `.yaml` format

Notes:

There are two ways of creating a Conda environment:

1. Creating an environment and then installing packages manually
   - This can be done either at the time of environment creation or after creating the environment

2. Creating the environment using a file in `.yaml` format (e.g. `environment.yaml`)

---

## Creating environments manually

<br>

- `conda create -n test_env` creates a new environment called `test_env`

<br>

- At the time of creation, we can also specify:

  - what packages to install in the new environment and
  - the channel from which to download the packages

<br>

```
conda create -n test_env -c conda-forge python=3.9 jupyterlab pandas=1.3.2
```

Notes:

We can create `test_env` Conda environment by running `conda -n test_env`. When you see the prompt `Proceed ([y]/n)?`, press `Enter` to continue.

It is also often useful to specify more than just the name of the environment, e.g. the channel from which to install packages, the Python version, and a list of packages to install into the new env.

In the example below, I am creating the `test_env` environment that uses:

- Python 3.9,
- the right (usually the latest) version of `jupyterlab`,
- and `pandas` version 1.3.2

Conda will solve any dependencies between the packages and will create a new environment with those packages.

Usually we don’t need to specify the channel. But in this case, let's suppose that I want to get the latest version of these packages I can use the flag `-c` together with the channel name `conda-forge` in order to install packages from this particular channel.

---

## Activating a Conda environment

<br>

- The default Conda environment is called `base`.
- To activate a new environment, run `conda activate` followed by the name of the environment:

<br>

<img style="border:1px solid black;" src="/module6/conda-activate.png" width="600px"></img>

Noticed how your shell prompt changed?

<br>

- To see all environments, run `conda env list`:

<br>

<img style="border:1px solid black;" src="/module6/conda-env-list.png" width="700px"></img>

Notes:
The default Conda environment is the `base` environment,
which contains only the essential packages from Miniconda.
Your shell’s prompt string is prefixed with `(base)` when you are inside this environment.

To activate the new environment we just created, you can type `conda activate test_env` (and `conda deactivate` for deactivating).

Note how the prefix of the prompt string in your shell changes from `(base)` to `(test_env)`, which helps to show you which environment is active.

To see all your environments, you can type `conda env list`. You can see that I have a few environments for my work other than `(base)`.

Note how the **currently active** environment—`(test_env)` in this case—is denoted with an `*`.

---

## Sharing environments with others

<br>

Environments can be shared by exporting to an environment file:

```
conda env export -f environment.yaml
```

which list each package and its version in the format `package=version=build`.

<br>

Let's look inside `environment.yaml`:

<img style="border:1px solid black;" src="/module6/env-yaml-full.png" width="600px"></img>

Notes:

To share an environment, you can export your Conda environment to an environment file, which will list all packages and their versions in this format: `package=version=build`.

The environment file is named `environment.yaml` here, but it could be called anything we want.
This is just a conventional name, and using it makes it easy for others to recognize that this is a Conda environment file.
Also, the extension can be either `.yaml` or `.yml`. Remember that `.yaml` files are plain text files, so you can use a text editor such as VS Code to open them.

If you open the environment file, you will realize that it contains many more packages than just `jupyterlab` and `pandas`.
This is because the **default** behavior is to also list the dependencies that were installed together with these packages. For example, `pandas` depends on `numpy` and `numpy` will be installed along with `pandas`, even if we don't explicitly add `numpy` to our installation command.
This is good in the sense that an exact copy of all packages in in your environment will be listed.

---

## Sharing environments with others

If you want to only list the packages you explicitly installed, you should use the `--from-history` flag:

```
conda env export --from-history -f environment.yaml
```

<br>

This time, the environment file will look like this:

<img style="border:1px solid black;" src="/module6/env-yaml.png" width="300px"></img>

Notes:

Sometimes package dependencies might differ between operating systems, so exporting an environment file with exact package specifications might not work for someone on a different operating system.
To remedy this, you can append the `--from-history` flag, which looks at the history of the packages you explicitly told Conda to install. This tells Conda to inclue only explicitly installed packages in the export.

The required dependencies will then be handled in an OS-specific manner during installation, which guarantees that they will work across different OSes.  The `environment.yaml` file will be much shorter as a result.

Importantly, this method will not include package versions unless you've done the installation with the `package=version` syntax.
For an environment to be reproducible, you need to explicitly tell Conda which specific versions of packages you need to be installed.

---

## Creating environment from an environment file

```
conda env create --file environment.yaml
```

<br>

## Cloning an environment

```
conda create --name live_env --clone test_env
```

<br>

## Deleting an environment

```
conda env remove -n live_env
```

Notes:

To create a Conda environment from an `environment.yaml` file, you can use the following command:

```
conda env create --file environment.yaml
```

<br>

We can clone an environment with a different name using the following command:

```
conda create --name live_env --clone test_env
```

In this example, `test_env` is cloned to create `live_env`.

<br>

If our goal was only to try out the newly created environment, we can delete `live_env` after we're done in order to remove some clutter. To remove `live_env`, make sure that it is not currently active, and the run the following command:

```
conda env remove -n live_env
```

---

## Use Conda environments with JupyterLab

By default, JupyterLab only sees the Conda environment where it is installed.

<br>

Follow these steps to access your Conda environments in JupyterLab:

<br>

1. Install `nb_conda_kernels` in your `base` environment

```
conda install nb_conda_kernels
```

<br>

2. Install `ipykernel` in your `dstoolbox` environment

```
conda install ipykernel
```

Notes:

- By default, JupyterLab only sees the Conda environment where it is installed.

- But there is no need to install JupyterLab in each and every new environment!

- Instead we can use a package called `nb_conda_kernels`
  - This makes it possible to have a single installation of JupyterLab, and access all other Conda environments.

<br>

Suppose that you created a new Conda environment called `dstoolbox`. To access your `dstoolbox` environment from JupyterLab, you need to:

1. Install `nb_conda_kernels` in your `base` environment by running

```
conda install nb_conda_kernels
```

2. Install `ipykernel` in your `dstoolbox` environment by running

```
conda install ipykernel
```

Once you've done that, you'll be able to see your desired environment in the Launcher tab when you run JupyterLab, and also access its kernel in a notebook (we'll learn about this later).

---

## Launching a notebook with a specific Conda environment

<img style="border:1px solid black;" src="/module7/jl-launch_dstoolbox.png" width="800">

Notes:

After following the steps in the previous slide, you can see that the `dstoolbox` environment has shown up in JupyterLab's Launcher tab.
Clicking this icon would launch a new Jupyter Notebook with the `dstoolbox` environment.

In the slide, we can see that after following these steps, launching JupyterLab from the `(base)` environment still shows all available Conda environments, including a newly created environment called `(test_env)`, which is marked in the slide.

---

## Listing installed packages

```
conda list
```

```out
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

Notes:

We can get the list of installed packages in the currently active environment using the following command:

```
conda list
```

<br>

The list will include

- versions of installed packages
- the specific build, and
- the channel that the package was downloaded from.

---

## Searching packages

```
conda search rasterio
```

```out
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
     krisvanneste/rasterio     |   0.26.0 | conda           | win-64         
     ocefpaf/rasterio          |   0.19.1 | conda           | linux-64, osx-64
     omgarcia/rasterio         |   0.25.0 | conda           | linux-64       
     pypi/rasterio             |   0.13.2 | pypi            |                
                                          : Fast and direct raster I/O for Python programmers who use Numpy
Found 15 packages
```

Notes:

You can also search to see if a particular package can be installed using `conda` or `pypi` using the following command. For example, here we look for a package named `rasterio`:

```
conda search rasterio
```

The Anaconda cloud page for `rasterio` will show how to install the package, compatible OS, individual files for that package, etc.

---

## Installing packages

<br>

- The first column of the output of `conda search` shows the `channel/package-name`.

<br>

- You can use this information to install a desired package in the active environment.

<br>

Install version `0.35` of the package `rasterio` from the `conda-forge` channel using:

```
conda install -c conda-forge rasterio=0.35
```

<br>

Add preferred channels to Conda using:

```
conda config --add channels conda-forge
```

Notes:

- The first column of the output of `conda search` shows `channel/package-name`
- You can use this information to install a desired package in the active environment
- For example, to install version 0.35 of the package `rasterio` from the `conda-forge` channel, you can run:

```
conda install -c conda-forge rasterio=0.35
```

<br>

- If you want the latest version, simply avoid providing the version, i.e. simply run `conda install -c conda-forge rasterio`.

- If this package depends on other packages to function, **Conda will automatically install its dependencies**.

- If you have a few preferred channels, you can make them known to Conda so that you don’t need to explicitly declare the channel every time you want to install a package. This is done using the this command:

```
conda config --add channels conda-forge
```

---

## Removing a package

<br>

Remove `rasterio` package from `test_env` using:

```
conda remove -n test_env rasterio
```

Notes:

Suppose that you decided that you no longer need the package `rasterio`. To remove this package from the currently active environment, you can run:

```
conda remove -n test_env rasterio
```

<br>

- Note that this will remove `rasterio` and its dependencies, unless:

  - a dependency was installed explicitly at an earlier point in time or,

  - a dependency is required by another package.

---

## Learning more about Conda

<br>

- Available Conda commands:

<img style="border:1px solid black" src="/module6/conda-help.png" width="600px"/>

<br>

- Full documentation of a command:

```
conda update --help
```

<br>

- Conda version:

<img style="border:1px solid black" src="/module6/conda-version.png" width="300px"/>

Notes:

- To see which Conda commands are available, you can run `conda --help`

<img style="border:1px solid black" src="/module6/conda-help.png" width="700px"/>

<br>

- To see the full documentation of a command, you can type the command followed by `--help`:

```
conda update --help
```

- The Conda version you have installed can be seen by running `conda --version` in Bash:

<img style="border:1px solid black" src="/module6/conda-version.png" width="300px"/>

---

# Let's apply what we learned!
