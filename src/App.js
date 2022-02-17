import './App.css';
import logo3 from "./img/logo3.png";

function App() {
  return (
    
    <form className="Login">
        <div>
            <img className="imagen" src={logo3} width="100" />
        </div>

        <div className="texto">
            <label>Por favor ingresa en tu cuenta</label>
        </div>
        
            <input type="text" placeholder="Usuario"/>
        
            <input type="password" placeholder="Contraseña"/>
        

        <button className="bot1">Inicio de sesion</button>

        <div className="link">
            ¿Aun no tiene cuenta.? <a href="#">Registrarse</a>
        </div>
        
    </form>
    
    
    
    
    
  )
}

export default App;
