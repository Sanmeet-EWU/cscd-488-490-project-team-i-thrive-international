using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ThriveInternationalBackend.Models
{
    [Table("householdmember")]
    public class HouseholdMember
    {
        [Key]
        [Column("household_id")]
        public int HouseholdId { get; set; }

        [ForeignKey("Refugee")]
        [Column("refugee_id")]
        public int RefugeeId { get; set; }

        [Column("name")]
        public string Name { get; set; } = string.Empty;

        [Column("date_of_birth")]
        public DateTime? DateOfBirth { get; set; }

        [Column("relationship")]
        public string Relationship { get; set; } = "Unknown";

        [Column("immigration_status")]
        public string? ImmigrationStatus { get; set; }

        [Column("intake_eligibility_needs")]
        public string? IntakeEligibilityNeeds { get; set; }

        public virtual Refugee Refugee { get; set; } = null!;
    }
}
