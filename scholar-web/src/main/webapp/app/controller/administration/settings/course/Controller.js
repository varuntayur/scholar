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
		
	},
	
	addCourse: function()
	{
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
			items : [ {
				xtype : 'courseDetail'
			} ]
		}).show();
	},
	
	editCourseSettings: function(grid, record)
	{
		 console.log('Double clicked on ' + record.get('courseName'));
         
	        var admForm = Ext.widget('courseDetail');
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
	
	models : [ 'administration.settings.course.Model',
	           'administration.settings.course.SearchModel'
	         ]

});