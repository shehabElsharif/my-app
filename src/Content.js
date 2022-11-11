import ItemList from './ItemList';

const Content = ({items, setItems, storedItems}) => {

    const handleCheck = (id) => {
        const listItems = storedItems.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = storedItems.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
    return (
        <main>
             {storedItems.length ? (
                <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            
            
            />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )} 
            
        </main>
    )
}

export default Content
