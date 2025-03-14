using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ThriveInternationalBackend.Models
{
    [Table("student")]
    public class Student
    {
        [Key]
        [Column("refugee_id")]
        public int RefugeeId { get; set; }

        [Required]
        [Column("first_name")]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [Column("last_name")]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [Column("birth_date")]
        public DateTime BirthDate { get; set; }

        [Required]
        [Column("address")]
        public string Address { get; set; } = string.Empty;

        [Required]
        [Column("gender")]
        public string Gender { get; set; } = string.Empty;

        [Required]
        [Column("school")]
        public string School { get; set; } = string.Empty;

        [Required]
        [Column("current_grade")]
        public string CurrentGrade { get; set; } = string.Empty;

        [Required]
        [Column("languages_spoken")]
        public string LanguagesSpoken { get; set; } = string.Empty;

        [Required]
        [Column("country_of_origin")]
        public string CountryOfOrigin { get; set; } = string.Empty;

        [Required]
        [Column("parent_name")]
        public string ParentName { get; set; } = string.Empty;

        [Required]
        [Column("parent_languages_spoken")]
        public string ParentLanguagesSpoken { get; set; } = string.Empty;

        [Required]
        [Column("parent_phone_number")]
        public string ParentPhoneNumber { get; set; } = string.Empty;

        [Required]
        [Column("parent_email")]
        public string ParentEmail { get; set; } = string.Empty;

        [Required]
        [Column("preferred_contact_method")]
        public string PreferredContactMethod { get; set; } = string.Empty;

        [Required]
        [Column("insurance_liability")]
        public bool InsuranceLiability { get; set; }

        [Required]
        [Column("insurance_liability_signature")]
        public string InsuranceLiabilitySignature { get; set; } = string.Empty;

        [Required]
        [Column("waiver_and_release")]
        public bool WaiverAndRelease { get; set; }

        [Required]
        [Column("waiver_and_release_signature")]
        public string WaiverAndReleaseSignature { get; set; } = string.Empty;

        [Required]
        [Column("media_release")]
        public bool MediaRelease { get; set; }

        [Required]
        [Column("media_release_signature")]
        public string MediaReleaseSignature { get; set; } = string.Empty;

        [ForeignKey("RefugeeId")]
        public virtual Refugee? Refugee { get; set; } // Made nullable
    }
}