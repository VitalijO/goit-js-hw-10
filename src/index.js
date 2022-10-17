import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import countryTpl from '../src/js-templates/counry-list.hbs'
import countryInfoTpl from '../src/js-templates/country-info.hbs' 
import { url, fetchCountries}  from './fetchCountries.js'
 
 
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input#search-box') 
const containerCountryList = document.querySelector('.country-list')
const containerCountryInfo = document.querySelector('.country-info')
 

function createMarkupCountryList(arr) {
    return arr.map(country=>countryTpl(country)).join('')}


function createMarkupCountryInfo(arr) {
    return arr.map(country => countryInfoTpl(country)).join('')
}
function destroyTpl(a) {
    a.innerHTML = "";
}
     
input.addEventListener("input", debounce(fetchCountrieByName, DEBOUNCE_DELAY ))

function fetchCountrieByName(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim()
    if (!inputValue) {
       destroyTpl(containerCountryList)
       destroyTpl(containerCountryInfo)
        return
    }
    
fetchCountries(inputValue).then(manageSearchResult) .catch(error => {
      Notiflix.Notify.failure("Oops, there is no country with that name");    
  }); 
//fetchCountrieByName().then(data => { manageSearchResult(data) }).catch(error => {..... its the same!!!
}

function manageSearchResult(data) {
    if (data.length === 1) {
            const markupInfo = createMarkupCountryInfo(data)
            destroyTpl(containerCountryList)
            containerCountryInfo.innerHTML = markupInfo;  
        }

        else if (data.length>1 && data.length<10) {
            const markupCountrys = createMarkupCountryList(data)
            destroyTpl(containerCountryInfo)
            containerCountryList.innerHTML = markupCountrys
        }

        else if (data.length >10) {
           Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
        }

        else if (data.length===""){
         destroyTpl(containerCountryList)
         destroyTpl(containerCountryInfo)
        }
}

