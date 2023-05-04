import axios from 'axios';
import { Config } from './config';
import navigationService from './navigationService';
import STRING_CONSTANTS from '../stringConstants';

class APIService {
    axiosOptions = {
        timeout: 300000,
        withCredentials: true
    };

    constructor() {
        axios.interceptors.response.use((response) => {
            return response;
        }, async (error) => {
            if (error?.response && error?.response?.data && error?.response?.data?.status_code === 403) {
                navigationService.navigate(STRING_CONSTANTS.ROUTES.LOGIN);
            }

            return this.responsePromise(error);
        });
    }

    responsePromise(res: any) {
        return new Promise((resolve, reject) => {
            if (res.response) {
                resolve(res);
            } else {
                reject(res);
            }
        });
    }

    getRequestHeaders = (data: { payLoad?: any; endPoint?: string; domain?: string | undefined; headerType?: any; }) => {
        switch(data.headerType) {
            case STRING_CONSTANTS.API_SERVICE.CONTENT_HEADERS.FORM_DATA: 
                return {
                    [STRING_CONSTANTS.API_SERVICE.ACCEPT]: STRING_CONSTANTS.API_SERVICE.CONTENT_HEADERS.FORM_DATA,
                    [STRING_CONSTANTS.API_SERVICE.CONTENT_TYPE]: STRING_CONSTANTS.API_SERVICE.CONTENT_HEADERS.FORM_DATA
                }
                break;
            case STRING_CONSTANTS.API_SERVICE.CONTENT_HEADERS.PLAIN: 
                return {
                    [STRING_CONSTANTS.API_SERVICE.ACCEPT]: STRING_CONSTANTS.API_SERVICE.CONTENT_HEADERS.PLAIN,
                    [STRING_CONSTANTS.API_SERVICE.CONTENT_TYPE]: STRING_CONSTANTS.API_SERVICE.CONTENT_HEADERS.PLAIN
                }
                break;
            default: return {
                [STRING_CONSTANTS.API_SERVICE.ACCEPT]: STRING_CONSTANTS.API_SERVICE.CONTENT_HEADERS.JSON,
                [STRING_CONSTANTS.API_SERVICE.CONTENT_TYPE]: STRING_CONSTANTS.API_SERVICE.CONTENT_HEADERS.JSON
            }
        }
    }

    post = (data: { payLoad: any; endPoint: string; domain?: string; headerType?: string; }) => {
        let payLoadData = data.payLoad instanceof FormData ? data.payLoad : JSON.stringify(data.payLoad);
        return axios.post(data.endPoint,
            payLoadData, {
            timeout: this.axiosOptions.timeout,
            baseURL: data.domain ? data.domain : Config.API_URL_PROD,
            headers: this.getRequestHeaders(data)
        });
    }

    put = (data: { payLoad: any; endPoint: string; domain?: string; headerType?: string; }) => {
        let payLoadData = data.payLoad instanceof FormData ? data.payLoad : JSON.stringify(data.payLoad);
        return axios.put(data.endPoint,
            payLoadData, {
            timeout: this.axiosOptions.timeout,
            baseURL: data.domain ? data.domain : Config.API_URL_PROD,
            headers: this.getRequestHeaders(data)
        });
    }

    delete = (data: { endPoint: string; domain?: string; headerType?: string; }) => {
        return axios.delete(data.endPoint, {
            baseURL: data.domain ? data.domain : Config.API_URL_PROD,
            headers: this.getRequestHeaders(data)
        });
    }

    get = (data: { endPoint: string; domain?: string; payLoad?: any; headerType?: string; }) => {
        try {
            return axios.get(data.endPoint, {
                baseURL: data.domain ? data.domain : Config.API_URL_PROD,
                timeout: this.axiosOptions.timeout,
                params: data.payLoad,
                headers: this.getRequestHeaders(data)
            });
        } catch (e) { }
    }
}

export const api_service = new APIService();