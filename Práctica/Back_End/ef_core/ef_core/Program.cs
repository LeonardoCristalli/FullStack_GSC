using ef_core.DataAccess;
using ef_core.Domain;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

using var context = new UtnDbContext();

int idEstudiante = await Create(context);
await ReadAll(context);

await Update(context, idEstudiante);
await ReadAll(context);

await Delete(context, idEstudiante);
await ReadAll(context);

Console.ReadLine();

static async Task<int> Create(UtnDbContext context)
{
    var estudiante = new Estudiante()
    {
        Nombre = "Juan",
        Apellido = "Perez",
        FechaNacimiento = new DateOnly(2001, 6, 1),
        Legajo = 1234
    };

    context.Add(estudiante);
    await context.SaveChangesAsync();

    return estudiante.Id;
}

static async Task ReadAll(UtnDbContext context)
{
    var estudiantes = await context.Estudiantes.ToListAsync();
    var options = new JsonSerializerOptions()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        WriteIndented = true
    };

    estudiantes.ForEach(e =>
    {
        string json = JsonSerializer.Serialize(e, options);
        Console.WriteLine(json);
    });
}

static async Task Update(UtnDbContext context, int id)
{
    var estudiante = await context.FindAsync<Estudiante>(id);

    estudiante.FechaNacimiento = new DateOnly(2003, 6, 1);

    //context.Update(estudiante); En este caso no es necesario, porque lei el estudiante de la misma instancia del DbContext que es la misma a la cual le pido guardar los cambios.
    await context.SaveChangesAsync();
}

static async Task Delete(UtnDbContext context, int id)
{
    var estudiante = await context.FindAsync<Estudiante>(id);

    context.Remove(estudiante);
    await context.SaveChangesAsync();
}


//context.Dispose(); si tira error no se ejecutaria, por eso es mejor reemplazar el context.Dispose() por el using en la declaracion del context.