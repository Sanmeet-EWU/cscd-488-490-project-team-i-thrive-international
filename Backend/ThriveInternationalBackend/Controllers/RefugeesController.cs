using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Data;
using ThriveInternationalBackend.Models;

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

        // Existing POST method
        [HttpPost]
        public async Task<ActionResult<Refugee>> RegisterRefugee(Refugee refugee)
        {
            _context.Refugees.Add(refugee);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRefugee), new { id = refugee.RefugeeId }, refugee);
        }

        // New GET method to fetch refugee by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Refugee>> GetRefugee(int id)
        {
            var refugee = await _context.Refugees.FindAsync(id);
            if (refugee == null)
            {
                return NotFound();
            }
            return refugee;
        }
    }
}