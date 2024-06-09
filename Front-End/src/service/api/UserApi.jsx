import { axiosClient } from "../../api/axios";

const UserApi = {
    login: async (email, password) => {
        return axiosClient.post('/login', { email, password })
    },
    logout: async () => {
        return await axiosClient.post('/logout')
    },

    register: async (Data) => {
        return await axiosClient.post('/register', Data)
    },

    getusers: async () => {
        return await axiosClient.get('/get-users')
    },
    getIngredi: async () => {
      return await axiosClient.get('/get-ingredient')
    },
    addstock: async (stock) => {
      return await axiosClient.post('/add-stocks',stock)
    },
    getstock: async () => {
      return await axiosClient.get('/get-stocks')
    },
    getcategorie: async () => {
      return await axiosClient.get('/get-categories')
    },
    
    getproduit: async () => {
      return await axiosClient.get('/get-produits')
  },
  createOrder:async(order)=>{
    return await axiosClient.post('/orders',order)

  },
  getTypePaiements: async () => {
    return await axiosClient.get('/type-paiements')
},
getTypeCommandes: async () => {
  return await axiosClient.get('/type-commandes')
},
    
    getroles: async () => {
      return await axiosClient.get('/get-roles')
  },
    addproduit: async (UserData) => {
      // Create FormData instance
      return axiosClient.post('/add-produits', UserData);
    },
  
    addusers: async (formData) => {
    
          return  await axiosClient.post(`/add-users`, formData);
  },
  
  
  addCategory : async (formData) => {
    
    return  await axiosClient.post(`/add-category`, formData, {
        headers: {
            
            'Content-Type': 'multipart/form-data',
        },
    });
  },
}
export default UserApi;