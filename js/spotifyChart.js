$(function() {

  ctx = $("#SpotifyChart").get(0).getContext("2d");
  getSpotifyTracks(success);
});

var url = "http://charts.spotify.com/api/tracks/most_streamed/us/weekly/latest?callback=?";
var names = [];
var numOfStreams = [];
var ctx;

//write functions to pass spec tests here outside the jQuery doc ready
// then call function within doc ready to get them to work
// and display the chart correctly in index.html.

function extractTop20Tracks(tracks) {
  return tracks.slice(0, 20);
}

function extractNumberOfStreams(tracks) {
  for (i = 0; i < tracks.length; i++) {
    numOfStreams.push(tracks[i].num_streams);
  }
  return numOfStreams;
}

function extractNames(tracks) {
  for (i = 0; i < tracks.length; i++) {
    names.push(tracks[i].track_name);
  }
  return names;
}

function chartData(labels, inputData) {
  var dataObj = {};
  dataObj.labels = labels;
  dataObj.datasets = [{ label : 'Spotify Chart of Top 20 Streamed Songs on Spotify with their Steam Count', fillColor : 'rgba(220,220,220,0.5)', strokeColor : 'rgba(220,220,220,0.8)', highlightFill : 'rgba(220,220,220,0.75)', highlightStroke : 'rgba(220,220,220,1)', data: inputData }];
  return dataObj;
}

function getSpotifyTracks(callback){
  $.getJSON(url, callback);
}

function success(parsed_json) {
  var tracks = extractTop20Tracks(parsed_json.tracks);
  var names = extractNames(tracks);
  var streams = extractNumberOfStreams(tracks);
  var data = chartData(names, streams);
  var myLineChart = new Chart(ctx).Bar(data, {});
}


