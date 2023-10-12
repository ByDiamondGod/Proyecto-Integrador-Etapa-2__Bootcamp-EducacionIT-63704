import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get, post, del, put } from '../utils/http';

const ItemContext = createContext();

const url = 'http://localhost:8080/productos/';

const ItemProvider = ({ children }) => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        getItems();
    }, []);

    // CRUD = READ ALL (GET)

    const getItems = async () => {
        try {
            const items = await get(url);
            setItems(items);
        } catch (error) {
            console.error('Error found in getItems:', error);
        }
    };

    // CRUD = CREATE (POST)

    // se usara dentro del formulario
    const createItemContext = async newItem => {
        try {
            const createItem = await post(url, newItem);
            setItems([...items, createItem]);
        } catch (error) {
            console.error('Error found in createItemContext:', error);
        }
    };

    // CRUD = DELETE (DELETE)

    const deleteItemContext = async id => {
        try {
            const deleteItem = await del(url, id);
            console.log(deleteItem);
            const nuevaDB = items.filter(item => item.id !== id);
            setItems(nuevaDB);
        } catch (error) {
            console.error('Error found in deleteItemContext:', error);
        }
    };

    // CRUD = UPDATE (PUT) [80]

    const updateItemContext = async itemToUpdate => {
        try {
            const updateItem = await put(url, itemToUpdate.id, itemToUpdate);
            console.log(updateItem);
            const nuevaDB = items.map(item => item.id === itemToUpdate.id ? itemToUpdate : item);
            setItems(nuevaDB);
        } catch (error) {
            console.error('Error found in updateItemContext:', error);
        }
    }

    const data = { items, createItemContext, deleteItemContext, updateItemContext }; // consumir informacion del CRUD

    return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

ItemProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ItemProvider };
export default ItemContext;
