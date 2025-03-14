export default async function handler(req, res) {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: "Nama kota diperlukan" });
    }

    try {
        console.log(`🔍 Mencari koordinat untuk kota: ${city}`);

        // Ambil koordinat kota
        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );
        const geoData = await geoResponse.json();
        console.log("📍 Data Geocoding:", geoData);

        if (!geoData.results || geoData.results.length === 0) {
            return res.status(404).json({ error: "Kota tidak ditemukan" });
        }

        const { latitude, longitude } = geoData.results[0];

        // Ambil data cuaca berdasarkan koordinat
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        const weatherData = await weatherResponse.json();
        console.log("🌦️ Data Cuaca:", weatherData);

        res.status(200).json(weatherData);
    } catch (error) {
        console.error("❌ Error fetching weather data:", error);
        res.status(500).json({ error: "Gagal mengambil data cuaca" });
    }
}
