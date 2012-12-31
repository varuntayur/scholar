Ext.define('scholar.model.finance.settings.general.FinanceSettings', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	},  {
		name : 'finYearStartDate',
		type : 'string'
	},
	{
		name : 'finYearEndDate',
		type : 'string'
	}]

});