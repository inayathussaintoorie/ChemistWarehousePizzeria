using ChemistWarehousePizzeria.Models;
using ChemistWarehousePizzeria.Models.Dtos;

namespace ChemistWarehousePizzeria.Repositories
{
    public interface IPizzeriaRepository
    {
        Task<IEnumerable<Pizzeria>> GetPizzeriasAsync();
        Task<Pizzeria?> GetPizzeriaByIdAsync(int pizzeriaId);
    }

}
