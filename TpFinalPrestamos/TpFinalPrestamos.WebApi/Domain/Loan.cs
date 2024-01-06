namespace TpFinalPrestamos.WebApi.Domain
{
    public class Loan
    {
        public int Id { get; set; }
        public DateOnly Date { get; set; }
        public DateOnly ReturnDate { get; set; }
        public string Status { get; set; }
    }
}
