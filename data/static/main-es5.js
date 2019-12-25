function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  fxFlex\n  fxLayout=\"row\"\n  fxLayoutAlign=\"center\"\n  fxLayoutGap=\"10px\"\n  fxLayout.xs=\"column\"\n>\n  <mat-card class=\"card\">\n    <mat-card-content>\n      <div class=\"container\">\n        <app-form></app-form>\n      </div>\n    </mat-card-content>\n  </mat-card>\n  <mat-card fxFlex=\"50%\" class=\"card\">\n    <mat-card-content>\n      <app-line-chart [data]=\"data\"></app-line-chart>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form\n  fxFlex\n  fxLayout=\"column\"\n  fxLayoutAlign=\"center\"\n  fxLayoutGap=\"10px\"\n  [formGroup]=\"myForm\"\n  (ngSubmit)=\"onSubmit(myForm.value)\"\n>\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Starting capital\"\n      formControlName=\"startingCapitalAmount\"\n      type=\"number\"\n    />\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Period</mat-label>\n    <mat-select formControlName=\"typeOfPeriod\">\n      <mat-option *ngFor=\"let period of periods\" [value]=\"period.value\">\n        {{ period.value }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Number of periods\"\n      formControlName=\"numberOfPeriods\"\n      type=\"number\"\n    />\n  </mat-form-field>\n\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Addition amount per period\"\n      formControlName=\"additionAmount\"\n      type=\"number\"\n    />\n  </mat-form-field>\n\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Return\"\n      formControlName=\"returnPercentage\"\n      type=\"number\"\n    />\n  </mat-form-field>\n  <div>\n    <button mat-raised-button color=\"primary\" type=\"submit\">\n      Get data!\n    </button>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLineChartLineChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #chart id=\"chart\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.card {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxncm9uaW5nZVxcUHl0aG9uXFxkamFuZ290ZXN0XFx0ZXN0YXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(store) {
        _classCallCheck(this, AppComponent);

        this.store = store;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.store
          //   .select(state => state.feature.chartDataResponses)
          //   .pipe(distinctUntilChanged())
          //   .subscribe(data => (this.data = data));
          this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (data) {
            return _this.data = data.chartDataResponse.chartDataResponses;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _store_effects_app_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store/effects/app.effects */
    "./src/app/store/effects/app.effects.ts");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/reducers */
    "./src/app/store/reducers/index.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./line-chart/line-chart.component */
    "./src/app/line-chart/line-chart.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/form/form.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_14__["LineChartComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_15__["FormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"], {
        metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_11__["metaReducers"],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects_app_effects__WEBPACK_IMPORTED_MODULE_10__["AppEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/form/form.component.scss":
  /*!******************************************!*\
    !*** ./src/app/form/form.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/form/form.component.ts":
  /*!****************************************!*\
    !*** ./src/app/form/form.component.ts ***!
    \****************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_actions_chart_data_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/actions/chart-data.actions */
    "./src/app/store/actions/chart-data.actions.ts");

    var FormComponent =
    /*#__PURE__*/
    function () {
      function FormComponent(fb, store) {
        _classCallCheck(this, FormComponent);

        this.fb = fb;
        this.store = store;
        this.periods = [{
          value: "Month"
        }, {
          value: "Year"
        }];
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myForm = this.fb.group({
            startingCapitalAmount: [],
            additionAmount: [],
            returnPercentage: [0.05],
            numberOfPeriods: [],
            typeOfPeriod: ["Year"]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(value) {
          this.store.dispatch(Object(_store_actions_chart_data_actions__WEBPACK_IMPORTED_MODULE_4__["setChartData"])(value));
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.scss */
      "./src/app/form/form.component.scss")).default]
    })], FormComponent);
    /***/
  },

  /***/
  "./src/app/line-chart/line-chart.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/line-chart/line-chart.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLineChartLineChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-line-chart #chart {\n  margin: 0px;\n  overflow: hidden;\n  height: calc(100vh - 150px);\n}\napp-line-chart circle {\n  fill: steelblue;\n}\napp-line-chart .line-path {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2;\n  stroke-linejoin: round;\n}\napp-line-chart text {\n  font-family: sans-serif;\n}\napp-line-chart .tick text {\n  font-size: 0.6rem;\n  fill: white;\n}\napp-line-chart .tick line {\n  stroke: #c0c0bb;\n}\napp-line-chart .axis-label {\n  font-size: 1.25rem;\n  fill: white;\n}\napp-line-chart .title {\n  font-size: 1.75rem;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZS1jaGFydC9DOlxcVXNlcnNcXGdyb25pbmdlXFxQeXRob25cXGRqYW5nb3Rlc3RcXHRlc3RhcHAvc3JjXFxhcHBcXGxpbmUtY2hhcnRcXGxpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7QUNESjtBRElFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDRko7QURLRTtFQUNFLHVCQUFBO0FDSEo7QURNRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0U7RUFDRSxlQUFBO0FDTEo7QURRRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ05KO0FEU0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1saW5lLWNoYXJ0IHtcclxuICAjY2hhcnQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xyXG4gIH1cclxuXHJcbiAgY2lyY2xlIHtcclxuICAgIGZpbGw6IHN0ZWVsYmx1ZTtcclxuICB9XHJcblxyXG4gIC5saW5lLXBhdGgge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogc3RlZWxibHVlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcclxuICB9XHJcblxyXG4gIHRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAudGljayB0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAudGljayBsaW5lIHtcclxuICAgIHN0cm9rZTogI2MwYzBiYjtcclxuICB9XHJcblxyXG4gIC5heGlzLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iLCJhcHAtbGluZS1jaGFydCAjY2hhcnQge1xuICBtYXJnaW46IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xufVxuYXBwLWxpbmUtY2hhcnQgY2lyY2xlIHtcbiAgZmlsbDogc3RlZWxibHVlO1xufVxuYXBwLWxpbmUtY2hhcnQgLmxpbmUtcGF0aCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogc3RlZWxibHVlO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5hcHAtbGluZS1jaGFydCB0ZXh0IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5hcHAtbGluZS1jaGFydCAudGljayB0ZXh0IHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZpbGw6IHdoaXRlO1xufVxuYXBwLWxpbmUtY2hhcnQgLnRpY2sgbGluZSB7XG4gIHN0cm9rZTogI2MwYzBiYjtcbn1cbmFwcC1saW5lLWNoYXJ0IC5heGlzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmaWxsOiB3aGl0ZTtcbn1cbmFwcC1saW5lLWNoYXJ0IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZmlsbDogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/line-chart/line-chart.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/line-chart/line-chart.component.ts ***!
    \****************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var LineChartComponent =
    /*#__PURE__*/
    function () {
      function LineChartComponent() {
        _classCallCheck(this, LineChartComponent);
      }

      _createClass(LineChartComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (!this.data) {
            return;
          }

          this.createChart();
        }
      }, {
        key: "createChart",
        value: function createChart() {
          d3__WEBPACK_IMPORTED_MODULE_2__["select"]("svg").remove();

          if (!this.chartContainer) {
            return;
          }

          var element = this.chartContainer.nativeElement;
          var data = this.data;
          var width = element.offsetWidth;
          var height = element.offsetHeight;
          var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](element).append("svg").attr("width", "100%").attr("height", "100%"); // .attr("preserveAspectRatio", "xMinYMin meet")
          // .attr("viewBox", "0 0 " + width + " " + height);1

          var title = "Total growth of capital";

          var xValue = function xValue(d) {
            return d.period;
          };

          var xAxisLabel = "Period";

          var yValue = function yValue(d) {
            return d.end_val;
          };

          var circleRadius = 6;
          var yAxisLabel = "Capital";
          var margin = {
            top: 50,
            right: 10,
            bottom: 60,
            left: 85
          };
          var innerWidth = width - margin.left - margin.right;
          var innerHeight = height - margin.top - margin.bottom;
          var xScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain(d3__WEBPACK_IMPORTED_MODULE_2__["extent"](data, xValue)).range([0, innerWidth]).nice();
          var yScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain(d3__WEBPACK_IMPORTED_MODULE_2__["extent"](data, yValue)).range([innerHeight, 0]).nice();
          var g = svg.append("g").attr("transform", "translate(".concat(margin.left, ",").concat(margin.top, ")"));
          var xAxis = d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](xScale).tickSize(-innerHeight).tickPadding(15);
          var yAxis = d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](yScale).tickSize(-innerWidth).tickPadding(15);
          var yAxisG = g.append("g").call(yAxis);
          yAxisG.selectAll(".domain").remove();
          yAxisG.append("text").attr("class", "axis-label").attr("y", -70).attr("x", -innerHeight / 2).attr("fill", "black").attr("transform", "rotate(-90)").attr("text-anchor", "middle").text(yAxisLabel);
          var xAxisG = g.append("g").call(xAxis).attr("transform", "translate(0,".concat(innerHeight, ")"));
          xAxisG.select(".domain").remove();
          xAxisG.append("text").attr("class", "axis-label").attr("y", 50).attr("x", innerWidth / 2).attr("fill", "black").text(xAxisLabel);
          var lineGenerator = d3__WEBPACK_IMPORTED_MODULE_2__["line"]().x(function (d) {
            return xScale(xValue(d));
          }).y(function (d) {
            return yScale(yValue(d));
          }).curve(d3__WEBPACK_IMPORTED_MODULE_2__["curveBasis"]);
          g.append("path").attr("class", "line-path").attr("d", lineGenerator(data));
          g.append("text").attr("class", "title").attr("y", -25).text(title);
        }
      }]);

      return LineChartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chart", {
      static: false
    })], LineChartComponent.prototype, "chartContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LineChartComponent.prototype, "data", void 0);
    LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-line-chart",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./line-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./line-chart.component.scss */
      "./src/app/line-chart/line-chart.component.scss")).default]
    })], LineChartComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      providers: [],
      declarations: [],
      bootstrap: [],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/store/actions/chart-data-response.actions.ts":
  /*!**************************************************************!*\
    !*** ./src/app/store/actions/chart-data-response.actions.ts ***!
    \**************************************************************/

  /*! exports provided: loadChartDataResponse, setChartDataResponse */

  /***/
  function srcAppStoreActionsChartDataResponseActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadChartDataResponse", function () {
      return loadChartDataResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setChartDataResponse", function () {
      return setChartDataResponse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var loadChartDataResponse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[ChartDataResponse] Load ChartDataResponse");
    var setChartDataResponse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[ChartDataResponse] Set ChartDataResponse", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/store/actions/chart-data.actions.ts":
  /*!*****************************************************!*\
    !*** ./src/app/store/actions/chart-data.actions.ts ***!
    \*****************************************************/

  /*! exports provided: loadChartData, setChartData */

  /***/
  function srcAppStoreActionsChartDataActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadChartData", function () {
      return loadChartData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setChartData", function () {
      return setChartData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var loadChartData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[ChartDataRequest] Load ChartData");
    var setChartData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[ChartDataRequest] Set ChartData", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/store/effects/app.effects.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/effects/app.effects.ts ***!
    \**********************************************/

  /*! exports provided: AppEffects */

  /***/
  function srcAppStoreEffectsAppEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppEffects", function () {
      return AppEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_chart_data_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions/chart-data.actions */
    "./src/app/store/actions/chart-data.actions.ts");
    /* harmony import */


    var _actions_chart_data_response_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../actions/chart-data-response.actions */
    "./src/app/store/actions/chart-data-response.actions.ts");
    /* harmony import */


    var _reducers_chart_data_request_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../reducers/chart-data-request.reducer */
    "./src/app/store/reducers/chart-data-request.reducer.ts");

    var AppEffects = function AppEffects(actions$, http, store) {
      var _this2 = this;

      _classCallCheck(this, AppEffects);

      this.actions$ = actions$;
      this.http = http;
      this.store = store;
      this.setChartData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_chart_data_actions__WEBPACK_IMPORTED_MODULE_6__["setChartData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(_this2.store.select(_reducers_chart_data_request_reducer__WEBPACK_IMPORTED_MODULE_8__["selectFeatureChartData"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              value = _ref2[0];

          return _this2.http.post("./apitest/", {
            startingCapitalAmount: value.startingCapitalAmount,
            additionAmount: value.additionAmount,
            returnPercentage: value.returnPercentage,
            numberOfPeriods: value.numberOfPeriods,
            typeOfPeriod: value.typeOfPeriod
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (chartDataResponses) {
            return Object(_actions_chart_data_response_actions__WEBPACK_IMPORTED_MODULE_7__["setChartDataResponse"])({
              chartDataResponses: chartDataResponses
            });
          }));
        }));
      });
    };

    AppEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }];
    };

    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppEffects);
    /***/
  },

  /***/
  "./src/app/store/reducers/chart-data-request.reducer.ts":
  /*!**************************************************************!*\
    !*** ./src/app/store/reducers/chart-data-request.reducer.ts ***!
    \**************************************************************/

  /*! exports provided: chartDataFeatureKey, initialState, reducer, selectFeature, selectFeatureChartData */

  /***/
  function srcAppStoreReducersChartDataRequestReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chartDataFeatureKey", function () {
      return chartDataFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFeature", function () {
      return selectFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFeatureChartData", function () {
      return selectFeatureChartData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_chart_data_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/chart-data.actions */
    "./src/app/store/actions/chart-data.actions.ts");

    var chartDataFeatureKey = "chartData";
    var initialState = {
      startingCapitalAmount: null,
      additionAmount: null,
      returnPercentage: null,
      numberOfPeriods: null,
      typeOfPeriod: null
    };
    var chartDataReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_chart_data_actions__WEBPACK_IMPORTED_MODULE_2__["setChartData"], function (state, chartDataRequest) {
      return Object.assign({}, state, {
        startingCapitalAmount: chartDataRequest.startingCapitalAmount,
        additionAmount: chartDataRequest.additionAmount,
        returnPercentage: chartDataRequest.returnPercentage,
        numberOfPeriods: chartDataRequest.numberOfPeriods,
        typeOfPeriod: chartDataRequest.typeOfPeriod
      });
    }));

    function reducer(state, action) {
      return chartDataReducer(state, action);
    }

    var selectFeature = function selectFeature(state) {
      return state.feature;
    };

    var selectFeatureChartData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectFeature, function (state) {
      return state;
    });
    /***/
  },

  /***/
  "./src/app/store/reducers/chart-data-response.reducer.ts":
  /*!***************************************************************!*\
    !*** ./src/app/store/reducers/chart-data-response.reducer.ts ***!
    \***************************************************************/

  /*! exports provided: chartDataResponseFeatureKey, initialState, reducer, selectFeature, selectFeatureChartDataResponse */

  /***/
  function srcAppStoreReducersChartDataResponseReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chartDataResponseFeatureKey", function () {
      return chartDataResponseFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFeature", function () {
      return selectFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFeatureChartDataResponse", function () {
      return selectFeatureChartDataResponse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_chart_data_response_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/chart-data-response.actions */
    "./src/app/store/actions/chart-data-response.actions.ts");

    var chartDataResponseFeatureKey = "chartDataResponse";
    var initialState = {
      chartDataResponses: []
    };
    var chartDataResponseReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_chart_data_response_actions__WEBPACK_IMPORTED_MODULE_2__["setChartDataResponse"], function (state, _ref3) {
      var chartDataResponses = _ref3.chartDataResponses;
      return Object.assign({}, state, {
        chartDataResponses: chartDataResponses
      });
    }));

    function reducer(state, action) {
      return chartDataResponseReducer(state, action);
    }

    var selectFeature = function selectFeature(state) {
      return state.feature;
    };

    var selectFeatureChartDataResponse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectFeature, function (state) {
      return state.chartDataResponses;
    });
    /***/
  },

  /***/
  "./src/app/store/reducers/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/reducers/index.ts ***!
    \*****************************************/

  /*! exports provided: reducers, debug, metaReducers */

  /***/
  function srcAppStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _reducers;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "debug", function () {
      return debug;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _chart_data_request_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chart-data-request.reducer */
    "./src/app/store/reducers/chart-data-request.reducer.ts");
    /* harmony import */


    var _chart_data_response_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chart-data-response.reducer */
    "./src/app/store/reducers/chart-data-response.reducer.ts");

    var reducers = (_reducers = {}, _defineProperty(_reducers, _chart_data_request_reducer__WEBPACK_IMPORTED_MODULE_2__["chartDataFeatureKey"], _chart_data_request_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]), _defineProperty(_reducers, _chart_data_response_reducer__WEBPACK_IMPORTED_MODULE_3__["chartDataResponseFeatureKey"], _chart_data_response_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]), _reducers); // console.log all actions

    function debug(reducer) {
      return function (state, action) {
        console.log("state", state);
        console.log("action", action);
        return reducer(state, action);
      };
    }

    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [debug] : [];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\groninge\Python\djangotest\testapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map