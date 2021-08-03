import "./newtask.css"

function NewTask () {

    return (
        <form>
            <div>
                <label htmlFor="taskname">Task</label>
                <input id="taskname" type="text"></input>
            </div>
            <div>
                <label htmlFor="daytime">Day and Time</label>
                <input id="daytime" type="Datetime"></input>
            </div>
            <div>
                <span>Set Reminder</span>
                <input type="checkbox" defaultChecked={false}/>
            </div>
            <div> 
                <button>Save Task</button>
            </div>
        </form>
    )

}

export default NewTask