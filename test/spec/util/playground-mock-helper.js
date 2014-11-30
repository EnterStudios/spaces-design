/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */

define(function (require, exports) {
    "use strict";

    var PlaygroundMock = require("./playground-mock");

    /**
     * QUnit setup function. Adds mockGet and mockPlay methods to the receiver.
     * This should be called with the QUnit test module as the receiver; e.g.,
     * 
     * QUnit.module("modulename", {
     *      setup: function () {
     *          playgroundMockHelper.setup.call(this); 
     *      }
     *  });
     */
    var setup = function () {
        this._playground = new PlaygroundMock();
        this.mockGet = this._playground._mockGet;
        this.mockPlay = this._playground._mockPlay;

        window._playgroundOriginal = window._playground;
        window._playground = this._playground;
    };

    /**
     * QUnit teardown function.
     * 
     * @see setup
     */
    var teardown = function () {
        window._playground = window._playgroundOriginal;
        delete window._playgroundOriginal;
    };

    exports.setup = setup;
    exports.teardown = teardown;
});
