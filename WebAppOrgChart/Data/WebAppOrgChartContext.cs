using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using WebAppOrgChart.Models;

namespace WebAppOrgChart.Data
{
    public class WebAppOrgChartContext :DbContext
    {
    public WebAppOrgChartContext(DbContextOptions<WebAppOrgChartContext> options)
      : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

    }
}
