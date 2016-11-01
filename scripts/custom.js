
$(document).ready(function(){

	//Checking if elements are outside of body
	// var all = document.body.getElementsByTagName("*");		
	//  	for (var i = 0; i < all.length; i++) {		
	//  	    if (jQuery('body').outerWidth() < jQuery(all[i]).outerWidth()) {		
	//  	        console.log(all[i]);		
	//  	    }		
	//  	}


	//========START SCROLLING SECTION============

	var initialScroll = false;
	var objectString = $('.count1')[0];

	
	if (isScrolledIntoView(objectString)  ){
		counter1animate();
		initialScroll = true;
	}

	var initialScroll2 = false;
	var objectString2 = $('.count2')[0];

	
	if (isScrolledIntoView(objectString2)  ){
		counter2animate(11);
		initialScroll2 = true;
	}

	var initialScroll3 = false;
	var objectString3 = $('.count3')[0];

	if (isScrolledIntoView(objectString3)  ){
		counter3animate();
		initialScroll3 = true;
	}

	// var initialScroll4 = false;
	// var objectString4 = $('.chart1-padding')[0];

	// if (isScrolledIntoView(objectString4)  ){
	// 	showChart1();
	// 	initialScroll4 = true;
	// }

	// var initialScroll5 = false;
	// var objectString5 = $('.chart2-padding')[0];

	// if (isScrolledIntoView(objectString5)  ){
	// 	showChart2();
	// 	initialScroll5 = true;
	// }

	function counter1animate(){
		$('.count1').prop('Counter',0).animate({
	        Counter: 90
	    }, {
	        duration: 3000,
	        easing: 'swing',
	        step: function (now) {
	            $('.count1').text(Math.ceil(now));
	        }
	    });
	}

	function counter2animate(num){
		$('.count2').prop('Counter',0).animate({
	        Counter: num
	    }, {
	        duration: 1800,
	        easing: 'swing',
	        start: function (){
	        	hasAnimated = false; 
	        },
	        step: function (now) {
	            $('.count2').text(Math.ceil(now));
	        },
	        done: function(){
	        	hasAnimated = true;
	        }
	    });
	}

	function counter3animate(){
		$('.count3').prop('Counter',0).animate({
	        Counter: 12
	    }, {
	        duration: 1000,
	        easing: 'swing',
	        step: function (now) {
	            $('.count3').text(Math.ceil(now));
	        }
	    });
	}

	var graph1loaded = false;
	var graph2loaded = false;

	function splashLoad(){
		var element = document.getElementById('top-splash-banner');
		if(graph1loaded && graph2loaded){
			var op = 0.1;  // initial opacity
		    element.style.display = 'block';
		    var timer = setInterval(function () {
		        if (op >= 1){
		            clearInterval(timer);
		        }
		        element.style.opacity = op;
		        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		        op += op * 0.1;
		    }, 10);
		}
	}


	// var imageElementString = $('.img-brand-block');
	function isScrolledIntoView(el) {
	    var elemTop = el.getBoundingClientRect().top;
	    var elemBottom = el.getBoundingClientRect().bottom;

	    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	    return isVisible;
	};

	$(window).scroll(function(){
		//Check for elements scrolling into view

		// var secondOne = document.getElementsByClassName("img-brand-block");
		if (initialScroll === false  && isScrolledIntoView(objectString)  ){
			counter1animate();
			initialScroll = true;
		}

		if (initialScroll2 === false  && isScrolledIntoView(objectString2)  ){
			counter2animate(11);
			initialScroll2 = true;
		}

		if (initialScroll3 === false  && isScrolledIntoView(objectString3)  ){
			counter3animate();
			initialScroll3 = true;
		}

		// if (initialScroll4 === false  && isScrolledIntoView(objectString4)  ){
		// 	showChart1();
		// 	initialScroll4 = true;
		// }

		// if (initialScroll5 === false  && isScrolledIntoView(objectString5)  ){
		// 	showChart2();
		// 	initialScroll5 = true;
		// }

	})


	//===========END SCROLLING SECTION============


	//=============START TIMERS===================
	var currentFrame = 3;
	var skipFrame = false;

	//Function for shuffling cities in block 2
	function shuffleCitites() {
		
		if (currentFrame === 3){			// FRAME 1 london / cpt / jhb 
			currentFrame = 1;
			$('.city-box1').text("Cope Lown");
			$('.city-box2').text("Japehanesbown");			
			$('.city-box3').text("Lojanesburg");
			setTimeout(function() {
				$('.city-box1').text("Candown");
				$('.city-box2').text("Cope Hanestown");			
				$('.city-box3').text("Jondownesburg");
			}, 80);

			setTimeout(function() {
				$('.city-box1').text("Coplon");
				$('.city-box2').text("Cop Tanes");			
				$('.city-box3').text("Jobergondon");
			}, 160);

			setTimeout(function() {
				$('.city-box1').text("London");
				$('.city-box2').text("Cape Town");
				$('.city-box3').text("Johannesburg");
			}, 240);

		} else if (currentFrame === 1) { 	// FRAME 2 jhb / london / cpt
			currentFrame = 2;

			$('.city-box1').text("Jobedone");
			$('.city-box2').text("Cope Lown");		
			$('.city-box3').text("Lapejannestown");
			setTimeout(function() {
				$('.city-box1').text("Londwonersdon");
				$('.city-box2').text("Lontowncap");			
				$('.city-box3').text("Capedownieburg");
			}, 80);

			setTimeout(function() {
				$('.city-box1').text("Jodondon");
				$('.city-box2').text("Capedown");		
				$('.city-box3').text("Jobtown");
			}, 160);

			setTimeout(function() {
				$('.city-box1').text("Johannesburg");
				$('.city-box2').text("London");
				$('.city-box3').text("Cape Town");
			}, 240);

			// jhb -> cpt | london -> jhb | cpt -> london
		} else if (currentFrame === 2){ 	// FRAME 3 cpt / jhb / london
			currentFrame = 3;

			$('.city-box1').text("Jobtown");
			$('.city-box2').text("Jobergondon");			
			$('.city-box3').text("Crapedon");
			setTimeout(function() {
				$('.city-box1').text("Capedownieburg");
				$('.city-box2').text("Lontowncap");			
				$('.city-box3').text("Calmdown");
			}, 80);

			setTimeout(function() {
				$('.city-box1').text("Japehanesbown");
				$('.city-box2').text("Jondownesburg");			
				$('.city-box3').text("Lape Ton");
			}, 160);

			setTimeout(function() {
				$('.city-box1').text("Cape Town");
				$('.city-box2').text("Johannesburg");
				$('.city-box3').text("London");
			}, 240);

		}
	}

	//Repeating function for shuffling citites
	(function(){
	    // do some stuff

	    if(skipFrame === false){
	    	shuffleCitites();
	    } else {
	    	skipFrame = false;
	    }

	    setTimeout(arguments.callee, 4000);
	})();

	$( ".cities-box" ).click(function() {
    	shuffleCitites();
    	skipFrame = true;
	});


	var countriesIcon = 1;
	var hasAnimated = false;

	//Animate 3rd block between states
	function shuffleBlock3(){
		if(countriesIcon === 1){
			$('.countries-text').fadeOut('fast', function(){
				$('.countries-text').text("Users Worldwide");
				$('.countries-text').fadeIn('fast');				
			});
			$('.count2').fadeOut('fast', function(){
				$('.count2').fadeIn('fast');
				counter2animate(3477);
			})
			var iconElement = document.getElementById('switch-fa');
			var options = {
			    from: 'fa-globe',
			    to: 'fa-user-plus',
			    animation: 'rubberBand'
			};

			iconate(iconElement, options);
			countriesIcon = 0;
		} else {
			$('.countries-text').fadeOut('fast', function(){
				$('.countries-text').text("Countries Deployed");
				$('.countries-text').fadeIn('fast');
			});
			$('.count2').fadeOut('fast', function(){
				$('.count2').fadeIn('fast');
				counter2animate(11);
			})
			var iconElement = document.getElementById('switch-fa');
			var options = {
			    from: 'fa-user-plus',
			    to: 'fa-globe',
			    animation: 'rubberBand'
			};

			iconate(iconElement, options);
			countriesIcon = 1;
		}
	}

	//Repeating function for animating 3rd block
	(function(){
	    // do some stuff

	    if(hasAnimated){
	   		shuffleBlock3();
	    } else {

	    }

	    setTimeout(arguments.callee, 4000);
	})();

	$( ".countries-box" ).click(function() {
		if(hasAnimated){
	    	shuffleBlock3();
	    	hasAnimated = false;
	    } else {

	    }
	});




	//=============END TIMERS====================


	//==============START CHARTS=================


		var ctx = document.getElementById("chart1");
		var data = {
	    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
	    datasets: [
		        {
		            label: "Amount of employees",
		            fill: true,
		            lineTension:0.3,
		            backgroundColor: "rgba(54, 162, 235, 0.5)",
		            borderColor: "rgba(54, 162, 235, 1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            defaultFontColor:'#fff',
		            // pointBorderColor: "rgba(54, 162, 235, 1)",
		            pointBorderColor: "rgba(255, 255, 255, 1)",
		            // pointBackgroundColor: "rgba(255, 255, 255, 1)",
		            pointBackgroundColor: "rgba(231, 35, 37, 1)",
		            pointBorderWidth: 2,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 4,
		            pointHitRadius: 10,
		            data: [32, 41, 54, 64, 74, 73, 77],
		            spanGaps: false,
		        }
		    ]
		};

		setTimeout(function() {
			graph1loaded = true;
			splashLoad();
			var chartInstance = new Chart(ctx, {
			    type: 'line',
			    data: data,
			    options: {
			        title: {
			            display: false
			        },
			        legend: {
		            	display: true,
			            labels: {
			                fontColor: 'rgb(255, 255, 255)'
			            }
			        },
				    scales:{
					  xAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }],

					  yAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }]
					}
			    }
			})
			
		}, 200)

		var ctxsm = document.getElementById("chart1sm");

		setTimeout(function() {
			var chartInstancesm = new Chart(ctxsm, {
			    type: 'line',
			    data: data,
			    options: {
			        title: {
			            display: false
			        },
			        legend: {
		            	display: true,
			            labels: {
			                fontColor: 'rgb(255, 255, 255)'
			            }
			        },
				    scales:{
					  xAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }],

					  yAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }]
					}
			    }
			})
			
		}, 200)



		var ctx2 = document.getElementById("chart2");
		var data2 = {
	    labels: ["Start", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
	    datasets: [
		        {
		            label: "GWP Billion Rand",
		            fill: false,
		            lineTension:0.1,
		            backgroundColor: "rgba(54, 162, 235, 0)",
		            borderColor: "rgba(231, 35, 37, 1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            defaultFontColor:'#fff',
		            // pointBorderColor: "rgba(54, 162, 235, 1)",
		            pointBorderColor: "rgba(255, 255, 255, 1)",
		            // pointBackgroundColor: "rgba(255, 255, 255, 1)",
		            pointBackgroundColor: "rgba(231, 35, 37, 1)",
		            pointBorderWidth: 2,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
		            pointHoverBorderColor: "rgba(231, 35, 37, 1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 4,
		            pointHitRadius: 10,
		            data: [0, 3, 5, 8, 10, 8, 9, 11],
		            spanGaps: false,
		        }
		    ]
		};

		setTimeout(function() {
			graph2loaded = true;
			splashLoad();
			var chartInstance2 = new Chart(ctx2, {
			    type: 'line',
			    data: data2,
			    options: {
			        title: {
			            display: false
			        },
			        legend: {
		            	display: true,
			            labels: {
			                fontColor: 'rgb(255, 255, 255)'
			            }
			        },
				    scales:{
					  xAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }],

					  yAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }]
					}
			    }
			})
		}, 200);

		var ctx2sm = document.getElementById("chart2sm");

		setTimeout(function() {
			var chartInstance2sm = new Chart(ctx2sm, {
			    type: 'line',
			    data: data2,
			    options: {
			        title: {
			            display: false
			        },
			        legend: {
		            	display: true,
			            labels: {
			                fontColor: 'rgb(255, 255, 255)'
			            }
			        },
				    scales:{
					  xAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }],

					  yAxes:[{
					    gridLines:{
					      color:"rgba(255,255,255,0.35)",
					      zeroLineColor:"rgba(255,255,255,0.35)"
					    },
					    ticks: {
		                  fontColor: "#fff", // font color
		                }
					  }]
					}
			    }
			})
		}, 200);

	// function showChart2(){
		

	// }


	//==============END CHARTS==================

	//================FLICKITY==================

	$('.main-carousel').flickity({
	  // options
	  cellAlign: 'center',
	  contain: true,
	  wrapAround: true,
	  initialIndex: 1,
	  prevNextButtons: false,
	  pageDots: true
	});


	//==============END FLICKITY================


	//============START SHINE EFFECT============

	var gradient_percent = 0,
    gradient_offset = {
      min: -40,
      max: 140
    },
    speed = 1.5,
    gradient_color = 'rgba(130,156,178,1)',
    empty_color = 'rgba(130,156,178,0)';

	setInterval(function() {
	  gradient_percent += speed;
	  
	  if (gradient_percent > gradient_offset.max) {
	    gradient_percent = gradient_offset.min;
	  }
	  
	  $('.text_mask').css('background-image', '-webkit-radial-gradient('+ gradient_percent +'% 50%, 3em 2em, ' + gradient_color + ' 0%, ' + empty_color + ' 100%)')
	}, 17);


	//=============END SHINE EFFECT=============

	
});