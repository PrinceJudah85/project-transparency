# **Project** **Transparency**

![Robert De Niro as Jimmy Conway](https://media.giphy.com/media/KXyKSpfcZ0GUU/giphy.gif)

## Project Description

This project will reveal the national budget each top tier federal agency was granted last year, 2018. It will feature a drop down menu that lists 101 top tier federal agencies on the left half of the page. The right half of the page will feature a Pie Chart that will represent the total budget authority amount from last year.  Whenever an agency is selected from the drop down menu, a slice of the pie chart will highlight the percent of the national budget that that agency spent. 

## MVP

* Project Transparency will be gathering it's data from the open source API, [usaspending.gov](https://www.usaspending.gov/#/). 
* The data will feature a list of 100 top tier federal agencies, their Budget Authority for 2018 and a hardcoded description for each agency.
* It will include six or more components.
* Include class and functional components.
* Use Router and Links on your App.
* Make app responsive to mobile devices. 

## Post-MVP

* Display a Pie Chart that responds when the user selects a federal agency from the drop down menu. It will render a  highlighted slice of the pie chart representing that agency's portion of the national budget. 

* Couldn't get to this but I would like to make the pie chart mobile touch responsive where it displays the agency name and/or their budget amount once you touch on their respective sector of the pie. 

## React Component Hierarchy
* < App / >
  * < TitlePage / >
  * < Header / >
  * < Main / >
    * < AgencyList / >
    * < Descriptions / >
    * < Chart / >
  * < Footer / >

## WireFrame for Web & Mobile App

![Web App](https://pastepic.xyz/images/2019/10/18/Project-Transparency-Web-App-wireframecfcb4c71e554fa52.png)


![Web App](https://pastepic.xyz/images/2019/10/18/Project-Transparency-Mobile-App-wireframece91530818c4c6b3.png)

## Notable Challenges / Hurdles

I want to give a special thanks to David Whitlatch, Brian Weitz, Shay Kelley and Svetla Syrimis for helping me get through the tough spots in this project.  Still very noobish when it comes to 'Conditional Rendering' using ternary operators, if/else statements and all things related.  Will definitely spend some extra time working on sharpening those skills specifically. 