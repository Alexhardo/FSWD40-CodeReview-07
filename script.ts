// place - base_class

abstract class place{ //this class can not be instantiate but only  extends

public name:string;
public city:string;
public address:string;
public plz:number;
public img:string;

constructor(name:string,city:string, address:string, plz:number, img:any)
{	
	this.name=name;
	this.city = city;
	this.address = address;
	this.plz = plz;
	this.img = img;
}


 render()
{		
	loc = document.createElement("div");
 	loc.classList.add("loc");
 	loc.classList.add("col-lg-3");
 	loc.classList.add("col-md-6");
 	loc.classList.add("col-sm-6");
 	loc.classList.add("col-xs-12"); //looks nice more
    loc.classList.add("text-center");
 	row = document.getElementById("row1");
 	row.appendChild(loc); 	
 	
 	var name = document.createElement("h2");
 	var name_name = document.createTextNode(this.name);
	 	name.appendChild(name_name);
	 	loc.appendChild(name);

    var img = document.createElement("img") 
	 	img.setAttribute("src", this.img);
	    img.setAttribute("width", "300");
	    img.setAttribute("height", "220");
	 	loc.appendChild(img); 	

 	var adrs = document.createElement("p");
 	var adrs_text = document.createTextNode(this.address  + this.plz + ", " + this.city);
	 	adrs.appendChild(adrs_text);
	 	loc.appendChild(adrs);
	 	var hr = document.createElement("hr");
	 	loc.appendChild(hr);	 

	 	var loc2 = loc.cloneNode(true);
        row2 = document.getElementById("row2");
 	    row2.appendChild(loc2);

	//return (this.name+" is in "+"the city :" + this.city + " and it locates in " + this.address + " , " +this.plz +  " <img src = \" "  +this.img+" \" > " );	

}

}	


/* for testing
var place1:place = new place("xyz","Wien","praterstraße",1020,"imgs/Church.jpg");
var info=place1.render();
var display=document.getElementById("display");
display.innerHTML=info.toString();
*/


// attraction - child class of base_class

class attraction extends place {

	age:number;
	freeentry :boolean;

constructor(name:string, city:string, address:string, plz:number, img:any, age:number, freeentry :boolean )
{	
	super(name,city, address, plz, img); //calling the constructor of class father "place"

	this.name=name;
	this.city = city;
	this.address = address;
	this.plz = plz;
	this.img = img;

	this.age=age;
	this.freeentry=freeentry;
}

render(){			//overriding 
		
	loc = document.createElement("div");
 	loc.classList.add("loc");
 	loc.classList.add("col-lg-3");
 	loc.classList.add("col-md-6");
 	loc.classList.add("col-sm-6");
 	loc.classList.add("col-xs-12"); 
    loc.classList.add("text-center");
 	row = document.getElementById("row1");
 	row.appendChild(loc);	
 	
 	var name = document.createElement("h2");
 	var name_name = document.createTextNode(this.name);
	 	name.appendChild(name_name);
	 	loc.appendChild(name);

    var img = document.createElement("img") 
	 	img.setAttribute("src", this.img);
	    img.setAttribute("width", "300");
	    img.setAttribute("height", "220");
	 	loc.appendChild(img);	 


	var adrs = document.createElement("p");
 	var adrs_text = document.createTextNode( this.address + ", "+this.city +" "+ this.plz );
	 	adrs.appendChild(adrs_text);
	 	loc.appendChild(adrs);

 	var old = document.createElement("p");
 	var old_text = document.createTextNode("this attraction is : " + this.age + " years old");
	 	old.appendChild(old_text);
	 	loc.appendChild(old);

 	var ent = document.createElement("p");
 	var ent_text = document.createTextNode("free entry : " + this.freeentry);
	 	ent.appendChild(ent_text);
	 	loc.appendChild(ent);

 	
	 	var hr = document.createElement("hr");
	 	loc.appendChild(hr);


	 	var loc2 = loc.cloneNode(true);
        row2 = document.getElementById("row4");
 	    row2.appendChild(loc2);

	/*
	return (this.name+" is in "+"the city :" + this.city +
	 		" and it locates in " + this.address + " , " +this.plz +
	 		"<br>"+ " <img src = \" "  +this.img+" \" > "+ "<br>"+
	 		" it is "+this.age + " years old, "+ "<br> "+this.freeentry);	
	 		*/

}	
}


//constructor(name:string, city:string, address:string, plz:number, img:any, age:number, freeentry :boolean )

