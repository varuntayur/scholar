Ext.define('scholar.controller.administration.settings.subject.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized settings.subject.Controller!');
		this.control({
			'#subjectSearch' : {
				itemdblclick: this.editSubjectSettings,
				render:this.loadSubjectSettings
			},
			
			'subjectManager button[action=add]' : {
            	click: this.addSubject
            },
            'subjectManager button[action=delete]' : {
            	click: this.deleteSubject
            }
		});
	},
	
	loadSubjectSettings : function()
	{
		this.getAdministrationSettingsSubjectSearchStoreStore().loadPage(1);
	},
	
	deleteSubject: function()
	{
		var store = this.getAdministrationSettingsSubjectSearchStoreStore();
		var selection = Ext.ComponentQuery.query('#subjectSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
       store.loadPage(1);
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