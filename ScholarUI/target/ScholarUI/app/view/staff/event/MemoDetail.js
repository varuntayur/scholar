Ext.define('scholar.view.staff.event.MemoDetail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.memoDetail',
	title : 'Memo Detail',
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
				name: 'memoName',
				fieldLabel:'Memo Title'
			},
			{
				name: 'memoDescription',
				fieldLabel:'Memo Text',
				xtype:'textarea'
			},
			{
				xtype : 'datefield',
				fieldLabel : 'Memo Date',
				name : 'memoDate'
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
					text : 'Save',
					handler : function() {
						if (this.up('form').getForm().isValid()) {
							
							this.up('window').hide();
							
							Ext.MessageBox.alert('Success!','Your request has been saved.');
						}
					}
				} ]
});
