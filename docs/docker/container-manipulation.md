---
sidebar_position: 3
---

# Container Manipulation

Managing, creating, and deleting instances of Docker containers for efficient deployment and scaling of applications.

## General syntax

```bash
docker <object> <command> <options> <image name>
```

- **object**: indicates the type of Docker object you'll be manipulating. Includes: `container`, `image`, `network` or `volume`
- **command**: indicates the task to be carried out by the daemon, that is the `run` command.
- **options**: can be any valid parameter that can override the default behavior of the command, like the `--publish` option for port mapping.
- **image name**: can be of any image from an online registry or your local system

## Run a container

```bash
docker container run <image name>
```

`docker run` used to create and start a container using image.

## Publish a Port

Containers are isolated environments.

To allow access from outside of a container, you must publish the appropriate port inside the container to a port on your local network, using syntax `--publish` (shorthand `-p`).

```bash
--publish <host port>:<container port>
```

When you wrote `--publish 8080:80` in the previous sub-section, it meant any request sent to port **8080** of your host system will be forwarded to port **80** inside the container‌.

## Use dettach mode

By default, containers run in the foreground and attach themselves to the terminal like any other normal program invoked from the terminal.

In order to keep a container running in background, you can include the `--detach` (shorthand `-d`) option with the run command as follows:

```bash
docker container run --detach --publish 8080:80 fhsinchy/hello-dock

# 9f21cb77705810797c4b847dbd330d9c732ffddba14fb435470567a7a3f46cdc
```

What you'll get is the ID of the newly created container.

## List containers

The `container ls` (alias `container ps`) command can be used to list out containers that are **currently running**.

```bash
docker container ls

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                  NAMES
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   5 seconds ago       Up 5 seconds        0.0.0.0:8080->80/tcp   gifted_sammet
```

- **CONTAINER ID**: the first 12 characters of the full container ID. The full container ID is 64 characters long
- **IMAGE**: image name
- **COMMAND**: the command that was executed when the container was started (it's a mix of entrypoint and cmd depending on how those things are mixed in the dockerfile(s) and command-line.)
- **CREATED**: created time
- **STATUS**: container status
- **PORTS**: port mappings of container (format `[PRIVATE_PORT[/PROTO]]`).

```markdown
Ex: `0.0.0.0:8080->80/tcp` means:

- `0.0.0.0` (an alias for any adaptor on `localhost`)
- `8080` port traffic maps to this container's port `80`
- Using `TCP` (another protocol that you will see is `UDP`)
```

- **NAMES**: generated by Docker, combination of two random words, joined with an underscore.

## Name or Rename a Container

Naming a container can be achieved using the `--name` option.

```bash
--name <container identifier> <new name>
```

You can rename old containers using the `container rename` command

```bash
docker container rename <container identifier> <new name>
```

## Stop or Kill a Running Container

```bash
docker container stop <container identifier>
```

Where `container identifier` can either be the id or the name of the container.

The `stop` command shuts down a container gracefully by sending a `SIGTERM` signal.

If the container doesn't stop within a certain period, a `SIGKILL` signal is sent which shuts down the container **immediately**.

```bash
docker container kill <container identifier>
```

The `container kill` command will send a `SIGKILL` signal instead of a `SIGTERM` signal

## Restart a Container

They are two scenarios:

- Restarting a container that has been previously stopped or killed.
- Rebooting a running container.

The `container start` command can be used to start any stopped or killed container

```bash
docker container start <container identifier>
```

In scenarios where you would like to reboot a running container you may use the `container restart` command

```bash
docker container restart <container identifier>
```

#### Different

The container `restart` command attempts to stop the target container and then starts it back up again.

Whereas the `start` command just starts an already stopped container.

In case of a stopped container, both commands are exactly the same.

In case of a running container, you must use the `container restart` command.

## Create a Container without running

The `container run` command which is in reality a combination of two separate commands.

- `container create` command creates a container from a given image.
- `container start` command starts a container that has been already created.

We can run a container step by step using above commands

```bash
docker container create --publish 8080:80 fhsinchy/hello-dock

# 2e7ef5098bab92f4536eb9a372d9b99ed852a9a816c341127399f51a6d053856

docker container ls --all

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS               NAMES
# 2e7ef5098bab        fhsinchy/hello-dock   "/docker-entrypoint.…"   30 seconds ago      Created                                 hello-dock
```

```bash
docker container start hello-dock

# hello-dock

docker container ls

# CONTAINER ID        IMAGE                 COMMAND                  CREATED              STATUS              PORTS                  NAMES
# 2e7ef5098bab        fhsinchy/hello-dock   "/docker-entrypoint.…"   About a minute ago   Up 29 seconds       0.0.0.0:8080->80/tcp   hello-dock

```

**STATUS** has changed from _Created_ to _Up 29 seconds_ which indicates that the container is now in running state

The port configuration has also shown up in the **PORTS** column which was previously _empty_

## Remove dangling container

Containers that have been stopped or killed remain in the system. It can take up space and cause conflict with newer containers.

In order to remove a stopped container you can use the `container rm` command.

```bash
docker container rm <container identifier>
```

You can also remove multiple containers at once by passing their identifiers one after another separated by spaces.

Or if you want to remove all dangling containers at one go, you can use the `container prune` command.

```bash
docker container prune
```

There is also the `--rm` option for the `container run` and `container start` commands which indicates that you want the containers removed as soon as they're stopped.

```bash
docker container run --rm --detach --publish 8888:80 --name hello-dock-volatile fhsinchy/hello-dock

# 0d74e14091dc6262732bee226d95702c21894678efb4043663f7911c53fb79f3
```

## Run a Container in Interactive mode

An image configured to run such as shell is **an interactive image**.

These images require a special `-it` option to be passed in the `container run` command.

```bash
docker container run -it node

# Welcome to Node.js v15.0.0.
# Type ".help" for more information.
> ['farhan', 'hasin', 'chowdhury'].map(name => name.toUpperCase())
# [ 'FARHAN', 'HASIN', 'CHOWDHURY' ]
```

If you run a container using the node image by executing `docker container run node` you'll see **nothing happens**.

`-it` option is actually two separate options mashed together, you can run them seperately:

- The `-i` or `--interactive` option connects you to the input stream of the container, so that you can send inputs to bash.
- The `-t` or `--tty` option makes sure that you get some good formatting and a native terminal-like experience by allocating a pseudo-tty.

## Execute commands inside a Container

And the generic syntax for passing a command to a container that is not running is as follows:

```bash
docker container run <image name> <command>
```

For example, to perform the base64 encoding using the busybox image, you can execute the following command:

```bash
docker container run --rm busybox sh -c "echo -n my-secret | base64

# bXktc2VjcmV0
```

## Work With Executable Images

One way to grant a container direct access to your local file system is by using bind mounts.

A bind mount lets you form a two way data binding between the content of **a local file system directory (source)** and another directory inside **a container (destination)**. This way any changes made in the destination directory will take effect on the source directory and vise versa.

```bash
--volume <local file system directory absolute path>:<container file system directory absolute path>:<read write access>
```

For example:

```bash
docker container run --rm -v $(pwd):/zone fhsinchy/rmbyext pdf

# Removing: PDF
# b.pdf
# a.pdf
# d.pdf
```

## References

[Docker Handbook](https://www.freecodecamp.org/news/the-docker-handbook)