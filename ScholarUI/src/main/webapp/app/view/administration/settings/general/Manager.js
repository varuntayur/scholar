Ext.define('scholar.view.administration.settings.general.Manager', {
	extend : 'Ext.form.Panel',
	alias : 'widget.generalSettingsManager',
	title:'General',
	frame : true,
	bodyPadding : 5,
	layout: 'anchor',
    defaults: {
        anchor: '50%'
    },
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
    defaultType: 'textfield',
	items: [
	        {
		        fieldLabel: 'Institution Name',
		        name: 'institutionName',
		        allowBlank: false
	        },
	        {
		        fieldLabel: 'Institution Address',
		        name: 'institutionAddress',
		        allowBlank: false
	        },
	        {
		        fieldLabel: 'Institution Phone',
		        name: 'institutionPhone',
		        allowBlank: false
	        },
	        {
		        fieldLabel: 'Institution Fax',
		        name: 'institutionPhone',
		        allowBlank: false
	        },
	        {
	            xtype: 'filefield',
	            emptyText: 'Select an image',
	            fieldLabel: 'Institution Logo',
	            name: 'photo-path',
	            buttonText: '',
	            buttonConfig: {
	                iconCls: 'upload-icon'
	            }
	        }
	       ],
	 buttons : [
	      			{
	      				text : 'Cancel',
	      				handler : function() {
	      					this.up('form').getForm().reset();
	      					
	      				}
	      			},
	      			{
	      				text : 'Save',
	      				handler : function() {
      						Ext.MessageBox.alert('Success!',
	      								'Your request has been saved.');
	      				}
	 } ]
});
