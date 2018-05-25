// place - base_class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var place = /** @class */ (function () {
    function place(name, city, address, plz, img) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.plz = plz;
        this.img = img;
    }
    place.prototype.getplace = function () {
        return (this.name + " is in " + "the city :" + this.city + " and it locates in " + this.address + " , " + this.plz + " <img src = \" " + this.img + " \" > ");
    };
    return place;
}());
/* for testing
var place1:place = new place("xyz","Wien","praterstraße",1020,"imgs/Church.jpg");
var info=place1.getplace();
var display=document.getElementById("display");
display.innerHTML=info.toString();
*/
// restaurant - child class of base_class
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, city, address, plz, img, type, phone, site) {
        var _this = _super.call(this, name, city, address, plz, img) || this;
        _this.name = name;
        _this.city = city;
        _this.address = address;
        _this.plz = plz;
        _this.img = img;
        _this.type = type;
        _this.phone = phone;
        _this.site = site;
        return _this;
    }
    restaurant.prototype.getplace = function () {
        return (this.name + " is in " + "the city :" + this.city +
            " and it locates in " + this.address + " , " + this.plz +
            "<br>" + " <img src = \" " + this.img + " \" > " + "<br>" +
            " it introduces " + this.type + " food ." + "<br>" + " the phone number is :" +
            this.phone + "<br>" + "homepage: " + this.site);
    };
    return restaurant;
}(place));
/* for testing

var res = new restaurant("xyz","Vienna","example address 32",1050,"imgs/SIXTA.png","italian","0676 123456","https://www.msn.com");
var info=res.getplace();
var display=document.getElementById("display");
display.innerHTML=info.toString();
*/
// events - child class of base_class
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, city, address, plz, img, eventdate, ticketprice, eventtime) {
        var _this = _super.call(this, name, city, address, plz, img) || this;
        _this.name = name;
        _this.city = city;
        _this.address = address;
        _this.plz = plz;
        _this.img = img;
        _this.eventdate = eventdate;
        _this.ticketprice = ticketprice;
        _this.eventtime = eventtime;
        return _this;
    }
    events.prototype.getplace = function () {
        return (this.name + " is in " + "the city :" + this.city +
            " and it locates in " + this.address + " , " + this.plz +
            "<br>" + " <img src = \" " + this.img + " \" > " + "<br>" +
            " it will takeplace on " + this.eventdate + " the ticket costs " + this.ticketprice + " Euro " + "<br>" +
            " and it starts at :" +
            this.eventtime + "oclock" + "<br>");
    };
    return events;
}(place));
// for testing
var evt = new events("ozozozo", "Vienna", "example address 32", 1050, "imgs/SIXTA.png", "29.06.2018", 60, "20:45");
var evt1 = new events("ozozozo", "Vienna", "example address 32", 1050, "imgs/Church.jpg", "29.06.2018", 60, "20:45");
var info = evt.getplace();
var info1 = evt1.getplace();
var display = document.getElementById("display");
var display1 = document.getElementById("display1");
display.innerHTML = info.toString();
display1.innerHTML = info1.toString();
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
