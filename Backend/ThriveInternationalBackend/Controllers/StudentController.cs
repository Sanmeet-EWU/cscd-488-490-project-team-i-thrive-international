using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Data;
using ThriveInternationalBackend.Models;

namespace ThriveInternationalBackend.Controllers
{
    [Route("api/students")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly ThriveDbContext _context;

        public StudentController(ThriveDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Student>> RegisterStudent(Student student)
        {
            var refugeeExists = await _context.Refugees.AnyAsync(r => r.RefugeeId == student.RefugeeId);
            if (!refugeeExists)
            {
                return BadRequest("Invalid Refugee ID. It must exist in the refugee table.");
            }

            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetStudent", new { id = student.RefugeeId }, student);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            return student;
        }
    }
}