
import emailjs from '@emailjs/browser';

// EmailJS credentials
const SERVICE_ID = "service_fg6jvzn";
const TEMPLATE_ID = "template_k90m7vo";
const PUBLIC_KEY = "dLmNKNEVUM3RUXzG-"; 

// Initialize EmailJS with the public key
emailjs.init(PUBLIC_KEY);

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Create template parameters object with all required fields
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: "Ezequiel", // Adding recipient name
      to_email: "ezequieldesr@gmail.com", // Ensuring recipient email is present
      reply_to: data.email, // Adding reply-to field
    };
    
    console.log("Enviando email com os parâmetros:", templateParams);
    
    // Send email with all required parameters
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log('Email enviado com sucesso:', response.status, response.text);
    return response;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw error;
  }
};
