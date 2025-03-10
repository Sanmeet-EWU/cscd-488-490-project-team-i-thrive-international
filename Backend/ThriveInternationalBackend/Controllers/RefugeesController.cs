using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Models;
using ThriveInternationalBackend.Data; // Add this line if ThriveDbContext is in the Data namespace

namespace ThriveInternationalBackend.Controllers
{
    [Route("api/refugees")]
    [ApiController]
    public class RefugeeController : ControllerBase
    {
        private readonly ThriveDbContext _context;

        public RefugeeController(ThriveDbContext context)
        {
            _context = context;
        }

        // Get all refugees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Refugee>>> GetAllRefugees()
        {
            return await _context.Refugees.ToListAsync();
        }

        // Get a specific refugee by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Refugee>> GetRefugee(int id)
        {
            var refugee = await _context.Refugees.FindAsync(id);
            if (refugee == null) return NotFound();
            return refugee;
        }

        // Create a new refugee
        [HttpPost]
        public async Task<ActionResult<Refugee>> RegisterRefugee(Refugee refugee)
        {
            _context.Refugees.Add(refugee);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRefugee), new { id = refugee.RefugeeId }, refugee);
        }
    }
}
