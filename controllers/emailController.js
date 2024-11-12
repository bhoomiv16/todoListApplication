import transporter from "../middleware/email.js"

export let renderContact=async (req,res,next)=>{
    try {
        res.status(200).render("contact.ejs")
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }

}

export let sendEmail=(req, res,next) => {
    // const { to, subject, text } = req.body;
  
    const mailOptions = {
      from: 'your-email@gmail.com', // Your email address
      to:req.body.To,                           // Recipient's email address
      subject:req.body.subject,                      // Email subject
      text:req.body.text                          // Email body
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully!');
      }
    });
  }