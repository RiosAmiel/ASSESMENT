using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;

namespace ApiTest
{
    [TestClass]
    public class ApiTests
    {
        [TestMethod]
        public void Default()
        {
            var webAppFactory = new WebApplicationFactory<Program>();
            var httpClient = webAppFactory.CreateDefaultClient(); 
        }
    }
}