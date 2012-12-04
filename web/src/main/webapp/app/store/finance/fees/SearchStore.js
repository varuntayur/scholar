Ext.define('scholar.store.finance.fees.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.finance.fees.SearchModel',
    data : [
			[ '001/001', 'Amar',  '9/1 12:00am' ],
			[ '001/002', 'Ishaan', '9/1 12:00am' ],
			[ '001/005', 'Pran',  '9/1 12:00am' ], 
			[  '001/010', 'Vishnu', '9/1 12:00am' ],
			[  '010/234', 'Sri Hari', '9/1 12:00am' ],
			[  '111/286', 'Shiva',  '9/1 12:00am' ],
			[  '101/234', 'Jyestha', '9/1 12:00am' ],
			[  '201/002', 'Laksha', '9/1 12:00am' ],
			[  '501/004', 'Sangeetha', '9/1 12:00am' ],
			[ '116/006', 'Shwetha',  '9/1 12:00am' ],
			[ '145/007', 'Sushma', '9/1 12:00am' ],
			[ '723/007', 'Santhosh', '9/1 12:00am' ]
	       ],
	autoLoad: true
});