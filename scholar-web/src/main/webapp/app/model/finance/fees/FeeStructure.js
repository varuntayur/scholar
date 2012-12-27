Ext.define('scholar.model.finance.fees.FeeStructure', {
	extend: 'Ext.data.Model',
	fields: ['lineItem', 
	         'groupName',
	         {
        		name: 'value',
        		type: 'int'
	         }]
	
});