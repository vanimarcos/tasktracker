import "./newtask.css"

function NewTask () {

    return (
        <form>
            <div className="form-group">
                <label htmlFor="taskname">Task</label>
                <input id="taskname" className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label htmlFor="daytime">Day and Time</label>
                <input id="daytime" type="datetime"></input>
            </div>
            <div className="form-group">
                <span>Set Reminder</span>
                <input type="checkbox" defaultChecked={false}/>
            </div>
            <div className="form-group"> 
                <button type="submit" className="btn btn-dafault">Save Task</button>
            </div>
        </form>
    )

}

export default NewTask