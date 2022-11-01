fetch("https://api.wheretheiss.at/v1/satellites/25544").then((Response) =>
  Response.json().then((Data) => this.Consulta2(Data)));

  function Consulta2(Data)
  {
    console.log(Data)
    document.querySelector(".informacion").innerHTML = 
    "ISS<br><BR>Latitud: " + Data.latitude + "<BR>Longitud: " + Data.longitude + "<BR>Altitud: " + Data.altitude + 
    "<BR>Velocidad: " + Data.velocity;
    RecargarDatos1();
    var latitud = Data.latitude;
    var longitud = Data.longitude;

    fetch("https://api.wheretheiss.at/v1/coordinates/" + latitud + "," + longitud).then((Response) =>
    Response.json().then((Data) => this.Consulta3(Data)));
    
  }

  function RecargarDatos1()
  {
      var refresh=1000; // Refresh rate in milli seconds
      mytime=setTimeout('Consulta2()',refresh)
  }

function Consulta3(Data)
{
  console.log(Data)
  document.querySelector(".informacion2").innerHTML = 
    "<b>ISS</b><BR><br><br>Zona Horaria: " + Data.timezone_id + "<BR>Codigo de Pais: " + Data.country_code ;
    console.log(Data.map_url)
    document.getElementById("mapa").src="https://maps.google.com/maps?q=" + Data.latitude + "," + Data.longitude + "&t=k&z=1&ie=UTF8&iwloc=&output=embed";
    RecargarDatos2();
  }

function RecargarDatos2()
  {
      var refresh=1000; // Refresh rate in milli seconds
      mytime=setTimeout('Consulta3()',refresh)
  }

function display_ct7() 
{
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    hours=hours.toString().length==1? 0+hours.toString() : hours;

    var minutes=x.getMinutes().toString()
    minutes=minutes.length==1 ? 0+minutes : minutes;

    var seconds=x.getSeconds().toString()
    seconds=seconds.length==1 ? 0+seconds : seconds;

    var month=(x.getMonth() +1).toString();
    month=month.length==1 ? 0+month : month;

    var dt=x.getDate().toString();
    dt=dt.length==1 ? 0+dt : dt;

    var x1= dt + "/" + month + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  hours + ":" +  minutes + ":" +  seconds + " " + ampm;
    document.getElementById('ct7').innerHTML = x1;
    display_c7();
}

function display_c7()
{
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct7()',refresh)
}

//https://www.encodedna.com/javascript/practice-ground/default.htm?pg=auto-refresh-div-using-javascript-and-ajax



