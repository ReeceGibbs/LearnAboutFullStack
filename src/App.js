//we import our menu component
import Menu from './components/Menu'
import Footer from './components/Footer'
import Donut from './images/icons/donut.png'

function App() {
  return (
    <div className="container">
      <Menu />
      <Footer title = "in honour of us" logo = {Donut}/>
    </div>
  );
}

export default App;
