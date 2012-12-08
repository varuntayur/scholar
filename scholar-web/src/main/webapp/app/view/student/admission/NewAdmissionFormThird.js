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
	constructor : function() {
		return this.callParent();
	},
	constructor : function(config) {
		if (config) {
			this.store = config.store;
			this.isEdit = (typeof config.isEdit === "undefined") ? false: true;
		}
		this.callParent();
	},
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
					var form = this.up('form').getForm();
					if (form.isValid()) {
						
						var store = this.store; 
						
						if(form.owner.isEdit)							
						{
							var formValues = form.getValues();
							var routeId = formValues['admissionId'];		
							
							var rec = store.findRecord('admissionId',routeId);
							rec.set({
									  'admissionNumber' : formValues['admissionNumber'],
									  'admissionDetails': formValues['admissionDetails']
							});
							
							store.commitChanges();
						}
						else
						{
							var rec = new store.model(form.getValues());
							store.add(rec);
						}
//						store.load();
						this.up('window').hide();
						Ext.MessageBox.alert('Success!',
								'Your request has been saved.');
					}
				}
			} ]
});
