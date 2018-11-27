function initMap(){
  var l = {lat: 42.019408 , lng: -87.678977};
  var l1 = {lat: 42.017974 , lng: -87.679063};
  var l2 = {lat: 42.019281 , lng: -87.679192};
  var l3 = {lat: 42.019982 , lng: -87.680522};
  var l4 ={lat: 42.018037 , lng: -87.679063};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: var1
  });
  var marker = new google.maps.Marker({
    position: (l, l1, l2, l3, l4),
    map: map
  });
}
function goto(location){
  map.panTo(location);
  map.setzoom(15);
}
