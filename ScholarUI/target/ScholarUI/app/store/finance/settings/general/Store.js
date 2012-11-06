Ext.define('scholar.store.finance.settings.general.Store', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.finance.settings.general.Model',
	data : [ ['2012-04-01','2013-03-31'] ],
	autoLoad: true
});