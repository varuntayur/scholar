Ext.define('scholar.store.staff.timetable.Store', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.timetable.Model',
    data : [
	        [ 'Monday',   'Maths', 'Social-Science', 'General-Science', 'Short-Break','English','','Lunch','Hindi','Library' ],
			[ 'Tuesday',  'Social-Science', 'Maths', '', 'Short-Break','General-Science','','Lunch','','Moral-Science' ],
			[ 'Wednesday', 'English', 'General-Science', 'Maths', 'Short-Break','','General-Science','Lunch','','Physical-Training'  ],
			[ 'Thursday', 'General-Science', 'Hindi', '', 'Short-Break','Maths','Kannada','Lunch','English','Games' ],
	        [ 'Friday',   'Hindi', 'Kannada', 'Social-Science', 'Short-Break','General-Science','Maths','Lunch','English','Crafts/Hobbies' ],
	        [ 'Saturday', 'Social-Science', 'Maths', 'General-Science', 'Short-Break' ],
	        [ 'Sunday' ]
	      ],
	autoLoad: true
});