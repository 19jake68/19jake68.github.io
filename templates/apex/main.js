(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/content/content-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper p-0\" [dir]=\"direction\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full-layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  #wrapper\n  class=\"wrapper\"\n  [ngClass]=\"{\n    'nav-collapsed': iscollapsed,\n    'menu-collapsed': iscollapsed,\n    'sidebar-sm': isSidebar_sm,\n    'sidebar-lg': isSidebar_lg\n  }\"\n  [dir]=\"options.direction\"\n>\n  <div\n    #appSidebar\n    appSidebar\n    class=\"app-sidebar\"\n    (toggleHideSidebar)=\"toggleHideSidebar($event)\"\n    [ngClass]=\"{ 'hide-sidebar': hideSidebar }\"\n    data-active-color=\"white\"\n    [attr.data-background-color]=\"bgColor\"\n    [attr.data-image]=\"bgImage\"\n  >\n    <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\" #sidebarBgImage></div>\n  </div>\n  <app-navbar (toggleHideSidebar)=\"toggleHideSidebar($event)\"></app-navbar>\n  <div class=\"main-panel\">\n    <div class=\"main-content\">\n      <div class=\"content-wrapper\">\n        <div class=\"container-fluid\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n  <app-notification-sidebar></app-notification-sidebar>\n  <app-customizer (directionEvent)=\"getOptions($event)\"></app-customizer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/customizer/customizer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\n<div #customizer class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block\" [ngClass]=\"{open: isOpen}\">\n  <a class=\"customizer-close\" (click)=\"closeCustomizer()\">\n    <i class=\"ft-x font-medium-3\"></i>\n  </a>\n  <a class=\"customizer-toggle bg-danger\" id=\"customizer-toggle-icon\" (click)=\"toggleCustomizer()\">\n    <i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\n  </a>\n  <div [perfectScrollbar] class=\"customizer-content p-3 ps-container ps-theme-dark text-left\" data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\n    <h4 class=\"text-uppercase mb-0 text-bold-400\">Theme Customizer</h4>\n    <p>Customize &amp; Preview in Real Time</p>\n    <hr>\n\n    <!-- Layout Options-->\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Layout Options</h6>\n    <div class=\"layout-switch ml-4\">\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline light-layout\">\n        <input class=\"custom-control-input\" id=\"ll-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Light'\"  (click)=\"onLightLayout()\" />\n        <label class=\"custom-control-label\" for=\"ll-switch\">Light</label>\n      </div>\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline dark-layout\">\n        <input class=\"custom-control-input\" id=\"dl-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Dark'\" (click)=\"onDarkLayout()\" />\n        <label class=\"custom-control-label\" for=\"dl-switch\">Dark</label>\n      </div>\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline transparent-layout\">\n        <input class=\"custom-control-input\" id=\"tl-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Transparent'\" (click)=\"onTransparentLayout()\" />\n        <label class=\"custom-control-label\" for=\"tl-switch\">Transparent</label>\n      </div>\n    </div>\n    <hr />\n\n    <!-- Sidebar Options Starts-->\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-options\">Sidebar Color Options</h6>\n    <div class=\"cz-bg-color sb-color-options\">\n      <div class=\"row p-1\">\n        <div class=\"col\"><span class=\"gradient-pomegranate d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"pomegranate\" [ngClass]=\"{'selected': selectedBgColor === 'pomegranate'}\" (click)=\"changeSidebarBgColor('pomegranate')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-king-yna d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"king-yna\" [ngClass]=\"{'selected': selectedBgColor === 'king-yna'}\" (click)=\"changeSidebarBgColor('king-yna')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-ibiza-sunset d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"ibiza-sunset\" [ngClass]=\"{'selected': selectedBgColor === 'ibiza-sunset'}\" (click)=\"changeSidebarBgColor('ibiza-sunset')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-flickr d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"flickr\" [ngClass]=\"{'selected': selectedBgColor === 'flickr'}\" (click)=\"changeSidebarBgColor('flickr')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-purple-bliss d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"purple-bliss\" [ngClass]=\"{'selected': selectedBgColor === 'purple-bliss'}\" (click)=\"changeSidebarBgColor('purple-bliss')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-man-of-steel d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"man-of-steel\" [ngClass]=\"{'selected': selectedBgColor === 'man-of-steel'}\" (click)=\"changeSidebarBgColor('man-of-steel')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-purple-love d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"purple-love\" [ngClass]=\"{'selected': selectedBgColor === 'purple-love'}\" (click)=\"changeSidebarBgColor('purple-love')\"></span></div>\n      </div>\n      <div class=\"row p-1\">\n        <div class=\"col\"><span class=\"bg-black d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"black\" [ngClass]=\"{'selected': selectedBgColor === 'black'}\" (click)=\"changeSidebarBgColor('black')\"></span></div>\n        <div class=\"col\"><span class=\"bg-grey d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"white\" [ngClass]=\"{'selected': selectedBgColor === 'white'}\" (click)=\"changeSidebarBgColor('white')\"></span></div>\n        <div class=\"col\"><span class=\"bg-primary d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"primary\" [ngClass]=\"{'selected': selectedBgColor === 'primary'}\" (click)=\"changeSidebarBgColor('primary')\"></span></div>\n        <div class=\"col\"><span class=\"bg-success d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"success\" [ngClass]=\"{'selected': selectedBgColor === 'success'}\" (click)=\"changeSidebarBgColor('success')\"></span></div>\n        <div class=\"col\"><span class=\"bg-warning d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"warning\" [ngClass]=\"{'selected': selectedBgColor === 'warning'}\" (click)=\"changeSidebarBgColor('warning')\"></span></div>\n        <div class=\"col\"><span class=\"bg-info d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"info\" [ngClass]=\"{'selected': selectedBgColor === 'info'}\" (click)=\"changeSidebarBgColor('info')\"></span></div>\n        <div class=\"col\"><span class=\"bg-danger d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"danger\" [ngClass]=\"{'selected': selectedBgColor === 'danger'}\" (click)=\"changeSidebarBgColor('danger')\"></span></div>\n      </div>\n    </div>\n    <!-- Sidebar Options Ends-->\n    <!-- Transparent Layout Bg color Options-->\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase tl-color-options d-none\">Background Colors</h6>\n    <div class=\"cz-tl-bg-color d-none\">\n      <div class=\"row p-1\">\n        <div class=\"col\"><span class=\"bg-hibiscus d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"bg-hibiscus\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-hibiscus'}\" (click)=\"changeSidebarTLBgColor('bg-hibiscus')\"></span></div>\n        <div class=\"col\"><span class=\"bg-purple-pizzazz d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"bg-purple-pizzazz\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-purple-pizzazz'}\" (click)=\"changeSidebarTLBgColor('bg-purple-pizzazz')\"></span></div>\n        <div class=\"col\"><span class=\"bg-blue-lagoon d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"bg-blue-lagoon\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-blue-lagoon'}\" (click)=\"changeSidebarTLBgColor('bg-blue-lagoon')\"></span></div>\n        <div class=\"col\"><span class=\"bg-electric-violet d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"bg-electric-violet\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-electric-violet'}\" (click)=\"changeSidebarTLBgColor('bg-electric-violet')\"></span></div>\n        <div class=\"col\"><span class=\"bg-portage d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"bg-portage\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-portage'}\" (click)=\"changeSidebarTLBgColor('bg-portage')\"></span></div>\n        <div class=\"col\"><span class=\"bg-tundora d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"bg-tundora\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-tundora'}\" (click)=\"changeSidebarTLBgColor('bg-tundora')\"></span></div>\n      </div>\n    </div>\n    <!-- Transparent Layout Bg color Ends-->\n    <hr />\n    <!--Sidebar BG Image Starts-->\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-bg-img\">Sidebar Bg Image</h6>\n    <div class=\"cz-bg-image row sb-bg-img\">\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/01.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/01.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/01.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/02.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/02.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/02.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/03.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/03.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/03.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/04.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/04.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/04.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/05.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/05.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/05.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/06.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/06.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/06.jpg')\" /></div>\n    </div>\n    <!-- Transparent BG Image Ends-->\n    <div class=\"tl-bg-img d-none\">\n      <h6 class=\"text-center text-bold-500 text-uppercase\">Background Images</h6>\n      <div class=\"cz-tl-bg-image row\">\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-1\" src=\"assets/img/gallery/bg-glass-1.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-1.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-1.jpg', 'bg-glass-1')\" /></div>\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-2\" src=\"assets/img/gallery/bg-glass-2.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-2.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-2.jpg', 'bg-glass-2')\" /></div>\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-3\" src=\"assets/img/gallery/bg-glass-3.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-3.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-3.jpg', 'bg-glass-3')\" /></div>\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-4\" src=\"assets/img/gallery/bg-glass-4.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-4.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-4.jpg', 'bg-glass-4')\" /></div>\n      </div>\n    </div>\n\n    <hr />\n    <!-- Transparent BG Image Ends-->\n    <!--Sidebar BG Image Ends-->\n\n    <!--Sidebar BG Image Toggle Starts-->\n    <div class=\"togglebutton toggle-sb-bg-img\">\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\n        <span>Sidebar Bg Image</span>\n        <div class=\"float-right\">\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"checkbox\" class=\"custom-control-input cz-bg-image-display\" checked id=\"sidebar-bg-img\" (change)=\"bgImageDisplay($event)\">\n            <label class=\"custom-control-label d-block\" for=\"sidebar-bg-img\"></label>\n          </div>\n        </div>\n      </div>\n      <hr>\n    </div>\n    <!--Sidebar BG Image Toggle Ends-->\n\n    <!--Compact Menu Starts-->\n    <div class=\"togglebutton\">\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\n        <span>Compact Menu</span>\n        <div class=\"float-right\">\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"checkbox\" [checked]=\"config.layout.sidebar.collapsed\" class=\"custom-control-input cz-compact-menu\" id=\"cz-compact-menu\" (change)=\"toggleCompactMenu($event)\">\n            <label class=\"custom-control-label d-block\" for=\"cz-compact-menu\"></label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--Compact Menu Ends-->\n    <hr>\n\n    <!--RTL Starts-->\n    <div class=\"togglebutton\">\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\n        <span>RTL</span>\n        <div class=\"float-right\">\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"checkbox\" [checked]=\"options.direction == 'rtl' ? 'checked' : false\" class=\"custom-control-input cz-rtl\"\n              id=\"cz-rtl\" (change)=\"options.direction = (options.direction == 'rtl' ? 'ltr' : 'rtl'); sendOptions()\">\n            <label class=\"custom-control-label d-block\" for=\"cz-rtl\"></label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--RTL Ends-->\n    <hr>\n\n    <!--Sidebar Width Starts-->\n    <div>\n      <label for=\"cz-sidebar-width\">Sidebar Width</label>\n      <select id=\"cz-sidebar-width\" #width class=\"custom-select cz-sidebar-width float-right\" (change)=\"changeSidebarWidth(width.value)\">\n        <option value=\"sidebar-sm\" [selected] = \"size === 'sidebar-sm'\">Small</option>\n        <option value=\"sidebar-md\" [selected] = \"size === 'sidebar-md'\">Medium</option>\n        <option value=\"sidebar-lg\" [selected] = \"size === 'sidebar-lg'\">Large</option>\n      </select>\n    </div>\n    <!--Sidebar Width Ends-->\n  </div>\n</div>\n<!--Theme customizer Ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\n<footer>\n    <div class=\"container-fluid\">\n        <p class=\"copyright text-center\">\n                Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\">PIXINVENT</a>, All rights reserved.          \n        </p>\n        \n    </div>\n</footer>\n<!--Footer Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\" (click)=\"toggleSidebar()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\n                    <i class=\"ft-more-vertical\"></i>\n                </a>\n            </span>\n            <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\n                <div class=\"position-relative has-icon-right\">\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\n                    <div class=\"form-control-position\">\n                        <i class=\"ft-search\"></i>\n                    </div>\n                </div>\n            </form>\n           \n        </div>\n        <div class=\"navbar-container\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item mr-2  d-none d-lg-block\">\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">fullscreen</p>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownLang\" ngbDropdownToggle>\n                            <i class=\"ft-flag font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">Language</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLang\" class=\"dropdownLang text-left\">                           \n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('en')\">\n                                <img src=\"./assets/img/flags/us.png\" alt=\"English\" class=\"langimg\">\n                                <span>English</span>\n                            </a>\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('es')\">\n                                <img src=\"./assets/img/flags/es.png\" alt=\"Spanish\" class=\"langimg\">\n                                <span>Spanish</span>\n                            </a> \n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('pt')\">\n                                <img src=\"./assets/img/flags/br.png\" alt=\"Portuguese\" class=\"langimg\">\n                                <span>Portuguese</span>\n                            </a> \n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('de')\">\n                                <img src=\"./assets/img/flags/de.png\" alt=\"German\" class=\"langimg\">\n                                <span>German</span>\n                            </a>                            \n                        </div>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\n                            <i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i>\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\n                            <p class=\"d-none\">Notifications</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\n                            <div class=\"noti-list\" [perfectScrollbar]>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell info float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell warning float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell danger float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3\">\n                                    <i class=\"ft-bell success float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 success\">New User Registered</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\n                                    </span>\n                                </a>\n                            </div>\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">User Settings</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">                           \n                            <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\n                                <i class=\"ft-edit mr-2\"></i>\n                                <span>My Profile</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" routerLink=\"/inbox\">\n                                <i class=\"ft-mail mr-2\"></i>\n                                <span>My Inbox</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-settings mr-2\"></i>\n                                <span>Settings</span>\n                            </a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"javascript:;\">\n                                <i class=\"ft-power mr-2\"></i>\n                                <span>Logout</span>\n                            </a>\n                        </div>\n                    </li>\n                    <li class=\"nav-item d-none d-lg-block\">\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\" (click)=\"toggleNotificationSidebar();\">\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">Notifications Sidebar</p>\n                        </a>\n                    </li>\n                   \n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\n<!-- START Notification Sidebar -->\n<aside #sidebar id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\n  <a class=\"notification-sidebar-close\" (click)=\"onClose()\">\n    <i class=\"ft-x font-medium-3\"></i>\n  </a>\n  <div class=\"side-nav notification-sidebar-content\" [perfectScrollbar]>\n    <div class=\"row\">\n      <div class=\"col-12 mt-1\">\n        <ngb-tabset>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"activity\" class=\"col-12 timeline-left\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT ACTIVITY</h6>\n                <div id=\"timeline\" class=\"timeline-left timeline-wrapper\">\n                  <ul class=\"timeline\">\n                    <li class=\"timeline-line\"></li>\n                    <li class=\"timeline-item text-left text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-purple bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-shopping-cart\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new\n                          equipments for zonal office.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-info bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA\n                          will be on 15th August 2015.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-success bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a\n                          voice mail for next conference.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-warning bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store\n                          at S.G Road.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.\n                        </p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-cyan bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a\n                          voice mail for next conference.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-amber bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store\n                          at S.G Road.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-grey bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.\n                        </p>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"chatapp\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT CHAT</h6>\n                <div class=\"collection border-none\">\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-12.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Thank you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-6.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-11.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-18.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-1.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Love you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-2.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Can we </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-3.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Great! </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-15.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Do it </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-19.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Got that </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-14.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Like you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-13.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Thank you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-22.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Okay you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-9.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Can do </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-20.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Leave it </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"settings\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">GENERAL SETTINGS</h6>\n                <ul class=\"list-unstyled\">\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input checked=\"checked\" class=\"custom-control-input \" type=\"checkbox\"\n                              id=\"notifications1\">\n                            <label class=\"custom-control-label d-block\" for=\"notifications1\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input checked=\"checked\" class=\"custom-control-input \" type=\"checkbox\"\n                              id=\"recent-activity1\">\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity1\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch  d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"notifications2\">\n                            <label class=\"custom-control-label d-block\" for=\"notifications2\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input \" type=\"checkbox\"\n                              id=\"recent-activity2\">\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity2\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show your emails</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"show-emails\">\n                            <label class=\"custom-control-label d-block\" for=\"show-emails\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show Task statistics</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"show-stats\">\n                            <label class=\"custom-control-label d-block\" for=\"show-stats\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                </ul>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n</aside>\n<!-- END Notification Sidebar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\n<div class=\"sidebar-header\">\n    <div class=\"logo clearfix\">\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\n            <div class=\"logo-img\">\n                <img [src]=\"logoUrl\" />\n            </div>\n            <span class=\"text align-middle\">APEX</span>\n        </a>\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\n            <i #toggleIcon appSidebarToggle class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\n        </a>\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\n            <i class=\"ft-x\"></i>\n        </a>\n    </div>\n</div>\n<!-- Sidebar Header Ends -->\n\n<!-- Sidebar Content starts -->\n<div class=\"sidebar-content\"  [perfectScrollbar]>\n    <div class=\"nav-container\">\n        <ul class=\"navigation\" appSidebarList>\n            <!-- First level menu -->\n             <li appSidebarlink level=\"{{depth + 1}}\" (toggleEmit)=\"handleToggle($event)\" (click)=\"toggleSlideInOut()\" [routePath]=\"menuItem.path\" [classes]=\"menuItem.class\" [title]=\"menuItem.title\"  [parent]=\"\" *ngFor=\"let menuItem of menuItems\"   [ngClass]=\"{'has-sub': menuItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuItem.title)}\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\n                [routerLinkActiveOptions]=\"{exact: true}\">\n                <a appSidebarAnchorToggle [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                </a>\n                <ng-template #externalLinkBlock>\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                    </a>\n                </ng-template>\n                <!-- Second level menu -->\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuItem.title) ? true : false\">\n                    <li appSidebarlink level=\"{{depth + 2}}\" (toggleEmit)=\"handleToggle($event)\" [routePath]=\"menuSubItem.path\" [classes]=\"menuSubItem.class\" [title]=\"menuSubItem.title\" [parent]=\"menuItem.title\" *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"{'has-sub': menuSubItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuSubItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuSubItem.title)}\">\n                        <a appSidebarAnchorToggle [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                        </a>\n                        <ng-template #externalSubLinkBlock>\n                            <a [href]=\"[menuSubItem.path]\">\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                            </a>\n                        </ng-template>\n                        <!-- Third level menu -->\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuSubItem.title) ? true : false\">\n                            <li appSidebarlink level=\"{{depth + 3}}\" [routePath]=\"menuSubsubItem.path\" [classes]=\"menuSubsubItem.class\" [title]=\"menuSubsubItem.title\" [parent]=\"menuSubItem.title\" *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\n                                [ngClass]=\"[menuSubsubItem.class]\">\n                                <a appSidebarAnchorToggle [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                </a>\n                                <ng-template #externalSubSubLinkBlock>\n                                    <a [href]=\"[menuSubsubItem.path]\">\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                    </a>\n                                </ng-template>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</div>\n<!-- Sidebar Content Ends -->\n"

