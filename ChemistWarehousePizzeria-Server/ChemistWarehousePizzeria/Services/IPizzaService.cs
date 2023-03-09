﻿using ChemistWarehousePizzeria.Models;
using ChemistWarehousePizzeria.Models.Dtos;

namespace ChemistWarehousePizzeria.Services
{
    public interface IPizzaService
    {
        Task<PizzaDto?> GetPizzaByIdAsync(int id);
        Task UpdatePizzaAsync(PizzaDto pizza);
        Task<List<Pizza>> GetPizzasAsync();
    }

}
