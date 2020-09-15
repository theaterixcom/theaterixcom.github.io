// Defines the API endpoint.
const api = 'api/posts.json';

new Vue({
    el: "#app",
    data: {
        posts: [],
        limit: 10,
        busy: false
    },
    methods: {
        loadMore() {

            // Sets the application state to "busy".
            this.busy = true;

            // Sends a get request to the API endpoint.
            axios.get(api).then(response => {
                const append = response.data.slice(
                    this.posts.length,
                    this.posts.length + this.limit
                );
                this.posts = this.posts.concat(append);
                this.busy = false;
            });
        }
    },

    created() {
        // Load the items when the instance was created.
        this.loadMore();
    }

});

// Animate on scroll library initialization
AOS.init();