using System.ComponentModel.DataAnnotations;

namespace Uniformes.Models
{
    public class UniformeB
    {
        [Key]
        public int IdUniforme { get; set; }
        public string Nombre { get; set; }
        public string EquipoBaloncesto { get; set; }
        public string ColorUniforme { get; set; }
        public string TemporadaUniforme { get; set; }
    }
}
