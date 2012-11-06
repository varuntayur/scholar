Ext.define('scholar.controller.student.admission.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized admission.Controller!');
		 this.control({
	            '#admissionsGrid': {
	            	itemdblclick: this.editAdmissions
	            },
	            '#studentAdmission button[action=newAdmission]' :{
	            	click : this.newAdmission
	            }
	        });
	},
	
	newAdmission : function()
	{
		var admForm = Ext.widget('newAdmissionForm');
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Admission: Student Details',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
	},
	
	editAdmissions: function(grid, record) {
        console.log('Double clicked on ' + record.get('studentName'));
                    
        var admForm = Ext.widget('newAdmissionForm');
        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Admission: Student Details',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },

	views : [ 'student.admission.Manager',
	          'student.admission.NewAdmissionForm'
	          ],

	stores : [ 
	           'student.admission.SearchStore',
	           'student.admission.BloodGroupStore',
	           'student.admission.NationalityStore',
	           'student.admission.CategoryStore'
	         ],
	
	models : [ 
	           'student.admission.SearchModel',
	           'student.admission.BloodGroupModel',
	           'student.admission.NationalityModel',
	           'student.admission.CategoryModel'
	         ]

});