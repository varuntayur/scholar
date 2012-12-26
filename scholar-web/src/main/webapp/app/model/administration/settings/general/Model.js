Ext.define('scholar.model.administration.settings.general.Model', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'institutionDetailsId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	},
	{
		name : 'address',
		type : 'string'
	},{
		name : 'phone',
		type : 'string'
	},
	{
		name : 'fax',
		type : 'string'
	}]

});