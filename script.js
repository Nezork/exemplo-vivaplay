document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

});

function generatePDF(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os valores do formulário
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const income = document.getElementById('income').value;

  // Cria um novo documento PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Adiciona conteúdo ao PDF
  doc.setFontSize(16);
  doc.text('Informações do Formulário', 10, 10);
  doc.setFontSize(12);
  doc.text(`Nome: ${name}`, 10, 20);
  doc.text(`Telefone: ${phone}`, 10, 30);
  doc.text(`E-mail: ${email}`, 10, 40);
  doc.text(`Renda Média: ${income}`, 10, 50);

  // Faz o download do PDF
  doc.save('formulario.pdf');
}