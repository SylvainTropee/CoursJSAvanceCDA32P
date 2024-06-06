let map;
let marker;

function getIssPosition() {

    fetch("http://api.open-notify.org/iss-now.json")
        .then(response => response.json())
        .then(data => {
            const latitude = data.iss_position.latitude
            const longitude = data.iss_position.longitude
            document.getElementById('position').innerText = latitude + ' ' + longitude

            //on modifie la position du marker
            marker.setLatLng([latitude, longitude])
            //on modifie la position de la carte
            map.flyTo([latitude,longitude])

        }).catch(error => console.log(error))
}

function init(){

    //création de l'objet map qui contient la carte
    map = L.map('map').setView([51.505, -0.09], 13);
    //on y associe une carte de openstreetmap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //création de l'icon personnalisé
    var issIcon = L.icon({
        iconUrl: './image/iss.png',
        iconSize:     [64, 64], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    //on crée un marker sur la carte avec cette icon
    marker = L.marker([51.5, -0.09], {icon: issIcon}).addTo(map);

    //on appelle getIssPosition toutes les 2 secondes en boucle
    setInterval(
        getIssPosition,
        2000
    )
}

window.onload = init