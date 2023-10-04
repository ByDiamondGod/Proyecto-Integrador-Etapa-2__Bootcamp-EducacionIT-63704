export const get = async (url)  => {

  const config = {
    method: 'GET'
  }

  try {
    const response = await fetch(url, config)  
    
    if (!response.ok) {
      throw new Error(`Error in fetch ${response.status} ${response.statusText}`) 
    }

    const items = await response.json()
    return items

  } catch (error) {
    console.log('found in GET http', error);
  }
}