var atr1 = new attraction("Wiener Karlskirche","wien","Kreuzherrengasse 1",1040,"imgs/atract 01.jpg",250,true);
var atr2 = new attraction("Vienna Zoo","wien","Maxingstrasse 13b",1130,"imgs/atract 02.jpg",220,false);
var atr3 = new attraction("Schoenbrunn Palace","wien","Schonbrunner Schlosstrasse 47",1130,"imgs/atract 03.jpg",200,true);


/////////////////////////////////////////////////////////////////////////////////////////

// restaurant - child class of base_class

class restaurant extends place {

	type:string;
	phone:string;
	site:string;

constructor(name:string,city:string, address:string, plz:number, img:any,type:string,phone:string,site:string)
{	
	super(name,city, address, plz, img); //calling the constructor of class father "place"

	this.name=name;
	this.city = city;
	this.address = address;
	this.plz = plz;
	this.img = img;

	this.type=type;
	this.phone=phone;
	this.site=site;

}

 render() //overriding 
{

		
	loc = document.createElement("div");
 	loc.classList.add("loc");
 	loc.classList.add("col-lg-3");
 	loc.classList.add("col-md-6");
 	loc.classList.add("col-sm-6");
 	loc.classList.add("col-xs-12"); //looks nice more
    loc.classList.add("text-center");
 	row = document.getElementById("row1");
 	row.appendChild(loc); 	
 	
 	var name = document.createElement("h2");
 	var name_name = document.createTextNode(this.name);
	 	name.appendChild(name_name);
	 	loc.appendChild(name);

    var img = document.createElement("img") 
	 	img.setAttribute("src", this.img);
	    img.setAttribute("width", "300");
	    img.setAttribute("height", "220");
	 	loc.appendChild(img);

 
 	var adrs = document.createElement("p");
 	var adrs_text = document.createTextNode(this.address + " , " + this.plz + ", " + this.city);
	 	adrs.appendChild(adrs_text);
	 	loc.appendChild(adrs);

	var visitUs = document.createElement("p");
 	var visitUs_text = document.createTextNode( this.type );
	 	visitUs.appendChild(visitUs_text);
	 	loc.appendChild(visitUs);


	var contact = document.createElement("span");
 	var contact_text = document.createTextNode( "check ");
	 	contact.appendChild(contact_text);
	 	
	 	loc.appendChild(contact);

	 	var link = document.createElement("a") 
	 	link.setAttribute("href", this.site);
	    var link_text = document.createTextNode("our HomePage ");
	 	link.appendChild(link_text);
	 	loc.appendChild(link);
	 	
	 	var call = document.createElement("p");
 	    var call_text = document.createTextNode( "call us :  "+ this.phone);
	 	call.appendChild(call_text);
	 	loc.appendChild(call);
	 	var hr = document.createElement("hr");
	 	loc.appendChild(hr);

	 	var loc2 = loc.cloneNode(true);
        row2 = document.getElementById("row3");
 	    row2.appendChild(loc2);

	/*
	return (this.name+" is in "+"the city :" + this.city +
	 		" and it locates in " + this.address + " , " +this.plz +
	 		"<br>"+ " <img src = \" "  +this.img+" \" > "+ "<br>"+
	 		" it introduces "+this.type+ " food ."+"<br>"+" the phone number is :"+
	 		this.phone+"<br>"+"homepage: "+this.site);	
	 		*/
}	
}

//constructor(name:string,   city:string,   address:string,    plz:number,    img:any,   type:string,   phone:string,   site:string)

var rest1 = new restaurant ("Cafe Central", "Wien","Herrengasse 14",1010, "imgs/res 01.jpg", "Traditionslokal fur Wiener Kuche","01 5333763" , "https://www.cafecentral.wien");
var rest2 = new restaurant ("Lemon Leaf", "Wien" , "Kettenbruckengasse 19"  , 1050 , "imgs/res 02.png", "Thai restaurant","01 5812308" , "http://www.lemonleaf.at");
var rest3 = new restaurant ("SIXTA", "Wien","Schonbrunner Strasse 21",1050, "imgs/res 03.png", "Wiener Kuche","01 5852856" , "http://www.sixta-restaurant.at");


////////////////////////////////////////////////////////



/* for testing

var res = new restaurant("xyz","Vienna","example address 32",1050,"imgs/SIXTA.png","italian","0676 123456","https://www.msn.com");
var info=res.render();
var display=document.getElementById("display");
display.innerHTML=info.toString();
*/





// events - child class of base_class

