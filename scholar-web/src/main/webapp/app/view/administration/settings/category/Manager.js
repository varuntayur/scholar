Ext.define('scholar.view.administration.settings.category.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 
			'scholar.view.administration.settings.category.Detail',
			'scholar.view.administration.settings.category.Search'
			],
	alias: 'widget.categoryManager',
	title:'Category',			
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
				xtype : 'categorySearch',
				region:'center'			

			}
			],
});
