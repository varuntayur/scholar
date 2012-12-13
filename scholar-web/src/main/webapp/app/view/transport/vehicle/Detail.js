Ext.define('scholar.view.transport.vehicle.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.vehicleDetail',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll : true,
	defaultType : 'textfield',
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
		fieldLabel : 'Vehicle Id',
		name : 'vehicleId',
		hidden: true
	},  {
		fieldLabel : 'Vehicle Number',
		name : 'vehicleNumber'
	}, {
		fieldLabel : 'Details',
		xtype : 'textarea',
		name : 'vehicleDetails'
	} ],
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
							var vehicleId = formValues['vehicleId'];		
							
							var rec = store.findRecord('vehicleId',vehicleId);
							rec.set({
									  'vehicleNumber' : formValues['vehicleNumber'],
									  'vehicleDetails': formValues['vehicleDetails']
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
			} ]
});
