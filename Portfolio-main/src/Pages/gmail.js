// import nodemailer from 'nodemailer';
// Import Nodemailer modules conditionally

// Create a transporter with your email configuration

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'mohanprasad.naraganti@gmail.com',
//     pass: "bcvm tzyh yrgk kzjc"
//   },
// });
// const mailOptions = {
//   from: "your_email@gmail.com",
//   to: "recipient@example.com",
//   subject: "Hello from Nodemailer",
//   text: "This is a test email sent using Nodemailer.",
// };
var postmark = require("postmark");
var client = new postmark.Client("bcvm tzyh yrgk kzjc");



function sentdetails(email, firstName, lastName, message, address) {
  // Define your email options
  const mailOptions = {
    from: email,
    to: 'mohanprasad.naraginti@gmail.com',
    subject: 'Portfolio Contact Form',
    text: "Hello , " + firstName + " " + lastName + " informing to " + message + "\n Address: " + address,
  };
  return client.sendEmail({
    "From": email, 
    "To": "mohanprasad.naraginti@gmail.com", 
    "Subject": "Test", 
    "TextBody": "Test Message"
});

  // Send the email
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
}

// Export the function using ES6 export syntax
export { sentdetails };
