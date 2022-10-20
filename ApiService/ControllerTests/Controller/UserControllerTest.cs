using ApiService.Controllers;
using ApiService.Data;
using ApiService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControllerTests.Controller
{
    public class UserControllerTest
    {
        [Fact]
        public async Task GetAllUser_returnOk()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);

            Seed(context);
            var controller = new UserController(context);
            //Act
            var actionResult = await controller.GetAllUsers();

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            Assert.Equal(200, okResult.StatusCode);
            
        }
        [Fact]
        public async Task GetUserbyid_returnOk()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);

            Seed(context);
            var controller = new UserController(context);
            //Act
            var actionResult = await controller.GetUser(new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"));

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            Assert.Equal(200, okResult.StatusCode);
        }
        [Fact]
        public async Task AddUser_returnCreatedAtAction()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);

            Seed(context);
            var controller = new UserController(context);
            //Act
            var user = new Users()
            {
                age = "40",
                birthplace = "Olongapo",
                email = "test@test.com",
                fullname = "Charles Umbina",
                occupation = "Call Center",
                password = "12345678"
            };
            var actionResult = await controller.AddUser(user);

            //Assert
            var okResult = Assert.IsType<CreatedAtActionResult>(actionResult);
            Assert.Equal(201, okResult.StatusCode);
        }
        [Fact]
        public async Task UpdateUser_returnOk()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);

            Seed(context);
            var controller = new UserController(context);
            //Act
            var user = new Users()
            {
                age = "40",
                birthplace = "Olongapo",
                email = "test@test.com",
                fullname = "Charles Umbina",
                occupation = "Call Center",
                password = "12345678"
            };
            var actionResult = await controller.UpdateUser(new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"), user);

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            Assert.Equal(200, okResult.StatusCode);
        }
        [Fact]
        public async Task DeleteUser_returnOk()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<mockDb>()
                .UseInMemoryDatabase(databaseName: "mockDB")
                .Options;

            var context = new mockDb(options);
            Seed(context);
            var controller = new UserController(context);
            //Act
            var actionResult = await controller.DeleteUser(new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"));

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(actionResult);
            Assert.Equal(200, okResult.StatusCode);
        }
        private void Seed(mockDb mockDb)
        {
            var users = new Users[]
            {
                new Users {id = new Guid("ae90eaec-b67e-4332-82ac-dee4f9fa662b"),
                    age = "10",
                    birthplace = "Olongapo",
                    email = "test@test.com",
                    fullname = "Amiel Rios",
                    occupation = "Developer",
                    password = "12345678"},

                new Users {
                    age = "20",
                    birthplace = "Olongapo",
                    email = "test@test.com",
                    fullname = "John Carlo",
                    occupation = "Developer",
                    password = "12345678"},

                new Users {
                    age = "30",
                    birthplace = "Olongapo",
                    email = "test@test.com",
                    fullname = "Gabriel Diano",
                    occupation = "Developer",
                    password = "12345678"}
            };
            mockDb.Users.AddRange(users);
            mockDb.SaveChanges();
        }
    }
}
