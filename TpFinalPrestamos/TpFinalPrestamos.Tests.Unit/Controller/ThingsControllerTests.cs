using FakeItEasy;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using TpFinalPrestamos.WebApi.Controllers;
using TpFinalPrestamos.WebApi.DataAccess;
using TpFinalPrestamos.WebApi.Domain;

namespace TpFinalPrestamos.Tests.Unit.Controller
{
    public class ThingsControllerTests
    {
        private readonly TpFinalPrestamosDbContext context;
        public ThingsControllerTests ()
        {
            // Create a fake DbContextOptions
            var fakeOptions = new DbContextOptionsBuilder<TpFinalPrestamosDbContext>()
                .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
                .Options;

            context = A.Fake<TpFinalPrestamosDbContext>(x => x.WithArgumentsForConstructor(() => new TpFinalPrestamosDbContext(fakeOptions, true)));
        }

        [Fact]
        public void ThingsController_GetAll_ReturnOK()
        {
            // Arrange 
            var fakeThings = new List<Thing>
            {
                new Thing { Id = 1, Description = "Thing1" },
                new Thing { Id = 2, Description = "Thing2" },
            };

            var fakeDbSet = A.Fake<DbSet<Thing>>(builder => builder.Implements(typeof(IQueryable<Thing>)));
            A.CallTo(() => ((IQueryable<Thing>)fakeDbSet).Provider).Returns(fakeThings.AsQueryable().Provider);
            A.CallTo(() => ((IQueryable<Thing>)fakeDbSet).Expression).Returns(fakeThings.AsQueryable().Expression);
            A.CallTo(() => ((IQueryable<Thing>)fakeDbSet).ElementType).Returns(fakeThings.AsQueryable().ElementType);
            A.CallTo(() => ((IQueryable<Thing>)fakeDbSet).GetEnumerator()).Returns(fakeThings.GetEnumerator());

            A.CallTo(() => context.Thing).Returns(fakeDbSet);

            var controller = new ThingsController(context);

            // Act
            var result = controller.GetAll();

            // Assert
            result.Should().NotBeNull();
        }
    }
}

/* using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using TpFinalPrestamos.WebApi.Controllers;
using TpFinalPrestamos.WebApi.DataAccess;
using TpFinalPrestamos.WebApi.Domain;

namespace TpFinalPrestamos.Tests.Unit
{
    public class ThingsControllerTests
    {
        private readonly Mock<TpFinalPrestamosDbContext> mockContext;
        private readonly ThingsController thingsController;
        private readonly List<Thing> thingsList;
      
        public ThingsControllerTests()
        {
            mockContext = new Mock<TpFinalPrestamosDbContext>(MockBehavior.Default, new DbContextOptions<TpFinalPrestamosDbContext>());
            thingsController = new ThingsController(mockContext.Object);
            thingsList = new List<Thing>
            {
                new Thing { Id = 1, Description = "Thing1" },
                new Thing { Id = 2, Description = "Thing2" },
            };
        }

        private static DbSet<T> MockDbSet<T>(IQueryable<T> data) where T : class
        {
            var mockSet = new Mock<DbSet<T>>();
            mockSet.As<IQueryable<T>>().Setup(m => m.Provider).Returns(data.Provider);
            mockSet.As<IQueryable<T>>().Setup(m => m.Expression).Returns(data.Expression);
            mockSet.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(data.ElementType);
            mockSet.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(data.GetEnumerator());
            return mockSet.Object;
        }

        public class TheMethod_GetAll : ThingsControllerTests
        {
            [Fact]
            public async Task Should_return_a_list_of_things()
            {
                // Arrange
                var thingsQueryable = thingsList.AsQueryable();

                mockContext.Setup(c => c.Thing).Returns(MockDbSet(thingsQueryable));

                // Act  
                var result = await thingsController.GetAll();

                // Assert
                var okResult = Assert.IsType<OkObjectResult>(result.Result);
                var model = Assert.IsAssignableFrom<IEnumerable<Thing>>(okResult.Value);
                Assert.Equal(thingsList, model);
            }
        }

        public class TheMethod_GetById : ThingsControllerTests
        {
            [Fact]
            public async Task Should_return_an_specific_thing()
            {
                // Arrange             
                var thingId = 1;
                var expectedThing = thingsList.FirstOrDefault(t => t.Id == thingId);
                mockContext.Setup(c => c.FindAsync<Thing>(thingId)).ReturnsAsync(expectedThing);

                // Act
                var result = await thingsController.GetById(thingId);

                // Assert
                var okResult = Assert.IsType<OkObjectResult>(result.Result);
                var model = Assert.IsAssignableFrom<Thing>(okResult.Value);
                Assert.Equal(expectedThing, model);
            }

            [Fact]
            public async Task Should_return_NotFound_for_nonexistent_thing()
            {
                // Arrange
                var nonExistentThingId = 999; 
                mockContext.Setup(c => c.FindAsync<Thing>(nonExistentThingId)).ReturnsAsync((Thing)null);

                // Act
                var result = await thingsController.GetById(nonExistentThingId);

                // Assert
                Assert.IsType<NotFoundResult>(result.Result);
            }
        }
    }
} */