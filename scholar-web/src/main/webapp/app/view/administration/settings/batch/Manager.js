Ext.define('scholar.view.administration.settings.batch.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 
			'scholar.view.administration.settings.batch.Detail',
			'scholar.view.administration.settings.batch.Search',
			'scholar.view.administration.settings.batch.SubjectSearch'
			],
	alias: 'widget.batchManager',
	title:'Batch',			
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
				xtype : 'batchSearch',
				region:'center'			

			}
			]
});
