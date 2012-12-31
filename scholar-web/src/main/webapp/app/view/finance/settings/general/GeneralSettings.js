Ext.define('scholar.view.finance.settings.general.GeneralSettings', {
	extend : 'Ext.form.Panel',
	alias : 'widget.financeGeneralSettingsTab',
	title:'General',
	frame : true,
	bodyPadding : 5,
	layout: 'anchor',
    defaults: {
        anchor: '30%'
    },
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
    defaultType: 'textfield',
	items: [ {
		fieldLabel : 'Id',
		name : 'id',
		hidden: true
	},
	        {
	    		xtype : 'datefield',
	    		name:'finYearStartDate',
	    		fieldLabel : 'Financial Year Start Date'
	    	},
	    	{
	    		xtype : 'datefield',
	    		name:'finYearEndDate',
	    		fieldLabel : 'Financial Year End Date'
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
	      					if (this.up('form').getForm().isValid()) {
	      						Test.sayHello("boom", {
	      							callback: function(data) { console.log(data);  }
	      						}); 
	      						Ext.MessageBox.alert('Success!',
	      								'Your request has been saved.');
	      					}
	      				}
	      			} ]
});
