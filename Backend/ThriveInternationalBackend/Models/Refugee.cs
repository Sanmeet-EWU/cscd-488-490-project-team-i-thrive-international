using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ThriveInternationalBackend.Models
{
    [Table("refugee")]
    public class Refugee
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
        [Column("date_of_birth")]
        public DateTime DateOfBirth
        {
            get => _dateOfBirth;
            set => _dateOfBirth = DateTime.SpecifyKind(value.Date, DateTimeKind.Utc);
        }
        private DateTime _dateOfBirth;

        [Column("gender")]
        public string? Gender { get; set; }

        [Column("country_of_origin")]
        public string? CountryOfOrigin { get; set; }

        [Column("phone_number")]
        public string? PhoneNumber { get; set; }

        [Column("email_address")]
        public string? EmailAddress { get; set; }

        [Column("address")]
        public string? Address { get; set; }
    }
}