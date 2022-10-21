using System.ComponentModel.DataAnnotations;

namespace ApiService.Models
{
    public class Users
    {
        [Key]
        public Guid id { get; set; }
        //
        [StringLength(100, MinimumLength = 3, ErrorMessage = "Name Should be minimum 3 Characters and a maximum of 100")]
        [DataType(DataType.Text)]
        [Required(ErrorMessage = "Full name is required")]
        public string fullname { get; set; }
        //
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string email { get; set; }
        //
        [DataType(DataType.Password)]
        public string password { get; set; }
        //
        [DataType(DataType.Text)]
        public string age { get; set; }
        //
        [DataType(DataType.Text)]
        public string birthplace { get; set; }
        //
        [DataType(DataType.Text)]
        public string occupation { get; set; }
    }
}
