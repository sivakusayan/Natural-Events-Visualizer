/**
 * Attempts to extract the event title from the EONET API.
 * This function takes into account the following types of strings:
 * 
 * 1) Regular titles
 * EX: "Iceberg B46"
 * EX: "Tropical Cyclone Bouchra"
 * 
 * 2) Titles with extra information after comma
 * EX: "Woolsey Fire, California"
 * EX: "Sangeang Api Volcano, Indonesia"
 * 
 * 3) Titles with extra information after dash
 * EX: "Wildfires - Ventura County (Woolsey Fire and Hill Fire), California, United States"
 * EX: "Wildfire - Sithonia, Greece"
 * 
 * 4) Wildfires with location after their ID
 * EX: "Wildfire MWF095-2018 Fort McMurray, Alberta, Canada"
 * EX: "Wildfire HWF212-2018 High Level, Alberta, Canada"
 */

const extractTitle = (rawTitle) => {

};

export default extractTitle;
