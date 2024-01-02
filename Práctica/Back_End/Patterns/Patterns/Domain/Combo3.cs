namespace Patterns.Patterns.Domain
{
    public class Combo3 : ICombo
    {
        public string GetCombo()
        {
            return new ComboBuilder()
                    .AddPan()
                    .AddHamburguesa()
                    .AddLechuga()
                    .AddTomate()
                    .AddGaseosa()
                    .Cocinar();
        }
    }
}
