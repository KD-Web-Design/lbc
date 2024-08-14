import Articles from './components/Articles'
import FilterOverlay from './components/FilterOverlay'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import SearchInputs from './components/SearchInputs'

export default function App() {
  return (
    <>
      <Navigation />
      <SearchInputs />
      <Articles />
      <Footer />
      <FilterOverlay />
    </>
  )
}

