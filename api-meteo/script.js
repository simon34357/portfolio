//fonction de chargement de météo
function loadDataMeteo(){

    $('div#alerteMeteo').fadeOut(function(){
        $('div').remove('#alerteMeteo');     
    });
    
    let ville = $('#inputVille').val();

    $.ajax({
        url : "http://api.openweathermap.org/data/2.5/weather?q="+ville+",fr&APPID=2ade58d93e55cb24df4bdb1f160723b0",
        statusCode: {
          404: function() {
            console.log( "page non trouvée" );
            
            alerte = "http://api.openweathermap.org/data/2.5/weather?q="+ ville +",fr&APPID=2ade58d93e55cb24df4bdb1f160723b0";
            
            displayAlert(alerte,alerteClasse);

          },
          401: function() {
            console.log( "connexion non autorisé" );

            alerte = "connexion non autorisé à l'application (clé API non correcte)";
            alerteClasse = "alert-warning";
            
            displayAlert(alerte,alerteClasse);
            
            },
          200: function(result){

            console.log(result);

            alerte = "connexion réussie";
            alerteClasse = "alert-success";
            
            displayAlert(alerte,alerteClasse);

            //AFFICHAGE DE LA TEMPERATURE   
            let tempCelsius = parseFloat(result['main']['temp']) - 273.15;
            $("#temperature").html(tempCelsius.toFixed(1)+" °C");

            let tempCelsiusMin = parseFloat(result['main']['temp_min']) - 273.15;
            $("#temperatureMin").html("min - "+tempCelsiusMin.toFixed(1)+" °C");

            let tempCelsiusMax = parseFloat(result['main']['temp_max']) - 273.15;
            $("#temperatureMax").html("max - "+tempCelsiusMax.toFixed(1)+" °C");

            //AFFICHAGE DU LOGO
            
            let logo = '<img src="http://openweathermap.org/img/wn/'+result['weather'][0]['icon']+'@2x.png" width="100px" height="100px" alt=""></img>';
            logo += result['weather'][0]['description'];
            $("#logo").html(logo);

            //Affichage du vent
            let vent = parseFloat(result['wind']['speed']) /1000 * 3600;
            $("#vent").html("<div id='triangle-code'></div> "+vent.toFixed(1)+" km/h");


            $('#interfaceMeteo').fadeIn('slow');
          }
        },
        error: function(){

            var alerte = 'Un problème est survenu';
            var alerteClasse = 'alert-dark';

            displayAlert(alerte,alerteClasse);
        }

      });

    }

function displayAlert(alerte,alerteClasse){
    let displayAlerte = '<div class="alert '+alerteClasse+' mt-3" id="alerteMeteo" role="alert">'+alerte+'</div>';
    $('#formulaireMeteo').after(displayAlerte);      

}
