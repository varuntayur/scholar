Ext.define('scholar.view.staff.examination.schedule.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.scheduleDetail',
	title : 'Schedule Details',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	items : [ { 
		xtype:'combo',
		fieldLabel : 'Course Name',
		store : 'administration.settings.course.Store',
		queryMode : 'local',
		displayField : 'courseName',
		valueField : 'abbr',
		name:'courseName'
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Batch Name',
		store :'administration.settings.batch.Store',
		queryMode : 'local',
		displayField : 'batchName',
		valueField : 'abbr',
		name:'batchName'
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Subject Name',
		store : 'administration.settings.subject.SearchStore',
		queryMode : 'local',
		displayField : 'subjectName',
		valueField : 'abbr',
		name: 'subjectName'
	},
	{
		xtype : 'datefield',
		fieldLabel : 'Examination Date',
		name : 'examDate'
	} ],
	buttons : [
				{
					text : 'Cancel',
					handler : function() {
						this.up('form').getForm().reset();
						this.up('window').hide();
					}
				},
				{
					text : 'Save',
					handler : function() {
						if (this.up('form').getForm().isValid()) {
							
							this.up('window').hide();
							
							Ext.MessageBox.alert('Success!','Your request has been saved.');
						}
					}
				} ]
});
