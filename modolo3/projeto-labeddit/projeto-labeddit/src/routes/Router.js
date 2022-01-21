import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostListPage from '../pages/PostsListPage/PostListPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import Header from '../components/Header'


function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'} element={<FeedPage />} />
                <Route path={'/post/:page/:postsPerPage/:id/:uservote'} element={<PostListPage />} />
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/signup'} element={<SignUpPage />} />
                <Route path={'*'} element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;