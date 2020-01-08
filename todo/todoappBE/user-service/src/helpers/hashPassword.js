import bcrypt from 'bcrypt';

const getHash = async (text) => {
    try{
        return await bcrypt.hash(text, 12)
    } catch(e) {
        console.log(error);
        return next(e)
    }
};

export default getHash;