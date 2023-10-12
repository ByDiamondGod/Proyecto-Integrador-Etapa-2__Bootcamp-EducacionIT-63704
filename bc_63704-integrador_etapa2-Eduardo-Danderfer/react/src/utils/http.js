// CRUD

//! R:READ ALL = GET

export const get = async (url) => {

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
    console.error('found in GET http', error);
  }
}

//! C:CREATE = POST [62]

export const post = async (url, date) => {
  
    try {
    
        const config = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(date)
        }
    
        const response = await fetch(url, config)
    
        if (!response.ok) {
          throw new Error(`Error in fetch ${response.status} ${response.statusText}`)
        }
    
        const createItem = await response.json()
        return createItem
    
      } catch (error) {
        console.error('found in POST http', error);
      }
}
  

//! D:DELETE [70]

export const del = async (url, id) => {
  try {

    const config = {
      method: 'DELETE',
    }

    const urlFull = url + id
    console.log(urlFull);

    const response = await fetch(urlFull, config)

    if (!response.ok) {
      throw new Error(`Error in fetch ${response.status} ${response.statusText}`)
    }

    const deleteItem = await response.json()

    return deleteItem

  } catch (error) {
    console.error('found in DELETE http', error);
  }
}

//! U:UPDATE = PUT [75]

export const put = async (url, id, date) => {
  try {
    const config = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(date)
    }

    const urlFull = url + id

    const response = await fetch(urlFull, config)

    if (!response.ok) {
      throw new Error(`Error in fetch ${response.status} ${response.statusText}`)
    }

    const updateItem = await response.json()

    return updateItem

  } catch (error) {
    console.error('found in PUT http', error);
  }
}