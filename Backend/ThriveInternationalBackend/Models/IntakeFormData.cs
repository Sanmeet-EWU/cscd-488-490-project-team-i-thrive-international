using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ThriveInternationalBackend.Models
{
    [Table("intakeform")]
    public class IntakeForm
    {
        [Key]
        [Column("form_id")]
        public int FormId { get; set; }

        [ForeignKey("Refugee")]
        [Column("refugee_id")]
        public int RefugeeId { get; set; }

        [Required]
        [Column("form_type")]
        public string FormType { get; set; } = string.Empty;

        [Required]
        [Column("intake_date")]
        public DateTime IntakeDate { get; set; }

        [Column("navigator_name")]
        public string? NavigatorName { get; set; }

        [Column("program_type", TypeName = "jsonb")]
        public string? ProgramTypeJson { get; set; }

        [Column("asylum_date_granted")]
        public DateTime? AsylumDateGranted { get; set; }

        [Column("alien_number")]
        public string? AlienNumber { get; set; }

        [Column("eligibility_date")]
        public DateTime? EligibilityDate { get; set; }

        [Column("program_eligibility", TypeName = "jsonb")]
        public string? ProgramEligibilityJson { get; set; }

        [Column("services_needed", TypeName = "text[]")]
        public string[]? ServicesNeeded { get; set; }

        [Column("liability", TypeName = "jsonb")]
        public string? LiabilityJson { get; set; }

        [Column("extra_data", TypeName = "jsonb")]
        public string? ExtraDataJson { get; set; }

        // Make Refugee optional or exclude from binding
        [JsonIgnore] // Prevents this from being included in JSON serialization/deserialization
        public virtual Refugee? Refugee { get; set; }
    }
}