using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TpFinalPrestamos.WebApi.DataAccess;
using TpFinalPrestamos.WebApi.Domain;

namespace TpFinalPrestamos.WebApi.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly TpFinalPrestamosDbContext context;  
        public CategoriesController(TpFinalPrestamosDbContext context) => this.context = context;

        //  GET api/categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetAll()
        {
            return await context.Categories.ToListAsync();
        }

        // POST api/categories/default
        [HttpPost("default")]
        public async Task<ActionResult<IEnumerable<Category>>> CreateDefaultCategories()
        {
            var defaultCategories = new List<Category>
            {
                new Category { Description = "Dinero"},
                new Category { Description = "Electrónicos"},
                new Category { Description = "Herramientas"},
                new Category { Description = "Libros"},
                new Category { Description = "Ropa"},
                new Category { Description = "Cocina"},
                new Category { Description = "Varios"},
            };

            context.Categories.AddRange(defaultCategories);
            await context.SaveChangesAsync();

            return Ok(defaultCategories);
        }
    }




}
