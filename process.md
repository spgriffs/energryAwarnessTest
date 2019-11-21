# Arrow Dynamics

## Basic Info ##
Project Name: Energy Wars

### Team Members:
Daniel Marsden
A02256379
marsden.daniel@gmail.com

Spencer Griffin
A01653454
xcgriffs@gmail.com

Git Repo:
https://github.com/gitdaddy/CS5890_arrow_dynamics_vis

----

## Background and Motivation ##

When we found the Tacebase dataset on appliance power usage, we pictured it's usefulness for people who want to better understand their power consumption. Understanding power trends in your home environment can help lead to more efficient living and reduce spending. Most if not all of us have to pay for power expenses. Being able to quickly analyze real world data can help provide critical insight into our own consumption footprint.

----

## Project Objectives ##

### Primary Questions - what we want to learn
 1.  What item(s) have the greatest impact on power consumption?
 2.  What are typical trends throughout the week/month?
 3.  How do items compare in their power draw?

### Benefits
1. Allow the user to identify appliance upgrades that would have the most benefit

2. Reduced energy costs and consumption

3. Allow user to optimize appliance usage and recognize potential issues.

----

## Data ##
We got our data from a github repository called tracebase.
The data contains timestamps for specific appliances and their power draw for that time. The time between samples ranges but is around 5 seconds between readings. The data is sparse as to which appliances have use on which days, i.e. all appliances do not have data for each day. Typically the data for a particular appliance has samples of 5 seconds spanning a single day to over a week.

Link: https://github.com/areinhardt/tracebase/tree/master/complete

----

## Data Processing ##

The Tracebase dataset is stored in a number of CSV files. The size of each file can be up to 5-10 Megabytes. To get the data we will need to parse each CSV file. This process can be expensive computationally with a large number of files. We plan on combining this data into a single csv file for each appliance to save on file read times. To avoid processing all the files at once we plan to take a lazy evaluation approach and load only the files dealing with the items selected by the user. This should make the vis dynamic and responsive upon load. From the data we can extract the power consumption values, their averages and the time stamps for the recording. The implementation of the data processing will begin with CSV file access via a python server. Once the file data is returned it will then be placed in the dataset category. All the data we will potentially be processing will be stored on disk in the project workspace.

----

## Visualization Design ##

### Calendar view ###
This view gives an overview of the time series data for the selected appliances. Each day of the month will be represented with a rectangle whose color will be based on the total usage for that day for each appliance selected. Darker for more usage, lighter for less. This visualization is the link between the other visualizations. The user will be able to select days or weeks of the month in which they are interested, each selection will update the other visualizations.

### Stacked area graph ###
 This visualization is a stacked area graph. In this visualization the data is displayed in the main section of the page. As the user selects which days and weeks they are interested in the visualization scales to show all the data for the select days. The user from here can then select which subset of the data to see a more detailed view. This selection would update the calendar view as well.  See stacked_area.jpg in the images folder for more detail about this design.

### Stacked Bar ###
  This visualization is a single bar, the length of which represents the total power used for the selected time frame selected with the calendar view or the stacked area graph. Each selected appliance is represented with a separate color and has a length based on the percentage of the total power used.

### Small Multiples ###
  This visualization is made up of multiple line charts, one for each appliance selected. Each is a line chart which shows the total usage for that appliance over the selected timeframe, days if selection greater than a week, hours if a day and minuets if an hour.

### Must Have Features ###
* The user will be able to select which appliances they are interested in, this should update all visualizations accordingly.
* The user will be able to select which days or weeks to see time series data for, this will be updated on an area graph. This chart will have the usage for the selected appliances, the scale will change as more or less days are selected.
* The user will be able to compare the average daily use of selected appliances on an area chart. This area chart will have the average usage for each hour in a day.

### Optional Features ###
* A game in which the usage for an unlabeled appliance is shown. The user then has to guess which appliance is shown. When an incorrect appliance is shown the selected appliance usage is shown. This game is intended to show users how many appliances it takes to match the usage of the appliance that uses the most energy.

### Final Design ###
In the final design we plan to have the user interact with the calendar view to select the timeframe they are interested in. When the user selects a timeframe the other visualizations are updated for that timeframe. The user will be able to navigate to the visualizations by scrolling or by selecting the visualization from the navigation bar. The user will also be able to select the appliances they are interested in by opening the sidebar in which the available appliances can be selected by checking the corresponding checkbox.

----

## Project Schedule ##

### Week 1:
* Read in data (Daniel)
* Select which data to view (Daniel)
* General layout of page (Spencer)
* Vis Selection (Spencer)
### Week 2:
* Calendar/week view (Spencer)
* Aggregate area chart. Show accumulated power usage for a single day (Daniel)
### Week 3:
* Comparison vis. can be built off of same basic form as aggregate area chart. (Spencer)
### Week 4:
* Polish Items (Both)
* Signal game if time allows (Both)
* Heat map animation (if time allows)
