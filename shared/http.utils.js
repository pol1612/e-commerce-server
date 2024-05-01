function validateRequestBodyFields(allowedFields,requestBody) {

    const receivedFields = Object.keys(requestBody);
    let isValid = false
    if(receivedFields.length !== 0){

        isValid = allowedFields.every(field =>{
            let isFieldInRequest = receivedFields.includes(field)
            return isFieldInRequest

        } )
    }
    return isValid
}

module.exports = {validateRequestBodyFields};


