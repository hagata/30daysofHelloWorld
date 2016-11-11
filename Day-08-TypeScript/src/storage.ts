
interface listItem {
    id?: number;
    title: string;
    image?: string;
    url?: string;
}

class Storage{
    private storageId: string;

    constructor(){
         this.storageId = "wishlist"

        // Check to see if the db exists, otherwise create it.
         this.init();
    }

    /**
     * retrieves and json.parses data entry from localStorage
     *
     * @returns {Object}
     *
     * @memberOf Storage
     */
    getALl(){
        return JSON.parse(localStorage.getItem(this.storageId));
    }

    editItem(item: listItem){
    }

    removeItem(item: listItem){
        //get item id
        //get item from db db.splice(item,1)
    }

    removeAll() {
        localStorage.removeItem(this.storageId);
        //Clear all items in db
    }

    addItem(item: listItem){
        let lists = this.getALl();
        item.id = lists.length || 0;

        lists.push(item)
        this.writeToStorage(JSON.stringify(lists))
    }

    /**
     * Pushes properly formated object to LocalStorage
     * @param {srting} item JSON.stringified object of updated storage Object
     *
     * @memberOf Storage
     */
    writeToStorage(item: string) {
        localStorage.setItem(this.storageId, item);
        console.log('successfully added:\n', item)
    }

    init() {
        console.log('result of get all',this.getALl())
        if (this.getALl() == null){
            this.writeToStorage('[]');
        }
    }
}

const ListDB = new Storage();
export {ListDB};