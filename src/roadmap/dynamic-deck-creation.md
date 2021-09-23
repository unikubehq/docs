---
status: voting
---

# Dynamic Deck Creation

**Summary**

Create decks with Unikube platform's UI. Currently, deck are completely based on Helm's Chart.yaml files.
This feature depends on [K8S Manifest Support](./k8s-manifest-support.md). This feature enables users
to create a dedicated installable unit for a specified portion of their cluster's applications and 
resources.

::: tip
A Deck is the smallest installable unit on Unikube. [More information](https://cli.unikube.io/provision.html#what-is-a-deck). 
:::

**Impacted Services**
- Frontend Service - Display detailed information about K8S manifests and Helm files. Allow the creation
of decks combining multiple sources (K8S resources as well as Helm charts).
- Project Service - Allow multiple Git repositories per project. Store information about Charts and K8S
  Manifest files.
- Unikube Commons - Advanced information extraction for Charts and K8S Manifests. 
- Manifest Service - Bundle given resources into Deck during rendering process.
- CLI - Make user created Decks installable.

**Description**

The creation of Decks through the Unikube UI depends on the support for K8S Manifests.
Furthermore project's need to support multiple git repositories since some cloud native applications have 
a distributed organization of their K8S resource description (K8S manifests/Helm).
The frontend should provide a visualization of the retrieved information from the chart and manifest
files. These information are extracted by the commons package. 

Example information (pre-rendering):
- list of dependencies
- annotation / descriptions
- version information

Example information (post-rendering):
- list of applications
- list of deployments
- list of k8s resources
- used images

With the given information users should be able to create a Deck through Unikube platform's UI.
This could be some kind of drag'n drop logic, or just a simple 2 way selector (add/remove from list).

When a Deck was successfully created it should be installable through Unikube's CLI.
