Ext.define('scholar.controller.staff.examination.schedule.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized examination.schedule.Controller!');
		
		this.control({
            '#examScheduleSearchGrid': {
            	itemdblclick: this.editExaminationSchedule
            },
            'scheduleSearch button[action=add]' : {
            	click: this.addSchedule
            },
            'scheduleSearch button[action=delete]' : {
            	click: this.deleteSchedule
            }
            
        });
	},
	
	deleteSchedule: function()
	{
		
	},
	
	addSchedule: function()
	{
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Exam Schedule Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ {
				xtype : 'scheduleDetail'
			} ]
		}).show();
	},
	
	editExaminationSchedule: function(grid, record) {
        console.log('Double clicked on ' + record.get('courseName'));
                    
        var admForm = Ext.widget('scheduleDetail');
        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Exam Schedule Details',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },

	views : [ 'staff.examination.schedule.Search',
	          'staff.examination.schedule.Detail' ],

	stores : [ 'staff.examination.schedule.SearchStore' ],
	
	models : [ 'staff.examination.schedule.SearchModel' ]

});