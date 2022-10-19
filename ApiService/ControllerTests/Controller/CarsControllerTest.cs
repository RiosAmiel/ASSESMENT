using ApiService.Controllers;
using ApiService.Data;
using ApiService.Models;
using FakeItEasy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ControllerTests.Controller
{
    public class CarsControllerTest
    {
        private const string ConnectionString = @"Server=(localdb)\mssqllocaldb;Database=EFTestSample;Trusted_Connection=True";

        private static readonly object _lock = new();
        private static bool _databaseInitialized;

        public CarsControllerTest(mockDb _mockDb)
        {

        }

        [Fact]
        public void CarCont_GetAllCars_returnOk()
        {
            //Arrange
            //create In Memory Database
            var options = new DbContextOptionsBuilder<mockDb>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString());
            //Act
            using (var context = new mockDb(options.Options))
            {
                context.Cars.Add(new Cars
                {
                    id = new Guid(),
                    car = "car1",
                    stocks = "100",
                    createdAt = "China",
                });

                context.Cars.Add(new Cars
                {
                    id = new Guid(),
                    car = "car2",
                    stocks = "200",
                    createdAt = "China",
                });
                context.SaveChanges();
            //Assert
                Assert.NotNull(context);
            }
                
        }
    }
}
