import React, { useState } from "react";

const weatherDescriptions = {
    0: "Cerah",
    1: "Sebagian cerah",
    2: "Berawan sedikit",
    3: "Berawan",
    45: "Kabut",
    48: "Kabut beku",
    51: "Gerimis ringan",
    53: "Gerimis sedang",
    55: "Gerimis lebat",
    61: "Hujan ringan",
    63: "Hujan sedang",
    65: "Hujan lebat",
    71: "Salju ringan",
    73: "Salju sedang",
    75: "Salju lebat",
    80: "Hujan lokal ringan",
    81: "Hujan lokal sedang",
    82: "Hujan lokal lebat",
    95: "Badai petir ringan",
    96: "Badai petir dengan hujan es",
    99: "Badai petir dengan hujan es",
};

const Weather = () => {
    const [city, setCity] = useState("Malang");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        try {
            setError("");
            console.log(`🔍 Mencari cuaca untuk kota: ${city}`);

            const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
            const data = await response.json();
            console.log("🌍 API Response:", data);

            if (data.error) {
                setError(data.error);
                setWeather(null);
            } else {
                setWeather(data.current_weather);
            }
        } catch (error) {
            console.error("❌ Fetch error:", error);
            setError("Terjadi kesalahan saat mengambil data.");
        }
    };

    return (
        <div>
            <h1>Cuaca Saat Ini</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Masukkan nama kota"
            />
            <button onClick={fetchWeather}>Cari Cuaca</button>

            {error && <p style={{ color: "red" }}>❌ {error}</p>}

            {weather ? (
                <div>
                    <p><strong>Suhu:</strong> {weather.temperature}°C</p>
                    <p><strong>Kecepatan Angin:</strong> {weather.windspeed} km/jam</p>
                    <p><strong>Kondisi:</strong> {weatherDescriptions[weather.weathercode] || "Tidak diketahui"}</p>
                </div>
            ) : (
                <p>Masukkan nama kota untuk melihat cuaca.</p>
            )}
        </div>
    );
};

export default Weather;
