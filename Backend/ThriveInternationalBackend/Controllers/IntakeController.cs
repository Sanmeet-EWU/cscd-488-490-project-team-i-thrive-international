using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Models;
using ThriveInternationalBackend.Data;

namespace ThriveInternationalBackend.Controllers
{
    [Route("api/intakeforms")]
    [ApiController]
    public class IntakeFormController : ControllerBase
    {
        private readonly ThriveDbContext _context;

        public IntakeFormController(ThriveDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<IntakeForm>>> GetAllForms()
        {
            return await _context.IntakeForms.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IntakeForm>> GetIntakeForm(int id)
        {
            var form = await _context.IntakeForms.FindAsync(id);
            if (form == null) return NotFound();
            return form;
        }

        [HttpPost]
        public async Task<ActionResult<IntakeForm>> SubmitIntakeForm(IntakeForm form)
        {
            form.Refugee = null; // Avoid validation issues
            _context.IntakeForms.Add(form);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetIntakeForm), new { id = form.FormId }, form);
        }

        [HttpGet("type/{formType}")]
        public async Task<ActionResult<IEnumerable<IntakeForm>>> GetFormsByType(string formType)
        {
            return await _context.IntakeForms.Where(f => f.FormType == formType).ToListAsync();
        }
    }
}