import { BrowserRouter as RouterView, Routes, Route } from "react-router-dom"
import { Homepage } from "pages/Homepage"
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
                <Route path="/home" element={<Homepage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            {footer && footer} {/* Only render if footer is defined */}
        </RouterView>
    )
}

export default Router;