//Import functions from other modules
import name from './names.js';
import hobby from './hobbies.js';


/** * This function combines the name and hobbies functions to create a person object.
 * @returns {Object} person
 */
function person(){
    return {
        full_name: name('John', 'Doe'),
        hobbies: hobby('Reading', 'Traveling', 'Cooking')
    }
}

console.log(person());
