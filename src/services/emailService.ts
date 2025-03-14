
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
    // Create a form element to use with emailjs
    const form = document.createElement('form');
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: "ezequieldesr@gmail.com",
    };
    
    // Add fields to the form
    Object.entries(templateParams).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    });
    
    console.log("Enviando email com os parâmetros:", templateParams);
    
    // Use sendForm instead of send for better compatibility
    const response = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form,
      PUBLIC_KEY
    );

    console.log('Email enviado com sucesso:', response.status, response.text);
    return response;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw error;
  }
};
