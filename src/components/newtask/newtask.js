import "./newtask.css"

function NewTask () {

    return (
        <form className="newtask">
            <div className="form-group mb-3">
                <label htmlFor="taskname">Task</label>
                <input id="taskname" className="form-control" type="text"></input>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="daytime">Day and Time</label>
                <input id="daytime" className="form-control" type="datetime"></input>
            </div>
            <div className="form-check mb-3">
                <label className="form-check-label" htmlFor="setreminder">Set Reminder</label>
                <input id="setreminder" className="form-check-input" type="checkbox" defaultChecked={false}/>
            </div>
            <div className="form-group mb-3" > 
                <button type="submit" className="btn btn-dafault">Save Task</button>
            </div>
        </form>
    )

}

export default NewTask