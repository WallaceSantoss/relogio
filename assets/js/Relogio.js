function hora() {
    const hora = document.getElementById('horas');
    const Time = new Date();
    const Horas = Time.getHours().toString().padStart(2, '0');
    const Minutos = Time.getMinutes().toString().padStart(2, '0');
    const Segundos = Time.getSeconds().toString().padStart(2, '0');
    const AmPm = Horas >= 12 ? 'PM' : 'AM';
    const HoraAtual = `${Horas}:${Minutos}:${Segundos} ${AmPm}`;
    hora.innerHTML = HoraAtual;
}
 
hora();
setInterval(hora, 1000);

function mudaFundo() {
    const fundo = document.getElementsByTagName('body')[0];
    const Time = new Date();
    const Horas = Time.getHours();

    if (Horas >= 6 && Horas < 12) {
        fundo.style.backgroundImage = 'url(assets/img/manha.jpg)';
    } else if (Horas >= 12 && Horas < 18) {
        fundo.style.backgroundImage = 'url(assets/img/tarde.jpg)';
    } else {
        fundo.style.backgroundImage = 'url(assets/img/noite.jpg)';
    }
}

mudaFundo();