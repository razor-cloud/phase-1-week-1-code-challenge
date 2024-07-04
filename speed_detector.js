function calculateDemeritPoints(speed){
    const speedLimit = 70;
    let vehicle_speed = Number(prompt(70))
}
if (speed < speedLimit){
    console.log("OK")
} else {
    let demeritPoints = ((speed-speedLimit)/5)
} if (demeritPoints > 12){
    console.log("License Suspended")
} else{
    console.log('your points: ${demeritPoints}')
}

speed_(vehicle_speed)