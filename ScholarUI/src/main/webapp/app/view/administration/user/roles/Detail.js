Ext.define('scholar.view.administration.user.roles.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.roleDetail',
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
	        	 fieldLabel : 'Role Name',
	        	 name : 'roleName'
	         },
	         {
	        	 xtype:'permissionsGrid',
	        	 layout:'fit'
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
