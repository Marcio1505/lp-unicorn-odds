
import logoFooter from "../../asstes/imgs/logo-footer.svg";
import iconEigth from "../../asstes/imgs/+18.svg";
import "./style.module.css"


function Footer() {
    return (
        <footer>
            <div>
            <img src={logoFooter} className="logo-footer" alt="logo-footer" />
            <img src={iconEigth} className="footer +18" alt="footer +18" />
            </div>
        </footer>
    );
}
export default Footer;