using ApiService.Controllers;
using ApiService.Data;
using ApiService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ControllerTests.Controller
{


    public class CarsControllerTest
    {
        [Fact(DisplayName = "GetAllCars Method")]

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
            var controller = new CarsController(context);
            //Act
            var actionResult = await controller.GetAllCars();

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            var model = Assert.IsAssignableFrom<List<Cars>>(okResult.Value);
            Assert.Equal(200, okResult.StatusCode);
            Assert.Equal(3, model.Count);

        }
        [Fact(DisplayName = "GetCarById Method")]
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
            var model = Assert.IsAssignableFrom<Cars>(okResult.Value);
            Assert.Equal("Ferrari", model.car);
            Assert.Equal(200, okResult.StatusCode);
        }
        [Fact(DisplayName = "AddCar Method")]
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
            var model = Assert.IsAssignableFrom<Cars>(okResult.Value);
            Assert.Equal("Honda", model.car);
            Assert.Equal(201, okResult.StatusCode);
        }
        [Fact(DisplayName = "UpdateCar Method")]
        public async Task UpdateCar_returnOk()
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
            var actionResult = await controller.UpdateCar(new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"), car);

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            var model = Assert.IsAssignableFrom<Cars>(okResult.Value);
            Assert.Equal("Honda", model.car);
            Assert.Equal(200, okResult.StatusCode);
        }
        [Fact(DisplayName = "DeleteCar Method")]
        public async Task DeleteCar_returnOk()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);
            var controller = new CarsController(context);
            //Act
            var actionResult = await controller.DeleteCar(new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"));

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            var model = Assert.IsAssignableFrom<Cars>(okResult.Value);
            Assert.Equal("Honda", model.car);
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
