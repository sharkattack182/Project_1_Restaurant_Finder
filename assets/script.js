
$.get("https://ipapi.co/json").then(function (response) {
    console.log(response);
    console.log(response.latitude);
    console.log(response.longitude);

    var latitude = response.latitude;
    var longitude = response.longitude;
    var ButtonResult = "Bar"; //need to work this variable out and use jquery to add the value of wahtever button is pressed


    var settings = {  
        headers: {
            'user-key': "34f65fbedd34ab6e2274901ccfc95f56"
        },
        method: "GET",
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=%23%23&count=10&lat=" + latitude + "&lon=" + longitude + "&radius=58046.72&cuisines="+ ButtonResult + "&sort=rating" //+ ButtonResult  need to set cuisine to a variable

    }
    $.ajax(settings).then(function (res) {
        console.log(res);
        //first card
        $(".img1").attr('href', JSON.stringify(res.restaurants[0].restaurant.photos_url));
        $(".name1").text((res.restaurants[0].restaurant.name));
        $(".description1").text((res.restaurants[0].restaurant.cuisines));
        $(".address1").text((res.restaurants[0].restaurant.location.address));
        $(".phone1").text((res.restaurants[0].restaurant.phone_numbers));
        $(".rating1").text(("Rating: " + res.restaurants[0].restaurant.user_rating.aggregate_rating));
        $(".web1").attr('href', res.restaurants[0].restaurant.url);
        //second card
        $(".img2").attr('href', JSON.stringify(res.restaurants[1].restaurant.photos_url));
        $(".name2").text((res.restaurants[1].restaurant.name));
        $(".description2").text((res.restaurants[1].restaurant.cuisines));
        $(".address2").text((res.restaurants[1].restaurant.location.address));
        $(".phone2").text((res.restaurants[1].restaurant.phone_numbers));
        $(".rating2").text(("Rating: " + res.restaurants[1].restaurant.user_rating.aggregate_rating));
        $(".web2").attr('href', res.restaurants[1].restaurant.url);
        //third card
        $(".img3").attr('href', JSON.stringify(res.restaurants[2].restaurant.photos_url));
        $(".name3").text((res.restaurants[2].restaurant.name));
        $(".description3").text((res.restaurants[2].restaurant.cuisines));
        $(".address3").text((res.restaurants[2].restaurant.location.address));
        $(".phone3").text((res.restaurants[2].restaurant.phone_numbers));
        $(".rating3").text(("Rating: " + res.restaurants[2].restaurant.user_rating.aggregate_rating));
        $(".web3").attr('href', res.restaurants[2].restaurant.url);
    })

    //want to experiment with creating the cards dynamically

});