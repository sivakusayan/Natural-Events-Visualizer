/**
 * An object that describes what colors to use for each GeoJSON
 * data on the map. Events with different categories will use
 * different colors.
 * 
 * See the following for more information on data-driven styling:
 * https://www.mapbox.com/help/how-map-design-works/#data-driven-styles
 */

import CATEGORIES from '../../../constants/CATEGORIES';

export const COLOR_STOPS = {
  property: 'category',
  type: 'categorical',
  // Parse int to prevent type coercion to string
  stops: Object.keys(CATEGORIES).map(key => [parseInt(key), CATEGORIES[key].color]),
};
