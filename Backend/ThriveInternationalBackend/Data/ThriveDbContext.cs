using Microsoft.EntityFrameworkCore;
using ThriveInternationalBackend.Models;

namespace ThriveInternationalBackend.Data
{
    public class ThriveDbContext : DbContext
    {
        public ThriveDbContext(DbContextOptions<ThriveDbContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
            AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);
        }

        public DbSet<Refugee> Refugees { get; set; } = null!;
        public DbSet<IntakeForm> IntakeForms { get; set; } = null!;
        public DbSet<HouseholdMember> HouseholdMembers { get; set; } = null!;
        public DbSet<Services> Services { get; set; } = null!;
        public DbSet<Student> Students { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Refugee sequence
            modelBuilder.HasSequence<int>("refugee_id_seq")
                .StartsAt(10000)
                .IncrementsBy(1)
                .HasMin(10000)
                .HasMax(99999)
                .IsCyclic();

            modelBuilder.Entity<Refugee>()
                .Property(r => r.RefugeeId)
                .HasDefaultValueSql("nextval('refugee_id_seq')");

            modelBuilder.Entity<Refugee>()
                .HasIndex(r => new { r.LastName, r.DateOfBirth })
                .IsUnique();

            modelBuilder.Entity<Refugee>()
                .ToTable("refugee");

            // Student configuration
            modelBuilder.Entity<Student>()
                .HasKey(s => s.RefugeeId);

            modelBuilder.Entity<Student>()
                .HasOne(s => s.Refugee)
                .WithMany()
                .HasForeignKey(s => s.RefugeeId)
                .IsRequired(); // Foreign key is required, but navigation property is optional

            modelBuilder.Entity<Student>()
                .ToTable("student");
        }
    }
}