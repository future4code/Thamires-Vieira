export const goToHomePage = (history) => {
    history.push("/")
}

export const goToResultsPage = (history) => {
    history.push("/results")
}

export const goToDetailPage = (history, id) => {
    history.push(`/detail/${id}`)
}