import bodyParser from "body-parser"
import cors from "cors"
import express, { Request, Response } from "express"
import { prismaClient } from "./middlewares/connection"

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Server is runing...");
});

app.get('/student', function (request: Request, response: Response) {
    try {
        prismaClient.student.findMany().then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({
            error: error
        })
    }
})

app.get('/teacher', function (request: Request, response: Response) {
    try {
        prismaClient.teacher.findMany().then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({ error: error })
    }
})

app.get('/course', function (request: Request, response: Response) {
    try {
        prismaClient.course.findMany().then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({ error: error })
    }
})

app.get('/user', function (request: Request, response: Response) {
    try {
        prismaClient.user.findMany().then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({ error: error })
    }
})

app.get('/user/name', function (request: Request, response: Response) {
    const name = String(request.query.name)
    try {
        prismaClient.user.findMany({
            where: {name: name}
        }).then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({ error: error })
    }
})

app.get('/user/email', function (request: Request, response: Response) {
    const email = String(request.query.email)
    try {
        prismaClient.user.findMany({
            where: {email: email}
        }).then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({ error: error })
    }
})

app.get('/user/cpf', function (request: Request, response: Response) {
    const cpf = String(request.query.cpf)
    try {
        prismaClient.user.findMany({
            where: {cpf: cpf}
        }).then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({ error: error })
    }
})

app.get('/user/skills', function (request: Request, response: Response) {
    const skills = String(request.query.skills)
    try {
        prismaClient.user.findMany({
            where: {skills: skills}
        }).then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({ error: error })
    }
})

app.get('/user/certifications', function (request: Request, response: Response) {
    const certifications = String(request.query.certifications)
    try {
        prismaClient.user.findMany({
            where: {certifications: certifications}
        }).then(
            (r: any) => response.send(r)
        )
    } catch (error: any) {
        response.status(501).json({ error: error })
    }
})

app.post('/student', function (request: Request, response: Response) {
    const { user_id, name } = request.body
    prismaClient.student.create({
        data: {
            name: name,
            user_id: user_id
        }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

app.post('/teacher', function (request: Request, response: Response) {
    const { user_id, name } = request.body
    prismaClient.teacher.create({
        data: {
            name: name,
            user_id: user_id
        }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

app.post('/course', function (request: Request, response: Response) {
    const { title } = request.body
    prismaClient.course.create({
        data: {
            title: title,
        }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

app.post('/user', function (request: Request, response: Response) {
    const { email, phone, gender, skills, birthday, cpf, certifications, name } = request.body
    console.log(request.body)
    prismaClient.user.create({
        data: {
            email: email,
            phone: phone,
            gender: gender,
            skills: skills,
            name: name,
            certifications: certifications,
            birthday: birthday,
            cpf: cpf
        }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => {
            console.log("ERROR -->", r)
            response.status(501).json({
                error: r
            })
        }
    )
})

app.put('/student', function (request: Request, response: Response) {
    const { id, name } = request.body
    prismaClient.student.update({
        where: { id: id },
        data: {
            name: name
        }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

app.put('/teacher', function (request: Request, response: Response) {
    const { id, name } = request.body
    prismaClient.teacher.update({
        where: { id: id },
        data: {
            name: name
        }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

app.put('/course', function (request: Request, response: Response) {
    const { id, title } = request.body
    prismaClient.course.update({
        where: { id: id },
        data: {
            title: title
        }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

// app.put('/user', function (request: Request, response: Response) {
//     const { id, password } = request.body
//     prismaClient.user.update({
//         where: { id: id },
//         data: {
//             password: password
//         }
//     }).then(
//         (r: any) => response.json(r)
//     ).catch(
//         (r: any) => response.status(501).json({
//             error: r
//         })
//     )
// })

app.delete('/student', function (request: Request, response: Response) {
    const { id } = request.body
    prismaClient.student.delete({
        where: { id: id }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

app.delete('/teacher', function (request: Request, response: Response) {
    const { id } = request.body
    prismaClient.teacher.delete({
        where: { id: id }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

app.delete('/course', function (request: Request, response: Response) {
    const { id } = request.body
    prismaClient.course.delete({
        where: { id: id }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})

app.delete('/user', function (request: Request, response: Response) {
    const { id } = request.body
    prismaClient.user.delete({
        where: { id: id }
    }).then(
        (r: any) => response.json(r)
    ).catch(
        (r: any) => response.status(501).json({
            error: r
        })
    )
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("🚀 Server ready...")
})