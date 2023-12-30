using Ej_Web_API.DataAccess;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<UtnDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("UtnDb")));

//// Autenticacion
//builder.Services
//    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddJwtBearer(opt => opt.TokenValidationParameters = new TokenValidationParameters()
//    {
//        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ClaveDeSeguridadConUnMínimoDe256Bits")),
//        ValidateAudience = false,
//        ValidateIssuer = false,
//        ValidateIssuerSigningKey = true
//    });

builder.Services
    .AddEndpointsApiExplorer()
    .AddSwaggerGen();

builder.Services.AddControllers();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

//app.UseAuthentication();

app.MapControllers();

//app.MapGet("/", () => "Hello World!");

app.Run();