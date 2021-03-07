import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    }
    catch (err) {
        res, status(404).json({ message: err.message })
    }

}


export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
    if (!Mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No Post With That ID')
    }
    res.json(updatePost)
}