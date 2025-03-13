
import emailjs from '@emailjs/browser';

// EmailJS credentials
const SERVICE_ID = "service_f0u5kzm";
const TEMPLATE_ID = "template_kk2y0wp";
const PUBLIC_KEY = "F9qm_B1L8tqhKfz-R8"; // Chave pública completa

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

    console.log('SUCCESS!', response.status, response.text);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
