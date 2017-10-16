import '../../node_modules/@fintechstudios/angularjs-mdc/dist/angularjs-mdc.js';
import '../AngularJS/Core/angular-messages';
import '../AngularJS/Core/angular-aria';
import '../AngularJS/Core/angular-sanitize';
import '../AngularJS/UIRouter/angular-ui-router';
import main from './main/main.component';
import form2 from './form2/form2.component';
import form3 from './form3/form3.component';
import student from './student/student.component';
const app = angular.module('app', ['ngSanitize', 'ngAria', 'ngMessages', 'ui.router', 'mdc']);

main(app);
form2(app);
form3(app);
student(app);

app.config(["$stateProvider", "$urlRouterProvider", "$compileProvider", function ($stateProvider, $urlRouterProvider, $compileProvider) {
	$compileProvider.debugInfoEnabled(true);

	$urlRouterProvider.otherwise("/form1");

	$stateProvider.
		state("/form1", {url: "/form1", template: '<main></main>'}).
		state("/form2", {url: "/form2", template: '<form2></form2>'}).
		state("/form3", {url: "/form3", template: '<form3></form3>'});
}]);

export default app;
