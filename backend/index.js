const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function main() {

    // ... you will write your Prisma Client queries here

    //route POST Signin -- Envoi du formulaire d'inscription à la bdd
    app.post("/register", async (req, res) => {
        try {
            res.body = await prisma.user.create({
                data: {
                    lastname: req.body.lastName,
                    firstname: req.body.firstName,
                    email: req.body.email,
                    password: req.body.password
                }
            });
            
            res.status(200).send({"message": "Utilisateur créé !"});
        }
        catch (err) {
            res.status(500).send(err);
        }
    });

    //route POST Login -- Requête vers la bdd
    app.post("/login", async (req, res) => {
        const { email } = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email
            },
          })
          res.status(200).send({"message": "Utilisateur connecté !"});
          console.log(user);
    });


    //route POST pour créer un post(forum) -- Envoi du formulaire d'inscription à la bdd
    app.post("/forum", async (req, res) => {
        const { title, comment } = req.body;
        const postInfo = await prisma.post.create({
            data: {
                title: title,
                post: comment
            },
        });
        res.status(200).send({"message": "Message envoyé !"});
        console.log(postInfo);
    });

    //route GET pour afficher les x derniers post(forum) -- Requête vers la bdd
    app.get("/forum", async (req, res) => {
        const lastPost = await prisma.post.findMany({
            take: 5,
            orderBy: {
                id: 'desc',
            },
        });
        res.json(lastPost);
        console.log(lastPost);
    });

    //route GET pour afficher les users -- Requête vers la bdd
    app.get("/users", async (req, res) => {
        const allUsers = await prisma.user.findMany({
            take: 10,
        });
        res.json(allUsers);
        console.log(allUsers);
    });

    //route GET pour afficher UN post(forum) -- Requête vers la bdd
    app.get("/:id", async (req, res) => {
        const id = req.params.id;
        const thisPost = await prisma.post.findUnique({
            where: {
                id: id,
            },
        });
        res.json(thisPost);
        console.log(thisPost);
    });

    //route DELETE pour supprimer UN post(forum) -- Requête vers la bdd
    app.delete("/:id", async (req, res) => {
        const id = req.params.id;
        const deletePost = await prisma.post.findUnique({
            where: {
                id: id,
            },
        });
        res.json(deletePost);
        console.log(deletePost);
    });

    //route PUT pour modifier UN post(forum) -- Requête vers la bdd
    app.put("/:id", async (req, res) => {
        const { id, title, post } = req.body;
        const updatePost = await prisma.post.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                post: post,
            },
        })
        res.json(updatePost);
        console.log(updatePost);
    });
}
  
  
main()

.catch((e) => {

    throw e

})

.finally(async () => {

    await prisma.$disconnect()

})




app.listen(5000, () =>{
    console.log("Listening on port 5000!");
})

module.exports = app;