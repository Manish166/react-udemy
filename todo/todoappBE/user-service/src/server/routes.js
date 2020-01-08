import {User} from "../db/models/user"
import uuid from '../helpers/generateUUID'
import getHash from "../helpers/hashPassword"
const setUpRoutes = app =>{
    app.get("/users", async(req, res, next) => {
        const users=await User.findAll();
        return res.json(users)
    })

    app.post("/users", async (req, res, next) => {
        if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.passwordHash){
            return next(new Error("invalid body"))
        };
        const hash = getHash(req.body.passwordHash);
        try {
            const newUser = await User.create({
                id : uuid,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                passwordHash : hash

            })
            return res.status(201).send(newUser)
            // .then((user)=>{
            //     res.status(201).send(user)
            // })
        }
        catch(e) {
            console.log(error);
            return next(e)
        };
    })
}

export default setUpRoutes