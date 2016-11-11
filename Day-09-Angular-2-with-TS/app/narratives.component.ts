import {
    Component
} from 'angular2/core';

@Component({
    selector: "narrative",
    template: `
    <div *ngFor="#message of messages" class="message">
        <span class="message__user">{{message.user}}</span>
        <p class="message__message">{{message.message}}</p>
    </div>
    `,
    styles: [
        '.message {margin: 1rem 0;}',
        '.message__user { margin:0; padding:0; font-size:12px;}',
        '.message__message {margin:0; padding:0;font-family:sans-serif; font-size:18px;}'
    ]
})
export class NarrativesComponent {
    messages: Object[];
    controlIndex: number;
    currentMessage: Object;
    constructor() {

        // Sample content.
        this.messages = [{
            user: "Mademoiselle",
            message: "Hello, Welcome to the Angular 2, chat interview mockup.",
            endOfNarrativeBlock: false
        }, {
            user: "Mademoiselle",
            message: "We have some interesting facts about Angular 2 to talk about.",
            endOfNarrativeBlock: false
        },{
            user: "Mademoiselle",
            message: "Shall we chat about A2?",
            endOfNarrativeBlock: true
        }];

        this.controlIndex = 0;
    }

    getNextMessage(){
        this.currentMessage = this.messages[this.controlIndex];
        this.controlIndex ++;
    }
}
