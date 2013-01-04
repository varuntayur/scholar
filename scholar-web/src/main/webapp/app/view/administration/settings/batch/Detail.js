Ext.define('scholar.view.administration.settings.batch.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.batchDetail',
	title : 'Batch details',
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
	items : [ {
		fieldLabel : 'Id',
		name : 'id',
		hidden: true
	},
	         {
	        	 xtype:'fieldset',
	        		border : false,
	        		bodyPadding : 10,
	        		autoScroll: true,	
	        		frame : true,	
	        	 title:'Batch Information',
	        	 items:[ {
	        			fieldLabel : 'Id',
	        			name : 'id',
	        			hidden: true
	        		},{
						fieldLabel : 'Batch Name',
						name : 'batchName'
					}, 
					{
						xtype:'combo',
						fieldLabel : 'Course Name',
						store : 'administration.settings.course.Store',
						queryMode : 'local',
						displayField : 'courseName',
						valueField : 'abbr',
						name:'courseName'
					},
					{
						fieldLabel : 'Section',
						name : 'section'
					}, {
						xtype : 'datefield',
						fieldLabel : 'Start Date',
						name : 'startDate'
					}, {
						xtype : 'datefield',
						fieldLabel : 'End Date',
						name : 'endDate'
					}
					]
	         },
	         {
	        	 xtype:'fieldset',
	        	 collapsible: true,
        		border : false,
        		bodyPadding : 10,
        		autoScroll: true,	
        		frame : true,	
	        	 title:'Subject Information',
	        	 width: 500,
	        	 layout:'fit',
	        	 items:[{
	        		 	layout:'fit',	        		 	
	        		 	xtype:'subjectManager'
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
