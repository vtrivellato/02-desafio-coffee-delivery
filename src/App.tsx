import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { CoffeeList } from './components/CoffeeList/CoffeeList'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Header />
			<Banner />
			<CoffeeList />

			<GlobalStyle />
		</ThemeProvider>
	)
}
