Ext.define('scholar.controller.library.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized library.lookup.Controller!');
		 this.control({
	            '#librarySearch': {
	            	itemdblclick: this.viewBookInfo
	            }
	        });
	},
	
	viewBookInfo: function(grid, record)
	{
		console.log('Double clicked on ' + record.get('bookName'));
        
        var admForm = Ext.widget('bookDetail');
        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Book Details',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
	},

	views : [ 'library.lookup.Lookup' ],

	stores : [ 'library.lookup.SearchStore' ],
	
	models : [ 'library.lookup.SearchModel' ]

});