using System;
using System.Collections.Generic;
using System.Linq;
using Vue2Spa.Models;

namespace Vue2Spa.Providers {
    public interface IWeatherProvider {
        List<WeatherForecast> GetForecasts();
    }
    public class WeatherProvider : IWeatherProvider {
        private string[] Summaries = new [] {
            "Freezing",
            "Bracing",
            "Chilly",
            "Cool",
            "Mild",
            "Warm",
            "Balmy",
            "Hot",
            "Sweltering",
            "Scorching"
        };

        private List<WeatherForecast> WeatherForecasts { get; set; }

        public WeatherProvider() {
            Initialize(50);
        }

        private void Initialize(int quantity) {
            var rng = new Random();
            WeatherForecasts = Enumerable.Range(1, quantity).Select(index => new WeatherForecast {
                DateFormatted = DateTime.Now.AddDays(index),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[rng.Next(Summaries.Length)]
            }).ToList();
        }

        public List<WeatherForecast> GetForecasts() {
            return WeatherForecasts;
        }
    }
}