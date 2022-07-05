import { memo } from "react"
import { Routes, Route } from "react-router-dom"

import { HeaderLayout } from "../components/templates/HeaderLayout"
import { Home } from "../components/pages/Home"
import { ComponentCatalog } from "../components/pages/ComponentCatalog"

export const Router = memo(() => {
	return (
		<Routes>
			<Route
				path="/"
				element={<HeaderLayout><Home /></HeaderLayout>}
			/>
			<Route
				path="/catalog"
				element={<HeaderLayout><ComponentCatalog /></HeaderLayout>}
			/>
		</Routes>
	)
})