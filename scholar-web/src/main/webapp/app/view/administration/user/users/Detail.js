Ext.define('scholar.view.administration.user.users.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.userDetail',
	title : 'User Details',
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Id',
		name : 'id',
		hidden: true
	},{
				fieldLabel:'User Name',
				name : 'userName',
				type : 'string'
			 },
			 {
				 fieldLabel:'Role',
				 xtype:'combo',
				 store:'administration.user.roles.SearchStore',
				 valueField:'roleName',
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
						var form = this.up('form').getForm();
						if (form.isValid()) {
							
							var store = this.ownerCt.ownerCt.store; 
							
							if(form.owner.isEdit)							
							{
								var formValues = form.getValues();
								var routeId = formValues['id'];		
								
								var rec = store.findRecord('id',routeId);
								rec.set({
										  'userName' : formValues['userName'],
										  'userRole': formValues['userRole']										 
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
