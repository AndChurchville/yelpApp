const apiKey = '5VvDvjcr50F8kA8-GLgklJtmtmtSXdoIwNiNnIgMNjuBF09NGLK6BIow5FTyRGHu0o_mXDfU8H15POLh9clAmob2JF9H_OVnzJyx_Y7iakS9b0Pi3B7TQO3b3B7pXXYx';
const Yelp = {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers:{Authorization: `Bearer ${apiKey}`}}).then(response => {return response.json()}).then(jsonResponse => {
            if(jsonResponse.businesses) {
                console.log(jsonResponse);
                return jsonResponse.businesses.map(business => {
                  return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city:business.location.city,
                    state:business.location.state,
                    zipCode:business.location.zip_code,
                    category:business.categories[0].title,
                    rating:business.rating,
                    reviewCount:business.review_count,
                  }
                    
                });
            }
        });
    },
};

export default Yelp;
