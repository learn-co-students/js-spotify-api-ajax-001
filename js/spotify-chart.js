jQuery(document).ready(function($) {

  var URL = "http://charts.spotify.com/api/charts/most_streamed/us/latest";
  var ctx = $("#SpotifyChart").get(0).getContext("2d");
  var names = [];
  var numOfPlays = [];

  $.ajax({
    url : URL,
    dataType : "jsonp",
    success : function(parsed_json) {
      var tracks = parsed_json.tracks.slice(0, 20);
      var max = tracks.length;
      for (i = 0; i < max; i++) {
        names.push(tracks[i].track_name);
        numOfPlays.push(tracks[i].num_streams)
      }

      var data = {
        labels: names,
        datasets: [
          {
            label: "Spotify Chart of Top 20 Streamed Songs on Spotify with their Steam Count",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: numOfPlays
          } 
        ]
      };

      var myLineChart = new Chart(ctx).Bar(data, {});    

    }
  });
});

