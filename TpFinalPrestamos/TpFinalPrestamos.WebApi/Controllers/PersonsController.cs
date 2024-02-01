using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TpFinalPrestamos.WebApi.DataAccess;
using TpFinalPrestamos.WebApi.Domain;

namespace TpFinalPrestamos.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")] 
    public class PersonsController : ControllerBase
    {
        private readonly TpFinalPrestamosDbContext _context;
        public PersonsController(TpFinalPrestamosDbContext context)
        {
            _context = context;
        }
    
        // GET api/persons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> GetAll()
        {
            try
            {
                var personsList = await _context.Person.ToListAsync();
                return Ok(personsList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }            
        }
        
        // GET api/persons/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetById(int id)
        {
            try
            {
                var person = await this._context.FindAsync<Person>(id);
                
                if (person == null)
                {
                    return this.NotFound();
                }                    

                return Ok(person);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }                      

        }

        // POST api/persons
        [HttpPost]
        public async Task<ActionResult<Person>> Create(Person person)
        {
            this._context.Add(person);
            await this._context.SaveChangesAsync();

            return this.CreatedAtAction(nameof(GetById), new { id = person.Id }, person);
        }

        // PUT api/persons
        [HttpPut]
        public async Task<ActionResult> Update(Person person)
        {
            this._context.Update(person);
            await this._context.SaveChangesAsync();

            return this.NoContent();
        }

        // DELETE api/persons/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var person = await this._context.FindAsync<Person>(id);

            if (person == null)
                return this.NotFound();

            this._context.Remove(person);
            await this._context.SaveChangesAsync();

            return this.NoContent();
        }
    }
}
