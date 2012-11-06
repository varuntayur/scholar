Ext.define('scholar.view.staff.event.EventDetail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.eventDetail',
	title : 'Event Detail',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	items : [ {
				name: 'eventName',
				fieldLabel:'Event Name'
					
				},
				{
					name: 'eventDescription',
					xtype:'textarea',
					fieldLabel:'Event Description'
				},
				{
					xtype : 'datefield',
					fieldLabel : 'Event Start Date',
					name : 'eventStartDate'
				},
				{
					xtype : 'datefield',
					fieldLabel : 'Event End Date',
					name : 'eventEndDate'
				}
				],
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
							
							Ext.MessageBox.alert('Success!','Your request has been saved.');
						}
					}
				} ]
});
