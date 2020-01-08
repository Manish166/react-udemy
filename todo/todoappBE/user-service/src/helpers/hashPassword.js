import bcrypt from 'bcrypt';

const getHash = async (text) => {
    return hash = await bcrypt.hash(text, 12)
};

export default getHash;