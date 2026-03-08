import { appRouter } from "./router/app.router"
import { RouterProvider } from "react-router"
import { ThemeProvider } from "./theme/ThemeContext"

export const TemporaryName = () => {

    return (
        <ThemeProvider>
            <RouterProvider router={appRouter} />
        </ThemeProvider>
    )
}