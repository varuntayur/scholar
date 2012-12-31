Ext.define('scholar.controller.administration.settings.course.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized course.Controller!');
		
		this.control({
			'#settingsCourseSearch' : {
				itemdblclick: this.editCourseSettings
			},
			
			'courseSearch button[action=add]' : {
            	click: this.addCourse
            },
            'courseSearch button[action=delete]' : {
            	click: this.deleteCourse
            }
		});
	},
	
	deleteCourse: function()
	{
		console.log(record);
		var store = this.getAdministrationSettingsCourseSearchStore();
		var selection = Ext.ComponentQuery.query('#courseSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
	},
	
	addCourse: function()
	{
		var admForm = Ext.widget('courseDetail',{ store: this.getAdministrationSettingsCourseSearchStore() });
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Course Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	editCourseSettings: function(grid, record)
	{
	        var admForm = Ext.widget('courseDetail',{ store: this.getAdministrationSettingsCourseSearchStore(), isEdit: true  });
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Course Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.settings.course.Manager' ],

	stores : [ 'administration.settings.batch.SearchStore',
	           'administration.settings.course.SearchStore'
	         ],
	
	models : [ 'administration.settings.course.Combo',
	           'administration.settings.course.CourseSearch'
	         ]

});