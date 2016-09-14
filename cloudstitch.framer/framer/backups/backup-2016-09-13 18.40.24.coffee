# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Edward Benson"
	twitter: ""
	description: ""

# Set background color
Screen.backgroundColor = "#AAEEFF"

# Some constants to help us lay out the grid
COLS = 3
SPACE = 20
SIDE = (Screen.size.width - (SPACE * (COLS - 2))) / COLS
COLS = parseInt(Screen.size.height / (SIDE + SPACE))

# Load data from the spreadsheet.
cloudstitch = require "cloudstitch"

# The `get` method takes your Cloudstitch username and appname, and
# it returns the contents of your spreadsheet as a JSON object.
cloudstitch.get('project-templates', 'framer-module-demo', (data) -> 
  listLogo(company, i) for company, i in data.Companies
)

listLogo = (company, i) ->
	x = SIDE * (i % COLS) + ((i % COLS)-1)*SPACE
	y = parseInt(i / COLS) * SIDE + (parseInt(i / COLS) * SPACE)
			
	logo = new Layer(
		height: SIDE
		width: SIDE
		x: x
		y: y
		image: company.URL
		html: "<p align='center' style='background-color: black'>" + company.Name + "</p>"
	)
