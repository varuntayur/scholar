Ext.define('scholar.view.administration.inventory.perishable.NewPerishable', {
	extend : 'Ext.form.Panel',
	alias : 'widget.newPerishable',
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
	constructor : function() {
		return this.callParent();
	},
	constructor : function(config) {
		if (config) {
			this.store = config.store;
			this.isEdit = (typeof config.isEdit === "undefined") ? false: true;
		}
		this.callParent();
	},
	defaultType : 'textfield',
	items : [ {
				fieldLabel : 'Id',
				name : 'id',
				hidden: true
			},
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
					var form = this.up('form').getForm();
					if (form.isValid()) {
						
						var store = this.ownerCt.ownerCt.store; 
						
						if(form.owner.isEdit)							
						{
							var formValues = form.getValues();
							var routeId = formValues['id'];		
							
							var rec = store.findRecord('id',routeId);
							rec.set({
								  'itemId' : formValues['itemId'],
								  'itemName' : formValues['itemName'],
								  'itemDescription' : formValues['itemDescription'],
								  'quantity' : formValues['quantity'],
								  'itemAcquisitionDate': formValues['itemAcquisitionDate']										 
						});
							
							store.commitChanges();
						}
						else
						{
							var rec = new store.model(form.getValues());
							store.add(rec);
						}
						this.up('window').hide();
						Ext.MessageBox.alert('Success!',
								'Your request has been saved.');
						store.load();
					}
				}
			}]
});
