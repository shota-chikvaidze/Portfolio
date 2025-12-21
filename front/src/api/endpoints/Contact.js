import axios from '../axios'

export const postContact = async (postForm) => {

    const res = await axios.post('/contact/post-contact', postForm)
    return res.data

}

export const deleteContact = async (id) => {

    const res = await axios.delete(`/contact/delete-contact/${id}`)
    return res.data

}

export const getContact = async () => {

    const res = await axios.get('/contact/get-contact')
    return res.data.contact

}