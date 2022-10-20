using ApiService.Data;
using ApiService.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiService.Controllers
{
    [ApiController]
    [Route("api/[controller]/")]
    public class CarsController : Controller
    {
        private readonly mockDb mockDb;
        public CarsController(mockDb mockDb)
        {
            this.mockDb = mockDb;
        }
        // GET
        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
          var cars = await mockDb.Cars.ToListAsync();
            if (cars != null)
            {
                return Ok(cars);
            }
            return NotFound("not found");
        }

        // GET CAR BY ID
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetCar")]
        public async Task<IActionResult> GetCar([FromRoute] Guid id)
        {
            var car = await mockDb.Cars.FirstOrDefaultAsync(x => x.id == id);
            if( car != null)
            {
                return Ok(car);
            }
            return NotFound("not found");
        }

        //ADD CAR
        [HttpPost]
        public async Task<IActionResult> AddCar([FromBody] Cars cars)
        {
            cars.id = Guid.NewGuid();

            await mockDb.Cars.AddAsync(cars);
            await mockDb.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCar), new { id = cars.id }, cars);
        }

        //UPDATE CAR
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateCar([FromRoute] Guid id, [FromBody] Cars cars)
        {
            var existingCar = await mockDb.Cars.FirstOrDefaultAsync(x => x.id == id);
            if (existingCar != null)
            {
                existingCar.car = cars.car;
                existingCar.stocks = cars.stocks;
                existingCar.createdAt = cars.createdAt;
                await mockDb.SaveChangesAsync();
                return Ok(existingCar);
            }
            return NotFound("not found");
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCar([FromRoute] Guid id)
        {
            var existingCar = await mockDb.Cars.FirstOrDefaultAsync(x => x.id == id);
            if (existingCar != null)
            {
                mockDb.Cars.Remove(existingCar);
                await mockDb.SaveChangesAsync();
                return Ok(existingCar);
            }
            return NotFound("not found");
        }
    }
}
