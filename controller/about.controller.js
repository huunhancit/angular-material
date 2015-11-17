
app.controller('AppController', function($scope){
	$scope.name = "Đinh Hữu Nhân";
	$scope.info = {
		gender : "Male",
		birthday : "November 13",
		relationship: "Single"
	},
	$scope.lang = {
		english : "???",
		vn : "Native or bilingual proficiency"
	},

	$scope.edu = {
		name : "Can Tho University",
		graduate : "Infomation Technology, 2011 - 2015"
	};
	$scope.contact = {
		skype : "huunhancit",
		face : "facebook.com/mid.night1993",
		email : "huunhancit@gmail.com",
		phone : "01652 163 632"
	}
});