Ext.define('scholar.view.administration.settings.bloodgroup.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 
			'scholar.view.administration.settings.bloodgroup.Detail',
			'scholar.view.administration.settings.bloodgroup.Search'
			],
	alias: 'widget.bloodgroupManager',
	title:'BloodGroup',			
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
	items : [{
				xtype : 'bloodgroupSearch',
				region:'center'			

			}
			],
});
