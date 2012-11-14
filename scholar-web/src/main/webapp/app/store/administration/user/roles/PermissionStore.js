Ext.define('scholar.store.administration.user.roles.PermissionStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.user.roles.PermissionModel',
    data : [
			[ 'Admin',false,true,false, '1/5 12:00am' ],
			[ 'Staff',false,true,false, '9/1 12:00am' ],
			[ 'Student',false,true,false,'9/1 12:00am' ],
			[ 'Librarian',false,true,false,'9/1 12:00am' ],
			[ 'Parent',false,true,false,'9/1 12:00am' ]
		   ],
	autoLoad: true
});