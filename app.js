document.addEventListener('DOMContentLoaded', function () {

//Script for Search Bar Toggle
const searchBarButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');

let isSearchBarVisible = false;

searchBarButton.addEventListener('click', function () {
    if (isSearchBarVisible) {
        searchBar.style.display = 'none';
    } else {
        searchBar.style.display = 'block';
    }

    isSearchBarVisible = !isSearchBarVisible;
});


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