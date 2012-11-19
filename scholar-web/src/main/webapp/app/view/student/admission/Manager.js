Ext.define('scholar.view.student.admission.Manager', {
	extend : 'Ext.form.Panel',
	requires : ['scholar.view.student.admission.NewAdmissionForm' ,
	            'scholar.view.student.admission.Search'],
	alias : 'widget.admissionManager',
	id:'studentAdmission',
	frame : true,
	bodyPadding : 5,	
	layout : {
		type : 'border',
		padding : 5
	},
	defaults : {
		split : true
	},
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	
	title : 'Admissions',
	items : [{ 
				region:'center',
				layout:'fit',
				xtype:'admissionSearch'
			}]

});
