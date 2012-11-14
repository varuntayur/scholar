Ext.define('scholar.view.student.admission.NewAdmissionFormSecond', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.student.admission.NewAdmissionFormThird' ],
	alias : 'widget.newAdmissionFormSecond',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	items : [ {
		xtype : 'textfield',
		name:'parentName',
		fieldLabel : 'Parent Name',
		allowBlank : true
	},
	{
		xtype : 'radiogroup',
		fieldLabel : 'Relation',
		columns : 3,
		items : [ {
			boxLabel : 'Father',
			name : 'rb',
			inputValue : 'father',
			checked : true
		}, {
			boxLabel : 'Mother',
			name : 'rb',
			inputValue : 'mother'
		},
		{
			boxLabel : 'Guardian',
			name : 'rb',
			inputValue : 'guardian'
		}]
	}, 
	{
		xtype : 'textfield',
		fieldLabel : 'Email Address',
		vtype : 'email',
		allowBlank : true
	}, {
		xtype : 'textareafield',
		fieldLabel : 'Address',
		allowBlank : true
	},{
		xtype : 'numberfield',
		hideTrigger:true,
		fieldLabel : 'Mobile Number',
		allowBlank : false
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
				text : ' < Back',
				handler : function() {
					this.up('window').hide();
					Ext.create('Ext.Window', {
						xtype : 'window',
						closable : true,
						minimizable : false,
						title : 'New Admission',
						width : 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'destroy',
						constrain : true,
						items : [ {
							xtype : 'newAdmissionForm'
						} ]
					}).show();
				}
			},
			{
				text : 'Next >',
				handler : function() {
					if (this.up('form').getForm().isValid()) {
						this.up('window').hide();
						Ext.create('Ext.Window', {
							xtype : 'window',
							closable : true,
							minimizable : false,
							title : 'New Admission: Previous Education Details',
							layout:'fit',
							minHeight: 400,
							minWidth: 400,
							autoScroll : true,
							autoRender: true,
							closeAction : 'hide',
							constrain : true,
							items : [ {
								xtype : 'newAdmissionFormThird'
							} ]
						}).show();
					}
				}
			} ]
});
