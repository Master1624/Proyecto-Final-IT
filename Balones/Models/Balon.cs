using System.ComponentModel.DataAnnotations;

namespace Balones.Models
{
    public class MarcaBalon
    {
        [Key]
        public int IdMarcaBalon { get; set; }
        public string Nombre { get; set; }
        public string SerialBalon { get; set; }
        public string Material { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}
