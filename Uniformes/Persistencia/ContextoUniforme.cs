using Microsoft.EntityFrameworkCore;
using Uniformes.Models;

namespace Uniformes.Persistencia
{
    public class ContextoUniforme: DbContext
    {
        public ContextoUniforme(DbContextOptions<ContextoUniforme> options) : base(options)
        {

        }
        public DbSet<UniformeB> UniformesBaloncesto { get; set; }
    }
}
