function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}
function initMap(){
	// Styles a map in night mode.
	var map			= new google.maps.Map(document.getElementById('map'), {
		center: {lat: 21.006464, lng: 105.8216693},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		streetViewControl: false,
		disableDefaultUI: true,
		zoom: 16,
		styles: [{
				"featureType": "all",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#dcdcdc"
					},
					{
						"weight": "0.5"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text",
				"stylers": [
					{
						"color": "#b7b7b7"
					},
					{
						"weight": "1.00"
					},
					{
						"saturation": "-100"
					},
					{
						"lightness": "-100"
					},
					{
						"gamma": "0.00"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"weight": ".5"
					},
					{
						"color": "#dcdcdc"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
					},
					{
						"visibility": "on"
					}
				]
			}
		]
	});
	var image = {
		url: 'images/map-marker.png',
		size: new google.maps.Size(45, 45),
	};
	var myLatlng		= new google.maps.LatLng(21.006464, 105.8216693);
	var title			= document.getElementById('map').getAttribute("data-title");
	var phone			= document.getElementById('map').getAttribute("data-phone");
	var address			= document.getElementById('map').getAttribute("data-address");
	var email			= document.getElementById('map').getAttribute("data-email");
	var contentString	= '<div><h4>'+title+'</h4><p>'+address+'</p><p>'+phone+'</p><p>'+email+'</p></div>';
	var infowindow		= new google.maps.InfoWindow({
		content: contentString
	});
	var marker		= new google.maps.Marker({
		position: myLatlng,
		icon: image,
		title: title
	});
	marker.setMap(map);
	marker.addListener('click', function(){
		infowindow.open(map, marker);
	});
	new google.maps.event.trigger(marker, 'click' );
  }
jQuery(document).ready(function(){
	var $	= jQuery;
	cbpBGSlideshow.init();
	var hash	= window.location.hash;
	if(hash!=='' && $(hash).length){
		$('html, body').animate({
			scrollTop: $(hash).offset().top-90
		}, 1000);
	}
	$(".scrollToSection").click(function(){
		var hash	= $(this).attr("href");
		if(hash!=='' && $(hash).length){
			$('html, body').animate({
				scrollTop: $(hash).offset().top-90
			}, 1000);
		}
		return false;
	});

	$(".unclickable").click(function(){
		return false;
	});
	$(".more").click(function(){
		$(this).parent().toggleClass("open");
		return false;
	});
	$(window).resize(function(){
		$(".gallery_item").each(function(){
			var _this_height			= $(this).height();
			var _gallery_name_height	= $(this).find(".gallery_name h3").outerHeight();
			$(this).find(".gallery_name").css("bottom", (_gallery_name_height-_this_height));
		});
	});
	$(window).trigger("resize");


	if($("#loading").length){
		setTimeout(function(){
			$("body").removeClass("home");
			$("#loading").fadeOut("slow");
		}, 4500);
	}
});
jQuery(window).load(function(){
	var $	= jQuery;
	
	$('.gallery_masonry_wrapper').masonry({
		percentPosition: true,
		itemSelector: '.gallery_masonry_item'
	});
});