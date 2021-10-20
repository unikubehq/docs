---
status: voting
---

# Helm chart changelog

**Actually looking for Helm's [changelog](https://github.com/helm/helm/releases)?** 

**Summary**  
Display overview of changelog for helm charts of a project. Analyze commits (maybe semantic commit format).

**Impacted Services**  
- Project Service: Analyze git commits. Add GraphQL query for helm changelog. Alternatively define
  a changelog file which will be rendered.
- Frontend Service: Display overview of changelog.
- CLI: offer command to display changelog

**Description**  
The project service analyzes the commit history of the given project branch or reads a defined
changelog file. The frontend service renders the changelog and offers a search functionality.
The CLI offers a command (`unikube project changelog`) to quickly display the changelog in 
the terminal.