class functions {
	/**
	 * gets the title of the first media
	 */
	static getFirstTitle(media) {
		return; //your solution...
	}
	/**
	 * gets the first media with id 2
	 */
	static getTitleWithId2(media) {
		return; //your solution...
	}
	/**
	 * gets all media with yearstart 2010 or earlier
	 */
	static getAllMedia2010Plus(media) {
		return; //your solution...
	}
	/**
	 *  gets the description of the media with id 2
	 */
	static getDescriptionWithId2(media) {
		return; //your solution...
	}
	/**
	 * gets all media with the title "Inception" or "The Wire"
	 */
	static getAllWithTitleIW(media) {
		return; //your solution...
	}
	/**
	 * gets the first medias main_actor name
	 */
	static getFirstMainActor(media) {
		return; //your solution...
	}
	/**
	 * gets the latest medias of the mainactor of the first media with title "Inception"
	 */
	static complexRetrieve1(media) {
		return; //your solution...
	}
	/**
	 * gets the latest medias of the mainactors of all medias with title "Inception" or "The Wire"
	 */
	static complexRetrieve2(media) {
		return; //your solution...
	}
	/**
	 * gets the latest media of the first otheractor in the first media that was running in between 2004 and 2006
	 */
	static complexRetrieve3(media) {
		return; //your solution...
	}
	/**
	 * gets the latest medias of the first otheractor in all medias that were running in between 2000 and 2020
	 */
	static complexRetrieve4(media) {
		return; //your solution...
	}
	/**
	 * gets all medias that have otheractors or mainactors that participated in the media "Unthinkable"
	 */
	static complexRetrieve5(media) {
		return; //your solution...
	}
	/**
	 * gets all names of actors(regardless otheractors or mainactors) that have participated in the media "Peaky Blinders"
	 */
	static complexRetrieve6(media) {
		return; //your solution...
	}
	/**
	 * checks if media only contains objects that are only having unique ids
	 */
	static checkUniqueIds(media) {
		return; //your solution...
	}
	/**
	 * sanitizes the yearend field to be the number 0 if a falsy value is given (remember what a falsy value is)
	 */
	static sanitizeFalsy(media) {
		return; //your solution...
	}
	/**
	 * adds a videolink field if its missing, initialize it to an empty string
	 */
	static sanitizeVideoLink(media) {
		return; //your solution...
	}
	/**
	 * converts the latest_medias field of the mainactor to an array instead of string (each entry in the array is a media)
	 */
	static sanitizeLatestMediaList(media) {
		return; //your solution...
	}
	/**
	 * returns the media with only the id field and title
	 */
	static reduceToIdAndTitle(media) {
		return; //your solution...
	}
	/**
	 * adds a date field to all medias, set the date to "2020-10-17"
	 */
	static feedTimeField(media) {
		return; //your solution...
	}
	/**
	 * returns the media split by its category (movie, TV Show)
	 * "the yearend is falsy if its a movie"
	 * an array of arrays is expected
	 */
	static splitByCategory(media) {
		return; //your solution...
	}
	/**
	 * extracts all medias from every possible field (so f.e. also othermedia in otheractors) and add a field "occurences"
	 * the title also counts!
	 * that shows how often this media was represented in the data structure,
	 * an alphabetically sorted array by media title is expected,
	 * avoid having undefined in your new array!
	 * expected is an array of objects
	 */
	static complexCombined1(media) {
		return; //your solution...
	}
	/**
	 * extracts all actors and add a field "popularity" to each actor that represents how often the actor was represented as well as its role,
	 * the actor gains 2 popularity if he was a main actor and 1 of he was a "otheractor/sideactor", only return the 3 most popular actors,
	 * if theres a tie in popularity, you dont need to do something specific
	 * expected is an array of objects
	 */
	static complexCombined2(media) {
		return; //your solution...
	}
}
export default functions;
