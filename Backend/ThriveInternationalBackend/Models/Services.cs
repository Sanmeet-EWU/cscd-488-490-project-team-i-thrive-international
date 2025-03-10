using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ThriveInternationalBackend.Models
{
    [Table("services")]
    public class Services
    {
        [Key]
        [Column("service_id")]
        public int ServiceId { get; set; }

        [ForeignKey("Refugee")]
        [Column("refugee_id")]
        public int RefugeeId { get; set; }

        [Column("service_type")]
        public string ServiceType { get; set; } = "Needed"; // "Needed" or "Provided"

        [Column("service_description")]
        public string? ServiceDescription { get; set; }

        [Column("service_date")]
        public DateTime? ServiceDate { get; set; }

        [Column("next_step")]
        public string? NextStep { get; set; }

        [Column("notes")]
        public string? Notes { get; set; }

        [JsonIgnore] // Prevents Refugee from being required in the request
        public virtual Refugee Refugee { get; set; } = null!;
    }
}