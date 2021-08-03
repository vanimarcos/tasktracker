
function ListTask() {

    function getAllTaks() {
        return [
            {id: 1, name: "Doctor Appointment", date: new Date()},
            {id: 2, name: "Get Elie from School", date: new Date()},
            {id: 3, name: "Make milk shake with banana and chocolate", date: new Date()},
            {id: 4, name: "Get rest and of to bed", date: new Date()},
        ]
    }
    
    return (
        <div>
            <ul>
                {
                    getAllTaks().map(tk => (  
                        <li key={tk.id}>{tk.name}</li>
                    ))
                }
            </ul>
        </div>
    )

}

export default ListTask