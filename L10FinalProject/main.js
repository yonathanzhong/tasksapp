(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_display_tasks_display_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display-tasks/display-tasks.component */ "./src/app/modules/display-tasks/display-tasks.component.ts");
/* harmony import */ var _modules_display_task_display_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/display-task/display-task.component */ "./src/app/modules/display-task/display-task.component.ts");
/* harmony import */ var _shared_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/add-task/add-task.component */ "./src/app/shared/add-task/add-task.component.ts");
/* harmony import */ var _shared_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/update-task/update-task.component */ "./src/app/shared/update-task/update-task.component.ts");







var routes = [
    {
        path: 'home',
        component: _modules_display_tasks_display_tasks_component__WEBPACK_IMPORTED_MODULE_3__["DisplayTasksComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'addTask',
        component: _shared_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"] },
    { path: "updateTask/:id",
        component: _shared_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_6__["UpdateTaskComponent"] },
    { path: ":id",
        component: _modules_display_task_display_task_component__WEBPACK_IMPORTED_MODULE_4__["DisplayTaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <nav>\n    <a class=\"btn\" routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n  </nav>\n</div>\n<h1>Tasks App</h1><br>\n<p>User: {{user}}</p>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularFinalProject';
        this.user = "Yonathan Chandra";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_tasks_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tasks.module */ "./src/app/modules/tasks.module.ts");
/* harmony import */ var _shared_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/add-task/add-task.component */ "./src/app/shared/add-task/add-task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/update-task/update-task.component */ "./src/app/shared/update-task/update-task.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"],
                _shared_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_8__["UpdateTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_tasks_module__WEBPACK_IMPORTED_MODULE_5__["TasksModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/display-task/display-task.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/display-task/display-task.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGlzcGxheS10YXNrL2Rpc3BsYXktdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/display-task/display-task.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/display-task/display-task.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink = \"/\"> Back </a>\n<h2>Task #{{data.id}} Details</h2>\n<p>Task: {{data.title}}\n    <br>\n    Time To Complete: {{data.timeToComplete}} Minutes\n    <br>\n    Description: {{data.description}}\n    <br>\n    Necessary Items: {{data.necessaryItems}}\n    <br>\n</p>\n<button [routerLink]=\"['/updateTask', data.id]\">Update Task</button>\n<button (click)=\"deleteTask(data.id)\">Delete</button>"

/***/ }),

/***/ "./src/app/modules/display-task/display-task.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/display-task/display-task.component.ts ***!
  \****************************************************************/
/*! exports provided: DisplayTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayTaskComponent", function() { return DisplayTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DisplayTaskComponent = /** @class */ (function () {
    function DisplayTaskComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.data = {};
        this.tasks = [];
        this.tasksRoute = "http://localhost:3000/tasks";
    }
    DisplayTaskComponent.prototype.deleteTask = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            var url = "http://localhost:3000/tasks" + "/" + id;
            return this.http.delete(url).toPromise()
                .then(function () { _this.router.navigate(["/"]); });
        }
    };
    DisplayTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.http.get(this.tasksRoute).subscribe(function (tasks) {
            _this.tasks = tasks;
            for (var i = 0; i < _this.tasks.length; i++) {
                if (parseInt(_this.tasks[i].id) === _this.id) {
                    _this.data = _this.tasks[i];
                    break;
                }
            }
        });
    };
    DisplayTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-task',
            template: __webpack_require__(/*! ./display-task.component.html */ "./src/app/modules/display-task/display-task.component.html"),
            styles: [__webpack_require__(/*! ./display-task.component.css */ "./src/app/modules/display-task/display-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DisplayTaskComponent);
    return DisplayTaskComponent;
}());



/***/ }),

/***/ "./src/app/modules/display-tasks/display-tasks.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/display-tasks/display-tasks.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGlzcGxheS10YXNrcy9kaXNwbGF5LXRhc2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/display-tasks/display-tasks.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/display-tasks/display-tasks.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Current Tasks:</h2>\n    <p>Click Task for More Details</p>\n    <div class=\"superstar\">\n    <ul>\n      <li *ngFor=\"let task of tasks\">\n       <a [routerLink]= \"['/', task.id]\" > {{task.id}}. {{task.title}}</a> <button (click)=\"deleteTask(task.id)\">Delete</button>\n      </li>\n    </ul>\n  </div>\n  <h3>Add A New Task:</h3>\n  <p>Click Link Below to Add A New Task</p>\n  <a routerLink=\"/addTask\" routerLinkActive=\"active\"> + Add Task </a>\n</div>"

/***/ }),

/***/ "./src/app/modules/display-tasks/display-tasks.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/display-tasks/display-tasks.component.ts ***!
  \******************************************************************/
/*! exports provided: DisplayTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayTasksComponent", function() { return DisplayTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DisplayTasksComponent = /** @class */ (function () {
    function DisplayTasksComponent(http) {
        this.http = http;
        this.tasksRoute = "http://localhost:3000/tasks";
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    DisplayTasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.http.get(this.tasksRoute).subscribe(function (tasks) {
            _this.tasks = tasks;
            console.log('Tasks', _this.tasks);
        });
    };
    DisplayTasksComponent.prototype.deleteTask = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            var url = "http://localhost:3000/tasks" + "/" + id;
            return this.http.delete(url).toPromise()
                .then(function () { _this.getTasks(); });
        }
    };
    DisplayTasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    DisplayTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-tasks',
            template: __webpack_require__(/*! ./display-tasks.component.html */ "./src/app/modules/display-tasks/display-tasks.component.html"),
            styles: [__webpack_require__(/*! ./display-tasks.component.css */ "./src/app/modules/display-tasks/display-tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DisplayTasksComponent);
    return DisplayTasksComponent;
}());



