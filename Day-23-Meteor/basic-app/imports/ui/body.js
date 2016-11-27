import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../api/tasks';

import './task.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
});

Template.body.helpers({
    tasks() {
        const instance = Template.instance();
        console.log('instance is', instance.state.get('hideCompleted'))
        if (instance.state.get('hideCompleted')) {
            console.log('Hide Complete')
            // If hide completed is checked, filter tasks
            return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
        }
        // Otherwise, return all of the tasks
        return Tasks.find({}, { sort: { createdAt: -1 } });
    },
    incompleteCount() {
        return Tasks.find({ checked: { $ne: true } }).count();
    }
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault();

        // get form value
        const target = event.target;
        const text = target.text.value;

        // insert value to Task db, secure.
        Meteor.call('tasks.insert', text);

        // clear form
        target.text.value = '';
    },
    'change .hide-completed input'(event, instance) {
        console.log('Change hide state')
        instance.state.set('hideCompleted', event.target.checked);
    },
})