Ext.define('scholar.view.administration.settings.course.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.courseDetail',
	title : 'Course Details',
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
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
	items : [  {
		fieldLabel : 'Course Id',
		name : 'id',
		hidden: true
	}, {
		fieldLabel : 'Course Code',
		name : 'courseCode'
	}, {
		fieldLabel : 'Course Name',
		name : 'courseName'
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
								var routeId = formValues['id'];		
								
								var rec = store.findRecord('id',routeId);
								rec.set({
										  'courseCode' : formValues['courseCode'],
										  'courseName': formValues['courseName']										 
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
