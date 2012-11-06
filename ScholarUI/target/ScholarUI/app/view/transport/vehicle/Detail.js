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
	autoScroll: true,
	defaultType : 'textfield',
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [
	         {
	        	 fieldLabel : 'Vehicle Number',
	     		name : 'vehicleNumber'
	     	 },
	     	 {
	     		fieldLabel : 'Details',
				xtype:'textarea',
				name : 'vehicleDetails'
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
