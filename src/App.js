import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import imageInSrc from "./components/imageInSrc.jpg"
function App() {
  return (
<div style={{border:'solid 1px black',maxWidth:'100vw'}}>
      <h1 className="title red">Your name here</h1>

      <img className="photoS" src={imageInSrc} alt="img src"/>
  
      <img className="photoP" src="/images/imageInPublic.jpg" alt=" img public" />
</div>

  );
}

export default App;
