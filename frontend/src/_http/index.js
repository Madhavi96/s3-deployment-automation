import axios from "axios";
import qs from "qs";

//todo : Use the URL used to invoke api gateway/ local bff here
const baseURL = "";

const postRequest = async (url, data) => {
  return axios.post(`${baseURL}${url}`, data);
};

const getRequest = async (url, params = {}) => {
  return axios.get(`${baseURL}${url}`, {
    params,
    paramsSerializer: () => qs.stringify(params),
  });
};

const putRequest = async (url, data) => {
  return axios.put(`${baseURL}${url}`, data);
};

const patchRequest = async (url, data) => {
  return axios.patch(`${baseURL}${url}`, data);
};

const deleteRequest = async (url) => {
  return axios.delete(`${baseURL}${url}`);
};

export { postRequest, getRequest, putRequest, deleteRequest, patchRequest };
