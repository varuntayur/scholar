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
		visible: false
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
							var vehicleId = form.getValues()['vehicleId'];		
						
							var newRec = new store.model(form.getValues());
							store.add(newRec);	
							
							store.save();
							
							store.removeAt(store.find('vehicleId',vehicleId));														
						}
						else
						{
							var rec = new store.model(form.getValues());
							store.add(rec);
//							store.insert(0,Ext.create(						
//									'scholar.model.transport.vehicle.Search', {
//										vehicleNumber : form.getValues()['vehicleNumber'],
//										vehicleDetails : form.getValues()['vehicleDetails']
//									}));
						}
						this.up('window').hide();
						Ext.MessageBox.alert('Success!',
								'Your request has been saved.');
					}
				}
			} ]
});
