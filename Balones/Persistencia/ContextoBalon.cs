using Microsoft.EntityFrameworkCore;
using Balones.Models;

namespace Balones.Persistencia
{
    public class ContextoBalon:DbContext
    {
        public ContextoBalon(DbContextOptions<ContextoBalon> options) : base(options)
        {

        }
        public DbSet<MarcaBalon> MarcasBalones { get; set; }
    }
}
