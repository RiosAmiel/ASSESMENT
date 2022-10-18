using System.ComponentModel.DataAnnotations;

namespace ApiService.Models
{
    public class Cars
    {
        [Key]
        public Guid id { get; set; }
        public string car { get; set; }
        public string stocks { get; set; }
        public string createdAt { get; set; }

    }
}