class events extends place {
	eventdate:string;
	ticketprice:number;
	eventtime :string;

constructor(name:string,city:string, address:string, plz:number, img:any, eventdate:string, ticketprice:number, eventtime:string)
{	
	super(name,city, address, plz, img); //calling the constructor of class father "place"

	this.name=name;
	this.city = city;
	this.address = address;
	this.plz = plz;
	this.img = img;

	this.eventdate=eventdate;
	this.ticketprice=ticketprice;
	this.eventtime=eventtime;
}

render(){			//overriding 
		
	loc = document.createElement("div");
 	loc.classList.add("loc");
 	loc.classList.add("col-lg-3");
 	loc.classList.add("col-md-6");
 	loc.classList.add("col-sm-6");
 	loc.classList.add("col-xs-12"); //looks more nice
    loc.classList.add("text-center");
 	row = document.getElementById("row1");
 	row.appendChild(loc); 	
 	
 	var name = document.createElement("h2");
 	var name_name = document.createTextNode(this.name);
	 	name.appendChild(name_name);
	 	loc.appendChild(name);

    var img = document.createElement("img") 
	 	img.setAttribute("src", this.img);
	    img.setAttribute("width", "300");
	    img.setAttribute("height", "220");
	 	loc.appendChild(img);

 	var dt = document.createElement("p");
 	var dt_text = document.createTextNode("this event will take place at : "+ this.eventdate + " on:  " +this.eventtime + " o'clock");
	 	dt.appendChild(dt_text);
	 	loc.appendChild(dt);

 	var adrs = document.createElement("p");
 	var adrs_text = document.createTextNode("  address: "+this.address + ", "+this.plz +", "+ this.city);
	 	adrs.appendChild(adrs_text);
	 	loc.appendChild(adrs);

 	var price = document.createElement("p");
 	var price_name = document.createTextNode("price: "+this.ticketprice + " Euro");
	 	price.appendChild(price_name);
	 	loc.appendChild(price);
	 	var hr = document.createElement("hr");
	 	loc.appendChild(hr);

	 	var loc2 = loc.cloneNode(true);
        row2 = document.getElementById("row4");
 	    row2.appendChild(loc2);
	/*
	return (this.name+" is in "+"the city :" + this.city +
	 		" and it locates in " + this.address + " , " +this.plz +
	 		"<br>"+ " <img src = \" "  +this.img+" \" > "+ "<br>"+
	 		" it will takeplace on "+this.eventdate + " the ticket costs "+this.ticketprice+" Euro "+"<br>"+
	 		" and it starts at :"+
	 		this.eventtime+"oclock"+"<br>");	
	 		*/

}
	
}


// for testing
/*
var evt = new events("ozozozo","Vienna","example address 32",1050,"imgs/SIXTA.png",
	"29.06.2018",60,"20:45");
var evt1 = new events("ozozozo","Vienna","example address 32",1050,"imgs/Church.jpg",
	"29.06.2018",60,"20:45");


var info=evt.render();
var info1=evt1.render();

var display=document.getElementById("display");
var display1=document.getElementById("display1");

display.innerHTML=info.toString();
display1.innerHTML=info1.toString();
*/




//constructor(name:string,  city:string, address:string, plz:number, img:any,  eventdate:string, ticketprice:number, eventtime:string)
 
var event1 = new events ("Kris Kristofferson", "Wien","Wiener Stadthalle", 1150, "imgs/event 01.jpg", "15.Jun" , "60", "20:00");
var event2 = new events ("Lenny Kravitz", "Wien","Wiener Stadthalle", 1150, "imgs/event 02.jpg", "09.Jun" , "47,80", "19:30");
var event3 = new events ("Brazil VS Austria", "Wien","Wiener Stadthalle", 1150, "imgs/event 03.png", "10.Jun" , "70", "16:00");





var arrey = [];
arrey.push(atr1, atr2, atr3, rest1, rest2, rest3, event1, event2, event3);
for(var i=0 ; i< arrey.length ; i++){
	arrey[i].render();
}




// /* for testing

// var atr1 = new attraction("karls kirche ","Vienna","example address 32",1040,"imgs/Church.jpg", 120, false);

// var atr2 = new attraction("zoo ","Vienna","example address 3ss2",1040,"imgs/zoo.jpg", 32, true);

// var info=atr1.render();
// var info1=atr2.render();

// var display=document.getElementById("display");
// var display1=document.getElementById("display1");

// display.innerHTML=info.toString();
// display1.innerHTML=info1.toString();
// */


