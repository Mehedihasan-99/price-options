import './App.css'
import Lchart from './components/LChart/Lchart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='container mx-auto mb-10 text-4xl font-bold text-blue-700 bg-yellow-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <Lchart></Lchart>
    </>
  )
}

export default App
