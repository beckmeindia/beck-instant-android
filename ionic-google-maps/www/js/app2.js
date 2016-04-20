var billamt="add";var custPhone;var custId;var custName;var deliveryFare="add";var deliveryaddr="add";var deliverycode;var deliverylat="add";
var deliverylng="add";var deliverytime="add";var delvcontactaddr="add";var delvcontactname="add";var delvcontactnum="add";var merchant="no";var orderTimestamp;
var ordrtype="Pick";var paymentMode;var pickcontactaddr;var pickcontactname;var pickcontactnum;var pickupaddr;var pickupdist;var pickupdropdist="add";var pickuplat;
var pickuplong;var pickuptime; var myLat; var myLng; var deliveradius=0; var trckmap; var friderid; var ridersarr;
var ridersFirebaseRef = new Firebase("https://beckme.firebaseio.com"); var geoFire = new GeoFire(ridersFirebaseRef.child("_geofire")); var vehiclesInQuery = {}; var nowready =0;
var pickradius = 4; var delvradius = 20; var allwrvgeo = 0; var autoflag = 0; var estifare = 0; var delvesti; var estidistance = ""; var deliveryestlat; var deliveryestlng; var loaded =0;
var geocoder = new google.maps.Geocoder; var datefuture2; var timefuture2;
function openauto(){
	$("#someStuff1").focus();
}

function openauto2(){
	$("#someStuff").focus();
}
function payment(){	
	paymentMode = document.getElementById("mode").value; localStorage.setItem("paymentMode", document.getElementById("mode").value);
  	document.getElementById("paymntmdisply").innerHTML = document.getElementById("mode").value;		
  }
