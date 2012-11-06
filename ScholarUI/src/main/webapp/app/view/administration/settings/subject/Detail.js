Ext.define('scholar.view.administration.settings.subject.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.subjectDetail',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Subject Name',
		name:'subjectName'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Subject Code',
		afterLabelTextTpl : false,
		name:'subjectCode'
	},
	Ext.create('Ext.form.ComboBox', {
		fieldLabel : 'Examination Required',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Yes"
			}, {
				"abbr" : "AL",
				"name" : "No"
			} ]
		}),
		name:'examinationRequired',
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	}),
	{
		xtype : 'datefield',
		fieldLabel : 'Start Date',
		name:'startDate'
	},
	{
		xtype : 'datefield',
		fieldLabel : 'End Date',
		name:'endDate'
	}],

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
