Ext.define('scholar.store.library.lookup.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.library.lookup.SearchModel',
    data : [
	        [ '001-005X-3413', 'Fun with Mathematics 1', 'Oxford', 'Agarwal', '9/1 12:00am' ],
			[ '001-006Y-321X', 'Fun with Mathematics 2', 'Oxford', 'Agarwal', '9/1 12:00am' ],
			[ '001-22-X345', 'Fun with Mathematics 3', 'Oxford', 'Agarwal', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Mathematics 4', 'Oxford', 'Agarwal', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Mathematics 5', 'Oxford', 'Agarwal', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Mathematics 6', 'Oxford', 'Agarwal', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Mathematics 7', 'Oxford', 'Agarwal', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Science 1' , 'McGraw', 'Gupta', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Science 2', 'McGraw', 'Gupta', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Science 3', 'McGraw', 'Gupta', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Science 4', 'McGraw', 'Gupta', '9/1 12:00am' ],
	        [ '001-22-X345', 'Fun with Science 5', 'McGraw', 'Gupta', '9/1 12:00am' ]
	       ],
	autoLoad: true
});