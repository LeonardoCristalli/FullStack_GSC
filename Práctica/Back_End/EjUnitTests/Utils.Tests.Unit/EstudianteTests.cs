using FluentAssertions;

namespace Utils.Tests.Unit
{
    public class EstudianteTests
    {
        public class TheMethod_CalcularEdad : EstudianteTests
        {
            [Theory]
            [InlineData("1995-05-03", "2024-01-02", 28)]
            [InlineData("2000-05-03", "2024-01-02", 23)]
            [InlineData("2000-12-08", "2024-01-02", 23)]
            [InlineData("1996-02-29", "2024-01-02", 27)]
            public void Should_calculate_correctly(string fechaNacimiento, string fechaEdad, int expected)
            {
                // arrange
                var estudiante = new Estudiante()
                {
                    FechaNacimiento = DateOnly.ParseExact(fechaNacimiento, "yyyy-MM-dd")
                };

                // act
                int actual = estudiante.CalcularEdad(DateOnly.ParseExact(fechaEdad, "yyyy-MM-dd"));

                // assert
                actual.Should().Be(expected);
            }
        }
    }
}
