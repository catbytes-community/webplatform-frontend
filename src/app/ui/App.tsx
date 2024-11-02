import '../styles/reset.css'
import '../styles/variables/global.css'
import '../styles/index.css'
import style from './App.module.css'
import { Suspense } from "react"
import { AppRouter } from "../providers/Router"

function App() {
	return (
		<div className={style.app}>
			<Suspense fallback={<div>Loading...</div>}>
				{/* общий layout */}
				<AppRouter />
				{/* общий layout */}
			</Suspense>
		</div>
	)
}

export default App
