import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QUANTITY } from "./authActions";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    authenticated: localStorage.getItem('AUTHENTICATED') === 'true',
    loading: false,
    users: [],
    ingredients: [],
    roles:[],
    stocks: [],
    categories:[],
    produits:[],
    cartItems: [],
    commande:[],
    typecommande:[],
    typepaiment:[]
  };
  
  function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload,
          error: null  // Clear any previous errors
        };
        case ADD_TO_CART:
          const existingItemIndex = state.cartItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
          );
    
          if (existingItemIndex !== -1) {
            const updatedItems = state.cartItems.map((cartItem, index) =>
              index === existingItemIndex
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                    total: (cartItem.quantity + 1) * parseFloat(cartItem.prix)
                  }
                : cartItem
            );
            return {
              ...state,
              cartItems: updatedItems
            };
          } else {
            return {
              ...state,
              cartItems: [
                ...state.cartItems,
                { ...action.payload, quantity: 1, total: parseFloat(action.payload.prix) }
              ]
            };
          }
    
        case REMOVE_FROM_CART:
          return {
            ...state,
            cartItems: state.cartItems.filter((_, index) => index !== action.payload)
          };
    
        case UPDATE_ITEM_QUANTITY:
          const { index, quantity } = action.payload;
          if (quantity <= 0) {
            return {
              ...state,
              cartItems: state.cartItems.filter((_, i) => i !== index)
            };
          }
    
          const updatedCartItems = state.cartItems.map((item, i) =>
            i === index
              ? { ...item, quantity, total: quantity * parseFloat(item.prix) }
              : item
          );
    
          return {
            ...state,
            cartItems: updatedCartItems
          };
        case 'SET_CATEGORY':
        return {
          ...state,
          categories: action.payload,
          error: null  // Clear any previous errors
        };
        case 'type_paiment':
        return {
          ...state,
          typepaiment: action.payload,
          error: null  // Clear any previous errors
        };
        case 'CREATE_ORDER':
      return {
        ...state,
        commande: [...state.commande, action.payload],
        cartItems: [], // Clear the cart after order creation
      };
        case 'type_commande':
        return {
          ...state,
          typecommande: action.payload,
          error: null  // Clear any previous errors
        };
      case 'FETCH_USERS_FAILURE':
        return {
          ...state,
          error: action.error  // Store the error
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          authenticated: true,
        };
        case 'REGISTER_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          authenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          token: null,
          authenticated: false
        };
        case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
      case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
      case 'SET_ROLES':
      return {
        ...state,
        roles: action.payload,
        authenticated: true,
      };
      case 'SET_INGREDIENTS':
        return {
          ...state,
          ingredients: action.payload,
          error: null  // Clear any previous errors
        };
        case 'SET_STOCKS':
        return {
          ...state,
          stocks: action.payload,
          error: null  // Clear any previous errors
        };
        case 'SET_PRODUITS':
        return {
          ...state,
          produits: action.payload,
          error: null  // Clear any previous errors
        };
      default:
        return state;
    }
  }
  
  export default authReducer;
  