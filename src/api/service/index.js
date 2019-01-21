class Service {

    constructor({
        axios
    }) {
        this.axios = axios;
    }

    getDataFromCep = async (cep) => {
        const {data} = await this.axios.get(`${cep}/json`)
        return data;
    }

}

export default Service;