
const Devices = () => {
    const tempData = [
        {name: "1", energy: "100"},{name: "2", energy: "100"},{name: "3", energy: "100"},{name: "4", energy: "100"}
    ]
    const mapping = tempData.map((item)=>{
        return (
            <>
            <p>Device {item.name}</p>
            <p>{item.energy} kJ</p>
            </>
        )
    })
    return (
        <div>
        {mapping}
        </div>
    )
}

export default Devices;