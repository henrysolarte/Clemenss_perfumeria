    class emailService  {
        enviar(email, mensaje) {
            console.log("Sending email to" + email + " with message: " + mensaje);
        }
    }

    class smsService {
        enviar(numero, mensaje) {
            console.log("Sending SMS to " + numero + " with message: " + mensaje);
        }
    }

    let emailService = new emailService();
    emailService.enviar("hsolarte@sgc.gov.co", "HOla, este es un mensaje de prueba");


    class UserController {
        constructor( smsServie) {
            this.notificador = new emailService            
        }
        notificarUsuraio(email, mensaje) {
            this.notificador.enviar(email, mensaje);
        }   
    }

    let UserController = new UserController();
       UserController.notificarUsuraio("ANDRES@HOTMAIL", "Hola, este es un mensaje de prueba para el usuario");