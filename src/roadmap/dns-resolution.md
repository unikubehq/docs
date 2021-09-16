---
status: voting
---

# DNS Resolution


**Summary**  
Currently clusters provisioned via unikube make use of [nip.io](nip.io) to resolve domains. However
in some (development) setups the nip.io is not reachable due to local network restrictions.
To resolve this issue the local `hosts` file could be edited when a cluster is started and stopped.
