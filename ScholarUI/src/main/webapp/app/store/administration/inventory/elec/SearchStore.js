Ext.define('scholar.store.administration.inventory.elec.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.inventory.elec.SearchModel',
    data : [
			[ 'Monitors', 'Samsung','15" LCD','100'	,'9/1 12:00am' ],
			[ 'Monitors', 'Samsung','15" CRT','150'	,'9/1 12:00am' ],
			[ 'Monitors', 'LG','17" CRT','100'	,'9/1 12:00am' ],
			[ 'CPU', 'IBM','z122',	'250','9/1 12:00am' ],
			[ 'Server', 'IBM Blade','x1','2'	,'9/1 12:00am' ] ],
	autoLoad: true
});