const message = {
    400: "bad request",
    401: "Unauthorized",
    403: "Forbbiden",
    404: "Not Found",
    409: "Conflict"
    
}


const ReaquestError = (status, message= message[status]) => {
    const err = new Error(message)
    err.status = status
    return err
}

module.exports = ReaquestError