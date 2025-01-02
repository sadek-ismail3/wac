import React from 'react';
import { Trophy, Star, Medal, Users } from 'lucide-react';

const WydadLegends = () => {
  const trophies = {
    national: [
      { name: 'Botola', count: 22, years: '1948-2022' },
      { name: 'Coupe du Trône', count: 9, years: '1970-2001' },
      { name: 'Coupe de l\'Indépendance', count: 1, years: '1956' }
    ],
    international: [
      { name: 'CAF Champions League', count: 3, years: '1992, 2017, 2022' },
      { name: 'Coupe de la Confédération Africaine', count: 1, years: '2002' },
      { name: 'Supercoupe Africaine', count: 1, years: '2018' },
      { name: 'Coupe Afro-Asiatique', count: 1, years: '1993' },
      { name: 'Ligue des Champions Arabe', count: 1, years: '1989' }
    ]
  };

  const legends = [
    { name: 'Moussa Ndaw', position: 'Attaquant' },
    { name: 'Abdelmajid Shaita', position: 'Milieu' },
    { name: 'Fakhreddine Rajhi', position: 'Défenseur' },
    { name: 'Badr El Kaddouri', position: 'Défenseur' },
    { name: 'Noureddine Naybet', position: 'Défenseur' },
    { name: 'Aziz Bouderbala', position: 'Milieu' },
    { name: 'Yassine Bounou', position: 'Gardien' },
    { name: 'Fabrice Ondama', position: 'Attaquant' }
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 py-12 space-y-8  ">
      <h1 className="text-4xl font-bold text-wac text-center mb-12">
        Wydad Athletic Club
        <span className="block text-xl text-gray-600 mt-2">Les Légendes et l'Histoire</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8 ">
        {/* Trophées Nationaux */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="text-wacred" />
            <h2 className="text-2xl font-bold">Trophées Nationaux</h2>
          </div>
          <div className="space-y-4">
            {trophies.national.map((trophy, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">{trophy.name}</h3>
                  <p className="text-sm text-gray-600">{trophy.years}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl text-wacred">{trophy.count}</span>
                  <Medal className="text-wac" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trophées Internationaux */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <Star className="text-wacred" />
            <h2 className="text-2xl font-bold">Trophées Internationaux</h2>
          </div>
          <div className="space-y-4">
            {trophies.international.map((trophy, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">{trophy.name}</h3>
                  <p className="text-sm text-gray-600">{trophy.years}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl text-wacred">{trophy.count}</span>
                  <Medal className="text-wac" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Légendes */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Users className="text-wacred" />
            <h2 className="text-2xl font-bold">Légendes du Club</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {legends.map((legend, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                <h3 className="font-semibold">{legend.name}</h3>
                <p className="text-sm text-gray-600">{legend.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-wacred">1937</div>
          <p className="text-gray-600">Année de fondation</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-wacred">32</div>
          <p className="text-gray-600">Titres Nationaux</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-wacred">15</div>
          <p className="text-gray-600">Titres Internationaux</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-wacred">85+</div>
          <p className="text-gray-600">Années d'histoire</p>
        </div>
      </div>
    </section>
  );
};

export default WydadLegends;