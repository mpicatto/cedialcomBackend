const server = require('express').Router();
nodemailer = require('nodemailer'); 
//mailer route
server.post('/',(req,res)=>{
    console.log(req.body)

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'',
            pass:''

        }
      });

    let mailOptions = {
        from: 'cedialcom.web@gmail.com',
        to: 'mauropicatto@gmail.com',
        subject: 'Consulta desde Webpage',
        text: 'Nombre: '+req.body.name+'.\n Email: '+req.body.email+'.\nMensaje:\n'+req.body.message
        }; 
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        }); 

        res.send('test')
});

module.exports=server