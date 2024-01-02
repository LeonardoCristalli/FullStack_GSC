namespace Patterns.Patterns.Domain
{
    public class Combo1 : ICombo
    {
        public string GetCombo()
        {
            return new ComboBuilder()
                    .AddPan()
                    .AddHamburguesa()
                    .AddQueso()
                    .AddPepino()
                    .AddGaseosa()
                    .AddPapas()
                    .Cocinar();
        }
    }
}