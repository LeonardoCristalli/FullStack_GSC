using ef_core.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ef_core.DataAccess
{
    public class UtnDbContext : DbContext   
    {
        public DbSet<Estudiante> Estudiantes { get; set; }
        public UtnDbContext() => this.Database.EnsureCreated();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=UtnDb");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Estudiante>()
                .Property(e => e.Nombre)
                .HasMaxLength(50);
        }
    }
}
