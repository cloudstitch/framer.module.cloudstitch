<img src="http://static.cloudstitch.com/img/assets/cloudstitch-framer-module.png" style="margin-left: auto; margin-right: auto; display: block; max-height: 200px; max-width: 90%" alt ="Cloudstitch Framer Module">

The **Cloudstitch Framer Module** lets you load data from Google Spreadsheets and Microsoft Excel directly into your Framer projects.

We think designers should work with _realistic_ data as often as possible. It informs your design decisions, lets you find edge cases that need to be accomodated, and makes for much better demos. Keeping your data in JSON files is no fun: they're a pain to edit and can't be easily shared. Cloudstitch lets you load the data from shared spreadsheets in the cloud instead.

## How to Install

Add the ```cloudstitch.coffee``` file to the `/modules` folder of your project. You can find it in the `/modules` folder of the example project included in this repository.

This git repository is also a working Framer project that serves as an example. Download it and double click `cloudstitch.framer` file to see.

## How to Use

### 1. Create a Spreadsheet Using Cloudstitch

Clone the [Framer Module Demo](https://www.cloudstitch.com/project-templates/framer-module-demo/clone) on Cloudstitch and then edit the spreadsheet created for your new project.

This spreadsheet acts as the datasource that you can load from Framer.

### 1. Sync your Data with Cloudstitch

When you're done editing the spreadsheet, press the green **Sync with your Template** button in Cloudstitch. This makes a fresh copy of your spreadsheet available over Cloudstitch's API.

### 1. Use your data in Framer

Include the Cloudstitch module within your project by adding the following:

``` coffeescript
cloudstitch = require "cloudstitch"
```

Then get data from your spreadsheet by providing the Cloudstitch username and appname of your project:

``` coffeescript
cloudstitch.get(username, appname, (response) -> callback(response))
```

You can find the username and appname for your Cloudstitch project by looking at its URL:

<img src="http://static.cloudstitch.com/img/assets/username-appname.png" style="margin-left: auto; margin-right: auto; display: block; max-height: 200px; max-width: 90%" alt ="Cloudstitch Framer Module">
