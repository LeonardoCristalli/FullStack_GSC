using Microsoft.AspNetCore.Mvc;

using Patterns.Patterns.Domain;
using System.Threading.Tasks;

namespace Patterns.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HamburguesasController : ControllerBase
    {
        private readonly IComboFactory comboFactory;
        public HamburguesasController(IComboFactory comboFactory)
        {
            this.comboFactory = comboFactory;
        }

        [HttpGet]
        public async Task<string> Get(int combo)
        {
            var result = await comboFactory.Create(combo);

            return result.GetCombo();
        }
    }
}