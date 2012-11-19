Ext.define('scholar.controller.student.admission.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized admission.Controller!');
		 this.control({
	            '#admissionsGrid': {
	            	itemdblclick: this.editAdmissions
	            },
	            '#admissionsGrid button[action=newAdmission]' :{
	            	click : this.newAdmission
	            },
	            '#admissionsGrid button[action=deleteAdmission]' :{
	            	click : this.deleteAdmission
	            }
	        });
	},
	
	newAdmission : function()
	{
		var admForm = Ext.widget('newAdmissionForm',{ store: this.getStudentAdmissionSearchStore() });
        
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
	
	deleteAdmission : function(grid, record) {
		console.log(record);
		var store = this.getStudentAdmissionSearchStore();
		var selection = Ext.ComponentQuery.query('#admissionsGrid')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
	},
	
	editAdmissions: function(grid, record) {
        console.log('Double clicked on ' + record.get('studentName'));
                    
        var admForm = Ext.widget('newAdmissionForm',{ store: this.getStudentAdmissionSearchStore() });
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
	           'student.admission.Search',
	           'student.admission.BloodGroup',
	           'student.admission.Nationality',
	           'student.admission.Category'
	         ],
	
	models : [ 
	           'student.admission.Search',
	           'student.admission.BloodGroup',
	           'student.admission.Nationality',
	           'student.admission.Category'
	         ]

});