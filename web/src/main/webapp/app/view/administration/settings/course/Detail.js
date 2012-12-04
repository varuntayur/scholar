Ext.define('scholar.view.administration.settings.course.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.courseDetail',
	title : 'Course Details',
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Course Code',
		name : 'courseCode'
	}, {
		fieldLabel : 'Course Name',
		name : 'courseName'
	}, {
		xtype : 'datefield',
		fieldLabel : 'Last Updated',
		name : 'lastChange'
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
							Ext.MessageBox.alert('Success!',
									'Your request has been saved.');
						}
					}
				} ]
});
