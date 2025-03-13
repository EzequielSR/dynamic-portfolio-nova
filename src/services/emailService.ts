
import emailjs from '@emailjs/browser';

// EmailJS credentials
const SERVICE_ID = "service_fg6jvzn";
const TEMPLATE_ID = "template_k90m7vo";
const PUBLIC_KEY = "dLmNKNEVUM3RUXzG-"; // Public key is ok to be exposed in client-side code

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Initialize EmailJS with the public key
    emailjs.init(PUBLIC_KEY);
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "ezequieldesr@gmail.com",
      }
    );

    console.log('Email sent successfully:', response.status, response.text);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
