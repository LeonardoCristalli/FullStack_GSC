namespace TpFinalPrestamos.WebApi.Domain
{
    public class Category
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateOnly CreationDate { get; set; }

        public Category()
        {
            CreationDate = DateOnly.FromDateTime(DateTime.Now);
        }
    }
}
