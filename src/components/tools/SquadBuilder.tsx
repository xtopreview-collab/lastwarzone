import React, { useState, useMemo } from 'react';
import heroesData from '../../data/heroes.json';

interface Hero {
  id: string;
  name: string;
  type: string;
  rarity: string;
  position: string;
  avatarUrl: string;
}

export default function SquadBuilder() {
  const [squad, setSquad] = useState<(Hero | null)[]>([null, null, null, null, null]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);

  const openHeroSelector = (index: number) => {
    setActiveSlot(index);
    setIsModalOpen(true);
  };

  const selectHero = (hero: Hero) => {
    if (activeSlot !== null) {
      const newSquad = [...squad];
      newSquad[activeSlot] = hero;
      setSquad(newSquad);
    }
    setIsModalOpen(false);
  };

  const removeHero = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSquad = [...squad];
    newSquad[index] = null;
    setSquad(newSquad);
  };

  const synergy = useMemo(() => {
    const types = squad.filter(Boolean).map(h => h!.type);
    const counts: Record<string, number> = { Tank: 0, Aircraft: 0, Missile: 0 };
    types.forEach(t => counts[t]++);
    
    const maxSame = Math.max(...Object.values(counts));
    const uniqueTypes = Object.values(counts).filter(c => c > 0).length;

    let buff = "0%";
    if (maxSame === 5) buff = "20%";
    else if (maxSame === 4) buff = "15%";
    else if (maxSame === 3 && uniqueTypes === 2) buff = "10%";
    else if (maxSame === 3) buff = "5%";

    return { counts, buff };
  }, [squad]);

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-white">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Squad Builder</h2>
          <p className="text-dark-muted text-sm">Xếp đội hình và kiểm tra buff hệ (Synergy)</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-dark-muted mb-1">Synergy Buff</div>
          <div className="text-2xl font-black text-green-400">+{synergy.buff} Stats</div>
        </div>
      </div>

      {/* Slots */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {squad.map((hero, idx) => (
          <div 
            key={idx} 
            onClick={() => openHeroSelector(idx)}
            className={`aspect-[3/4] rounded-lg border-2 border-dashed flex flex-col items-center justify-center cursor-pointer relative overflow-hidden transition-all
              ${hero ? 'border-solid border-dark-accent bg-dark-bg' : 'border-dark-border hover:border-dark-muted'}`}
          >
            {hero ? (
              <>
                {/* Fallback to initials if avatar isn't available yet */}
                <div className="w-16 h-16 rounded-full bg-dark-card flex items-center justify-center text-xl font-bold mb-2 border-2 border-dark-accent">
                  {hero.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="font-bold text-sm text-center">{hero.name}</div>
                <div className={`text-xs px-2 py-0.5 rounded-full mt-1 
                  ${hero.type === 'Tank' ? 'bg-orange-500/20 text-orange-400' : 
                    hero.type === 'Aircraft' ? 'bg-blue-500/20 text-blue-400' : 
                    'bg-purple-500/20 text-purple-400'}`}>
                  {hero.type}
                </div>
                <button 
                  onClick={(e) => removeHero(idx, e)}
                  className="absolute top-1 right-1 w-6 h-6 bg-red-500/80 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-500"
                >
                  ✕
                </button>
              </>
            ) : (
              <div className="text-4xl text-dark-border">+</div>
            )}
            
            {/* Front/Back Label */}
            <div className="absolute bottom-1 right-1 text-[10px] text-dark-muted font-mono opacity-50">
              {idx < 2 ? 'FRONT' : 'BACK'}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-dark-bg border border-dark-border rounded-xl w-full max-w-2xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Chọn Tướng</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-dark-muted hover:text-white">✕</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {heroesData.map(hero => {
                const isSelected = squad.find(h => h?.id === hero.id);
                return (
                  <button 
                    key={hero.id}
                    disabled={!!isSelected}
                    onClick={() => selectHero(hero)}
                    className={`p-3 rounded-lg border flex flex-col items-center transition-all
                      ${isSelected ? 'opacity-30 border-dark-border cursor-not-allowed' : 'border-dark-border hover:border-dark-accent bg-dark-card'}`}
                  >
                    <div className="font-bold text-sm mb-1">{hero.name}</div>
                    <div className="text-xs text-dark-muted">{hero.type}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
