Ext.define('scholar.view.administration.settings.general.Manager', {
	extend : 'Ext.form.Panel',
	alias : 'widget.generalSettingsManager',
	title:'Institution',
	id:'adminInstitutionDetails',
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
	store: null,
	initComponent: function() {
	        var me = this;
	        console.log('administration.settings.general.Manager store init');
	        var theStore = Ext.create('scholar.store.administration.settings.general.Store');
	        Ext.apply(me, {
	            store: theStore
	        }); 
	        this.store = theStore;
	        me.callParent();
	},
    defaultType: 'textfield',
	items: [
	        {
		        fieldLabel: 'id',
		        name: 'id',
		        allowBlank: true,
		        hidden: true
		        
	        },
	        {
		        fieldLabel: 'Name',
		        name: 'name',
		        allowBlank: false
	        },
	        {
		        fieldLabel: 'Address',
		        name: 'address',
		        allowBlank: false
	        },
	        {
		        fieldLabel: 'Phone',
		        name: 'phone',
		        allowBlank: false
	        },
	        {
		        fieldLabel: 'Fax',
		        name: 'fax',
		        allowBlank: false
	        },
	        {
	            xtype: 'filefield',
	            emptyText: 'Select an image',
	            fieldLabel: 'Logo',
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
	      					this.getForm().reset();
	      					
	      				}
	      			},
	      			{
	      				text : 'Save',
	      				handler : function() {
	      					var form = this.up().up().getForm();
	    					if (form.isValid()) {
	    						
	    						var store = form.owner.store;
	    						
	    						var formValues = form.getValues();
    							var instId = formValues['id'];		
	    						
	    						if(instId)							
	    						{
	    							var formValues = form.getValues();
	    							
	    							var rec = store.findRecord('id',instId);
	    							rec.set({
	    									  'name' : formValues['name'],
	    									  'address': formValues['address'],
	    									  'phone': formValues['phone'],
	    									  'fax': formValues['fax'],
	    							});
	    							
	    							store.commitChanges();
	    						}
	    						else
	    						{
	    							var rec = new store.model(form.getValues());
	    							store.add(rec);
	    						}
	    						
	    						Ext.MessageBox.alert('Success!',
	    								'Your request has been saved.');
	    						
	    						store.load({
	    						    scope   : this,
	    						    callback: function(records, operation, success) {
	    						        console.log(records);
	    						        form.loadRecord(records[0]);
	    						    }
	    						});
	    						
	    					}
	      					
      						
	      				}
	 } ]
});
