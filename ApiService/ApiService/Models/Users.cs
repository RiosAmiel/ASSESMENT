using System.ComponentModel.DataAnnotations;

namespace ApiService.Models
{
    public class Users
    {
        [Key]
        public Guid id { get; set; }
        public string fullname { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string age { get; set; }
        public string birthplace { get; set; }
        public string occupation { get; set; }
    }
}
