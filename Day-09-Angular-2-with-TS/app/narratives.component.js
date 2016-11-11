System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NarrativesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NarrativesComponent = (function () {
                function NarrativesComponent() {
                    // Sample content.
                    this.messages = [{
                            user: "Mademoiselle",
                            message: "Hello, Welcome to the Angular 2, chat interview mockup.",
                            endOfNarrativeBlock: false
                        }, {
                            user: "Mademoiselle",
                            message: "We have some interesting facts about Angular 2 to talk about.",
                            endOfNarrativeBlock: false
                        }, {
                            user: "Mademoiselle",
                            message: "Shall we chat about A2?",
                            endOfNarrativeBlock: true
                        }];
                    this.controlIndex = 0;
                }
                NarrativesComponent.prototype.getNextMessage = function () {
                    this.currentMessage = this.messages[this.controlIndex];
                    this.controlIndex++;
                };
                NarrativesComponent = __decorate([
                    core_1.Component({
                        selector: "narrative",
                        template: "\n    <div *ngFor=\"#message of messages\" class=\"message\">\n        <span class=\"message__user\">{{message.user}}</span>\n        <p class=\"message__message\">{{message.message}}</p>\n    </div>\n    ",
                        styles: [
                            '.message {margin: 1rem 0;}',
                            '.message__user { margin:0; padding:0; font-size:12px;}',
                            '.message__message {margin:0; padding:0;font-family:sans-serif; font-size:18px;}'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NarrativesComponent);
                return NarrativesComponent;
            }());
            exports_1("NarrativesComponent", NarrativesComponent);
        }
    }
});
//# sourceMappingURL=narratives.component.js.map