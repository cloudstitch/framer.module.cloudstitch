# framer.module.cloudstitch

framer.module.cloudstitch lets you load data from Google Spreadsheets and Microsoft Excel.

## Installation
Add ```cloudstitch.coffee``` to the /modules folder of your project.

## Usage
To include the module within your project, add the following:

``` coffeescript
cloudstitch = require "cloudstitch"
```

Then get data from your spreadsheet by providing the Cloudstitch username and appname of your project:

``` coffeescript
cloudstitch.get(username, appname, (response) -> callback(response))
```
