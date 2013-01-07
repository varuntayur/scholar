Ext.define('scholar.controller.administration.settings.subject.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized settings.subject.Controller!');
		this.control({
			'#settingsSubjectSearch' : {
				itemdblclick: this.editSubjectSettings
			},
			
			'subjectManager button[action=add]' : {
            	click: this.addSubject
            },
            'subjectManager button[action=delete]' : {
            	click: this.deleteSubject
            }
		});
	},
	
	deleteSubject: function()
	{
		
	},
	
	addSubject: function()
	{
		var admForm = Ext.widget('subjectDetail',{ store: this.getAdministrationSettingsSubjectSearchStoreStore() });
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Subject Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	editSubjectSettings: function(grid, record)
	{
         
		  var admForm = Ext.widget('subjectDetail',{ store: this.getAdministrationSettingsSubjectSearchStoreStore(), isEdit: true  });
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Subject Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.settings.subject.Manager','administration.settings.subject.Detail' ],

	stores : [ 'administration.settings.subject.SearchStore' ],

	models : [ 'administration.settings.subject.SubjectSearch' ]

});