import { BrowserRouter as RouterView, Routes, Route } from "react-router-dom"
import  Homepage  from "./pages/Homepage/Homepage"
import { PageNotFound } from "pages/PageNotFound"

const Router = (props: any) => {
    return (
        <RouterView>
            {props.children}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </RouterView>
    )
}

export default Router;