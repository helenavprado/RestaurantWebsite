const apiKey =
  "Q_o1DAIUnGqrQoiKf4G9H8tWjsNMrxH7EyyKkEyaizkzQRHE4V6PtNHk-uO7aQ8LEMVliqzJQr8sZn0bHQq4OKvOQwLXcSWfdPvKgN_CPTH1dzMgXzgKx21ssHVPY3Yx";
// const businessEndPoint = "https://api.yelp.com/v3/businesses/search";
// const businessQuery = `?term=${term}&location=${location}&sort_by=${sortBy}`;

// const businessFetch = businessEndPoint + businessQuery;

let yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default yelp;
