using Balones.Persistencia;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddDbContext<ContextoBalon>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ClaseConexion"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors("AllowOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
