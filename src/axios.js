import axios from "axios";

export default axios.create({
    baseURL: "http://escapingthecity.co.uk/wp-json/wp/v2",
    headers: {
        'Accept': "application/json",

    },
});