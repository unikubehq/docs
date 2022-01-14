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

**Thoughts on use case database dump/restore**
Following steps would be necessary to create a database dump:
- switch kubectl context to cluster from which the database should be dumped
- deploy container that can execute the dump (e.g. postgres)
- execute dump
- run `kubectl cp` to copy dump from container to local dir (container needs to be running for that)
- delete container

Following steps would be necessary to restore a database dump:
- switch kubectl context to cluster in which the database should be restored
- deploy container that can restore the dump (e.g. postgres)
- run `kubectl cp` to copy dump from local dir to container
- restore dump (maybe clear database beforehand, maybe drop all existing connections to database beforehand)
- delete container

It seems like this structure would a lot of the time be the same, especially when using the same database backend. It would be nice if one wouldn't need to create such scripts for each project or deck. As probably on a lot of cases only the access credentials to the database change, wouldn't it be nice to support some sort of templating here? I.e. I create a script (maybe on orga level?) and can configure it for a deck and specify some variables as a context for the script.
