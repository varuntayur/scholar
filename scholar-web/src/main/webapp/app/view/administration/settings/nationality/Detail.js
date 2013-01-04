Ext.define('scholar.view.administration.settings.nationality.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.nationalityDetail',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	items : [ {
		fieldLabel : 'Id',
		name : 'id',
		hidden: true
	}, {
		xtype : 'textfield',
		fieldLabel : 'Nationality',
		name:'nationalityName'
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
							var recId = formValues['id'];		
							
							var rec = store.findRecord('id',recId);
							rec.set({
									  'nationalityName' : formValues['nationalityName'],
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
