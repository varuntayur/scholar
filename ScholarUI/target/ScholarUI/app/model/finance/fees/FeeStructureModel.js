Ext.define('scholar.model.finance.fees.FeeStructureModel', {
	extend: 'Ext.data.Model',
	fields: ['lineItem', 
	         'groupName',
	         {
        		name: 'value',
        		type: 'int'
	         }]
	
});