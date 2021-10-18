
//defino las propiedaded del objecto "Usuario"
class Usuario {
    constructor() {
        this.TipodeUsuario;
        this.Nombre;
        this.Apellido;
        this.Correo;
        this.Celular;
        this.Contrasena;
        this.Reservas = new Array; //Este solo se va a usar para usuarios huespedes, aca van las reservas del usuario
        this.InmueblesCalificados = new Array() // Solo para los usuarios huespedes, aca van las calificaciones del usuario, solo nos guardamos el numero del inmueble que el usaurio califico
    }
}

class Inmueble {
    constructor() {
        this.Titulo;
        this.Descripcion;
        this.Ciudad;
        this.Precio;
        this.Anfitrion; // Se guarda el correo del anfitrion 
        this.Fotos = new Array;
        this.Estado; // Solo puede ser activo y inactivo, le asigno activo ya que cuando se registra un inmuebel se va a mostrar al menos que luego el anfitrion lo deshabilite  
        this.Nro;  // Cada inmueble va a tener un numero para poder diferenciarlo y manejarlo mejor
        this.Calificaciones = 0;
        this.Calificacion = 0;
        this.FotoMostradaActualmente = 0; // Se usa para la galeria de fotos (foto anterior y siguiente)
    }
}