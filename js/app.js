$(function() {

    function initialize() {
        $(".button-collapse").sideNav();
        $seasonName = $('#title');
        $airDate = $('#airDate');
        $seasonOverview = $('#overview');
        $seasonImages = $('#poster');
        $('#episodes').hide();
        $('#seasons').hide();
        $('#similar').hide();

    }

    function addEventListeners() {
        $('#seasonOne').on('click', function() {
            getSeasonData(1);
        })
        $('#seasonTwo').on('click', function() {
            getSeasonData(2);
        })
        $('#seasonOneEpisodes').on('click', function() {
            getEpisodeData(1);
        })
        $('#seasonTwoEpisodes').on('click', function() {
            getEpisodeData(2);
        })
        $('.seasons').on('click', function() {
            $('#seasons').show();
            $('#splashPage').hide();
            $('#episodes').hide();
            $('#similar').hide();
        })
        $('.episodes').on('click', function() {
            $('#episodes').show();
            $('#splashPage').hide();
            $('#seasons').hide();
            $('#similar').hide();
        })
        $('.recommendations').on('click', function() {
            getSimilar();
            $('#similar').show();
            $('#splashPage').hide();
            $('#seasons').hide();
            $('#episodes').hide();
        })
        $('#navBarLogo').on('click', function() {
            $('#splashPage').show();
            $('#episodes').hide();
            $('#seasons').hide();
            $('#similar').hide();
        })


    }

    function getSeasonData(season) {
        var dataCall = $.get('https://api.themoviedb.org/3/tv/60573/season/' + season + '?api_key=4fbf35c945e96e2f343d00d0ddcea967',
            function(data) {
                console.log(data);
                $seasonName.html('<h1>' + data.name + '</h1>');
                $airDate.html('<h5>' + data.air_date + '</h5>');
                $seasonOverview.html('<p>' + data.overview + '</p> \n <\hr>');
                $seasonImages.html("<img id='theImg' class='responsive-img center' src= https://image.tmdb.org/t/p/w500/" + data.poster_path + " '/>");
            })

    }

    function getEpisodeData(season) {
        console.log('in the function')
        var html;
        var dataCall = $.get('https://api.themoviedb.org/3/tv/60573/season/' + season + '?api_key=4fbf35c945e96e2f343d00d0ddcea967',
            function(data) {
                episodes = data.episodes;
                episodes.forEach(function(episode) {
                    // console.log(episode.name + " " + episode.overview);
                    html += '<tr><td>' + episode.name + '</td><td>' + episode.overview + '</td><td>' + episode.air_date + '</td></tr>'
                })
                $('#episodeData').html(html);
            })


    }

    function getSimilar() {
        var html;
        var dataCall = $.get('https://api.themoviedb.org/3/tv/60573/similar?api_key=4fbf35c945e96e2f343d00d0ddcea967',
            function(data) {
                console.log(data);
                similar = data.results;
                similar.forEach(function(recommendation) {
                    html += '<tr><td>' + recommendation.name + '</td><td>' + recommendation.overview + '</td><td>' + recommendation.first_air_date + '</td></tr>'
                        // console.log(recommendation.name +`\n`+recommendation.overview+'\n'+recommendation.first_air_date);
                })
                $('#similarProg').html(html);
            });


    }




    initialize();
    addEventListeners();
})
