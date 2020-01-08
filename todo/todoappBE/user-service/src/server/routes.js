import {User} from "../db/models/user"
import generateUUID from '../helpers/generateUUID'
import getHash from "../helpers/hashPassword"

const setUpRoutes = app =>{
    app.get("/users", async(req, res, next) => {
        const users=await User.findAll();
        return res.json(users)
    })

    app.post("/users", async (req, res, next) => {
        if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password){
            return next(new Error("invalid body"))
        };
        try {
            const newUser = await User.create({ 
                id : generateUUID(),
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                passwordHash : await getHash(req.body.password)
            })
            return res.status(201).send(newUser)
        }
        catch(e) {
            console.log(error);
            return next(e)
        };
    })
}

export default setUpRoutes