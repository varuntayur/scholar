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
	defaultType : 'textfield',
	items : [
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
					store: 'transport.vehicle.SearchStore',
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
					if (this.up('form').getForm().isValid()) {
						this.up('window').hide();
						Ext.MessageBox.alert('Success!',
								'Your request has been saved.');
					}
				}
			} ]
});
