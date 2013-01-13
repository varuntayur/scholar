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
		xtype : 'textfield',
		fieldLabel : 'Id',
		name : 'id',
		hidden: true
	}, {
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
			fields : [ 'required', 'name' ],
			data : [ {
				'required' : true,
				'name' : "Yes"
			}, {
				'required' : false,
				'name' : "No"
			} ]
		}),
		name:'examinationRequired',
		queryMode : 'local',
		displayField : 'name',
		valueField : 'required'
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
					var form = this.up('form').getForm();
					if (form.isValid()) {
						
						var store = this.ownerCt.ownerCt.store; 
						
						if(form.owner.isEdit)							
						{
							var formValues = form.getValues();
							var recId = formValues['id'];		
							
							var rec = store.findRecord('id',recId);
							rec.set({
									  'subjectName' : formValues['subjectName'],
									  'subjectCode' : formValues['subjectCode'],
									  'examinationRequired' : formValues['examinationRequired'],
									  'startDate' : formValues['startDate'],
									  'endDate' : formValues['endDate']
							});
							
							store.commitChanges();
						}
						else
						{
							var rec = new store.model(form.getValues());
							store.add(rec);
						}
						this.up('window').hide();
						Ext.MessageBox.alert('Success!',
								'Your request has been saved.');
						store.load();
					}
				}
			} ]
});
