import axios from '../../helpers/axios/interceptor';
import Service from '../service';

export default class {
    static create() {
        return new Service({
            axios
        })
    }
}