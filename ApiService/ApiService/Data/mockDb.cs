using ApiService.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiService.Data
{
    public class mockDb : DbContext
    {
        public mockDb(DbContextOptions options) 
            : base(options)
        {

        }
        //
        public DbSet<Cars> Cars { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
