const register = async (req,res) => {
    console.log(req.body);
    // res.send("Hello from controller");
    res.json(req.body);
}

export {register};