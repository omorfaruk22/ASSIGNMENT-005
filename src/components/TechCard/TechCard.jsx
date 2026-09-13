import React from 'react';

export default function TechCard({ tech, onAdd, isAdded }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 flex items-center justify-center bg-slate-900/50 rounded-xl p-1.5">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {badge}
          </span>
        </div>

        <h3 className="text-base font-bold text-white mb-1">{name}</h3>
        <p className="text-slate-400 text-xs mb-4 line-clamp-3 leading-relaxed">{description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4 pt-2 border-t border-slate-700/30">
          <span>{category}</span>
          <span>{difficulty}</span>
          <span className="text-amber-400 font-medium flex items-center gap-0.5">
            ★ {rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl font-medium text-xs transition-all ${
            isAdded
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
              : 'bg-emerald-600 text-white hover:bg-emerald-500 active:scale-[0.98]'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}