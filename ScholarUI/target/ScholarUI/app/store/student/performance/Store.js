Ext.define('scholar.store.student.performance.Store', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.student.performance.Model',
	data : [
			[ '001/001', 'Amar', 'Standard 1', '2012','4/5 12:00am', '1/4 12:00am' ],
			[ '001/002', 'Ishaan', 'Standard 2', '2012','10/5 12:00am', '1/4 12:00am' ],
			[ '001/005', 'Pran', 'Standard 3', '2012','8/5 12:00am', '1/4 12:00am' ],
			[ '001/010', 'Vishnu', 'Standard 1', '2012','9/5 12:00am', '1/4 12:00am' ],
			[ '010/234', 'Sri Hari', 'Standard 5', '2012','13/5 12:00am', '1/4 12:00am' ],
			[ '111/286', 'Shiva', 'Standard 8', '2012','1/5 12:00am', '1/4 12:00am' ],
			[ '101/234', 'Jyestha', 'Standard 9', '2012','1/5 12:00am', '1/4 12:00am' ],
			[ '201/002', 'Laksha', 'Standard 10', '2012','4/5 12:00am', '1/4 12:00am' ],
			[ '501/004', 'Sangeetha', 'Standard 4', '2012','17/5 12:00am', '1/4 12:00am' ],
			[ '116/006', 'Shwetha', 'Standard 1', '2012','18/5 12:00am', '1/4 12:00am' ],
			[ '145/007', 'Sushma', 'Standard 7', '2012','19/5 12:00am', '1/4 12:00am' ],
			[ '723/007', 'Santhosh', 'Standard 5', '2012','1/9 12:00am', '1/8 12:00am' ]
		   ],
	autoLoad: true
});