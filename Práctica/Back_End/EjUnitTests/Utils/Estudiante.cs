using System.Security.Cryptography.X509Certificates;

namespace Utils
{
    public class Estudiante
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateOnly FechaNacimiento { get; set; }

        public int CalcularEdad(DateOnly fechaEdad)
        {
            int edad = fechaEdad.Year - this.FechaNacimiento.Year;

            DateOnly diaDeHoyAlAnioNacimiento = fechaEdad.AddYears(-edad);

            if (this.FechaNacimiento > diaDeHoyAlAnioNacimiento)
                edad--;

            return edad; ; 
        }
    }
}
