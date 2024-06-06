const API_BASE_URL = "https://geo.api.gouv.fr"
const dep = document.getElementById('dep')
const citySelect = document.getElementById('cities')

async function callApi(url) {
    //j'attends le retour de la reponse
    let response = await fetch(url)
    if (response.ok) { // response.status == 200
        //je renvoie la partie json de la réponse
        return response.json()
    }
}

async function getDepartements() {
    //on attend le retour de l'appel à l'api
    let aDep = await callApi(API_BASE_URL + "/departements")

    //pour chaque departement je crée une option
    aDep.forEach(function (val) {
        let option = document.createElement('option')
        option.innerText = val.code + ' - ' + val.nom
        option.value = val.code
        dep.append(option)
    })
}

function addDepartementEvent() {

    dep.addEventListener('change', async function () {

        //récupération des villes du département depuis l'api
        let cities = await callApi(`${API_BASE_URL}/departements/${this.value}/communes`)
        //remise à 0 du select
        citySelect.innerHTML = '<option value="" selected disabled>- Communes -</option>'

        //création des options
        cities.forEach(function (val) {
            let option = document.createElement('option')
            option.innerText = val.nom
            option.value = val.code
            citySelect.append(option)
        })
    })
}

function addCityEvent(){

    citySelect.addEventListener('change', function (){

        let div = document.createElement('div')


    })

}


function init() {
    getDepartements()
    addDepartementEvent()
}

init()











