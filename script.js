

 const getDataFromApi = async () => {



	const res = await fetch(
		"https://api.pexels.com/v1/search?query=nature",
		{
			headers: {
				Authorization: PEXELS_API_KEY,
			},
		}
	);
	const responseJson = await res.json();
	// return responseJson.photos;
	 console.log(responseJson)
};

console.log(getDataFromApi());


