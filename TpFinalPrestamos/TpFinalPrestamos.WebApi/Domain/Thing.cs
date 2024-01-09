﻿namespace TpFinalPrestamos.WebApi.Domain
{
    public class Thing
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateOnly CreationDate { get; set; }
        public int CategoryId { get; set; }
        public List<Loan> Loans {  get; set; }   
    }
}
