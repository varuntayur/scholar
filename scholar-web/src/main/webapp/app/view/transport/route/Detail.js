Ext.define('scholar.view.transport.route.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.routeDetail',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
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
	items : [
	         	{
					fieldLabel : 'Route Id',
					name : 'routeId',
					hidden: true
				}, 
				{
					fieldLabel : 'Route Number',
					name : 'routeNumber'
				}, 
				{
					xtype:'combo',
					store: 'staff.lookup.SearchStore',
					valueField: 'staffName',
					displayField: 'staffName',
					queryMode : 'local',
					fieldLabel : 'Driver Name',
					name : 'driverName'
				},	         
				{
					xtype:'combo',
					store: 'transport.vehicle.Combo',
					valueField: 'vehicleNumber',
					displayField: 'vehicleNumber',
					queryMode : 'local',
					fieldLabel : 'Vehicle Number',
					name : 'vehicleNumber'
				},
				{
					xtype:'textarea',
					fieldLabel : 'Route Details',					
					name : 'routeDetails'
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
							var routeId = formValues['routeId'];		
							
							var rec = store.findRecord('routeId',routeId);
							rec.set({
									  'routeNumber' : formValues['routeNumber'],
									  'routeDetails': formValues['routeDetails'],
									  'vehicleNumber':formValues['vehicleNumber'],
									  'driverName':formValues['driverName'],
									  'lastUpdatedDate':formValues['lastUpdatedDate']
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
