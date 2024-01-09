namespace TpFinalPrestamos.WebApi.Domain
{
    public class Loan
    {
        public int Id { get; set; }
        public DateOnly LoanDate { get; set; }
        public DateOnly ReturnDate { get; set; }
        public string Status { get; set; }
        public int PersonId {  get; set; }
        public int ThingId { get; set; }
    }
}
