Ext.define('scholar.view.student.admission.NewAdmissionFormThird', {
	extend : 'Ext.form.Panel',
	alias : 'widget.newAdmissionFormThird',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side',
		defaultType : 'textfield',
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	items : [ {
		xtype : 'fieldcontainer',
		fieldLabel : 'Previous Institution',
		labelStyle : 'font-weight:bold;padding:0',
		layout : 'hbox',
		defaultType : 'textfield',

		fieldDefaults : {
			labelAlign : 'top'
		},

		items : [ {
			width: 75,
			name : 'instName',
			fieldLabel : 'Name',
			allowBlank : false
		}, {
			width : 75,
			name : 'courseName',
			fieldLabel : 'Course',
			margins : '0 0 0 5'
		}, {
			width: 75,
			name : 'marks',
			fieldLabel : 'Marks',
			allowBlank : false,
			margins : '0 0 0 5'
		} ]
	}, {
		xtype : 'textareafield',
		fieldLabel : 'Other Details',
		allowBlank : true
	} ],

	buttons : [
			{
				text : 'Cancel',
				handler : function() {
					this.up('form').getForm().reset();
					this.up('window').hide();
				}
			},
			,
			{
				text : ' < Back',
				handler : function() {
					this.up('window').hide();
					Ext.create('Ext.Window', {
						xtype : 'window',
						closable : true,
						minimizable : false,
						title : 'New Admission',
						layout:'fit',
						minHeight: 400,
						minWidth: 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'hide',
						constrain : true,
						items : [ {
							xtype : 'newAdmissionFormSecond'
						} ]
					}).show();
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
