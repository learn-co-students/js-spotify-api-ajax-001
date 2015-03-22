---
language: javascript
tags: WIP, AJAX, data visualization, JavaScript library
resources: 3
---

# Visualizing Spotify's Popular Genres

## Objectives
* Build a page that uses data from the [Spotify's Chart API](http://charts.spotify.com/docs) to render a bar chart using [Chart.js](http://chartkick.com/). It will display the latests top 20 streamed songs in the US and will have track names on the x-axis and number of streams on the y-axis.

![example pic](/images/example.png "Pic of Example")

* Learn how to use AJAX to keep data current.
* Use a JavaScript visualization library.

## Instructions
* Require jQuery at the top of `index.html`. Double check that it was correctly required by typing `jQuery` in the browser console or just `$`. This should return a function, not "undefined".
* You'll be using [Chart.js](http://www.chartjs.org/) to visualize the JSON from Spotify so check it out. Require the `Chart.js` library in the head of your HTML file. Double check that you required the library correctly by typing `Chart` into the browser's console. A function should be returned, not "undefined".
* Require `spotifyChart.js` below the lines where you required jQuery and Chart.js.
* Get the address where the latest most streamed songs in the US for the week are returned. Read the [docs](http://charts.spotify.com/docs) to figure out what it should be. You will need to use the URL for jsonp.


## Resources
* [Spotify Chart Docs](http://charts.spotify.com/docs)
* [jQuery](http://api.jquery.com/) - [AJAX](http://api.jquery.com/jquery.ajax/)
* [Chart.js](http://www.chartjs.org/docs/#getting-started) - [Bar Chart](http://www.chartjs.org/docs/#bar-chart-example-usage)
