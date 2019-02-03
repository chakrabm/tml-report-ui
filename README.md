// Create the inital angular project
1.	ng new tml-report-ui --prefix tml

//Create a shared module
2.	ng g m shared/shared --flat

//Create first feature module
3.	ng g m report1/report1 --flat -m app

//Create Second feature module
4.	ng g m report2/report2 --flat -m app


//Install bootstrap/font-awesome 
5.	npm install bootstrap
	npm install font-awesome
	
	Add the below 2 lines in src/styles.css
	@import "~bootstrap/dist/css/bootstrap.min.css";
	@import "~font-awesome/css/font-awesome.min.css";
	
6.	Modify app.component.html, app.component.css
7.	Update Report1.module.ts

//Create both component we need - Criteria/Results
8.	ng g c report1/report1Criteria --flat -m report1/report1.module
	ng g c report1/report1Result --flat -m report1/report1.module
	

	
9.	npm install @ng-bootstrap/ng-bootstrap --save
10.	npm install popper.js --save
11.	npm install jquery --save
12.	npm install ngx-pagination --save

--------------------------------

Java

@CrossOrigin(origins = "http://localhost:4200")

@GetMapping("/purchasedBefore/{date}")
	public List<Bike> getPurchasedBefore(@PathVariable("date") String date) throws ParseException {
		Date dateCriteria = new SimpleDateFormat("yyyy-MM-dd").parse(date);
		
		logger.info("Date passed: " + dateCriteria);
		
		return bikeRepository.findByPurchaseDateGreaterThan(dateCriteria);
	}
