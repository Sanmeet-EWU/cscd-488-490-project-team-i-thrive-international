using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // Registers all controllers, including FamilyController
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", builder =>
    {
        builder.WithOrigins("http://localhost:3000")
               .AllowAnyHeader()
               .AllowAnyMethod(); // Explicitly allows GET, POST, etc.
    });
});

// Configure PostgreSQL Connection and DbContext
builder.Services.AddDbContext<ThriveDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Optional: Explicitly register FamilyController (not required, but for clarity)
// builder.Services.AddScoped<ThriveInternationalBackend.Controllers.FamilyController>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable CORS middleware (must be before routing and endpoints)
app.UseCors("AllowLocalhost3000");

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Maps FamilyController along with others
app.Run();