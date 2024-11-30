import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useProductStore = defineStore('product', () => {
    const productList = ref([
        {
            imgSrc : "https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            title: "Test Product",
            description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
            price: "16.00",
            category: "Rings"
        },
        {
            imgSrc : "https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            title: "Test Product",
            description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
            price: "16.00",
            category: "Rings"
        },
        {
            imgSrc : "https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            title: "Test Product",
            description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
            price: "16.00",
            category: "Rings"
        },
        {
            imgSrc : "https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            title: "Test Product",
            description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
            price: "16.00",
            category: "Rings"
        },
        {
            imgSrc : "https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            title: "Test Product",
            description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
            price: "16.00",
            category: "Rings"
        },
    
    ]);



    return { 
        productList,

     }
  })

