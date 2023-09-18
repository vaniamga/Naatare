    <script>
    export default {
    data() {
        return {
        buttonText: "Conoce mas",
        clicked: false
        };
    },
    
    };
    </script>
    <template>
        <button
        class="custom-btn"
        @click="handleClick"
        >
        {{ buttonText }}
        </button>
    </template>
    
    <style scoped>
    .custom-btn {
        background-color: #EBE741; 
        color: #000;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out; 
    }
    
    .custom-btn:hover {
        background-color: #9D1C9E; 
    }
    
    .custom-btn:focus {
        outline: none; 
    }
    </style>