import axiosClient from "./axiosClient";

const RESOURCE = "/tasks";

const taskService = {
  
  getAll: async () => {
    const { data } = await axiosClient.get(RESOURCE);
    return data;
  },

  getById: async (id) => {
    const { data } = await axiosClient.get(`${RESOURCE}/${id}`);
    return data;
  },

  create: async (task) => {
    const { data } = await axiosClient.post(RESOURCE, task);
    return data;
  },

  update: async (id, task) => {
    const { data } = await axiosClient.put(`${RESOURCE}/${id}`, task);
    return data;
  },

  delete: async (id) => {
    await axiosClient.delete(`${RESOURCE}/${id}`);
    return id;
  },

};

export default taskService;