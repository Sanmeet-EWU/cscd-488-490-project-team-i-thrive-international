using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Models;

namespace ThriveInternationalBackend.Data
{
    public class ThriveDbContext : DbContext
    {
        public ThriveDbContext(DbContextOptions<ThriveDbContext> options) : base(options)
        {
            // Ensure Npgsql uses UTC for DateTime
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
            AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);
        }

        public DbSet<Refugee> Refugees { get; set; }
        public DbSet<IntakeForm> IntakeForms { get; set; }
        public DbSet<HouseholdMember> HouseholdMembers { get; set; }
        public DbSet<Services> Services { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Refugee>()
                .HasIndex(r => new { r.LastName, r.DateOfBirth })
                .IsUnique();
        }
    }
}