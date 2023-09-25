using System.ComponentModel.DataAnnotations;

namespace WebAppOrgChart.Models
{
    public class Employee
    {
		[Key]
		public int ID { get; set; }
        public string? Name { get; set; }
        public string? LastName { get; set; }
        public string? Gender { get; set; }
        public DateTime? DOB { get; set; }
        public int? EmployeeId { get; set; }
        public int?  ParentId { get; set; }
        public string? City { get; set; }
    }
}
