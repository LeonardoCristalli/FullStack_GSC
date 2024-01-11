using Microsoft.EntityFrameworkCore;
using TpFinalPrestamos.WebApi.Domain;

namespace TpFinalPrestamos.WebApi.DataAccess
{
    public class TpFinalPrestamosDbContext : DbContext 
    {
        public DbSet<Person> Person { get; set; }
        public DbSet<Loan> Loan { get; set; }
        public DbSet<Thing> Thing { get; set; }
        public DbSet<Category> Category { get; set; }

        public TpFinalPrestamosDbContext(DbContextOptions options) : base(options)
        {
            this.Database.EnsureCreated();
            this.Database.Migrate();
        }
    }
}
