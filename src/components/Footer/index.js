
import logoFooter from "../../asstes/imgs/logo-footer.svg";
import iconEigth from "../../asstes/imgs/+18.svg";
import "./style.module.css"


function Footer() {
    return (
        <div className="Footer">        
        <footer>
            <img src={logoFooter} className="logo-footer" alt="logo-footer" />
            <img src={iconEigth} className="footer +18" alt="footer +18" />
        </footer>
        </div>
    );
}
export default Footer;