Ext.define('scholar.model.transport.route.SearchModel', {
	extend: 'Ext.data.Model',
	fields : [
	          {
				name : 'routeNumber',
				type : 'string'
			  },
	          {
				name : 'vehicleNumber',
				type : 'string'
	          },
	          {
				name : 'routeDetails',
				type : 'string'
	          },
	          {
				name : 'driverName',
				type : 'string'
	          },
	          {
				name : 'lastUpdatedDate',
				type : 'date',
				dateFormat : 'n/j h:ia'
	          } 
	         ]
	
});