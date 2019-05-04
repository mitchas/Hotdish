# Hotdi.sh Website

Hotdish Main website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on to a server.

### Prerequisites

Node, npm, & gulp installed.

Install with npm

```bash
npm install
```

## Building and testing

```bash
gulp
```
Compiles HTML Twig tags into /dev/ folder & live reloads browser with BrowserSync from /dev/.

```bash
gulp build
```
Builds the project into the /build/ folder - minifies JS, compiles TWIG and LESS, and compresses images (which takes some time).

```bash
gulp serve-build
```
Test the build by serving from the /build/ folder.


## Deployment

Upload the /public/ folder contents manually.

