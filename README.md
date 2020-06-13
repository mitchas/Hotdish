# Hotdish

Website at hotdi.sh


# Project Installation & Development

### Packages
```bash
npm install
```

## NPM Commands

#### Serve on [localhost:8080](https://localhost:8080)
```bash
npm run serve
```

#### Build for production
```bash
npm run build
```

#### Run your tests
```bash
npm run test
```
#### Lints and fixes files
```bash
npm run lint
```

# Other things to set up

### App version updates
The current version number of the app is used in a few different places - on the about modal, on the changelog, and also to determine if an update has been pushed, in order to force the cache/PWA to reload. 

Before deploying, change the current version number in two places -
 * store.js
 * service-worker.js


### Environment Variables
Fill in your VUE_APP_BASE_URL and VUE_APP_BASE_PATH in `.env` and `.env.production`. The base URL should be the bare URL it'll be hosted at (ie https://example.com - no trailing slash) and the base path should be the path at the URL (ie /app if it'll be at example.com/app). For the root, leave it at /.

### Production Public Path
If the app is going to be deployed in a sub directory (ie website.com/app/), edit the path in vue.config.js.


# Everything else you should know

## Third-party libraries
I tried to use as few as possible. Apart from Vue and everything required by it, this project includes:
 * [VueMoment](https://www.npmjs.com/package/vue-moment) (MomentJS) for time formatting
 * [FontAwesome](http://fontawesome.com/) (Pro) for icons. You'll have to switch out icons if you don't have pro.
 * [Vue Lodash](https://www.npmjs.com/package/vue-lodash) For working with the data.

## Other Features
 * Fully responsive/PWA support
 * Soft keyboard detection to hide elements on mobile for more space when keyboard is visible.
 * Lock scrolling when modal is visible
 * LESS Styles with global light/dark themes
 * Preferences stored in local storage.

