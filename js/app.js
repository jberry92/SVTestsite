$(function(){

  function initialize(){
    $seasonName = $('#title');
    $airDate = $('#airDate');
    $seasonOverview = $('#overview');
    $seasonImages = $('#poster');

  }

  function addEventListeners(){
    $('#seasonOne').on('click', function(){
      getSeasonData(1);
    })
    $('#seasonTwo').on('click', function(){
      getSeasonData(2);
    })
    $('#seasonOneEpisodes').on('click', function(){
      getSeasonData(1);
    })
    $('#seasonTwoEpisodes').on('click', function(){
      getSeasonData(2);
    })
  }

  function getSeasonData(season){
    var html;
    var dataCall = $.get('https://api.themoviedb.org/3/tv/60573/season/'+season+'?api_key=4fbf35c945e96e2f343d00d0ddcea967' ,
    function(data){
      console.log(data);
      $seasonName.html(data.name);
      $airDate.html(data.air_date);
      $seasonOverview.html(data.overview);
      $seasonImages.html("<img id='theImg' src= https://image.tmdb.org/t/p/w500/" + data.poster_path +" '/>");
      episodes = data.episodes;
      episodes.forEach(function(episode){
        console.log(episode.name + " " + episode.overview);
        html+= '<tr><td>' + episode.name + '</td><td>' + episode.overview + '</td><td>' + episode.air_date +'</td></tr>'
      })
      $('#episodeData').html(html);
    })

  }

  function getSimilar(){
      var html;
      var dataCall = $.get('https://api.themoviedb.org/3/tv/60573/similar?api_key=4fbf35c945e96e2f343d00d0ddcea967',
      function(data){
        console.log(data);
        similar = data.results;
        similar.forEach(function(recommendation){
          html+= '<tr><td>' + recommendation.name + '</td><td>' + recommendation.overview + '</td><td>' + recommendation.first_air_date +'</td></tr>'
          console.log(recommendation.name +`\n`+recommendation.overview+'\n'+recommendation.first_air_date);
        })
        $('#similarProg').html(html);
      });


  }




  initialize();
  addEventListeners();
  getSimilar();
})
