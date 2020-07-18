"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Application } from '../carbonara'
var Application = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function Application(run) {
        this.run = run;
    }
    return Application;
}());
var runPath = './index';
// tslint:disable-next-line:no-var-requires
var run = require(runPath).run;
exports.default = new Application(run);
//# sourceMappingURL=application.js.map