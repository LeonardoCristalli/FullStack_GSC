using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TpFinalPrestamos.WebApi.DataAccess;
using TpFinalPrestamos.WebApi.Domain;

namespace TpFinalPrestamos.WebApi.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class LoansController : ControllerBase
    {
        private readonly TpFinalPrestamosDbContext context;  
        public LoansController(TpFinalPrestamosDbContext context) => this.context = context;

        //  GET api/loans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Loan>>> GetAll()
        {
            return await context.Loan.ToListAsync();
        }

        // POST api/loans
        [HttpPost]
        public async Task<ActionResult<Loan>> CreateLoan(Loan loan)
        {
            if (loan == null)
            {
                return BadRequest("Invalid request body");
            }

            var newLoan = new Loan
            {
                LoanDate = loan.LoanDate,
                ReturnDate = loan.ReturnDate,
                Status = loan.Status,
                PersonId = loan.PersonId,
                ThingId = loan.ThingId
            };

            this.context.Add(loan);
            await this.context.SaveChangesAsync();

            return this.CreatedAtAction(nameof(GetAll), new { id = newLoan.Id }, newLoan);
        }

        // PUT api/loans
        [HttpPut]
        public async Task<ActionResult> Update(Loan loan)
        {
            this.context.Update(loan);
            await this.context.SaveChangesAsync();

            return this.NoContent();
        }

        // DELETE api/loans/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var loan = await this.context.FindAsync<Loan>(id);

            if (loan == null)
                return this.NotFound();

            this.context.Remove(loan);
            await this.context.SaveChangesAsync();

            return this.NoContent();
        }
    }
}
