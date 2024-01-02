namespace Patterns.Patterns.Domain
{
    public class Combo4 : ICombo
    {
        public string GetCombo()
        {
            return new ComboBuilder()
                    .AddPan()
                    .AddHamburguesa()
                    .AddLechuga()
                    .AddTomate()
                    .Cocinar();
        }
    }
}
