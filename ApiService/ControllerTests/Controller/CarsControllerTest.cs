using ApiService.Controllers;
using ApiService.Data;
using ApiService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ControllerTests.Controller
{


    public class CarsControllerTest
    {
        [Fact]

        public async Task GetAllCars_returnOk()
        {
            //Arrange
            var serviceProvider = new ServiceCollection()
            .AddEntityFrameworkSqlServer()
            .BuildServiceProvider();

            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);

            Seed(context);

            var controller = new CarsController(context);
            //Act
            var actionResult = await controller.GetAllCars();

            //Assert
            var viewResult = Assert.IsType<OkObjectResult>(actionResult);
            Assert.Equal(200, viewResult.StatusCode);
        }
        [Fact]
        public async Task GetCar_Byid_returnOk()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);

            Seed(context);

            var controller = new CarsController(context);

            //Act

            var actionResult = await controller.GetCar(new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"));

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            Assert.Equal(200, okResult.StatusCode);
        }
        [Fact]
        public async Task AddCar_returnCreatedAtAction()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);

            var controller = new CarsController(context);

            //Act
            Cars car = new Cars()
            {
                car = "Honda",
                createdAt = "China",
                stocks = "500"

            };
            var actionResult = await controller.AddCar(car);

            //Assert
            var okResult = Assert.IsType<CreatedAtActionResult>(actionResult);
            Assert.Equal(201, okResult.StatusCode);
        }
        [Fact]
        public async Task UpdateCar_returnOk()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);
            Seed(context);
            var controller = new CarsController(context);
            //Act
            Cars car = new Cars()
            {
                car = "Honda",
                createdAt = "China",
                stocks = "500"

            };
            var actionResult = await controller.UpdateCar(new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"), car);

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            Assert.Equal(200, okResult.StatusCode);
        }
        [Fact]
        public async Task DeleteCar_returnOk()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);
            Seed(context);
            var controller = new CarsController(context);
            //Act
            var actionResult = await controller.DeleteCar(new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"));

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            Assert.Equal(200, okResult.StatusCode);

        }
        private void Seed(mockDb mockDb)
        {
            var cars = new Cars[]
            {
                new Cars {id = new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"), car = "Ferrari", createdAt = "China", stocks = "500" },
                 new Cars { car = "Bugatti", createdAt = "China", stocks = "500" },
                  new Cars { car = "Porsche", createdAt = "China", stocks = "500" }
            };
            mockDb.Cars.AddRange(cars);
            mockDb.SaveChanges();
        }
    }
}
