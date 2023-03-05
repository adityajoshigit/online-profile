const EMAILJS_PUBLIC_KEY = "eSiKRxI75N8U__SNG";
const EMAILJS_SERVICE_ID = "service_iu6lm5r";
const EMAILJS_TEMPLATE_ID = "template_91lq7uj";

emailjs.init(EMAILJS_PUBLIC_KEY);

const emailUtil = {
  sendEmail: ({ from_name, reply_to, message }) => {
    return new Promise((resolve, reject) => {
      // call send email utility
      // on success call resolve
      // on failure call reject
      console.log(from_name);
      console.log(reply_to);
      console.log(message);
      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name,
            reply_to,
            message,
          },
          EMAILJS_PUBLIC_KEY
        )
        .then(() => resolve(true))
        .catch(() => reject(false));
    });
  },
};

// export { sendEmail };
