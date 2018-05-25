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


 getplace()
{
	return (this.name+" is in "+"the city :" + this.city + " and it locates in " + this.address + " , " +this.plz +  " <img src = \" "  +this.img+" \" > " );	

}

}	


/* for testing
var place1:place = new place("xyz","Wien","praterstraße",1020,"imgs/Church.jpg");
var info=place1.getplace();
var display=document.getElementById("display");
display.innerHTML=info.toString();
*/




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

 getplace() //overriding 
{
	return (this.name+" is in "+"the city :" + this.city +
	 		" and it locates in " + this.address + " , " +this.plz +
	 		"<br>"+ " <img src = \" "  +this.img+" \" > "+ "<br>"+
	 		" it introduces "+this.type+ " food ."+"<br>"+" the phone number is :"+
	 		this.phone+"<br>"+"homepage: "+this.site);	

}
	
}






/* for testing

var res = new restaurant("xyz","Vienna","example address 32",1050,"imgs/SIXTA.png","italian","0676 123456","https://www.msn.com");
var info=res.getplace();
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

getplace(){			//overriding 
	return (this.name+" is in "+"the city :" + this.city +
	 		" and it locates in " + this.address + " , " +this.plz +
	 		"<br>"+ " <img src = \" "  +this.img+" \" > "+ "<br>"+
	 		" it will takeplace on "+this.eventdate + " the ticket costs "+this.ticketprice+" Euro "+"<br>"+
	 		" and it starts at :"+
	 		this.eventtime+"oclock"+"<br>");	

}
	
}


// for testing

var evt = new events("ozozozo","Vienna","example address 32",1050,"imgs/SIXTA.png",
	"29.06.2018",60,"20:45");
var evt1 = new events("ozozozo","Vienna","example address 32",1050,"imgs/Church.jpg",
	"29.06.2018",60,"20:45");


var info=evt.getplace();
var info1=evt1.getplace();

var display=document.getElementById("display");
var display1=document.getElementById("display1");

display.innerHTML=info.toString();
display1.innerHTML=info1.toString();






/*
// attraction - child class of base_class

class attraction extends place {

	age:number;
	freeentry :boolean;

constructor(city:string, address:string, plz:number, img:any)
{	
	super(name,city, address, plz, img); //calling the constructor of class father "place"
}


	
}


*/