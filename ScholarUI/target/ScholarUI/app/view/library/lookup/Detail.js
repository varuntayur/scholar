Ext.define('scholar.view.library.lookup.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.bookDetail',
	title : 'Book details',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	items : [ {
		name : 'isbn',
		fieldLabel : 'ISBN'
	}, {
		name : 'bookName',
		fieldLabel : 'Book Name'
	}, {
		name : 'publisher',
		fieldLabel : 'Publisher'
	}, {
		name : 'author',
		fieldLabel : 'Author'
	}, {
		name : 'addedDate',
		fieldLabel : 'Added Date',
		dateFormat : 'n/j h:ia'
	}]
});
