const data = [
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
];
export default data;
