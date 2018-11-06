/**
 * @fileoverview Exports an object that contains all the categories used in the EONET API.
 * The keys are the IDs of the category. 
 */

/**
 * Contains all the categories that will be used in the application.
 * The keys of this object will be the category IDs. The result
 * of CATEGORIES[Key] will be an object with a title, description, and 
 * color property, each tailored to the specific category.
 * 
 * Colors that each category uses on the map are picked from 
 * https://sashat.me/2017/01/11/list-of-20-simple-distinct-colors/
 */

const CATEGORIES = {};
CATEGORIES[6] = {
  title: 'Drought',
  description: 'Long lasting absence of precipitation affecting agriculture and livestock, and the overall availability of food and water.',
  color: '#ffe119',
};
CATEGORIES[7] = {
  title: 'Dust and Haze',
  description: 'Related to dust storms, air pollution and other non-volcanic aerosols. Volcano-related plumes shall be included with the originating eruption event.',
  color: '#ffd8b1',
};
CATEGORIES[8] = {
  title: 'Wildfires',
  description: 'Wildfires includes all nature of fire, including forest and plains fires, as well as urban and industrial fire events. Fires may be naturally caused or manmade.',
  color: '#e6194B',
};
CATEGORIES[9] = {
  title: 'Floods',
  description: 'Related to aspects of actual flooding--e.g., inundation, water extending beyond river and lake extents.',
  color: '#4363d8',
};
CATEGORIES[10] = {
  title: 'Severe Storms',
  description: 'Related to the atmospheric aspect of storms (hurricanes, cyclones, tornadoes, etc.). Results of storms may be included under floods, landslides, etc.',
  color: '#911eb4',
};
CATEGORIES[12] = {
  title: 'Volcanoes',
  description: 'Related to both the physical effects of an eruption (rock, ash, lava) and the atmospheric (ash and gas plumes).',
  color: '#800000',
};
CATEGORIES[13] = {
  title: 'Water Color',
  description: 'Related to events that alter the appearance of water: phytoplankton, red tide, algae, sediment, whiting, etc.',
  color: '#42d4f4',
};
CATEGORIES[14] = {
  title: 'Landslides',
  description: 'Related to landslides and variations thereof: mudslides, avalanche.',
  color: '#f58231',
};
CATEGORIES[15] = {
  title: 'Sea and Lake Ice',
  description: 'Related to all ice that resides on oceans and lakes, including sea and lake ice (permanent and seasonal) and icebergs.',
  color: '#000075',
};
CATEGORIES[16] = {
  title: 'Earthquakes',
  description: 'Related to all manner of shaking and displacement. Certain aftermath of earthquakes may also be found under landslides and floods.',
  color: '#9A6324',
};
CATEGORIES[17] = {
  title: 'Snow',
  description: 'Related to snow events, particularly extreme/anomalous snowfall in either timing or extent/depth.',
  color: '#fffac8',
};
CATEGORIES[18] = {
  title: 'Temperature Extremes',
  description: 'Related to anomalous land temperatures, either heat or cold.',
  color: '#f032e6',
};
CATEGORIES[19] = {
  title: 'Manmade',
  description: 'Events that have been human-induced and are extreme in their extent.',
  color: '#000000',
};

export default CATEGORIES;
