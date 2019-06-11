# Environmental-Impact-Rating
P5js visualisation of Environmental Impact Ratings across London Boroughs

Digital Visualisation of Environmental Impact Rating across London Boroughs in 2018

Link to full screen visualisation: https://editor.p5js.org/DagmarEllefsen/full/T-fvkrR-s

The aim of this visualisation was to show the Environmental Impact Rating (EIR: CO2-emissions) in 2018 across London Boroughs. The rating ranges from A to G and is measured based on Standard Assessment Procedure (SAP) points which add up the current and potential CO2 use per year. The more energy efficient a home is (e.g. double-glazed windows) the more SAP-points it receives and thus a higher rating. A visual overview of EIR across London will illustrate the potential CO2-emission and identify areas of improvement. The data was downloaded as a csv-file from the London Datastore (2019).

A static non-interactive design approach was chosen to present the data in a simple and clear way without unnecessary cartographic details or interactivity confusing the message.
The design was inspired by how the ‘London Squared Map’ (“Future Cities Catapult,” 2018) reduces each London borough to a square and arranges them in relation to each other. To make the visualisation recognisable and relatable as London, the river Thames is added on top of the squares as it is the standard referencing object for London. However, it was debated whether to include the river or not, as on the other hand, this curved line could be misinterpreted as a graph and confuse the viewer.
Each square has a colour ramp from green to red to reflect the proportion of each EIR (A-G) within that borough. Squares with high/good EIR have more green colours than those with low/bad. This colour ramp is a simple and effective way of drawing the eye both to the good and bad EIR.

P5js was chosen to execute the visualisation as the user interface allows you to continuously view the progress of your visualisation whilst giving complete freedom of how to visualise your data.
A P5js-function was set up to construct the colour ramp for each borough-square, which took in the boroughs’ index value, the horizontal and vertical start values indicating where the top left corner of the square is to be located on the canvas, and the name to be printed on the square. The function then draws a rectangle for each EIR category (A-G) corresponding to the percentage of each rating category within the borough and colours them accordingly. Consequently, the function accesses the data (csv-file) and takes the percentage value for e.g. EIR ‘A’ for Lambeth and times it with 0.75 to get the width of that rectangle (1%=0.75 width on the canvas).

REFERENCES:
Future Cities Catapult [WWW Document], 2018. . Flood. URL https://aftertheflood.com/projects/future-cities-catapult/ (accessed 2.21.19).
London Datastore, 2019. Domestic Energy Efficiency Ratings, Borough - London Datastore. URL https://data.london.gov.uk/dataset/domestic-energy-efficiency-ratings-borough (accessed 3.5.19).
