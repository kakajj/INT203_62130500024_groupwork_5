app.component('photo-search', {
    props: {
        search:Boolean,
        sField:String,
    },
    emits: ['update:sField'],
    template:
    /*html*/  
    `
    <div class="text-center bg-pink-100 w-8/12 mx-auto transform transition duration-100 hover:scale-105">
        <span v-if="search" class="material-icons py-1 w-full" @click="handleSearch">search</span>
        <div v-else class="w-full flex flex-row justify-center py-1">
                <input class=" border-2 w-full focus:outline-none focus:ring focus:border-black text-3xl"
                 type="text" :value="sField" @input="$emit('update:sField',$event.target.value)">
                <button @click="handleCancleSearch"
                    class="material-icons hover:text-pink-500 transition duration-500">cancel</button>
        </div>
    </div>
    `,
    data() {
        return {
            
        }
    },
    methods: {
        handleSearch(){
            this.$emit('startSearch');
        },
        handleCancleSearch(){
            this.$emit('cancelSearch');
        }
    }
});