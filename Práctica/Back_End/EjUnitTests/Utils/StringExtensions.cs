namespace Utils
{
    public static class StringExtensions
    {
        public static int CountCharOccurrences(this string sentence, char @char)
        {
            //int count = 0;

            //foreach (char c in sentence)
            //{
            //    if (c.ToString().ToLower() == @char.ToString().ToLower())                
            //        count++;
            //}

            //return count;

            return sentence.Count(c => c.ToString().ToLower() == @char.ToString().ToLower());
        }
    }
}
