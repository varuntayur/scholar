Ext.define('scholar.model.administration.inventory.elec.ElectronicsSearch', {
	extend: 'Ext.data.Model',		
	fields : [ {
		name : 'id',
		type : 'int'
	},{
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