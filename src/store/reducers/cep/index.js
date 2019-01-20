const iniitalState = {
    cep: null,
    stret: null
}

export default (state = iniitalState, action) => {
    const { type, payload } = action;
    switch (type) {
        default: {
            return state;
        }
    }
}