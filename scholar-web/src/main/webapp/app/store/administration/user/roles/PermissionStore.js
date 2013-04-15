Ext.define('scholar.store.administration.user.roles.PermissionStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.user.roles.PermissionSearch',
    data : [
            [ 0, 'Student Admissions',false,false,false  ],
			[ 0, 'Student Attendance',false,false,false  ],
			[ 0, 'Student Lookup',false,false,false  ],
			[ 0, 'Staff Attendance',false,false,false  ],
			[ 0, 'Staff Events/Memo',false,false,false  ],
			[ 0, 'Staff - Examination',false,false,false  ],
			[ 0, 'Staff Leave Absence',false,false,false  ],
			[ 0, 'Staff - Lookup',false,false,false  ],
			[ 0, 'Staff Time table',false,false,false  ],
			[ 0, 'Parent',false,false,false  ],
			[ 0, 'Library OPAC',false,false,false  ],
			[ 0, 'Finance Fee Collection',false,false,false  ],
			[ 0, 'Finance Payroll',false,false,false  ],
			[ 0, 'Finance Settings',false,false,false  ],
			[ 0, 'Administration Inventory',false,false,false  ],
			[ 0, 'Administration Settings',false,false,false  ],
			[ 0, 'Administration User/Role',false,false,false  ],
			[ 0, 'Transport Vehicle',false,false,false ],
			[ 0, 'Transport	Route',false,false,false ]
		   ],
	autoLoad: true

});