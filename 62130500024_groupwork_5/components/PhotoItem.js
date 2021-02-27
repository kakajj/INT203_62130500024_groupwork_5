app.component('photo-item', {
    props: {
        pic: Object,
    },
    template:
        /*html*/
        `
                    <div class="bg-white rounded h-full text-grey-darkest no-underline shadow-md w-10/12 mx-auto
                                transform transition duration-500 hover:scale-105">
                        <h1 class="text-2xl py-1">-{{pic.name}}-</h1>
                        <img class="block rounded-b object-cover h-96 w-full" v-bind:src="pic.url">
                        <div class="flex flex-row justify-start content-center space-x-4 p-2 w-9/12">
                            <svg v-if="pic.like" class="w-2/12 fill-current text-pink-500 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="likePic(pic.name)">
                                <path
                                    d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                            </svg>
                            <svg v-else
                                class="w-2/12 fill-current hover:text-pink-500 transition duration-500 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="likePic(pic.name)">
                                <path
                                    d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                            </svg>
                            <svg class="w-2/12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                @click="switchModal(pic.name)">
                                <path
                                    d="M14 9l-2.519 4-2.481-1.96-5 6.96h16l-6-9zm8-5v16h-20v-16h20zm2-2h-24v20h24v-20zm-20 6c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.896 2-2 2s-2-.895-2-2z" />
                            </svg>
                        </div>
                    </div>             
    `,
    data() {
        return {}
    },
    methods: {
        likePic(name) {
            this.$emit('likePic', name);
        },
        switchModal(name) {
            this.$emit('switchModal', name);
        }
    }
});