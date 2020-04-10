const MailConfig = require('../services/email');
const hbs = require('nodemailer-express-handlebars');
const smtpTransport = MailConfig.SMTPTransport;

exports.routesConfig = function (app) { 
  app.post('/email/password', (req, res, next) => {
    MailConfig.ViewOption(smtpTransport,hbs);
    const recoveryObject = {
      name: req.body.username,
      newPassword: req.body.newPassword
    }
    const HelperOptions = {
      from: '"prompter.me@noreply" <info@prompter.me>',
      to: 'zilahi@gmail.com',
      subject: 'demo',
      template: 'forgotten_pw',
      context: {
        name: recoveryObject.name,
        newPassword: recoveryObject.newPassword
      }
    };
    smtpTransport.sendMail(HelperOptions, (error,info) => {
      if(error) {
        console.log(error);
        res.json(error);
      }
      res.json({
        isSuccess: true,
        ...info,
      })
    });
  });
 }