import axios from '../axios'

export const postContact = async (postForm) => {

    const res = await axios.post('/contact/post-contact', postForm)
    return res.data.contact

}

export const getContact = async (postForm) => {

    const res = await axios.get('/contact/get-contact', postForm)
    return res.data.contact

}