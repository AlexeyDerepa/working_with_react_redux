export const select = (car) => {
    console.log(car.name);
    return {
        type: "CAR_SELECTED",
        payload: car
    }
}