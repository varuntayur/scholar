Ext.define('scholar.model.finance.fees.FeeSearch', {
	extend: 'Ext.data.Model',
	fields : [{
		name : 'id',
		type : 'int'
	},  {
		name : 'admissionNumber',
		type : 'string'
	}, {
		name : 'studentName',
		type : 'string'
	}, {
		name : 'feeCollectionDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],
	
});