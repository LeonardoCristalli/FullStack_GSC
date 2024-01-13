using Google.Protobuf;
using Grpc.Core;
using TpFinalPrestamos.WebApi.DataAccess;

namespace TpFinalPrestamos.WebApi.Services
{
    public class MyLoanService : LoanService.LoanServiceBase
    {
        private readonly ILogger<MyLoanService> _logger;
        private readonly TpFinalPrestamosDbContext _dbContext;
        public MyLoanService(ILogger<MyLoanService> logger, TpFinalPrestamosDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        public override Task<LoanResponse> MarkAsReturned(LoanRequest request, ServerCallContext context)
        {
            try
            {
                var loan = _dbContext.Loan.FirstOrDefault(l => l.Id == request.LoanId);

                if (loan != null)
                {
                    if (loan.ReturnDate == null)
                    {
                        loan.ReturnDate = DateOnly.FromDateTime(DateTime.Now);
                        _dbContext.SaveChanges();

                        return Task.FromResult(new LoanResponse
                        {
                            Success = true,
                            Message = "El préstamo ha sido marcado como devuelto."
                        });
                    }
                    else
                    {
                        return Task.FromResult(new LoanResponse
                        {
                            Success = false,
                            Message = "El préstamo ya ha sido devuelto anteriormente."
                        });
                    }
                }
                else
                {
                    return Task.FromResult(new LoanResponse
                    {
                        Success = false,
                        Message = "No se pudo encontrar el préstamo con el ID proporcionado."
                    });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error al marca el préstamos como devuelto: {ex.Message}");
                return Task.FromResult(new LoanResponse
                {
                    Success = false,    
                    Message = "Ocurrió un error al procesar la solicitud."
                });
            }
        }
    }
}
