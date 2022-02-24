# Project Setup

## Prerequisites

You need:

**1.  Helm charts for your application.** If you don’t have any, feel free to get started with our [buzzword counter application.](https://github.com/Blueshoe/buzzword-charts/) To learn more, visit [helm](https://helm.sh/).

**2.  A Unikube account.**
- Creating an account is super quick. Just click [here](https://app.unikube.io).  
- You want to delete your login data? No problem. Just drop us a line at [support@unikube.io](mailto:support@unikube.io)
- Alternatively, you can use these test credentials (without creating your own account) to try out the CLI, before creating your own account:

>     User: sandbox@unikube.io Password: #4kEMU8aPm

**3.  A docker image that you’d like to swap into the cluster.** Makes the most sense when it’s an image (maybe a newer version) of one of your services from your helm charts.


## Online Project Creation

Since Unikube was built with team collaboration in mind, we created a neat web service that allows you to manage access and updates of your Kubernetes resources with ease.

After you login into [app.unikube.io](https://login.unikube.io/auth/realms/unikube/protocol/openid-connect/auth?client_id=frontend&redirect_uri=https%3A%2F%2Fapp.unikube.io%2F&state=3fb1027f-8b5c-4b28-8fe8-791dd998ff74&response_mode=fragment&response_type=code&scope=openid&nonce=3720bb97-7ea1-4587-8028-974f71f5b8d2), you’re asked to join or create a new organization. Feel free to choose any name and invite your colleagues to join.

![Create a new organization1](/docs/img/screenshot_create-new-organization1.png)
![Create a new organization2](/docs/img/screenshot_create-new-organization2.png)

After creating a new organization you’ll be redirected to the project overview page. Since you probably haven’t created a project yet, it will look something like this:

![Create a project list](/docs/img/screenshot__project-list.png)

Alright! Let’s hit the “Add new Project” button on the top right corner. You’ll be presented with a form to create a new project. Enter a title, the http(s) path to your helm charts repository, the branch which should be cloned as well as the access credentials if needed. Finish with clicking “Next”! You’ll be asked to add team members from your organization - feel free to skip this step.

:::tip
You could use our example helm charts for your first project:
[Buzzword Charts](https://github.com/Blueshoe/buzzword-charts/).
:::

If you're working with helm charts you need to define the values with which the charts are rendered.
When opening the project edit the deck, you would like to install later.

![Create a new organization1](/docs/img/edit_deck.png)

In the deck's environment define the values `directory` or `file` which should be used to render the helm charts.

![Create a new organization1](/docs/img/edit_values.png)

:::tip
A deck is the smallest installable unit in on Unikube.
:::

That’s it for the online setup! Let’s get this thing running on your machine!
