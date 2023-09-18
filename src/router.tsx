import { BrowserRouter as RouterView, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Homepage/Homepage";

import { Homepage } from "pages/Homepage"
import { About } from "pages/About";

import { PageNotFound } from "pages/PageNotFound"

interface RouterProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}


const Router = (props: RouterProps) => {
    const { children, header, footer } = props;

    return (
        <RouterView>
            
            {header && header} {/* Only render if header is defined */}

            {children}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            {footer && footer} {/* Only render if footer is defined */}
        </RouterView>
    )
}

export default Router;