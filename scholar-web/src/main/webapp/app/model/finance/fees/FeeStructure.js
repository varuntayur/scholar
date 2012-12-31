Ext.define('scholar.model.finance.fees.FeeStructure', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'lineItem',
		type : 'string'
	}, {
		name : 'groupName',
		type : 'string'
	}, {
		name : 'value',
		type : 'int'
	} ]

});