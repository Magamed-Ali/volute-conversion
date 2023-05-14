import axios from "axios";


const instance = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/e649d4299cc5549014eda15d/latest/"
})

export const Current_API = {

    getCurrent(currency: string) {
        return instance.get<any>(currency)
    }

}