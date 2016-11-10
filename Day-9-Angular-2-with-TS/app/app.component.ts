import {Component} from 'angular2/core';
import {NarrativesComponent} from './narratives.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello, Angular 2! Chat!</h1>
    <narrative></narrative>
    `,
    directives: [NarrativesComponent],
})
export class AppComponent {
    narratives;
    constructor(narrativesComponent: NarrativesComponent){
        this.narratives = narrativesComponent;
    }
 }