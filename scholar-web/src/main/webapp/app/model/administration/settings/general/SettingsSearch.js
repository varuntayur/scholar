Ext.define('scholar.model.administration.settings.general.SettingsSearch', {
	extend : 'Ext.data.Model',
	idProperty: 'id',
	fields : [ {
		name : 'id',
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