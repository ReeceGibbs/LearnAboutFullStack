//we import our menu component
import Menu from './components/Menu'
import Footer from './components/Footer'
import DevelopmentLogo from './images/icons/development.png'

function App() {
  return (
    <div className="container">
      <Menu />
      <Footer title = "full stack answers" logo = {DevelopmentLogo}/>
    </div>
  );
}

export default App;
