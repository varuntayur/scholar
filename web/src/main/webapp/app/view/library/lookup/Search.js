Ext.define('scholar.view.library.lookup.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.librarySearch',
	store : 'library.lookup.SearchStore',
	id:'librarySearch',
	columnLines : true,
	columns : [ {
		text : 'ISBN',
		flex : 1,
		sortable : false,
		dataIndex : 'isbn'
	}, {
		text : 'Name',
		width : 75,
		flex : 1,
		sortable : true,
		dataIndex : 'bookName'
	}, {
		text : 'Publisher',
		width : 75,
		sortable : true,
		dataIndex : 'publisher'
	}, {
		text : 'Author',
		width : 75,
		sortable : true,
		dataIndex : 'author'
	}, {
		xtype : 'datecolumn',
		text : 'Date Added',
		width : 85,
		sortable : true,
		dataIndex : 'addedDate'
	} ],
	viewConfig : {
		stripeRows : true
	}
});

