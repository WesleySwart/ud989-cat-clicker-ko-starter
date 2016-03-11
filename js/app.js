/* TODO:
*  Computed observable (stats based on click count)
*  Observable array for nicknames
*/
var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

	this.age = ko.computed(function(){
		var age = "";
		var count = this.clickCount;

		if (count < 10){
			age = "Newborn";
		}
		else if(count >= 10 && count < 20){
			age = "Toddler";
		}
		else if (count >= 20 && count < 30){
			age = "Child";
		}
		else
			age = "Teen"

		this.age = age;
		return this.age;
	}, this);
	
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());