import "./header.css"
import CloseButton from "../closebutton/closebutton";


function Header() {
    return (
        <div className="header">
            <h5 className="title">Task Tracker</h5>
            <CloseButton/>
        </div>
    )

}

export default Header;