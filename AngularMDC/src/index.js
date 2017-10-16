import './AngularJS/Core/angular';
import app from './app/module';

angular.element(document).ready(function(){
	angular.bootstrap(document, ["app"]);
});

