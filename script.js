

function openVideo() {
    window.open('https://animesuge.to/anime/one-piece-ov8/ep-1', '_blank');
}

function openVideo2() {
    window.open('https://animesuge.to/anime/naruto-shippuden-qv3/ep-1', '_blank');
}



function searchAnime() {
    var input, filter,card,cards, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("peace");

    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        txtValue = card.innerText || card.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}

document.getElementById("searchInput").addEventListener("input", searchAnime);











var app = angular.module('animMeApp',[]);


app.controller('MainController', function($scope) {
   
    $scope.title = "Anime List";
    $scope.animeList = [
        { title: "One Piece" },
        { title: "Naruto Shippuden" },
        { title: "Jujutsu Kaisen" },
        { title: "Dragonball Super" },
        { title: "Captain Tsubasa" },
        { title: "Kimetsu No Yaiba s1" },
        { title: "ATTACK ON TITAN" },
        
    ];

        });
       