function initMap() {
  trckmap = new google.maps.Map(document.getElementById('trckmap'), {
  center: {lat: 19.03797, lng: 72.92103},
  disableDefaultUI: true,
  zoom: 11,
  
  styles: [{
        featureType: "poi",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
    },{
	featureType: "all",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
	}
	]
	
}) 
}
	
	function callsupport(){
		navigator.notification.confirm("Contact us at +91 "+localStorage.getItem("supportnumber"),function(buttonIndex){
			if(buttonIndex==1){ location.href = "tel: +91"+localStorage.getItem("supportnumber")}
			},'Call Support',['CALL','']); 
	}
	
	function callrider(){
		navigator.notification.confirm("You can contact your rider at +91 "+localStorage.getItem("ridernumber"),function(buttonIndex){
			if(buttonIndex==1){ location.href = "tel: +91"+localStorage.getItem("ridernumber")}
			},'Call Rider',['CALL','']); 
	}
	
	var usrphonenum; var otp = Math.floor((Math.random() * 900) + 1000);
	
	function addmoney(){
      var wishmoney = document.getElementById("wishbalance").innerHTML;
	  var usrinputcode = document.getElementById("vouchercode").value;
	   ridersFirebaseRef.child("users").child(custId).once('value', function(snapshot) {
		if(usrinputcode == localStorage.getItem("wishcode") && usrinputcode != snapshot.val().promocode){
        var total = Number(document.getElementById("wishbalance").innerHTML) + Number(localStorage.getItem("wishcodevalue"));
        ridersFirebaseRef.child("users").child(custId).update({wishbalance:total,promocode:usrinputcode});
		navigator.notification.alert("Beck Money succesfully added",function(){},'Beck Money','OK');
        
        }else{
        navigator.notification.alert("Sorry, the promo code you entered is either used or wrong",function(){},'Promocode','OK');
        }		  
	  })
      }
	
	function otpcall(){
	var	usrphnum = document.getElementById("usrtel").value;
	$.ajax({
      url: 'http://beckotp.com/otp.php',
      data:
      {
        phoneNumber : usrphnum,
        randomNumber : otp + ' is your OTP (One Time Password) for Beck. Please use the password to complete your Registration.'
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       // console.log("worked");
       },
      type: 'POST'
	});
	if(SMS) SMS.startWatch(function(){
        		//alert('watching started');
        	}, function(){
        		//alert('failed to start watching');
        	});
	if (! SMS ) { alert( 'SMS plugin not ready' ); return; }
	document.addEventListener('onSMSArrive', function(e){
            	var data = e.data;
				document.getElementById("otpcode").value = JSON.stringify( data.body ).substring(1,5);	
				document.getElementById("verifyotp").click();
				
            });
	}
	  
	function latecall(){
	$.ajax({
      url: 'http://beckotp.com/otp.php',
      data:
      {
        phoneNumber : custId,
        randomNumber : 'Thanks for requesting from BECK. Our operational hours presently are from 9am to 7pm. Our team shall get back to you in the morning to complete this delivery.'
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       // console.log("worked");
       },
      type: 'POST'
	});
	}
	

	  
	
	function mailcall(){
	$.ajax({
      url: 'https://www.beckme.in/request.php',
      data:
      {
        name : custName,
		email : custEmail,
		phoneno : custPhone
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       // console.log("worked");
       },
      type: 'POST'
	});
	}
	  
	var paymentmd = "cod"; var eta; var app = angular.module('starter', ['ionic','firebase']); var div; var map; var ownlat = 19.03797; var ownlng = 72.92103;  var lat2; var lng2;
	app.run(function($ionicPlatform) {
	$ionicPlatform.registerBackButtonAction(function(event) {
    if (localStorage.getItem("screenum")==1) { // your check here
        
	  $ionicPopup.confirm({
        title: 'Close App',
        template: 'Are you sure you want to exit?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      })
    }
	}, 100);
  
	$ionicPlatform.ready(function() {
		 var args = [];
    var devKey = "MDjGJMbk2YdEkju7ZCbi3Z";   // your AppsFlyer devKey
    args.push(devKey);
    window.plugins.appsFlyer.initSdk(args);
	var clickyClasses = ['sound-click', 'button']; nativeclick.watch(clickyClasses);
	var clickyClasses2 = ['sound-click', 'setBtn']; nativeclick.watch(clickyClasses2); 
	var clickyClasses3 = ['sound-click', 'button-icon']; nativeclick.watch(clickyClasses3);
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	div = document.getElementById("map_canvas");
    map = plugin.google.maps.Map.getMap(div,{
	'controls': {'compass': false,'myLocationButton': true,'indoorPicker': false,'zoom': false},
	'gestures': {'scroll': true,'tilt': false,'rotate': false,'zoom': true},
	'camera': {'latLng': new plugin.google.maps.LatLng(ownlat,ownlng),'zoom': 12}
    });
	document.addEventListener("offline", onOffline, false);	
	document.addEventListener("resume", onResume, false);
	map.on(plugin.google.maps.event.MAP_READY, function(latLng) {if(loaded==0){map.setClickable(false)}; map.getMyLocation({enableHighAccuracy: true},onSuccess, onError);setTimeout(function(){navigator.splashscreen.hide()},4000)});
	map.on(plugin.google.maps.event.CAMERA_CHANGE, onMapCameraChanged)	
	})
});

	var onSuccess = function(position){
	allwrvgeo = 1;	
	document.getElementById("mylocnbtn").style.marginTop = Number(document.getElementById('map_canvas').offsetHeight - 80)+"px";	
	document.getElementById("mylocnbtn").style.display="block"; myLat = position.latLng.lat; myLng = position.latLng.lng; 
	map.animateCamera({ 'target': new plugin.google.maps.LatLng(position.latLng.lat,position.latLng.lng), 'tilt': 0, 'zoom': 16, 'bearing': 0, 'duration': 500 });			
	
	}
	var onError  = function(error){	
	allwrvgeo = 1;
	cordova.plugins.locationServices.geolocation.getCurrentPosition(function(position){
	document.getElementById("mylocnbtn").style.marginTop = Number(document.getElementById('map_canvas').offsetHeight - 80)+"px";		
	document.getElementById("mylocnbtn").style.display="block"; myLat = position.coords.latitude; myLng = position.coords.longitude; 
	map.setCenter(new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude)); map.setZoom(16);
	
	}, function(err){
	allwrvgeo = 1;
	document.getElementById("mylocnbtn").style.display="none";
	navigator.notification.alert("Your location could not be accessed. Please find your location from the search bar",function(){},'Location not found','OK');
	},{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true, priority: cordova.plugins.locationServices.geolocation.priorities.PRIORITY_HIGH_ACCURACY,
	interval: 6000, fastInterval: 1000 });
	}
 
	function mylocation(){ map.getMyLocation({enableHighAccuracy: true},onSuccess, onError)};
	
	function getRandomInt (min, max) { return Math.floor (Math.random () * (max - min + 1) ) + min}
	var icon = "file:///android_asset/www/img/bike4.png";
	
	function updateta(vehicleslist){
	var currentTime = new Date();
	var currentOffset = currentTime.getTimezoneOffset();
	var ISTOffset = 330; 
	var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
	var nowtime = ISTTime.getHours();		
	if(nowtime >= 19 || nowtime <= 8){
	map.clear();
	document.getElementById('pickupetatime').innerHTML = "Next Day"; document.getElementById('pickuptime2').innerHTML = "Next Day"; document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;">--&nbsp;</div>PICKUP HERE NEXT DAY';
	pickuptime = "none"; friderid = "late"; //map.clear();
	}else{		
	if(allwrvgeo == 1){
	var riderlist = {}; var lati; var longi; 
	map.getCameraPosition(function(camera) {
	lati = camera.target.lat, longi = camera.target.lng; 
	for (var key in vehicleslist) { var distance = GeoFire.distance([lati, longi], [vehicleslist[key].lat, vehicleslist[key].lon]); riderlist[key]=distance }; 
	var array=[];
	for(a in riderlist){array.push([a,riderlist[a]])};
	if(array.length>1){ 
	array.sort(function(a,b){return a[1] - b[1]});	
	ridersarr = JSON.stringify(array);
 
	var frider = array[0]; var disti = frider[1]; pickupdist = disti.toFixed(2)+""; friderid = frider[0]; var time = Math.round((disti/7)*60)+15; 
	if(time>160){
		document.getElementById('pickupetatime').innerHTML = "-- mins"; document.getElementById('pickuptime2').innerHTML = "-- mins"; document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;"></div>NO RIDERS PRESENT HERE';
		friderid="null"
	}else{
	localStorage.setItem("time",time); document.getElementById('pickupetatime').innerHTML = time+" mins"; document.getElementById('pickuptime2').innerHTML = time+" mins";
	document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;"> '+ time +' MIN </div>TAP HERE FOR PICKUP'; pickuptime = time+""; deliverytime = time+"";
	}
	}
	else if(array.length==1){
	var frider = array[0]; var disti = frider[1]; pickupdist = disti.toFixed(2)+""; friderid = frider[0]; var time = Math.round((disti/7)*60)+15; 
	if(time>160){
		document.getElementById('pickupetatime').innerHTML = "-- mins"; document.getElementById('pickuptime2').innerHTML = "-- mins"; document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;"></div>NO RIDERS PRESENT HERE';
		friderid="null"
	}else{
	localStorage.setItem("time",time); document.getElementById('pickupetatime').innerHTML = time+" mins"; document.getElementById('pickuptime2').innerHTML = time+" mins";
	document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;"> '+ time +' MIN </div>TAP HERE FOR PICKUP'; pickuptime = time+""; deliverytime = time+"";
	
	if(localStorage.getItem("ghostridr")=="1"){
    	localStorage.setItem("ghostridr","2");
    	setTimeout(function(){
    	map.addMarker({
      'position': new plugin.google.maps.LatLng(Number((Math.floor(pickuplat * 100) / 100)+""+Math.floor((Math.random() * 10000) + 1)), Number((Math.floor(pickuplong * 100) / 100)+""+Math.floor((Math.random() * 10000) + 1))),
      'icon':icon
    }, function(marker) {})
    	},2000)
    };
	}
	}
	else{
	pickuptime = "none"; friderid = "null";
	geoQuery.updateCriteria({radius:pickradius});
 
	};
	})
	}
	}
	};

	var geoQuery = geoFire.query({ center: [ownlat,ownlng], radius: 16.0 }); var nearest = 100;

	function onMapCameraChanged(position) {	
	document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;">&nbsp;<img src="ripple.gif"/>&nbsp;&nbsp;</div>CALCULATING PICKUP';
	
	var map = this; var lat; var lng;
	map.getCameraPosition(function(camera) {
	lat = camera.target.lat; lng = camera.target.lng;
});
	var screenum = localStorage.getItem("screenum"); 
	var latlng = {lat: position.target.lat, lng: position.target.lng};
	geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
				if(screenum == 3){
	lat2 = lat; lng2 = lng;	document.getElementById('someStuff').value = results[1].formatted_address;
 	deliveryaddr = results[1].formatted_address+" "; deliverylat = lat+" "; deliverylng = lng+" ";
	}
			else if(screenum == 1){	
	ownlat = lat; ownlng = lng;  document.getElementById('someStuff1').value = results[1].formatted_address;
	pickuplat = lat+" "; pickuplong = lng+" "; pickupaddr = results[1].formatted_address+" ";
	if(new Date().getHours()>19 || new Date().getHours()<9){
	document.getElementById('pickupetatime').innerHTML = "Next Day"; document.getElementById('pickuptime2').innerHTML = "Next Day"; document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;">--&nbsp;</div>PICKUP HERE NEXT DAY';
	pickuptime = "none"; friderid = "late";
	}else{
	updateta(vehiclesInQuery);
	setTimeout(function(){
		if(friderid=="null"){document.getElementById('pickupetatime').innerHTML = "-- mins"; document.getElementById('pickuptime2').innerHTML = "-- mins"; document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;"></div>NO RIDERS PRESENT HERE'}
	},10000);
	}
	}
	
	else if(screenum == 2){	
	ownlat = lat; ownlng = lng;		
	pickupaddr = results[1].formatted_address+" "; 
	pickuplat = lat+" "; pickuplong = lng+" ";	
	if(new Date().getHours()>19 || new Date().getHours()<9){
	document.getElementById('pickupetatime').innerHTML = "Next Day"; document.getElementById('pickuptime2').innerHTML = "Next Day"; document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;">--&nbsp;</div>PICKUP HERE NEXT DAY';
	pickuptime = "none"; friderid = "late";
	}else{
	updateta(vehiclesInQuery);
	setTimeout(function(){
		if(friderid=="null"){document.getElementById('pickupetatime').innerHTML = "-- mins"; document.getElementById('pickuptime2').innerHTML = "-- mins"; document.getElementById('seBtn1').innerHTML = '<div id="eta" ng-show="!screen" style="font-size:10px;color:#2bb1de; margin-right:5px; letter-spacing:1px; display:inline;"></div>NO RIDERS PRESENT HERE'}
	},10000);
	}
	};
	
		}
		else{
			document.getElementById('someStuff1').value = "Move pin to nearest location";
			document.getElementById('someStuff').value = "Move pin to nearest location";
		}
	});
}

geoQuery.on("ready", function() {
  nowready = 1;
});

geoQuery.on("key_entered", function(vehicleId, vehicleLocation, distance) {
	if(nearest >= distance){nearest = distance};
  ridersFirebaseRef.child("riders").child(vehicleId).once("value", function(dataSnapshot) {
    vehicle = dataSnapshot.val();
    if(vehicle.booked == "no"){
      vehiclesInQuery[vehicleId] = true;
    if (vehicle !== null && vehiclesInQuery[vehicleId] === true) {
      vehiclesInQuery[vehicleId] = vehicle; vehicle.marker = createVehicleMarker(vehicle); 
	   updateta(vehiclesInQuery);
    }
  };
  });
});


var icon = "file:///android_asset/www/img/bike4.png";
function createVehicleMarker(vehicle) {
	//console.log(vehicle.id);
	map.addMarker({
    'position': new plugin.google.maps.LatLng(vehicle.lat, vehicle.lon),
	'icon': icon,
	'myMsg': vehicle.id
    }, function(marker){
	geoQuery.on("key_exited", function(vehicleId, vehicleLocation) {
  var vehicle = vehiclesInQuery[vehicleId]; delete vehiclesInQuery[vehicleId];
  if(marker.get("myMsg")==vehicleId){
	marker.remove();
  }else{};
});
	});	 
}

function trackyourider(riderid,vehicle){
	setInterval(function(){
	geoFire.get(riderid).then(function(location) {			
		vehicle.marker.animatedMoveTo(location);
	});
	}, 6000);
	
}

