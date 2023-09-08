document.addEventListener('DOMContentLoaded', function () {

/*Script for Search Bar Toggle
const searchBarButton = document.querySelector('#search-button');
const searchBar = document.querySelector('#search-bar');

searchBarButton.addEventListener('click', function(){
    searchBar.classList.remove('custom-hidden');
});

searchBarButton.addEventListener('click', function(){
    searchBar.classList.add('custom-hidden');
})*/

//Script for SideBar Navigation
const openMenuButton = document.getElementById('open-menu-button');
const closeMenuButton = document.getElementById('close-menu-btn');
const sideBar = document.getElementById('sidebar');

openMenuButton.addEventListener('click', function(){
    sideBar.classList.toggle('custom-hidden');
});

closeMenuButton.addEventListener('click', function(){
    sideBar.classList.add('custom-hidden');
});

});