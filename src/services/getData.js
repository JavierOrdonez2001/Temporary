const getData = async (apiURL) => {
    try{
      const response = await fetch(apiURL)
      const data = await response.json()
      return data
    }catch (error){
      console.error(error.message)
    }
}

export { getData }