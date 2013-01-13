Ext.define('scholar.view.administration.settings.subject.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 
			'scholar.view.administration.settings.subject.Detail',
			'scholar.view.administration.settings.subject.Search'
			],
	alias: 'widget.subjectManager',
	title:'Subject',			
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
				xtype : 'subjectSearch',
				region:'center'			
			}
			]
});
