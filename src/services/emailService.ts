
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
    // Preparar os parâmetros para o template
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: "ezequieldesr@gmail.com",
    };
    
    console.log("Enviando email com os parâmetros:", templateParams);
    
    // Enviar o email usando a API correta do EmailJS
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
