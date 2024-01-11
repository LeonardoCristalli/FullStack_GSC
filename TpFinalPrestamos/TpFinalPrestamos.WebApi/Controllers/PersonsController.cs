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
        private readonly TpFinalPrestamosDbContext context;
        public PersonsController(TpFinalPrestamosDbContext context) => this.context = context;

        // GET api/persons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> GetAll()
        {
            return await this.context.Person.ToListAsync();
        }
        
        // GET api/persons/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetById(int id)
        {
            var person = await this.context.FindAsync<Person>(id);

            if (person == null)
                return this.NotFound();

            return person;
        }

        // POST api/persons
        [HttpPost]
        public async Task<ActionResult<Person>> Create(Person person)
        {
            this.context.Add(person);
            await this.context.SaveChangesAsync();

            return this.CreatedAtAction(nameof(GetById), new { id = person.Id }, person);
        }

        // PUT api/persons
        [HttpPut]
        public async Task<ActionResult> Update(Person person)
        {
            this.context.Update(person);
            await this.context.SaveChangesAsync();

            return this.NoContent();
        }

        // DELETE api/persons/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var person = await this.context.FindAsync<Person>(id);

            if (person == null)
                return this.NotFound();

            this.context.Remove(person);
            await this.context.SaveChangesAsync();

            return this.NoContent();
        }
    }
}
