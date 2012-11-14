Ext.define('scholar.view.library.lookup.Lookup', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.library.lookup.Search',
	             'scholar.view.library.lookup.Detail'],
	alias: 'widget.libraryLookup',
	layout:'fit',
    items: [{
       			xtype: 'librarySearch',
    		}]
});

