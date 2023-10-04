import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from '../utils/http';

const ItemContext = createContext();

const url = 'http://localhost:8080/productos/';

const ItemProvider = ({ children }) => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        try {
            const items = await get(url);
            setItems(items);
        } catch (error) {
            console.log('Error found in getItems:', error);
        }
    };

    const data = { items };

    return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

ItemProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ItemProvider };
export default ItemContext;
