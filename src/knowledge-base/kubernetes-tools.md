# Kubernetes Tools

For everyone who has worked with Kubernetes in the past, there came a point, when it was clear that a [Kubernetes](./kubernetes.md) setup may need a lot more tools to work smoothly in dev and operations than initially thought.

We’ll walk you through some of the **typical tools that often get used in Kubernetes setups.**


## Quay.io

[Quay.io](https://quay.io/) is an open-source project that helps you with the **distribution of container images.** It takes care of vulnerability scanning and offers solutions for data storage and data protection. It only requires a database and storage for your images to work. Quay is built to scale with your project and runs on basically any device.
  

## Helm

[Helm](https://helm.sh/) is an open-source software project that helps you define how your Kubernetes applications run and also helps to install and upgrade your Kubernetes applications. Helm uses charts written in YAML to exactly define which dependencies exist within your application, what Kubernetes resources are needed and whatever else is necessary to provide a certain container-based application.

So, with Helm, **the package manager** receives all the necessary information that is needed to install, distribute and update an application and can also store user-specific information.


## Minikube

[Minikube](https://minikube.sigs.k8s.io/docs/) is a very neat tool that allows you to **run a Kubernetes cluster on your local device with a single node,** using a virtual machine. It helps developers to try out Kubernetes and develop applications with Kubernetes in mind. All you need is a [Docker](./docker.md) (or similarly compatible) container or a virtual machine environment, and Kubernetes is only one single command away.


## Telepresence

[Telepresence](https://www.telepresence.io/) is a very useful open-source tool that lets you **run a single service locally while connecting that service to a remote Kubernetes cluster.** For example, you can run a locally built Docker image in a cluster by ‘swapping’ a deployment - which is pretty spectacular from a technical point of view. 

Also, you can use your favourite code editor, debugger, profiler, or any other tools because anything that runs on your laptop works with Telepresence. And on top of that: it adds zero overhead to your development environment.


## K3d/k3s

[K3d](https://k3d.io/) is a lightweight wrapper to run k3s (Rancher’s lightweight Kubernetes distribution) in Docker. K3d makes it very **easy to create single- and multi-node k3s clusters,** e.g. for local development on Kubernetes (k8s) or as a temporary testing environment for applications.

[K3s](https://rancher.com/products/k3s/) is an official sandbox project by the CNCF, the Cloud Native Computing Foundation. It delivers a **lightweight yet powerful certified Kubernetes distribution** designed for production workloads across resource-restrained, remote locations or on IoT devices.
