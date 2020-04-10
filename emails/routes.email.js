const MailConfig = require('../services/email');
const hbs = require('nodemailer-express-handlebars');
const smtpTransport = MailConfig.SMTPTransport;

exports.routesConfig = function (app) { 
  app.get('/email/template', (req, res, next) => {
    MailConfig.ViewOption(smtpTransport,hbs);
    const HelperOptions = {
      from: '"Tariqul islam" <tariqul.islam.rony@gmail.com>',
      to: 'tariqul@itconquest.com',
      subject: 'Hellow world!',
      template: 'test',
      context: {
        name:"tariqul_islam",
        email: "tariqul.islam.rony@gmail.com",
        address: "52, Kadamtola Shubag dhaka"
      }
    };
    smtpTransport.sendMail(HelperOptions, (error,info) => {
      if(error) {
        console.log(error);
        res.json(error);
      }
      console.log("email is send");
      console.log(info);
      res.json(info)
    });
  });
 }