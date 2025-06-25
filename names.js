/**
 *  This function takes a first name and a last name as arguments
 *  and returns an object containing both names.
 * @param {string} firstName 
 * @param {string} lastName 
 * @returns 
 */
function name(firstName, lastName){
    const full_name = {
        first_name: firstName,
        last_name: lastName
    }

    return full_name
}

// console.log(name('John', 'Doe')); // Example usage

//Export name function
export default name;