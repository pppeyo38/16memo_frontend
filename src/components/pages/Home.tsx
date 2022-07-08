import { memo, FC } from "react"

export const Home: FC = memo(() => {
  return(
		<>
			<p>HOMEページ</p>
			<a href="/catalog">カタログページ</a>
		</>
	)
})
