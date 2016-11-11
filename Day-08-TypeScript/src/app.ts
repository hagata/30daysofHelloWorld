import {ListDB} from "./storage";

// This will be added on every page load, over and over.
// Just for testing.
ListDB.addItem({
    title: "This is crazy",
    url: "https://www.typescriptlang.org/play/index.html"
})

console.log(ListDB)
console.log('%cAppLoaded','color:#4CAF50; font-size:16px;');
