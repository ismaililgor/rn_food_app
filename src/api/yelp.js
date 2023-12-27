import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rBWjYx_WQkpnei4ro0yxGYw8TeJQtO1crhVPC5nUH_O-UF6ky_ARwuSf6ZFzDdfWQ3_cnucrBWWjCt9CGAgizKEQR0A6iXCw3F1LUrNL5MLWYY5ZimzvEACCiJ1rZXYx'
    }
})

// yelp.get('/search')