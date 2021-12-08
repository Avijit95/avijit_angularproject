// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiBaseUrl: "",
  baseHref: '/',
  domain_url: '/',

  api_url: 'https://7n7kb4v1tj.execute-api.us-east-2.amazonaws.com/dev/',
  // api_calender_url: ' https://vf4c4c8w9b.execute-api.us-east-2.amazonaws.com/dev/grace-medical-api/',
  // add_google_calendar_url: 'https://px5mpxecj1.execute-api.us-east-1.amazonaws.com/dev/beto-google-calendar',
  // google_calendar_api: 'https://px5mpxecj1.execute-api.us-east-1.amazonaws.com/dev/',
  file_upload_url: 'https://57lsaxmih2.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
