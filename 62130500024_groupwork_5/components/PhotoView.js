app.component('photo-view', {
    props: {
        pic: Object,
    },
    template:
        /*html*/
        `
    <div v-if="pic.showModal"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-black bg-opacity-95">
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <!--content-->
            <div
                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <!--header-->
                <div class="flex items-start justify-center pt-5  text-center space-x-4">
                    <h3 class="text-3xl font-semibold text-pink-300">
                        {{pic.name}}
                    </h3>
                    <button v-on:click="switchModal(pic.name)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            class="bg-transparent text-black w-8 h-8 block outline-none focus:outline-none fill-current text-pink-300 cursor-pointer hover:text-white transition duration-500">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 
                             12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 
                            1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z" />
                        </svg>
                    </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto mx-auto w-9/12">
                    <img class="" v-bind:src="pic.url">
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {}
    },
    methods: {
        switchModal(name) {
            this.$emit('switchModal', name);
        }
    }
});