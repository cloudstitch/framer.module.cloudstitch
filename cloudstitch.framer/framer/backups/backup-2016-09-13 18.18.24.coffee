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
SIDE = 200
SPACE = 20

# Load data from the spreadsheet
cloudstitch = require "cloudstitch"
cloudstitch.get('ted', 'polymer-jobs', (data) -> 
  listLogo(company, i) for company, i in data.jobs
)

listLogos = (data) ->


listLogo = (company, i) ->
	var x = ((SIDE + SPACE) * i) % Screen.size.width	
	
	logo = new Layer(
		height: 200
		width: 200
		x: Align.center(210 * i)
		y: Align.center
		image: company.LogoUrl
	)
