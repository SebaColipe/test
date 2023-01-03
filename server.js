const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const download = require('./btn_descarga/script')


const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, './subidas')
    }, filename:(req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})



const upload = multer({storage});


const port = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("json spaces", 2);
app.set("protocol", "https")
//app.use(morgan("dev"));


app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get('/', (req, res) => {
    return res.send("This is the home page!");
});
app.get('/page', (req,res) => {
    //btn.download();
    
    return res.render("page.html",{
        title: "PAGINA"
    });
});
app.post('/subir', upload.single('file'), (req, res) =>{
    console.log(`Storage location i ${req.hostname}/${req.file.path}`);
    return res.send(req.file);
})

app.listen(PORT, () => console.log(`Server is up on port: http://localhost:${PORT}`));