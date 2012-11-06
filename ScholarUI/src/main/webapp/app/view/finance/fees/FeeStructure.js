Ext.define('scholar.view.finance.fees.FeeStructure', {
		extend : 'Ext.grid.Panel',
		alias: 'widget.feeStructure',
		id:'feeStructure',
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [{
						xtype : 'button',
						iconCls:'x-icon-new',
						text : 'New Fee Component',
						action:'addNewFeeComponent',
					},
					{
						xtype : 'button',
						iconCls:'x-icon-delete',
						text : 'Delete Fee Component',
						action:'deleteFeeComponent',
					},
					{
						xtype : 'button',
						iconCls:'x-icon-new',
						text : 'New Fee Item',
						action:'addNewFeeLineItem',
					},
					{
						xtype : 'button',
						iconCls:'x-icon-delete',
						text : 'Delete Fee Item',
						action:'deleteFeeLineItem',
					}
					]
		} ],
		features: [{
		        groupHeaderTpl: 'Category: {name}',
		        ftype: 'groupingsummary'
		}],
		store:'finance.fees.FeeStructureStore',
	    hideHeaders:true,
	    columns: [{
	        dataIndex: 'lineItem',
	        text: 'Name',
	        flex: 1,
//	        summaryType: 'count',
//	        summaryRenderer: function(value){
//	            return Ext.String.format('{0} item{1}', value, value !== 1 ? 's' : '');
//	        }
	    },
	    {
	        dataIndex: 'value',
	        text: 'value',
	        flex: 1,
//	        summaryType: 'sum'
	    }],
	    buttons : [
	   			{
	   				text : 'Cancel',
	   				handler : function() {
	   					this.up('form').getForm().reset();
	   					this.up('window').hide();
	   				}
	   			},
	   			{
	   				text : 'Save',
	   				handler : function() {
	   					if (this.up('form').getForm().isValid()) {
	   						this.up('window').hide();
	   						Ext.MessageBox.alert('Success!',
	   								'Your request has been saved.');
	   					}
	   				}
	   			} ]
});
