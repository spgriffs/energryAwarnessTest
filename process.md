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
Discuss your motivations and reasons for choosing this project, especially any background or research interests that may have influenced your decision.

When the Tacebase dataset was discovered, we pictured the usefulness it could mean for people who want to better understand their power consumption. Understanding power trends in your home environment can help lead to more efficient living and reduce spending. Most if not all of us have to pay for power expenses. Being able to quickly analyze real world data can help provide critical insight into our own consumption footprint.

----

## Project Objectives ##

Provide the primary questions you are trying to answer with your visualization. What would you like to learn and accomplish? List the benefits.
Data. From where and how are you collecting your data? If appropriate, provide a link to your data sources.

### Primary Questions
 * What item(s) have the greatest impact on power consumption?
 * What are typical trends throughout the week/month?
 * How do items compare in their power draw?

1.Consumption trends are easily identifiable

2.Ability to compare and contrast

3.Engaging and Interactive to the user

----


## Data Processing ##
Do you expect to do substantial data cleanup? What quantities do you plan to derive from your data? How will data processing be implemented?

The Tracebase dataset is stored in a number of CSV files. The size of each file can be up 5-10 Megabytes. To get the data we will need to parse each CSV file. This process can be expensive computaionality with a large number of files. To avoid processing all the files at once we plan to take a lazy evaluation approach and load only the files dealing with the items selected by the user. This should make the vis dynamic and responsive upon load. From the data we can extract the power consumption values, their averages and the time stamps or the recording. The implementation of the data processing will begin with CSV file access via a python server. Once the file data is returned it will then be placed in the dataset category. All the data we will potentially will be processing will be stored on disk in the project workspace. 

----

## Visualization Design ##

* How will you display your data? Provide some general ideas that you have for the visualization design. * Develop three alternative prototype designs for your visualization.
* Create one final design that incorporates the best of your three designs.
* Describe your designs and justify your choices of visual encodings.
* We recommend you use the Five Design Sheet Methodology (Links to an external site.).
* Must-Have Features. List the features without which you would consider your project to be a failure.
* Optional Features. List the features which you consider to be nice to have, but not critical.

### Notes From Tuesdays Meeting
 * Create a simple game out of the data (match the signal to the electronic)
 * Animated Heat map - showing the usage over time
 * Bubble chart like the one with the companies and their profits - transition to show separate groups
 * Scaled line chart showing the data in a time-series fashion

----

## Project Schedule ##
Make sure that you plan your work so that you can avoid a big rush right before the final project deadline, and delegate different modules and responsibilities among your team members. Write this in terms of weekly deadlines.
