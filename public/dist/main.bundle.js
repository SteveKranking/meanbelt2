webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_new_appointment_new_component__ = __webpack_require__("../../../../../src/app/appointment-new/appointment-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        children: []
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: []
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_4__appointment_new_appointment_new_component__["a" /* AppointmentNewComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__appointment_new_appointment_new_component__ = __webpack_require__("../../../../../src/app/appointment-new/appointment-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__appointment_service__ = __webpack_require__("../../../../../src/app/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__appointment_new_appointment_new_component__["a" /* AppointmentNewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__appointment_service__["a" /* AppointmentService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appointment-new/appointment-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appointment-new/appointment-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button [routerLink]=\"['/dashboard']\">Cancel</button>\n</div>\n<div>\n  <h3> Scheule Your Appointment!</h3>\n</div>\n<div>\n  <form (submit)=\"createAppointment()\">\n\n    <div> \n    <label> Date </label>\n    <input type=\"date\" name=\"date\" [(ngModel)]=\"newAppointment.date\">\n    </div>\n\n    <div> \n    <label> Time </label>\n    <select [(ngModel)]=\"newAppointment.time\" name=\"time\"> \n      <option> 8:00 AM </option>\n      <option> 8:30 AM </option> \n      <option> 9:00 AM </option> \n      <option> 9:30 AM </option> \n      <option> 10:00 AM </option> \n      <option> 10:30 AM </option> \n      <option> 11:00 AM </option> \n      <option> 11:30 AM </option> \n      <option> 12:00 PM </option> \n      <option> 12:30 PM </option> \n      <option> 1:00 PM </option> \n      <option> 1:30 PM </option> \n      <option> 2:00 PM </option> \n      <option> 2:30 PM </option> \n      <option> 3:00 PM </option> \n      <option> 3:30 PM </option> \n      <option> 4:00 PM </option> \n      <option> 4:30 PM </option> \n      <option> 5:00 PM </option> \n    </select>\n    </div>\n    \n    <div>\n    <label> Reason </label>\n    <input type=\"text\" name=\"reason\" [(ngModel)]=\"newAppointment.reason\">\n    </div>\n\n    <div>\n      <input type=\"submit\" value=\"Schedule Appointment\">\n    </div>\n  </form>\n  <div>\n    <p class=\"error\" *ngFor=\"let error of errors\">{{ error }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/appointment-new/appointment-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointment_service__ = __webpack_require__("../../../../../src/app/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppointmentNewComponent = (function () {
    function AppointmentNewComponent(_userService, _appointmentService, _router) {
        this._userService = _userService;
        this._appointmentService = _appointmentService;
        this._router = _router;
        this.newAppointment = { _id: "", user: "", date: null, time: "", reason: "" };
        // newAppointment: NewAppointment;
        this.errors = [];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
    }
    AppointmentNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.session(function (res) {
            if (res.status === false) {
                _this._router.navigateByUrl('/');
            }
            else {
                _this.currentUser = res;
                console.log(_this.currentUser);
            }
        });
    };
    AppointmentNewComponent.prototype.createAppointment = function () {
        var _this = this;
        this.errors = [];
        console.log(this.newAppointment.date, typeof this.newAppointment.date);
        this._appointmentService.create(this.newAppointment, function (appointment) {
            if (appointment.errors) {
                for (var _i = 0, _a = Object.keys(appointment.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = appointment.errors[key];
                    _this.errors.push(error.message);
                }
            }
            else {
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    AppointmentNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appointment-new',
            template: __webpack_require__("../../../../../src/app/appointment-new/appointment-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appointment-new/appointment-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__appointment_service__["a" /* AppointmentService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppointmentNewComponent);
    return AppointmentNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentService = (function () {
    function AppointmentService(_http) {
        this._http = _http;
    }
    AppointmentService.prototype.index = function (callback) {
        this._http.get('/appointments').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    AppointmentService.prototype.create = function (newAppointment, callback) {
        this._http.post('/appointments', newAppointment).subscribe(function (res) {
            console.log(res.json());
            callback(res.json());
        }, function (err) { return console.log(err); });
    };
    AppointmentService.prototype.destroy = function (id, callback) {
        this._http.delete("/appointments/" + id).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    AppointmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppointmentService);
    return AppointmentService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttons{\r\n    float: right;\r\n    margin:1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome! {{currentUser.name}}</h1>\n\n<div>\n    <button class =\"buttons\" (click)=\"logout()\">Logout</button>\n    <button [routerLink]=\"['/create']\" class=\"buttons\"> Schedule Appointment</button>\n</div>\n<div>\n    <h2>Appointments Scheduled</h2>\n\n    <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\" value=\"Search by Reason for visit\">\n    <table>\n   <tr>\n        <th>Date </th>\n        <th>Patient </th>\n        <th> Reason </th>\n        <th> Time </th>\n        <th> Action</th>\n    </tr>\n    <tr *ngFor=\"let appointment of appointments | filter: searchText\">\n        <td> {{ appointment.date | date:\"MM/dd/yy\"}} </td>\n        <td> {{appointment.user.name}} </td>\n        <td> {{ appointment.reason }} </td> \n        <td> {{ appointment.time }} </td>\n        <td><button (click)=\"destroyAppointment(appointment._id)\" *ngIf=\"currentUser._id === appointment.user._id\">Delete</button></td>\n    </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_service__ = __webpack_require__("../../../../../src/app/appointment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(_userService, _router, _appointmentService) {
        this._userService = _userService;
        this._router = _router;
        this._appointmentService = _appointmentService;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.characters = [
            'Finn the Dog',
            'Jake the human',
            'Princess Bubblegum'
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.session(function (res) {
            if (res.status === false) {
                _this._router.navigateByUrl('/');
            }
            else {
                _this.currentUser = res;
                console.log(_this.currentUser);
                console.log("user info");
            }
            _this.getAppointments();
        });
    };
    DashboardComponent.prototype.getAppointments = function () {
        var _this = this;
        this._appointmentService.index(function (appointments) { return _this.appointments = appointments; });
    };
    DashboardComponent.prototype.logout = function () {
        this._userService.logout(this.currentUser);
        this._router.navigateByUrl('/');
    };
    DashboardComponent.prototype.destroyAppointment = function (id) {
        var _this = this;
        this._appointmentService.destroy(id, function (res) {
            if (res.status === true) {
                _this.getAppointments();
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__appointment_service__["a" /* AppointmentService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            console.log(it);
            return it.reason.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".half {\r\n    width: 48%;\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"half\">\n  <h2>Register</h2>\n  <form (submit)=\"createUser()\">\n    <div>\n      <label>Name</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"newUser.name\">\n    </div>\n    <div>\n      <label>Email</label>\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\">\n    </div>\n    <div>\n      <label>Password</label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"newUser.password\">\n    </div>\n    <div>\n      <label>Password Confirmation</label>\n      <input type=\"password\" name=\"password_confirmation\" [(ngModel)]=\"newUser.password_confirmation\">\n    </div>\n    <div>\n      <input type=\"submit\" value=\"Register\">\n    </div>\n  </form>\n  <div>\n    <p>{{ registrationErrors[2]}}</p>\n    <p>{{registrationErrors[1]}}</p>\n    <p>{{ registrationErrors[0] }}</p>\n  </div>\n</div>\n<div class=\"half\">\n  <h2>login</h2>\n  <form (submit)=\"loginUser()\">\n      <div>\n          <label>Email</label>\n          <input type=\"text\" name=\"email\" [(ngModel)]=\"ninja.email\">\n        </div>\n        <div>\n          <label>Password</label>\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"ninja.password\">\n        </div>\n        <input type=\"submit\" value=\"Login\">\n  </form>\n  <div>\n    <p *ngFor=\"let error of loginErrors\">{{ loginErrors }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.ninja = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.registrationErrors = [];
        this.loginErrors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        this.registrationErrors = [];
        this._userService.createUser(this.newUser, function (res) {
            if (res.errors) {
                for (var _i = 0, _a = Object.keys(res.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = res.errors[key];
                    _this.registrationErrors.push(error.message);
                }
            }
            else {
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        console.log("are you working?");
        this.loginErrors = [];
        this._userService.authenticate(this.ninja, function (res) {
            console.log(res);
            console.log("hello");
            if (res.errors) {
                for (var _i = 0, _a = Object.keys(res.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = res.errors[key];
                    _this.loginErrors.push(error.message);
                    console.log('errors if statement');
                }
            }
            else {
                console.log(__WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]);
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.currentUser = null;
    }
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UserService.prototype.createUser = function (newUser, callback) {
        var _this = this;
        this._http.post('/users', newUser).subscribe(function (res) {
            var user = res.json();
            if (!user.errors) {
                _this.currentUser = user;
            }
            callback(user);
        }, function (err) { return console.log(err); });
    };
    UserService.prototype.authenticate = function (user, callback) {
        var _this = this;
        this._http.post('/login', user).subscribe(function (res) {
            var user = res.json();
            if (!user.errors) {
                _this.currentUser = user;
            }
            callback(user);
        }, function (err) { return console.log(err); });
    };
    UserService.prototype.session = function (callback) {
        this._http.get('/session').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.logout = function (callback) {
        this._http.delete('/users').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map