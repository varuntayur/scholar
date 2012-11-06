Ext.define('scholar.store.administration.dashboard.FreePeriodStore', {
	extend: 'Ext.data.JsonStore',
	model:'scholar.model.administration.dashboard.FreePeriodModel',
	data: [
		        [ '8am', 1 ],
		        [ '9am', 2 ],
		        [ '10am', 0 ],
		        [ '11am', 0 ],
		        [ '12pm', 0 ],
		        [ '1pm', 7 ],
		        [ '2pm', 4 ],
		        [ '3pm', 1 ],
		        [ '4pm', 0 ]		  				        			 
		    ],
			autoLoad: true
	
});