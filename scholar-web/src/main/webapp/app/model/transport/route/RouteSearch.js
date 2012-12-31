Ext.define('scholar.model.transport.route.RouteSearch', {
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields : [
	          {
				name : 'id',
				type : 'int'
			  },
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