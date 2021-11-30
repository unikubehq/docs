# Installation

[[toc]]

## Manual installation

You can download the source code as zip or tar archive from the
[Github release page](https://github.com/unikubehq/cli/releases).

## Installation via pip

If you're a Python user, or have Python already installed on your machine simply
run:

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

## Installation via Homebrew

If you are on OS X, you can install the unikube cli via homebrew:

```shell
brew tap unikubehq/tooling
brew install unikubehq/tooling/unikube
```

To install the latest pre-release use the `--HEAD` flag:

```shell
brew install --HEAD unikubehq/tooling/unikube
```

## Version

After the installation is complete, you can verify your installation and check the installed version. Open up a new shell and run:

```shell
unikube --version
```

Now you can get started by logging in into your account. You don’t have an Unikube account? Register at [unikube.io](https://unikube.io/)!
