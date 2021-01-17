export const getAllBooks = async () => {
    try {
        const res = await fetch(`http://localhost:9000/api`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
};



