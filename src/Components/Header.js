import logo from '../fuen_fin.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ()=>{
    return(
        <header className="App-header">
        <img  src={logo} className="App-logo" alt="logo"></img>
      </header>
    );
}

export default Header;