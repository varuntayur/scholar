Ext.define('scholar.store.student.lookup.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.student.lookup.SearchModel',
    data : [ 
			[ '001/001', 'Amar', 'Standard 1', 	  'Blore', '9/1 12:00am' ],
			[ '001/002', 'Ishaan', 'Standard 2',  'Blore', '9/1 12:00am' ],
			[ '001/005', 'Pran', 'Standard 3',    'Blore', '9/1 12:00am' ], 
			[  '001/010', 'Vishnu', 'Standard 1',  'Blore', '9/1 12:00am' ],
			[  '010/234', 'Sri Hari', 'Standard 5','Blore', '9/1 12:00am' ],
			[  '111/286', 'Shiva', 'Standard 8',   'Blore', '9/1 12:00am' ],
			[  '101/234', 'Jyestha', 'Standard 9', 'Blore', '9/1 12:00am' ],
			[  '201/002', 'Laksha', 'Standard 10', 'Blore', '9/1 12:00am' ],
			[  '501/004', 'Sangeetha', 'Standard 4','Blore', '9/1 12:00am' ],
			[ '116/006', 'Shwetha', 'Standard 1', 'Blore', '9/1 12:00am' ],
			[ '145/007', 'Sushma', 'Standard 7',  'Blore', '9/1 12:00am' ],
			[ '723/007', 'Santhosh', 'Standard 5','Blore', '9/1 12:00am' ]
	       ],
	autoLoad: true
});