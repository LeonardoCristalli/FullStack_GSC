namespace TpFinalPrestamos.WebApi.Domain
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailAdress { get; set; }
        public string PhoneNumber { get; set; }
        public ICollection<Loan> Loans { get; } = new HashSet<Loan>();
    }
}
