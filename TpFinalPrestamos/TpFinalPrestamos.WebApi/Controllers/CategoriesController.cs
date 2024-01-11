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
            return await context.Category.ToListAsync();
        }

        // POST api/categories
        [HttpPost]
        public async Task<ActionResult<Category>> CreateCategory(Category category)
        {
            var existingCategories = await context.Category.ToListAsync();

            var existingCategory =  existingCategories.FirstOrDefault(c => c.Description.Equals(category.Description, StringComparison.OrdinalIgnoreCase));
    
            if (existingCategory != null) 
            {
                return Conflict($"La categoria '{category.Description}' ya existe.");
            }

            this.context.Category.Add(category);
            await this.context.SaveChangesAsync();

            return this.CreatedAtAction(nameof(GetAll), new { id = category.Id }, category);
        }
    }
}
