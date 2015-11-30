var url = "http://charts.spotify.com/api/tracks/most_streamed/us/weekly/latest";

var dataSetProperties = {
  label: 'Spotify Chart of Top 20 Streamed Songs on Spotify with their Steam Count', 
  fillColor: 'rgba(220,220,220,0.5)', 
  strokeColor: 'rgba(220,220,220,0.8)', 
  highlightFill: 'rgba(220,220,220,0.75)', 
  highlightStroke: 'rgba(220,220,220,1)'
}

$(function() {
  getSpotifyTracks(success);
});

function extractTop20Tracks(tracks) {
  return tracks.slice(0,20);
}

function extractNumberOfStreams(tracks) {
  numArray = [];
  for(var i=0;i<tracks.length;i++){
    numArray.push(tracks[i].num_streams);
  }
  return numArray;
}

function extractNames(tracks) {
  nameArray = [];
  for(var i=0;i<tracks.length;i++){
    nameArray.push(tracks[i].track_name);
  }
  return nameArray;
}

function chartData(labels, inputData) {
  dataSetProperties.data = inputData;
  return { labels: labels, datasets: [dataSetProperties] };
}

function getSpotifyTracks(callback){
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(response){
      callback(response);
    }
  })
}

function success(parsedJSON) {
  // this function will make a new bar chart, refer to this url:
  // http://www.chartjs.org/docs/#bar-chart
  // you will need to call on:
  //  1. extractTop20Tracks - pass it tracks
  var tracks = extractTop20Tracks(parsedJSON.tracks);
  //  2. extractNames -  pass it the result of #1
  var labels = extractNames(tracks);
  //  3. extractNumberOfStreams - pass it the result of #1
  var streams = extractNumberOfStreams(tracks);
  //  4. chartData - pass it results of #2 and #3
  var data = chartData(labels, streams);
  //  5. make a variable `ctx` and select the canvas with the id of spotify-chart
  //     * also make sure to specify 2d context
  var ctx = $('#spotify-chart')[0].getContext('2d');
  //  6. make a new bar chart!
  return new Chart(ctx).Bar(data, {});
}
