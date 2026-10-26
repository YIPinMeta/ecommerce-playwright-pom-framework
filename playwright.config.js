// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { channel } from 'node:diagnostics_channel';

//Saving - VCS will run without asking if you want to save the file. Use ctrl+s to save the file.
//to run on specifically on 1 browser at a time enter in terminal "add to npx...--project=[browser of choice]"
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
testDir: './tests',
 retries: 1, //retry the test once if it fails
 timeout: 31000,
 expect: 
 
 {
  timeout: 10000,
 },
reporter:'html', //genereate the report in html format
projects:
[

  {
  
  name: 'chrome',
  use: {
  browserName: 'chromium',
   headless: false,
   Screenshot:'only on-failure', //take screenshot only on failure - (on, off, only-on-failure)
   video: 'retain-on-failure', //record video only on failure - (on, off, retain-on-failure)
   trace: 'retain-on-failure', //record trace only on failure - (on, off, retain-on-failure)
} },

{
  name: 'firefox',
  use: {
  browserName: 'firefox',
   headless: false,
   Screenshot:'only on-failure', //take screenshot only on failure - (on, off, only-on-failure)
   video: 'retain-on-failure', //record video only on failure - (on, off, retain-on-failure)
   trace: 'retain-on-failure', //record trace only on failure - (on, off, retain-on-failure)
} },

{ 
  
  name: 'edge',
  use: {
  browserName: 'chromium', //why is Mcsft edge Chromium???- Bc Microsoft uses the same chromium build but we must include line 46 to differentiate between the two
  channel:'msedge',
   headless: false,
   Screenshot:'only on-failure', //take screenshot only on failure - (on, off, only-on-failure)
   video: 'retain-on-failure', //record video only on failure - (on, off, retain-on-failure)
   trace: 'retain-on-failure', //record trace only on failure - (on, off, retain-on-failure)
} 
},

{
  
  name: 'safari',
  use: {
  browserName: 'webkit',
   headless: false,
   Screenshot:'only on-failure', //take screenshot only on failure - (on, off, only-on-failure)
   video: 'retain-on-failure', //record video only on failure - (on, off, retain-on-failure)
   trace: 'retain-on-failure', //record trace only on failure - (on, off, retain-on-failure)
} 
}
] 

 

  
});
module.exports = config //will use the main config across the entire config.

