---
language: javascript
tags: AJAX, data visualization, JavaScript library, chart
resources: 3
---

# Visualizing Spotify's Popular Genres

## Objectives

Build a page that uses data from the [Spotify's Chart API](http://charts.spotify.com/docs) to render a bar chart using [Chart.js](http://chartkick.com/). It will display the latests top 20 streamed songs in the US and will have track names on the x-axis and number of streams on the y-axis.

![example pic](http://ironboard-curriculum-content.s3.amazonaws.com/web-development/js-spotify-api-ajax/example.png "Pic of Example")

## Instructions

You will need to make an AJAX call to the url below. In the AJAX call, you'll have to specify that you JSONP, not JSON. To learn more about the advantages of JSONP, take a look at [this StackOverflow question](http://stackoverflow.com/a/2887214/2890716). Or, once everything is working, change JSONP to JSONP and look at the error that gets logged to your console.

[http://charts.spotify.com/api/tracks/most_streamed/us/weekly/latest](http://charts.spotify.com/api/tracks/most_streamed/us/weekly/latest)

Take a look at the `spec/spotify-chart.spec.js` file to get started. This lab isn't fully tested so while every spec may pass, you might not have a functioning product. You will only be modifying the `js/spotify-chart.js` to pass the first six tests.

The final step of this lab will be to run your server with `python -m SimpleHTTPServer` and opening up [localhost:8000](http://localhost:8000/). Verify that your chart looks similar to the chart in this readme, then open `spec/spotify-chart.spec.js` and set the variable `signature` equal to your first and last names, in a string. That should make the final test pass.

## Resources

* [Spotify Chart Docs](http://charts.spotify.com/docs)
* [jQuery](http://api.jquery.com/) - [AJAX](http://api.jquery.com/jquery.ajax/)
* [Chart.js](http://www.chartjs.org/docs/#getting-started) - [Bar Chart](http://www.chartjs.org/docs/#bar-chart-example-usage)
* [How to Use JSONP](http://terrasus.com/detail.jsp?articleID=396)
