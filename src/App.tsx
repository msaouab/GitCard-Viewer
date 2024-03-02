import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

function App() {
	return (
		<>
			<main className='main'>
				<SearchBar />
				<Card />
			</main>
			<Footer />
		</>
	)
}

export default App
