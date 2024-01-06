using Microsoft.EntityFrameworkCore;
using TpFinalPrestamos.WebApi.Domain;

namespace TpFinalPrestamos.WebApi.DataAccess
{
    public class TpFinalPrestamosDbContext : DbContext 
    {
        public DbSet<Person> Persons { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<Thing> Things { get; set; }
        public DbSet<Category> Categories { get; set; }
        public TpFinalPrestamosDbContext(DbContextOptions options) : base(options) => this.Database.EnsureCreated();
    }
}
