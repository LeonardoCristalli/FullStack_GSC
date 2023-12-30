using Ej_Web_API.Domain;
using Microsoft.EntityFrameworkCore;

namespace Ej_Web_API.DataAccess
{
    public class UtnDbContext : DbContext 
    {
        public DbSet<Estudiante> Estudiantes { get; set; }

        public UtnDbContext(DbContextOptions options) : base(options) => this.Database.EnsureCreated();
    }
}