/***/ }),

/***/ "./src/app/modules/tasks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/tasks.module.ts ***!
  \*****************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _display_tasks_display_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-tasks/display-tasks.component */ "./src/app/modules/display-tasks/display-tasks.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _display_task_display_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-task/display-task.component */ "./src/app/modules/display-task/display-task.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");

;






var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            declarations: [_display_tasks_display_tasks_component__WEBPACK_IMPORTED_MODULE_1__["DisplayTasksComponent"], _display_task_display_task_component__WEBPACK_IMPORTED_MODULE_5__["DisplayTaskComponent"]],
            exports: [_display_tasks_display_tasks_component__WEBPACK_IMPORTED_MODULE_1__["DisplayTasksComponent"], _display_task_display_task_component__WEBPACK_IMPORTED_MODULE_5__["DisplayTaskComponent"]]
        })
    ], TasksModule);
    return TasksModule;
}());



/***/ }),

/***/ "./src/app/shared/add-task/add-task.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/add-task/add-task.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/add-task/add-task.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/add-task/add-task.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink = \"/\"> Back </a>\n<h2>Add New Task</h2>\n\n\n<form id=\"formNewTask\" name=\"formNewTask\" #taskData = \"ngForm\" (ngSubmit) = \"addNewTask(taskData.value)\">\n  <label>Task: </label>\n  <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Task\" required ngModel><br>\n  <label>Time To Complete: </label>\n  <input type=\"number\" name=\"timeToComplete\" id=\"timeToComplete\" placeholder=\"Time To Complete\" ngModel> Minutes<br>\n  <label>Description: </label>\n  <input type=\"text\" name=\"description\" id=\"description\" placeholder=\"Description\" ngModel><br>\n  <label>Necessary Items: </label>\n  <input type=\"text\" name=\"necessaryItems\" id=\"necessaryItems\" placeholder=\"Necessary Items\" ngModel><br>\n  <input type=\"submit\" value= \"Add Task\">\n</form>\n<br>\n<h3 *ngIf = \"isAdded\"> {{confirmationString}}! </h3>"

/***/ }),

/***/ "./src/app/shared/add-task/add-task.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/add-task/add-task.component.ts ***!
  \*******************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(http) {
        this.http = http;
        this.confirmationString = "New task has been added";
        this.isAdded = false;
        this.addNewTask = function (task) {
            var _this = this;
            this.task = {
                "id": task.id,
                "title": task.title,
                "timeToComplete": task.timeToComplete,
                "description": task.description,
                "necessaryItems": task.necessaryItems
            };
            this.http.post("http://localhost:3000/tasks/", this.task).subscribe(function (res) { return (_this.isAdded = true); });
        };
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/shared/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/shared/add-task/add-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/shared/update-task/update-task.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/update-task/update-task.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91cGRhdGUtdGFzay91cGRhdGUtdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/update-task/update-task.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/update-task/update-task.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink = \"/\"> Back </a>\n<h2>Update Task</h2>\n\n<form id=\"updateTask\" name=\"updateTask\" #taskData = \"ngForm\" (ngSubmit) = \"updateTask(taskData.value)\">\n  <label>Task: </label>\n  <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Task\" [(ngModel)] = \"data.title\"><br>\n  <label>Time To Complete: </label>\n  <input type=\"number\" name=\"timeToComplete\" id=\"timeToComplete\" placeholder=\"Time To Complete\" [(ngModel)] = \"data.timeToComplete\"> Minutes<br>\n  <label>Description: </label>\n  <input type=\"text\" name=\"description\" id=\"description\" placeholder=\"Description\" [(ngModel)] = \"data.description\"><br>\n  <label>Necessary Items: </label>\n  <input type=\"text\" name=\"necessaryItems\" id=\"necessaryItems\" placeholder=\"Necessary Items\" [(ngModel)] = \"data.necessaryItems\"><br>\n  <input type=\"submit\" value= \"Update Task\">\n</form>"

/***/ }),

/***/ "./src/app/shared/update-task/update-task.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/update-task/update-task.component.ts ***!
  \*************************************************************/
/*! exports provided: UpdateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskComponent", function() { return UpdateTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UpdateTaskComponent = /** @class */ (function () {
    function UpdateTaskComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.data = {};
        this.tasks = [];
        this.taskObj = {};
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.tasksRoute = "http://localhost:3000/tasks";
    }
    UpdateTaskComponent.prototype.updateTask = function (taskData) {
        var _this = this;
        this.taskObj = {
            "id": taskData.id,
            "title": taskData.title,
            "description": taskData.description,
            "timeToComplete": taskData.timeToComplete,
            "necessaryItems": taskData.necessaryItems,
        };
        var url = "http://localhost:3000/tasks" + "/" + this.id;
        this.http.put(url, this.taskObj)
            .toPromise()
            .then(function () { _this.router.navigate(["/" + _this.id]); });
    };
    UpdateTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.http.get(this.tasksRoute).subscribe(function (tasks) {
            _this.tasks = tasks;
            for (var i = 0; i < _this.tasks.length; i++) {
                if (parseInt(_this.tasks[i].id) === _this.id) {
                    _this.data = _this.tasks[i];
                    break;
                }
            }
        });
    };
    UpdateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-task',
            template: __webpack_require__(/*! ./update-task.component.html */ "./src/app/shared/update-task/update-task.component.html"),
            styles: [__webpack_require__(/*! ./update-task.component.css */ "./src/app/shared/update-task/update-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UpdateTaskComponent);
    return UpdateTaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yonathanzhong/Desktop/FullStackWeb/FEFAngular/tasksapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map