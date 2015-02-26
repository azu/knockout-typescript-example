/// <reference path="../typings/knockout/knockout.d.ts"/>
/// <reference path="../typings/knockout.es5/knockout.es5.d.ts"/>

"use strict";

class ViewModel {
    firstName:string;
    lastName:string;

    constructor(first:string, last:string) {
        this.firstName = first;
        this.lastName = first;
        ko.track(this);
    }

    getFullName():string {
        return this.firstName + this.lastName;
    }
}
ko.applyBindings(new ViewModel("planet", "earth"));