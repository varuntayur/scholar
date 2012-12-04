Ext.define('scholar.store.administration.user.roles.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.user.roles.SearchModel',
    data : [
			[ 'Admin', '1/5 12:00am' ],
			[ 'Staff', '9/1 12:00am' ],
			[ 'Student','9/1 12:00am' ],
			[ 'Librarian','9/1 12:00am' ],
			[ 'Driver','9/1 12:00am' ],
			[ 'Parent','9/1 12:00am' ]
		   ],
	autoLoad: true
});