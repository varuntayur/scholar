Ext.define('scholar.view.student.lookup.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.studentDetail',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Admission Number',
		name : 'admissionNumber'
	}, {
		fieldLabel : 'Student Name',
		name : 'studentName'
	}, {
		fieldLabel : 'Standard',
		name : 'standard'
	}, {
		xtype : 'textarea',
		fieldLabel : 'Address',
		name : 'address'
	}, {
		xtype : 'datefield',
		fieldLabel : 'End Date',
		name : 'lastChange'
	}]	
});
