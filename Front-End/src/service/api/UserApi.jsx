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

    getUsers: async () => {
        return await axiosClient.get('/get-users')
    },
    getproduits: async () => {
      return await axiosClient.get('/get-produits')
    },
    getcommandes: async () => {
      return await axiosClient.get('/get-commandes')
    },
    getCommentaires: async () => {
      return await axiosClient.get('/get-categories')
    },
    
    getingredient: async () => {
      return await axiosClient.get('/get-ingredient')
    },
    getjaims: async () => {
      return await axiosClient.get('/get-jaims')
    },
    getreservations: async () => {
      return await axiosClient.get('/get-reservations')
    },
    getstocks: async () => {
      return await axiosClient.get('/get-stocks')
    },
    gettablecoffees: async () => {
      return await axiosClient.get('/get-tablecoffees')
    },
    gettypecommandes: async () => {
      return await axiosClient.get('/get-typecommandes')
    },
    gettypepaiements: async () => {
      return await axiosClient.get('/get-typepaiements')
    },
    
    
  
    Add_User: async (UserData) => {
      // Create FormData instance
      
  
      return axiosClient.post('/add-user', UserData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
  
    addTutorial : async (formData) => {
    
          return  await axiosClient.post(`/add-tutorial`, formData, {
              headers: {
                  
                  'Content-Type': 'multipart/form-data',
              },
          });
  },
  
  
  addCategory : async (formData) => {
    
    return  await axiosClient.post(`/add-category`, formData, {
        headers: {
            
            'Content-Type': 'multipart/form-data',
        },
    });
  },
}
export default UserApi