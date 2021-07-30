# Kubernetes in Production
A production-quality Kubernetes cluster requires planning and preparation. If your Kubernetes cluster is to run critical workloads, it must be configured to be resilient. This page explains steps you can take to set up a production-ready cluster, or to uprate an existing cluster for production use. If you're already familiar with production setup and want the links, skip to What's next.

Production considerations
Typically, a production Kubernetes cluster environment has more requirements than a personal learning, development, or test environment Kubernetes. A production environment may require secure access by many users, consistent availability, and the resources to adapt to changing demands.

As you decide where you want your production Kubernetes environment to live (on premises or in a cloud) and the amount of management you want to take on or hand to others, consider how your requirements for a Kubernetes cluster are influenced by the following issues:

Availability: A single-machine Kubernetes learning environment has a single point of failure. Creating a highly available cluster means considering:

Separating the control plane from the worker nodes.
Replicating the control plane components on multiple nodes.
Load balancing traffic to the cluster’s API server.
Having enough worker nodes available, or able to quickly become available, as changing workloads warrant it.
Scale: If you expect your production Kubernetes environment to receive a stable amount of demand, you might be able to set up for the capacity you need and be done. However, if you expect demand to grow over time or change dramatically based on things like season or special events, you need to plan how to scale to relieve increased pressure from more requests to the control plane and worker nodes or scale down to reduce unused resources.

Security and access management: You have full admin privileges on your own Kubernetes learning cluster. But shared clusters with important workloads, and more than one or two users, require a more refined approach to who and what can access cluster resources. You can use role-based access control (RBAC) and other security mechanisms to make sure that users and workloads can get access to the resources they need, while keeping workloads, and the cluster itself, secure. You can set limits on the resources that users and workloads can access by managing policies and container resources.

Before building a Kubernetes production environment on your own, consider handing off some or all of this job to Turnkey Cloud Solutions providers or other Kubernetes Partners. Options include:

Serverless: Just run workloads on third-party equipment without managing a cluster at all. You will be charged for things like CPU usage, memory, and disk requests.
Managed control plane: Let the provider manage the scale and availability of the cluster's control plane, as well as handle patches and upgrades.
Managed worker nodes: Configure pools of nodes to meet your needs, then the provider makes sure those nodes are available and ready to implement upgrades when needed.
Integration: There are providers that integrate Kubernetes with other services you may need, such as storage, container registries, authentication methods, and development tools.
Whether you build a production Kubernetes cluster yourself or work with partners, review the following sections to evaluate your needs as they relate to your cluster’s control plane, worker nodes, user access, and workload resources.

