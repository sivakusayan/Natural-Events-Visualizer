/**
 * Dispenses an action to search for events in the database. The query can have
 * the following properties to narrow the search.
 * 
 * @param title Filters for events that contain <code>name</code> in their title.
 * 
 * @param long The longitude of the search center          || ~~ If searching by location,
 * @param lat The latitude of the search center        || ~~ both lat and long need to be
 * @param radius The radius of the search. Defaults      || ~~ defined.
 *               to 100 kilometers.               
 * 
 * @param categoryID Filters for events of this category
 * 
 * @param startDate Filters for events weakly after this timestamp in milliseconds.
 * @param endDate Filters for events strictly before this timestamp in milliseconds.
 */
export const searchEvents = (query = {}) => ({
  type: 'SEARCH_EVENTS',
  query,
});