function coordinatesAreEquivalent(coord1, coord2) { return (Math.abs(coord1 - coord2) < 0.000001)}

google.maps.Marker.prototype.animatedMoveTo = function(newLocation) {
  var toLat = newLocation[0];
  var toLng = newLocation[1];
  var fromLat = this.getPosition().lat();
  var fromLng = this.getPosition().lng();

  if(!coordinatesAreEquivalent(fromLat, toLat) || !coordinatesAreEquivalent(fromLng, toLng)) {
    var percent = 0;
    var latDistance = toLat - fromLat;
    var lngDistance = toLng - fromLng;
    var interval = window.setInterval(function () {
    percent += 0.01; var curLat = fromLat + (percent * latDistance);
    var curLng = fromLng + (percent * lngDistance);
    var pos = new google.maps.LatLng(curLat, curLng);
    this.setPosition(pos);
    if (percent >= 1) { window.clearInterval(interval)}}.bind(this), 50) }
	};

	app.factory("Auth", function($firebaseAuth) {
    var usersRef = new Firebase("https://beckme.firebaseio.com"); return $firebaseAuth(usersRef)
    });
	
	function onResume(){
		 if (window.cordova && typeof facebookConnectPlugin != 'undefined') {
           var fb_success = function (data) {};
            var fb_fail = function (data) {};
            facebookConnectPlugin.activateApp(fb_success, fb_fail);
        }
	}
	
	
	function onOffline() {
		navigator.splashscreen.show();
	navigator.notification.alert('There was some problem in your internet connectivity ', function(){},'Oops!','Try again');	
	setTimeout(function(){navigator.app.exitApp()},2000)
	}	

	function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}
var timeftr;
	function onSuccessdt(date) {
		document.getElementById("slotcard").style.display="block";
		var timefuture = String(date).split(" ");
		timeftr = timefuture[4];
		timefuture2 = tConvert(timefuture[4]);
		document.getElementById("slot").innerHTML = "Date: "+datefuture2+" <br> Time: "+timefuture2;
		document.getElementById("timepkcup").innerHTML = timefuture2;
		document.getElementById("pickpltr").style.display = "block"
}

