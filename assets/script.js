
$.get("https://ipapi.co/json").then(function (response) {
    console.log(response);
    console.log(response.latitude);
    console.log(response.longitude);

    var latitude = response.latitude;
    var longitude = response.longitude;



    var settings = {  //cuisine type quert
        headers: {
            'user-key': "34f65fbedd34ab6e2274901ccfc95f56"
        },
        method: "GET",
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=%23%23&count=3&lat=" + latitude + "&lon=" + longitude + "&radius=58046.72"

    }
    $.ajax(settings).then(function (res) {
        console.log(res);
        //this goes inside a for loop and we just make a for loop <3 that will and change the zeros to i's.
        $(".name").text((res.restaurants[0].restaurant.name))
        $(".description").text((res.restaurants[0].restaurant.cuisines))
        $(".address").text((res.restaurants[0].restaurant.location.address))
        $(".phone").text((res.restaurants[0].restaurant.phone_numbers))
        $(".rating").text(("Rating: " + res.restaurants[0].restaurant.user_rating.aggregate_rating))
    })

    //want to experiment with creating the cards dynamically

});