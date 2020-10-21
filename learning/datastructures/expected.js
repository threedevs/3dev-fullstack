const expected = [
	//gets the title of the first media
	'Inception',
	//gets the first media with id 2
	{
		id: 2,
		title: 'Inception',
		yearstart: 2010,
		//here yearend is undefined :(
		yearend: undefined,
		description: 'Dreamception',
		videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
		main_actor: {
			name: 'Leonardo Di Caprio',
			latest_medias: 'Inception, The Revenant', //the revenant is newer than inception, order from left to right
			older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
		},
		other_actors: [
			{
				name: 'Ellen Page',
				latest_media: 'Unthinkable',
				other_media: 'Flatliners',
			},
			{
				name: 'Tom Hardy',
				latest_media: 'Peaky Blinders',
				other_media: 'RockNRolla',
			},
		],
	},
	//gets all media with yearstart 2010 or earlier
	[
		{
			id: 2,
			title: 'Inception',
			yearstart: 2010,
			//here yearend is undefined :(
			yearend: undefined,
			description: 'Dreamception',
			videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
			main_actor: {
				name: 'Leonardo Di Caprio',
				latest_medias: 'Inception, The Revenant', //the revenant is newer than inception, order from left to right
				older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
			},
			other_actors: [
				{
					name: 'Ellen Page',
					latest_media: 'Unthinkable',
					other_media: 'Flatliners',
				},
				{
					name: 'Tom Hardy',
					latest_media: 'Peaky Blinders',
					other_media: 'RockNRolla',
				},
			],
		},
	],
	//gets the description of the media with id 2
	'Dreamception',
	//gets all media with the title "Inception" or "The Wire"
	[
		{
			id: 2,
			title: 'Inception',
			yearstart: 2010,
			//here yearend is undefined :(
			yearend: undefined,
			description: 'Dreamception',
			videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
			main_actor: {
				name: 'Leonardo Di Caprio',
				latest_medias: 'Inception, The Revenant', //the revenant is newer than inception, order from left to right
				older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
			},
			other_actors: [
				{
					name: 'Ellen Page',
					latest_media: 'Unthinkable',
					other_media: 'Flatliners',
				},
				{
					name: 'Tom Hardy',
					latest_media: 'Peaky Blinders',
					other_media: 'RockNRolla',
				},
			],
		},
		{
			id: 3,
			title: 'The Wire',
			yearstart: 2002,
			yearend: 2008,
			description: 'Baltimore',
			//videolink missing
			main_actor: {
				name: 'Stringer Bell',
				latest_medias: 'Three Thousand Years of Longing',
				older_medias: ['Luther', 'Peaky Blinders', 'RockNRolla'],
			},
			other_actors: [
				{
					name: 'Tony Soprano',
					latest_media: 'The Sopranos',
					other_media: undefined,
				},
				{
					name: 'Omar Little',
					latest_media: 'The Wire',
					other_media: undefined,
				},
			],
		},
	],
	//gets the first medias main_actor name
	'Leonardo Di Caprio',
	//gets the latest medias of the mainactor of the first media
	//with title "Inception"
	'Inception, The Revenant',
	/**
	 * gets the latest media of the mainactor of the first media with title "Inception"
	 */
	['Inception, The Revenant', 'Three Thousand Years of Longing'],
	/**
	 * gets the latest media of the first otheractor in the first media that was running in between 2004 and 2006
	 */
	'The Sopranos',
	/**
	 * gets the latest medias of the first otheractor in all medias that were running in between 2000 and 2020
	 */
	['The Sopranos'],
	/**
	 * gets all media that have otheractors or mainactors that participated in the media "Unthinkable"
	 */
	[
		{
			id: 2,
			title: 'Inception',
			yearstart: 2010,
			//here yearend is undefined :(
			yearend: undefined,
			description: 'Dreamception',
			videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
			main_actor: {
				name: 'Leonardo Di Caprio',
				latest_medias: 'Inception, The Revenant', //the revenant is newer than inception, order from left to right
				older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
			},
			other_actors: [
				{
					name: 'Ellen Page',
					latest_media: 'Unthinkable',
					other_media: 'Flatliners',
				},
				{
					name: 'Tom Hardy',
					latest_media: 'Peaky Blinders',
					other_media: 'RockNRolla',
				},
			],
		},
	],
	/**
	 * gets all names of actors(regardless otheractors or mainactors) that have participated in the media "Peaky Blinders"
	 */
	['Tom Hardy', 'Stringer Bell'],
	/**
	 * checks if media only contains objects that are only having unique ids
	 */
	true,
	/**
	 * sanitizes the yearend field to be the number 0 if a falsy value is given (remember what a falsy value is)
	 */
	[
		{
			id: 2,
			title: 'Inception',
			yearstart: 2010,
			//here yearend is undefined :(
			yearend: 0,
			description: 'Dreamception',
			videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
			main_actor: {
				name: 'Leonardo Di Caprio',
				latest_medias: 'Inception, The Revenant', //the revenant is newer than inception, order from left to right
				older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
			},
			other_actors: [
				{
					name: 'Ellen Page',
					latest_media: 'Unthinkable',
					other_media: 'Flatliners',
				},
				{
					name: 'Tom Hardy',
					latest_media: 'Peaky Blinders',
					other_media: 'RockNRolla',
				},
			],
		},
		{
			id: 3,
			title: 'The Wire',
			yearstart: 2002,
			yearend: 2008,
			description: 'Baltimore',
			//videolink missing
			main_actor: {
				name: 'Stringer Bell',
				latest_medias: 'Three Thousand Years of Longing',
				older_medias: ['Luther', 'Peaky Blinders', 'RockNRolla'],
			},
			other_actors: [
				{
					name: 'Tony Soprano',
					latest_media: 'The Sopranos',
					other_media: undefined,
				},
				{
					name: 'Omar Little',
					latest_media: 'The Wire',
					other_media: undefined,
				},
			],
		},
	],
	/**
	 * adds a videolink field if its missing, initialize it to an empty string
	 */
	[
		{
			id: 2,
			title: 'Inception',
			yearstart: 2010,
			//here yearend is undefined :(
			yearend: undefined,
			description: 'Dreamception',
			videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
			main_actor: {
				name: 'Leonardo Di Caprio',
				latest_medias: 'Inception, The Revenant', //the revenant is newer than inception, order from left to right
				older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
			},
			other_actors: [
				{
					name: 'Ellen Page',
					latest_media: 'Unthinkable',
					other_media: 'Flatliners',
				},
				{
					name: 'Tom Hardy',
					latest_media: 'Peaky Blinders',
					other_media: 'RockNRolla',
				},
			],
		},
		{
			id: 3,
			title: 'The Wire',
			yearstart: 2002,
			yearend: 2008,
			description: 'Baltimore',
			videolink: '',
			main_actor: {
				name: 'Stringer Bell',
				latest_medias: 'Three Thousand Years of Longing',
				older_medias: ['Luther', 'Peaky Blinders', 'RockNRolla'],
			},
			other_actors: [
				{
					name: 'Tony Soprano',
					latest_media: 'The Sopranos',
					other_media: undefined,
				},
				{
					name: 'Omar Little',
					latest_media: 'The Wire',
					other_media: undefined,
				},
			],
		},
	],
	/**
	 * converts the latest_medias field of the mainactor to an array instead of string (each entry in the array is a media)
	 */
	[
		{
			id: 2,
			title: 'Inception',
			yearstart: 2010,
			//here yearend is undefined :(
			yearend: undefined,
			description: 'Dreamception',
			videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
			main_actor: {
				name: 'Leonardo Di Caprio',
				latest_medias: ['Inception', 'The Revenant'], //the revenant is newer than inception, order from left to right
				older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
			},
			other_actors: [
				{
					name: 'Ellen Page',
					latest_media: 'Unthinkable',
					other_media: 'Flatliners',
				},
				{
					name: 'Tom Hardy',
					latest_media: 'Peaky Blinders',
					other_media: 'RockNRolla',
				},
			],
		},
		{
			id: 3,
			title: 'The Wire',
			yearstart: 2002,
			yearend: 2008,
			description: 'Baltimore',
			main_actor: {
				name: 'Stringer Bell',
				latest_medias: ['Three Thousand Years of Longing'],
				older_medias: ['Luther', 'Peaky Blinders', 'RockNRolla'],
			},
			other_actors: [
				{
					name: 'Tony Soprano',
					latest_media: 'The Sopranos',
					other_media: undefined,
				},
				{
					name: 'Omar Little',
					latest_media: 'The Wire',
					other_media: undefined,
				},
			],
		},
	],
	/**
	 * returns the media with only the id field and title
	 */
	[
		{
			id: 2,
			title: 'Inception',
		},
		{
			id: 3,
			title: 'The Wire',
		},
	],
	/**
	 * adds a date field to all medias, set the date to "2020-10-17"
	 */
	[
		{
			id: 2,
			title: 'Inception',
			yearstart: 2010,
			//here yearend is undefined :(
			yearend: undefined,
			description: 'Dreamception',
			videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
			main_actor: {
				name: 'Leonardo Di Caprio',
				latest_medias: 'Inception, The Revenant', //the revenant is newer than inception, order from left to right
				older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
			},
			other_actors: [
				{
					name: 'Ellen Page',
					latest_media: 'Unthinkable',
					other_media: 'Flatliners',
				},
				{
					name: 'Tom Hardy',
					latest_media: 'Peaky Blinders',
					other_media: 'RockNRolla',
				},
			],
			date: '2020-10-17',
		},
		{
			id: 3,
			title: 'The Wire',
			yearstart: 2002,
			yearend: 2008,
			description: 'Baltimore',
			//videolink missing
			main_actor: {
				name: 'Stringer Bell',
				latest_medias: 'Three Thousand Years of Longing',
				older_medias: ['Luther', 'Peaky Blinders', 'RockNRolla'],
			},
			other_actors: [
				{
					name: 'Tony Soprano',
					latest_media: 'The Sopranos',
					other_media: undefined,
				},
				{
					name: 'Omar Little',
					latest_media: 'The Wire',
					other_media: undefined,
				},
			],
			date: '2020-10-17',
		},
	],
	/**
	 * returns the media split by its category (movie, TV Show)
	 * an array of arrays is expected, first are the movies
	 */
	[
		[
			{
				id: 2,
				title: 'Inception',
				yearstart: 2010,
				//here yearend is undefined :(
				yearend: undefined,
				description: 'Dreamception',
				videolink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
				main_actor: {
					name: 'Leonardo Di Caprio',
					latest_medias: 'Inception, The Revenant', //the revenant is newer than inception, order from left to right
					older_medias: ['Body of Lies', 'The Departed', 'Blood Diamond'],
				},
				other_actors: [
					{
						name: 'Ellen Page',
						latest_media: 'Unthinkable',
						other_media: 'Flatliners',
					},
					{
						name: 'Tom Hardy',
						latest_media: 'Peaky Blinders',
						other_media: 'RockNRolla',
					},
				],
			},
		],
		[
			{
				id: 3,
				title: 'The Wire',
				yearstart: 2002,
				yearend: 2008,
				description: 'Baltimore',
				//videolink missing
				main_actor: {
					name: 'Stringer Bell',
					latest_medias: 'Three Thousand Years of Longing',
					older_medias: ['Luther', 'Peaky Blinders', 'RockNRolla'],
				},
				other_actors: [
					{
						name: 'Tony Soprano',
						latest_media: 'The Sopranos',
						other_media: undefined,
					},
					{
						name: 'Omar Little',
						latest_media: 'The Wire',
						other_media: undefined,
					},
				],
			},
		],
	],
	/**
	 * extracts all medias from every possible field (so f.e. also othermedia in otheractors) and add a field "occurences"
	 * the title also counts!
	 * that represents how often this media was represented in the data structure,
	 * an alphabetically sorted array by media title is expected,
	 * expected is an array of objects
	 */
	[
		{ title: 'Blood Diamond', occurences: 1 },
		{ title: 'Body of Lies', occurences: 1 },
		{ title: 'Flatliners', occurences: 1 },
		{ title: 'Inception', occurences: 2 },
		{ title: 'Luther', occurences: 1 },
		{ title: 'Peaky Blinders', occurences: 2 },
		{ title: 'RockNRolla', occurences: 2 },
		{ title: 'The Departed', occurences: 1 },
		{ title: 'The Revenant', occurences: 1 },
		{ title: 'The Sopranos', occurences: 1 },
		{ title: 'The Wire', occurences: 1 },
		{ title: 'Three Thousand Years of Longing', occurences: 1 },
		{ title: 'Unthinkable', occurences: 1 },
	],
	/**
	 * extracts all actors and add a field "popularity" to each actor that represents how often the actor was represented as well as its role,
	 * the actor gains 2 popularity if he was a main actor and 1 of he was a "otheractor/sideactor", only return the 3 most popular actors,
	 * if theres a tie in popularity, randomize the selected actor for top 3,
	 * expected is an array of objects
	 */
	[
		{ actor: 'Stringer Bell', popularity: 2 },
		{ actor: 'Leonardo Di Caprio', popularity: 2 },
		{ actor: 'Omar Little', popularity: 1 },
	],
];
export default expected;
