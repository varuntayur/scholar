Ext.define('scholar.view.administration.settings.course.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.administration.settings.course.Detail',
	 			'scholar.view.administration.settings.course.Search'
	 			],
	alias : 'widget.courseManager',
	title:'Course',
	frame : true,
	bodyPadding : 5,
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [{
				xtype : 'courseSearch',
				region:'center'			
			
			}
			]
});
