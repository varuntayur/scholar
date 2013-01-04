Ext.define('scholar.view.administration.settings.nationality.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 
			'scholar.view.administration.settings.nationality.Detail',
			'scholar.view.administration.settings.nationality.Search'
			],
	alias: 'widget.nationalityManager',
	title:'Nationality',			
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
				xtype : 'nationalitySearch',
				region:'center'			

			}
			]
});
