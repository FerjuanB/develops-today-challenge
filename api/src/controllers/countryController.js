const axios = require('axios');

const getAvailableCountries = async (req, res) => {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching available countries' });
  }
};

const getCountryInfo = async (req, res) => {
  const countryCode = req.params.countryCode;
  
  try {
    // 1. Obtener fronteras y nombres del país
    const bordersResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
    const { commonName, officialName, borders } = bordersResponse.data;
    
    // 2. Obtener datos de población histórica
    const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
      country: commonName
    });
    const populationData = populationResponse.data.data.populationCounts;
    
    // 3. Obtener URL de la bandera
    const flagResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
      country: commonName
    });
    const flagUrl = flagResponse.data.data.flag;
    
    // Respuesta final con todos los datos
    res.json({
      commonName,
      officialName,
      borders,
      populationData,
      flagUrl
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching country information.' });
  }
};


module.exports = {
  getAvailableCountries,
  getCountryInfo
}