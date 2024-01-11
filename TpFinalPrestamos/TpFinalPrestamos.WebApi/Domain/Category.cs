namespace TpFinalPrestamos.WebApi.Domain
{
    public class Category
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateOnly CreationDate { get; set; }
        public ICollection<Thing> Things { get; } = new HashSet<Thing>();
        public Category()
        {
            CreationDate = DateOnly.FromDateTime(DateTime.Now);
        }
    }
}
