/*//THIS IS THE JS FILE FOR THE CAR LUXURY PRACTISE

var myManufacturer = document.getElementById("manufacturer");
myManufacturer.addEventListener("change", loadMyData, false);

var mySurvey = document.getElementById("survey");
mySurvey.addEventListener("change", loadMyData, false);

var manuC = document.getElementById("manufacturerC");
manuC.addEventListener("change", loadMyData, false);




function loadMyData() {
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    //console.log(manufacturerStored);
    
    var surveyStored = mySurvey.options[mySurvey.selectedIndex].value;
    
    //console.log(surveyStored);
    
    
    
//This will now get data from JSON file and with console.log() will show the JSON file in console   
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/KiranPaul26/JavaScript/master/expensiveLuxuryCars.json", true);
    
    myRequest.onload = function() {
        
        if(myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData);
            
            document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
            
            document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
           
            document.getElementById("priceC").innerHTML = "£" + myData.data[manufacturerStored].price;
            
            document.getElementById("descriptionC").innerHTML = '<button data-toggle="modal" data-target="#modal1">Full description click here</button>';
            
            document.getElementById("fullD").innerHTML = myData.data[manufacturerStored].description;
            
            document.getElementById("fullL").innerHTML ='<a href=' + myData.data[manufacturerStored].wiki + ' target="_blank">Click here to access Wikipedia for more information.</a>';
            
            document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="' + myData.data[manufacturerStored].video + '"frameborder="0" allowfullscreen</iframe>';
            
            
            
            document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
            document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
            document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
            document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
            document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
            document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
            
            document.getElementById("imgC").innerHTML = '<img src=" ' + myData.data[manufacturerStored].img + '"width="auto" height="auto" alt="Car Image">'
            
            // Code for the chart
            var chart = new CanvasJS.Chart("chartContainer", {
                
                theme: "theme2",
                backgroundColor: "transparent",
                title:{
                    text: "Customer Survey"              
                },
                animationEnabled: true,
                data: [ 
                    {
                        // Change type to "doughnut", "line", "splineArea", etc.
                        type: "surveyStored",
                        dataPoints: [
				//{ label: "apple",  y: 10  },
				//{ label: "orange", y: 15  },
				//{ label: "banana", y: 25  },
				//{ label: "mango",  y: 30  },
				//{ label: "grape",  y: 28  }
			]
		}
		]
	});

    myData.data[manufacturerStored].quality.foreach(function(item, index) {
        
        chart.options.data[0].dataPoints.push({"label": item.name, "y": item.rating});
        document.getElementById(item.name+"C").innerHTML = item.rating;
    });
            
	chart.render();
            
            
        }
    }
    
    
    myRequest.onerror = function() {
        
        document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach the server ..."
    }
    
    myRequest.send();
    
    //console.log(myRequest);  
} */

/* THIS IS THE JS FILE FOR THE CAR LUXURY PRACTICE */

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);

var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadMyData, false);


function loadMyData() {
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    console.log(manufacturerStored);
    
    var chartType = mySurvey.options[mySurvey.selectedIndex].value;
    
    //console.log(chartType);
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/biatoSalo/JavaScript/master/expensiveLuxuryCars.json", true);
    
    
    myRequest.onload = function() {
        
        if( myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData);
            
            document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
            
            document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
            
            document.getElementById("priceC").innerHTML = "� " + myData.data[manufacturerStored].price;
            
            document.getElementById("descriptionC").innerHTML = '<button data-toggle="modal" data-target="#modal1">Full description click here</button>';
            
            document.getElementById("fullD").innerHTML = myData.data[manufacturerStored].description;
            
            document.getElementById("fullL").innerHTML = '<a href=' + myData.data[manufacturerStored].wiki + ' target="_blank">Click here to access Wikipedia for more information.</a>';
            
            document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="' + myData.data[manufacturerStored].video + '"frameborder="0" allowfullscreen></iframe>';
            
            document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
            
            document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
            
            document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
            
            document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
            
            document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
            
            document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
            
            document.getElementById("imgC").innerHTML = '<img src="' + myData.data[manufacturerStored].img + '"width="auto" height="auto" alt="Car Image">';
            
            /* This is the code for the chart */
            
            var chart = new CanvasJS.Chart("chartContainer", {
                
         theme: "theme2",
        backgroundColor: "transparent", 
		title:{
			text: "Customer Survey"              
		},
        animationEnabled: true,
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: chartType,
			dataPoints: [
				/*{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }*/
			]
		}
		]
	});
            
     myData.data[manufacturerStored].quality.forEach(function(item, index) {
         
         chart.options.data[0].dataPoints.push({ "label": item.name, "y": item.rating});
         document.getElementById(item.name+"C").innerHTML = item.rating;
         
     });       
            
            
	chart.render();
            
        }
    }
    
    myRequest.send();

}