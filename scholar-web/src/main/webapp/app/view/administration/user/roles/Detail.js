Ext.define('scholar.view.administration.user.roles.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.roleDetail',
	title : 'Role details',
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,	
	frame : true,	
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
	items : [  {
		fieldLabel : 'Id',
		name : 'id',
		hidden: true,
	 },
     {
    	 fieldLabel : 'Role Name',
    	 name : 'roleName',
    	 xtype:'textfield'
     },
     {
    	xtype:'fieldset',
    	collapsible: true,
		border : true,
		bodyPadding : 10,
		autoScroll: true,	
		frame : true,	
    	 title:'Permissions',
    	 width: 500,
    	 layout:'fit',
    	 items:[{
    		 	layout:'fit',	        		 	
    		 	xtype:'permissionsGrid',
		 		id:'userRolesPermissions'
    	 }]
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
						
						var permissionsData = Ext.getCmp('userRolesPermissions').getStore().data;
						var lstPermissions = [];
						
						for(var i = 0; i< permissionsData.getCount(); i++)
							lstPermissions.push(permissionsData.getAt(i).data);
						
						if(form.owner.isEdit)							
						{
							var formValues = form.getValues();
							var routeId = formValues['id'];		
							
							
							var rec = store.findRecord('id',routeId);
							rec.set({
									  'roleName' : formValues['roleName'],
									  'lstPermissions': permissionsData										 
							});
							
							store.commitChanges();
						}
						else
						{												
													
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
