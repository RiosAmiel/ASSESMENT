using ApiService.Data;
using ApiService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace ApiService.Controllers
{
    [ApiController]
    [Route("api/[controller]/")]
    public class UserController : Controller
    {
        private readonly mockDb mockDb;

        public UserController(mockDb mockDb)
        {
            this.mockDb = mockDb;
        }

        // GET
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await mockDb.Users.ToListAsync();
            return Ok(users);
        }

        // GET USER BY ID
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetUser")]
        public async Task<IActionResult> GetUser([FromRoute] Guid id)
        {
            var user = await mockDb.Users.FirstOrDefaultAsync(x => x.id == id);
            if (user != null)
            {
                return Ok(user);
            }
            return NotFound("not found");
        }

        //ADD USER
        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] Users user)
        {
            user.id = Guid.NewGuid();

            await mockDb.Users.AddAsync(user);
            await mockDb.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.id }, user);
        }

        //UPDATE USER
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateUser([FromRoute] Guid id, [FromBody] Users user)
        {
            var existingUser = await mockDb.Users.FirstOrDefaultAsync(x => x.id == id);
            if (existingUser != null)
            {
                existingUser.fullname = user.fullname;
                existingUser.email = user.email;
                existingUser.password = user.password;
                existingUser.age = user.age;
                existingUser.birthplace = user.birthplace;
                existingUser.occupation = user.occupation;
                await mockDb.SaveChangesAsync();
                return Ok(existingUser);
            }
            return NotFound("not found");
        }
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteUser([FromRoute] Guid id)
        {
            var existingUser = await mockDb.Users.FirstOrDefaultAsync(x => x.id == id);
            if (existingUser != null)
            {
                mockDb.Users.Remove(existingUser);
                await mockDb.SaveChangesAsync();
                return Ok(existingUser);
            }
            return NotFound("not found");
        }
    }
}
