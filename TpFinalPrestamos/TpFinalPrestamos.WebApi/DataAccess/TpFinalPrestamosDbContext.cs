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

        public TpFinalPrestamosDbContext(DbContextOptions options) : base(options)
        {
            this.Database.EnsureCreated();
            this.Database.Migrate();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Thing>()
                .HasOne<Category>()
                .WithMany(c => c.Things)
                .HasForeignKey(t => t.CategoryId)
                .IsRequired();

            modelBuilder.Entity<Loan>()
                .HasOne<Person>()
                .WithMany(p => p.Loans)
                .HasForeignKey(l => l.PersonId)
                .IsRequired();

            modelBuilder.Entity<Loan>()
                .HasOne<Thing>()
                .WithMany(t => t.Loans)
                .HasForeignKey(l => l.ThingId)
                .IsRequired();
        }


    }
}
