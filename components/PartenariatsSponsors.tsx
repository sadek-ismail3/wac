'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink, Building, Award, Globe } from 'lucide-react';
import Image from 'next/image';

import botoloa from '@/assets/botola-pro.png'
import ocp from '@/assets/ocp.webp'
import royal from '@/assets/Royal Air Maroc.png'
import snrt from '@/assets/SNRT.jpg'

const PartenariatsSponsors = () => {
const [categorieFiltree, setCategorieFiltree] = useState('tous');

const sponsors = [
    {
        id: 1,
        nom: "Botola Pro",
        categorie: "officiel",
        logo: botoloa.src,
        description: "Partenaire officiel de la ligue professionnelle marocaine",
        niveau: "Platine",
        depuis: "1915"
    },
    {
        id: 2,
        nom: "OCP Group",
        categorie: "principal",
        logo: ocp.src,
        description: "Sponsor principal maillot",
        niveau: "Or",
        depuis: "2020"
    },
    {
        id: 3,
        nom: "Royal Air Maroc",
        categorie: "transport",
        logo: royal.src,
        description: "Transporteur officiel du club",
        niveau: "Or",
        depuis: "2019"
    },
    {
        id: 4,
        nom: "SNRT",
        categorie: "media",
        logo: snrt.src,
        description: "Partenaire média officiel",
        niveau: "Argent",
        depuis: "2021"
    }
];

const categories = [
    { id: 'tous', nom: 'Tous les partenaires' },
    { id: 'officiel', nom: 'Partenaires Officiels' },
    { id: 'principal', nom: 'Sponsors Principaux' },
    { id: 'transport', nom: 'Transport' },
    { id: 'media', nom: 'Médias' }
];

const niveauxCouleurs = {
    'Platine': 'bg-gradient-to-r from-gray-200 to-gray-400',
    'Or': 'bg-gradient-to-r from-yellow-200 to-yellow-400',
    'Argent': 'bg-gradient-to-r from-gray-300 to-gray-500'
};

const sponsorsFiltres = categorieFiltree === 'tous' 
    ? sponsors 
    : sponsors.filter(s => s.categorie === categorieFiltree);

  return (
    <div className="max-w-6xl py-12 mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Partenaires & Sponsors</h1>
        <p className="text-lg text-gray-600 mb-8">
          Fiers partenaires du Wydad Athletic Club dans notre quête d'excellence
        </p>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategorieFiltree(cat.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                categorieFiltree === cat.id
                  ? 'bg-wacred text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {cat.nom}
            </button>
          ))}
        </div>
      </div>

      {/* Grille des sponsors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {sponsorsFiltres.map((sponsor) => (
          <Card key={sponsor.id} className="group hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <Image
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.nom}`}
                    width={500}
                    height={500}
                    className="h-20 object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{sponsor.nom}</h3>
                  <p className="text-gray-600 mb-4">{sponsor.description}</p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Partenaire depuis {sponsor.depuis}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gray-500" />
                    <span className={`text-sm px-3 py-1 rounded-full ${niveauxCouleurs[sponsor.niveau]}`}>
                      Niveau {sponsor.niveau}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors">
                  <span>En savoir plus</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section Devenir Partenaire */}
      

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-3xl font-bold text-wacred mb-2">30+</h3>
            <p className="text-gray-600">Partenaires Actifs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-3xl font-bold text-wacred mb-2">109</h3>
            <p className="text-gray-600">Années d'Histoire</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-3xl font-bold text-wacred mb-2">15+</h3>
            <p className="text-gray-600">Pays Représentés</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartenariatsSponsors;