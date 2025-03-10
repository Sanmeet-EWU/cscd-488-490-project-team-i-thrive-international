using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ThriveInternationalBackend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProgramTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ORIA = table.Column<bool>(type: "boolean", nullable: false),
                    EMM = table.Column<bool>(type: "boolean", nullable: false),
                    InternalReferral = table.Column<bool>(type: "boolean", nullable: false),
                    ORIAOptions = table.Column<string[]>(type: "text[]", nullable: true),
                    InternalReferralOptions = table.Column<string[]>(type: "text[]", nullable: true),
                    AsylumDateGranted = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    AlienNumber = table.Column<string>(type: "text", nullable: true),
                    EligibilityDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProgramTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "refugee",
                columns: table => new
                {
                    refugee_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    last_name = table.Column<string>(type: "text", nullable: false),
                    date_of_birth = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    first_name = table.Column<string>(type: "text", nullable: true),
                    gender = table.Column<string>(type: "text", nullable: true),
                    country_of_origin = table.Column<string>(type: "text", nullable: true),
                    phone_number = table.Column<string>(type: "text", nullable: true),
                    email = table.Column<string>(type: "text", nullable: true),
                    address = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_refugee", x => x.refugee_id);
                });

            migrationBuilder.CreateTable(
                name: "communityoutreach",
                columns: table => new
                {
                    refugee_id = table.Column<int>(type: "integer", nullable: false),
                    first_name = table.Column<string>(type: "text", nullable: true),
                    middle_name = table.Column<string>(type: "text", nullable: true),
                    gender = table.Column<string>(type: "text", nullable: true),
                    country_of_origin = table.Column<string>(type: "text", nullable: true),
                    preferred_language = table.Column<string>(type: "text", nullable: true),
                    phone_number = table.Column<string>(type: "text", nullable: true),
                    email = table.Column<string>(type: "text", nullable: true),
                    street_address = table.Column<string>(type: "text", nullable: true),
                    city = table.Column<string>(type: "text", nullable: true),
                    zip_code = table.Column<string>(type: "text", nullable: true),
                    state = table.Column<string>(type: "text", nullable: true),
                    county = table.Column<string>(type: "text", nullable: true),
                    mailing_address = table.Column<string>(type: "text", nullable: true),
                    same_as_residential = table.Column<bool>(type: "boolean", nullable: false),
                    dshs_client_id = table.Column<string>(type: "text", nullable: true),
                    alien_number = table.Column<string>(type: "text", nullable: true),
                    is_head_of_household = table.Column<bool>(type: "boolean", nullable: false),
                    relationship_to_head = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_communityoutreach", x => x.refugee_id);
                    table.ForeignKey(
                        name: "FK_communityoutreach_refugee_refugee_id",
                        column: x => x.refugee_id,
                        principalTable: "refugee",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "householdmembers",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    refugee_id = table.Column<int>(type: "integer", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    date_of_birth = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    relationship = table.Column<string>(type: "text", nullable: false),
                    immigration_status = table.Column<string>(type: "text", nullable: true),
                    intake_eligibility_needs = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_householdmembers", x => x.id);
                    table.ForeignKey(
                        name: "FK_householdmembers_refugee_refugee_id",
                        column: x => x.refugee_id,
                        principalTable: "refugee",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "immigrationstatus",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    refugee_id = table.Column<int>(type: "integer", nullable: false),
                    status = table.Column<string>(type: "text", nullable: false),
                    asylum_date_granted = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    eligibility_date = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_immigrationstatus", x => x.id);
                    table.ForeignKey(
                        name: "FK_immigrationstatus_refugee_refugee_id",
                        column: x => x.refugee_id,
                        principalTable: "refugee",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "programeligibility",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    refugee_id = table.Column<int>(type: "integer", nullable: false),
                    receiving_services = table.Column<bool>(type: "boolean", nullable: false),
                    age_over_16 = table.Column<bool>(type: "boolean", nullable: false),
                    lives_in_washington = table.Column<bool>(type: "boolean", nullable: false),
                    arrived_after_july_2021 = table.Column<bool>(type: "boolean", nullable: false),
                    approved_immigration_status = table.Column<bool>(type: "boolean", nullable: false),
                    eligible_for_services = table.Column<bool>(type: "boolean", nullable: false),
                    immigration_status_copy = table.Column<bool>(type: "boolean", nullable: false),
                    consent_form_completed = table.Column<bool>(type: "boolean", nullable: false),
                    release_form_completed = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_programeligibility", x => x.id);
                    table.ForeignKey(
                        name: "FK_programeligibility_refugee_refugee_id",
                        column: x => x.refugee_id,
                        principalTable: "refugee",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "referrals",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    refugee_id = table.Column<int>(type: "integer", nullable: false),
                    referral_type = table.Column<string>(type: "text", nullable: false),
                    referred_program = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_referrals", x => x.id);
                    table.ForeignKey(
                        name: "FK_referrals_refugee_refugee_id",
                        column: x => x.refugee_id,
                        principalTable: "refugee",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "servicesneeded",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    refugee_id = table.Column<int>(type: "integer", nullable: false),
                    service_type = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_servicesneeded", x => x.id);
                    table.ForeignKey(
                        name: "FK_servicesneeded_refugee_refugee_id",
                        column: x => x.refugee_id,
                        principalTable: "refugee",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "student",
                columns: table => new
                {
                    refugee_id = table.Column<int>(type: "integer", nullable: false),
                    full_name = table.Column<string>(type: "text", nullable: true),
                    address = table.Column<string>(type: "text", nullable: true),
                    gender = table.Column<string>(type: "text", nullable: true),
                    school = table.Column<string>(type: "text", nullable: true),
                    current_grade = table.Column<string>(type: "text", nullable: true),
                    languages_spoken = table.Column<string>(type: "text", nullable: true),
                    country_of_origin = table.Column<string>(type: "text", nullable: true),
                    parent_name = table.Column<string>(type: "text", nullable: true),
                    parent_languages_spoken = table.Column<string>(type: "text", nullable: true),
                    parent_phone_number = table.Column<string>(type: "text", nullable: true),
                    parent_email = table.Column<string>(type: "text", nullable: true),
                    preferred_contact_method = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_student", x => x.refugee_id);
                    table.ForeignKey(
                        name: "FK_student_refugee_refugee_id",
                        column: x => x.refugee_id,
                        principalTable: "refugee",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "servicesprovided",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    outreach_id = table.Column<int>(type: "integer", nullable: false),
                    service = table.Column<string>(type: "text", nullable: false),
                    date_of_service = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    next_step = table.Column<string>(type: "text", nullable: true),
                    notes = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_servicesprovided", x => x.id);
                    table.ForeignKey(
                        name: "FK_servicesprovided_communityoutreach_outreach_id",
                        column: x => x.outreach_id,
                        principalTable: "communityoutreach",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ThriveIntakeForms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RefugeeId = table.Column<int>(type: "integer", nullable: false),
                    IntakeDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    NavigatorName = table.Column<string>(type: "text", nullable: true),
                    ProgramTypeId = table.Column<int>(type: "integer", nullable: true),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Gender = table.Column<string>(type: "text", nullable: true),
                    CountryOfOrigin = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    EmailAddress = table.Column<string>(type: "text", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    ImmigrationStatus = table.Column<string[]>(type: "text[]", nullable: true),
                    AsylumDateGranted = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    AlienNumber = table.Column<string>(type: "text", nullable: true),
                    EligibilityDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    ProgramEligibilityId = table.Column<int>(type: "integer", nullable: true),
                    ServicesNeeded = table.Column<string[]>(type: "text[]", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThriveIntakeForms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ThriveIntakeForms_ProgramTypes_ProgramTypeId",
                        column: x => x.ProgramTypeId,
                        principalTable: "ProgramTypes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ThriveIntakeForms_programeligibility_ProgramEligibilityId",
                        column: x => x.ProgramEligibilityId,
                        principalTable: "programeligibility",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "liabilityagreements",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    student_id = table.Column<int>(type: "integer", nullable: false),
                    insurance_liability = table.Column<bool>(type: "boolean", nullable: false),
                    insurance_liability_signature = table.Column<string>(type: "text", nullable: true),
                    waiver_and_release = table.Column<bool>(type: "boolean", nullable: false),
                    waiver_and_release_signature = table.Column<string>(type: "text", nullable: true),
                    media_release = table.Column<bool>(type: "boolean", nullable: false),
                    media_release_signature = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_liabilityagreements", x => x.id);
                    table.ForeignKey(
                        name: "FK_liabilityagreements_student_student_id",
                        column: x => x.student_id,
                        principalTable: "student",
                        principalColumn: "refugee_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_householdmembers_refugee_id",
                table: "householdmembers",
                column: "refugee_id");

            migrationBuilder.CreateIndex(
                name: "IX_immigrationstatus_refugee_id",
                table: "immigrationstatus",
                column: "refugee_id");

            migrationBuilder.CreateIndex(
                name: "IX_liabilityagreements_student_id",
                table: "liabilityagreements",
                column: "student_id");

            migrationBuilder.CreateIndex(
                name: "IX_programeligibility_refugee_id",
                table: "programeligibility",
                column: "refugee_id");

            migrationBuilder.CreateIndex(
                name: "IX_referrals_refugee_id",
                table: "referrals",
                column: "refugee_id");

            migrationBuilder.CreateIndex(
                name: "IX_servicesneeded_refugee_id",
                table: "servicesneeded",
                column: "refugee_id");

            migrationBuilder.CreateIndex(
                name: "IX_servicesprovided_outreach_id",
                table: "servicesprovided",
                column: "outreach_id");

            migrationBuilder.CreateIndex(
                name: "IX_ThriveIntakeForms_ProgramEligibilityId",
                table: "ThriveIntakeForms",
                column: "ProgramEligibilityId");

            migrationBuilder.CreateIndex(
                name: "IX_ThriveIntakeForms_ProgramTypeId",
                table: "ThriveIntakeForms",
                column: "ProgramTypeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "householdmembers");

            migrationBuilder.DropTable(
                name: "immigrationstatus");

            migrationBuilder.DropTable(
                name: "liabilityagreements");

            migrationBuilder.DropTable(
                name: "referrals");

            migrationBuilder.DropTable(
                name: "servicesneeded");

            migrationBuilder.DropTable(
                name: "servicesprovided");

            migrationBuilder.DropTable(
                name: "ThriveIntakeForms");

            migrationBuilder.DropTable(
                name: "student");

            migrationBuilder.DropTable(
                name: "communityoutreach");

            migrationBuilder.DropTable(
                name: "ProgramTypes");

            migrationBuilder.DropTable(
                name: "programeligibility");

            migrationBuilder.DropTable(
                name: "refugee");
        }
    }
}
