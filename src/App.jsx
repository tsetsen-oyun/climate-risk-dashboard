import React from 'react';

export default function ClimateRiskDashboard() {
const data = {
  Vietnam: {
    current: {
      co2: 3.61,
      claims: 0.67,
      protectionGap: '0.18%',
      risk: 'High',

      insight:
        'Vietnam currently exhibits high climate-driven flood exposure, with rapid urbanisation and typhoon concentration increasing catastrophe vulnerability despite extremely low insurance penetration.',

      recommendation:
        'Increase catastrophe reserves, tighten underwriting in flood-prone urban areas, and explore parametric flood products.',

      summary: {
        floodRisk: 82,
        urbanExposure: 74,
        resilience: 45,
      },
    },

    bau2030: {
      co2: 5.12,
      claims: 0.775,
      protectionGap: '0.18%',
      risk: 'Very High',

      insight:
        'Under the BAU scenario, rising emissions and continued urban concentration are projected to significantly increase flood-related claim severity and pressure catastrophe reinsurance capacity.',

      recommendation:
        'Reprice flood treaties and expand catastrophe reinsurance capacity.',

      summary: {
        floodRisk: 92,
        urbanExposure: 81,
        resilience: 38,
      },
    },

    mitigation2030: {
      co2: 3.82,
      claims: 0.663,
      protectionGap: '0.18%',
      risk: 'Moderate',

      insight:
        'The mitigation pathway stabilises projected claims growth and demonstrates the measurable financial value of climate adaptation and emissions reduction strategies.',

      recommendation:
        'Support resilience investment, flood-defence infrastructure, and maintain risk-based pricing.',

      summary: {
        floodRisk: 68,
        urbanExposure: 75,
        resilience: 62,
      },
    },
  },

  Indonesia: {
    current: {
      co2: 2.35,
      claims: 1.07,
      protectionGap: '4.43%',
      risk: 'High',

      insight:
        'Indonesia shows elevated insurance exposure due to the combination of climate-driven flooding, rapid urbanisation, and structurally high disaster frequency.',

      recommendation:
        'Monitor flood accumulation risk in rapidly urbanising regions.',

      summary: {
        floodRisk: 76,
        urbanExposure: 69,
        resilience: 52,
      },
    },

    bau2030: {
      co2: 2.78,
      claims: 1.127,
      protectionGap: '4.43%',
      risk: 'Very High',

      insight:
        'Under the BAU scenario, accelerating emissions and exposure concentration may increase catastrophe volatility and require stronger pricing adequacy and reserve management.',

      recommendation:
        'Increase premium adequacy assumptions and diversify exposure concentration.',

      summary: {
        floodRisk: 88,
        urbanExposure: 78,
        resilience: 44,
      },
    },

    mitigation2030: {
      co2: 2.354,
      claims: 1.036,
      protectionGap: '4.43%',
      risk: 'Moderate',

      insight:
        'Mitigation measures reduce projected claims growth and improve long-term portfolio resilience by moderating climate-related exposure escalation.',

      recommendation:
        'Expand climate mitigation incentives and maintain catastrophe reserve buffers.',

      summary: {
        floodRisk: 71,
        urbanExposure: 73,
        resilience: 61,
      },
    },
  },
};

  const [country, setCountry] = React.useState('Vietnam');
  const [scenario, setScenario] = React.useState('current');

  const selected = data[country][scenario];

  const riskColor = {
    Moderate: 'bg-yellow-100 text-yellow-800',
    High: 'bg-orange-100 text-orange-800',
    'Very High': 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Climate Risk Decision Dashboard
              </h1>
              <p className="text-slate-600 mt-2">
                CLIMATE RISK TRANSMISSION INTO INSURANCE PORTFOLIO VULNERABILITY
              </p>
            </div>

            <div className="flex gap-4">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="px-4 py-3 rounded-2xl border border-slate-300 bg-white"
              >
                <option>Vietnam</option>
                <option>Indonesia</option>
              </select>

              <select
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
                className="px-4 py-3 rounded-2xl border border-slate-300 bg-white"
              >
                <option value="current">Current</option>
                <option value="bau2030">BAU 2030</option>
                <option value="mitigation2030">Mitigation 2030</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <p className="text-sm text-slate-500">Predicted CO₂ per Capita</p>
            <h2 className="text-3xl font-bold mt-2">{selected.co2}</h2>
            <p className="text-slate-500 mt-1">t CO₂e/capita</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <p className="text-sm text-slate-500">Average Annual Uninsured Loss</p>
            <h2 className="text-3xl font-bold mt-2">${selected.claims}</h2>
            <p className="text-slate-500 mt-1">USD billions</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <p className="text-sm text-slate-500">Protection Gap</p>
            <h2 className="text-3xl font-bold mt-2">{selected.protectionGap}</h2>
            <p className="text-slate-500 mt-1">Insurance coverage ratio</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <p className="text-sm text-slate-500">Risk Level</p>
            <div
              className={`inline-block mt-3 px-4 py-2 rounded-full font-semibold ${riskColor[selected.risk]}`}
            >
              {selected.risk}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">
              Executive Risk Commentary
            </h3>

            <p className="text-slate-700 leading-7">
              {country === 'Vietnam' && scenario === 'current' &&
               'Vietnam currently exhibits high climate-driven flood exposure, with rapid urbanisation and typhoon concentration increasing catastrophe vulnerability despite extremely low insurance penetration.'}

              {country === 'Vietnam' && scenario === 'bau2030' &&
                'Under the BAU scenario, rising emissions and continued urban concentration are projected to significantly increase flood-related claim severity and pressure catastrophe reinsurance capacity.'}

              {country === 'Vietnam' && scenario === 'mitigation2030' &&
                'The mitigation pathway stabilises projected claims growth and demonstrates the measurable financial value of climate adaptation and emissions reduction strategies.'}

              {country === 'Indonesia' && scenario === 'current' &&
               'Indonesia shows elevated insurance exposure due to the combination of climate-driven flooding, rapid urbanisation, and structurally high disaster frequency.'}

              {country === 'Indonesia' && scenario === 'bau2030' &&
                'Under the BAU scenario, accelerating emissions and exposure concentration may increase catastrophe volatility and require stronger pricing adequacy and reserve management.'}

              {country === 'Indonesia' && scenario === 'mitigation2030' &&
                'Mitigation measures reduce projected claims growth and improve long-term portfolio resilience by moderating climate-related exposure escalation.'}
            </p>

            <div className="mt-6 p-5 rounded-2xl bg-slate-100 border border-slate-200">
              <p className="text-sm font-semibold text-slate-500 mb-2">
                Recommended Reinsurance Action
              </p>
              <p className="text-slate-800 leading-7">
                {selected.recommendation}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">
              Illustrative Portfolio Risk Indicators
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Relative indicators derived from report findings and scenario analysis.
            </p>

            <div className="space-y-5">
<div>
  <div className="flex justify-between mb-2">
    <span className="text-slate-600">Flood Risk Exposure</span>
    <span className="font-semibold">
      {selected.summary.floodRisk}%
    </span>
  </div>

  <div className="w-full bg-slate-200 rounded-full h-4">
    <div
      className="bg-red-500 h-4 rounded-full"
      style={{ width: `${selected.summary.floodRisk}%` }}
    />
  </div>
</div>

<div>
  <div className="flex justify-between mb-2">
    <span className="text-slate-600">
      Urban Exposure Concentration
    </span>

    <span className="font-semibold">
      {selected.summary.urbanExposure}%
    </span>
  </div>

  <div className="w-full bg-slate-200 rounded-full h-4">
    <div
      className="bg-orange-500 h-4 rounded-full"
      style={{ width: `${selected.summary.urbanExposure}%` }}
    />
  </div>
</div>
<div>
  <div className="flex justify-between mb-2">
    <span className="text-slate-600">
      Climate Resilience
    </span>

    <span className="font-semibold">
      {selected.summary.resilience}%
    </span>
  </div>

  <div className="w-full bg-slate-200 rounded-full h-4">
    <div
      className="bg-yellow-500 h-4 rounded-full"
      style={{ width: `${selected.summary.resilience}%` }}
    />
  </div>
</div>
            </div>

            <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-5">
              <h4 className="font-bold text-blue-900 mb-2">
                Policy Alignment
              </h4>
              <p className="text-blue-800 leading-7 text-sm">
                This framework aligns with the Paris Agreement and ASEAN climate resilience strategies by supporting climate-aware underwriting and long-term financial resilience planning.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8">
          <h3 className="text-2xl font-bold mb-4">
            Board-Level Recommendation
          </h3>

          <p className="text-slate-700 leading-8 text-lg">
            Under the selected scenario, projected catastrophe-related claim severity suggests the need for dynamic premium repricing, enhanced catastrophe reserves, and geographically diversified reinsurance exposure management.
          </p>
        </div>
      </div>
    </div>
  );
}
