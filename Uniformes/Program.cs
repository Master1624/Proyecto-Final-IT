using Microsoft.EntityFrameworkCore;
using Uniformes.Persistencia;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddDbContext<ContextoUniforme>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("ClaseConexion"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors("AllowOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
