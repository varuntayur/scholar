Ext.define('scholar.view.administration.inventory.infra.NewInfra', {
	extend : 'Ext.form.Panel',
	alias : 'widget.newInfraInv',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [
	         {
	     		fieldLabel : 'Item ID',
	     		name : 'itemId'
	     	}, {
	     		fieldLabel : 'Item Name',
	     		name : 'itemName'
	     	},
	     	{
	     		fieldLabel : 'Item Description',
	     		name : 'itemDescription'
	     	},
	     	{
	     		fieldLabel : 'Quantity',
	     		name : 'quantity'
	     	},
	     	{
	     		fieldLabel : 'Acquisition Date',
	     		name : 'itemAcquisitionDate',
	     		xtype:'datefield'
	     	}
	],
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
