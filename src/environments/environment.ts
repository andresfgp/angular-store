// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://localhost:3000/list/',
  firebase: {
    projectId: 'store-8a226',
    appId: '1:115382430327:web:6153da8d7ef0a2acfb7472',
    storageBucket: 'store-8a226.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBdsOWiVoLNPu4RK9HCbh7ywxoJLstQ2DM',
    authDomain: 'store-8a226.firebaseapp.com',
    messagingSenderId: '115382430327',
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
