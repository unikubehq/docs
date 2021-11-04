---
status: in-progress
---

# Cluster Scripts

**Summary**  
Allows creating scripts on the Unikube platform and execute them in a spun up cluster.

**Impacted Services**  
- Script service: New service that manages scripts and their metadata.
- Frontend Service: Allows to create and manage scripts through the UI.
- CLI: Allows executing given scripts on a cluster.

**Description**  
Allows to create scripts (`sh`, `bash` and `python`) that can then be executed in the cluster
through the Unikube CLI.
Platform users can create "script" objects which consist out of:
- a name
- a description
- a Docker image url / or choice (we provide the user with 2-3 default chocies)
- an interpreter choice (`bash`, `sh`, `python`)
- the author
- created date
- modified date
- a service account
- access credentials

Furthermore we'll store the stacktraces in case the script exits with an error.

The use cases are nearly endless! Some examples:

- Downloading a database dumping and restoring the database.
- Creating an initial state for a volume.
- Firing requests to an internal API.
