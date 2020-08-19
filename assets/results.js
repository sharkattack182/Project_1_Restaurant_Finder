var searchParams = new URLSearchParams(window.location.search); //this is what jeff helped us qith that pulls the cusine id**
var cuisineId = searchParams.get('cuisine');


$(".btn-radius").on("click", function() {  //on click function that starts when you clikc a radius option 
    
    var radius = $(this).val();  //sets the value of radius to the value of the button pressed
    $(".hide").addClass("show"); //this show the first row of cards by adding class show styled in css to display: inline
    $.get("https://ipapi.co/json").then(function (response) { // call our first api that gets our location
   

    var latitude = response.latitude; //we set a variable to get our lat from the response
    var longitude = response.longitude; // we do the same for our long
    
    var settings = {            //call our secind api zomato
        headers: {
            'user-key': "34f65fbedd34ab6e2274901ccfc95f56"
        },
        method: "GET",
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=%23%23&count=10&lat=" + latitude + "&lon=" + longitude + "&radius=" + radius + "&cuisines=" + cuisineId + "&sort=rating" //+ ButtonResult  need to set cuisine to a variable
                                                                                            // set our latitude     //set long              //set radius from button val  //cusine id** is value of button on Home page
    }
    $.ajax(settings).then(function (res) {
        console.log(res);  //console logs the pobject where we get all the info (response)
        //first card
        $(".img1").attr('href', JSON.stringify(res.restaurants[0].restaurant.photos_url));  //calling the object with the class of img1 and setting its attribute to a string of "res.res...." this is an image tag
        $(".name1").text((res.restaurants[0].restaurant.name)); //using jquery i set the text of a bunch of different elements to the response value that we needed for each element
        $(".description1").text((res.restaurants[0].restaurant.cuisines));
        $(".address1").text((res.restaurants[0].restaurant.location.address));
        $(".phone1").text((res.restaurants[0].restaurant.phone_numbers));
        $(".rating1").text(("Rating: " + res.restaurants[0].restaurant.user_rating.aggregate_rating));
        $(".web1").attr('href', res.restaurants[0].restaurant.url); //set attribute instead of text gave it an hfref and set value to the url in the response
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
        //forth card
        $(".img4").attr('href', JSON.stringify(res.restaurants[3].restaurant.photos_url));
        $(".name4").text((res.restaurants[3].restaurant.name));
        $(".description4").text((res.restaurants[3].restaurant.cuisines));
        $(".address4").text((res.restaurants[3].restaurant.location.address));
        $(".phone4").text((res.restaurants[3].restaurant.phone_numbers));
        $(".rating4").text(("Rating: " + res.restaurants[3].restaurant.user_rating.aggregate_rating));
        $(".web4").attr('href', res.restaurants[3].restaurant.url);
        //fifth card
        $(".img5").attr('href', JSON.stringify(res.restaurants[4].restaurant.photos_url));
        $(".name5").text((res.restaurants[4].restaurant.name));
        $(".description5").text((res.restaurants[4].restaurant.cuisines));
        $(".address5").text((res.restaurants[4].restaurant.location.address));
        $(".phone5").text((res.restaurants[4].restaurant.phone_numbers));
        $(".rating5").text(("Rating: " + res.restaurants[4].restaurant.user_rating.aggregate_rating));
        $(".web5").attr('href', res.restaurants[4].restaurant.url);
        //sixth card
        $(".img6").attr('href', JSON.stringify(res.restaurants[5].restaurant.photos_url));
        $(".name6").text((res.restaurants[5].restaurant.name));
        $(".description6").text((res.restaurants[5].restaurant.cuisines));
        $(".address6").text((res.restaurants[5].restaurant.location.address));
        $(".phone6").text((res.restaurants[5].restaurant.phone_numbers));
        $(".rating6").text(("Rating: " + res.restaurants[5].restaurant.user_rating.aggregate_rating));
        $(".web6").attr('href', res.restaurants[5].restaurant.url);

    })
});
})


$(".show-more").on("click", function() {
    $(".hide2").addClass("show2");
    $(this).addClass("hide");
})

