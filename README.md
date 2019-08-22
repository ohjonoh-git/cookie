# cookie

# Protractor
For this task I went with the protractor automation framework. Protractor is a framework built on top of WebDriverJS used to test angular applications. It follows the similar patterns of Mocha.  
More info on the framework can be found here https://www.protractortest.org/#/

# My Repo
You'll notice I have a few files in my repo.
* conf.js: This contains information/values I set for how my automation will run. This includes global variables such as wait times.
* cookie-base-page.js: This is where I keep all my page locators (POM) and any functions I write to interact with the page
* cookie-game.js: This my 'spec' file where I write out the flow of the automation. The important points is that it follows step instructions and correct expected result has been achieved in the "expect" portion

# Installation steps
* Prerequisite: clone repo

Install protractor to the device you'd like to run the test
1. Run 'npm install -g protractor' to install protractor
2. Run the following command 'webdriver-manager update'
3. After installation is done run 'webdriver-manager start'
  * This will start your webdriver instance
4. Open terminal and navigate to the repo directory
5. Once you are in the cookie repo run the following command to execute the 
'protractor conf.js'

