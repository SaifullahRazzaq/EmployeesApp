import axios from 'axios';

const API_URL = 'https://dummy.restapiexample.com/api/v1';

export const getEmployees = () => axios.get(`${API_URL}/employees`);
export const getEmployee = (id) => axios.get(`${API_URL}/employee/${id}`);
export const createEmployee = (employee) => axios.post(`${API_URL}/create`, employee);
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/update/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/delete/${id}`);
