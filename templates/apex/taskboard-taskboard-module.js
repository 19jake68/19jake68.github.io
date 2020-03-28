(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-taskboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taskboard/crud-modal/crud-modal.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taskboard/crud-modal/crud-modal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ModalTitle}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    x\n  </button>\n</div>\n<form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body taskboard-modal\">\n    <div class=\"container\">\n      <fieldset class=\"form-group position-relative has-icon-left\">\n        <div class=\"form-control-position\">\n          <i class=\"icon-emoticon-smile\"></i>\n        </div>\n        <input type=\"text\" [formControl]=\"myForm.controls['title']\" formControlName=\"title\" class=\"form-control\" id=\"todoTitle\"\n          placeholder=\"Title\" (keydown.enter)=\"$event.preventDefault()\" required #todoTitle>\n        <div class=\"form-control-position control-position-right\">\n          <i class=\"ft-image\"></i>\n        </div>\n      </fieldset>\n      <fieldset class=\"form-group position-relative has-icon-left\">\n        <div class=\"form-control-position\">\n          <i class=\"icon-emoticon-smile\"></i>\n        </div>\n        <input type=\"text\" [formControl]=\"myForm.controls['message']\" formControlName=\"message\" class=\"form-control\" id=\"todoMessage\"\n          placeholder=\"Message\" (keydown.enter)=\"$event.preventDefault()\" required #todoMessage>\n        <div class=\"form-control-position control-position-right\">\n          <i class=\"ft-image\"></i>\n        </div>\n      </fieldset>\n    </div>\n  </div>\n  <div class=\"modal-footer taskboard-modal-footer\">\n    <button class=\"btn btn-success btn-save\" [disabled]=\"!myForm.valid\">\n      Save\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/taskboard/taskboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taskboard/taskboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\n  <div class=\"col-6\">\n    <div class=\"content-header text-left\">Task Board</div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n  <div class=\"col-6 text-right\">\n    <button type=\"button\" class=\"btn btn-raised btn-danger\" (click)=\"addTask()\">\n      <i class=\"fa fa-paper-plane-o d-lg-none d-block\"></i>\n      <span class=\"d-lg-block d-none\">Create</span>\n    </button>\n  </div>\n</div>\n<!-- Taskboard Starts -->\n<section id=\"taskboard\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-list mr-1 float-left\"></i> To Dos</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' id=\"New\" [dragulaModel]='todo'>\n        <div *ngFor='let todo of todo' [attr.task-id]=\"todo.taskId\">\n          <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit cursor-pointer mr-1 info\" (click)=\"editTask(todo.taskId);\"></i>\n                  <i class=\"ft-trash-2 cursor-pointer danger\" (click)=\"deleteTask(todo.taskId);\"></i>\n                </div>\n              </div>\n              <p>{{todo.taskMessage}}</p>\n              <img [src]=\"[todo.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"primary\">{{todo.createdOn}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-trending-up mr-1  float-left\"></i> In Progress</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' id=\"In-Process\" [dragulaModel]='inProcess'>\n        <div *ngFor='let inProcess of inProcess' [attr.task-id]=\"inProcess.taskId\">\n          <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit cursor-pointer mr-1 info\" (click)=\"editTask(inProcess.taskId);\"></i>\n                  <i class=\"ft-trash-2 cursor-pointer danger\" (click)=\"deleteTask(inProcess.taskId);\"></i>\n                </div>\n              </div>\n              <p>{{inProcess.taskMessage}}</p>\n              <img [src]=\"[inProcess.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"info\">{{inProcess.createdOn}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-thumbs-up mr-1  float-left\"></i>Completed</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' id=\"Completed\" [dragulaModel]='completed'>\n        <div *ngFor='let completed of completed' [attr.task-id]=\"completed.taskId\">\n          <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit cursor-pointer mr-1 info\" (click)=\"editTask(completed.taskId);\"></i>\n                  <i class=\"ft-trash-2 cursor-pointer danger\" (click)=\"deleteTask(completed.taskId);\"></i>\n                </div>\n              </div>\n              <p>{{completed.taskMessage}}</p>\n              <img [src]=\"[completed.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"success\">{{completed.createdOn}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-alert-octagon mr-1  float-left\"></i>On Hold</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' id=\"Pending\" [dragulaModel]='backLog'>\n        <div *ngFor='let backLog of backLog' [attr.task-id]=\"backLog.taskId\">\n          <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit cursor-pointer mr-1 info\" (click)=\"editTask(backLog.taskId);\"></i>\n                  <i class=\"ft-trash-2 cursor-pointer danger\" (click)=\"deleteTask(backLog.taskId);\"></i>\n                </div>\n              </div>\n              <p>{{backLog.taskMessage}}</p>\n              <img [src]=\"[backLog.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"warning\">{{backLog.createdOn}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</section>\n<!-- Taskboard Ends -->\n"

