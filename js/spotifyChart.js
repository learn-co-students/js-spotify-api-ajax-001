function init(){
  getSpotifyTracks(function(parsed_json) {
    var tracks = extractTop20Tracks(parsed_json.tracks);
    var ctx = $("#SpotifyChart").get(0).getContext("2d");
    var myLineChart = new Chart(ctx).Bar(chartData(extractNames(tracks), extractNumberOfStreams(tracks)), {});
  });
}

$(document).ready(function() {
  init();
});
