const table_body=document.querySelector('.table_body');

let cities = [
    {
        city:'Cəbrayıl',
        villages:90,
        date:'04.10.2020'
    },
    {
        city:'Füzuli',
        villages:53,
        date:'17.10.2020'
    },
    {
        city:'Zəngilan',
        villages:52,
        date:'20.10.2020'
    },
    {
        city:'Qubadlı',
        villages:41,
        date:'25.10.2020'
    },
    {
        city:'Şuşa',
        villages:0,
        date:'08.11.2020'
    },
    {
        city:'Ağdam',
        villages:77,
        date:'20.11.2020'
    },
    {
        city:'Kəlbəcər',
        villages:127,
        date:'25.11.2020'
    },
    {
        city:'Laçın',
        villages:3,
        date:'26.08.2022'
    },
    {
        city:'Ağdərə',
        villages:0,
        date:'20.09.2023'
    },
    {
        city:'Xocalı',
        villages:9,
        date:'24.09.2023'
    },
    {
        city:'Xocavənd',
        villages:35,
        date:'26.09.2023'
    },
    {
        city:'Xankəndi',
        villages:0,
        date:'15.10.2023'
    },
];

for (let i=0;i< cities.length;i++) {
    let city=`<tr>
            <th scope="row">${i+1}</th>
            <td>${cities[i].city}</td>
            <td>${cities[i].villages}</td>
            <td>${cities[i].date}</td>
          </tr>`

    
          table_body.innerHTML+=city;
}


//Ən çox kəndə sahib olan rayonun adını göstərən funksiya:

function findCityWithMaxVillages(arr) {
    let cityObj= arr.reduce((maxCity, currentCity) =>
         currentCity.villages > maxCity.villages ? currentCity : maxCity
    )
    return console.log(cityObj.city);
};

findCityWithMaxVillages(cities);


//Azad edilən rayonlar arasında adı ən uzun olan rayonun necə kəndi olduğunu göstərən funksiya:

function findCityWithLongestName(arr) {
    let cityObj= arr.reduce((longestName, currentName) => {
        return currentName.city.length > longestName.city.length ? currentName : longestName;
    })
    return console.log(cityObj.villages);
};

findCityWithLongestName(cities);


//Azad edilən rayonların adında a hərfi olan rayonların siyahısını array olaraq ekranda göstərilməsi:

let findCitiesWithA = function(arr) {

    let citiesName= arr.filter(cityObj => cityObj.city.toLowerCase().includes('a'));
    let citiesArr = [];

    for (let i = 0; i < citiesName.length; i++) {
        let element = citiesName[i].city;

        citiesArr.push(element)
        
    }

    return console.log(citiesArr);
};

findCitiesWithA(cities);



//Ümumi azad edilən kənd sayını göstərən funksiya:

let totalVillage = function(arr) {
    let total = arr.reduce((sum,cityObj) => sum + cityObj.villages, 0);
    return console.log(total);
};
totalVillage(cities);