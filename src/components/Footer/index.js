import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
    const location = useLocation();
    return (

        <footer class="text-center text-lg-start bg-light text-muted">


            <div class="text-center p-4" >
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Compra-ingressos.com</a>

            </div>

            <div className="nav col">
                <div> Você está em: {location.pathname}</div>
            </div>

        </footer>

    );
}


export default Footer;