/***/ }),

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
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");








var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard/dashboard1',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__["CONTENT_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    {
        path: '**',
        redirectTo: 'pages/error'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");



















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_15__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_14__["ContentLayoutComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({}),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: "YOUR KEY"
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"]
            ],
            providers: [
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(configService, document, renderer) {
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.config = {};
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    ContentLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
                _this.renderer.addClass(_this.document.body, 'layout-transparent');
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, 'bg-glass-1');
                }
            }
        }, 0);
    };
    ContentLayoutComponent.ctorParameters = function () { return [
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content-wrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContentLayoutComponent.prototype, "wrapper", void 0);
    ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");





var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef, layoutService, configService, document, renderer) {
        var _this = this;
        this.elementRef = elementRef;
        this.layoutService = layoutService;
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.options = {
            direction: "ltr",
            bgColor: "black",
            bgImage: "assets/img/sidebar-bg/01.jpg"
        };
        this.iscollapsed = false;
        this.isSidebar_sm = false;
        this.isSidebar_lg = false;
        this.bgColor = "black";
        this.bgImage = "assets/img/sidebar-bg/01.jpg";
        this.config = {};
        //event emitter call from customizer
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    _this.bgColor = options.bgColor;
                }
                if (options.bgImage) {
                    _this.bgImage = options.bgImage;
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", 'background-image: url("' + _this.bgImage + '")');
                }
                if (options.bgImageDisplay === true) {
                    _this.bgImage = options.bgImage;
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", 'display: block; background-image: url("' + _this.bgImage + '")');
                }
                else if (options.bgImageDisplay === false) {
                    _this.bgImage = "";
                    // this.renderer.setAttribute(this.sidebarBgImage.nativeElement, 'style', 'display: none');
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", "background-image: none");
                }
                if (options.compactMenu === true) {
                    _this.renderer.addClass(_this.wrapper.nativeElement, "nav-collapsed");
                    _this.renderer.addClass(_this.wrapper.nativeElement, "menu-collapsed");
                }
                else if (options.compactMenu === false) {
                    if (_this.wrapper.nativeElement.classList.contains("nav-collapsed")) {
                        _this.renderer.removeClass(_this.wrapper.nativeElement, "nav-collapsed");
                        _this.renderer.removeClass(_this.wrapper.nativeElement, "menu-collapsed");
                    }
                }
                if (options.sidebarSize === "sidebar-lg") {
                    _this.isSidebar_sm = false;
                    _this.isSidebar_lg = true;
                }
                else if (options.sidebarSize === "sidebar-sm") {
                    _this.isSidebar_sm = true;
                    _this.isSidebar_lg = false;
                }
                else {
                    _this.isSidebar_sm = false;
                    _this.isSidebar_lg = false;
                }
                if (options.layout === "Light") {
                    _this.renderer.removeClass(_this.document.body, "layout-dark");
                    _this.renderer.removeClass(_this.document.body, "layout-transparent");
                    _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                    _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                    _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                    _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                    _this.renderer.removeClass(_this.document.body, "bg-portage");
                    _this.renderer.removeClass(_this.document.body, "bg-tundora");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                }
                else if (options.layout === "Dark") {
                    if (_this.document.body.classList.contains("layout-transparent")) {
                        _this.renderer.removeClass(_this.document.body, "layout-transparent");
                        _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                        _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                        _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                        _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                        _this.renderer.removeClass(_this.document.body, "bg-portage");
                        _this.renderer.removeClass(_this.document.body, "bg-tundora");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                        _this.renderer.addClass(_this.document.body, "layout-dark");
                    }
                    else {
                        _this.renderer.addClass(_this.document.body, "layout-dark");
                    }
                }
                else if (options.layout === "Transparent") {
                    _this.renderer.addClass(_this.document.body, "layout-transparent");
                    _this.renderer.addClass(_this.document.body, "layout-dark");
                    _this.renderer.addClass(_this.document.body, "bg-glass-1");
                }
                if (options.transparentColor) {
                    _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                    _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                    _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                    _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                    _this.renderer.removeClass(_this.document.body, "bg-portage");
                    _this.renderer.removeClass(_this.document.body, "bg-tundora");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                    _this.renderer.addClass(_this.document.body, options.transparentColor);
                }
            }
        });
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.templateConf;
        this.bgColor = this.config.layout.sidebar.backgroundColor;
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = "";
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        if (this.config.layout.variant === "Transparent") {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
                this.bgColor = "bg-glass-1";
            }
        }
        else {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
                this.bgColor = "black";
            }
        }
        setTimeout(function () {
            if (_this.config.layout.sidebar.size === "sidebar-lg") {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = true;
            }
            else if (_this.config.layout.sidebar.size === "sidebar-sm") {
                _this.isSidebar_sm = true;
                _this.isSidebar_lg = false;
            }
            else {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = false;
            }
            _this.iscollapsed = _this.config.layout.sidebar.collapsed;
        }, 0);
        //emit event to customizer
        this.options.bgColor = this.bgColor;
        this.options.bgImage = this.bgImage;
        this.layoutService.emitCustomizerChange(this.options);
        //customizer events
        this.elementRef.nativeElement
            .querySelector("#cz-compact-menu")
            .addEventListener("click", this.onClick.bind(this));
        this.elementRef.nativeElement
            .querySelector("#cz-sidebar-width")
            .addEventListener("click", this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, "layout-dark");
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, "layout-dark");
                _this.renderer.addClass(_this.document.body, "layout-transparent");
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, "bg-glass-1");
                }
                _this.bgColor = "black";
                _this.options.bgColor = "black";
                _this.bgImage = "";
                _this.options.bgImage = "";
                _this.bgImage = "";
                _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", "background-image: none");
            }
        }, 0);
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () {
            fireRefreshEventOnWindow();
        }, 300);
    };
    FullLayoutComponent.prototype.toggleHideSidebar = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.hideSidebar = $event;
        }, 0);
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] },
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidebarBgImage", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "sidebarBgImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("appSidebar", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "appSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("wrapper", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "wrapper", void 0);
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-full-layout",
            template: __webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
            app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  .customizer.open {\n    right: 0; }\n  .customizer .customizer-content {\n    position: relative;\n    height: 100%; }\n  .customizer a.customizer-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  .customizer a.customizer-close {\n    color: #000; }\n  .customizer .customizer-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  .customizer #rtl-icon {\n    position: absolute;\n    right: -1px;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    text-align: center;\n    cursor: pointer;\n    line-height: 50px;\n    margin-top: 50px; }\n  .customizer .customizer-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  .customizer .color-options a {\n    white-space: pre; }\n  .customizer .cz-bg-color {\n    margin: 0 auto; }\n  .customizer .cz-bg-color span:hover {\n      cursor: pointer; }\n  .customizer .cz-bg-color span.white {\n      color: #ddd !important; }\n  .customizer .cz-bg-color .selected,\n  .customizer .cz-tl-bg-color .selected {\n    box-shadow: 0 0 10px 3px #009da0;\n    border: 3px solid #fff; }\n  .customizer .cz-bg-image:hover {\n    cursor: pointer; }\n  .customizer .cz-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6;\n    height: 100px;\n    width: 50px; }\n  .customizer .cz-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n  .customizer .tl-color-options {\n    display: none; }\n  .customizer .cz-tl-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6;\n    height: 100px;\n    width: 70px; }\n  .customizer .cz-tl-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n  .customizer .cz-tl-bg-image img.rounded:hover {\n      cursor: pointer; }\n  .customizer .bg-hibiscus {\n    background-image: linear-gradient(to right bottom, #f05f57, #c83d5c, #99245a, #671351, #360940);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-purple-pizzazz {\n    background-image: linear-gradient(to right bottom, #662d86, #8b2a8a, #ae2389, #cf1d83, #ed1e79);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-blue-lagoon {\n    background-image: linear-gradient(to right bottom, #144e68, #006d83, #008d92, #00ad91, #57ca85);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-electric-violet {\n    background-image: linear-gradient(to left top, #4a00e0, #600de0, #7119e1, #8023e1, #8e2de2);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-portage {\n    background-image: linear-gradient(to left top, #97abff, #798ce5, #5b6ecb, #3b51b1, #123597);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .bg-tundora {\n    background-image: linear-gradient(to left top, #474747, #4a4a4a, #4c4d4d, #4f5050, #525352);\n    background-size: cover;\n    background-size: 100% 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: background .3s; }\n  .customizer .cz-bg-color .col span.rounded-circle:hover,\n  .customizer .cz-tl-bg-color .col span.rounded-circle:hover {\n    cursor: pointer; }\n  [dir=rtl] :host ::ng-deep .customizer {\n  left: -400px;\n  right: auto;\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 0px; }\n  [dir=rtl] :host ::ng-deep .customizer.open {\n    left: 0;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-close {\n    left: 10px;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvQzpcXFVzZXJzXFxqb3J0ZWdhMzNcXERvd25sb2Fkc1xcYXBleGFkbWluLTgwXFxhbmd1bGFyL3NyY1xcYXBwXFxzaGFyZWRcXGN1c3RvbWl6ZXJcXGN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsc0NBQXNDLEVBQUE7RUFieEM7SUFnQkksUUFBUSxFQUFBO0VBaEJaO0lBb0JJLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7RUFyQmhCO0lBeUJJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLDJDQUEyQyxFQUFBO0VBNUIvQztJQWdDSSxXQUFXLEVBQUE7RUFoQ2Y7SUFvQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUF6Q2Y7SUE2Q0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQXJEcEI7SUF5REksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQWhFbkI7SUFxRU0sZ0JBQWdCLEVBQUE7RUFyRXRCO0lBMEVJLGNBQWMsRUFBQTtFQTFFbEI7TUE4RVEsZUFBZSxFQUFBO0VBOUV2QjtNQWtGUSxzQkFBc0IsRUFBQTtFQWxGOUI7O0lBMEZNLGdDQUFnQztJQUNoQyxzQkFBc0IsRUFBQTtFQTNGNUI7SUFpR00sZUFBZSxFQUFBO0VBakdyQjtJQXFHTSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixXQUFXLEVBQUE7RUF4R2pCO01BMkdRLHlCQUF5QixFQUFBO0VBM0dqQztJQWlISSxhQUFhLEVBQUE7RUFqSGpCO0lBc0hNLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFdBQVcsRUFBQTtFQXpIakI7TUE0SFEseUJBQXlCLEVBQUE7RUE1SGpDO01BZ0lRLGVBQWUsRUFBQTtFQWhJdkI7SUFzSUksK0ZBN0l3RjtJQThJeEYsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwwQkFBMEIsRUFBQTtFQTVJOUI7SUFnSkksK0ZBdEo4RjtJQXVKOUYsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwwQkFBMEIsRUFBQTtFQXRKOUI7SUEwSkksK0ZBL0owRjtJQWdLMUYsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwwQkFBMEIsRUFBQTtFQWhLOUI7SUFvS0ksMkZBeEt5RjtJQXlLekYsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwwQkFBMEIsRUFBQTtFQTFLOUI7SUE4S0ksMkZBakxpRjtJQWtMakYsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwwQkFBMEIsRUFBQTtFQXBMOUI7SUF5TEksMkZBM0xpRjtJQTRMakYsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwwQkFBMEIsRUFBQTtFQS9MOUI7O0lBdU1VLGVBQWUsRUFBQTtFQ3ZFekI7RURrRkksWUFBWTtFQUNaLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsZ0JBQWdCLEVBQUE7RUNoRmxCO0lEbUZJLE9BQU87SUFDUCxXQUFXLEVBQUE7RUNqRmY7SURxRkksVUFBVTtJQUNWLFdBQVcsRUFBQTtFQ25GZjtJRHdGSSxZQUFZO0lBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvY3VzdG9taXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFZhcmlhYmxlcyBGb3IgVHJhbnNwYXJlbnQgTGF5b3V0XG4kYmctaGliaXNjdXMgOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjZjA1ZjU3LCAjYzgzZDVjLCAjOTkyNDVhLCAjNjcxMzUxLCAjMzYwOTQwKTtcbiRiZy1wdXJwbGUtcGl6emF6eiA6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM2NjJkODYsICM4YjJhOGEsICNhZTIzODksICNjZjFkODMsICNlZDFlNzkpO1xuJGJnLWJsdWUtbGFnb29uOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMTQ0ZTY4LCAjMDA2ZDgzLCAjMDA4ZDkyLCAjMDBhZDkxLCAjNTdjYTg1KTtcbiRiZy1lbGVjdHJpYy12aW9sZXQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjNGEwMGUwLCAjNjAwZGUwLCAjNzExOWUxLCAjODAyM2UxLCAjOGUyZGUyKTtcbiRiZy1wb3J0YWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzk3YWJmZiwgIzc5OGNlNSwgIzViNmVjYiwgIzNiNTFiMSwgIzEyMzU5Nyk7XG4kYmctdHVuZG9yYTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICM0NzQ3NDcsICM0YTRhNGEsICM0YzRkNGQsICM0ZjUwNTAsICM1MjUzNTIpO1xuXG4uY3VzdG9taXplciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcmlnaHQ6IC00MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgei1pbmRleDogMTA1MTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICYub3BlbiB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAuY3VzdG9taXplci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgYS5jdXN0b21pemVyLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgYS5jdXN0b21pemVyLWNsb3NlIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gIC5jdXN0b21pemVyLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuXG4gICNydGwtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cblxuICAuY3VzdG9taXplci10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1JTtcbiAgICB3aWR0aDogNTRweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGVmdDogLTU0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jb2xvci1vcHRpb25zIHtcbiAgICBhIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgfVxuICB9XG5cbiAgLmN6LWJnLWNvbG9yIHtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIHNwYW4ge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgJi53aGl0ZSB7XG4gICAgICAgIGNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmN6LWJnLWNvbG9yLFxuICAuY3otdGwtYmctY29sb3Ige1xuICAgIC5zZWxlY3RlZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggIzAwOWRhMDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgfVxuICB9XG5cbiAgLmN6LWJnLWltYWdlIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBpbWcucm91bmRlZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuXG4gICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNTg2QjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGwtY29sb3Itb3B0aW9ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jei10bC1iZy1pbWFnZSB7XG4gICAgaW1nLnJvdW5kZWQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB3aWR0aDogNzBweDtcblxuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjU4NkI7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJnLWhpYmlzY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctaGliaXNjdXM7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xuICB9XG5cbiAgLmJnLXB1cnBsZS1waXp6YXp6IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctcHVycGxlLXBpenpheno7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xuICB9XG5cbiAgLmJnLWJsdWUtbGFnb29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctYmx1ZS1sYWdvb247XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xuICB9XG5cbiAgLmJnLWVsZWN0cmljLXZpb2xldCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnLWVsZWN0cmljLXZpb2xldDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gIH1cblxuICAuYmctcG9ydGFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnLXBvcnRhZ2U7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xuICB9XG5cblxuICAuYmctdHVuZG9yYSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnLXR1bmRvcmE7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xuICB9XG5cbiAgLmN6LWJnLWNvbG9yLFxuICAuY3otdGwtYmctY29sb3Ige1xuICAgIC5jb2wge1xuICAgICAgc3Bhbi5yb3VuZGVkLWNpcmNsZSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCB7XG4gIC5jdXN0b21pemVyIHtcbiAgICBsZWZ0OiAtNDAwcHg7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItbGVmdDogMHB4O1xuXG4gICAgJi5vcGVuIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuY3VzdG9taXplci1jbG9zZSB7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgcmlnaHQ6IGF1dG87XG5cbiAgICB9XG5cbiAgICAuY3VzdG9taXplci10b2dnbGUge1xuICAgICAgcmlnaHQ6IC01NHB4O1xuICAgICAgbGVmdDogYXV0bztcbiAgICB9XG5cbiAgfVxufVxuIiwiLmN1c3RvbWl6ZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDEwNTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuY3VzdG9taXplci5vcGVuIHtcbiAgICByaWdodDogMDsgfVxuICAuY3VzdG9taXplciAuY3VzdG9taXplci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5jdXN0b21pemVyIGEuY3VzdG9taXplci10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgY29sb3I6IHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gIC5jdXN0b21pemVyIGEuY3VzdG9taXplci1jbG9zZSB7XG4gICAgY29sb3I6ICMwMDA7IH1cbiAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwOyB9XG4gIC5jdXN0b21pemVyICNydGwtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7IH1cbiAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxlZnQ6IC01NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmN1c3RvbWl6ZXIgLmNvbG9yLW9wdGlvbnMgYSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTsgfVxuICAuY3VzdG9taXplciAuY3otYmctY29sb3Ige1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW46aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW4ud2hpdGUge1xuICAgICAgY29sb3I6ICNkZGQgIWltcG9ydGFudDsgfVxuICAuY3VzdG9taXplciAuY3otYmctY29sb3IgLnNlbGVjdGVkLFxuICAuY3VzdG9taXplciAuY3otdGwtYmctY29sb3IgLnNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggIzAwOWRhMDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmOyB9XG4gIC5jdXN0b21pemVyIC5jei1iZy1pbWFnZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jdXN0b21pemVyIC5jei1iZy1pbWFnZSBpbWcucm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNTBweDsgfVxuICAgIC5jdXN0b21pemVyIC5jei1iZy1pbWFnZSBpbWcucm91bmRlZC5zZWxlY3RlZCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCOyB9XG4gIC5jdXN0b21pemVyIC50bC1jb2xvci1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jdXN0b21pemVyIC5jei10bC1iZy1pbWFnZSBpbWcucm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNzBweDsgfVxuICAgIC5jdXN0b21pemVyIC5jei10bC1iZy1pbWFnZSBpbWcucm91bmRlZC5zZWxlY3RlZCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCOyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LXRsLWJnLWltYWdlIGltZy5yb3VuZGVkOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY3VzdG9taXplciAuYmctaGliaXNjdXMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmMDVmNTcsICNjODNkNWMsICM5OTI0NWEsICM2NzEzNTEsICMzNjA5NDApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuYmctcHVycGxlLXBpenphenoge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM2NjJkODYsICM4YjJhOGEsICNhZTIzODksICNjZjFkODMsICNlZDFlNzkpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuYmctYmx1ZS1sYWdvb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMxNDRlNjgsICMwMDZkODMsICMwMDhkOTIsICMwMGFkOTEsICM1N2NhODUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuYmctZWxlY3RyaWMtdmlvbGV0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICM0YTAwZTAsICM2MDBkZTAsICM3MTE5ZTEsICM4MDIzZTEsICM4ZTJkZTIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczsgfVxuICAuY3VzdG9taXplciAuYmctcG9ydGFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjOTdhYmZmLCAjNzk4Y2U1LCAjNWI2ZWNiLCAjM2I1MWIxLCAjMTIzNTk3KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7IH1cbiAgLmN1c3RvbWl6ZXIgLmJnLXR1bmRvcmEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzQ3NDc0NywgIzRhNGE0YSwgIzRjNGQ0ZCwgIzRmNTA1MCwgIzUyNTM1Mik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzOyB9XG4gIC5jdXN0b21pemVyIC5jei1iZy1jb2xvciAuY29sIHNwYW4ucm91bmRlZC1jaXJjbGU6aG92ZXIsXG4gIC5jdXN0b21pemVyIC5jei10bC1iZy1jb2xvciAuY29sIHNwYW4ucm91bmRlZC1jaXJjbGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyIHtcbiAgbGVmdDogLTQwMHB4O1xuICByaWdodDogYXV0bztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDBweDsgfVxuICBbZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyLm9wZW4ge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciAuY3VzdG9taXplci1jbG9zZSB7XG4gICAgbGVmdDogMTBweDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyIC5jdXN0b21pemVyLXRvZ2dsZSB7XG4gICAgcmlnaHQ6IC01NHB4O1xuICAgIGxlZnQ6IGF1dG87IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");




var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(elRef, renderer, layoutService, configService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.configService = configService;
        this.options = {
            direction: "ltr",
            bgColor: "black",
            transparentColor: "",
            bgImage: "assets/img/sidebar-bg/01.jpg",
            bgImageDisplay: true,
            compactMenu: false,
            sidebarSize: "sidebar-md",
            layout: "Light"
        };
        this.size = "sidebar-md";
        this.isOpen = true;
        this.config = {};
        this.isBgImageDisplay = true;
        this.selectedBgColor = "black";
        this.selectedBgImage = "assets/img/sidebar-bg/01.jpg";
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = "";
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    _this.selectedBgColor = options.bgColor;
                    _this.selectedBgImage = options.bgImage;
                }
            }
        });
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.isOpen = !this.config.layout.customizer.hidden;
        if (this.config.layout.sidebar.size) {
            this.options.sidebarSize = this.config.layout.sidebar.size;
            this.size = this.config.layout.sidebar.size;
        }
    };
    CustomizerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant) {
                _this.options.layout = _this.config.layout.variant;
            }
            if (_this.config.layout.sidebar.collapsed != undefined) {
                _this.options.compactMenu = _this.config.layout.sidebar.collapsed;
            }
            if (_this.config.layout.sidebar.backgroundColor &&
                _this.config.layout.sidebar.backgroundColor != "") {
                _this.options.bgColor = _this.config.layout.sidebar.backgroundColor;
                _this.selectedBgColor = _this.config.layout.sidebar.backgroundColor;
            }
            else {
                _this.options.bgColor = "black";
                _this.selectedBgColor = "black";
            }
            if (_this.config.layout.sidebar.backgroundImage != undefined) {
                _this.options.bgImageDisplay = _this.config.layout.sidebar.backgroundImage;
                _this.isBgImageDisplay = _this.config.layout.sidebar.backgroundImage;
            }
            if (_this.config.layout.sidebar.backgroundImageURL) {
                _this.options.bgImage = _this.config.layout.sidebar.backgroundImageURL;
                _this.selectedBgImage = _this.config.layout.sidebar.backgroundImageURL;
            }
            if (_this.options.layout === "Transparent") {
                _this.options.bgColor = "black";
                _this.selectedBgColor = "black";
                _this.options.bgImageDisplay = false;
                _this.selectedTLBgColor = "";
                _this.selectedBgImage = "";
                _this.options.bgImage = "";
                _this.isBgImageDisplay = false;
                if (_this.config.layout.sidebar.backgroundColor) {
                    if (_this.config.layout.sidebar.backgroundColor === "bg-glass-1") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
                        _this.options.transparentColor = "bg-glass-1";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-2") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-2.jpg";
                        _this.options.transparentColor = "bg-glass-2";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-3") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-3.jpg";
                        _this.options.transparentColor = "bg-glass-3";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-4") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-4.jpg";
                        _this.options.transparentColor = "bg-glass-4";
                    }
                    else {
                        _this.options.transparentColor = _this.config.layout.sidebar.backgroundColor;
                        _this.selectedTLBgColor = _this.config.layout.sidebar.backgroundColor;
                    }
                }
                else {
                    _this.options.bgColor = "black";
                    _this.selectedBgColor = "black";
                    _this.options.bgImageDisplay = false;
                    _this.selectedBgColor = "";
                    _this.selectedTLBgColor = "";
                    _this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
                    _this.options.transparentColor = "bg-glass-1";
                }
            }
        }, 0);
    };
    CustomizerComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    CustomizerComponent.prototype.sendOptions = function () {
        this.directionEvent.emit(this.options);
        this.layoutService.emitChange(this.options);
    };
    CustomizerComponent.prototype.bgImageDisplay = function (e) {
        if (e.target.checked) {
            this.options.bgImageDisplay = true;
            this.isBgImageDisplay = true;
        }
        else {
            this.options.bgImageDisplay = false;
            this.isBgImageDisplay = false;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.toggleCompactMenu = function (e) {
        if (e.target.checked) {
            this.options.compactMenu = true;
        }
        else {
            this.options.compactMenu = false;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarWidth = function (value) {
        this.options.sidebarSize = value;
        this.size = value;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onLightLayout = function () {
        this.options.layout = "Light";
        this.options.bgColor = "man-of-steel";
        this.selectedBgColor = "man-of-steel";
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onDarkLayout = function () {
        this.options.layout = "Dark";
        this.options.bgColor = "black";
        this.selectedBgColor = "black";
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onTransparentLayout = function () {
        this.options.layout = "Transparent";
        this.options.bgColor = "black";
        this.selectedBgColor = "black";
        this.options.bgImageDisplay = false;
        this.selectedBgColor = "";
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
        this.options.transparentColor = "bg-glass-1";
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.toggleCustomizer = function () {
        if (this.isOpen) {
            this.renderer.removeClass(this.customizer.nativeElement, "open");
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.customizer.nativeElement, "open");
            this.isOpen = true;
        }
    };
    CustomizerComponent.prototype.closeCustomizer = function () {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
    };
    CustomizerComponent.prototype.changeSidebarBgColor = function (color) {
        this.selectedBgColor = color;
        this.selectedTLBgColor = "";
        this.options.bgColor = color;
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarBgImage = function (url) {
        this.selectedBgImage = url;
        this.selectedTLBgImage = "";
        //emit event to FUll Layout
        this.options.bgImage = url;
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarTLBgColor = function (color) {
        this.selectedBgColor = "";
        this.selectedTLBgColor = color;
        this.selectedTLBgImage = "";
        this.options.transparentColor = color;
        this.options.bgImageDisplay = false;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarTLBgImage = function (url, color) {
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = url;
        this.options.transparentColor = color;
        this.options.bgImageDisplay = false;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("customizer", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CustomizerComponent.prototype, "customizer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomizerComponent.prototype, "directionEvent", void 0);
    CustomizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-customizer",
            template: __webpack_require__(/*! raw-loader!./customizer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/customizer/customizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.navlinks = [];
        this.activeLinks = [];
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.activeRoute = this.router.url;
        this.innerWidth = window.innerWidth;
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
        var element = this.el.nativeElement;
        this.$wrapper = this.renderer.parentNode(this.el.nativeElement); // document.getElementsByClassName("wrapper")[0];
        var $sidebar_img_container = this.el.nativeElement.querySelector('.sidebar-background');
        var $sidebar_img = element.getAttribute("data-image");
        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            this.renderer.setAttribute($sidebar_img_container, 'style', 'background-image: url("' + $sidebar_img + '")');
        }
        if (!this.$wrapper.classList.contains("nav-collapsed")) {
            this.expandActive();
        }
        if (this.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        this.cd.detectChanges();
    };
    SidebarDirective.prototype.onMouseOver = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.navCollapsedOpen === true; })
                .forEach(function (link) {
                link.open = true;
                link.navCollapsedOpen = false;
            });
        }
    };
    SidebarDirective.prototype.onMouseOut = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.addClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.open === true; })
                .forEach(function (link) {
                link.open = false;
                link.navCollapsedOpen = true;
            });
        }
    };
    SidebarDirective.prototype.onClick = function (e) {
        if (e.target.parentElement.classList.contains("logo-text") ||
            e.target.parentElement.classList.contains("logo-img")) {
            this.activeLinks = [];
            this.activeRoute = this.router.url;
            this.expandActive();
            this.hideSidebar();
        }
        else if (e.target.parentElement.classList.contains("nav-close") ||
            e.target.classList.contains("nav-close")) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (event.target.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        if (event.target.innerWidth > 992) {
            var toggleStatus = this.el.nativeElement;
            this.el.nativeElement.querySelector('.toggle-icon')
                .getAttribute("data-toggle");
            if (toggleStatus === "collapsed" &&
                this.$wrapper.classList.contains("nav-collapsed") &&
                this.$wrapper.classList.contains("menu-collapsed")) {
                this.$wrapper.classList.add("nav-collapsed");
                this.$wrapper.classList.add("menu-collapsed");
            }
            this.toggleHideSidebar.emit(false);
        }
    };
    // check outside click and close sidebar for smaller screen <992
    SidebarDirective.prototype.onOutsideClick = function (event) {
        if (this.innerWidth < 992) {
            var clickedComponent = event.target;
            var inside = false;
            do {
                if (clickedComponent === this.el.nativeElement) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!this.el.nativeElement.classList.contains("hide-sidebar") &&
                !inside &&
                !event.target.classList.contains("navbar-toggle")) {
                this.toggleHideSidebar.emit(true);
            }
        }
    };
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    SidebarDirective.prototype.getLinks = function () {
        return this.navlinks;
    };
    SidebarDirective.prototype.hideSidebar = function () {
        if (this.innerWidth < 992) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.expandActive = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) { return _.routePath === _this.activeRoute; })
            .forEach(function (link) {
            link.isShown = true;
            if (link.level.toString().trim() === "3") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "2" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    _this.navlinks
                        .filter(function (_) {
                        return _.level.toString().trim() === "1" &&
                            _.title === parentLink.parent;
                    })
                        .forEach(function (superParentLink) {
                        superParentLink.open = true;
                        _this.activeLinks.push(superParentLink.title);
                        superParentLink.toggleEmit.emit(_this.activeLinks);
                    });
                });
            }
            else if (link.level.toString().trim() === "2") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "1" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    parentLink.toggleEmit.emit(_this.activeLinks);
                });
            }
        });
    };
    SidebarDirective.prototype.toggleActiveList = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === "3" && _.routePath !== _this.activeRoute;
        })
            .forEach(function (link) {
            link.active = false;
        });
    };
    SidebarDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarDirective.prototype, "toggleHideSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOut", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onOutsideClick", null);
    SidebarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebar]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SidebarDirective);
    return SidebarDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebaranchortoggle.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/sidebaranchortoggle.directive.ts ***!
  \********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");



var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    SidebarAnchorToggleDirective.ctorParameters = function () { return [
        { type: _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarAnchorToggleDirective.prototype, "onClick", null);
    SidebarAnchorToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appSidebarAnchorToggle]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"]])
    ], SidebarAnchorToggleDirective);
    return SidebarAnchorToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlink.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlink.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");




var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sidebarList, sidebar, el) {
        this.el = el;
        this.toggleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarList = sidebarList;
        this.sidebar = sidebar;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isHidden", {
        get: function () {
            return this._isHidden;
        },
        set: function (value) {
            this._isHidden = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sidebar.addLink(this);
    };
    SidebarLinkDirective.prototype.toggle = function () {
        this.sidebarList.activeLinks = [];
        this.sidebarList.setList(this.sidebar.getLinks());
        var classList = this.el.nativeElement.classList;
        if (this.level.toString().trim() === "3") {
            this.active = true;
            this.sidebarList.toggleActiveList(this);
            this.sidebar.hideSidebar();
        }
        if (this.level.toString().trim() === "1" && !classList.contains("has-sub")) {
            this.sidebarList.collapseOtherLinks(this);
        }
        if (classList.contains("has-sub") && classList.contains("open")) {
            this.sidebarList.collapse(this);
        }
        else {
            if (classList.contains("has-sub")) {
                this.sidebarList.expand(this);
            }
        }
    };
    SidebarLinkDirective.ctorParameters = function () { return [
        { type: _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],] }] },
        { type: _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SidebarLinkDirective.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "routePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarLinkDirective.prototype, "toggleEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.nav-collapsed-open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "navCollapsedOpen", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "active", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-shown"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isShown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-hidden"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isHidden", null);
    SidebarLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarlink]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],
            _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SidebarLinkDirective);
    return SidebarLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlist.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlist.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarListDirective", function() { return SidebarListDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarListDirective = /** @class */ (function () {
    function SidebarListDirective() {
        this.navlinks = [];
        this.activeLinks = [];
    }
    SidebarListDirective.prototype.setList = function (list) {
        this.navlinks = list;
    };
    SidebarListDirective.prototype.collapse = function (link) {
        link.open = false;
        this.setIsHidden(link);
        if (link.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
        }
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.expand = function (link) {
        link.open = true;
        this.activeLinks.push(link.title);
        this.collapseOtherLinks(link);
        this.setIsShown(link);
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.toggleActiveList = function (openLink) {
        this.navlinks
            .filter(function (_) { return _.level.toString().trim() === "3"; })
            .forEach(function (link) {
            if (link !== openLink) {
                link.active = false;
            }
        });
    };
    SidebarListDirective.prototype.collapseOtherLinks = function (openLink) {
        var _this = this;
        if (openLink.level.toString().trim() === "1") {
            this.navlinks
                .filter(function (_) {
                return (_.level.toString().trim() === openLink.level.toString().trim() ||
                    _.level.toString().trim() === "2") &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
        else if (openLink.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
            this.navlinks
                .filter(function (_) {
                return _.level.toString().trim() === openLink.level.toString().trim() &&
                    _.parent === openLink.parent &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
    };
    SidebarListDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarListDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarListDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarList]" })
    ], SidebarListDirective);
    return SidebarListDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebartoggle.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/sidebartoggle.directive.ts ***!
  \**************************************************************/
/*! exports provided: SidebarToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dataToggle = "expanded";
        this._toggleRight = true;
        this._toggleLeft = false;
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    Object.defineProperty(SidebarToggleDirective.prototype, "dataToggle", {
        get: function () {
            return this._dataToggle;
        },
        set: function (value) {
            this._dataToggle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleRight", {
        get: function () {
            return this._toggleRight;
        },
        set: function (value) {
            this._toggleRight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleLeft", {
        get: function () {
            return this._toggleLeft;
        },
        set: function (value) {
            this._toggleLeft = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarToggleDirective.prototype.ngAfterViewInit = function () {
        this.$wrapper = document.getElementsByClassName("wrapper")[0];
        this.compact_menu_checkbox = this.$wrapper.querySelector('.cz-compact-menu');
    };
    SidebarToggleDirective.prototype.onClick = function (e) {
        var _this = this;
        if (this.dataToggle === "expanded") {
            this.dataToggle = "collapsed";
            this.renderer.addClass(this.$wrapper, 'nav-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = true;
            }
        }
        else {
            this.dataToggle = "expanded";
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = false;
            }
        }
        this.toggleLeft = !this.toggleLeft;
        this.toggleRight = !this.toggleRight;
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.data-toggle"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SidebarToggleDirective.prototype, "dataToggle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-right"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleRight", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-left"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleLeft", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "onClick", null);
    SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarToggle]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, layoutService, configService) {
        var _this = this;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.currentLang = "en";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
        this.layoutSub = layoutService.changeEmitted$.subscribe(function (direction) {
            var dir = direction.direction;
            if (dir === "rtl") {
                _this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                _this.placement = "bottom-right";
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.config.layout.dir) {
            setTimeout(function () {
                var dir = _this.config.layout.dir;
                if (dir === "rtl") {
                    _this.placement = "bottom-left";
                }
                else if (dir === "ltr") {
                    _this.placement = "bottom-right";
                }
            }, 0);
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    };
    NavbarComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.emitNotiSidebarChange(true);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        var appSidebar = document.getElementsByClassName("app-sidebar")[0];
        if (appSidebar.classList.contains("hide-sidebar")) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "toggleHideSidebar", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"], _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #settings .switch {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar {\n  left: -400px;\n  right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar.open {\n    left: 0;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-close {\n    left: 10px;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL0M6XFxVc2Vyc1xcam9ydGVnYTMzXFxEb3dubG9hZHNcXGFwZXhhZG1pbi04MFxcYW5ndWxhci9zcmNcXGFwcFxcc2hhcmVkXFxub3RpZmljYXRpb24tc2lkZWJhclxcbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDVCxhQUFhO0VBQ2hCLFVBQVU7RUFDUCxzQkFBc0I7RUFDekIsYUFBYTtFQUNWLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsc0NBQXNDLEVBQUE7RUFiMUM7SUFnQkUsUUFBUSxFQUFBO0VBaEJWO0lBc0JFLGtCQUFrQjtJQUNmLFlBQVk7SUFDWixhQUFhLEVBQUE7RUF4QmxCO01BOEJNLFlBQVcsRUFBQTtFQTlCakI7TUFpQ00sWUFBVyxFQUFBO0VBakNqQjtNQXlDSSxZQUFZLEVBQUE7RUF6Q2hCO0lBZ0RFLGdCQUFnQjtJQUNoQiw2QkFBNEI7SUFDNUIsY0FBYztJQUNYLDJDQUEyQyxFQUFBO0VBbkRoRDtJQXNESyxXQUFXLEVBQUE7RUF0RGhCO0lBeURFLGtCQUFrQjtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUE5RGhCO0lBaUVFLGtCQUFrQjtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQ3RCcEI7RURnQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTtFQzlCWDtJRGdDQyxPQUFPO0lBQ1AsV0FBVyxFQUFBO0VDOUJaO0lEaUNDLFVBQVU7SUFDVixXQUFXLEVBQUE7RUMvQlo7SURrQ0MsWUFBWTtJQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZmljYXRpb24tc2lkZWJhcntcblx0d2lkdGg6IDQwMHB4O1xuICAgIHJpZ2h0OiAtNDAwcHg7XG5cdHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcblx0ei1pbmRleDogMTA1MTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHQmLm9wZW57XG5cdFx0cmlnaHQ6IDA7XG5cdH1cblxuXHRcblxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXHRoZWlnaHQ6IDEwMCU7XG4gICAgXHRwYWRkaW5nOiAxMHB4O1xuXG4gICAgXHQjdGltZWxpbmV7XG4gICAgXHRcdCYudGltZWxpbmUtbGVmdHtcbiAgICBcdFx0XHQudGltZWxpbmUtaXRlbXtcbiAgICBcdFx0XHRcdCY6YmVmb3Jle1xuXHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0XHQmOmFmdGVye1xuXHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdCNzZXR0aW5nc3tcblx0XHRcdC5zd2l0Y2h7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGEubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xle1xuXHRcdGJhY2tncm91bmQ6ICNGRkY7XG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcblx0XHRkaXNwbGF5OiBibG9jaztcbiAgICBcdGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdH1cblx0YS5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XG4gICAgXHRjb2xvcjogIzAwMDtcblx0fVxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgcmlnaHQ6IDEwcHg7XG5cdCAgICB0b3A6IDEwcHg7XG5cdCAgICBwYWRkaW5nOiA3cHg7XG5cdCAgICB3aWR0aDogYXV0bztcblx0ICAgIHotaW5kZXg6IDEwO1xuXHR9XG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgdG9wOiAzNSU7XG5cdCAgICB3aWR0aDogNTRweDtcblx0ICAgIGhlaWdodDogNTBweDtcblx0ICAgIGxlZnQ6IC01NHB4O1xuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG5cdCAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblx0XG5cblx0XG5cbn1cblxuW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXB7XG5cdCNub3RpZmljYXRpb24tc2lkZWJhcntcdFxuXHRcdGxlZnQ6IC00MDBweDtcdFxuXHRcdHJpZ2h0OiBhdXRvO1x0ICAgXG5cdFx0Ji5vcGVue1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiBhdXRvO1xuXHRcdH1cblx0XHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XG5cdFx0XHRsZWZ0OiAxMHB4O1xuXHRcdFx0cmlnaHQ6IGF1dG87XG5cdFx0fVxuXHRcdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHRcblx0XHRcdHJpZ2h0OiAtNTRweDtcblx0XHRcdGxlZnQ6IGF1dG87XG5cdFx0fVx0XG5cdH1cbn0iLCIjbm90aWZpY2F0aW9uLXNpZGViYXIge1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDEwNTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIub3BlbiB7XG4gICAgcmlnaHQ6IDA7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3RpbWVsaW5lLnRpbWVsaW5lLWxlZnQgLnRpbWVsaW5lLWl0ZW06YmVmb3JlIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCAjdGltZWxpbmUudGltZWxpbmUtbGVmdCAudGltZWxpbmUtaXRlbTphZnRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3NldHRpbmdzIC5zd2l0Y2gge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciBhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIGEubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICAgIGNvbG9yOiAjMDAwOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxlZnQ6IC01NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIHtcbiAgbGVmdDogLTQwMHB4O1xuICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIub3BlbiB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHJpZ2h0OiBhdXRvOyB9XG4gIFtkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgICByaWdodDogLTU0cHg7XG4gICAgbGVmdDogYXV0bzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");



var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent(elRef, renderer, layoutService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.notiSidebarChangeEmitted$.subscribe(function (value) {
            if (_this.isOpen) {
                _this.renderer.removeClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = false;
            }
            else {
                _this.renderer.addClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = true;
            }
        });
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
    };
    NotificationSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NotificationSidebarComponent.prototype.onClose = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'open');
        this.isOpen = false;
    };
    NotificationSidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotificationSidebarComponent.prototype, "sidebar", void 0);
    NotificationSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! raw-loader!./notification-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() | pages-content-pages-content-pages-module */[__webpack_require__.e("default~charts-charts-module~pages-content-pages-content-pages-module"), __webpack_require__.e("pages-content-pages-content-pages-module")]).then(__webpack_require__.bind(null, /*! ../../pages/content-pages/content-pages.module */ "./src/app/pages/content-pages/content-pages.module.ts")).then(function (m) { return m.ContentPagesModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ../../calendar/calendar.module */ "./src/app/calendar/calendar.module.ts")).then(function (m) { return m.CalendarsModule; }); }
    },
    {
        path: 'charts',
        loadChildren: function () { return Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~cards-cards-module~charts-charts-module"), __webpack_require__.e("default~charts-charts-module~pages-content-pages-content-pages-module"), __webpack_require__.e("default~charts-charts-module~tables-tables-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ../../charts/charts.module */ "./src/app/charts/charts.module.ts")).then(function (m) { return m.ChartsNg2Module; }); }
    },
    {
        path: 'forms',
        loadChildren: function () { return __webpack_require__.e(/*! import() | forms-forms-module */ "forms-forms-module").then(__webpack_require__.bind(null, /*! ../../forms/forms.module */ "./src/app/forms/forms.module.ts")).then(function (m) { return m.FormModule; }); }
    },
    {
        path: 'maps',
        loadChildren: function () { return __webpack_require__.e(/*! import() | maps-maps-module */ "maps-maps-module").then(__webpack_require__.bind(null, /*! ../../maps/maps.module */ "./src/app/maps/maps.module.ts")).then(function (m) { return m.MapsModule; }); }
    },
    {
        path: 'tables',
        loadChildren: function () { return Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~charts-charts-module~tables-tables-module"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ../../tables/tables.module */ "./src/app/tables/tables.module.ts")).then(function (m) { return m.TablesModule; }); }
    },
    {
        path: 'datatables',
        loadChildren: function () { return __webpack_require__.e(/*! import() | data-tables-data-tables-module */ "data-tables-data-tables-module").then(__webpack_require__.bind(null, /*! ../../data-tables/data-tables.module */ "./src/app/data-tables/data-tables.module.ts")).then(function (m) { return m.DataTablesModule; }); }
    },
    {
        path: 'uikit',
        loadChildren: function () { return Promise.all(/*! import() | ui-kit-ui-kit-module */[__webpack_require__.e("default~components-ui-components-module~ui-kit-ui-kit-module"), __webpack_require__.e("ui-kit-ui-kit-module")]).then(__webpack_require__.bind(null, /*! ../../ui-kit/ui-kit.module */ "./src/app/ui-kit/ui-kit.module.ts")).then(function (m) { return m.UIKitModule; }); }
    },
    {
        path: 'components',
        loadChildren: function () { return Promise.all(/*! import() | components-ui-components-module */[__webpack_require__.e("default~components-ui-components-module~inbox-inbox-module"), __webpack_require__.e("default~components-ui-components-module~ui-kit-ui-kit-module"), __webpack_require__.e("components-ui-components-module")]).then(__webpack_require__.bind(null, /*! ../../components/ui-components.module */ "./src/app/components/ui-components.module.ts")).then(function (m) { return m.UIComponentsModule; }); }
    },
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() | pages-full-pages-full-pages-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("pages-full-pages-full-pages-module")]).then(__webpack_require__.bind(null, /*! ../../pages/full-pages/full-pages.module */ "./src/app/pages/full-pages/full-pages.module.ts")).then(function (m) { return m.FullPagesModule; }); }
    },
    {
        path: 'cards',
        loadChildren: function () { return Promise.all(/*! import() | cards-cards-module */[__webpack_require__.e("default~cards-cards-module~charts-charts-module"), __webpack_require__.e("cards-cards-module")]).then(__webpack_require__.bind(null, /*! ../../cards/cards.module */ "./src/app/cards/cards.module.ts")).then(function (m) { return m.CardsModule; }); }
    },
    {
        path: 'colorpalettes',
        loadChildren: function () { return __webpack_require__.e(/*! import() | color-palette-color-palette-module */ "color-palette-color-palette-module").then(__webpack_require__.bind(null, /*! ../../color-palette/color-palette.module */ "./src/app/color-palette/color-palette.module.ts")).then(function (m) { return m.ColorPaletteModule; }); }
    },
    {
        path: 'chat',
        loadChildren: function () { return Promise.all(/*! import() | chat-chat-module */[__webpack_require__.e("default~chat-chat-module~chat-ngrx-chat-ngrx-module~player-player-module"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null, /*! ../../chat/chat.module */ "./src/app/chat/chat.module.ts")).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'chat-ngrx',
        loadChildren: function () { return Promise.all(/*! import() | chat-ngrx-chat-ngrx-module */[__webpack_require__.e("default~chat-chat-module~chat-ngrx-chat-ngrx-module~player-player-module"), __webpack_require__.e("chat-ngrx-chat-ngrx-module")]).then(__webpack_require__.bind(null, /*! ../../chat-ngrx/chat-ngrx.module */ "./src/app/chat-ngrx/chat-ngrx.module.ts")).then(function (m) { return m.ChatNGRXModule; }); }
    },
    {
        path: 'inbox',
        loadChildren: function () { return Promise.all(/*! import() | inbox-inbox-module */[__webpack_require__.e("default~components-ui-components-module~inbox-inbox-module"), __webpack_require__.e("inbox-inbox-module")]).then(__webpack_require__.bind(null, /*! ../../inbox/inbox.module */ "./src/app/inbox/inbox.module.ts")).then(function (m) { return m.InboxModule; }); }
    },
    {
        path: 'taskboard',
        loadChildren: function () { return __webpack_require__.e(/*! import() | taskboard-taskboard-module */ "taskboard-taskboard-module").then(__webpack_require__.bind(null, /*! ../../taskboard/taskboard.module */ "./src/app/taskboard/taskboard.module.ts")).then(function (m) { return m.TaskboardModule; }); }
    },
    {
        path: 'taskboard-ngrx',
        loadChildren: function () { return __webpack_require__.e(/*! import() | taskboard-ngrx-taskboard-ngrx-module */ "taskboard-ngrx-taskboard-ngrx-module").then(__webpack_require__.bind(null, /*! ../../taskboard-ngrx/taskboard-ngrx.module */ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts")).then(function (m) { return m.TaskboardNGRXModule; }); }
    },
    {
        path: 'player',
        loadChildren: function () { return Promise.all(/*! import() | player-player-module */[__webpack_require__.e("default~chat-chat-module~chat-ngrx-chat-ngrx-module~player-player-module"), __webpack_require__.e("player-player-module")]).then(__webpack_require__.bind(null, /*! ../../player/player.module */ "./src/app/player/player.module.ts")).then(function (m) { return m.PlayerModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.setConfigValue();
    }
    ConfigService.prototype.setConfigValue = function () {
        this.templateConf = {
            layout: {
                variant: "Light",
                dir: "ltr",
                customizer: {
                    hidden: false //options: true, false
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-md",
                    backgroundColor: "man-of-steel",
                    /* If you want transparent layout add any of the following mentioned classes to backgroundColor of sidebar option :
                      bg-glass-1, bg-glass-2, bg-glass-3, bg-glass-4, bg-hibiscus, bg-purple-pizzaz, bg-blue-lagoon, bg-electric-viloet, bg-protage, bg-tundora
                    */
                    backgroundImage: true,
                    backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
                }
            }
        };
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        //Customizer
        this.emitCustomizerSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerChangeEmitted$ = this.emitCustomizerSource.asObservable();
        //customizer - compact menu
        this.emitCustomizerCMSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerCMChangeEmitted$ = this.emitCustomizerCMSource.asObservable();
        //customizer - compact menu
        this.emitNotiSidebarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notiSidebarChangeEmitted$ = this.emitNotiSidebarSource.asObservable();
    }
    LayoutService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    LayoutService.prototype.emitCustomizerChange = function (change) {
        this.emitCustomizerSource.next(change);
    };
    LayoutService.prototype.emitCustomizerCMChange = function (change) {
        this.emitCustomizerCMSource.next(change);
    };
    LayoutService.prototype.emitNotiSidebarChange = function (change) {
        this.emitNotiSidebarSource.next(change);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");
/* harmony import */ var _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebaranchortoggle.directive */ "./src/app/shared/directives/sidebaranchortoggle.directive.ts");
/* harmony import */ var _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/sidebartoggle.directive */ "./src/app/shared/directives/sidebartoggle.directive.ts");







//COMPONENTS





//DIRECTIVES






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarDirective"],
                _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_14__["SidebarLinkDirective"],
                _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarListDirective"],
                _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarAnchorToggleDirective"],
                _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_17__["SidebarToggleDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
//Sidebar menu Routes and data
var ROUTES = [
    {
        path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/dashboard/dashboard1', title: 'Dashboard1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/colorpalettes', title: 'Color Palette', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/inbox', title: 'Inbox', icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/chat', title: 'Chat', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/taskboard', title: 'Task Board', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/player', title: 'Player', icon: 'ft-music', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/uikit/grids', title: 'Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/typography', title: 'Typography', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/helperclasses', title: 'Helper Classes', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/textutilities', title: 'Text Utilities', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Icons', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/uikit/feather', title: 'Feather Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
        ]
    },
    {
        path: '', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Bootstrap', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/lists', title: 'List', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/alerts', title: 'Alerts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/inputgroups', title: 'Input Groups', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/media', title: 'Media Objects', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/models', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/accordion', title: 'Accordion', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/carousel', title: 'Carousel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/datepicker', title: 'Datepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tables', title: 'Tables', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/timepicker', title: 'Timepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/typeahead', title: 'Typeahead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Extra', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/sweetalerts', title: 'Sweet Alert', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/toastr', title: 'Toastr', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/select', title: 'Select', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/nouislider', title: 'NoUI Slider', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/upload', title: 'Upload', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/editor', title: 'Editor', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dragndrop', title: 'Drag and Drop', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tour', title: 'Tour', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/cropper', title: 'Image Cropper', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tags', title: 'Input Tags', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/switch', title: 'Switch', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
        ]
    },
    {
        path: '', title: 'Forms', icon: 'ft-edit', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Elements', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/inputs', title: 'Inputs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-groups', title: 'Input Group', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-grid', title: 'Input Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Layouts', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/basic', title: 'Basic Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/horizontal', title: 'Horizontal Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/hidden-labels', title: 'Hidden Labels', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/form-actions', title: 'Form Actions', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/bordered', title: 'Bordered Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/striped-rows', title: 'Striped Rows', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/forms/validation', title: 'Validation', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/forms/ngx', title: 'NGX Wizard', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/forms/archwizard', title: 'ArchWizard', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Tables', icon: 'ft-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/tables/regular', title: 'Regular', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tables/extended', title: 'Extended', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tables/smart', title: 'Smart Tables', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Data Tables', icon: 'ft-layout', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/datatables/basic', title: 'Basic', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/editing', title: 'Editing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/filter', title: 'Filter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/fullscreen', title: 'Fullscreen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/paging', title: 'Paging', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/pinning', title: 'Pinning', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/selection', title: 'Selection', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/sorting', title: 'Sorting', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Cards', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/cards/basic', title: 'Basic Cards', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/cards/advanced', title: 'Advanced Cards', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Maps', icon: 'ft-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/maps/google', title: 'Google Map', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/maps/fullscreen', title: 'Full Screen Map', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Charts', icon: 'ft-bar-chart-2', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'ChartJs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/chartist', title: 'Chartist', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/ngx', title: 'NGX Chart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/calendar', title: 'Calendar', icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/pages/forgotpassword', title: 'Forgot Password', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/verticaltimeline', title: 'Vertical Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/login', title: 'Login', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/register', title: 'Register', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/profile', title: 'User Profile', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/lockscreen', title: 'Lock Screen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/invoice', title: 'Invoice', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/error', title: 'Error', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/comingsoon', title: 'Coming Soon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/maintenance', title: 'Maintenance', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/gallery', title: 'Gallery', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/search', title: 'Search', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/faq', title: 'FAQ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/kb', title: 'Knowledge Base', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-book', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/custom-animations */ "./src/app/shared/animations/custom-animations.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");








var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(elementRef, renderer, router, route, translate, configService, layoutService) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.configService = configService;
        this.layoutService = layoutService;
        this.activeTitles = [];
        this.nav_collapsed_open = false;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        if (this.depth === undefined) {
            this.depth = 0;
            this.expanded = true;
        }
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    if (options.bgColor === 'white') {
                        _this.logoUrl = 'assets/img/logo-dark.png';
                    }
                    else {
                        _this.logoUrl = 'assets/img/logo.png';
                    }
                }
                if (options.compactMenu === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (options.compactMenu === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.sidebar.collapsed != undefined) {
                if (_this.config.layout.sidebar.collapsed === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (_this.config.layout.sidebar.collapsed === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        }, 0);
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    SidebarComponent.prototype.toggleSlideInOut = function () {
        this.expanded = !this.expanded;
    };
    SidebarComponent.prototype.handleToggle = function (titles) {
        this.activeTitles = titles;
    };
    // NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf("forms/ngx") !== -1)
            this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleIcon', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "toggleIcon", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
            animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]])
    ], SidebarComponent);
    return SidebarComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jortega33\Downloads\apexadmin-80\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map