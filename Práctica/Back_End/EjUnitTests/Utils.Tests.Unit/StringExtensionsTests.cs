using FluentAssertions;

namespace Utils.Tests.Unit
{
    public class StringExtensionsTests
    {
        public class TheMethod_CountCharOccurrences : StringExtensionsTests
        {
            [Theory]
            [InlineData('l', 2)]
            [InlineData('e', 0)]
            [InlineData('o', 1)] 
            [InlineData(' ', 3)]
            [InlineData('%', 0)]
            public void Should_return_count_of_char_occurrences(char @char, int expected)
            {
                // arrange
                const string sentence = "Curso full stack GSC+UTN";

                // act
                int actual = sentence.CountCharOccurrences(@char);

                // assert
                //Assert.Equal(expected, actual);
                actual.Should().Be(expected);
            }
        }        
    }
}