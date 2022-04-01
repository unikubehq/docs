# Installation

- [Linux](#linux)
- [Mac](#mac)
- [Windows](#windows)
- [Installation from Source](#installation-from-source)

## Linux

For Linux, we recommend installing the Unikube CLI via pip.

### 1. Install pip

If you haven't already set up pip, please follow their [installation instructions](https://pip.pypa.io/en/stable/installation/#supported-methods).

### 2. Install Unikube CLI

```shell
pip install unikube
```

To install the latest pre-release use the `--pre` flag:

```shell
pip install --upgrade unikube --pre
```

The Unikube cli is developed for and tested with Python 3.8 and 3.9.

::: details Note
Python 2 is not supported. Therefore, depending on your local python installation, you may need to use `pip3`.
:::

## Mac

For Mac, we recommend installing the Unikube CLI via Homebrew. However, you can also use pip as described below:

:::: tabs type:board-card

::: tab Homebrew

### 1. Install Homebrew

If you haven't already set up Homebrew, please follow their [installation instructions](https://docs.brew.sh/Installation).

### 2. Install Unikube CLI

```shell
brew tap unikubehq/tooling
brew install unikubehq/tooling/unikube
```

To install the latest pre-release use the `--HEAD` flag:

```shell
brew install --HEAD unikubehq/tooling/unikube
```

:::

::: tab pip

### 1. Install pip

If you haven't already set up pip, please follow their [installation instructions](https://pip.pypa.io/en/stable/installation/#supported-methods).

### 2. Install Unikube CLI

```shell
pip install unikube
```

To install the latest pre-release use the `--pre` flag:

```shell
pip install --upgrade unikube --pre
```

:::

::::

## Windows

WIP

## Installation from Source

You can download the source code as zip or tar archive from the
[Github release page](https://github.com/unikubehq/cli/releases).

## Version

After the installation is complete, you can verify your installation and check the installed version. Open up a new shell and run:

```shell
unikube version
```

Now you can get started by logging in into your account. You don’t have an Unikube account? Register at [unikube.io](https://unikube.io/)!
Or use these test credentials (without creating your own account) to try it out:
> ```
> User: sandbox@unikube.io Password: #4kEMU8aPm
> ```

