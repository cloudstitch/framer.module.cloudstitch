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

COLS = 3
SPACE = 20

SIDE = (Screen.size.width - (SPACE * (COLS - 2))) / COLS
COLS = parseInt(Screen.size.height / (SIDE + SPACE))

# Load data from the spreadsheet
cloudstitch = require "cloudstitch"
cloudstitch.get('ted', 'polymer-jobs', (data) -> 
  listLogo(company, i) for company, i in data.jobs
)

listLogos = (data) ->

listLogo = (company, i) ->
	x = SIDE * (i % COLS)
	y = ((SIDE + SPACE) * (i / COLS))
			
	logo = new Layer(
		height: SIDE
		width: SIDE
		x: x
		y: y
		image: company.LogoUrl
	)
