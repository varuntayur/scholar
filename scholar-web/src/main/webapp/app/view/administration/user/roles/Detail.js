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
	items : [  {
		fieldLabel : 'Id',
		name : 'id',
		xtype:'textfield',
		hidden: true
	},
	         {
	        	 fieldLabel : 'Role Name',
	        	 name : 'roleName'
	         },
	         {
	        	 xtype:'permissionsGrid',
	        	 layout:'fit',
	        	 id:'userRolesPermissions'
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
									  'courseCode' : formValues['courseCode'],
									  'courseName': formValues['courseName']										 
							});
							
							store.commitChanges();
						}
						else
						{
							form.owner.items.get(2).getStore().data;
							form.owner.items.get(2).getStore().data.getAt(0).data
							
							var permissionsData = Ext.getCmp('userRolesPermissions').getStore().data;
							var lstPermissions = [];
							
							for(var i = 0; i< permissionsData.getCount(); i++)
								lstPermissions.push(permissionsData.getAt(i).data);
							
							var rec = new store.model(form.getValues());
							rec.data.lstPermissions = lstPermissions;
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
