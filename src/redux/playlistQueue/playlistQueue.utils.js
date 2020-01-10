export const pushingtoState = (state, payload) => {
    let newArr = [...state.queueList]

    if(newArr.includes(payload)){
        alert('Already in playlist.')

        return newArr;
    }
    else {
        newArr.unshift(payload)
        return newArr;
    }

}

export const removeFromState = (state, payload) => {
    let newArr = [...state.queueList];
    newArr.splice(payload,1)

    return newArr;
}

export const orderUpState = (state, payload) => {
    let newArr = [...state.queueList];
    if(payload - 1 >= 0) {
        let temp = newArr[payload - 1];
        newArr[payload - 1] = newArr[payload];
        newArr[payload] = temp;

        return newArr
    }

    return newArr;
}

export const orderDownState = (state, payload) => {
    let newArr = [...state.queueList];
    if(payload + 1 < newArr.length) {
        let temp = newArr[payload + 1];
        newArr[payload + 1] = newArr[payload];
        newArr[payload] = temp;

        return newArr
    }

    return newArr;
}