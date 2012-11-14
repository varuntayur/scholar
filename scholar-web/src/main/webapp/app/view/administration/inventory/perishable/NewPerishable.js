Ext.define('scholar.view.administration.inventory.perishable.NewPerishable', {
	extend : 'Ext.form.Panel',
	alias : 'widget.newPerishable',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [
	{ 
		xtype:'combo',
		fieldLabel : 'Course Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Standard 1"
			}, {
				"abbr" : "AL",
				"name" : "Standard 2"
			}, {
				"abbr" : "AL",
				"name" : "B.E"
			}]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Batch Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Batch 1"
			}, {
				"abbr" : "AL",
				"name" : "Batch 2"
			}]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Subject Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Subject 1"
			}, {
				"abbr" : "AL",
				"name" : "Subject 2"
			}]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	},
	{
		xtype : 'datefield',
		fieldLabel : 'Examination Date'
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