/***/ }),

/***/ "./src/app/taskboard/crud-modal/crud-modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/taskboard/crud-modal/crud-modal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tib2FyZC9jcnVkLW1vZGFsL2NydWQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/taskboard/crud-modal/crud-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/taskboard/crud-modal/crud-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: CrudModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudModalComponent", function() { return CrudModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var CrudModalComponent = /** @class */ (function () {
    function CrudModalComponent(activeModal, formBuilder) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.ModalTitle = '';
    }
    CrudModalComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data);
        if (this.id === 0) {
            this.ModalTitle = "Add Task";
        }
        else {
            this.ModalTitle = "Edit Task";
        }
    };
    CrudModalComponent.prototype.buildItemForm = function (item) {
        this.myForm = this.formBuilder.group({
            title: [item.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: [item.message || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CrudModalComponent.prototype.submitForm = function () {
        this.activeModal.close(this.myForm.value);
    };
    CrudModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CrudModalComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CrudModalComponent.prototype, "data", void 0);
    CrudModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud-modal',
            template: __webpack_require__(/*! raw-loader!./crud-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/taskboard/crud-modal/crud-modal.component.html"),
            styles: [__webpack_require__(/*! ./crud-modal.component.scss */ "./src/app/taskboard/crud-modal/crud-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CrudModalComponent);
    return CrudModalComponent;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/taskboard/taskboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TaskboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardRoutingModule", function() { return TaskboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");




var routes = [
    {
        path: '',
        component: _taskboard_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardRoutingModule = /** @class */ (function () {
    function TaskboardRoutingModule() {
    }
    TaskboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TaskboardRoutingModule);
    return TaskboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table; }\n\n/* .dragdrop-container {\n    display: table-cell;\n    background-color: rgba(255, 255, 255, 0.2);\n    width: 25%;\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n/*\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\n   * you're better off giving the draggable elements a unique class and styling that directly!\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out; }\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c; }\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n\n.taskboard-modal-footer .btn-save {\n  color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkL0M6XFxVc2Vyc1xcam9ydGVnYTMzXFxEb3dubG9hZHNcXGFwZXhhZG1pbi04MFxcYW5ndWxhci9zcmNcXGFwcFxcdGFza2JvYXJkXFx0YXNrYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2tib2FyZC90YXNrYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBR1gseUNBQUE7O0FBQ0E7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7O0tDRUk7O0FER0o7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7OztJQ0FHOztBRElIOztFQUtFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLFlBQVk7RUFDWixZQUFZO0VBRVosb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZ0JBQWdCO0VBRWhCLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDBDQUEwQyxFQUFBOztBQUc1Qzs7RUFFRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFFSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rhc2tib2FyZC90YXNrYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmdoLWZvcmsge1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgdG9wOiAwO1xuICAgcmlnaHQ6IDA7XG4gICBib3JkZXI6IDA7XG4gfVxuXG4gLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXG4gLmRyYWdkcm9wLXdyYXBwZXIge1xuICAgZGlzcGxheTogdGFibGU7XG4gfVxuXG4gLyogLmRyYWdkcm9wLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgd2lkdGg6IDI1JTtcbiAgfSAqL1xuIC5kcmFnZHJvcC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuIH1cblxuIC8qXG4gICAqIG5vdGUgdGhhdCBzdHlsaW5nIGd1LW1pcnJvciBkaXJlY3RseSBpcyBhIGJhZCBwcmFjdGljZSBiZWNhdXNlIGl0J3MgdG9vIGdlbmVyaWMuXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXG4gICAqL1xuIC5kcmFnZHJvcC1jb250YWluZXI+ZGl2LFxuIC5ndS1taXJyb3Ige1xuICAgLy8gbWFyZ2luOiAxMHB4O1xuICAgLy8gcGFkZGluZzogMTBweDtcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbiB9XG5cbiAuZHJhZ2Ryb3AtY29udGFpbmVyPmRpdiB7XG4gICBjdXJzb3I6IG1vdmU7XG4gICBjdXJzb3I6IGdyYWI7XG4gICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuIH1cblxuIC5ndS1taXJyb3Ige1xuICAgY3Vyc29yOiBncmFiYmluZztcbiAgIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiB9XG5cbiAuZHJhZ2Ryb3AtY29udGFpbmVyIC5leC1tb3ZlZCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuIH1cblxuIC5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gfVxuXG4gI2xlZnQtbG92ZWhhbmRsZXM+ZGl2LFxuICNyaWdodC1sb3ZlaGFuZGxlcz5kaXYge1xuICAgY3Vyc29yOiBpbml0aWFsO1xuIH1cblxuIC5oYW5kbGUge1xuICAgcGFkZGluZzogMCA1cHg7XG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgIGN1cnNvcjogbW92ZTtcbiB9XG5cbiAuaW1hZ2UtdGhpbmcge1xuICAgbWFyZ2luOiAyMHB4IDA7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cbiAuc2xhY2stam9pbiB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgZm9udC1zaXplOiAxNHB4O1xuICAgcmlnaHQ6IDEwcHg7XG4gICB0b3A6IDUwJTtcbiAgIG1hcmdpbi10b3A6IC04cHg7XG4gICBsaW5lLWhlaWdodDogMTZweDtcbiB9XG5cbiAudGFza2JvYXJkLW1vZGFsLWZvb3RlciB7XG4gICAuYnRuLXNhdmUge1xuICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgfVxuIH1cbiIsIi5naC1mb3JrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXI6IDA7IH1cblxuLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXG4uZHJhZ2Ryb3Atd3JhcHBlciB7XG4gIGRpc3BsYXk6IHRhYmxlOyB9XG5cbi8qIC5kcmFnZHJvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIHdpZHRoOiAyNSU7XG4gIH0gKi9cbi5kcmFnZHJvcC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7IH1cblxuLypcbiAgICogbm90ZSB0aGF0IHN0eWxpbmcgZ3UtbWlycm9yIGRpcmVjdGx5IGlzIGEgYmFkIHByYWN0aWNlIGJlY2F1c2UgaXQncyB0b28gZ2VuZXJpYy5cbiAgICogeW91J3JlIGJldHRlciBvZmYgZ2l2aW5nIHRoZSBkcmFnZ2FibGUgZWxlbWVudHMgYSB1bmlxdWUgY2xhc3MgYW5kIHN0eWxpbmcgdGhhdCBkaXJlY3RseSFcbiAgICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2LFxuLmd1LW1pcnJvciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDsgfVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2IHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjdXJzb3I6IGdyYWI7XG4gIGN1cnNvcjogLW1vei1ncmFiO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjsgfVxuXG4uZ3UtbWlycm9yIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7IH1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjOyB9XG5cbi5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgfVxuXG4jbGVmdC1sb3ZlaGFuZGxlcyA+IGRpdixcbiNyaWdodC1sb3ZlaGFuZGxlcyA+IGRpdiB7XG4gIGN1cnNvcjogaW5pdGlhbDsgfVxuXG4uaGFuZGxlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGN1cnNvcjogbW92ZTsgfVxuXG4uaW1hZ2UtdGhpbmcge1xuICBtYXJnaW46IDIwcHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uc2xhY2stam9pbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XG5cbi50YXNrYm9hcmQtbW9kYWwtZm9vdGVyIC5idG4tc2F2ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.ts ***!
  \**************************************************/
/*! exports provided: TaskboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function() { return TaskboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _taskboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard.service */ "./src/app/taskboard/taskboard.service.ts");
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ "./src/app/taskboard/crud-modal/crud-modal.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");






var TaskboardComponent = /** @class */ (function () {
    function TaskboardComponent(dragulaService, elRef, taskBoardService, modalService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.elRef = elRef;
        this.taskBoardService = taskBoardService;
        this.modalService = modalService;
        this.BAG = "task-group";
        this.tasks = this.taskBoardService.tasks;
        this.loadTasks();
        dragulaService.drop(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el, target = _a.target;
            _this.updateTaskStatus(el.getAttribute('task-id'), target.id);
        });
    }
    TaskboardComponent.prototype.loadTasks = function () {
        this.todo = this.tasks.filter(function (task) { return task.status === 'New'; });
        this.inProcess = this.tasks.filter(function (task) { return task.status === 'In-Process'; });
        this.backLog = this.tasks.filter(function (task) { return task.status === 'Pending'; });
        this.completed = this.tasks.filter(function (task) { return task.status === 'Completed'; });
    };
    TaskboardComponent.prototype.editTask = function (id) {
        var _this = this;
        var task = this.tasks.find(function (x) { return x.taskId === id; });
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__["CrudModalComponent"]);
        modalRef.componentInstance.id = id; // should be the id
        modalRef.componentInstance.data = { title: task.taskTitle, message: task.taskMessage }; // should be the data
        modalRef.result.then(function (result) {
            var index = _this.tasks.indexOf(task);
            task.taskTitle = result.title;
            task.taskMessage = result.message;
            _this.taskBoardService.UpdateTask(task, index).subscribe(function (data) {
                _this.tasks = data;
                _this.loadTasks();
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskboardComponent.prototype.updateTaskStatus = function (id, status) {
        var _this = this;
        if (id) {
            var task = this.tasks.find(function (x) { return x.taskId === +id; });
            var index = this.tasks.indexOf(task);
            task.status = status;
            this.taskBoardService.UpdateTask(task, index).subscribe(function (data) {
                _this.tasks = data;
                _this.loadTasks();
            });
        }
    };
    TaskboardComponent.prototype.deleteTask = function (id) {
        var _this = this;
        var task = this.tasks.find(function (x) { return x.taskId === id; });
        var index = this.tasks.indexOf(task);
        this.taskBoardService.deleteTask(index).subscribe(function (data) {
            _this.tasks = data;
            _this.loadTasks();
        });
    };
    TaskboardComponent.prototype.addTask = function () {
        var _this = this;
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__["CrudModalComponent"]);
        modalRef.componentInstance.id = 0; // should be the id
        modalRef.componentInstance.data = { title: '', message: '' }; // should be the data
        modalRef.result.then(function (result) {
            _this.taskBoardService.addNewTask(result.title, result.message).subscribe(function (data) {
                _this.tasks = data;
                _this.loadTasks();
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskboardComponent.ctorParameters = function () { return [
        { type: ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoTitle', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "titleInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoMessage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "messageInputRef", void 0);
    TaskboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-taskboard',
            template: __webpack_require__(/*! raw-loader!./taskboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/taskboard/taskboard.component.html"),
            providers: [_taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./taskboard.component.scss */ "./src/app/taskboard/taskboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], TaskboardComponent);
    return TaskboardComponent;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.model.ts":
/*!**********************************************!*\
  !*** ./src/app/taskboard/taskboard.model.ts ***!
  \**********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskId, taskTitle, taskMessage, createdOn, createdBy, assignedTo, status) {
        this.taskId = taskId;
        this.taskTitle = taskTitle;
        this.taskMessage = taskMessage;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.status = status;
    }
    Task.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Task;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/taskboard/taskboard.module.ts ***!
  \***********************************************/
/*! exports provided: TaskboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardModule", function() { return TaskboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskboard-routing.module */ "./src/app/taskboard/taskboard-routing.module.ts");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ "./src/app/taskboard/crud-modal/crud-modal.component.ts");









var TaskboardModule = /** @class */ (function () {
    function TaskboardModule() {
    }
    TaskboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["TaskboardRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [
                _taskboard_component__WEBPACK_IMPORTED_MODULE_7__["TaskboardComponent"],
                _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_8__["CrudModalComponent"]
            ],
            entryComponents: [
                _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_8__["CrudModalComponent"]
            ]
        })
    ], TaskboardModule);
    return TaskboardModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/taskboard/taskboard.service.ts ***!
  \************************************************/
/*! exports provided: TaskBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardService", function() { return TaskBoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.model */ "./src/app/taskboard/taskboard.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TaskBoardService = /** @class */ (function () {
    function TaskBoardService() {
        this.tasks = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](1, 'Responsive', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](2, 'QA Testing', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](3, 'Budget', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](4, 'checklist', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In-Process'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](5, 'Navigation', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In-Process'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](6, 'Bootstrap 4', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In-Process'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](7, 'Assessment', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](8, 'Schedule', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](9, 'Unit tests', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](10, 'Angular 5', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](11, 'Fields', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](12, 'Task board', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed')
        ];
    }
    TaskBoardService.prototype.addNewTask = function (title, message) {
        var task = {
            taskId: Math.round(Math.random() * 10000000000),
            taskTitle: title,
            taskMessage: message,
            createdOn: 'Nov 12',
            createdBy: 'Elizabeth Elliott',
            assignedTo: 'assets/img/portrait/small/avatar-s-3.png',
            status: 'New'
        };
        this.tasks.unshift(task);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.tasks.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100));
    };
    TaskBoardService.prototype.UpdateTask = function (task, index) {
        // this.tasks.splice(index, 1, task);
        this.tasks = this.tasks.map(function (i) {
            if (i.taskId === task.taskId) {
                return Object.assign({}, i, task);
            }
            return i;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.tasks.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    TaskBoardService.prototype.deleteTask = function (index) {
        this.tasks.splice(index, 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.tasks.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100));
    };
    TaskBoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskBoardService);
    return TaskBoardService;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-taskboard-module.js.map