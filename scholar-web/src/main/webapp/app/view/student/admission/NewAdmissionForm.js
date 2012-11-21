Ext.define('scholar.view.student.admission.NewAdmissionForm', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.student.admission.NewAdmissionFormSecond'],
	alias : 'widget.newAdmissionForm',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
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
	items : [ 
	          {
		xtype : 'textfield',
		fieldLabel : 'Admission Id',
		name: 'admissionId'
	},{
		xtype : 'datefield',
		fieldLabel : 'Admission Date',
		name: 'admissionDate'
	},
	{
		xtype : 'textfield',
		fieldLabel : 'Admission Number',
		name: 'admissionNumber'
	},
	{
		xtype : 'textfield',
		name:'studentName',
		fieldLabel : 'Name',
		allowBlank : true
	},
	{
		xtype : 'radiogroup',
		fieldLabel : 'Sex',
		columns : 2,
		items : [ {
			boxLabel : 'Male',
			name : 'sex',
			inputValue : 'Male',
			checked : true
		}, {
			boxLabel : 'Female',
			name : 'sex',
			inputValue : 'Female'
		} ]
	},
	{
		xtype:'combo',
		fieldLabel : 'Blood Group',
		store :'student.admission.BloodGroup', 
		queryMode : 'local',
		displayField : 'bloodGroupName',
		valueField : 'bloodGroupName',
		name:'bloodGroupName'
	},
	{
		xtype:'combo',
		fieldLabel : 'Nationality',
		store : 'student.admission.Nationality',
		queryMode : 'local',
		displayField : 'nationality',
		valueField : 'nationality',
		name:'nationality'
	},
	{
		xtype:'combo',
		fieldLabel : 'Category',
		store :'student.admission.Category',
		queryMode : 'local',
		displayField : 'categoryName',
		valueField : 'abbr',
		name:'categoryName'
	},
	{
		xtype:'combo',
		fieldLabel : 'Course',
		store : 'administration.settings.course.Store',
		queryMode : 'local',
		name:'courseName',
		displayField : 'courseName',
		valueField : 'abbr'
	},
	{
		xtype:'combo',
		fieldLabel : 'Batch',
		store : 'administration.settings.batch.Store',
		name:'batchName',
		queryMode : 'local',
		displayField : 'batchName',
		valueField : 'abbr'
	},
	{
		xtype : 'textfield',
		fieldLabel : 'Email Address',
		vtype : 'email',
		allowBlank : true
	}, {
		xtype : 'textareafield',
		fieldLabel : 'Address',
		margins : '0',
		allowBlank : true
	}, {
		xtype : 'datefield',
		fieldLabel : 'Date of Birth'
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
				text : 'Next >',				
				handler : function() {
					if (this.up('form').getForm().isValid()) {
						var form = this.up('form').getForm();
						if (form.isValid()) {
							
							var store = this.up().up().store; 
							
							if(form.owner.isEdit)							
							{
								var formValues = form.getValues();
								var routeId = formValues['admissionId'];		
								
								var rec = store.findRecord('admissionId',routeId);
								rec.set({
										  'admissionNumber' : formValues['admissionNumber'],
										  'admissionDetails': formValues['admissionDetails']
								});
								
								//store.commitChanges();
							}
							else
							{
								var rec = new store.model(form.getValues());
								store.add(rec);
							}
//							store.load();							
							this.up('window').hide();
							
							var admForm = Ext.widget('newAdmissionFormSecond',{ store: store });
							
							Ext.create('Ext.Window', {
								xtype : 'window',
								closable : true,
								minimizable : false,
								title : 'New Admission: Parent Details',
								layout:'fit',
								minHeight: 400,
								minWidth: 400,
								autoScroll : true,
								autoRender: true,
								closeAction : 'hide',
								constrain : true,
								items : [ admForm ]
							}).show();
						}
					}
				}
			} ]
});
