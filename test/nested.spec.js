/*jslint node:true, nomen:true, unparam:true, plusplus:true, vars:true */
/*global jasmine, describe, fdescribe, xdescribe, before, beforeEach, beforeAll, after, afterEach, afterAll, it, fit, xit, expect, pending, mostRecentAjaxRequest, qq, runs, spyOn, spyOnEvent, waitsFor, confirm, context */

(function () {
    'use strict';

    describe('Suite 1 (Level 1)', function () {

        it('Suite 1, Spec 1', function () {
            expect(true).toEqual(true);
        });
        it('Suite 1, Spec 2', function () {
            expect(true).toEqual(true);
        });
        it('Suite 1, Spec 3', function (done) {
            expect(false).toEqual(true);
            setTimeout(function () {
                expect(1).toEqual(2);
                done();
            }, 1000);
        });

        describe('Suite 2 (Level 2)', function () {
            it('Suite 2, Spec 1', function () {
                expect(true).toEqual(true);
            });
            xdescribe('Suite 3 (Level 3)', function () {
                it('Suite 3, Spec 1', function () {
                    expect(true).toEqual(true);
                });
                it('Suite 3, Spec 2', function () {
                    expect(true).toEqual(true);
                });
            });
            xit('Suite 2, Spec 2', function () {
                expect(true).toEqual(true);
            });
        });

        xit('Suite 1, Spec 4', function () {
            expect(true).toEqual(true);
        });

        xdescribe('Suite 4 (Level 2)', function () {
            it('Suite 4, Spec 1', function () {
                expect(true).toEqual(true);
            });
        });

        describe('Suite 5 (Level 2)', function () {
            it('Suite 5, Spec 1', function () {
                expect(true).toEqual(true);
            });
        });

    });

    describe('Suite 6 (Level 1)', function () {
        it('Suite 6, Spec 1', function () {
            expect(true).toEqual(true);
        });
        xit('Suite 6, Spec 2', function () {
            expect(true).toEqual(true);
        });
    });

}());