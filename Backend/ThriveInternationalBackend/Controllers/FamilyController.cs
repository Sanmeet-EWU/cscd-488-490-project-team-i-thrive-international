using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Data;
using ThriveInternationalBackend.Models;

namespace ThriveInternationalBackend.Controllers
{
    [Route("api/family")]
    [ApiController]
    public class FamilyController : ControllerBase
    {
        private readonly ThriveDbContext _context;

        public FamilyController(ThriveDbContext context)
        {
            _context = context;
        }

        [HttpGet("{refugeeId}/{firstName}")]
        public async Task<ActionResult<object>> GetFamilyRelationship(int refugeeId, string firstName)
        {
            // Find the student by refugeeId and firstName
            var student = await _context.Students
                .FirstOrDefaultAsync(s => s.RefugeeId == refugeeId && s.FirstName == firstName);

            if (student == null)
            {
                return NotFound($"No student found with ID {refugeeId} and First Name {firstName}.");
            }

            // Construct the relationship response
            var relationship = new
            {
                ParentName = student.ParentName,
                Child = new
                {
                    Id = student.RefugeeId,
                    FirstName = student.FirstName,
                    LastName = student.LastName,
                    Relationship = "Child"
                }
            };

            return Ok(relationship);
        }
    }
}