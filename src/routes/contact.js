export const post = (request) => {
    const username = request.body.get("username")
    const mobile = request.body.get("mobile")
    const password = request.body.get("password")
    const password2 = request.body.get("password2")
    const email = request.body.get("email")
    return {
        body: {
            username,
            mobile,
            password,
            password2,
            email,
        }
    }
}