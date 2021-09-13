---
status: done
---

# Helm Overrides

**Summary**

Overwrite [Helm](https://helm.sh/) values with the help of Unikube. Lift the burden of creating
multiple value files or directories for different stages/environments of your cluster.

**Impacted Services**
- Frontend Service: Add YAML editor to enter YAML for Helm values. Autocomplete for existing value files
  and directories. We will use the [Monaco Editor](https://microsoft.github.io/monaco-editor/) for that.
  Autocompletion can be achieved via JSON schemas.
- Unikube Commons: Creation of a JSON schema for existing Helm value files and directories.
- Project Service: Store JSON schema and overwritten YAML structure.
- Manifest Service: Use new Helm values for the rendering process.

Unikube offers the creation of dedicated environments for a project.

::: tip
For more information on environments continue here.
:::

**Description**  
For different environments, different Helm values may be required to render the
[Helm](https://helm.sh/) charts. Currently, this is only possible by creating multiple
value files or value directories within a Helm chart repository.

To simplify this we're planning to create a feature called "Helm Overrides".

With the help of a frontend code editor, the user should be able to create an "overwrite yaml file".
The file then will be used to overwrite Helm values in the rendering process for an environment.
The frontend code editor must provide autocompletion for existing Helm values.
Our research showed that the [Monaco Editor](https://microsoft.github.io/monaco-editor/) is probably
the best choice for that. It provides autocompletion through JSON schema, which must be generated
from the existing Helm value file(s).

![Helm Overrides](./assets/Helm_overrides.png)
