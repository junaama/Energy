
const Program = () => {
    const tempData = [
        {name: "1", consumed: "100", equivalence: "40 Minute Car Ride"},
        {name: "2", consumed: "100", equivalence: "40 Minute Car Ride"},
        {name: "3", consumed: "100", equivalence: "40 Minute Car Ride"},
        {name: "4", consumed: "100", equivalence: "40 Minute Car Ride"},
    ]
    const mapping = tempData.map((item)=>{
        return (
            <>
                <p>Program {item.name}</p>
                <p>{item.consumed} Consumed</p>
                <p>Equivalent to a {item.equivalence}</p>
            </>
        )
    })
    return (
        <div>
        {mapping}
        </div>
    )
}
export default Program;