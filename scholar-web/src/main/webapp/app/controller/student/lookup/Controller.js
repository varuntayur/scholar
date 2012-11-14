Ext.define('scholar.controller.student.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized student.lookup.Controller!');
		 this.control({
	            '#studentLookup': {
	            	itemdblclick: this.editStudentInfo
	            },
	            '#studentLookup button[action=viewStudentDetails]':{
	            	click: this.editStudentInfo
	            },
	            '#studentLookup button[action=viewAttendance]':{
	            	click: this.viewAttendance
	            },
	            '#studentLookup button[action=viewGrades]':{
	            	click: this.viewGrades
	            }
	        });
	},
	
	viewGrades: function(grid, record) {
                    
        var admForm = Ext.widget('studentDetail');
        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Student Grades',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },
    
    viewAttendance: function(grid, record) {
                    
        var admForm = Ext.widget('studentAttendanceReport');
//        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Student Attendance',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },
	
	editStudentInfo: function(grid, record) {
                    
        var admForm = Ext.widget('studentDetail');
        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Student Details',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },

	views : [ 'student.lookup.Lookup' ],

	stores : [ 'student.lookup.SearchStore' ],
	
	models : [ 'student.lookup.SearchModel' ]

});