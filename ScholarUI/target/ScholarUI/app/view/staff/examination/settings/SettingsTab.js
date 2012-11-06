Ext.define('scholar.view.staff.examination.settings.SettingsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.examSettingsTab',
	title : 'Settings',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	items : [{
        xtype:'fieldset',
        columnWidth: 0.5,
        title: 'Grading Pattern',
        collapsible: true,
        defaults: {anchor: '100%'},
        layout: 'anchor',
        items :[{
		            xtype: 'checkboxgroup',            
		            items: [
		                {boxLabel: 'Grades Only', name: 'cb-auto-1'},
		                {boxLabel: 'Marks Only', name: 'cb-auto-2', checked: true},
		                {boxLabel: 'Grades and Marks', name: 'cb-auto-3'}            
		            ]
                }]
    }],
    buttons : [
				{
					text : 'Cancel',
					handler : function() {
					}
				},
				{
					text : 'Save',
					handler : function() {
							
							Ext.MessageBox.alert('Success!','Your request has been saved.');
					}
				} ]
});
