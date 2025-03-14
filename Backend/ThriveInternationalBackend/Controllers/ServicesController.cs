using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Models;
using ThriveInternationalBackend.Data; // Add this line if ThriveDbContext is in the Data namespace


namespace ThriveInternationalBackend.Controllers
{
    [Route("api/services")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly ThriveDbContext _context;

        public ServicesController(ThriveDbContext context)
        {
            _context = context;
        }

        // Get all services
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Services>>> GetAllServices()
        {
            return await _context.Services.ToListAsync();
        }

        // Get services by refugee ID
        [HttpGet("refugee/{refugeeId}")]
        public async Task<ActionResult<IEnumerable<Services>>> GetServicesByRefugee(int refugeeId)
        {
            return await _context.Services.Where(s => s.RefugeeId == refugeeId).ToListAsync();
        }

        // Get services by type (Needed or Provided)
        [HttpGet("type/{serviceType}")]
        public async Task<ActionResult<IEnumerable<Services>>> GetServicesByType(string serviceType)
        {
            return await _context.Services.Where(s => s.ServiceType == serviceType).ToListAsync();
        }

        // Add a new service
        [HttpPost]
        public async Task<ActionResult<Services>> AddService(Services service)
        {
            _context.Services.Add(service);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAllServices), new { id = service.ServiceId }, service);
        }
    }
}
