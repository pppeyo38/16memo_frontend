import { memo } from "react"
import { Routes, Route } from "react-router-dom"

import { HeaderLayout } from "../components/templates/HeaderLayout"
import { ComponentCatalog } from "../components/pages/ComponentCatalog"

export const Router = memo(() => {
	return (
		<Routes>
			<Route
				path="/"
				element={<HeaderLayout><ComponentCatalog /></HeaderLayout>}
			/>
		</Routes>
	)
})