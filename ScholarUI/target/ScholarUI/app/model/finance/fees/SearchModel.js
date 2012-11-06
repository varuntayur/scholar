Ext.define('scholar.model.finance.fees.SearchModel', {
	extend: 'Ext.data.Model',
	fields : [  {
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