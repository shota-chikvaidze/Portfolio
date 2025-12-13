import axios from "axios";
import adminAxios from '../axios'

export const postContact = async (postForm) => {

    const res = await axios.post('http://localhost:5000/api/contact/post-contact', postForm)
    return res.data.contact

}

export const getContact = async (postForm) => {

    const res = await adminAxios.get('http://localhost:5000/api/contact/get-contact', postForm)
    return res.data.contact

}