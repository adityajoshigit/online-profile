const sendEmail = ({
  to,
  from,
  subject,
  body,
  cc,
  bcc,
}) => {
  return new Promise((resolve, reject) => {
    // call send email utility
    // on success call resolve
    // on failure call reject
    console.log(to);
    console.log(from);
    console.log(subject);
    console.log(body);
    resolve();
  });
};

export { sendEmail };
