Ext.define('scholar.view.administration.settings.department.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 
			'scholar.view.administration.settings.department.Detail',
			'scholar.view.administration.settings.department.Search'
			],
	alias: 'widget.departmentManager',
	title:'Department',			
	frame : false,
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
				xtype : 'departmentSearch',
				region:'center'			

			}
			],
});
