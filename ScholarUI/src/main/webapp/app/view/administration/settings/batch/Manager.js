Ext.define('scholar.view.administration.settings.batch.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 
			'scholar.view.administration.settings.batch.Detail',
			'scholar.view.administration.settings.batch.Search'
			],
	alias: 'widget.batchManager',
	title:'Batch',			
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
				xtype : 'batchSearch',
				region:'center'			

			}
			]
});
