using System.ComponentModel.DataAnnotations;

namespace ApiService.Models
{
    public class Cars
    {
        [Key]
        public Guid id { get; set; }
        //
        [DataType(DataType.Text)]
        [Display(Name ="Car Name")]
        public string car { get; set; }

        //
        [DataType(DataType.Text)]
        public string stocks { get; set; }

        //
        [DataType(DataType.Text)]
        public string createdAt { get; set; }

    }
}
