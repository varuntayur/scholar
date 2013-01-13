Ext.define('scholar.view.administration.settings.department.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.departmentDetail',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
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
		xtype : 'textfield',
		hidden: true
	},{
		xtype : 'textfield',
		fieldLabel : 'Department Name',
		name:'departmentName'
	}],
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
									  'departmentName' : formValues['departmentName']
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
