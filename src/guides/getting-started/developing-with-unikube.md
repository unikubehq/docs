# Developing with Unikube

Make sure Unikube is [installed and setup
correctly](/docs/guides/getting-started).

Everything should be in place to run a Kubernetes on your machine. Time to login!

```bash
unikube login
```

Feel free to close the login tab after a successful login. Let’s list the available projects:

```bash
unikube project list
```

At this point, you should see the project created in the "Online Project Creation" section. Neat! Let's spin it up:

```bash
unikube project up
```

After a short time, you’ve got a running and provisioned Kubernetes cluster.

Let's install the deck containing the application:

```bash
unikube deck install
```

:::tip
Run following command inspect the current state of your cluster

```bash
watch unikube app list --deck buzzword-counter
```

:::

After some time you've got your cluster setup with your application. That was simple, wasn’t it?

As good old Steve Jobs said - we’ve got one more thing (and it is pretty amazing!):

let’s switch a running docker container from your machine into the cluster.

First, we create a unikube.yaml file, which provides information about the image and how it should be integrated into the cluster.

```yaml
version: "1"

apps:
  buzzword-counter:
    deployment: buzzword-counter-web
    build:
      context: .
      dockerfile: Dockerfile
      options:
        - compress
    env:
      - DJANGO_DEBUG: "True"
    command: python manage.py collectstatic --noinput --ignore src; python manage.py runserver 0.0.0.0:{port}
    volumes:
      - .:/code
```

This example file is taken from our [buzzword counter application.](https://github.com/Blueshoe/buzzword-counter) It describes the app to be switched into the local cluster. If you’ve worked with docker-compose before it should look pretty familiar.

- `build` provides the build arguments for the docker image for the container to be built.

- `env` allows you to overwrite environment variables within the running container.

- `command` is the command to be executed within the container.

- `volume` allows you to add a volume mapping from your local disk to the container running in the cluster. This enables pretty cool things like hot code reloading.

You can find the `helm` charts for the buzzword counter [here](https://github.com/Blueshoe/buzzword-charts/).

Now we’re set to execute the switch command:

```bash
unikube app switch
```

Unikube switches the images and shows you the output of your command.

Done. Amazing!!!