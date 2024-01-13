using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using TpFinalPrestamos.WebApi.DataAccess;
using TpFinalPrestamos.WebApi.Domain;
using TpFinalPrestamos.WebApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TpFinalPrestamosDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("TpFinalPrestamosDb")));

// Auntenticación 
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt => opt.TokenValidationParameters = new TokenValidationParameters()
    {
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ClaveDeSeguridadConUnMínimoDe256Bits")),
        ValidateAudience = false,
        ValidateIssuer = false,
        ValidateIssuerSigningKey = true
    });

builder.Services.AddGrpcReflection();
builder.Services.AddGrpc();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "TpFinalPrestamos.WebApi", Version = "v1" });
});

builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        var dbContext = services.GetRequiredService<TpFinalPrestamosDbContext>();

        dbContext.Database.Migrate();

        if (!dbContext.Category.Any())
        {
            var defaultCategories = new List<Category>
            {
                new Category { Description = "Dinero"},
                new Category { Description = "Electrónicos"},
                new Category { Description = "Herramientas"},
                new Category { Description = "Libros"},
                new Category { Description = "Ropa"},
                new Category { Description = "Cocina"},
                new Category { Description = "Varios"},
            };

            dbContext.Category.AddRange(defaultCategories);
            dbContext.SaveChanges();
        }
    }

    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "TpFinalPrestamos.WebApi v1");
        c.RoutePrefix = string.Empty;
    });
}
else
{
    app.UseExceptionHandler("/Home/error");
    app.UseHsts();
}

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.MapGrpcReflectionService();
app.MapGrpcService<MyLoanService>();

//app.MapGet("/", () => "Hello World!");

app.Run();