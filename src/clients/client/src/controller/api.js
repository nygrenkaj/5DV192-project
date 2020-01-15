import { create } from "apisauce";
import Cookie from "universal-cookie";

const API_URL= "http://" + window.location.hostname + ":5000";
const API_EXTERNAL_URL= "http://" + "130.239.183.121" + ":5000";

let create_api = () => {

    /* choose api url */
    const URL = API_URL;

    console.log(URL);

    new Cookie();

    const api = create({
        baseURL: API_URL,
        headers: {
            Accept: "application/json",
            "Accept-Language": "sv",
            "Access-Control-Allow-Origin": "*",
        }
    });


    const api_dynamic = create({
        baseURL: API_URL,
        headers: {
            Accept: "application/json",
            "Accept-Language": "sv",
            "Access-Control-Allow-Origin": "*",
        }
    });

    const headers = () => {
        return { headers: {} }
    };

    const transcodeRequest = data => api.get("/client/connect", data, headers());
    const transcodeUpload = data => {
        api_dynamic.setBaseURL(data.url);
        console.log("New API URL set: " + api_dynamic.getBaseURL());
        return api_dynamic.post("/split", data, headers());
    };
    const transcodeRetrieve = data => api.post("/client/retrieve", data, headers());

    return {
        transcodeRequest,
        transcodeUpload,
        transcodeRetrieve
    };

};

export default create_api();
