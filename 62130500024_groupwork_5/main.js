const app = {
    data(){
        return{
            pics:[
                {name:"Rose LoveSickGirl",url:"./images/1.jpg",     like:false,showModal:false},
                {name:"Lisa LoveSickGirl",url:"./images/2.jpg",     like:false,showModal:false},
                {name:"Jennie LoveSickGirl",url:"./images/3.jpg",   like:false,showModal:false},
                {name:"Jisoo LoveSickGirl",url:"./images/4.jpg",    like:false,showModal:false},
                {name:"Rose HowYouLikeThat",url:"./images/h3.jpg",  like:false,showModal:false},
                {name:"Lisa HowYouLikeThat",url:"./images/h4.jpg",  like:false,showModal:false},
                {name:"Jennie HowYouLikeThat",url:"./images/h1.jpg",like:false,showModal:false},
                {name:"Jisoo HowYouLikeThat",url:"./images/h2.jpg", like:false,showModal:false}
            ],
            heart:[""],
            searchField:'',
            isSearch: true,
            
        }
    },
    computed:{
        picCount(){
            return this.pics.filter(n => n.like).length;
        },
        heartCount(){
            if(this.heart.length<1){
                this.heart.length=0;
                return this.heart;
            }
            return this.heart;
        },
        filteredList(){
            return this.pics.filter(pic => {
                return pic.name.toLowerCase().includes(this.searchField.toLowerCase())
              });
        },
    },
    methods:{
        likePic(text){
            const index = this.pics.findIndex(pic => pic.name == text)

            if(this.pics[index].like == false){
                this.heart.push("💖");
                this.pics[index].like = !this.pics[index].like;
            }else{
                this.heart.pop();
                this.pics[index].like = !this.pics[index].like;
            }
        },
        startSearch(){
            this.isSearch = !this.isSearch;
        },
        cancelSearch(){
            this.isSearch = !this.isSearch;
            this.searchField = '';
        },
        toggleModal(text){
            const index = this.pics.findIndex(pic => pic.name == text)
            this.pics[index].showModal = !this.pics[index].showModal;
          }
    }
};

Vue.createApp(app).mount('#app');