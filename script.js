//do something once the page is ready
$(document).ready(function(){
    var user = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "theothermiles", "mrnoobdy", "nicolas2580", "fredrik74", "standog061", "deityhub", "hboissel", "etanzorz66", "coustos", "cupcakespectre", "rochagrande169", "rollandooo", "dragnorr42", "xaviinc"];
    
    $('#search').focus();
    $('#search').html('');
    //looping through my array to  check status of the user
    for(var i = 0; i < user.length; i++){
        $.ajax({
            //checks if the user is in the database
            //will be used for error handling
           url: 'https://api.twitch.tv/kraken/channels/'+ user[i] +'?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm?callback=?',
            success: function(data){
                var img;
                var game;
                if(data.logo == null){
                    img = 'http://www.hostcgs.com.br/hostimagem/images/912twitch_logo.jpg'
                }else{
                   img = data.logo; 
                }
                if(data.game == null){
                   game = 'N/A';
                }else{
                    game = data.game;       
                }
                //checks if the user is online or offline
                $.get('https://api.twitch.tv/kraken/streams/'+ data.name +'?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm?callback=?', function(d){
                    if(d.stream != null){
                       $('#results').append('<div class="col-md-2" id="resultbox">'+ '<img  src="'+ img +'" >' +'<a href = "'+ data.url +'" target="_blank">'+ data.name +'</a>' + '<p>status: <i>online</i></p>' + '<p>views: '+ data.views +' </p>' + '<p>followers: '+ data.followers +'</p>' + '<p>game:'+ game +'</p>' + '</div>'); 
                    }else{
                        $('#results').append('<div class="col-md-2" id="resultbox">'+ '<img  src="'+ img +'" >' +'<a href = "'+ data.url +'" target="_blank">'+ data.name +'</a>' + '<p>status: <i>offline</i></p>' + '<p>views: '+ data.views +' </p>' + '<p>followers: '+ data.followers +'</p>' + '<p>game:'+ game +'</p>' + '</div>');
                    }
                    
                    $('.footer-container').removeClass('hidden');
                })
                
            },
            error: function(err){
                console.log('user not found')
            }
        });
    };  
    
    //This works when you click a button
    /*$('#searchbtn').on('click', function(e){
       var input = $('#search').val();
       e.preventDefault();
        
        
    });*/
    
    //This works when the user presses enter key
        $('#search').keydown(function(key){
            $('#search').focus();
            $('#search').html('');
            if(key.keyCode === 13){
                key.preventDefault();
                var input = $('#search').val();
                
                $.ajax({
            //checks if the user is in the database
            //will be used for error handling
           url: 'https://api.twitch.tv/kraken/channels/'+ input +'?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm?callback=?',
            success: function(data){
                var img;
                var game;
                if(data.logo == null){
                    img = 'http://www.hostcgs.com.br/hostimagem/images/912twitch_logo.jpg'
                }else{
                   img = data.logo; 
                }
                if(data.game == null){
                   game = 'N/A';
                }else{
                    game = data.game;       
                }
                //checks if the user is online or offline
                $.get('https://api.twitch.tv/kraken/streams/'+ data.name +'?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm?callback=?', function(d){
                    if(d.stream != null){
                       $('#results').html('<div class="col-md-2" id="resultbox">'+ '<img  src="'+ img +'" >' +'<a href = "'+ data.url +'" target="_blank">'+ data.name +'</a>' + '<p>status: <i>online</i></p>' + '<p>views: '+ data.views +' </p>' + '<p>followers: '+ data.followers +'</p>' + '<p>game:'+ game +'</p>' + '</div>'); 
                    }else{
                        $('#results').html('<div class="col-md-2" id="resultbox">'+ '<img  src="'+ img +'" >' +'<a href = "'+ data.url +'" target="_blank">'+ data.name +'</a>' + '<p>status: <i>offline</i></p>' + '<p>views: '+ data.views +' </p>' + '<p>followers: '+ data.followers +'</p>' + '<p>game:'+ game +'</p>' + '</div>');
                    }
                    $('.footer-container').removeClass('hidden');
                })
                
            },
            error: function(err){
               $('#results').html('<h3>'+ input +'<i> not found!!!</i></h3>' + '<p>Possible ways to fix this are:</p>' + '<ul><li>Search only usernames or user-id</li><li>Check for whitespaces and close them</li><li>Recheck input for typoerrors</li><li>Kindly reload the page</li></ul>');
            }
        });
            }
        });
    
    $.get('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm?callback=?', function(fcode){
        if(fcode.stream == null){
          $('#fcc').html(' is offline');  
        }else{
          $('#fcc').html(' is online');  
        }
    });
    
    
});

 
  
  