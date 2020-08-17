const Post = require('../models/Post');
//const sharp = require('sharp');
//const path = require('path');
//const fs = require('fs');
module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },
    async delete(req, res) {
        await Post.deleteOne({ _id: req.params.id }, (err) => {

            if (err) return res.status(400).json({
                error: true,
                message: "Error: Filme não foi apagado com sucesso!"
            });


            return res.json({
                error: false,
                message: "Filme apagado com sucesso!"
            });
        });
    },
    async store(req, res) {
        const { name, description, genero } = req.body;
       
        const post = await Post.create({
            name,
            description,
            genero
        });
        return res.json(post);
    }
};