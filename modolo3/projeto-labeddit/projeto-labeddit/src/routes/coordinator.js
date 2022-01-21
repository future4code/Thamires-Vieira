export const goToLoginPage = (history) => {
    history.push("/login")
}
export const goToSignUpPage = (history) => {
    history.push("/signup")
}
export const goToFeedPage = (history) => {
    history.push("/")
}
export const goToPostPage = (history, id) => {
    history.push(`/posts/${id}`)
}