function onErrordt(error) { // Android only
    //alert('Error: ' + error);
}

	
	// The controller starts here
	app.controller('appCtrl', function($scope, $ionicModal, $firebaseArray, $firebaseObject, Auth, $ionicScrollDelegate) {
		localStorage.setItem("ghostridr","1"); $scope.varri = 0; $scope.direcrslt = 0;
		setTimeout(function(){ 
		var divhyt = document.getElementById('map_canvas').offsetHeight;
		//alert(divhyt + " " + window.screen.height);
		document.getElementById("seBtn1").style.marginTop = Number(divhyt/2 - 62)+"px";		
		document.getElementById("arwMrk1").style.marginTop = Number(divhyt/2 - 32)+"px";		
		document.getElementById("seBtn").style.marginTop = Number(divhyt/2 - 62)+"px";		
		document.getElementById("arwMrk").style.marginTop = Number(divhyt/2 - 32)+"px";
		document.getElementById("seBtn1").style.display = "block";
	    document.getElementById("arwMrk1").style.display = "block";
	    document.getElementById("locationarr").style.marginTop = Number(divhyt/2 - 32)+"px";
		}, 6000);
		 
		ridersFirebaseRef.child("users").child("promocodes").once('value', function(snapshot) {
		localStorage.setItem("wishcode",snapshot.val().code); localStorage.setItem("wishcodevalue",snapshot.val().value);
		localStorage.setItem("wishdeal",snapshot.val().deal); localStorage.setItem("supportnumber",snapshot.val().support);
		pickradius = snapshot.val().pickradius; delvradius = snapshot.val().delvradius;
      });
		
	if(localStorage.getItem("authNum")===null){		
	}else{ 
	var usrId = localStorage.getItem("authNum"); 
	ridersFirebaseRef.child("users").child(usrId).once('value', function(snapshot) {
		custPhone = snapshot.val().id; custName = snapshot.val().name; custEmail = snapshot.val().email;
		localStorage.setItem("wishbalance",snapshot.val().wishbalance);
		localStorage.setItem("merchant",snapshot.val().merchant)
      });
	custId = usrId;
	var ref = new Firebase("https://beckme.firebaseio.com/users/"+usrId);
	var ref2 = new Firebase("https://beckme.firebaseio.com/ratecard/");
	var reff2 = new Firebase("https://beckme.firebaseio.com/ratecard2/");
	$scope.pickupdetails = $firebaseArray(ref.child("pickupsaved")); 
	$scope.deliverydetails = $firebaseArray(ref.child("deliverysaved")); 
	$scope.orders = $firebaseArray(ref.child("ordercomp")); 
	$scope.ordersgng = $firebaseArray(ref.child("ordergoing")); 
	var syncObject = $firebaseObject(ref);syncObject.$bindTo($scope, "wish");
	if(localStorage.getItem("merchant")=="yes"){$scope.rates = $firebaseArray(reff2)}else{$scope.rates = $firebaseArray(ref2)};
	};
	
	 $ionicModal.fromTemplateUrl('templates/dispatchltrconf.html', function(modal) {
        $scope.dispatchconfModal = modal;
  }, {
        scope: $scope, hardwareBackButtonClose: false,
        animation: 'slide-in-right'
  });
	
	
	$scope.rqstltr = function(){
		setInterval(function(){
			map.setClickable(false);
		},1000);
		$scope.laterModal.hide();
		$scope.dispatchconfModal.show();
		document.getElementById("slotcarddelv").style.display = "none";		
		document.getElementById("datepkcupconf").innerHTML = datefuture2;
		document.getElementById("timepkcupconf").innerHTML = timefuture2;
		document.getElementById("slotpick").innerHTML = pickcontactname+"<br>"+pickcontactnum+"<br>"+pickcontactaddr+"<br>Near: "+ pickupaddr;
		if(deliveryaddr=="add"){}else{
			document.getElementById("slotcarddelv").style.display = "block";
			document.getElementById("slotdelv").innerHTML = delvcontactname+"<br>"+delvcontactnum+"<br>"+delvcontactaddr+"<br>Near: "+ deliveryaddr;;
		}
		
	}
	
	$scope.closeltrconf = function(){
		$scope.dispatchconfModal.hide();
		navigator.splashscreen.show(); map.setClickable( false ); $scope.startModal.show();map.clear();
		map.refreshLayout(); map.setVisible(true);
		setTimeout(function(){
		map.clear(); location.reload()
		},300); 
	}
	
	$scope.dispatchltr = function(){
	if(Number((String(timeftr).split(":"))[0])>8 && Number((String(timeftr).split(":"))[0])<19) // check if inside operational hours	
	{
		var tdy = ((new Date()).toString()).split(" ");
			var tada = tdy[0]+" "+tdy[1]+" "+tdy[2]+" "+tdy[3];
		if(tada==datefuture2) // dates are same
		{		
		if(Number((String(timeftr).split(":"))[0]) > (Number((new Date).getHours()))){
			$scope.latererqst();
			//alert("dispatch called"); // call the dispatch later function
		}else{
			navigator.notification.alert('Please select a slot atleast one hour ahead from now', function(){},'Unavailable Slot','Try again');	
		}
		}else{
			$scope.latererqst();
			//alert("dispatch called"); //call the dispatch later function
		};
	}
	else{
		navigator.notification.alert('Sorry. Our operational hours are from 9am to 7pm', function(){},'Unavailable Slot','Try again');	
	}
	}
	
	$scope.datepickup = function(){
	document.getElementById("timepickp").style.display="none";
	document.getElementById("slotcard").style.display="none";
	document.getElementById("pickpltr").style.display="none";
	var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    minDate: (new Date()).valueOf()
	};
	datePicker.show(options, function(date){
	document.getElementById("timepkcup").innerHTML = "Add Time for Pickup";	
	document.getElementById("timepickp").style.display="block";
	var datefuture = String(date).split(" ");
	datefuture2 = datefuture[0]+" "+datefuture[1]+" "+datefuture[2]+" "+datefuture[3];
	document.getElementById("datepkcup").innerHTML = datefuture[0]+" "+datefuture[1]+" "+datefuture[2]+" "+datefuture[3];
	}, function(){})
	};
	
	$scope.timepickup = function(){
	var options2 = {
    date: new Date(),
    mode: 'time', // or 'time'
    minDate: (new Date()).valueOf()
	};
	datePicker.show(options2, onSuccessdt, onErrordt);
	}
	
	$scope.otpverify =	function(){
	usrphonenum = document.getElementById("usrtel").value;
	if(document.getElementById("otpcode").value==otp){
		if(SMS) SMS.stopWatch(function(){
        		//update('watching', 'watching stopped');
        	}, function(){
        	//	updateStatus('failed to stop watching');
        	});
	document.getElementById("donebtn").style.display = "none";
	localStorage.setItem("authNum",usrphonenum); authNum = 	usrphonenum;
	localStorage.setItem("wishbalance",0);
	ridersFirebaseRef.child("users").once('value', function(snapshot) {
	if(!snapshot.hasChild(usrphonenum)) {
		if(document.getElementById("merchantbox").checked){
			merchant = "yes";localStorage.setItem("merchant","yes");

		}
	ridersFirebaseRef.child("users").child(usrphonenum).set({ merchant:merchant, id:usrphonenum, email:document.getElementById("usremail").value, wishbalance:100, name:document.getElementById("usrname").value, promocode:"none"});
	//localStorage.setItem("custEmail",document.getElementById("usremail").value);
	}else{
		//localStorage.setItem("custEmail",snapshot.child(usrphonenum).val().email);
		localStorage.setItem("merchant",snapshot.child(usrphonenum).val().merchant);
			if(snapshot.child(usrphonenum).val().merchant=="no"){ridersFirebaseRef.child("users").child(usrphonenum).update({ id:usrphonenum, email:document.getElementById("usremail").value, name:document.getElementById("usrname").value});
		};
	}		
	});	
	map.setClickable( true );$scope.signupModal.hide();$scope.otpModal.hide(); $scope.autoA.hide();
	var usrId = localStorage.getItem("authNum"); custId = usrId;
	var ref = new Firebase("https://beckme.firebaseio.com/users/"+usrId);
	var ref2 = new Firebase("https://beckme.firebaseio.com/ratecard/");
	$scope.pickupdetails = $firebaseArray(ref.child("pickupsaved")); 
	$scope.deliverydetails = $firebaseArray(ref.child("deliverysaved")); 
	$scope.orders = $firebaseArray(ref.child("ordercomp")); 
	$scope.ordersgng = $firebaseArray(ref.child("ordergoing")); 
	var syncObject = $firebaseObject(ref);syncObject.$bindTo($scope, "wish");
	$scope.rates = $firebaseArray(ref2)} else{ navigator.notification.alert("The code you entered is wrong. Please close app and try again",function(){},'Verification Code','OK')};	};
	google.maps.event.addDomListener(window, "load", initMap);  $scope.paymentmode = "Select One";	paymentMode = "Select One"; localStorage.setItem("paymentMode", "Select One");
	localStorage.setItem("delvflag","2");
	$scope.login = function(authMethod) {
    Auth.$authWithOAuthRedirect(authMethod).then(function(authData) {
    }).catch(function(error) {
      if (error.code === 'TRANSPORT_UNAVAILABLE') {
        Auth.$authWithOAuthPopup(authMethod).then(function(authData) {
        });
      } else {
       // console.log(error);
      }
    });
	};
  
  	$ionicModal.fromTemplateUrl('templates/track.html', {
    scope: $scope,  animation: 'slide-in-right',  hardwareBackButtonClose: false
    }).then(function (modal) {
	$scope.trackModal = modal; 
	$scope.trackModal.show();
	});
	
	$scope.closetrack = function(){
		var screen = localStorage.getItem("screenum");
		if(screen==1){
			$scope.trackModal.hide();
		}
		else{
		$scope.trackModal.hide();
		navigator.splashscreen.show(); map.setClickable( false ); $scope.startModal.show();map.clear();
		map.refreshLayout(); map.setVisible(true);
		setTimeout(function(){
		map.clear(); location.reload()
		},300); 
		}
		
	}
		
	function onsignoutConfirm(buttonIndex){ 
	if(buttonIndex==2){ 
	localStorage.clear(); navigator.splashscreen.show(); map.setClickable( false ); $scope.startModal.show();
	setTimeout(function(){
	location.reload()		
	},300);
	}else if(buttonIndex==1){}
	}
		
	$scope.signout = function(){
	//localStorage.clear(); navigator.splashscreen.show(); map.setClickable( false ); $scope.startModal.show();location.reload();
	navigator.notification.confirm('Are you sure you want to Logout?',onsignoutConfirm,'Logging out',['NO','YES']); 
	}
	
 	$ionicModal.fromTemplateUrl('templates/start.html', {
    scope: $scope,  hardwareBackButtonClose: false,
    }).then(function (modal) {
	$scope.startModal = modal; $scope.startModal.show(); document.getElementById("pane").style.display = "block";
	 
	var timer = setInterval(function(){
		if(nowready==1){
			setTimeout(function(){
			$scope.startModal.hide(); map.setClickable(true);updateta(vehiclesInQuery); loaded =1	
			},5000);
			clearInterval(timer)
		}
		}, 3000);
	});
	
	function onConfirm2(buttonIndex){ 
	if(buttonIndex==2){ 
	navigator.splashscreen.show(); map.setClickable( false ); $scope.startModal.show();
	map.refreshLayout(); map.setVisible(true);
	setTimeout(function(){
		map.clear(); location.reload()
		},300); 
	}else if(buttonIndex==1){}
	}
	
	$scope.strtModal = function(){
	navigator.notification.confirm('This will begin the application from start',onConfirm2,'Restarting',['NO','YES']); 
	};
	
	
	function onAdddelv(buttonIndex){ 		
	if(buttonIndex==2){ 
	autoflag = 1;
	$scope.getfare2()		
	}else if(buttonIndex==1){}; 		
	}	
	
	$scope.getfare2 = function(){
	allwrvgeo = 0; map.setClickable(false);
	document.getElementById("tint").style.display="block";
	map.animateCamera({ 'target': new plugin.google.maps.LatLng(ownlat, ownlng), 'tilt': 0, 'zoom': 13, 'bearing': 0, 'duration': 500 });		
	lat2 = ownlat; lng2 = ownlng; $scope.$apply(function () { $scope.screen = 1 });
	map.clear(); document.getElementById('someStuff').value = "Tap Here"; localStorage.setItem("screenum","2"); geoQuery.cancel(); 
	if(localStorage.getItem("delvflag")==1){document.getElementById("seBtn").style.display="none"; document.getElementById("arwMrk").style.display="none"}		
	}		

	$scope.getfare = function(){		
	navigator.notification.confirm('Do you want to add delivery location details?',onAdddelv,'DELIVERY DETAILS',['CANCEL','CONFIRM']); 	
	};
	

	$scope.location = {}; localStorage.setItem("screenum","1"); 
	
	$scope.backpickup = function(){

	$scope.screen = false;localStorage.setItem("screenum","1");
	map.setMyLocationEnabled(true);
	document.getElementById('someStuff1').value = pickupaddr
	}
	
	$scope.openthedeli = function(){
		$("#lalacomp").click()
	}
	
	$scope.openltrpage = function(){
		if(localStorage.getItem("authNum")===null){		
		$scope.signupModal.show(); map.setClickable(false);
	}else{ 
		$scope.laterModal.show(); map.setClickable(false);
	}
	}
	
	$scope.closeltr = function(){
		$scope.laterModal.hide();
		map.setClickable(true)
	}
	
	$ionicModal.fromTemplateUrl('templates/request.html', {
    scope: $scope,  animation: 'slide-in-right', hardwareBackButtonClose: false
    }).then(function (modal) {
		$scope.requestModal = modal;
	});
  
	
	$ionicModal.fromTemplateUrl('templates/dispatchltr.html', {
    scope: $scope, animation: 'slide-in-right'
    }).then(function (modal) {
		$scope.laterModal = modal;
	});
  
	$ionicModal.fromTemplateUrl('templates/delvdetails.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.delvModal= modal;
  });
	
	$ionicModal.fromTemplateUrl('templates/otp.html',  function(modal) {
        $scope.otpModal = modal;
  }, {
        scope: $scope, hardwareBackButtonClose: false,
        animation: 'slide-in-right'   
  });
  
	$ionicModal.fromTemplateUrl('templates/ratecard.html',  function(modal) {
        $scope.rateCard = modal;
  }, {
        scope: $scope,
        animation: 'slide-in-right'   
  });
  
	$ionicModal.fromTemplateUrl('templates/wishmoney.html', function(modal) {
        $scope.wishModal = modal;
  }, {
        scope: $scope,
        animation: 'slide-in-right'  
  });
  
	//modal for track orders
	$ionicModal.fromTemplateUrl('templates/orders.html', function(modal) {
        $scope.orderModal = modal;
  }, {
        scope: $scope,
        animation: 'slide-in-right'
  });
  
 
    
  $ionicModal.fromTemplateUrl('templates/custsignup.html', function(modal) {
        $scope.signupModal = modal;
  }, {
        scope: $scope, hardwareBackButtonClose: false,
        animation: 'slide-in-right'
  });
  
	$ionicModal.fromTemplateUrl('templates/buydetails.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.ModalA= modal;
  });
 
  $ionicModal.fromTemplateUrl('templates/payment.html',  function(modal) {
        $scope.ModalB = modal;
  }, {
        scope: $scope, hardwareBackButtonClose: false,
        animation: 'slide-in-right'
  });
  
   $ionicModal.fromTemplateUrl('templates/farestimate.html',  function(modal) {
        $scope.modalestimate = modal;
  }, {
        scope: $scope, 
        animation: 'slide-in-right'
  });
  
  $scope.openestimate = function(){
	estifare = "null"; $scope.modalestimate.show(); map.setClickable(false);
	document.getElementById("farepart").style.display = "none";
	document.getElementById("pickupesti").innerHTML = pickupaddr;
	delvesti = "Delivery Location";
	document.getElementById("deliesti").innerHTML = delvesti;
	setInterval(function(){
			if(estifare == "null"){
			//navigator.notification.alert("There was a snap. Please click the button again after a while.",function(){},'Oops','OK')
		}else{
			document.getElementById("farepart").style.display = "block";
			document.getElementById("farecase").innerHTML = estifare;
			document.getElementById("deliesti").innerHTML = delvesti;
			document.getElementById("distesti").innerHTML = estidistance;
		}
		},500);
  }
  
 $ionicModal.fromTemplateUrl('templates/profile.html',  function(modal) {
        $scope.autoA = modal;
  }, {
        scope: $scope,
        animation: 'slide-in-right'
  });
  
  $ionicModal.fromTemplateUrl('templates/autoB.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.autoB = modal;
  });
  $scope.showdelvseback = function(){
	 map.clear();$scope.screen = 1;
	 $scope.direcrslt = 0;
	   	map.animateCamera({
  'target': new plugin.google.maps.LatLng(lat2, lng2),
  'tilt': 0,
  'zoom': 16,
  'bearing': 0,
  'duration': 0
	});
	   document.getElementById("seBtn").style.display="block"; document.getElementById("arwMrk").style.display="block"; localStorage.setItem("screenum","3"); 
  };
  
  function onConfirmdelv(buttonIndex){ 
	if(buttonIndex==2){ 
	var pickupRef = ridersFirebaseRef.child("users").child(localStorage.getItem("authNum")).child("deliverysaved").push();
	pickupRef.set({ 'delvcontactname': document.getElementById("delvname2").value, 'delvcontactaddr': document.getElementById("delvaddr2").value, 'delvcontactnum': document.getElementById("delvcontact2").value});	
	}else if(buttonIndex==1){}; 
	}
	
	$scope.changetodelv = function(){
	localStorage.setItem("screenum","4"); $scope.screen = 4; allwrvgeo=0;
	$scope.delvModal.hide(); map.setClickable( true ); document.getElementById("seBtn").style.display="none";document.getElementById("arwMrk").style.display="none";

	}
	
	$scope.closesti = function(){
		$scope.modalestimate.hide(); map.setClickable(true);
	}
  
  $scope.showdelv = function(){
	  	if(document.getElementById("delvname2").value == "" || document.getElementById("delvaddr2").value == "" || document.getElementById("delvcontact2").value == ""){
          navigator.notification.alert("Please enter all details at Delivery location",function(){},'Delivery Details','OK');
        }else{
		var phoneNum = document.getElementById("delvcontact2").value.replace(/[^\d]/g, '');
		if(phoneNum.length == 10) {
			navigator.notification.confirm('Do you want to save this address?',onConfirmdelv,'Save Delivery Address',['NO','SAVE']); 	
			$scope.addatapick()			
		}else{
			navigator.notification.alert("Please enter a valid 10 digit mobile number",function(){},'Contact Details','OK');
		}
  }
	}
	
	$scope.addatapick = function(){
	delvcontactname = document.getElementById("delvname2").value; delvcontactaddr = document.getElementById("delvaddr2").value; delvcontactnum = document.getElementById("delvcontact2").value;		
	var directionsService = new google.maps.DirectionsService();  
	var pickupLocation = ownlat+", "+ownlng; var deliveryLocation = lat2+", "+lng2;
		var request = {
       origin: pickupLocation, 
       destination: deliveryLocation,
       travelMode: google.maps.DirectionsTravelMode.DRIVING 
   };	
   directionsService.route(request, function(response, status) {
	   
	   //document.getElementById("rqstBtn1").style.display = "";
	   if (status == google.maps.DirectionsStatus.OK) {
		  $scope.direcrslt = 1;
		var distance = response.routes[0].legs[0].distance.value; distance = distance/1000; distance = distance.toFixed(1);
		document.getElementById('route').innerHTML = distance+" kms"; pickupdropdist = distance+"";
		var duration = response.routes[0].legs[0].duration.value; duration = Math.round(duration/60); duration += 30+Number(localStorage.getItem("time")); 
		if(friderid=="null" || friderid=="late"){
		document.getElementById('delvtime').innerHTML = "-- mins";
			
		}else{
		document.getElementById('delvtime').innerHTML = duration+" mins";
			
		}
		deliverytime = duration+" ";
		if(distance<=5.00){
			document.getElementById('faredetails').innerHTML = "FARE Rs. 100"; deliveryFare = "100" + "";
			
    }
    else{ 
      var newdist = distance - 5.00;
      var newfare = Math.round(newdist*10) + 100;   
		if(newdist>50.0){
			deliveradius = 2;
		}
      document.getElementById('faredetails').innerHTML = "FARE Rs. "+newfare; deliveryFare = newfare + "";
    }; 
	/*
	if(localStorage.getItem("wishbalance")===null){}else{
		if(deliveryFare > Number(localStorage.getItem("wishbalance")) && paymentMode =="Beck Money"){
		navigator.splashscreen.show();
		navigator.notification.alert("Your BeckMoney balance Rs."+localStorage.getItem("wishbalance")+" is lesser than your delivery fare Rs."+deliveryFare+". Please close app try again and select an alternative payment mode to checkout.",function(){},'Wishmoney Balance low','OK');
		setTimeout(function(){
		map.clear(); location.reload()
		},3000); 		
	}		
	}
*/
	}
   });
   var icon2 = "file:///android_asset/www/img/pin2.png";
   var icon3 = "file:///android_asset/www/img/pin.png";
	  	map.addMarker({
      'position': new plugin.google.maps.LatLng(ownlat, ownlng),
	  'icon': icon2
    }, function(marker) {
     map.addMarker({
      'position': new plugin.google.maps.LatLng(lat2,lng2),
	  'icon': icon3
    });
    });
	map.addPolyline({
  points: [
  new plugin.google.maps.LatLng(lat2, lng2),
  new plugin.google.maps.LatLng(ownlat, ownlng)    
  ],
  'color' : '#2bb1de',
  'width': 3,
  'geodesic': true
}, function(polyline) {	
	map.animateCamera({
  'target': new plugin.google.maps.LatLng(ownlat,ownlng),
  'tilt': 0,
  'zoom': 17,
   'duration': 1200
});
});
$scope.changetodelv();
	}
	
	$scope.closesignup = function(){
		$scope.autoA.hide(); $scope.signupModal.hide();map.setClickable(true);
	}
	
  $scope.opendelvModal = function(){
	map.setClickable( false );
	$scope.delvModal.show()
	
  };

  $scope.closedelvModal = function(){};
  
  $scope.openotpverf = function(){
	if(document.getElementById("usrtel").value == "" || document.getElementById("usrname").value == "" || document.getElementById("usremail").value == ""){
	navigator.notification.alert("Please enter all your details to sign up",function(){},'Sign Up','OK');
    }else{
		var phoneNum = document.getElementById("usrtel").value.replace(/[^\d]/g, '');
		var re = /\S+@\S+\.\S+/;
		if(phoneNum.length == 10) {
		var mail = re.test(document.getElementById("usremail").value);
		if(!mail){
			navigator.notification.alert("Please enter a valid email address",function(){},'Contact Details','OK');
		}else{
			custName=document.getElementById("usrname").value; custId=phoneNum; custPhone = phoneNum; custEmail = document.getElementById("usremail").value;
			map.setClickable(false); $scope.otpModal.show(); otpcall()		
		}		
		}else{
			navigator.notification.alert("Please enter a valid 10 digit mobile number",function(){},'Contact Details','OK');
		}
	
	}	
  };
    
   $scope.closeotpverf = function(){map.setClickable( true );$scope.signupModal.hide();$scope.otpModal.hide();
  };
   
	$scope.openrider = function(orderid){
	var waypts = [];
	document.getElementById("trckinpg").style.display = "block"		
	$scope.autoA.hide(); $scope.orderModal.hide(); 
	$scope.trackModal.show(); map.setClickable( false );
	var riderid = orderid.substring(0, 4); 
	ridersFirebaseRef.child("riders").child(riderid).once("value", function(data) {
	if(data.val().order.waypoints){
		data.val().order.waypoints.forEach(function(childpoint){
			waypts.push({
        location: new google.maps.LatLng(childpoint.lat,childpoint.lng),
        stopover: true
      });
			//alert(childpoint.lat+" , "+childpoint.lng)
		});
		//alert("waypoint found");
		
	}
	document.getElementById("ridername").innerHTML = data.val().ridername;
	document.getElementById("riderimg").src = data.val().riderimage;
	localStorage.setItem("ridernumber", data.val().ridernum);
	if(data.val().order.pickupdropdist == "add"){
		document.getElementById("pickpdrpdist").innerHTML = "To Add";
	}else{
		document.getElementById("pickpdrpdist").innerHTML = data.val().order.pickupdropdist + " kms";	
	};	
	document.getElementById("pickuptym").innerHTML = data.val().order.pickuptime+" mins";
	if(data.val().order.pickuptime == data.val().order.deliverytime){
	document.getElementById("delvtym").innerHTML = "To Add";	
	}else{
	document.getElementById("delvtym").innerHTML = data.val().order.deliverytime+" mins";		
	};
	vehicle = data.val(); vehicle.marker = new google.maps.Marker({
    position: new google.maps.LatLng(data.val().lat, data.val().lon),
	icon:icon, map: trckmap	}); 	
	var directionsService2 = new google.maps.DirectionsService();
	var directionsDisplay2 = new google.maps.DirectionsRenderer();   
	directionsDisplay2.setMap(trckmap);  
	trckmap.setCenter(new google.maps.LatLng(data.val().order.pickuplat, data.val().order.pickuplong));
	trckmap.setZoom(15);
	if(data.val().order.deliverylat == "add"){
	var markerpickpin = new google.maps.Marker({position:new google.maps.LatLng(data.val().order.pickuplat, data.val().order.pickuplong), icon:'img/pin2.png', map: trckmap})	
	}	else{};
	var pickupLocation = data.val().order.pickuplat +", "+ data.val().order.pickuplong;
	//console.log(pickupLocation);
	var deliveryLocation = data.val().order.deliverylat +", "+ data.val().order.deliverylng;
	//console.log(deliveryLocation);
	var request = {
    origin: pickupLocation, destination: deliveryLocation, travelMode: google.maps.DirectionsTravelMode.DRIVING,
	 waypoints: waypts
	};	
	directionsService2.route(request, function(response, status) {   
	if (status == google.maps.DirectionsStatus.OK) {
    directionsDisplay2.setDirections(response)}	
	});	
	if(localStorage.getItem("screenum")==1){}else{	navigator.notification.alert("You can also track your rider from your profile",function(){},'Track Rider','OK')		
	};
	trackyourider(riderid,vehicle);
	})	
  };

  $scope.openlogin = function(){
	map.setClickable( false );
	$scope.loginModal.show()
  };
  
  $scope.opentrck = function(){
	map.setClickable( false );
	$scope.orderModal.show()
  };

  $scope.closetrck = function(){	
    $scope.autoA.hide(); $scope.orderModal.hide(); map.setClickable( true );
  };
  
   $scope.openwish = function(){
	map.setClickable( false ); $scope.wishModal.show();
	document.getElementById("wishmnydeal").innerHTML = localStorage.getItem("wishdeal");

  };

  $scope.closewish = function(){	
    $scope.autoA.hide(); $scope.wishModal.hide(); map.setClickable( true );
  };
  
  $scope.ratecardopn = function(){		
 	if(localStorage.getItem("authNum")===null){		
 		$scope.signupModal.show();map.setClickable(false);		
	}else{ 		
		$scope.openrtcrd()		
	}		 			
 }
  
  $scope.openrtcrd = function(){
	map.setClickable( false );
	$scope.rateCard.show();
	$scope.autoA.hide()
  };

  $scope.closertcrd = function(){	
    $scope.autoA.hide(); $scope.rateCard.hide(); map.setClickable( true );
  };
  
  $scope.openAutoA = function() {
	map.setClickable( false );
    $scope.autoA.show();
	if(localStorage.getItem("authNum")===null){
	document.getElementById("trckordrdiv").style.display = "none";
	document.getElementById("signup").style.display = "block";
	}else{ 
	document.getElementById("trckordrdiv").style.display = "block";
	document.getElementById("signup").style.display = "none";
	}
  };
  
  $scope.closeAutoA = function() {
	map.setClickable( true );
    $scope.autoA.hide();
  };
  
    $scope.openAutoB = function() {
	map.setClickable( false );
    $scope.autoB.show()
  };
  $scope.closeAutoB = function() {
	map.setClickable( true );
    $scope.autoB.hide();
  };

  $scope.openModalA = function(){ map.setClickable(false); $scope.ModalA.show();
	var pushRef = ridersFirebaseRef.child("pickuparea").push();
	pushRef.set({ 'lat': ownlat, 'lng': ownlng});
  }
	
	$scope.closeA = function(){		
  	$scope.closeModalA();		
  	map.setMyLocationEnabled(true); 		
  }
  
  $scope.closeModalA = function(){ map.setClickable(true); $scope.ModalA.hide() };
	
	function onConfirm(buttonIndex){ 
	//	map.setMyLocationEnabled(false);
	if(buttonIndex==2){ 
		if(localStorage.getItem("authNum")===null){
		map.setClickable( true );  $scope.screen = 2; localStorage.setItem("screenum","2"); $scope.ModalA.hide();

		}else{
		var pickupRef = ridersFirebaseRef.child("users").child(localStorage.getItem("authNum")).child("pickupsaved").push();
		pickupRef.set({ 'pickcontactname': document.getElementById("delvname").value, 'pickcontactaddr': document.getElementById("delvaddr").value, 'pickcontactnum': document.getElementById("delvcontact").value});	
		map.setClickable( true );map.setZoom(15); $scope.screen = 2; localStorage.setItem("screenum","2"); $scope.ModalA.hide();
		}	
	}
	else if(buttonIndex==1){
		map.setClickable( true ); $scope.screen = 2; localStorage.setItem("screenum","2"); $scope.ModalA.hide(); 
	}
		
	}	
	
	$scope.fillboxes = function(detail){
		if(paymentMode=="Select One"){
		$ionicScrollDelegate.scrollTop();
		navigator.notification.alert("Please select a valid payment mode from top",function(){},'Select Payment Mode','OK');
		}else{
		document.getElementById("delvname").value = detail.pickcontactname; document.getElementById("delvaddr").value = detail.pickcontactaddr; document.getElementById("delvcontact").value = detail.pickcontactnum;
		pickcontactname = detail.pickcontactname; pickcontactaddr = detail.pickcontactaddr; pickcontactnum = detail.pickcontactnum;
		map.setClickable( true ); $scope.ModalA.hide(); $scope.screen = 2; localStorage.setItem("screenum","2");
		}
	}
	
	$scope.fillboxes2 = function(detail){
		document.getElementById("delvname2").value = detail.delvcontactname; document.getElementById("delvaddr2").value = detail.delvcontactaddr; document.getElementById("delvcontact2").value = detail.delvcontactnum;
		delvcontactname = detail.pickcontactname; delvcontactaddr = detail.delvcontactaddr; delvcontactnum = detail.delvcontactnum;
		$scope.addatapick()
	}

	$scope.openModalB = function(){

	map.setClickable( false );	
	if(document.getElementById("delvname").value == "" || document.getElementById("delvaddr").value == "" || document.getElementById("delvcontact").value == ""){
		navigator.notification.alert("Please enter all details",function(){},'Pickup Details','OK');

    }else{
    	var phoneNum = document.getElementById("delvcontact").value.replace(/[^\d]/g, '');
			if(phoneNum.length == 10) {
				if(paymentMode=="Select One"){
					$ionicScrollDelegate.scrollTop();
					navigator.notification.alert("Please select a valid payment mode from top",function(){},'Select Payment Mode','OK');
				}else{
				navigator.notification.confirm('Do you want to save this address?',onConfirm,'Save Pickup Address',['NO','SAVE']); 
			pickcontactname = document.getElementById("delvname").value; pickcontactaddr = document.getElementById("delvaddr").value; pickcontactnum = document.getElementById("delvcontact").value;
				
				}
			} else{
				navigator.notification.alert("Please enter a valid 10 digit mobile number",function(){},'Contact Details','OK');
			}
		}	
	};

	$scope.closeModalB = function() {
	map.setClickable( true ); $scope.ModalB.hide(); $scope.ModalA.hide(); $scope.screen = 2; localStorage.setItem("screenum","2");
	}; 

    $scope.$on('modal.hidden', function() {
    map.setClickable( true ); 
	});    
		  
	$scope.signupmdlshow = function(){ $scope.signupModal.show()  }
  	
	$scope.latererqst = function(){
	var orderid = "B000later" + Math.floor((Math.random() * 1000) + 1);
	var deliverycode = "B" + Math.floor((Math.random() * 1000) + 1);
	var timestamp = new Date().getTime();
	var usernumber = localStorage.getItem("authNum");
	mailcall();
	$scope.laterModal.hide();
	$scope.requestModal.show();	
	setTimeout(function(){	
	var orderRef = ridersFirebaseRef.child("orderslist").child(custId).push();
	orderRef.set({latertime:timefuture2,laterdate:datefuture2,picked:"On the Way",merchant:merchant,billamt:billamt,custPhone:custId,custEmail:custEmail,deliverycode:deliverycode,orderid:orderid,delvcontactnum:delvcontactnum,delvcontactaddr:delvcontactaddr,delvcontactname:delvcontactname,pickcontactnum:pickcontactnum,pickcontactaddr:pickcontactaddr,pickcontactname:pickcontactname,ordrtype:ordrtype,deliveryaddr:deliveryaddr,pickupaddr:pickupaddr,paymentMode:paymentMode,orderTimestamp:timestamp,custName:custName,custId:custId,pickupdropdist:pickupdropdist,deliverylng:deliverylng,deliverylat:deliverylat,pickuplong:pickuplong,pickuplat:pickuplat});
	ridersFirebaseRef.child("riders").child("B000later").child(orderid).update({latertime:timefuture2,laterdate:datefuture2,picked:"On the Way",custEmail:custEmail,merchant:merchant,billamt:billamt,custPhone:custId,deliverycode:deliverycode,orderid:orderid,delvcontactnum:delvcontactnum,delvcontactaddr:delvcontactaddr,delvcontactname:delvcontactname,pickcontactnum:pickcontactnum,pickcontactaddr:pickcontactaddr,pickcontactname:pickcontactname,ordrtype:ordrtype,deliveryaddr:deliveryaddr,pickupaddr:pickupaddr,paymentMode:paymentMode,orderTimestamp:timestamp,custName:custName,custId:custId,deliverylng:deliverylng,deliverylat:deliverylat,pickuplong:pickuplong,pickuplat:pickuplat});    
	$scope.rqstltr();
	$scope.requestModal.hide();
	map.setClickable( false );
	},getRandomInt(5000, 10000));
	}
	
    $scope.openrqstModal = function(){
	var orderid = friderid + Math.floor((Math.random() * 1000) + 1);
	var deliverycode = "B" + Math.floor((Math.random() * 1000) + 1);
	var timestamp = new Date().getTime();
	var usernumber = localStorage.getItem("authNum");
	if(usernumber){  //put this inside a function and on tap of next do the otpcall 
	if(friderid=="null"){
		if(deliveradius==2 || (localStorage.getItem("screenum")==4)){
			var pushRef = ridersFirebaseRef.child("pickuprequest").push();
			pushRef.set({ 'lat': ownlat, 'lng': ownlng, 'delat': lat2, 'delng': lng2, 'rqstTimestamp':timestamp});
			navigator.splashscreen.show();
			navigator.notification.alert("Sorry, no riders are available near pickup location",function(){},'No Riders','OK');
			setTimeout(function(){
		map.clear(); location.reload()
		},300); 
		}
		else{
			var pushRef = ridersFirebaseRef.child("pickuprequest").push();
			pushRef.set({ 'lat': ownlat, 'lng': ownlng, 'rqstTimestamp':timestamp});
			navigator.notification.alert("Sorry, no riders are available near pickup location",function(){},'No Riders','OK');			
			$scope.backpickup();
		}		
	}
	else if(friderid=="late"){
			latecall(); mailcall();
			var orderRef45 = ridersFirebaseRef.child("orderslist").child(custId).push();
			orderRef45.set({picked:"On the Way",merchant:merchant,custEmail:custEmail,billamt:billamt,custPhone:custId,deliverycode:deliverycode,delvcontactnum:delvcontactnum,delvcontactaddr:delvcontactaddr,delvcontactname:delvcontactname,pickcontactnum:pickcontactnum,pickcontactaddr:pickcontactaddr,pickcontactname:pickcontactname,deliveryaddr:deliveryaddr,pickupaddr:pickupaddr,paymentMode:paymentMode,deliveryFare:deliveryFare,orderTimestamp:timestamp,custName:custName,custId:custId,deliverytime:deliverytime,pickupdropdist:pickupdropdist,deliverylng:deliverylng,deliverylat:deliverylat,pickuplong:pickuplong,pickuplat:pickuplat});
			navigator.notification.confirm("Our service timings are from 9 am to 7 pm. Our team shall get back to you at the earliest tomorrow",function(buttonIndex){
			if(buttonIndex==1){ 
			navigator.splashscreen.show(); map.setClickable( false ); $scope.startModal.show();map.clear();
			map.refreshLayout(); map.setVisible(true);
			setTimeout(function(){
		map.clear(); location.reload()
		},300); 
			}
			},'No Service Now',['OK','']); 
		
	}
	else{
	
	if($scope.direcrslt==0 && (localStorage.getItem("screenum")==4)){
		//var pushRef = ridersFirebaseRef.child("deliveryrequest").push(); pushRef.set({ 'lat': lat2, 'lng': lng2});	
		navigator.notification.alert("Please confirm pickup after route and fare appear at the top",function(){},'Check Fare','OK'); //$scope.showdelvseback()
	}
	else if(deliveradius==2){
		navigator.notification.alert("Sorry. This location is outside delivery radius",function(){},'Outside Delivery Radius','OK'); $scope.showdelvseback();
	}
	else{	
	mailcall();
	document.getElementById("rqstBtn").style.display = "none";
	document.getElementById("rqstBtn1").style.display = "none";
	ridersFirebaseRef.child("riders").child(friderid).child("order").update({neworder:"yes"});
	if(deliveryFare!="add" && paymentMode=="Wish Money"){
		ridersFirebaseRef.child("users").child(custId).once('value', function(snapshot) {		
        var total = Number(snapshot.val().wishbalance) - Number(deliveryFare);
        ridersFirebaseRef.child("users").child(custId).update({wishbalance:total})        		  
	  }) 
	} else{};
	$scope.requestModal.show();	
	setTimeout(function(){	
	var orderRef = ridersFirebaseRef.child("orderslist").child(custId).push();
	orderRef.set({picked:"On the Way",merchant:merchant,pickupdist:pickupdist,pickuptime:pickuptime,billamt:billamt,custPhone:custId,custEmail:custEmail,deliverycode:deliverycode,orderid:orderid,delvcontactnum:delvcontactnum,delvcontactaddr:delvcontactaddr,delvcontactname:delvcontactname,pickcontactnum:pickcontactnum,pickcontactaddr:pickcontactaddr,pickcontactname:pickcontactname,ordrtype:ordrtype,deliveryaddr:deliveryaddr,pickupaddr:pickupaddr,paymentMode:paymentMode,deliveryFare:deliveryFare,orderTimestamp:timestamp,custName:custName,custId:custId,deliverytime:deliverytime,pickupdropdist:pickupdropdist,deliverylng:deliverylng,deliverylat:deliverylat,pickuplong:pickuplong,pickuplat:pickuplat});
	ridersFirebaseRef.child("riders").child(friderid).child("order").update({picked:"On the Way",pickupdist:pickupdist,custEmail:custEmail,merchant:merchant,pickuptime:pickuptime,billamt:billamt,custPhone:custId,deliverycode:deliverycode,orderid:orderid,delvcontactnum:delvcontactnum,delvcontactaddr:delvcontactaddr,delvcontactname:delvcontactname,pickcontactnum:pickcontactnum,pickcontactaddr:pickcontactaddr,pickcontactname:pickcontactname,ordrtype:ordrtype,deliveryaddr:deliveryaddr,pickupaddr:pickupaddr,paymentMode:paymentMode,deliveryFare:deliveryFare,orderTimestamp:timestamp,custName:custName,custId:custId,deliverytime:deliverytime,pickupdropdist:pickupdropdist,deliverylng:deliverylng,deliverylat:deliverylat,pickuplong:pickuplong,pickuplat:pickuplat});    
	$scope.openrider(orderid);
	$scope.requestModal.hide();
	map.setClickable( false );
	},getRandomInt(5000, 10000));
	}
	
	}
	} 
	else{ map.setClickable(false);	$scope.signupModal.show()
	}	
  }

});
app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {country: 'in'}				
            };
				scope.gPlace = new google.maps.places.Autocomplete(element[0], options); 
                google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                var geoComponents = scope.gPlace.getPlace();
                var latitude = geoComponents.geometry.location.lat();
				var longitude = geoComponents.geometry.location.lng();
                var addressComponents = geoComponents.address_components;
				addressComponents = addressComponents.filter(function(component){
                    switch (component.types[0]) {
                        case "locality": // city
                            return true;
                        case "administrative_area_level_1": // state
                            return true;
                        case "country": // country
                            return true;
                        default:
                            return false;
                    }
                }).map(function(obj) {
                    return obj.long_name;
                });
                addressComponents.push(latitude, longitude);                
            });
        }
    };
})
.service('LocationService', function($q){
  var autocompleteService = new google.maps.places.AutocompleteService();
  var detailsService = new google.maps.places.PlacesService(document.createElement("input"));
  return {
    searchAddress: function(input) {
      var deferred = $q.defer();
      autocompleteService.getPlacePredictions({
        input: input
	 }, function(result, status) {
        if(status == google.maps.places.PlacesServiceStatus.OK){
          deferred.resolve(result);
        }else{ deferred.reject(status) }});

      return deferred.promise;
    },
    getDetails: function(placeId) {
      var deferred = $q.defer();
      detailsService.getDetails({placeId: placeId}, function(result) {
        deferred.resolve(result) });
      return deferred.promise;
    }
  }
})
.directive('locationSuggestion', function($ionicModal, LocationService, $ionicLoading){
  return {
    restrict: 'A',
    scope: {
      location: '='
    },
    link: function($scope, element){
      $scope.search = {}; $scope.search.suggestions = []; $scope.search.query = "";
      $ionicModal.fromTemplateUrl('location.html', {
        scope: $scope, focusFirstInput: true, animation: 'slide-in-right'
      }).then(function(modal) {$scope.modalauto = modal});
      element[0].addEventListener('focus', function(event) { $scope.open() });
	  document.getElementById('lalacomp').onclick = function () { $scope.open()};
      $scope.$watch('search.query', function(newValue) {
        if (newValue) {
          LocationService.searchAddress(newValue).then(function(result) {
            $scope.search.error = null;
            $scope.search.suggestions = result;
          }, function(status){});
        };
        $scope.open = function() {
		map.setClickable( false );		
		$scope.modalauto.show()
		};		
        $scope.autocompletecls = function(){	
		$scope.modalauto.hide();
		
		};
        $scope.close = function() {
		if(localStorage.getItem("screenum") == 2){} else{
			if(localStorage.getItem("screenum") == 3){ 
			}		
			else{
			map.setClickable( true )}
		}
				
		
		 $scope.modalauto.hide();
		};
		
		$scope.$on('modal.hidden', function() { if(localStorage.getItem("screenum") == 2){}else{map.setClickable( true )}; }); 
        $scope.choosePlace = function(place) {
			
		if(localStorage.getItem("screenum") == 2 && autoflag == 1){ map.setClickable( true );document.getElementById("tint").style.display="none";allwrvgeo = 1;localStorage.setItem("delvflag","1");localStorage.setItem("screenum","3");document.getElementById("seBtn").style.display="block";document.getElementById("arwMrk").style.display="block"};
		LocationService.getDetails(place.place_id).then(function(yo) {
			if(yo===null){navigator.notification.alert("The details of this address could not be found by Google. Please try searching an alternative nearby location to this place", function(){},"Place Details not found","OK");$scope.close()}
			
			else{
			//	$ionicLoading.hide();
			if(localStorage.getItem("screenum") == 2 && autoflag == 0){
				$scope.location = yo; $scope.close();
				
				//navigator.notification.alert(yo.geometry.location.lat()+","+ yo.geometry.location.lng()+" , "+place.description,function(){},'Autocomplete return','OK');
				var directionsService2 = new google.maps.DirectionsService();  
				delvesti = place.description; deliveryestlat = yo.geometry.location.lat(); deliveryestlng = yo.geometry.location.lng();
				var pickupLocation2 = ownlat+", "+ownlng; var deliveryLocation2 = deliveryestlat+", "+deliveryestlng;
				var request2 = {
				origin: pickupLocation2, 
				destination: deliveryLocation2,
				travelMode: google.maps.DirectionsTravelMode.DRIVING 
				};	
		directionsService2.route(request2, function(response, status) {
	   if (status == google.maps.DirectionsStatus.OK && (GeoFire.distance([ownlat, ownlng], [yo.geometry.location.lat(), yo.geometry.location.lng()])<30)) {
		//alert(GeoFire.distance([19.050397567565525, 72.91579418280465], [18.906703, 72.814712]));
		var distance = response.routes[0].legs[0].distance.value; distance = distance/1000; distance = distance.toFixed(1);
		var duration = response.routes[0].legs[0].duration.value; duration = Math.round(duration/60); duration += 30+Number(localStorage.getItem("time")); 
		if(distance<=5.00){
			estifare = "The fare is Rs. 100"; estidistance = "The distance is "+distance+" Kms";
    }
    else{ 
      var newdist = distance - 5.00;
      var newfare = Math.round(newdist*10) + 100;   
		estifare = " The fare is Rs. "+newfare; estidistance = "The distance is "+distance+" Kms";
    }
	}
	else{
		estifare = "Sorry. Problem fetching your fare";
		estidistance = "The location is outside delivery radius"
	}
		});
			}
			else{
			map.setZoom(16);map.setCenter(new plugin.google.maps.LatLng(yo.geometry.location.lat(), yo.geometry.location.lng()));
			if(localStorage.getItem("screenum") == 1){localStorage.setItem("ghostridr","1")};
			$scope.location = yo; $scope.close(); 
			if(localStorage.getItem("screenum") == 3){
				deliveradius = 1; document.getElementById("seBtn").innerHTML = "ADD DELIVERY DETAILS"
			}
			}
			}
		})
		}
      })
    }
  }
});
