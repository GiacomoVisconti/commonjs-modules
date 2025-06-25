/**
 *  This function takes a first name and a last name as arguments
 *  and returns an object containing both names.
 * @param {string} first_name 
 * @param {string} last_name 
 * @returns 
 */
function name(first_name, last_name){
    const full_name = {
        first_name: first_name,
        last_name:last_name
    }

    return full_name
}


//Export name function
export default name;