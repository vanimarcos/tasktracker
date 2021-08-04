import "./closebutton.css"

function CloseButton() {
    return (
        <button  onClick={close}>Close</button>
    )

    function close(){
        console.log("You clicked in close button")
    }
}

export default CloseButton