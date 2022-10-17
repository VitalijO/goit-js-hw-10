// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
// import countryTpl from '../src/js-templates/counry-list.hbs'
// import countryInfoTpl from '../src/js-templates/country-info.hbs' 

console.log(122222222222222)
 
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input#search-box') 
const containerCountryList = document.querySelector('.country-list')
const containerCountryInfo = document.querySelector('.country-info')
 

// function createMarkupCountryList(arr) {
//     return arr.map(country=>countryTpl(country)).join('')}

// function createMarkupCountryInfo(arr) {
//     return arr.map(country => countryInfoTpl(country)).join('')
// }
    

  
// input.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY ))


// function fetchCountries(e) {
//     e.preventDefault();
//     const inputValue = e.target.value.trim()
//     if (!inputValue) {
//        containerCountryList.innerHTML = "";
//        containerCountryInfo.innerHTML = "";
//         return
//     }
    
// const r = fetch(`https://restcountries.com/v3.1/name/${inputValue}/?fields=name,capital,population,flags,languages`)
// .then(response => {
//     if (!response.ok) {
//         throw new Error(response.status);
//     }
//     console.log(response)
//     return response.json();
//   })
//     .then(data => {
//         if (data.length === 1) {
//             const markupInfo = createMarkupCountryInfo(data)
//             containerCountryList.innerHTML = "";
//             containerCountryInfo.innerHTML = markupInfo;
//         }

//         else if (data.length>1 && data.length<10) {
//             const markupCountrys = createMarkupCountryList(data)
//             containerCountryInfo.innerHTML = "";
//             containerCountryList.innerHTML = markupCountrys
//         }

//         else if (data.length >10) {
//            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//         }

//         else if (data.length===""){
//          containerCountryList.innerHTML = "";
//         containerCountryInfo.innerHTML = "";
//         }
           
//   })
//   .catch(error => {
//       console.log(error)
//       Notiflix.Notify.failure("Oops, there is no country with that name");
      
//   });
// }