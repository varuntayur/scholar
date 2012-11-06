Ext.define('scholar.view.administration.settings.batch.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.batchDetail',
	title : 'Batch details',
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,	
	frame : true,	
	items : [
	         {
	        	 xtype:'fieldset',
	        		border : false,
	        		bodyPadding : 10,
	        		autoScroll: true,	
	        		frame : true,	
	        	 title:'Batch Information',
	        	 items:[{
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
//					, {
//						xtype : 'datefield',
//						fieldLabel : 'Last Updated',
//						name : 'lastChange'
//					}
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
//	         {
//	        	 xtype:'panel',
//	        	 region:'center',
//	        	 items:[{
//							fieldLabel : 'Batch Name',
//							name : 'batchName'
//						}, 
//						{
//							xtype:'combo',
//							fieldLabel : 'Course Name',
//							store : 'administration.settings.course.Store',
//							queryMode : 'local',
//							displayField : 'courseName',
//							valueField : 'abbr'
//						},
//						{
//							fieldLabel : 'Section',
//							name : 'section'
//						}, {
//							xtype : 'datefield',
//							fieldLabel : 'Start Date',
//							name : 'lastChange'
//						}, {
//							xtype : 'datefield',
//							fieldLabel : 'End Date',
//							name : 'lastChange'
//						}, {
//							xtype : 'datefield',
//							fieldLabel : 'Last Updated',
//							name : 'lastChange'
//						}]
//	         },
//	         {
//	        	 title: 'Subject Setting',	        	 
//	        	 xtype:'subjectManager',
//	        	 region:'south',
//	        	 layout:'fit'
//	         }	         
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
