import './css/Header.css';
import classNames from "classnames";
class Header {
    public render() {
        return (
            <div className= {classNames("header","components")}>
                {"IELTS reading test"}
            </div>
        )
    }
}
export default Header;