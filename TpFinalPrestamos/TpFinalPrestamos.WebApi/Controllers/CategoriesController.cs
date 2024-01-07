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

        /*
         
        // POST api/categories/default
        [HttpPost("default")]
        public async Task<ActionResult<IEnumerable<Category>>> CreateDefaultCategories()
        {
            var existingCategories = await context.Categories.Select(c => c.Description).ToListAsync();  

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

            foreach (var category in defaultCategories) 
            {
                if (!existingCategories.Contains(category.Description))
                {
                    context.Categories.Add(category);
                }
            }

            await context.SaveChangesAsync();

            return Ok(defaultCategories);
        }

        */

        // POST api/categories
        [HttpPost]
        public async Task<ActionResult<Category>> CreateCategory(Category category)
        {
            var existingCategories = await context.Categories.ToListAsync();

            var existingCategory =  existingCategories.FirstOrDefault(c => c.Description.Equals(category.Description, StringComparison.OrdinalIgnoreCase));
    
            if (existingCategory != null) 
            {
                return Conflict($"La categoria '{category.Description}' ya existe.");
            }

            this.context.Categories.Add(category);
            await this.context.SaveChangesAsync();

            return this.CreatedAtAction(nameof(GetAll), new { id = category.Id }, category);
        }
    }
}
