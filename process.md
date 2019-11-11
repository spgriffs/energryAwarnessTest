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

When the Tacebase dataset was discovered, we pictured the usefulness it could mean for people who want to better understand their power consumption. Understanding power trends in your home environment can help lead to more efficient living and reduce spending. Most if not all of us have to pay for power expenses. Being able to quickly analyze real world data can help provide critical insight into our own consumption footprint.

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

Link: https://github.com/areinhardt/tracebase/tree/master/complete

----

## Data Processing ##

The Tracebase dataset is stored in a number of CSV files. The size of each file can be up to 5-10 Megabytes. To get the data we will need to parse each CSV file. This process can be expensive computationally with a large number of files. To avoid processing all the files at once we plan to take a lazy evaluation approach and load only the files dealing with the items selected by the user. This should make the vis dynamic and responsive upon load. From the data we can extract the power consumption values, their averages and the time stamps for the recording. The implementation of the data processing will begin with CSV file access via a python server. Once the file data is returned it will then be placed in the dataset category. All the data we will potentially be processing will be stored on disk in the project workspace.

----

## Visualization Design ##

* How will you display your data? Provide some general ideas that you have for the visualization design.
* Develop three alternative prototype designs for your visualization.
* Create one final design that incorporates the best of your three designs.
* Describe your designs and justify your choices of visual encodings.
* We recommend you use the Five Design Sheet Methodology (Links to an external site.).

### Visualization Prototype 1 ###
 The first visualization prototype is a stacked area graph. In this vis the data is displayed to the user in the main section of the page. With interactive zooming/brushing the data will scale to the more finite time series. See stacked_area.jpg in the images folder for more detail about this design.

### Visualization Prototype 2 ###
 The second visualization prototype is a bubble chart. The bubble chart vis displays the item categories as separate bubbles with the value or consumption of the item as encoded as the size of the bubble. With interactive clicking the vis will transition into sub-groups to provide useful information. For example if a subgroup could be classified by the week or day of the week. See bubble_chart.jpg in the images folder for more detail about this design.

### Visualization Prototype 3 ###
The third prototype involves a heat map which provides spatial orientation to the user to show where consumption levels are at the highest. For this vis some of the data will need to be assumed such as the oven is in the kitchen and the TV is in the living space etc. Additionally we can provide a calendar view to give more temporal context to this vis. As a stretch goal it would be great to create an animation of the heat map to show consumption over time. See heatMap.jpg and calendarView.jpg in the images folder for more detail about this design.

### Must Have Features ###
* A way for the user to compare different appliances side by side.
* A way for the user to select which appliances to compare.
* A way for the user to see trends over time.
* A way for the user to see total energy usage when using selected appliances.

### Optional Features ###
* An interactive game to guess which appliance usage is shown
* Beautiful animations and transitions.

### Final Design ###
In the final design we plan to implement the prototypes listed by allowing the user to select the visualization they prefer. We will allow user to select or scroll to the visualization that they wish to view. All visualizations will update based on the item selection. The item selection will be available for the user to easily choose which items to compare. Loading all the items initially at once will probably introduce lag on the system. The center main page will feature the selected visualization. See site_layout#.jpg for more detail on this design.

----

## Project Schedule ##
Make sure that you plan your work so that you can avoid a big rush right before the final project deadline, and delegate different modules and responsibilities among your team members. Write this in terms of weekly deadlines.

### Week 1:
* Read in data (Daniel)
* Select which data to view (Daniel)
* General layout of page (Spencer)
* Vis Selection (Spencer)
### Week 2:
* Calendar/week view (Spencer)
* Aggregate area chart. Show accumulated power usage for a single day (Daniel)
### Week 3:
* Bubble chart (Daniel)
* Comparison vis. can be built off of same basic form as aggregate area chart. (Spencer)
### Week 4:
* Polish Items (Both)
* Signal game if time allows (Both)
* Heat map animation (if time allows)