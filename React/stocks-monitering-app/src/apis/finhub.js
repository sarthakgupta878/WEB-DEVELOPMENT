import axios from "axios";
const TOKEN ="ck1ed1pr01qnva7rlesgck1ed1pr01qnva7rlet0"
export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token : TOKEN
    }
})