const express = require('express');
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());


const { PrismaClient } = require('@prisma/client');
const { userInfo } = require('os');
const prisma = new PrismaClient()


async function main() {

    // ... you will write your Prisma Client queries here

    //route POST Signin -- Envoi du formulaire d'inscription à la bdd
    app.post("/register", async (req, res) => {

        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
        });
        if(!newUser){
            res.status(500).json({ error })
          } else {
            res.status(200).send({"message": "Utilisateur créé !"});
          }
/*           console.log(newUser); */
    });

    //route POST Login -- Requête vers la bdd
    app.post("/login", async (req, res) => {
        const { email, password } = req.body;
        const userExist = await prisma.user.findUnique({
            where: {
                email
            },
          })
          if(!userExist){
            res.status(401).json({ error: "Utilisateur non trouvé !" })
          } else {
            try{
                if ( await bcrypt.compare(password, userExist.password)) {

                    const token = jwt.sign(
                        { userId: userExist.id },
                        'TOKEN_SECRET',
                        { expiresIn: "12h" }
                    )
                //reponse du serveur avec le userId et le token
                    res.status(201).json({
                        userInfo: {
                            userId: userExist.id,
                            userEmail: userExist.email,
                            userName: userExist.name
                        },
                        token,
                    })
                } else {
                    res.send("Incorrect Password");
                }
            } catch {
                return res.status(500).send('Some Error has occurred');
            }
          };
          console.log(userExist);
    });


    //route POST pour créer un post(forum) -- Envoi du formulaire d'inscription à la bdd
    app.post("/forum", async (req, res) => {
        const { title, content, authorEmail } = req.body
        const result = await prisma.post.create({
          data: {
            title,
            content,
            author: { connect: { email: authorEmail } },
          },
        })
        res.json(result)
      })

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
    app.get('/admin/users', async (req, res) => {
        const users = await prisma.user.findMany({
            take: 10,
        })
        res.json(users)
      })
      
    //route GET pour afficher un user -- Requête vers la bdd
    app.get('/admin/users', async (req, res) => {
        const users = await prisma.user.findUnique({
            where: {
                id: userInfo.id
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })
        res.json(users)
      })

    //route GET pour afficher UN post(forum) -- Requête vers la bdd
    app.put('/post/:id/edition', async (req, res) => {
        const { id } = req.params
        const { title, content } = req.body
        try {
          const post = await prisma.post.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
            },
          })
      
          res.json(post)
        } catch (error) {
          res.json({ error: `Post with ID ${id} does not exist in the database` })
        }
      })

    //route DELETE pour supprimer UN post(forum) -- Requête vers la bdd
    app.delete(`/post/:id`, async (req, res) => {
        const { id } = req.params
        const post = await prisma.post.delete({
          where: {
            id: Number(id),
          },
        })
        res.json(post)
      })

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

    //route POST pour créer une Bio (profil) -- Envoi du formulaire d'inscription à la bdd
    app.post("/profil", async (req, res) => {
      const { user, content } = req.body
      const result = await prisma.profile.create({
        data: {
          user,
          bio : content
        },
      })
      res.json(result)
    })

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