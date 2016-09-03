System.register(['@angular/core'], function(exports_1, context_1) {
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
    var PuzzleComponent, Puzzle;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                    this.puzzle = new Puzzle();
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Value = Math.round(Math.random());
                    this.switch2Value = Math.round(Math.random());
                    this.switch3Value = Math.round(Math.random());
                    this.switch4Value = Math.round(Math.random());
                    console.log(this.switch1Value, this.switch2Value, this.switch3Value, this.switch4Value);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'puzzle',
                        templateUrl: 'dev/puzzle/puzzle.component.html',
                        styleUrls: ['./assets/app.css'],
                        animations: [
                            core_1.trigger('puzzleState', [
                                core_1.state('inactive', core_1.style({
                                    //backgroundColor: '#eee',
                                    transform: 'scale(1)'
                                })),
                                core_1.state('active', core_1.style({
                                    backgroundColor: '#eee',
                                    transform: 'scale(1.1)'
                                })),
                                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
                            ])
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
            Puzzle = (function () {
                function Puzzle() {
                    this.state = 'inactive';
                    this.placeholder = 'Enter Your Name Please!';
                }
                Puzzle.prototype.toggleState = function () {
                    this.state === 'inactive' ? this.state = 'active' : this.state = 'inactive';
                    this.placeholder === 'Enter Your Name Please!' ? this.placeholder = 'Just Your First Name' : this.placeholder = 'Enter Your Name Please!';
                };
                return Puzzle;
            }());
            exports_1("Puzzle", Puzzle);
        }
    }
});
//# sourceMappingURL=puzzle.component.js.map