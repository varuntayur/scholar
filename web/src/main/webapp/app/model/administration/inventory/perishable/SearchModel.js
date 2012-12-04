Ext.define('scholar.model.administration.inventory.perishable.SearchModel', {
	extend: 'Ext.data.Model',		
	fields : [ {
		name : 'itemId',
		type : 'string'
	}, {
		name : 'itemName',
		type : 'string'
	},
	{
		name : 'itemDescription',
		type : 'string'
	},
	{
		name : 'quantity',
		type : 'string'
	},
	{
		name : 'itemAcquisitionDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}  ]
});