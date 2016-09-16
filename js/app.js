$(function(){

  function initialize(){
    $seasonName = $('#title');
    $airDate = $('#airDate');
    $seasonOverview = $('#overview');
    $seasonImages = $('#poster');
  }

  function addEventListeners(){
    $('#seasonOne').on('click', function(){
      return getSeasonData(1);
    })
    $('#seasonTwo').on('click', function(){
      return getSeasonData(2);
    })


  }

  function getSeasonData(season){
    $.get('https://api.themoviedb.org/3/tv/60573/season/'+season+'?api_key=4fbf35c945e96e2f343d00d0ddcea967' , function(data){
      console.log(data);
      $seasonName.html(data.name);
      $airDate.html(data.air_date);
      $seasonOverview.html(data.overview);
      $seasonImages.html("<img id='theImg' src= https://image.tmdb.org/t/p/w500/" + data.poster_path +" '/>");
      return data;
    })
  }





  initialize();
  addEventListeners();
})
