export async function sendEmail(data: FormData) {
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    
    const responseData = await response.json();
    alert('Mensagem enviada');
  } catch (error) {
    alert("Error, por favor tente novamente");
  }
}