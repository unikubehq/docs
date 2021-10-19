# Getting started

  

This guide aims to help you create a local cluster setup for a Kubernetes based project with the help of the Unikube CLI.

  

Our mission at Unikube is to enable teams and individuals to create stable, scalable and secure cloud applications with ease. If you struggle with this guide at any step, please do not hesitate to contact us.

  

Enough introductory talk, let’s get started!

## Prerequisites

  

You need:

1.  Helm charts for your application. If you don’t have any, feel free to get started with our [buzzword counter application.](https://github.com/Blueshoe/buzzword-counter) To learn more about helm visit [https://helm.sh/](https://helm.sh/).
    
2.  A [Unikube](https://app.unikube.io) account.
    
3.  A docker image that you’d like to swap into the cluster. Makes the most sense when it’s an image (maybe a newer version) of one of your services from your helm charts.
    

## Online Project Creation

Since Unikube was built with team collaboration in mind, we created a neat web service that allows you to manage access and updates of your Kubernetes resources with ease.

After you login into [app.unikube.io](https://login.unikube.io/auth/realms/unikube/protocol/openid-connect/auth?client_id=frontend&redirect_uri=https%3A%2F%2Fapp.unikube.io%2F&state=3fb1027f-8b5c-4b28-8fe8-791dd998ff74&response_mode=fragment&response_type=code&scope=openid&nonce=3720bb97-7ea1-4587-8028-974f71f5b8d2), you’re asked to join or create a new organization. Feel free to choose any name and invite your colleagues to join.
