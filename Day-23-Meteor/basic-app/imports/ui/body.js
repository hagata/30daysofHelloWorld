import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks';

import './task.js';
import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, {sort: {createdAt: -1}});
    }
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault();

        // get form value
        const target = event.target;
        const text = target.text.value;

        // insert value to Task db
        Tasks.insert({
            text,
            createdAt: new Date()
        })

        // clear form
        target.text.value = '';
    }
})