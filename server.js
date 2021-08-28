const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const connectDB = require('./config/db'); // Connects to MongoDB database
connectDB();

app.set("view engine","ejs");
app.use(express.static("public")); // Allows the use of files present in public directory

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({extended: false}));

const Booking = require('./models/Booking');
const course = require('./models/Course');

app.get('/createCourses',async (req,res)=>{
    var c1 = new course({courseName:"DSA",startTime:1400,endTime:1500,total:60,available:60});
    await c1.save();

    var c1 = new course({courseName:"OOPS",startTime:1400,endTime:1500,total:60,available:60});
    await c1.save();

    var c1 = new course({courseName:"DBMS",startTime:1330,endTime:1430,total:60,available:60});
    await c1.save();

    var c1 = new course({courseName:"Operating System",startTime:1100,endTime:1200,total:60,available:60});
    await c1.save();

    res.redirect('/');
})

app.get('/',async (req,res)=>{
    const subjects = await course.find({});
    res.render("home",{subjects:subjects});
})

app.get('/clashed/:user',async (req,res)=>{
    const user = await course.findOne({studentName:req.params.user});
    res.render('clash',{courses:user.course});
})

app.post('/book',async (req,res)=>{
    const user = await Booking.findOne({studentName:req.body.studentName});
    if(user != null ){
        for(var i=0;i<(user.course).length;i++){
            if(!(user.course[i].startTime>req.body.endTime || user.course[i].endTime<req.body.startTime)){
                req.redirect(`/clashed/${req.body.studentName}`);
            }
        }
        user.course.push({
            courseName:req.body.courseName,
            startTime:req.body.courseName,
            endTime:req.body.endTime
        });
        await user.save();
    }else{
        const book =await new Booking({studentName:req.body.studentName});
        book.course.push({
            courseName:req.body.courseName,
            startTime:req.body.courseName,
            endTime:req.body.endTime
        });
        await book.save();
    }
    const course = await course.findOne({courseName:req.body.courseName});
    course.available = course.available - 1;
    await course.save();
});

app.post('/delete',async (req,res)=>{
    const p1 = await Booking.findOne({studentName:req.body.studentName});
    if(p1 != NULL){
        await Booking.updateOne(
            {studentName:req.body.studentName},
            {$pull:{course:{courseName:req.body.courseName}}}
        )
        const course = await course.findOne({courseName:req.body.courseName});
        course.available = course.available + 1;
        await course.save();
    }
    res.redirect('/');
})

const PORT=process.env.IP || 5000;
app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`);
});