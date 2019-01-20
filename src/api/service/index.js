class Service {

    constructor({
        axios
    }) {
        this.axios = axios;
    }

    getDataFromCep = async (cep) => {
        try {
            const {data} = await this.axios.get(`${cep}/json`)
            return data;
        } catch (err) {
            return err;
        }
    }

}

export default Service;