using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Models;
using ThriveInternationalBackend.Data; // Add this line to include the correct namespace for ThriveDbContext

namespace ThriveInternationalBackend.Controllers
{
    [Route("api/householdmembers")]
    [ApiController]
    public class HouseholdMemberController : ControllerBase
    {
        private readonly ThriveDbContext _context;

        public HouseholdMemberController(ThriveDbContext context)
        {
            _context = context;
        }

        // Get all household members
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HouseholdMember>>> GetAllMembers()
        {
            return await _context.HouseholdMembers.ToListAsync();
        }

        // Get household members by refugee ID
        [HttpGet("refugee/{refugeeId}")]
        public async Task<ActionResult<IEnumerable<HouseholdMember>>> GetMembersByRefugee(int refugeeId)
        {
            return await _context.HouseholdMembers.Where(h => h.RefugeeId == refugeeId).ToListAsync();
        }

        // Add a new household member
        [HttpPost]
        public async Task<ActionResult<HouseholdMember>> AddHouseholdMember(HouseholdMember member)
        {
            _context.HouseholdMembers.Add(member);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAllMembers), new { id = member.HouseholdId }, member);
        }
    }
}
