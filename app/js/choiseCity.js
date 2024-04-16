
(function () {
    const selectCity = document.getElementById("select__city");

selectCity.addEventListener('change', ()=> window.location.href = 'https://puur.ru/' + selectCity.value)

}());