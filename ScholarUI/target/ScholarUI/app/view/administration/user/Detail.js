Ext.define('scholar.view.administration.user.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.userDetail',
	title : 'User Details',
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	items : [{
				fieldLabel:'User Name',
				name : 'userName',
				type : 'string'
			 },
			 {
				 fieldLabel:'Role',
				 xtype:'combo',
				 store:'administration.user.roles.SearchStore',
				 valueField:'roleName',
				 queryMode : 'local',
				 displayField:'roleName',
				 name : 'userRole',
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
