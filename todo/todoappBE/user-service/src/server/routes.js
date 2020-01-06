const setUpRoutes = app =>{
    app.post("/users", async(req, res, next) => {
        if (req.body.email||req.body.password || req.body.firstName || req.body.lastName){
            return next(new Error("pass on the reuired fields"))
        }
    })
}

export default setUpRoutes