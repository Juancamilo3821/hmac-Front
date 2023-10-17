import bcrypt from 'bcrypt';

export const salt =async()=>{
    const salt = await bcrypt.genSalt(10);
    return salt;
}

export const hashing = async(password, salt)=>{
    const hash = await bcrypt.hash(password, parseInt(salt));
    return hash;
}