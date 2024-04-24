const express = require("express");
const app = express();
const hbs = require("hbs");
const port =process.env.PORT || 3000;

require("./db/conn");
const register =require("./models/register");

const static_path = path.join(__dirname, "../public")
const tamplate_path = path.join(__dirname, "../tamplate/views");
const partials_path = path.join(__dirname, "../tamplate/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use (express.static(static_path));
app.set("view engine","hbs");
app.set("views",tamplate_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=> {
    res.render("index.hbs")
});

app.get("/register",(req,res)=>{
    res.render("register");

});
app.post("/register",async(req, res) =>{
    try{
        console.log(req.body.firstname);
        res.send(req.body.firstname);
        if(password === cpassword){
            const registeremployee =new register({
                firstname:req.body.firstname,
                lastname:req.body.email,
                phone:req.body.phone,
            })
        const registered =await registeremployee.save();
        res.status(201).render("index");
        }else{
            res.send("password are not matching")
        }

    }catch(error){
        res.status(400).send(error);
    }
})

app.listen(port,() => {
    console.log(`server is running at port no ${port}`);
});